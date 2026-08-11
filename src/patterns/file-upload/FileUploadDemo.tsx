import { FileUpload } from './FileUpload'
import { T } from '../../tokens'

export function FileUploadDemo() {
  return (
    <div style={{ background: T.surface.offWhite, padding: '80px 40px', minHeight: '100vh' }}>
      <div style={{ maxWidth: 640, margin: '0 auto' }}>
        <div style={{ marginBottom: 32 }}>
          <p style={{ fontFamily: T.font, fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: T.fg.secondary, margin: '0 0 12px' }}>Component</p>
          <h2 style={{ fontFamily: T.font, fontSize: 32, fontWeight: 700, color: T.fg.primary, lineHeight: 1.25, margin: '0 0 12px' }}>File upload</h2>
          <p style={{ fontFamily: T.font, fontSize: 15, color: T.fg.secondary, lineHeight: 1.6, margin: 0 }}>
            Drag-and-drop or click. Great for exercise submissions, artefact uploads, and shared team files.
          </p>
        </div>

        <div style={{ background: T.surface.white, padding: 24, border: `1px solid ${T.border.default}`, borderRadius: T.radius.md }}>
          <FileUpload
            label="Upload your discovery summary"
            help="A single-page document capturing the problem, users, and constraints."
            accept=".pdf,.docx,.md"
            multiple
            maxSizeMb={5}
          />
        </div>
      </div>
    </div>
  )
}
