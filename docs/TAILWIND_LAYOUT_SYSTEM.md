# Tailwind CSS Layout System Documentation

## Overview

This document describes the Tailwind CSS based responsive grid layout system. The system provides a 12-column grid on tablet/desktop and a 6-column grid on mobile, using Tailwind utility classes and SCSS for styling.

## Requirements

### Breakpoints
- **xs (Mobile)**: 0px - 767px
- **sm (Tablet)**: 768px - 1365px
- **md (Desktop)**: 1366px and above

### Grid Configuration

#### Desktop (≥1366px)
- **Columns**: 12
- **Max Content Width**: 1200px
- **Alignment**: Grid is centered on the page
- **Gutters**: 24px between columns
- **Grid Margins**: 24px on both left and right sides

#### Tablet (768px - 1365px)
- **Columns**: 12 (same as desktop)
- **Max Content Width**: 1200px
- **Gutters**: 24px between columns
- **Grid Margins**: 24px on both left and right sides
- **Behavior**: Grid expands to fill the entire screen width and scales with the content, up to a maximum of 1200px

#### Mobile (<768px)
- **Columns**: 6
- **Gutters**: 16px between columns
- **Page Margins**: 16px on both left and right sides
- **Behavior**: Grid fills the entire screen width and scales with the content until the next breakpoint (tablet)

## Implementation

### Tailwind Configuration

The Tailwind config is defined in `tailwind.config.js`:

```javascript
export default {
  theme: {
    screens: {
      xs: '0px',
      sm: '768px',
      md: '1366px',
    },
    extend: {
      spacing: {
        'gutter-mobile': '16px',
        'gutter-tablet': '24px',
        'gutter-desktop': '24px',
        'margin-mobile': '16px',
        'margin-tablet': '24px',
        'margin-desktop': '24px',
      },
      maxWidth: {
        'content': '1200px',
      },
      gap: {
        'gutter-mobile': '16px',
        'gutter-tablet': '24px',
        'gutter-desktop': '24px',
      },
    },
  },
}
```

### Core Components

#### 1. PageContainer
**Location**: `src/tailwind/components/PageContainer.tsx`

Wraps page content with proper margins. Does NOT constrain width.

**Usage**:
```tsx
<PageContainer>
  {/* Page content */}
</PageContainer>
```

**Implementation**:
- Mobile: `px-4` (16px margins)
- Tablet: `px-6` (24px margins)
- Desktop: `px-6` (24px margins)

#### 2. ContentContainer
**Location**: `src/tailwind/components/ContentContainer.tsx`

Constrains content to 1200px max-width and centers it. Applies responsive margins.

**Usage**:
```tsx
<PageContainer>
  <ContentContainer>
    {/* Content constrained to 1200px */}
  </ContentContainer>
</PageContainer>
```

**Implementation**:
- `max-w-[1200px]` - Max width constraint
- `mx-auto` - Center alignment
- Responsive padding: `px-4 sm:px-6 md:px-6`

#### 3. GridContainer
**Location**: `src/tailwind/components/GridContainer.tsx`

Creates a grid container with automatic column configuration:
- Mobile (xs): 6 columns, 16px gutters
- Tablet (sm): 12 columns, 24px gutters
- Desktop (md): 12 columns, 24px gutters

**Usage**:
```tsx
<GridContainer>
  {/* Grid items */}
</GridContainer>
```

**Implementation**:
- `grid grid-cols-6 sm:grid-cols-12 md:grid-cols-12` - Column configuration
- `gap-[16px] sm:gap-[24px] md:gap-[24px]` - Gutter spacing

#### 4. GridItem
**Location**: `src/tailwind/components/GridItem.tsx`

A grid item wrapper that handles responsive sizing. Automatically converts between 6-column (mobile) and 12-column (tablet/desktop) grids.

**Props**:
- `xs?: number | 'grow' | 'auto'` - Size for mobile (6-column grid)
- `sm?: number | 'grow' | 'auto'` - Size for tablet (12-column grid)
- `md?: number | 'grow' | 'auto'` - Size for desktop (12-column grid)
- `className?: string` - Additional classes

**Usage**:
```tsx
<GridContainer>
  <GridItem xs={6} sm={6} md={5}>
    {/* 5/12 on desktop, 6/6 on mobile */}
  </GridItem>
  <GridItem xs={6} sm={6} md={7}>
    {/* 7/12 on desktop, 6/6 on mobile */}
  </GridItem>
</GridContainer>
```

## Styling Approach

### Layout Classes (Inline)
Keep layout/structural classes inline in JSX:
- Display: `block`, `flex`, `grid`, `hidden`
- Flexbox/Grid: `flex-row`, `flex-col`, `items-center`, `justify-center`, `gap-*`
- Positioning: `relative`, `absolute`, `fixed`, `static`
- Responsive layout: `md:flex`, `sm:block`, etc.
- Layout spacing: `mb-*`, `mt-*` (when used for structural spacing)
- Layout dimensions: `w-full`, `flex-1`, `h-0` (when used for layout structure)

### Styling Classes (SCSS)
Move styling/visual classes to SCSS files using `@apply`:
- Colors: `bg-[#fff3e0]`, `text-[#ff9800]`, `border-[#ff9800]`
- Borders: `border-2`, `rounded-lg`, `border-t`
- Dimensions: `w-[480px]`, `h-[328px]`, `min-h-[328px]`
- Typography: `text-4xl`, `font-bold`, `text-base`
- Visual effects: `shadow-*`, `opacity-*`
- Visual spacing: `px-8`, `py-3`, `gap-6` (when used for visual styling)

