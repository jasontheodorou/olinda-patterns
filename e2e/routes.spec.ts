import { test, expect } from '@playwright/test'

const ROUTES = [
  { path: '/',                         must: /Valencia/ },
  { path: '/build2/examples',                 must: /Examples/ },
  { path: '/build2/examples/large-heading',   must: /Large heading/i },
  { path: '/build2/collections/editorial',    must: /Editorial/i },
  { path: '/build2/styles',                   must: /Styles/i },
  { path: '/build2/styles/quiet',             must: /Quiet/i },
  { path: '/build2/use',                      must: /Use/i },
  { path: '/build2/about',                    must: /About/i },
]

for (const r of ROUTES) {
  test(`renders ${r.path} on direct load`, async ({ page }) => {
    await page.goto(r.path)
    await expect(page.locator('body')).toContainText(r.must)
  })
}

test('back/forward navigation works', async ({ page }) => {
  await page.goto('/')
  await page.goto('/build2/examples')
  await page.goto('/build2/about')
  await page.goBack()
  await expect(page).toHaveURL(/\/build2\/examples/)
  await page.goBack()
  await expect(page).toHaveURL('http://localhost:4173/')
  await page.goForward()
  await expect(page).toHaveURL(/\/build2\/examples/)
})

test('/build1 loads lazily and renders the old shell', async ({ page }) => {
  await page.goto('/build1')
  await expect(page.locator('body')).toContainText(/pattern library/i)
})
