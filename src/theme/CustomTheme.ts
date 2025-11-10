import { createTheme } from '@mui/material/styles';

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
          // Desktop: max-width 1200px, centered, 24px margins
          [`@media (min-width: 1366px)`]: {
            maxWidth: '1200px',
            paddingLeft: '24px',
            paddingRight: '24px',
          },
          // Tablet: same as desktop but fills screen up to 1200px
          [`@media (min-width: 768px) and (max-width: 1365px)`]: {
            maxWidth: '1200px',
            paddingLeft: '24px',
            paddingRight: '24px',
          },
          // Mobile: 16px margins
          [`@media (max-width: 767px)`]: {
            paddingLeft: '16px',
            paddingRight: '16px',
          },
        },
      },
    },
    MuiGrid: {
      styleOverrides: {
        container: {
          // Desktop: 24px gutters
          [`@media (min-width: 1366px)`]: {
            gap: '24px',
          },
          // Tablet: 24px gutters
          [`@media (min-width: 768px) and (max-width: 1365px)`]: {
            gap: '24px',
          },
          // Mobile: 16px gutters
          [`@media (max-width: 767px)`]: {
            gap: '16px',
          },
        },
      },
    },
  },
});

