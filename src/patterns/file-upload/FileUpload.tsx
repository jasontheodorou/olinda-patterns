import { useState, useRef, type ChangeEvent, type DragEvent } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Upload, File, X, CheckCircle2 } from 'lucide-react'
import { T } from '../../tokens'

interface FileUploadProps {
  label?: string
  help?: string
  accept?: string
  multiple?: boolean
  maxSizeMb?: number
  onFiles?: (files: File[]) => void
}

type UploadedFile = { file: File; id: number; progress: number }

export function FileUpload({ label, help, accept, multiple = false, maxSizeMb = 10, onFiles }: FileUploadProps) {
  const inputRef = useRef<HTMLInputElement>(null)
  const [files, setFiles] = useState<UploadedFile[]>([])
  const [drag, setDrag] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const addFiles = (fs: File[]) => {
    setError(null)
    const oversize = fs.find(f => f.size > maxSizeMb * 1024 * 1024)
    if (oversize) { setError(`"${oversize.name}" exceeds ${maxSizeMb}MB.`); return }

    const newOnes: UploadedFile[] = fs.map(f => ({ file: f, id: Date.now() + Math.random(), progress: 0 }))
    setFiles(prev => multiple ? [...prev, ...newOnes] : newOnes)
    onFiles?.(fs)

    // Fake progress
    newOnes.forEach(uf => {
      const step = () => {
        setFiles(prev => prev.map(x => x.id === uf.id ? { ...x, progress: Math.min(100, x.progress + 20) } : x))
      }
      const ticks = [200, 400, 600, 800, 1000]
      ticks.forEach(ms => setTimeout(step, ms))
    })
  }

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) addFiles(Array.from(e.target.files))
  }
  const onDrop = (e: DragEvent) => {
    e.preventDefault(); setDrag(false)
    if (e.dataTransfer.files) addFiles(Array.from(e.dataTransfer.files))
  }
  const remove = (id: number) => setFiles(prev => prev.filter(f => f.id !== id))

  return (
    <div style={{ fontFamily: T.font }}>
      {label && <div style={{ fontSize: 13, fontWeight: 600, color: T.fg.primary, marginBottom: 6 }}>{label}</div>}

      <label
        onDragOver={e => { e.preventDefault(); setDrag(true) }}
        onDragLeave={() => setDrag(false)}
        onDrop={onDrop}
        style={{
          display: 'block', cursor: 'pointer',
          padding: '32px 24px', textAlign: 'center',
          border: `2px dashed ${drag ? T.navy : T.border.default}`,
          background: drag ? 'rgba(33, 61, 89, 0.03)' : T.surface.offWhite,
          borderRadius: T.radius.md,
          transition: `all ${T.motion.fast} ${T.motion.ease}`,
        }}
      >
        <input ref={inputRef} type="file" accept={accept} multiple={multiple} onChange={onChange} style={{ display: 'none' }} />
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
          <div style={{ width: 44, height: 44, borderRadius: '50%', background: T.surface.white, border: `1px solid ${T.border.default}`, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: T.navy }}>
            <Upload size={20} />
          </div>
          <div style={{ fontSize: 14, color: T.fg.primary, fontWeight: 600 }}>
            <span style={{ color: T.navy, textDecoration: 'underline' }}>Click to upload</span> or drag and drop
          </div>
          <div style={{ fontSize: 12, color: T.fg.secondary }}>
            {accept ? accept.replace(/,/g, ' · ') : 'Any file'} · up to {maxSizeMb}MB
          </div>
        </div>
      </label>

      {error && <div style={{ marginTop: 8, fontSize: 12, color: T.red, fontWeight: 600 }}>{error}</div>}
      {help && !error && <div style={{ marginTop: 8, fontSize: 12, color: T.fg.secondary }}>{help}</div>}

      <AnimatePresence>
        {files.length > 0 && (
          <motion.ul
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            style={{ listStyle: 'none', margin: '16px 0 0', padding: 0, display: 'flex', flexDirection: 'column', gap: 8 }}
          >
            {files.map(f => (
              <motion.li
                key={f.id}
                layout
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.2, ease: [0.2, 0.8, 0.2, 1] }}
                style={{
                  display: 'flex', alignItems: 'center', gap: 12,
                  padding: '10px 12px',
                  background: T.surface.white,
                  border: `1px solid ${T.border.default}`,
                  borderRadius: T.radius.sm,
                }}
              >
                <div style={{ color: f.progress === 100 ? T.teal : T.navy, display: 'inline-flex' }}>
                  {f.progress === 100 ? <CheckCircle2 size={18} /> : <File size={18} />}
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 13, fontWeight: 600, color: T.fg.primary, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{f.file.name}</div>
                  <div style={{ fontSize: 11, color: T.fg.secondary }}>{(f.file.size / 1024).toFixed(0)} KB</div>
                  <div style={{ height: 3, background: T.border.default, borderRadius: 999, marginTop: 6, overflow: 'hidden' }}>
                    <motion.div
                      animate={{ width: `${f.progress}%` }}
                      transition={{ duration: 0.2, ease: [0.2, 0.8, 0.2, 1] }}
                      style={{ height: '100%', background: f.progress === 100 ? T.teal : T.navy }}
                    />
                  </div>
                </div>
                <button
                  onClick={() => remove(f.id)}
                  aria-label={`Remove ${f.file.name}`}
                  style={{ background: 'transparent', border: 'none', color: T.fg.secondary, cursor: 'pointer', padding: 4, borderRadius: 4, display: 'inline-flex' }}
                >
                  <X size={16} />
                </button>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  )
}
