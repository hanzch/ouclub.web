# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### claude 注意事项

```bash
/mnt/d/Programming/nodejs/npm
```

### Running the Development Server
```bash
npm run dev
```
Starts the Nuxt development server on http://localhost:3000 (configured to listen on all network interfaces).

### Building for Production
```bash
npm run build    # Build the application
npm run preview  # Preview the production build locally
```

### Generate Static Site
```bash
npm run generate  # Generate static HTML files
```

## Architecture Overview

This is a Nuxt 3 marketing website for OU Tennis Club, featuring:

### Technology Stack
- **Framework**: Nuxt 3 (Vue 3 with SSR enabled)
- **Styling**: Tailwind CSS with custom color scheme (site-red: #882214, site-green: #283a00, site-yellow: #f2c94c)
- **Key Dependencies**: vue3-carousel, @nuxt/fonts, @nuxtjs/robots, @zadigetvoltaire/nuxt-gtm

### Project Structure
- `/components/` - Vue components following atomic design principles
  - Layout components: SiteHeader, SiteFooter, StickyBar
  - UI components: EnquireForm, Products, Modal, OuButton, Testimonial
- `/pages/` - Route pages (index.vue, thank-you.vue)
- `/assets/` - Static assets including Tailwind CSS and images
- `/layouts/` - Page layout templates
- `/server/` - Server directory (currently unused)
- `/public/` - Public static files

### Key Architectural Patterns
1. **Static Content**: Most content is hardcoded in components (no CMS or database)
2. **Component Naming**: Uses `ou-` prefix for custom CSS classes
3. **Form Handling**: EnquireForm submits to external service (placeholder URL needs configuration)
4. **State Management**: Uses Vue 3 Composition API with local component state only
5. **Responsive Design**: Mobile-first approach using Tailwind utilities

### Important Configuration
- **nuxt.config.ts**: Defines SEO metadata, fonts (Poppins, Sorts Mill Goudy, Cormorant), and router settings
- **tailwind.config.js**: Custom color palette and font family configuration

### Development Notes
- No test framework is currently configured
- No linting tools are set up
- Form submission endpoint needs to be configured in EnquireForm.vue
- YouTube video IDs are embedded directly in components

## Communication Rules
- **所有与用户的交流都必须使用中文** - All communication with users must be in Chinese