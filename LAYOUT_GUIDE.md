# Layout System Guide

## Overview

This project uses a responsive layout system built with Material-UI (MUI) that provides flexible, breakpoint-driven components for building pages.

## Breakpoints

- **xs (Mobile)**: 0px - 767px
  - 6 columns
  - 16px gutters
  - 16px page margins

- **sm (Tablet)**: 768px - 1365px
  - 12 columns
  - 24px gutters
  - 24px page margins

- **md (Desktop)**: 1366px+
  - 12 columns
  - 24px gutters
  - 24px page margins
  - Max content width: 1200px (centered)

## Common Components

### PageContainer
Wraps page content with proper margins. Use this as the outermost container for your pages.

```tsx
<PageContainer>
  {/* Your page content */}
</PageContainer>
```

### ContentContainer
Constrains content to 1200px max-width. Use this inside PageContainer to ensure content respects the max-width limit.

```tsx
<ContentContainer>
  {/* Your content */}
</ContentContainer>
```

### GridContainer
A Grid container with automatic column configuration based on breakpoints.

```tsx
<GridContainer>
  {/* Grid items */}
</GridContainer>
```

Automatically sets:
- `columns={{ xs: 6, sm: 12, md: 12 }}`
- `spacing={{ xs: 2, sm: 3, md: 3 }}`

### ResponsiveGrid
A Grid item wrapper with responsive sizing. Handles the column differences between mobile (6 cols) and tablet/desktop (12 cols).

```tsx
<ResponsiveGrid size={{ xs: 6, sm: 12, md: 5 }}>
  {/* Content */}
</ResponsiveGrid>
```

## Usage Examples

### Basic Full-Width Row

```tsx
<PageContainer>
  <ContentContainer>
    <GridContainer>
      <Grid size={{ xs: 6, sm: 12, md: 12 }}>
        {/* Full width content */}
      </Grid>
    </GridContainer>
  </ContentContainer>
</PageContainer>
```

### Two-Column Layout

```tsx
<GridContainer>
  <ResponsiveGrid size={{ xs: 6, sm: 12, md: 5 }}>
    {/* Left column - 5/12 on desktop */}
  </ResponsiveGrid>
  <ResponsiveGrid size={{ xs: 6, sm: 12, md: 7 }}>
    {/* Right column - 7/12 on desktop */}
  </ResponsiveGrid>
</GridContainer>
```

### Edge-to-Edge Section

For sections that need to extend beyond 1200px (like backgrounds):

```tsx
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
```

## TrackOrder Page Example

The `TrackOrder` page demonstrates:

1. **Full-width row** at the top
2. **Two-column layout** with responsive reordering:
   - Desktop: Left column (5 cols) with 3 stacked divs + Right column (7 cols) with 1 div
   - Tablet: Each div becomes a full-width row in a specific order
   - Mobile: Each div becomes a full-width row
3. **Edge-to-edge section** with gray background that extends beyond 1200px

## Key Concepts

### Responsive Reordering
Use the `order` prop to change the visual order of items at different breakpoints:

```tsx
<ResponsiveGrid 
  size={{ xs: 6, sm: 12, md: 5 }}
  sx={{ order: { xs: 1, sm: 1, md: 1 } }}
>
  {/* Content */}
</ResponsiveGrid>
```

### Conditional Display
Use `display` prop to show/hide elements at different breakpoints:

```tsx
<ResponsiveGrid 
  size={{ xs: 0, sm: 0, md: 5 }}
  sx={{ display: { xs: 'none', sm: 'none', md: 'flex' } }}
>
  {/* Desktop-only content */}
</ResponsiveGrid>
```

### Stacking on Desktop
Use `Stack` component inside a Grid item to stack multiple elements vertically:

```tsx
<ResponsiveGrid size={{ md: 5 }}>
  <Stack spacing={3}>
    <Box>Div 1</Box>
    <Box>Div 2</Box>
    <Box>Div 3</Box>
  </Stack>
</ResponsiveGrid>
```

## Best Practices

1. Always wrap pages with `PageContainer` and `ContentContainer`
2. Use `GridContainer` for grid layouts instead of manually setting `container` and `columns`
3. Use `ResponsiveGrid` for grid items to handle responsive sizing
4. Use responsive values (`xs`, `sm`, `md`) in the `size` prop rather than writing breakpoint-specific CSS
5. For edge-to-edge elements, use the Box pattern shown above
6. Use `order` prop for reordering items at different breakpoints
7. Use conditional `display` for showing/hiding elements per breakpoint

