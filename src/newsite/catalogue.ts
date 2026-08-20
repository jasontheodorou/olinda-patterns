import { PATTERN_METADATA } from '../valencia/registry/metadata'
import { LEGACY_PATTERN_METADATA } from '../legacy/patternMetadata'

export type Build = 'build1' | 'build2'

export type CatalogueEntry = {
  id: string
  name: string
  description: string
  build: Build
  buildLabel: string
  tags: string[]
  status: 'draft' | 'experimental' | 'ready'
  href: string
}

const build1Entries: CatalogueEntry[] = LEGACY_PATTERN_METADATA.map(p => ({
  id: `build1-${p.id}`,
  name: p.title,
  description: p.description,
  build: 'build1',
  buildLabel: 'Build 01',
  tags: [p.category, ...p.tags],
  status: p.status,
  href: `/build1/${p.id}`,
}))

const build2Entries: CatalogueEntry[] = PATTERN_METADATA.map(p => ({
  id: `build2-${p.id}`,
  name: p.name,
  description: p.description,
  build: 'build2',
  buildLabel: 'Build 02',
  tags: [...p.collections.map(c => c.toLowerCase()), 'motion', ...p.styles],
  status: p.status,
  href: `/build2/examples/${p.id}`,
}))

export const CATALOGUE: CatalogueEntry[] = [...build1Entries, ...build2Entries]

export const FILTERS: { label: string; tag: string }[] = [
  { label: 'Foundations', tag: 'foundations' },
  { label: 'Content',     tag: 'content' },
  { label: 'Forms',       tag: 'forms' },
  { label: 'Navigation',  tag: 'navigation' },
  { label: 'Motion',      tag: 'motion' },
  { label: 'Editorial',   tag: 'editorial' },
  { label: 'Quiet',       tag: 'quiet' },
  { label: 'Clear',       tag: 'clear' },
  { label: 'Bold',        tag: 'bold' },
  { label: 'Playful',     tag: 'playful' },
  { label: 'Experimental', tag: 'experimental' },
]

export function filterCatalogue(query: string, tag: string | null, build: Build | null): CatalogueEntry[] {
  const q = query.trim().toLowerCase()
  return CATALOGUE.filter(entry => {
    if (build && entry.build !== build) return false
    if (tag && !entry.tags.includes(tag)) return false
    if (q && !entry.name.toLowerCase().includes(q) && !entry.description.toLowerCase().includes(q)) return false
    return true
  })
}
