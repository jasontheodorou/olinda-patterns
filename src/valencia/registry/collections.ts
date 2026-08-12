import { COLLECTIONS, type Collection, type ValenciaPattern } from './types'

export function collectionsFrom(
  patterns: ValenciaPattern[],
): Record<Collection, ValenciaPattern[]> {
  const out = Object.fromEntries(
    COLLECTIONS.map(c => [c, [] as ValenciaPattern[]]),
  ) as Record<Collection, ValenciaPattern[]>

  for (const p of patterns) {
    for (const c of p.collections) {
      if (out[c]) out[c].push(p)
    }
  }
  return out
}
