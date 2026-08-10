import { useMemo, useState } from "react"
import {
  ActionIcon,
  Button,
  ColorInput,
  Drawer,
  Group,
  NumberInput,
  Paper,
  ScrollArea,
  Slider,
  Stack,
  Switch,
  Text,
  Title,
} from "@mantine/core"
import { ScrollEditorialStory } from "./ScrollEditorialStory"
import { defaultEditorialStoryConfig, type EditorialStoryConfig } from "./types"
import { useIterationLog } from "./useIterationLog"

export function ScrollEditorialStoryDemo() {
  const [opened, setOpened] = useState(true)
  const [config, setConfig] = useState<EditorialStoryConfig>(defaultEditorialStoryConfig)
  const stableConfig = useMemo(() => config, [config])
  const { entries, clear, exportJson } = useIterationLog(stableConfig)

  function patch<K extends keyof EditorialStoryConfig>(key: K, value: EditorialStoryConfig[K]) {
    setConfig((current) => ({ ...current, [key]: value }))
  }

  return (
    <>
      <ScrollEditorialStory config={config} />

      <ActionIcon
        onClick={() => setOpened(true)}
        aria-label="Open pattern controls"
        pos="fixed"
        bottom={20}
        right={20}
        size="xl"
        radius="xl"
        style={{ zIndex: 100 }}
      >
        ✦
      </ActionIcon>

      <Drawer opened={opened} onClose={() => setOpened(false)} title="Editorial story lab" position="right" size="md">
        <Stack gap="lg">
          <div>
            <Title order={3}>Appearance</Title>
            <Text size="sm" c="dimmed">Changes are recorded after you stop adjusting.</Text>
          </div>

          <ColorInput label="Paper" value={config.paper} onChange={(value) => patch("paper", value)} />
          <ColorInput label="Ink" value={config.ink} onChange={(value) => patch("ink", value)} />
          <ColorInput label="Accent" value={config.accent} onChange={(value) => patch("accent", value)} />
          <ColorInput label="Second accent" value={config.secondaryAccent} onChange={(value) => patch("secondaryAccent", value)} />

          <label>
            <Text size="sm" fw={500}>Headline scale</Text>
            <Slider min={0.65} max={1.25} step={0.05} value={config.headlineScale} onChange={(value) => patch("headlineScale", value)} />
          </label>
          <label>
            <Text size="sm" fw={500}>Scroll travel</Text>
            <Slider min={20} max={180} value={config.travel} onChange={(value) => patch("travel", value)} />
          </label>
          <label>
            <Text size="sm" fw={500}>Rotation</Text>
            <Slider min={0} max={18} value={config.rotation} onChange={(value) => patch("rotation", value)} />
          </label>
          <NumberInput label="Card radius" min={0} max={48} value={config.cardRadius} onChange={(value) => patch("cardRadius", Number(value))} />
          <NumberInput label="Chapter height (vh)" min={110} max={240} value={config.chapterHeight} onChange={(value) => patch("chapterHeight", Number(value))} />
          <Switch label="Show progress line" checked={config.showProgress} onChange={(event) => patch("showProgress", event.currentTarget.checked)} />

          <Group grow>
            <Button variant="default" onClick={() => setConfig(defaultEditorialStoryConfig)}>Reset</Button>
            <Button onClick={exportJson}>Export log</Button>
          </Group>

          <Group justify="space-between">
            <Title order={4}>Iteration log ({entries.length})</Title>
            <Button variant="subtle" color="red" size="xs" onClick={clear}>Clear</Button>
          </Group>
          <ScrollArea h={280}>
            <Stack gap="xs">
              {entries.length === 0 && <Text size="sm" c="dimmed">Adjust a control to begin logging.</Text>}
              {entries.map((entry) => (
                <Paper key={entry.id} withBorder p="sm">
                  <Text size="xs" c="dimmed">{new Date(entry.timestamp).toLocaleString()}</Text>
                  <Text size="sm">{Object.entries(entry.changes).map(([key, value]) => `${key}: ${value}`).join(" · ")}</Text>
                </Paper>
              ))}
            </Stack>
          </ScrollArea>
        </Stack>
      </Drawer>
    </>
  )
}
