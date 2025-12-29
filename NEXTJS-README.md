# CanadaVisa - Next.js Landing Page

This project has been converted to **Next.js 14** with the App Router.

## Project Structure

```
/app
  ├── layout.tsx          # Root layout with metadata
  ├── page.tsx            # Main home page (using standard img tag)
  └── page-optimized.tsx  # Alternative page using Next.js Image component

/components
  ├── Navigation.tsx              # Sticky navigation header
  ├── HeroSection.tsx            # Hero section with standard img
  ├── HeroSectionOptimized.tsx   # Hero section with Next.js Image
  ├── ServiceGrid.tsx            # Immigration services grid
  ├── ToolsSection.tsx           # CRS Calculator & PNP Finder
  ├── ChatbotFAB.tsx            # Floating chat button
  ├── Footer.tsx                # Footer with newsletter
  └── ui/                       # Reusable UI components

/styles
  └── globals.css         # Global styles and Tailwind config
```

## Getting Started

### Installation

```bash
npm install
# or
yarn install
# or
pnpm install
```

### Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## Key Features

### Next.js Benefits
- **Server-Side Rendering (SSR)**: Improved SEO and initial page load
- **App Router**: Modern Next.js routing with React Server Components
- **Image Optimization**: Use `HeroSectionOptimized` for automatic image optimization
- **TypeScript**: Full type safety throughout the application
- **Metadata API**: SEO-friendly meta tags in `layout.tsx`

### Components

All components are marked with `'use client'` directive since they use:
- React hooks (`useState`, `useEffect`)
- Browser APIs (scroll events)
- Interactive features (buttons, forms)

### Optimized vs Standard Images

**Standard Version** (`page.tsx` + `HeroSection.tsx`):
- Uses regular `<img>` tag
- Works immediately without configuration
- Good for external images

**Optimized Version** (`page-optimized.tsx` + `HeroSectionOptimized.tsx`):
- Uses Next.js `<Image>` component
- Automatic image optimization
- Better performance
- Requires `next.config.js` configuration

To use the optimized version, rename `page-optimized.tsx` to `page.tsx`.

## Configuration Files

### tsconfig.json
- Configured for Next.js with path aliases (`@/*`)
- Strict TypeScript settings enabled

### next.config.js
- Image domain configuration for Unsplash
- Add more domains as needed for external images

### package.json
- Next.js 14 dependencies
- React 18.3
- Lucide icons
- Radix UI components

## Styling

- **Tailwind CSS v4**: Configured in `globals.css`
- **Custom Colors**: 
  - Deep Navy: `#00204E`
  - Maple Red: `#D80621`
- **Custom Typography**: Oversized headlines for hero section
- **Animations**: Smooth transitions and micro-interactions

## Build for Production

```bash
npm run build
npm run start
```

## Deploy

Deploy easily on [Vercel](https://vercel.com):

```bash
vercel
```

Or any other Next.js hosting platform (Netlify, AWS Amplify, etc.)

## Notes

- All components use client-side rendering (`'use client'`)
- Images from Unsplash are configured in `next.config.js`
- The project uses Tailwind CSS v4 with custom tokens
- Smooth scrolling and animations are built-in

## Customization

### Change Colors
Edit the color values in component files:
- Primary: `#00204E` (Deep Navy)
- Accent: `#D80621` (Maple Red)

### Add New Pages
Create new files in the `/app` directory:
```
/app/about/page.tsx
/app/services/page.tsx
```

### Add New Components
Create new components in `/components`:
```tsx
'use client';

export function NewComponent() {
  // Your component code
}
```

## Support

For issues or questions, refer to:
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Lucide Icons](https://lucide.dev/)
