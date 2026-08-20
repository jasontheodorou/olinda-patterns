export const V2_BASE = '/build2'

export function v2(path: string): string {
  if (path === '' || path === '/') return V2_BASE
  return `${V2_BASE}${path.startsWith('/') ? path : '/' + path}`
}
