# Typography System

This document outlines the consistent typography system implemented for the Cottage Grove Concrete website.

## Font Family
- **Primary**: Inter (Google Fonts) - loaded in `app/layout.tsx`
- **Fallback**: System fonts (sans-serif)

## Typography Scale

### Display Sizes (Hero Sections)
- `text-display-2xl`: 72px (4.5rem) - Large hero headings
- `text-display-xl`: 60px (3.75rem) - Medium hero headings  
- `text-display-lg`: 48px (3rem) - Small hero headings

### Heading Sizes
- `text-heading-xl`: 36px (2.25rem) - Main page headings (H2)
- `text-heading-lg`: 30px (1.875rem) - Section headings (H3)
- `text-heading-md`: 24px (1.5rem) - Subsection headings (H4)
- `text-heading-sm`: 20px (1.25rem) - Small headings (H5)

### Body Text Sizes
- `text-body-xl`: 18px (1.125rem) - Large body text, hero descriptions
- `text-body-lg`: 16px (1rem) - Standard body text
- `text-body-md`: 14px (0.875rem) - Small body text, labels
- `text-body-sm`: 12px (0.75rem) - Fine print, captions

### Special Text
- `text-caption`: 12px (0.75rem) - Image captions, metadata
- `text-overline`: 12px (0.75rem) - Uppercase labels (use with `.text-overline` utility)

## Usage Guidelines

### Page Structure
```tsx
// Page title (H1)
<h1 className="text-display-lg sm:text-display-xl">Page Title</h1>

// Section heading (H2)  
<h2 className="text-heading-lg sm:text-heading-xl">Section Title</h2>

// Subsection heading (H3)
<h3 className="text-heading-md">Subsection Title</h3>

// Body text
<p className="text-body-lg">Standard paragraph text</p>

// Small text
<p className="text-body-md">Labels, form text</p>
```

### Component Defaults
- **Button**: `text-body-md`
- **CardTitle**: `text-heading-md` 
- **CardDescription**: `text-body-md`
- **Navigation**: `text-body-md`
- **Form Labels**: `text-body-md`

### Responsive Scaling
Use responsive prefixes for larger screens:
```tsx
<h1 className="text-display-lg sm:text-display-xl md:text-display-2xl">
  Responsive Hero Title
</h1>
```

## Line Heights & Letter Spacing
- **Display sizes**: Line height 1.1, letter spacing -0.02em
- **Headings**: Line height 1.2-1.4, letter spacing -0.01em  
- **Body text**: Line height 1.5-1.6, no letter spacing
- **Captions**: Line height 1.4

## Best Practices

1. **Maintain hierarchy**: Use display → heading → body progression
2. **Consistent spacing**: Use the defined scale, avoid custom sizes
3. **Responsive design**: Scale up typography on larger screens
4. **Accessibility**: Ensure sufficient contrast and readable sizes
5. **Performance**: Typography is optimized for web fonts

## Migration Notes

The following old classes have been replaced:
- `text-4xl`, `text-5xl`, `text-6xl` → `text-display-*`
- `text-3xl` → `text-heading-xl`
- `text-2xl` → `text-heading-lg` 
- `text-xl` → `text-heading-md`
- `text-lg` → `text-body-xl`
- `text-base` → `text-body-lg`
- `text-sm` → `text-body-md`
- `text-xs` → `text-body-sm`

## Files Updated
- `tailwind.config.ts` - Typography scale definition
- `app/globals.css` - Utility classes
- `app/page.tsx` - Homepage typography
- `app/contact/page.tsx` - Contact page typography  
- `app/gallery/page.tsx` - Gallery page typography
- `components/site-header.tsx` - Header typography
- `components/site-footer.tsx` - Footer typography
- `components/ui/card.tsx` - Card component defaults
- `components/ui/button.tsx` - Button component defaults 