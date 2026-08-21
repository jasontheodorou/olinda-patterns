import { COLLECTIONS, type Collection, type TaroccoPattern } from './types'

export function collectionsFrom(
  patterns: TaroccoPattern[],
): Record<Collection, TaroccoPattern[]> {
  const out = Object.fromEntries(
    COLLECTIONS.map(c => [c, [] as TaroccoPattern[]]),
  ) as Record<Collection, TaroccoPattern[]>

  for (const p of patterns) {
    for (const c of p.collections) {
      if (out[c]) out[c].push(p)
    }
  }
  return out
}
