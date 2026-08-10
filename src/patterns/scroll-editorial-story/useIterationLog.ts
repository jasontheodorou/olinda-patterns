import { useEffect, useRef, useState } from "react"
import type { EditorialStoryConfig, IterationEntry } from "./types"

const STORAGE_KEY = "design-sandbox:scroll-editorial-story:iterations"

function loadEntries(): IterationEntry[] {
  if (typeof window === "undefined") return []

  try {
    return JSON.parse(window.localStorage.getItem(STORAGE_KEY) ?? "[]")
  } catch {
    return []
  }
}

export function useIterationLog(config: EditorialStoryConfig, delay = 450) {
  const [entries, setEntries] = useState<IterationEntry[]>(loadEntries)
  const previous = useRef(config)
  const mounted = useRef(false)

  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true
      previous.current = config
      return
    }

    const before = previous.current
    const timer = window.setTimeout(() => {
      const changes = Object.fromEntries(
        Object.entries(config).filter(
          ([key, value]) => before[key as keyof EditorialStoryConfig] !== value,
        ),
      ) as Partial<EditorialStoryConfig>

      if (!Object.keys(changes).length) return

      const entry: IterationEntry = {
        id: crypto.randomUUID(),
        timestamp: new Date().toISOString(),
        changes,
        config,
      }

      setEntries((current) => {
        const next = [entry, ...current].slice(0, 100)
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next))
        return next
      })
      previous.current = config
    }, delay)

    return () => window.clearTimeout(timer)
  }, [config, delay])

  function clear() {
    window.localStorage.removeItem(STORAGE_KEY)
    setEntries([])
  }

  function exportJson() {
    const blob = new Blob([JSON.stringify(entries, null, 2)], {
      type: "application/json",
    })
    const url = URL.createObjectURL(blob)
    const anchor = document.createElement("a")
    anchor.href = url
    anchor.download = `scroll-editorial-iterations-${new Date().toISOString().slice(0, 10)}.json`
    anchor.click()
    URL.revokeObjectURL(url)
  }

  return { entries, clear, exportJson }
}
