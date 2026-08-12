import { useState } from 'react'
import type { DesignerControls, ValenciaPattern } from '../../registry/types'
import { renderPrompt } from '../../agent/prompts'
import './UseWithClaude.css'

type Props = {
  pattern: ValenciaPattern
  controls: DesignerControls
}

export function UseWithClaude({ pattern, controls }: Props) {
  const [copied, setCopied] = useState(false)
  const text = renderPrompt(pattern, controls)

  async function copy() {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 1400)
    } catch { /* ignore */ }
  }

  return (
    <div className="v-uwc">
      <div className="v-uwc__header">
        <div>
          <div className="v-uwc__title">Use with Claude</div>
          <div className="v-uwc__sub">Paste this into Claude Code inside your project.</div>
        </div>
        <button className="v-uwc__button" onClick={copy}>{copied ? 'Copied' : 'Copy'}</button>
      </div>
      <pre className="v-uwc__pre"><code>{text}</code></pre>
    </div>
  )
}
