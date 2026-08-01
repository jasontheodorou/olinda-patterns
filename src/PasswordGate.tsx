import { useState } from 'react'
import { Box, Stack, Text } from '@mantine/core'
import { C, font } from './tokens'

const PASSWORD = import.meta.env.VITE_GATE_PASSWORD as string | undefined
const STORAGE_KEY = 'valencia_gate'

export function isGateOpen(): boolean {
  if (!PASSWORD) return import.meta.env.DEV
  try { return localStorage.getItem(STORAGE_KEY) === PASSWORD } catch { return false }
}

export function PasswordGate({ onUnlock }: { onUnlock: () => void }) {
  const [value, setValue] = useState('')
  const [error, setError] = useState(false)

  function attempt() {
    if (value === PASSWORD) {
      try { localStorage.setItem(STORAGE_KEY, value) } catch { /* ignore */ }
      onUnlock()
    } else {
      setError(true)
      setValue('')
    }
  }

  return (
    <Box style={{
      minHeight: '100vh', background: C.bg,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
    }}>
      <Stack gap={24} style={{ width: '100%', maxWidth: 360, padding: '0 24px', alignItems: 'center' }}>

        <img src="/orange.svg" alt="Valencia" style={{ width: 72, height: 72 }} />

        <Stack gap={4} style={{ textAlign: 'center' }}>
          <Text style={{ fontSize: 20, fontWeight: 700, color: C.ink, fontFamily: font }}>
            Valencia pattern library
          </Text>
          <Text style={{ fontSize: 14, color: C.dark, fontFamily: font }}>
            Transform UK — internal use only
          </Text>
        </Stack>

        <Stack gap={8} style={{ width: '100%' }}>
          <input
            type="password"
            placeholder="Password"
            value={value}
            onChange={e => { setValue(e.target.value); setError(false) }}
            onKeyDown={e => e.key === 'Enter' && attempt()}
            autoFocus
            style={{
              width: '100%', padding: '10px 14px', fontFamily: font, fontSize: 16,
              border: `1px solid ${error ? '#C0392B' : C.border}`,
              background: C.surface, color: C.ink, outline: 'none',
              boxSizing: 'border-box',
            }}
          />
          {error && (
            <Text style={{ fontSize: 13, color: '#C0392B', fontFamily: font }}>
              Incorrect password.
            </Text>
          )}
          <button
            onClick={attempt}
            style={{
              width: '100%', padding: '10px 14px', fontFamily: font, fontSize: 15,
              fontWeight: 600, background: C.teal, color: C.surface,
              border: 'none', cursor: 'pointer',
            }}
          >
            Enter
          </button>
        </Stack>

      </Stack>
    </Box>
  )
}
