# Tailwind CSS Layout System - Cursor Rules

## System Overview

This project uses Tailwind CSS for the responsive grid layout system. All Tailwind layout components are located in `src/tailwind/components/`.

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
- **Location**: `src/tailwind/components/PageContainer.tsx`
- **Purpose**: Wraps page content with proper margins
- **Usage**: Always use as outermost wrapper

### 2. ContentContainer
- **Location**: `src/tailwind/components/ContentContainer.tsx`
- **Purpose**: Constrains content to 1200px max-width
- **Usage**: Use inside PageContainer for content width constraints

### 3. GridContainer
- **Location**: `src/tailwind/components/GridContainer.tsx`
- **Purpose**: Creates grid with automatic column/gutter configuration
- **Usage**: Wrap grid items
- **Classes**: `grid grid-cols-6 sm:grid-cols-12 md:grid-cols-12 gap-[16px] sm:gap-[24px] md:gap-[24px]`

### 4. GridItem
- **Location**: `src/tailwind/components/GridItem.tsx`
- **Purpose**: Grid item with automatic 6-col/12-col conversion
- **Usage**: Use inside GridContainer
- **Props**: `xs?: number`, `sm?: number`, `md?: number`

## Styling Approach

### Layout Classes (Keep Inline)
Keep these classes inline in JSX:
- Display: `block`, `flex`, `grid`, `hidden`
- Flexbox/Grid: `flex-row`, `flex-col`, `items-center`, `justify-center`, `gap-*`
- Positioning: `relative`, `absolute`, `fixed`, `static`
- Responsive layout: `md:flex`, `sm:block`, etc.
- Layout spacing: `mb-*`, `mt-*` (structural spacing)
- Layout dimensions: `w-full`, `flex-1`, `h-0` (layout structure)

### Styling Classes (Move to SCSS)
Move these to SCSS files using `@apply`:
- Colors: `bg-[#fff3e0]`, `text-[#ff9800]`, `border-[#ff9800]`
- Borders: `border-2`, `rounded-lg`, `border-t`
- Dimensions: `w-[480px]`, `h-[328px]`, `min-h-[328px]`
- Typography: `text-4xl`, `font-bold`, `text-base`
- Visual effects: `shadow-*`, `opacity-*`
- Visual spacing: `px-8`, `py-3`, `gap-6` (visual styling)

## Rules for Implementation

1. **ALWAYS use GridItem inside GridContainer** - Or use Tailwind grid classes directly
2. **ALWAYS wrap pages with PageContainer** - Provides proper margins
3. **ALWAYS use ContentContainer for content width constraints** - Don't manually set max-width
4. **Create SCSS file for each page** - `PageName.tsx` → `PageName.scss`
5. **Use semantic class names in SCSS** - Name by purpose, not appearance
6. **Import SCSS in component** - `import './PageName.scss'`
7. **Keep layout classes inline** - Move styling to SCSS
8. **NO custom CSS** - Use Tailwind utilities via `@apply` in SCSS
9. **Test column math** - Mobile uses 6 cols, tablet/desktop use 12 cols

## Common Patterns

### Full Width Row
```tsx
<GridItem xs={6} sm={12} md={12}>
  <div className="my-content">
    {/* Content */}
  </div>
</GridItem>
```

### Two Columns (5/7 split)
```tsx
<GridContainer>
  <GridItem xs={6} sm={6} md={5}>
    <div className="left-column">
      {/* Left: 5/12 desktop, 6/6 mobile */}
    </div>
  </GridItem>
  <GridItem xs={6} sm={6} md={7}>
    <div className="right-column">
      {/* Right: 7/12 desktop, 6/6 mobile */}
    </div>
  </GridItem>
</GridContainer>
```

### Direct Grid Usage (Alternative)
```tsx
<div className="grid grid-cols-6 sm:grid-cols-12 md:grid-cols-12 gap-[16px] sm:gap-[24px] md:gap-[24px]">
  <div className="col-span-6 sm:col-span-12 md:col-span-5">
    {/* Content */}
  </div>
</div>
```

### Responsive Reordering
```tsx
<GridItem xs={6} sm={12} md={5} className="order-1 sm:order-2 md:order-1">
  {/* Reordered on tablet */}
</GridItem>
```

## File Structure

- Tailwind pages: `src/tailwind/pages/*.tsx`
- Tailwind SCSS: `src/tailwind/pages/*.scss`
- Tailwind components: `src/tailwind/components/*.tsx`
- Tailwind config: `tailwind.config.js`

## Import Pattern

```tsx
import { PageContainer, ContentContainer, GridContainer, GridItem } from '../components';
import './MyPage.scss';
```

## SCSS File Pattern

```scss
// MyPage.scss
.my-content {
  @apply border-2 border-blue-500 p-6 bg-blue-50 rounded;
}

.my-title {
  @apply text-4xl font-bold mb-2;
}
```

## When Creating New Pages

1. Create component: `src/tailwind/pages/MyPage.tsx`
2. Create SCSS: `src/tailwind/pages/MyPage.scss`
3. Import layout components from `../components`
4. Import SCSS file: `import './MyPage.scss'`
5. Use PageContainer as outermost wrapper
6. Use ContentContainer for content width constraints
7. Use GridContainer for grid layouts
8. Use GridItem for grid items (or use Tailwind classes directly)
9. Keep layout classes inline, move styling to SCSS
10. Test on all three breakpoints

## Edge-to-Edge Sections

For sections that need full-width backgrounds:

```tsx
<div className="bg-gray-200 w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] mt-6 sm:mt-8 md:mt-8 py-6 sm:py-8 md:py-8">
  <ContentContainer>
    {/* Content still constrained to 1200px */}
  </ContentContainer>
</div>
```

## DO NOT

- ❌ Mix MUI components with Tailwind
- ❌ Write custom CSS (use Tailwind via @apply)
- ❌ Put styling classes inline (move to SCSS)
- ❌ Put layout classes in SCSS (keep inline)
- ❌ Use arbitrary breakpoint values
- ❌ Manually set max-width (use ContentContainer)

## DO

- ✅ Use GridItem for grid items (or Tailwind classes directly)
- ✅ Create SCSS file for each page
- ✅ Use semantic class names in SCSS
- ✅ Keep layout classes inline
- ✅ Move styling to SCSS with @apply
- ✅ Use PageContainer and ContentContainer
- ✅ Test on all breakpoints
- ✅ Use Tailwind's responsive prefixes (sm:, md:)

