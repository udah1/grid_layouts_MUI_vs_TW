import { Grid, GridProps } from '@mui/material';
import { ReactNode } from 'react';

interface GridContainerProps extends Omit<GridProps, 'container' | 'columns'> {
  children: ReactNode;
}

/**
 * GridContainer - A Grid container with automatic column configuration
 * - Mobile (xs): 6 columns, 16px gutters
 * - Tablet (sm): 12 columns, 24px gutters  
 * - Desktop (md): 12 columns, 24px gutters
 */
export const GridContainer = ({ 
  children, 
  spacing,
  ...props 
}: GridContainerProps) => {
  return (
    <Grid
      container
      columns={{ xs: 6, sm: 12, md: 12 }}
      spacing={spacing || { xs: 2, sm: 3, md: 3 }}
      {...props}
    >
      {children}
    </Grid>
  );
};

