import { Search, Users, Zap, FileText, MessageSquare, Video, Award } from 'lucide-react'
import { IconCard, ImageCard, ThumbnailCard } from './CardVariants'
import { T } from '../../tokens'

export function CardVariantsDemo() {
  return (
    <div style={{ background: T.surface.offWhite, padding: '80px 40px', minHeight: '100vh' }}>
      <div style={{ maxWidth: 960, margin: '0 auto' }}>
        <div style={{ marginBottom: 32 }}>
          <p style={{ fontFamily: T.font, fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: T.fg.secondary, margin: '0 0 12px' }}>Component family</p>
          <h2 style={{ fontFamily: T.font, fontSize: 32, fontWeight: 700, color: T.fg.primary, lineHeight: 1.25, margin: '0 0 12px' }}>Card variants</h2>
          <p style={{ fontFamily: T.font, fontSize: 15, color: T.fg.secondary, lineHeight: 1.6, margin: 0 }}>
            IconCard for topic tiles, ImageCard for cover-led modules, ThumbnailCard for compact list rows.
          </p>
        </div>

        <Section title="IconCard — topic tiles with soft tint">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 12 }}>
            <IconCard icon={<Search size={20} />}  title="Discovery"     description="Frame the problem." tint="mist" />
            <IconCard icon={<Users size={20} />}   title="Research"      description="Talk to users." tint="blush" />
            <IconCard icon={<Zap size={20} />}     title="Prototyping"   description="Make it real." tint="yellow" />
            <IconCard icon={<Award size={20} />}   title="Testing"       description="Validate with users." tint="plain" />
          </div>
        </Section>

        <Section title="ImageCard — module hero tiles">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 12 }}>
            <ImageCard
              image="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
              eyebrow="Foundations"
              title="Discovery foundations"
              description="What discovery is, why it matters, when to stop."
              badge="Beginner"
            />
            <ImageCard
              image="https://images.unsplash.com/photo-1542626991-cbc4e32524cc?w=800&q=80"
              eyebrow="Practice"
              title="Interviewing users"
              description="Recruitment, guides, moderation, synthesis."
              badge="Intermediate"
            />
          </div>
        </Section>

        <Section title="ThumbnailCard — compact row cards">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <ThumbnailCard thumbnail={<FileText size={20} />}       title="What is discovery?"          meta="Notes · 6 min" />
            <ThumbnailCard thumbnail={<Video size={20} />}          title="Interview technique demo"    meta="Video · 12 min" />
            <ThumbnailCard thumbnail={<MessageSquare size={20} />}  title="Reflection: your discovery"  meta="Prompt · 5 min" />
          </div>
        </Section>
      </div>
    </div>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: 32 }}>
      <div style={{ fontFamily: T.font, fontSize: 11, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: T.fg.secondary, marginBottom: 12 }}>{title}</div>
      {children}
    </div>
  )
}
