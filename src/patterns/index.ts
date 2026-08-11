import type { ComponentType } from 'react'
import { SpringCardsDemo } from './SpringCards'
import { ScrollEditorialStoryDemo } from './scroll-editorial-story'
import { ExperimentalPatternsGallery } from '../experimental/editorial-motion'
import { ImageCoverRevealFullBleed, ImageCoverRevealBoxedDemo } from './image-cover-reveal'
import { MotionTabsDemo } from './motion-tabs'
import { AccordionDemo } from './accordion'
import { AlertDemo } from './alert'
import { StepperDemo } from './stepper'
import { BadgeDemo } from './badge'
import { ButtonDemo } from './button'
import { CardDemo } from './card'
import { ProgressDemo } from './progress'
import { SkeletonDemo } from './skeleton'
import { ToastDemo } from './toast'
import { TooltipDemo } from './tooltip'
import { TabsDemo } from './tabs'
import { BreadcrumbDemo } from './breadcrumb'
import { ModalDemo } from './modal'
import { DividerDemo } from './divider'
import { SpinnerDemo } from './spinner'
import { IconButtonDemo } from './icon-button'
import { FormFieldsDemo } from './form-fields'
import { FormSelectionDemo } from './form-selection'
import { ChoosersDemo } from './choosers'
import { FileUploadDemo } from './file-upload'
import { PaginationDemo } from './pagination'
import { CardVariantsDemo } from './card-variants'
import { TableDemo } from './table'
import { SidenavDemo } from './sidenav'
import { TableOfContentsDemo } from './toc'
import { DrawerDemo } from './drawer'

export type PatternCategory = 'foundations' | 'content' | 'forms' | 'navigation' | 'motion'

export type Pattern = {
  id: string
  title: string
  description: string
  status: 'draft' | 'experimental' | 'ready'
  fullBleed?: boolean
  demo: ComponentType
  category: PatternCategory
  tags: string[]
}

export const CATEGORIES: Array<{ id: PatternCategory; label: string; description: string }> = [
  { id: 'foundations', label: 'Foundations', description: 'Building blocks and status' },
  { id: 'content',     label: 'Content',     description: 'Display and disclosure' },
  { id: 'forms',       label: 'Forms',       description: 'Data entry and selection' },
  { id: 'navigation',  label: 'Navigation',  description: 'Wayfinding and overlays' },
  { id: 'motion',      label: 'Motion',      description: 'Experimental motion patterns' },
]

