# Design System Document: Technical Precision & Tonal Depth

## 1. Overview & Creative North Star
**Creative North Star: The Sovereign Sentinel**

This design system moves beyond the "standard SaaS" aesthetic to create a high-authority, editorial experience for flood detection and coordination. While inspired by IBM’s logic and rigor, our approach is more intentional: we treat data as a critical, life-saving narrative. 

By utilizing **Organic Brutalism**, we combine the aggressive precision of sharp 0px corners with a sophisticated, airy layout that feels both indestructible and human-centric. We break the "template" look by favoring wide-open horizontal expanses, monospaced data clarity, and a "No-Line" philosophy that uses tonal layering rather than borders to define structure.

---

## 2. Colors & Surface Philosophy
The palette is rooted in deep, authoritative blues and a technical neutral scale built on OKLCH color tokens. The goal is "Professional Trustworthiness" through depth, not decoration.

All color references use the CSS custom properties defined in `globals.css`. OKLCH values are listed for reference.

### Core Tokens
| Token | Light Mode | Dark Mode | Role |
|---|---|---|---|
| `--background` | `oklch(1 0 0)` | `oklch(0.141 0.005 285.823)` | Main canvas |
| `--foreground` | `oklch(0.141 0.005 285.823)` | `oklch(0.985 0 0)` | Primary text |
| `--primary` | `oklch(0.488 0.243 264.376)` | `oklch(0.424 0.199 265.638)` | Brand blue — CTAs, alerts |
| `--primary-foreground` | `oklch(0.97 0.014 254.604)` | `oklch(0.97 0.014 254.604)` | Text on primary |
| `--muted` | `oklch(0.967 0.001 286.375)` | `oklch(0.274 0.006 286.033)` | Subdued zones |
| `--muted-foreground` | `oklch(0.552 0.016 285.938)` | `oklch(0.705 0.015 286.067)` | Labels, captions |
| `--border` | `oklch(0.92 0.004 286.32)` | `oklch(1 0 0 / 10%)` | Structural boundaries |
| `--card` | `oklch(1 0 0)` | `oklch(0.21 0.006 285.885)` | Card surfaces |

### The Surface Hierarchy
Depth is created through a "Nested Tier" system using the above tokens.
*   **Base Layer:** `var(--background)` for the main canvas.
*   **Content Areas:** `var(--muted)` to define large functional zones.
*   **Active Elements:** `var(--card)` for cards or inputs that need to "pop" toward the user.
*   **Subdued Text:** `var(--muted-foreground)` for timestamps, labels, and secondary data.

### The "No-Line" Rule
**Explicit Instruction:** Do not use 1px solid borders to section off the UI. 
Boundaries must be defined solely by shifting from `--background` to `--muted`. For example, a dashboard widget does not have a border; it is simply a `--card` rectangle sitting on a `--muted` background.

### Glass & Signature Textures
To add a premium feel to hero sections or critical alerts:
*   **The Blueprint Gradient:** Use a linear gradient across the `--primary` hue range (`oklch(0.488 0.243 264.376)` → `oklch(0.546 0.245 262.881)`) for high-impact CTAs.
*   **Glass Overlays:** For floating modals or "In-Progress" notifications, use `var(--card)` with an 80% opacity and a `backdrop-blur` of 12px. This creates a "frosted glass" look that keeps the user grounded in the data behind it.

---

## 3. Typography
We use a single monospaced typeface throughout — **Space Mono** — loaded via `next/font/google` and applied globally through `spaceMono.className` on the `<html>` element. This is a deliberate, uncompromising choice: every character on screen feels machined and data-precise.

*   **Font:** Space Mono, weight 400 — the sole typeface. No serif fallbacks, no humanist alternatives.
*   **Headlines lean on size and spacing,** not font variation, to create hierarchy.
*   **All numeric data, labels, and body copy share the same monospaced DNA** — reinforcing the terminal/blueprint aesthetic.

