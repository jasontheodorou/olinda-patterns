import { test, expect } from '@playwright/test'

test.use({ reducedMotion: 'reduce' })

const READY_IDS = [
  'large-heading',
  'text-reveal',
  'image-reveal',
  'moving-image',
  'scroll-story',
  'image-zoom',
  'shuffle',
  'marquee',
  'magnetic-object',
  'expanding-panel',
]

for (const id of READY_IDS) {
  test(`Ready pattern "${id}" shows content under reduced motion`, async ({ page }) => {
    await page.goto(`/examples/${id}`)
    await expect(page.locator('h1')).toBeVisible()
    const demo = page.locator('.v-pp__demo')
    await expect(demo).toBeVisible()
    await expect(demo).not.toBeEmpty()
  })
}
