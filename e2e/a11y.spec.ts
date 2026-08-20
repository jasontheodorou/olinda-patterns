import { test, expect } from '@playwright/test'
import AxeBuilder from '@axe-core/playwright'

const AXE_ROUTES = [
  '/',
  '/build2/examples',
  '/build2/examples/large-heading',
  '/build2/examples/expanding-panel',
  '/build2/collections/quiet',
  '/build2/styles/editorial',
  '/build2/use',
  '/build2/about',
]

for (const route of AXE_ROUTES) {
  test(`axe scan: ${route}`, async ({ page }) => {
    await page.goto(route)
    const results = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
      .analyze()

    expect(results.violations, JSON.stringify(results.violations, null, 2)).toEqual([])
  })
}
