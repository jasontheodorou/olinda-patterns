import { useState } from 'react'
import type { DesignerControls, OlindaPattern } from '../../registry/types'
import { renderPrompt } from '../../agent/prompts'
import './UseWithClaude.css'

type Props = {
  pattern: OlindaPattern
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
    <div className="o-uwc">
      <div className="o-uwc__header">
        <div>
          <div className="o-uwc__title">Use with Claude</div>
          <div className="o-uwc__sub">Paste this into Claude Code inside your project.</div>
        </div>
        <button className="o-uwc__button" onClick={copy}>{copied ? 'Copied' : 'Copy'}</button>
      </div>
      <pre className="o-uwc__pre"><code>{text}</code></pre>
    </div>
  )
}
