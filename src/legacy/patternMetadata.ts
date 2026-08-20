export type LegacyCategory = 'foundations' | 'content' | 'forms' | 'navigation' | 'motion'

export type LegacyPatternMeta = {
  id: string
  title: string
  description: string
  category: LegacyCategory
  tags: string[]
  status: 'draft' | 'experimental' | 'ready'
}

export const LEGACY_PATTERN_METADATA: LegacyPatternMeta[] = [
  { id: 'badge',            title: 'Badge',                        description: 'Compact status marker for achievements, difficulty labels, lesson status, and streak counters.', category: 'foundations', tags: ['status', 'label', 'achievement'], status: 'ready' },
  { id: 'button',           title: 'Button',                       description: 'Actions across the learning surface — pill by default, navy CTA, dark outline.',                category: 'foundations', tags: ['action', 'pill', 'cta'],           status: 'ready' },
  { id: 'icon-button',      title: 'Icon button',                  description: 'Icon-only actions. Pill-round with three variants and three sizes.',                            category: 'foundations', tags: ['action', 'icon-only', 'pill'],     status: 'ready' },
  { id: 'divider',          title: 'Divider',                      description: 'Structural separator between content blocks. Plain rule or labelled kicker.',                   category: 'foundations', tags: ['structural', 'layout'],           status: 'ready' },
  { id: 'spinner',          title: 'Spinner',                      description: 'Inline loading indicator. For actions in flight; prefer Skeleton for content loading.',          category: 'foundations', tags: ['loading', 'inline'],              status: 'ready' },
  { id: 'skeleton',         title: 'Skeleton',                     description: 'Loading placeholders sized to the real content — no layout shift when data arrives.',           category: 'foundations', tags: ['loading', 'placeholder'],         status: 'ready' },
  { id: 'alert',            title: 'Alert',                        description: 'Timely inline messages in five semantic variants — info, success, warning, danger, neutral.',   category: 'foundations', tags: ['feedback', 'semantic', 'banner'], status: 'ready' },
  { id: 'tooltip',          title: 'Tooltip',                      description: 'On-demand hints for glossary terms, streak counters, and definitions.',                         category: 'foundations', tags: ['hint', 'overlay', 'glossary'],    status: 'ready' },

  { id: 'card',             title: 'Lesson card',                  description: 'Kicker meta · title · content blocks · resources · complete toggle.',                            category: 'content',     tags: ['learning', 'card', 'callout', 'disclosure'], status: 'ready' },
  { id: 'card-variants',    title: 'Card variants',                description: 'IconCard, ImageCard, ThumbnailCard — topic tiles, hero modules, compact rows.',                  category: 'content',     tags: ['learning', 'card', 'grid', 'hero'],           status: 'ready' },
  { id: 'accordion',        title: 'Accordion',                    description: 'Progressive disclosure for FAQ-style content and deep-dive toggles inside lessons.',            category: 'content',     tags: ['disclosure', 'q&a', 'list'],                  status: 'ready' },
  { id: 'progress',         title: 'Progress',                     description: 'Card-in-module dots, module bars, and course rings. Navy fill, teal on complete.',              category: 'content',     tags: ['progress', 'tracking', 'status'],             status: 'ready' },
  { id: 'table',            title: 'Table',                        description: 'Progress dashboards, admin views, roster tables. Clickable rows, striped, embedded cells.',     category: 'content',     tags: ['data', 'dashboard', 'progress'],              status: 'ready' },

  { id: 'form-fields',      title: 'Input & Textarea',             description: 'Text-entry primitives for reflections, notes, and sign-in flows. Navy focus, red error.',       category: 'forms',       tags: ['input', 'text', 'form'],                      status: 'ready' },
  { id: 'form-selection',   title: 'Checkbox · Radio · Switch',    description: 'Selection primitives. Checkbox for many, Radio for one, Switch for instant on/off.',            category: 'forms',       tags: ['selection', 'form'],                          status: 'ready' },
  { id: 'choosers',         title: 'Select & Dropdown',            description: 'Single-choice field and action menu. Navy focus ring, animated open.',                          category: 'forms',       tags: ['chooser', 'menu', 'form'],                    status: 'ready' },
  { id: 'file-upload',      title: 'File upload',                  description: 'Drag-and-drop or click. Progress per file, size limits, remove and retry.',                     category: 'forms',       tags: ['input', 'upload', 'drag-drop'],               status: 'ready' },

  { id: 'breadcrumb',       title: 'Breadcrumb',                   description: 'Wayfinding through learning hierarchy — path → course → module → lesson.',                      category: 'navigation',  tags: ['wayfinding', 'hierarchy'],                    status: 'ready' },
  { id: 'tabs',             title: 'Tabs',                         description: 'Switch between content types on a card — Notes / Video / Reflection / Discussion.',             category: 'navigation',  tags: ['wayfinding', 'content-switch'],               status: 'ready' },
  { id: 'sidenav',          title: 'Sidenav',                      description: 'Module and card tree with status indicators — complete, in progress, available, locked.',       category: 'navigation',  tags: ['wayfinding', 'tree', 'module-nav'],           status: 'ready' },
  { id: 'toc',              title: 'Table of contents',            description: '"On this page" nav for long-form cards. Two levels, auto-tracks scroll position.',              category: 'navigation',  tags: ['wayfinding', 'long-form', 'anchor'],          status: 'ready' },
  { id: 'stepper',          title: 'Stepper',                      description: 'Wayfinding for multi-step flows. Horizontal or vertical, linear or free navigation.',           category: 'navigation',  tags: ['wayfinding', 'flow', 'steps'],                status: 'ready' },
  { id: 'pagination',       title: 'Pagination',                   description: 'Numbered navigation for card-list and library pages. Ellipses on long counts.',                 category: 'navigation',  tags: ['wayfinding', 'list-nav'],                     status: 'ready' },
  { id: 'drawer',           title: 'Drawer',                       description: 'Off-canvas panel for module details, filter builders, and preview flows.',                      category: 'navigation',  tags: ['overlay', 'panel'],                           status: 'ready' },
  { id: 'modal',            title: 'Modal',                        description: 'Focused overlays for confirmations, reflections, and module-unlock moments.',                   category: 'navigation',  tags: ['overlay', 'dialog'],                          status: 'ready' },
  { id: 'toast',            title: 'Toast',                        description: 'Transient notifications for progress, achievements, and system feedback.',                      category: 'navigation',  tags: ['feedback', 'notification', 'transient'],      status: 'ready' },
  { id: 'motion-tabs',      title: 'Motion tabs',                  description: 'Folder-tabbed showcase of the four motion principles.',                                          category: 'navigation',  tags: ['tabs', 'motion', 'showcase'],                 status: 'experimental' },

  { id: 'spring-cards',                   title: 'Spring card entrance',                   description: 'Cards stagger in with spring physics on mount.',                                                          category: 'motion', tags: ['entrance', 'spring'],                 status: 'draft' },
  { id: 'scroll-editorial-story',         title: 'Scroll editorial story',                 description: 'Scroll-linked composition with four chapters, live controls, and persistent iteration history.',      category: 'motion', tags: ['scroll', 'editorial'],                status: 'experimental' },
  { id: 'image-cover-reveal-full',        title: 'Image cover reveal — full bleed',        description: 'Cover sweeps left on scroll to reveal a full-viewport image. Text colour splits at the cover edge.',  category: 'motion', tags: ['scroll', 'reveal'],                   status: 'experimental' },
  { id: 'image-cover-reveal-boxed',       title: 'Image cover reveal — boxed',             description: 'Same cover-sweep mechanic in a fixed-height box. Reveals as it scrolls into view.',                   category: 'motion', tags: ['scroll', 'reveal'],                   status: 'experimental' },
  { id: 'experimental-editorial-motion',  title: 'Experimental editorial motion',          description: 'Nine scroll and interaction patterns exploring editorial motion principles.',                          category: 'motion', tags: ['experimental', 'showcase'],           status: 'experimental' },
]
