import { T } from '../../tokens'

interface SkeletonProps {
  width?: number | string
  height?: number | string
  radius?: number
  style?: React.CSSProperties
}

export function Skeleton({ width = '100%', height = 16, radius = 4, style }: SkeletonProps) {
  return (
    <div style={{
      width, height, borderRadius: radius,
      background: `linear-gradient(90deg, ${T.border.default} 0%, ${T.surface.cardAlt} 50%, ${T.border.default} 100%)`,
      backgroundSize: '200% 100%',
      animation: 'skeleton-pulse 1.4s ease-in-out infinite',
      ...style,
    }}>
      <style>{`@keyframes skeleton-pulse { 0% { background-position: 200% 0 } 100% { background-position: -200% 0 } }`}</style>
    </div>
  )
}

// Preset compositions for common playbook layouts

export function CardSkeleton() {
  return (
    <div style={{ background: T.surface.white, border: `1px solid ${T.border.default}`, borderRadius: T.radius.md, padding: 32 }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 20 }}>
        <Skeleton height={12} width="40%" />
        <Skeleton height={26} width="80%" />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        <Skeleton height={14} width="100%" />
        <Skeleton height={14} width="95%" />
        <Skeleton height={14} width="60%" />
      </div>
      <div style={{ marginTop: 24, padding: 20, background: T.surface.offWhite, borderRadius: T.radius.md }}>
        <Skeleton height={12} width="30%" style={{ marginBottom: 12 }} />
        <Skeleton height={14} width="90%" />
      </div>
    </div>
  )
}

export function ModuleListSkeleton() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
      {[0,1,2,3].map(i => (
        <div key={i} style={{ display: 'flex', gap: 16, padding: 20, background: T.surface.white, border: `1px solid ${T.border.default}`, borderRadius: T.radius.sm }}>
          <Skeleton width={40} height={40} radius={999} />
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 8 }}>
            <Skeleton height={14} width="55%" />
            <Skeleton height={12} width="85%" />
          </div>
        </div>
      ))}
    </div>
  )
}
