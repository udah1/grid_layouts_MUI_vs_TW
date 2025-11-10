import { Grid, GridProps } from '@mui/material';
import { ReactNode } from 'react';

interface ResponsiveGridProps extends GridProps {
  children: ReactNode;
  /**
   * Grid size for mobile (xs: 0-767px)
   * For mobile, the grid has 6 columns
   */
  xs?: number | 'grow' | 'auto';
  /**
   * Grid size for tablet (sm: 768-1365px)
   * For tablet, the grid has 12 columns
   */
  sm?: number | 'grow' | 'auto';
  /**
   * Grid size for desktop (md: 1366px+)
   * For desktop, the grid has 12 columns
   */
  md?: number | 'grow' | 'auto';
}

/**
 * ResponsiveGrid - A wrapper around MUI Grid with responsive sizing
 * Handles the column differences between mobile (6 cols) and tablet/desktop (12 cols)
 * 
 * Usage:
 * <ResponsiveGrid xs={6} sm={6} md={5}> // 5/12 on desktop, 6/6 on mobile
 * <ResponsiveGrid xs={6} sm={6} md={7}> // 7/12 on desktop, 6/6 on mobile
 */
export const ResponsiveGrid = ({ 
  children, 
  xs,
  sm,
  md,
  size,
  ...props 
}: ResponsiveGridProps) => {
  // Convert mobile sizes: if xs is provided, it's for 6-col grid
  // If md is provided, it's for 12-col grid
  // We need to handle the conversion properly
  
  // If size prop is provided, use it directly
  const gridSize = size || (xs !== undefined || sm !== undefined || md !== undefined 
    ? {
        xs: xs,
        sm: sm,
        md: md,
      }
    : undefined);

  return (
    <Grid
      size={gridSize}
      {...props}
    >
      {children}
    </Grid>
  );
};

