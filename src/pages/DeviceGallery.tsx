import { Grid, Box, Typography } from '@mui/material';
import { PageContainer, ContentContainer, GridContainer, ResponsiveGrid } from '../components/layout';

const DeviceGallery = () => {
  // Create 6 sample items for the grid
  const gridItems = Array.from({ length: 6 }, (_, index) => index + 1);

  return (
    <PageContainer>
      <ContentContainer>
        {/* First Full Row */}
        <GridContainer>
          <Grid size={{ xs: 6, sm: 12, md: 12 }}>
            <Box
              sx={{
                border: '2px solid #1976d2',
                padding: 3,
                backgroundColor: '#e3f2fd',
                borderRadius: 1,
                height: {
                  xs: '516px',  // Mobile
                  sm: '720px',  // Tablet
                  md: '384px',  // Desktop
                },
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
              }}
            >
              <Typography variant="h4" gutterBottom>
                Promotional Banner 1
              </Typography>
              <Typography variant="body1">
                Full row banner - Height: 384px (desktop), 720px (tablet), 516px (mobile)
              </Typography>
            </Box>
          </Grid>
        </GridContainer>

        {/* First Grid Section - 6 items */}
        <GridContainer sx={{ mt: { xs: 2, sm: 3, md: 3 } }}>
          {gridItems.map((item) => (
            <ResponsiveGrid
              key={item}
              size={{
                xs: 3,  // 2 columns on mobile (3/6 = 50%)
                sm: 6,  // 2 columns on tablet (6/12 = 50%)
                md: 4,  // 3 columns on desktop (4/12 = 33.33%)
              }}
            >
              <Box
                sx={{
                  border: '2px solid #2e7d32',
                  padding: 2,
                  backgroundColor: '#e8f5e9',
                  borderRadius: 1,
                  height: {
                    // Mobile: 3 rows, 16px spacing between rows, total 390px
                    xs: '390px',
                    // Tablet: 3 rows, 24px spacing between rows, total 486px
                    sm: '486px',
                    // Desktop: 2 rows, 24px spacing between rows, total 462px
                    md: '462px',
                  },
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'column',
                }}
              >
                <Typography variant="h6" gutterBottom>
                  Item {item}
                </Typography>
                <Typography variant="body2" align="center">
                  Grid Item {item}
                </Typography>
              </Box>
            </ResponsiveGrid>
          ))}
        </GridContainer>

        {/* Second Full Row */}
        <GridContainer sx={{ mt: { xs: 2, sm: 3, md: 3 } }}>
          <Grid size={{ xs: 6, sm: 12, md: 12 }}>
            <Box
              sx={{
                border: '2px solid #1976d2',
                padding: 3,
                backgroundColor: '#e3f2fd',
                borderRadius: 1,
                height: {
                  xs: '516px',  // Mobile
                  sm: '720px',  // Tablet
                  md: '384px',  // Desktop
                },
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
              }}
            >
              <Typography variant="h4" gutterBottom>
                Promotional Banner 2
              </Typography>
              <Typography variant="body1">
                Full row banner - Height: 384px (desktop), 720px (tablet), 516px (mobile)
              </Typography>
            </Box>
          </Grid>
        </GridContainer>

        {/* Second Grid Section - 6 items */}
        <GridContainer sx={{ mt: { xs: 2, sm: 3, md: 3 } }}>
          {gridItems.map((item) => (
            <ResponsiveGrid
              key={`second-${item}`}
              size={{
                xs: 3,  // 2 columns on mobile (3/6 = 50%)
                sm: 6,  // 2 columns on tablet (6/12 = 50%)
                md: 4,  // 3 columns on desktop (4/12 = 33.33%)
              }}
            >
              <Box
                sx={{
                  border: '2px solid #2e7d32',
                  padding: 2,
                  backgroundColor: '#e8f5e9',
                  borderRadius: 1,
                  height: {
                    // Mobile: 3 rows, 16px spacing between rows, total 390px
                    xs: '390px',
                    // Tablet: 3 rows, 24px spacing between rows, total 486px
                    sm: '486px',
                    // Desktop: 2 rows, 24px spacing between rows, total 462px
                    md: '462px',
                  },
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'column',
                }}
              >
                <Typography variant="h6" gutterBottom>
                  Item {item}
                </Typography>
                <Typography variant="body2" align="center">
                  Grid Item {item}
                </Typography>
              </Box>
            </ResponsiveGrid>
          ))}
        </GridContainer>
      </ContentContainer>
    </PageContainer>
  );
};

export default DeviceGallery;

