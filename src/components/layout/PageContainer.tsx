import { Container, ContainerProps } from '@mui/material';
import { ReactNode } from 'react';

interface PageContainerProps extends Omit<ContainerProps, 'maxWidth'> {
  children: ReactNode;
  /**
   * If true, allows content to exceed 1200px max-width
   * Useful for edge-to-edge elements like backgrounds
   */
  edgeToEdge?: boolean;
}

/**
 * PageContainer - Wraps page content with proper max-width and margins
 * - Desktop (md: 1366px+): max-width 1200px, 24px margins, centered
 * - Tablet (sm: 768px+): max-width 1200px, 24px margins
 * - Mobile (xs: 0px+): full width, 16px margins
 */
export const PageContainer = ({ 
  children, 
  edgeToEdge = false,
  sx,
  ...props 
}: PageContainerProps) => {
  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{
        ...(edgeToEdge && {
          maxWidth: 'none !important',
          width: '100%',
        }),
        ...sx,
      }}
      {...props}
    >
      {children}
    </Container>
  );
};

