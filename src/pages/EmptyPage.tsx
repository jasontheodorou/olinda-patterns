import { Container, Stack, Text } from '@mantine/core'
import { C, font } from '../tokens'

type Props = { title: string }

export function EmptyPage({ title }: Props) {
  return (
    <Container size={1100} py={52} px={20}>
      <Stack gap={16}>
        <Text component="h1" style={{ fontSize: 34, fontWeight: 700, color: C.ink, fontFamily: font, margin: 0 }}>
          {title}
        </Text>
        <Text style={{ fontSize: 16, color: C.muted, fontFamily: font }}>Nothing here yet.</Text>
      </Stack>
    </Container>
  )
}
