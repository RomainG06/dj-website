# DJ Website - Copilot Instructions

## Architecture Overview

This is a single-page DJ portfolio website built with React 19 + TypeScript + Vite. The project uses a component-based architecture with all page sections as standalone components.

Design goal: The site should feel modern, stylish, and visually appealing. Focus on clean layouts, smooth scrolling, responsive design, and engaging visual hierarchy. Think contemporary music/entertainment sites.

## Design Direction

Theme: Neon / Nightclub / Futuristic but clean
Mood: Dark, elegant, immersive — not flashy or overloaded
Goal: Instantly communicate the DJ’s universe, professionalism, and musical identity

## Color Palette (Guidelines)

**CSS Variables (defined in src/index.css):**

```css
/* Backgrounds */
--bg-primary: #0a0a0a;          /* Deep black */
--bg-secondary: #1a1a2e;        /* Dark charcoal */
--bg-tertiary: #16213e;         /* Navy dark */

/* Text Colors */
--text-primary: #ffffff;        /* Pure white */
--text-secondary: #b8b8b8;      /* Light gray */
--text-muted: #808080;          /* Medium gray */

/* Neon Accents */
--neon-violet: #8a2be2;         /* BlueViolet - primary brand */
--neon-pink: #ff1493;           /* DeepPink - secondary brand */
--neon-blue: #00d4ff;           /* Electric blue */
--neon-green: #39ff14;          /* Laser green (sparingly) */

/* Gradients */
--gradient-primary: linear-gradient(135deg, #8a2be2, #ff1493);
--gradient-secondary: linear-gradient(135deg, #00d4ff, #8a2be2);
--gradient-accent: linear-gradient(135deg, #ff1493, #8a2be2, #00d4ff);

/* Glows & Shadows */
--glow-violet: 0 0 20px rgba(138, 43, 226, 0.5);
--glow-pink: 0 0 20px rgba(255, 20, 147, 0.5);
--glow-blue: 0 0 20px rgba(0, 212, 255, 0.5);
--shadow-dark: 0 10px 40px rgba(0, 0, 0, 0.5);

/* Borders */
--border-neon: 1px solid rgba(138, 43, 226, 0.3);
--border-subtle: 1px solid rgba(255, 255, 255, 0.1);
```

**Usage Guidelines:**
- Use dark backgrounds (`--bg-primary`, `--bg-secondary`) as base
- Apply neon colors for accents: borders, text highlights, CTAs, hover states
- Use gradients sparingly for headings and special elements
- Add glows for depth and neon effect
- `--neon-green` only for micro-interactions (audio indicators, separators)

⚠️ **Moderation is key:**
- Prefer glows, gradients, borders over flat neon backgrounds
- Maintain high contrast and readability
- Emphasize elegance over flashiness

**Tech Stack:**
- Build: Vite 7 with React Fast Refresh (HMR)
- Framework: React 19.2 with TypeScript 5.9
- Styling: Tailwind CSS 4.1 (v4 syntax) + custom CSS
- Linting: ESLint 9 with flat config

## File Structure Conventions

```
src/
  components/     # All UI components (currently stub files)
    Hero.jsx
    Navbar.jsx
    MusicPlayer.jsx
    About.jsx
    Contact.jsx
    Gallery.jsx
    Footer.jsx
  App.tsx         # Main app component (currently default Vite template)
  main.tsx        # Entry point with StrictMode
  index.css       # Global styles
```

## Critical Patterns

### TypeScript + JSX Coexistence
- **Main app**: TypeScript (`.tsx`) with strict type checking enabled
- **Components**: Currently plain JSX (`.jsx`) - **no TypeScript yet**
- When converting components to TypeScript, use `.tsx` extension and add proper type annotations

### Styling Approach
- **Tailwind CSS v4**: Note this is Tailwind 4.x with new CSS-first configuration
- Global CSS variables in [index.css](src/index.css) define the dark theme (`#242424` background)
- Component-specific styles in [App.css](src/App.css)

### TypeScript Configuration
Uses project references with split configs:
- [tsconfig.app.json](tsconfig.app.json): App code (ES2022, bundler mode, strict)
- [tsconfig.node.json](tsconfig.node.json): Build tooling
- [tsconfig.json](tsconfig.json): Root references only

## Development Workflow

**Commands:**
```bash
npm run dev      # Start dev server with HMR (default port 5173)
npm run build    # Type check + production build
npm run lint     # Run ESLint
npm run preview  # Preview production build
```

**Tailwind Setup:**
- Tailwind v4 has been installed but config needs completion
- Previous `tailwindcss init -p` command failed - config file may be missing
- May need to add Tailwind directives to CSS or configure `@import "tailwindcss"`

## Current State & Next Steps

**Incomplete areas:**
- All component files in `src/components/` are empty stubs
- Tailwind configuration incomplete (init command failed)
- [App.tsx](src/App.tsx) still has default Vite template content

**When implementing components:**
1. Most components are plain JSX - match existing pattern or convert to TypeScript
2. Import and compose components in [App.tsx](src/App.tsx) to replace template
3. For MusicPlayer, consider HTML5 audio API or library integration
4. Follow single-file component pattern (no separate component folders)

**Guidelines for implementing components**
1. Components should reflect a modern DJ website: clean typography, good spacing, visually appealing sections
2. Smooth scrolling between sections; responsive on mobile, tablet, and desktop
3. MusicPlayer: HTML5 audio API or library with simple UI and play/pause functionality
4. Gallery: images/videos with hover effects and grid layout
5. Navbar: sticky/fixed, minimalist, modern design
6. Footer: social links with consistent modern styling
7. Footer: social links with consistent modern styling

## SEO Guidelines (Very Important)
- Copilot should always consider SEO when generating code:
- Semantic HTML (header, main, section, footer)
- Only one <h1> (DJ name)
- Logical heading hierarchy (h2, h3)
- Descriptive text content (not just visuals)
Prepare for:
- meta title
- meta description
- Open Graph tags
- Images must include meaningful alt attributes

This is a marketing site, not just a visual demo.

## Component Implementation Guidelines
When implementing components, Copilot should follow these rules:
1. Keep components simple, readable, and focused
2. Favor vertical rhythm and spacing over visual noise
3. Smooth scrolling between sections
4. Navbar:
- Sticky or fixed
- Minimal text
- Neon hover underline or glow
5. Hero:
- Full viewport height
- DJ name as main focus
- Strong visual identity
6. MusicPlayer:
- HTML5 audio
- Clean play/pause UI
- Subtle neon accent (progress bar or button)
7. Footer:
- Social icons
- Consistent neon accent usage

## ESLint Configuration

Uses ESLint 9 flat config format in [eslint.config.js](eslint.config.js). React Hooks and React Refresh plugins are configured. For production, consider enabling type-aware rules (see README).
