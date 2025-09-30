# Technology Stack

## Framework & Build System

- **Slidev**: Vue-based presentation framework
- **Node.js**: Runtime environment (>=18.0.0 required)
- **TypeScript**: Used for setup files and type definitions
- **Vue 3**: Component framework for layouts
- **CSS**: Styling with CSS custom properties and Tailwind-like utilities

## Package Management

- **pnpm**: Primary package manager (pnpm-lock.yaml present)
- **npm**: Alternative package manager supported

## Dependencies

- `@slidev/types`: TypeScript definitions for Slidev
- `@slidev/cli`: Development and build tooling

## Common Commands

### Development

```bash
npm run dev          # Start development server with example.md
```

### Building & Export

```bash
npm run build        # Build presentation from example.md
npm run export       # Export to PDF
npm run screenshot   # Export to PNG format
```

## Code Syntax Highlighting

- **Shiki**: Configured with Vitesse themes (light/dark)
- Supports TypeScript, JavaScript, and other common languages

## Theme Configuration

- Supports both light and dark color schemes
- Default fonts: Nunito Sans (sans-serif), Fira Code (monospace)
- Primary theme color: `#5d8392`
