# MUI Layout System Documentation

## Overview

This document describes the Material-UI (MUI) based responsive grid layout system. The system provides a 12-column grid on tablet/desktop and a 6-column grid on mobile, with automatic spacing and responsive behavior.

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

### Theme Configuration

The custom theme is defined in `src/theme/CustomTheme.ts`:

```typescript
export const customTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,      // Mobile start
      sm: 768,    // Tablet start
      md: 1366,   // Desktop start
    },
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          // Responsive padding based on breakpoints
        },
      },
    },
    MuiGrid: {
      styleOverrides: {
        container: {
          // Responsive gap based on breakpoints
        },
      },
    },
  },
});
```

### Core Components

#### 1. PageContainer
**Location**: `src/components/layout/PageContainer.tsx`

Wraps page content with proper margins. Does NOT constrain width.

**Props**:
- `edgeToEdge?: boolean` - If true, allows content to exceed 1200px max-width (useful for edge-to-edge elements)

**Usage**:
```tsx
<PageContainer>
  {/* Page content */}
</PageContainer>
```

#### 2. ContentContainer
**Location**: `src/components/layout/ContentContainer.tsx`

Constrains content to 1200px max-width and centers it. Applies responsive margins.

**Usage**:
```tsx
<PageContainer>
  <ContentContainer>
    {/* Content constrained to 1200px */}
  </ContentContainer>
</PageContainer>
```

#### 3. GridContainer
**Location**: `src/components/layout/GridContainer.tsx`

Creates a grid container with automatic column configuration:
- Mobile (xs): 6 columns, 16px gutters
- Tablet (sm): 12 columns, 24px gutters
- Desktop (md): 12 columns, 24px gutters

**Props**:
- `spacing?: { xs?: number, sm?: number, md?: number }` - Override default spacing
- All other MUI Grid props

**Usage**:
```tsx
<GridContainer>
  {/* Grid items */}
</GridContainer>
```

#### 4. ResponsiveGrid
**Location**: `src/components/layout/ResponsiveGrid.tsx`

A grid item wrapper that handles responsive sizing. Automatically converts between 6-column (mobile) and 12-column (tablet/desktop) grids.

**Props**:
- `xs?: number | 'grow' | 'auto'` - Size for mobile (6-column grid)
- `sm?: number | 'grow' | 'auto'` - Size for tablet (12-column grid)
- `md?: number | 'grow' | 'auto'` - Size for desktop (12-column grid)
- All other MUI Grid props

**Usage**:
```tsx
<GridContainer>
  <ResponsiveGrid xs={6} sm={6} md={5}>
    {/* 5/12 on desktop, 6/6 on mobile */}
  </ResponsiveGrid>
  <ResponsiveGrid xs={6} sm={6} md={7}>
    {/* 7/12 on desktop, 6/6 on mobile */}
  </ResponsiveGrid>
</GridContainer>
```

## Usage Guide

### Basic Page Structure

```tsx
import { PageContainer, ContentContainer, GridContainer, ResponsiveGrid } from '../components/layout';

const MyPage = () => {
  return (
    <PageContainer>
      <ContentContainer>
        <GridContainer>
          <ResponsiveGrid xs={6} sm={12} md={12}>
            {/* Full width content */}
          </ResponsiveGrid>
        </GridContainer>
      </ContentContainer>
    </PageContainer>
  );
};
```

### Two-Column Layout

```tsx
<GridContainer>
  <ResponsiveGrid xs={6} sm={6} md={5}>
    {/* Left column: 5/12 on desktop, 6/6 on mobile */}
  </ResponsiveGrid>
  <ResponsiveGrid xs={6} sm={6} md={7}>
    {/* Right column: 7/12 on desktop, 6/6 on mobile */}
  </ResponsiveGrid>
</GridContainer>
```

### Edge-to-Edge Background with Constrained Content

```tsx
<PageContainer>
  <ContentContainer>
    {/* Regular content */}
  </ContentContainer>
  
  {/* Edge-to-edge section */}
  <Box
    sx={{
      backgroundColor: '#f5f5f5',
      width: '100vw',
      position: 'relative',
      left: '50%',
      right: '50%',
      marginLeft: '-50vw',
      marginRight: '-50vw',
    }}
  >
    <ContentContainer>
      {/* Content constrained to 1200px */}
    </ContentContainer>
  </Box>
</PageContainer>
```

### Responsive Reordering

Use the `order` prop on `ResponsiveGrid`:

```tsx
<GridContainer>
  <ResponsiveGrid xs={6} sm={12} md={5} sx={{ order: { xs: 1, sm: 1, md: 1 } }}>
    {/* First on all breakpoints */}
  </ResponsiveGrid>
  <ResponsiveGrid xs={6} sm={12} md={7} sx={{ order: { xs: 2, sm: 2, md: 2 } }}>
    {/* Second on all breakpoints */}
  </ResponsiveGrid>
</GridContainer>
```

## Best Practices

1. **Always use ResponsiveGrid inside GridContainer** - Never use MUI Grid directly
2. **Use ContentContainer for content width constraints** - Don't manually set max-width
3. **Use PageContainer as the outermost wrapper** - Provides proper page margins
4. **Use sx prop for responsive styling** - Leverage MUI's breakpoint system
5. **Avoid custom CSS** - Use MUI's responsive props and sx prop instead
6. **Test on all breakpoints** - Ensure layouts work on mobile (6-col), tablet (12-col), and desktop (12-col)

## Common Patterns

### Full Width Row
```tsx
<ResponsiveGrid xs={6} sm={12} md={12}>
  {/* Full width */}
</ResponsiveGrid>
```

### Half Width (Mobile), Full Width (Tablet+)
```tsx
<ResponsiveGrid xs={3} sm={6} md={6}>
  {/* 50% on mobile, 50% on tablet/desktop */}
</ResponsiveGrid>
```

### Third Width (Mobile), Half Width (Tablet+)
```tsx
<ResponsiveGrid xs={2} sm={6} md={6}>
  {/* 33% on mobile, 50% on tablet/desktop */}
</ResponsiveGrid>
```

## Component Exports

All components are exported from `src/components/layout/index.ts`:

```typescript
export { PageContainer } from './PageContainer';
export { ContentContainer } from './ContentContainer';
export { GridContainer } from './GridContainer';
export { ResponsiveGrid } from './ResponsiveGrid';
```

## Notes

- The system uses MUI's Grid v2 (flexbox-based)
- All spacing is handled automatically through the theme
- No need to write custom SCSS or use isMobile/isTablet checks
- Responsive behavior is controlled entirely through props

