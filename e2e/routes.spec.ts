import { test, expect } from '@playwright/test'

const ROUTES = [
  { path: '/',                         must: /Valencia/ },
  { path: '/examples',                 must: /Examples/ },
  { path: '/examples/large-heading',   must: /Large heading/i },
  { path: '/collections/editorial',    must: /Editorial/i },
  { path: '/styles',                   must: /Styles/i },
  { path: '/styles/quiet',             must: /Quiet/i },
  { path: '/use',                      must: /Use/i },
  { path: '/about',                    must: /About/i },
]

for (const r of ROUTES) {
  test(`renders ${r.path} on direct load`, async ({ page }) => {
    await page.goto(r.path)
    await expect(page.locator('body')).toContainText(r.must)
  })
}

test('back/forward navigation works', async ({ page }) => {
  await page.goto('/')
  await page.goto('/examples')
  await page.goto('/about')
  await page.goBack()
  await expect(page).toHaveURL(/\/examples/)
  await page.goBack()
  await expect(page).toHaveURL('http://localhost:4173/')
  await page.goForward()
  await expect(page).toHaveURL(/\/examples/)
})

test('/legacy loads lazily and renders the old shell', async ({ page }) => {
  await page.goto('/legacy')
  await expect(page.locator('body')).toContainText(/pattern library/i)
})