**Editorial Hierarchy:**
*   **Display-LG (3.5rem / Space Mono):** Use for critical flood level percentages or single-word status alerts.
*   **Headline-SM (1.5rem / Space Mono):** Use for section headers with generous leading.
*   **Label-MD (0.75rem / Space Mono):** Use for timestamps, coordinates, and sensor IDs. Pair with `var(--muted-foreground)` to create distinction without breaking the monospaced rhythm.

---

## 4. Elevation & Depth
In this system, elevation is a product of light and tone, not shadows.

*   **Tonal Layering:** To create hierarchy, stack surfaces. Place a `var(--card)` element inside a `var(--muted)` area to indicate a "pressed" or "embedded" utility.
*   **Ambient Shadows:** Use shadows only for temporary floating elements (e.g., tooltips, dropdowns). 
    *   *Spec:* `0 24px 48px -12px`, Color: `var(--foreground)` at 6% opacity.
*   **The "Ghost Border" Fallback:** If high-density data requires visual separation, use `var(--border)` at 15% opacity. It should be felt, not seen.

---

## 5. Components

### Buttons
*   **Primary:** `var(--primary)` background, `var(--primary-foreground)` text. Sharp 0px corners — explicitly override `--radius`. Use a 1.5px "Ghost Border" of white at 20% opacity inside the button for a "machined" look.
*   **Secondary:** `var(--secondary)` background, `var(--secondary-foreground)` text. Sharp corners.
*   **States:** On hover, darken `--primary` slightly (e.g., chart-5 level: `oklch(0.424 0.199 265.638)`). No transitions; state changes should be instant and digital.

### Input Fields
*   **Styling:** `var(--background)` or `var(--card)` background with a bottom-only border using `var(--border)` (2px).
*   **Focus:** Border shifts to `var(--ring)`. Background remains flat.
*   **Typography:** All input text is Space Mono. Helper text/labels use `var(--muted-foreground)` at `label-sm` (0.75rem) to visually distinguish without changing the font.

### Cards & Lists
*   **Strict Rule:** No dividers. Use `spacing-6` (2rem) of vertical whitespace or a background shift from `var(--background)` to `var(--muted)` to separate items.
*   **Sharpness:** All containers must have a `0px` border radius. The CSS variable `--radius` exists for shadcn compatibility but must be overridden (`rounded-none`) everywhere. This communicates the "Industrial/IBM" aesthetic.

### Data Visualization (Signature Component)
*   **The Pulse:** For live flood sensors, use a `var(--primary)` dot with a repeating CSS scale animation to indicate "active heartbeats."
*   **The Grid:** Use `var(--border)` at 5% opacity to create a background grid (spacing 40px) on dashboard views, mimicking architectural blueprints.

---

## 6. Do’s and Don’ts

### Do
*   **Do** use extreme horizontal whitespace. If a chart can span the full width of the viewport, let it.
*   **Do** lean on `var(--muted-foreground)` and size to distinguish data labels from body text — Space Mono carries the technical weight.
*   **Do** use "surface nesting" (`--background` → `--muted` → `--card`) to group related flood data without cluttering the screen with lines.

### Don’t
*   **Don’t** use rounded corners. Even a 2px radius breaks the architectural integrity of this system. Always apply `rounded-none` to override shadcn defaults.
*   **Don’t** use standard grey shadows. If a shadow is needed, tint it with 2% of `var(--primary)` blue to keep it "cool" and professional.
*   **Don’t** use "Information" icons (like ⓘ). Use "Technical Labels" (e.g., `[INFO]`) in Space Mono to provide a more bespoke, data-driven feel.

### Accessibility Note
Ensure that `var(--muted-foreground)` text on `var(--background)` maintains a contrast ratio of at least 4.5:1. When using `var(--primary)` blue for critical flood alerts, ensure it is paired with `var(--primary-foreground)` for maximum visibility during emergency coordination.
