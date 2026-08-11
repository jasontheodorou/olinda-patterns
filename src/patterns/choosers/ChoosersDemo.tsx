import { useState } from 'react'
import { MoreHorizontal, Share2, Bookmark, Trash2, Flag } from 'lucide-react'
import { Select, Dropdown } from './Choosers'
import { IconButton } from '../icon-button/IconButton'
import { T } from '../../tokens'

const ACCOUNTS = [
  { value: 'hmcts', label: 'HMCTS' },
  { value: 'dfe',   label: 'Department for Education' },
  { value: 'nhs',   label: 'NHS Digital' },
]

const ROLES = [
  { value: 'sd', label: 'Service designer' },
  { value: 'id', label: 'Interaction designer' },
  { value: 'ur', label: 'User researcher' },
  { value: 'cd', label: 'Content designer' },
]

const SORTS = [
  { value: 'recent',   label: 'Most recent' },
  { value: 'popular',  label: 'Most popular' },
  { value: 'progress', label: 'In progress' },
  { value: 'complete', label: 'Completed' },
]

export function ChoosersDemo() {
  const [account, setAccount] = useState('hmcts')
  const [role, setRole] = useState('sd')
  const [sort, setSort] = useState('recent')

  return (
    <div style={{ background: T.surface.offWhite, padding: '80px 40px', minHeight: '100vh' }}>
      <div style={{ maxWidth: 640, margin: '0 auto' }}>
        <div style={{ marginBottom: 32 }}>
          <p style={{ fontFamily: T.font, fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: T.fg.secondary, margin: '0 0 12px' }}>Component family</p>
          <h2 style={{ fontFamily: T.font, fontSize: 32, fontWeight: 700, color: T.fg.primary, lineHeight: 1.25, margin: '0 0 12px' }}>Select &amp; Dropdown</h2>
          <p style={{ fontFamily: T.font, fontSize: 15, color: T.fg.secondary, lineHeight: 1.6, margin: 0 }}>
            Select for single-choice fields (account, role). Dropdown for action menus.
          </p>
        </div>

        <div style={{ background: T.surface.white, padding: 24, border: `1px solid ${T.border.default}`, borderRadius: T.radius.md, marginBottom: 20 }}>
          <div style={{ fontFamily: T.font, fontSize: 11, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: T.fg.secondary, marginBottom: 16 }}>Select</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <Select label="Account context" value={account} onChange={setAccount} options={ACCOUNTS} help="Content adapts to the client you're working with." />
            <Select label="Role"    value={role}    onChange={setRole}    options={ROLES} />
            <Select label="Sort by" value={sort}    onChange={setSort}    options={SORTS} />
          </div>
        </div>

        <div style={{ background: T.surface.white, padding: 24, border: `1px solid ${T.border.default}`, borderRadius: T.radius.md }}>
          <div style={{ fontFamily: T.font, fontSize: 11, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: T.fg.secondary, marginBottom: 16 }}>Dropdown menu</div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, padding: '12px 16px', background: T.surface.offWhite, border: `1px solid ${T.border.default}`, borderRadius: T.radius.sm }}>
            <div style={{ fontFamily: T.font, fontSize: 14, color: T.fg.primary, fontWeight: 600 }}>Understanding the discovery phase</div>
            <Dropdown
              trigger={<IconButton label="More options"><MoreHorizontal size={16} /></IconButton>}
              items={[
                { label: 'Share', icon: <Share2 size={14} />, onClick: () => {} },
                { label: 'Bookmark', icon: <Bookmark size={14} />, onClick: () => {} },
                { divider: true, label: '' },
                { label: 'Report an issue', icon: <Flag size={14} />, onClick: () => {} },
                { label: 'Reset progress', icon: <Trash2 size={14} />, destructive: true, onClick: () => {} },
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
