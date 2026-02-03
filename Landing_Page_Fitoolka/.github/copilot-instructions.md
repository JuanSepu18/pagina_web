# Copilot Instructions - Fitoolka Landing Page

## Project Overview
A single-page landing site for Fitoolka, a fintech financial advisory platform. The site presents the value proposition with a clean, modern interface featuring navigation, hero section, and footer.

## Architecture & Structure

### Core Files
- **index.html**: Single-page layout with semantic structure (navbar, main section, footer)
- **scss/main.scss**: Source stylesheet with SCSS variables for color management
- **css/main.css**: Compiled CSS output (generated from SCSS, do not edit directly)
- **assets/svg/**: Logo and icon assets (SVG format preferred for scalability)
- **assets/img/**: Image directory for raster assets (currently empty)

### Design System
**Color Palette** (defined in main.scss):
- `$primary-color: #e5e7eb` (navbar/light gray)
- `$secondary-color: #cebaee` (footer/purple)
- `$tertiary-color: #FDCB58` (accent/yellow) - currently unused, reserved for CTAs
- `$quaternary: #5E17EB` (brand purple) - currently unused
- `$primary-text-color: black`
- Font: "Manrope" (Google Fonts, weights 200-800)

## Developer Workflow

### CSS Development
1. **Always edit SCSS** (`scss/main.scss`), never directly modify `css/main.css`
2. Compile SCSS to CSS using your build tool (e.g., `sass scss/main.scss css/main.css`)
3. Verify compiled CSS updates before testing in browser

### Asset Management
- Place SVG logos/icons in `assets/svg/` (preferred format)
- Place raster images (PNG/JPG) in `assets/img/`
- Reference assets with relative paths: `./assets/svg/logo_fitoolka.svg`

### HTML Structure
- Follow semantic HTML: `<nav>`, `<main>`, `<article>`, `<footer>`
- All navigation buttons in navbar are placeholders (Inicio, Planes, Contacto, Nosotros)
- Hero section content in `<article>` with nested `<div class="first-section">`

## Key Patterns

### CSS Resets
Body has zero margin/padding globally (line 9-11 in main.scss). Account for this when spacing components.

### Responsive Setup
Viewport meta tag configured for mobile responsiveness: `width=device-width, initial-scale=1.0`

### Font Loading
Google Fonts "Manrope" preconnected for performance. Fallback to system sans-serif.

## Common Tasks

**Adding new sections**: Create semantic HTML elements in index.html, style with SCSS classes (e.g., `.plans-section`, `.about-section`)

**Color updates**: Modify SCSS variables at the top of main.scss, recompile CSS

**Navigation refinement**: Update navbar buttons in HTML; add click handlers or link destinations as needed

## Notes
- Title tag placeholder: "Document" (update to "Fitoolka - Your Financial Advisor")
- Footer currently contains "hola" placeholder text
- No JavaScript framework in use (vanilla HTML/CSS only)
- Unused brand colors ($tertiary-color, $quaternary) are reserved for future features