### SCSS File Structure

Each page has a corresponding SCSS file:
- `ErrorPage.tsx` → `ErrorPage.scss`
- `TrackOrder.tsx` → `TrackOrder.scss`
- `DeviceGallery.tsx` → `DeviceGallery.scss`
- `Home.tsx` → `Home.scss`

**Example SCSS**:
```scss
// ErrorPage.scss
.error-image {
  @apply w-[200px] sm:w-[380px] h-[200px] sm:h-[380px] bg-[#fff3e0] rounded-lg border-2 border-[#ff9800] mt-8 sm:mt-16;
}

.error-title {
  @apply text-4xl font-bold mb-2;
}
```

**Usage in Component**:
```tsx
import './ErrorPage.scss';

<div className="error-image flex items-center justify-center">
  <span className="error-icon">🚫</span>
</div>
```

## Usage Guide

### Basic Page Structure

```tsx
import { PageContainer, ContentContainer, GridContainer, GridItem } from '../components';
import './MyPage.scss';

const MyPage = () => {
  return (
    <PageContainer>
      <ContentContainer>
        <GridContainer>
          <GridItem xs={6} sm={12} md={12}>
            <div className="my-content">
              {/* Full width content */}
            </div>
          </GridItem>
        </GridContainer>
      </ContentContainer>
    </PageContainer>
  );
};
```

### Two-Column Layout

```tsx
<GridContainer>
  <GridItem xs={6} sm={6} md={5}>
    <div className="left-column">
      {/* Left column: 5/12 on desktop, 6/6 on mobile */}
    </div>
  </GridItem>
  <GridItem xs={6} sm={6} md={7}>
    <div className="right-column">
      {/* Right column: 7/12 on desktop, 6/6 on mobile */}
    </div>
  </GridItem>
</GridContainer>
```

### Edge-to-Edge Background with Constrained Content

```tsx
<PageContainer>
  <ContentContainer>
    {/* Regular content */}
  </ContentContainer>
  
  {/* Edge-to-edge section */}
  <div className="bg-gray-200 w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] mt-6 sm:mt-8 md:mt-8 py-6 sm:py-8 md:py-8">
    <ContentContainer>
      {/* Content constrained to 1200px */}
    </ContentContainer>
  </div>
</PageContainer>
```

### Responsive Reordering

Use Tailwind's `order` utility classes:

```tsx
<GridContainer>
  <GridItem xs={6} sm={12} md={5} className="order-1 sm:order-1 md:order-1">
    {/* First on all breakpoints */}
  </GridItem>
  <GridItem xs={6} sm={12} md={7} className="order-2 sm:order-2 md:order-2">
    {/* Second on all breakpoints */}
  </GridItem>
</GridContainer>
```

### Direct Grid Usage (Without Components)

You can also use Tailwind grid classes directly:

```tsx
<div className="grid grid-cols-6 sm:grid-cols-12 md:grid-cols-12 gap-[16px] sm:gap-[24px] md:gap-[24px]">
  <div className="col-span-6 sm:col-span-12 md:col-span-5">
    {/* 5/12 on desktop, 6/6 on mobile */}
  </div>
  <div className="col-span-6 sm:col-span-12 md:col-span-7">
    {/* 7/12 on desktop, 6/6 on mobile */}
  </div>
</div>
```

## Best Practices

1. **Use GridContainer and GridItem for consistency** - Provides automatic column conversion
2. **Keep layout classes inline** - `flex`, `grid`, `block`, positioning classes stay in JSX
3. **Move styling to SCSS** - Colors, borders, dimensions, typography go in SCSS files
4. **Use semantic class names** - Name SCSS classes by purpose, not appearance
5. **Import SCSS files in components** - Each page imports its own SCSS file
6. **Use config values when possible** - Prefer `gap-gutter-mobile` over `gap-[16px]` (if using config)
7. **Test on all breakpoints** - Ensure layouts work on mobile (6-col), tablet (12-col), and desktop (12-col)

## Common Patterns

### Full Width Row
```tsx
<GridItem xs={6} sm={12} md={12}>
  {/* Full width */}
</GridItem>
```

### Half Width (Mobile), Full Width (Tablet+)
```tsx
<GridItem xs={3} sm={6} md={6}>
  {/* 50% on mobile, 50% on tablet/desktop */}
</GridItem>
```

### Third Width (Mobile), Half Width (Tablet+)
```tsx
<GridItem xs={2} sm={6} md={6}>
  {/* 33% on mobile, 50% on tablet/desktop */}
</GridItem>
```

## Component Exports

All components are exported from `src/tailwind/components/index.ts`:

```typescript
export { PageContainer } from './PageContainer';
export { ContentContainer } from './ContentContainer';
export { GridContainer } from './GridContainer';
export { GridItem } from './GridItem';
```

## Notes

- The system uses Tailwind's CSS Grid utilities
- All spacing can be configured in `tailwind.config.js`
- SCSS files use `@apply` to leverage Tailwind utilities
- No need to write custom CSS - use Tailwind utilities via `@apply`
- Responsive behavior is controlled through Tailwind's responsive prefixes (`sm:`, `md:`)

