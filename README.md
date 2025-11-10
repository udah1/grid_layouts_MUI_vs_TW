# TSA Grid Layout System

A responsive layout system built with Material-UI (MUI) that provides flexible, breakpoint-driven components for building pages.

## Features

- **Custom Breakpoints**: 
  - `xs`: 0px (Mobile)
  - `sm`: 768px (Tablet)
  - `md`: 1366px (Desktop)

- **Grid System**:
  - Desktop/Tablet: 12 columns, 24px gutters, 24px margins
  - Mobile: 6 columns, 16px gutters, 16px margins
  - Max content width: 1200px (centered)

- **Common Components**:
  - `PageContainer`: Wraps page content with proper margins
  - `ContentContainer`: Constrains content to 1200px max-width
  - `ResponsiveGrid`: Grid wrapper with responsive sizing

## Installation

```bash
npm install
```

## Development

```bash
npm run dev
```

## Usage

### Basic Page Structure

```tsx
import { PageContainer, ContentContainer, ResponsiveGrid } from './components/layout';
import { Grid } from '@mui/material';

function MyPage() {
  return (
    <PageContainer>
      <ContentContainer>
        <Grid container spacing={{ xs: 2, sm: 3, md: 3 }}>
          <ResponsiveGrid size={{ xs: 6, sm: 6, md: 5 }}>
            {/* Left column content */}
          </ResponsiveGrid>
          <ResponsiveGrid size={{ xs: 6, sm: 6, md: 7 }}>
            {/* Right column content */}
          </ResponsiveGrid>
        </Grid>
      </ContentContainer>
    </PageContainer>
  );
}
```

### Edge-to-Edge Sections

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

## Sample Page

See `src/pages/TrackOrder.tsx` for a complete example demonstrating:
- Full-width rows
- Two-column layouts with responsive behavior
- Edge-to-edge sections with constrained content
- Different layouts per breakpoint

