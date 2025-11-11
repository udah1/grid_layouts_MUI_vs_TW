# MUI Layout System - Cursor Rules

## System Overview

This project uses Material-UI (MUI) for the responsive grid layout system. All MUI layout components are located in `src/components/layout/`.

## Breakpoints

- **xs (Mobile)**: 0px - 767px (6 columns)
- **sm (Tablet)**: 768px - 1365px (12 columns)
- **md (Desktop)**: 1366px+ (12 columns)

## Grid Configuration

- **Mobile**: 6 columns, 16px gutters, 16px margins
- **Tablet**: 12 columns, 24px gutters, 24px margins
- **Desktop**: 12 columns, 24px gutters, 24px margins, max-width 1200px

## Required Components

### 1. PageContainer
- **Location**: `src/components/layout/PageContainer.tsx`
- **Purpose**: Wraps page content with proper margins
- **Usage**: Always use as outermost wrapper
- **Props**: `edgeToEdge?: boolean` - For edge-to-edge sections

### 2. ContentContainer
- **Location**: `src/components/layout/ContentContainer.tsx`
- **Purpose**: Constrains content to 1200px max-width
- **Usage**: Use inside PageContainer for content width constraints

### 3. GridContainer
- **Location**: `src/components/layout/GridContainer.tsx`
- **Purpose**: Creates grid with automatic column/gutter configuration
- **Usage**: Wrap grid items
- **Props**: `spacing?: { xs?, sm?, md? }` - Override default spacing

### 4. ResponsiveGrid
- **Location**: `src/components/layout/ResponsiveGrid.tsx`
- **Purpose**: Grid item with automatic 6-col/12-col conversion
- **Usage**: Use inside GridContainer
- **Props**: `xs?: number`, `sm?: number`, `md?: number`

## Rules for Implementation

1. **ALWAYS use ResponsiveGrid inside GridContainer** - Never use MUI Grid directly
2. **ALWAYS wrap pages with PageContainer** - Provides proper margins
3. **ALWAYS use ContentContainer for content width constraints** - Don't manually set max-width
4. **Use sx prop for responsive styling** - Leverage MUI's breakpoint system
5. **NO custom SCSS** - Use MUI's responsive props and sx prop
6. **NO isMobile/isTablet checks** - Use responsive props instead
7. **Test column math** - Mobile uses 6 cols, tablet/desktop use 12 cols

## Common Patterns

### Full Width Row
```tsx
<ResponsiveGrid xs={6} sm={12} md={12}>
  {/* Content */}
</ResponsiveGrid>
```

### Two Columns (5/7 split)
```tsx
<ResponsiveGrid xs={6} sm={6} md={5}>
  {/* Left: 5/12 desktop, 6/6 mobile */}
</ResponsiveGrid>
<ResponsiveGrid xs={6} sm={6} md={7}>
  {/* Right: 7/12 desktop, 6/6 mobile */}
</ResponsiveGrid>
```

### Responsive Reordering
```tsx
<ResponsiveGrid xs={6} sm={12} md={5} sx={{ order: { xs: 1, sm: 2, md: 1 } }}>
  {/* Reordered on tablet */}
</ResponsiveGrid>
```

## File Structure

- MUI pages: `src/pages/*.tsx`
- MUI components: `src/components/layout/*.tsx`
- MUI theme: `src/theme/CustomTheme.ts`

## Import Pattern

```tsx
import { PageContainer, ContentContainer, GridContainer, ResponsiveGrid } from '../components/layout';
```

## When Creating New Pages

1. Import layout components from `../components/layout`
2. Use PageContainer as outermost wrapper
3. Use ContentContainer for content width constraints
4. Use GridContainer for grid layouts
5. Use ResponsiveGrid for grid items
6. Use sx prop for responsive styling
7. Test on all three breakpoints

## Edge-to-Edge Sections

For sections that need full-width backgrounds:

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
    {/* Content still constrained to 1200px */}
  </ContentContainer>
</Box>
```

## DO NOT

- ❌ Use MUI Grid directly (use ResponsiveGrid)
- ❌ Write custom SCSS for layout
- ❌ Use isMobile/isTablet checks
- ❌ Manually set max-width (use ContentContainer)
- ❌ Mix Tailwind classes with MUI components
- ❌ Use arbitrary breakpoint values

## DO

- ✅ Use ResponsiveGrid for all grid items
- ✅ Use sx prop for responsive styling
- ✅ Use PageContainer and ContentContainer
- ✅ Test on all breakpoints
- ✅ Use MUI's breakpoint system
- ✅ Follow the component hierarchy