export const PATTERNS: Pattern[] = [
  // ─── Foundations ──────────────────────────────────────────────────────────
  {
    id: 'badge', title: 'Badge',
    description: 'Compact status marker for achievements, difficulty labels, lesson status, and streak counters.',
    status: 'ready', fullBleed: true, demo: BadgeDemo,
    category: 'foundations', tags: ['status', 'label', 'achievement'],
  },
  {
    id: 'button', title: 'Button',
    description: 'Actions across the learning surface — pill by default, navy CTA, dark outline.',
    status: 'ready', fullBleed: true, demo: ButtonDemo,
    category: 'foundations', tags: ['action', 'pill', 'cta'],
  },
  {
    id: 'icon-button', title: 'Icon button',
    description: 'Icon-only actions. Pill-round with three variants and three sizes.',
    status: 'ready', fullBleed: true, demo: IconButtonDemo,
    category: 'foundations', tags: ['action', 'icon-only', 'pill'],
  },
  {
    id: 'divider', title: 'Divider',
    description: 'Structural separator between content blocks. Plain rule or labelled kicker.',
    status: 'ready', fullBleed: true, demo: DividerDemo,
    category: 'foundations', tags: ['structural', 'layout'],
  },
  {
    id: 'spinner', title: 'Spinner',
    description: 'Inline loading indicator. For actions in flight; prefer Skeleton for content loading.',
    status: 'ready', fullBleed: true, demo: SpinnerDemo,
    category: 'foundations', tags: ['loading', 'inline'],
  },
  {
    id: 'skeleton', title: 'Skeleton',
    description: 'Loading placeholders sized to the real content — no layout shift when data arrives.',
    status: 'ready', fullBleed: true, demo: SkeletonDemo,
    category: 'foundations', tags: ['loading', 'placeholder'],
  },
  {
    id: 'alert', title: 'Alert',
    description: 'Timely inline messages in five semantic variants — info, success, warning, danger, neutral.',
    status: 'ready', fullBleed: true, demo: AlertDemo,
    category: 'foundations', tags: ['feedback', 'semantic', 'banner'],
  },
  {
    id: 'tooltip', title: 'Tooltip',
    description: 'On-demand hints for glossary terms, streak counters, and definitions.',
    status: 'ready', fullBleed: true, demo: TooltipDemo,
    category: 'foundations', tags: ['hint', 'overlay', 'glossary'],
  },

  // ─── Content ──────────────────────────────────────────────────────────────
  {
    id: 'card', title: 'Lesson card',
    description: 'Mirrors the playbook CardView — kicker meta · title · content blocks · resources · complete toggle.',
    status: 'ready', fullBleed: true, demo: CardDemo,
    category: 'content', tags: ['learning', 'card', 'callout', 'disclosure'],
  },
  {
    id: 'card-variants', title: 'Card variants',
    description: 'IconCard, ImageCard, ThumbnailCard — topic tiles, hero modules, compact rows.',
    status: 'ready', fullBleed: true, demo: CardVariantsDemo,
    category: 'content', tags: ['learning', 'card', 'grid', 'hero'],
  },
  {
    id: 'accordion', title: 'Accordion',
    description: 'Progressive disclosure for FAQ-style content and deep-dive toggles inside lessons.',
    status: 'ready', fullBleed: true, demo: AccordionDemo,
    category: 'content', tags: ['disclosure', 'q&a', 'list'],
  },
  {
    id: 'progress', title: 'Progress',
    description: 'Card-in-module dots, module bars, and course rings. Navy fill, teal on complete.',
    status: 'ready', fullBleed: true, demo: ProgressDemo,
    category: 'content', tags: ['progress', 'tracking', 'status'],
  },
  {
    id: 'table', title: 'Table',
    description: 'Progress dashboards, admin views, roster tables. Clickable rows, striped, embedded cells.',
    status: 'ready', fullBleed: true, demo: TableDemo,
    category: 'content', tags: ['data', 'dashboard', 'progress'],
  },

  // ─── Forms ────────────────────────────────────────────────────────────────
  {
    id: 'form-fields', title: 'Input & Textarea',
    description: 'Text-entry primitives for reflections, notes, and sign-in flows. Navy focus, red error.',
    status: 'ready', fullBleed: true, demo: FormFieldsDemo,
    category: 'forms', tags: ['input', 'text', 'form'],
  },
  {
    id: 'form-selection', title: 'Checkbox · Radio · Switch',
    description: 'Selection primitives. Checkbox for many, Radio for one, Switch for instant on/off.',
    status: 'ready', fullBleed: true, demo: FormSelectionDemo,
    category: 'forms', tags: ['selection', 'form'],
  },
  {
    id: 'choosers', title: 'Select & Dropdown',
    description: 'Single-choice field and action menu. Navy focus ring, animated open.',
    status: 'ready', fullBleed: true, demo: ChoosersDemo,
    category: 'forms', tags: ['chooser', 'menu', 'form'],
  },
  {
    id: 'file-upload', title: 'File upload',
    description: 'Drag-and-drop or click. Progress per file, size limits, remove and retry.',
    status: 'ready', fullBleed: true, demo: FileUploadDemo,
    category: 'forms', tags: ['input', 'upload', 'drag-drop'],
  },

  // ─── Navigation ───────────────────────────────────────────────────────────
  {
    id: 'breadcrumb', title: 'Breadcrumb',
    description: 'Wayfinding through learning hierarchy — path → course → module → lesson.',
    status: 'ready', fullBleed: true, demo: BreadcrumbDemo,
    category: 'navigation', tags: ['wayfinding', 'hierarchy'],
  },
  {
    id: 'tabs', title: 'Tabs',
    description: 'Switch between content types on a card — Notes / Video / Reflection / Discussion.',
    status: 'ready', fullBleed: true, demo: TabsDemo,
    category: 'navigation', tags: ['wayfinding', 'content-switch'],
  },
  {
    id: 'sidenav', title: 'Sidenav',
    description: 'Module and card tree with status indicators — complete, in progress, available, locked.',
    status: 'ready', fullBleed: true, demo: SidenavDemo,
    category: 'navigation', tags: ['wayfinding', 'tree', 'module-nav'],
  },
  {
    id: 'toc', title: 'Table of contents',
    description: '"On this page" nav for long-form cards. Two levels, auto-tracks scroll position.',
    status: 'ready', fullBleed: true, demo: TableOfContentsDemo,
    category: 'navigation', tags: ['wayfinding', 'long-form', 'anchor'],
  },
  {
    id: 'stepper', title: 'Stepper',
    description: 'Wayfinding for multi-step flows. Horizontal or vertical, linear or free navigation.',
    status: 'ready', fullBleed: true, demo: StepperDemo,
    category: 'navigation', tags: ['wayfinding', 'flow', 'steps'],
  },
  {
    id: 'pagination', title: 'Pagination',
    description: 'Numbered navigation for card-list and library pages. Ellipses on long counts.',
    status: 'ready', fullBleed: true, demo: PaginationDemo,
    category: 'navigation', tags: ['wayfinding', 'list-nav'],
  },
  {
    id: 'drawer', title: 'Drawer',
    description: 'Off-canvas panel for module details, filter builders, and preview flows.',
    status: 'ready', fullBleed: true, demo: DrawerDemo,
    category: 'navigation', tags: ['overlay', 'panel'],
  },
  {
    id: 'modal', title: 'Modal',
    description: 'Focused overlays for confirmations, reflections, and module-unlock moments.',
    status: 'ready', fullBleed: true, demo: ModalDemo,
    category: 'navigation', tags: ['overlay', 'dialog'],
  },
  {
    id: 'toast', title: 'Toast',
    description: 'Transient notifications for progress, achievements, and system feedback.',
    status: 'ready', fullBleed: true, demo: ToastDemo,
    category: 'navigation', tags: ['feedback', 'notification', 'transient'],
  },
  {
    id: 'motion-tabs', title: 'Motion tabs',
    description: 'Folder-tabbed showcase of the four motion principles.',
    status: 'experimental', fullBleed: true, demo: MotionTabsDemo,
    category: 'navigation', tags: ['tabs', 'motion', 'showcase'],
  },

  // ─── Motion (experimental) ────────────────────────────────────────────────
  {
    id: 'spring-cards', title: 'Spring card entrance',
    description: 'Cards stagger in with spring physics on mount.',
    status: 'draft', demo: SpringCardsDemo,
    category: 'motion', tags: ['entrance', 'spring'],
  },
  {
    id: 'scroll-editorial-story', title: 'Scroll editorial story',
    description: 'Scroll-linked composition with four chapters, live controls, and persistent iteration history.',
    status: 'experimental', fullBleed: true, demo: ScrollEditorialStoryDemo,
    category: 'motion', tags: ['scroll', 'editorial'],
  },
  {
    id: 'image-cover-reveal-full', title: 'Image cover reveal — full bleed',
    description: 'Cover sweeps left on scroll to reveal a full-viewport image. Text colour splits at the cover edge.',
    status: 'experimental', fullBleed: true, demo: ImageCoverRevealFullBleed,
    category: 'motion', tags: ['scroll', 'reveal'],
  },
  {
    id: 'image-cover-reveal-boxed', title: 'Image cover reveal — boxed',
    description: 'Same cover-sweep mechanic in a fixed-height box. Reveals as it scrolls into view.',
    status: 'experimental', fullBleed: true, demo: ImageCoverRevealBoxedDemo,
    category: 'motion', tags: ['scroll', 'reveal'],
  },
  {
    id: 'experimental-editorial-motion', title: 'Experimental editorial motion',
    description: 'Nine scroll and interaction patterns exploring editorial motion principles.',
    status: 'experimental', fullBleed: true, demo: ExperimentalPatternsGallery,
    category: 'motion', tags: ['experimental', 'showcase'],
  },
]
