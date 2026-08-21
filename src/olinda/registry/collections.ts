import { COLLECTIONS, type Collection, type OlindaPattern } from './types'

export function collectionsFrom(
  patterns: OlindaPattern[],
): Record<Collection, OlindaPattern[]> {
  const out = Object.fromEntries(
    COLLECTIONS.map(c => [c, [] as OlindaPattern[]]),
  ) as Record<Collection, OlindaPattern[]>

  for (const p of patterns) {
    for (const c of p.collections) {
      if (out[c]) out[c].push(p)
    }
  }
  return out
}
