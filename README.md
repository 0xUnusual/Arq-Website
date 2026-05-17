# 📐 Arquitecto — Premium Architecture Portfolio

A minimalist, highly elegant, and world-class architectural portfolio template designed for elite design studios. Built purely with semantic **HTML5**, **CSS3 (Custom Variables & Grid)**, and **Modular Vanilla JavaScript**. No heavy external dependencies, yielding instantaneous page speeds and absolute structural control.

---

## 🌟 Key Innovations & Immersive Features

### 1. 📏 Architectural Blueprint Grid Background
The entire website features a subtle, fixed blueprint drafting grid overlay:
*   An ultra-fine technical grid layout with major axis crossings and dynamic opacity.
*   Acts as a digital drawing board that sets a highly atmospheric architectural tone immediately.
*   Styled dynamically using custom CSS variables, adapting flawlessly to both Light and Dark themes.

### ✒️ 2. Theme-Swapping Blueprint Preloader
A state-of-the-art interactive SVG preloader designed to mimic a professional blueprinted draft:
*   **Drafting Sequence:** Renders vector blueprint components—including helper coordinate axes, circular structural grids, technical scales (1:50 bar), title blocks (*cajetín de plano*), and a drawing compass.
*   **Theme Inversion:** Automatically detects and applies the user's active theme (Light/Dark). The preloader switches colors dynamically (white-on-black or black-on-white) to ensure a perfectly seamless initial impression.
*   **Smart Loading Engine:** Powered by a customized JavaScript sequence that tracks page resources, updates technical scale labels in real-time, and guarantees smooth entry without caching delays.

### 📝 3. Tracing-Paper Glassmorphism
Floating panels and layout blocks (statistics, contact cards, header, and footer) are designed to feel like physical tracing paper (*papel vegetal*):
*   Combines `backdrop-filter: blur(12px)` and modern semi-translucent variables.
*   Framed with ultra-crisp `1px` technical alignment borders that resemble engineering drawings.

### 🎬 4. Cinematic Outbound Page Transitions
Maintains complete visual continuity during navigation:
*   Clicking nav links triggers an elegant sliding transition where the blueprint grid canvas slides up to mask the screen before loading the new page.
*   Ensures that every section transition (Inicio, Estudio, Proyectos, Contacto) keeps the user immersed.

### 🖼️ 5. Curated High-Definition Galleries
Every showcased project is updated with professional, coherent architectural photography:
*   **Villa Serena (Marbella, Spain):** Focuses on a gorgeous minimalist concrete-and-glass exterior villa paired with matching raw concrete bathroom detailings and sunlit indoor-outdoor lounges.
*   **Penthouse Horizon:** High-rise luxury minimalist spaces with floor-to-ceiling vistas overlooking city horizons.

### 🚀 6. Social Media & SEO Optimization
Equipped with dedicated **Open Graph (og:)** and **Twitter Card** preview metadata across all pages, allowing beautiful rich-cards to display in messages, feeds, and search shares.

---

## 📂 Modular File Structure

The project has been architected with neat modularity:

```bash
📂 Website Arq
├── 📁 css
│   ├── variables.css      # Design tokens: grid patterns, core light/dark variables
│   ├── style.css          # Main layout, glassmorphic sheets, border rules
│   ├── animations.css     # Theme transition rules, drafting animation keyframes
│   └── responsive.css     # Fluid typography, flexible grids, and mobile overrides
├── 📁 js
│   ├── main.js            # Global controller, preloader coordination, image tracking
│   ├── scroll.js          # IntersectionObserver reveals & subtle parallax
│   ├── animations.js      # Cinematic hero text slide-ups
│   ├── magnetic.js        # Organic hover physics for buttons & navigation
│   └── transitions.js     # Page exit transition using blueprint drawing sheet overlay
├── 📄 index.html          # Main Portfolio / Homepage
├── 📄 about.html          # Studio Philosophy & Profile
├── 📄 projects.html       # Full Interactive Project Catalog
├── 📄 project-details.html# High-Definition Detail View (Villa Serena)
├── 📄 contact.html        # Interactive Contact Form
├── 📄 imagen de preloader.png# High-definition social sharing link preview image
└── 📄 README.md           # Project Documentation
```

---

## ⚡ Setup & Local Development

### 1. Zero Installation
The project runs entirely on native web standards. You can open `index.html` directly in any modern browser:
```bash
# On Windows, you can launch it using your favorite explorer double-click or:
start index.html
```

### 2. Best Development Experience
For optimal local resource caching, transitions, and loading states, it is recommended to run a lightweight local development server:
```bash
# Using Python
python -m http.server 8000

# Using Node.js (Live Server / Vite / http-server)
npx http-server -p 8000
```
Open `http://localhost:8000` to preview.

---

## 🛠️ Design System Adjustments

The core visuals are driven by CSS custom properties in [variables.css](file:///c:/Users/monte/OneDrive%20-%20Instituto%20Tecnol%C3%B3gico%20de%20Las%20Am%C3%A9ricas%20(ITLA)/Escritorio/Website%20Arq/css/variables.css):
*   `--grid-color`: Controls the visibility of major grid axes.
*   `--bg-grid`: A custom `linear-gradient` / `radial-gradient` that creates the grid layout paper look.
*   `--panel-bg`: Translucent tint imitating premium matte architect paper.
*   `--text-primary` & `--text-secondary`: High-contrast typography designed for maximum readability.

---

## 📄 License

MIT License. Designed with ultimate attention to detail for premium architectural agencies.
