import { useState } from 'react'
import type { DesignerControls, TaroccoPattern } from '../../registry/types'
import { renderPrompt } from '../../agent/prompts'
import './UseWithClaude.css'

type Props = {
  pattern: TaroccoPattern
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
    <div className="t-uwc">
      <div className="t-uwc__header">
        <div>
          <div className="t-uwc__title">Use with Claude</div>
          <div className="t-uwc__sub">Paste this into Claude Code inside your project.</div>
        </div>
        <button className="t-uwc__button" onClick={copy}>{copied ? 'Copied' : 'Copy'}</button>
      </div>
      <pre className="t-uwc__pre"><code>{text}</code></pre>
    </div>
  )
}
