import { useState } from 'react'
import { Search, Mail, Lock } from 'lucide-react'
import { Input, Textarea } from './FormFields'
import { Button } from '../button/Button'
import { T } from '../../tokens'

export function FormFieldsDemo() {
  const [email, setEmail] = useState('')
  const [reflection, setReflection] = useState('')
  const invalidEmail = email.length > 0 && !email.includes('@')

  return (
    <div style={{ background: T.surface.offWhite, padding: '80px 40px', minHeight: '100vh' }}>
      <div style={{ maxWidth: 640, margin: '0 auto' }}>
        <div style={{ marginBottom: 32 }}>
          <p style={{ fontFamily: T.font, fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: T.fg.secondary, margin: '0 0 12px' }}>Component family</p>
          <h2 style={{ fontFamily: T.font, fontSize: 32, fontWeight: 700, color: T.fg.primary, lineHeight: 1.25, margin: '0 0 12px' }}>Input &amp; Textarea</h2>
          <p style={{ fontFamily: T.font, fontSize: 15, color: T.fg.secondary, lineHeight: 1.6, margin: 0 }}>
            Text-entry primitives for reflections, notes, and sign-in flows. Navy focus ring, red error state.
          </p>
        </div>

        <div style={{ background: T.surface.white, padding: 32, border: `1px solid ${T.border.default}`, borderRadius: T.radius.md, display: 'flex', flexDirection: 'column', gap: 20 }}>

          <Input
            label="Search modules"
            leftIcon={<Search size={16} />}
            placeholder="e.g. discovery, prototyping"
            help="Search across your role's practice library."
          />

          <Input
            label="Work email"
            type="email"
            leftIcon={<Mail size={16} />}
            placeholder="you@transformuk.com"
            value={email}
            onChange={e => setEmail(e.target.value)}
            error={invalidEmail ? 'Please include an @' : undefined}
            help={invalidEmail ? undefined : "We'll use this to save your progress."}
          />

          <Input
            label="Password"
            type="password"
            leftIcon={<Lock size={16} />}
            placeholder="At least 8 characters"
          />

          <Input
            label="Disabled field"
            value="Locked value"
            disabled
            help="This field cannot be edited."
          />

          <Textarea
            label="Reflection"
            placeholder="What surprised you about this card?"
            value={reflection}
            onChange={e => setReflection(e.target.value)}
            maxLength={280}
            showCounter
            help="Free-write. Nobody else sees your notes."
          />

          <div style={{ display: 'flex', gap: 8, justifyContent: 'flex-end' }}>
            <Button variant="subtle">Cancel</Button>
            <Button>Save progress</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
