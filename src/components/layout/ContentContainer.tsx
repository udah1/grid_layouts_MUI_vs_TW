import { Container, ContainerProps } from '@mui/material';
import { ReactNode } from 'react';

interface ContentContainerProps extends Omit<ContainerProps, 'maxWidth'> {
  children: ReactNode;
}

/**
 * ContentContainer - Constrains content to 1200px max-width
 * Even when used inside edge-to-edge containers, this ensures
 * the actual content respects the 1200px limit
 */
export const ContentContainer = ({ 
  children, 
  sx,
  ...props 
}: ContentContainerProps) => {
  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{
        maxWidth: '1200px',
        margin: '0 auto',
        paddingLeft: {
          xs: '16px',
          sm: '24px',
          md: '24px',
        },
        paddingRight: {
          xs: '16px',
          sm: '24px',
          md: '24px',
        },
        ...sx,
      }}
      {...props}
    >
      {children}
    </Container>
  );
};

