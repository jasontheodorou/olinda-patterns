import { test, expect } from '@playwright/test'
import AxeBuilder from '@axe-core/playwright'

const AXE_ROUTES = [
  '/',
  '/examples',
  '/examples/large-heading',
  '/examples/expanding-panel',
  '/collections/quiet',
  '/styles/editorial',
  '/use',
  '/about',
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
