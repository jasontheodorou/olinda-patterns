import { ExpandingPlane } from './ExpandingPlane'

export function ExpandingPlaneDemo() {
  return (
    <div style={{ padding: '48px 32px' }}>
      <ExpandingPlane
        style="clear"
        items={[
          {
            id: 'a',
            label: 'What is Valencia?',
            body: 'A small pattern library for public-sector design work — Motion for React under a designer-friendly surface.',
          },
          {
            id: 'b',
            label: 'How do I use it?',
            body: 'Pick a pattern, adjust the human controls, and copy the "Use with Claude" prompt into another project.',
          },
          {
            id: 'c',
            label: 'Can I theme it?',
            body: 'Yes — every pattern reads --v-* CSS variables. Change the theme, keep the motion.',
          },
        ]}
      />
    </div>
  )
}
