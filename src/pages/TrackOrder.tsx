import { Grid, Box, Typography, Stack } from '@mui/material';
import { PageContainer, ContentContainer, GridContainer, ResponsiveGrid } from '../components/layout';

const TrackOrder = () => {
  return (
    <PageContainer>
      <ContentContainer>
        {/* First full row */}
        <GridContainer>
          <Grid size={{ xs: 6, sm: 12, md: 12 }}>
            <Box
              sx={{
                border: '2px solid #1976d2',
                padding: 3,
                backgroundColor: '#e3f2fd',
                borderRadius: 1,
              }}
            >
              <Typography variant="h5" gutterBottom>
                First Full Row
              </Typography>
              <Typography variant="body1">
                This is the first full row that spans the entire width. 
                On desktop it's 12/12 columns, on tablet 12/12, and on mobile 6/6.
              </Typography>
            </Box>
          </Grid>
        </GridContainer>

        {/* Two column section - reordered on tablet */}
        <GridContainer sx={{ mt: { xs: 2, sm: 3, md: 3 } }}>
          {/* Left Column Container - 5 cols on desktop, full width on tablet/mobile */}
          <ResponsiveGrid 
            size={{ 
              xs: 6,  // Full width on mobile (6/6)
              sm: 12, // Full width on tablet (12/12)
              md: 5   // 5/12 on desktop
            }}
            sx={{
              order: { xs: 1, sm: 1, md: 1 },
            }}
          >
            {/* Desktop: Stack all 3 divs vertically */}
            <Stack 
              spacing={3} 
              sx={{ 
                display: { xs: 'none', sm: 'none', md: 'flex' },
                width: '100%',
              }}
            >
              {/* Left Column - Div 1 */}
              <Box
                sx={{
                  border: '2px solid #2e7d32',
                  padding: 3,
                  backgroundColor: '#e8f5e9',
                  borderRadius: 1,
                  height: '220px',
                }}
              >
                <Typography variant="h6" gutterBottom>
                  Left Column - Div 1
                </Typography>
                <Typography variant="body2">
                  This is the first div in the left column.
                  Height: 220px (desktop only)
                </Typography>
              </Box>

              {/* Left Column - Div 2 */}
              <Box
                sx={{
                  border: '2px solid #2e7d32',
                  padding: 3,
                  backgroundColor: '#e8f5e9',
                  borderRadius: 1,
                  height: '190px',
                }}
              >
                <Typography variant="h6" gutterBottom>
                  Left Column - Div 2
                </Typography>
                <Typography variant="body2">
                  This is the second div in the left column.
                  Height: 190px (desktop only)
                </Typography>
              </Box>

              {/* Left Column - Div 3 */}
              <Box
                sx={{
                  border: '2px solid #2e7d32',
                  padding: 3,
                  backgroundColor: '#e8f5e9',
                  borderRadius: 1,
                  height: '200px',
                }}
              >
                <Typography variant="h6" gutterBottom>
                  Left Column - Div 3
                </Typography>
                <Typography variant="body2">
                  This is the third div in the left column.
                  Height: 200px (desktop only)
                </Typography>
              </Box>
            </Stack>

            {/* Tablet/Mobile: Show only Div 1 */}
            <Box
              sx={{
                border: '2px solid #2e7d32',
                padding: 3,
                backgroundColor: '#e8f5e9',
                borderRadius: 1,
                height: { xs: '180px', sm: '200px' },
                display: { xs: 'block', sm: 'block', md: 'none' },
              }}
            >
              <Typography variant="h6" gutterBottom>
                Left Column - Div 1
              </Typography>
              <Typography variant="body2">
                This is the first div in the left column. 
                On tablet, this appears as the second full row.
                Height: 200px (tablet), 180px (mobile)
              </Typography>
            </Box>
          </ResponsiveGrid>

          {/* Right Column - Div 1: appears third on tablet, right column on desktop */}
          <ResponsiveGrid 
            size={{ 
              xs: 6,  // Full width on mobile (6/6)
              sm: 12, // Full width on tablet (12/12) - appears as third row
              md: 7   // 7/12 on desktop (rest of the page)
            }}
            sx={{
              order: { xs: 2, sm: 2, md: 2 },
            }}
          >
            <Box
              sx={{
                border: '2px solid #d32f2f',
                padding: 3,
                backgroundColor: '#ffebee',
                borderRadius: 1,
                height: { xs: '250px', sm: '280px', md: '300px' },
              }}
            >
              <Typography variant="h6" gutterBottom>
                Right Column - Div 1
              </Typography>
              <Typography variant="body2">
                This is the single div in the right column.
                On tablet, this appears after the first left column div.
                Height: 300px (desktop), 280px (tablet), 250px (mobile)
              </Typography>
            </Box>
          </ResponsiveGrid>

          {/* Left Column - Div 2: appears fourth on tablet (separate Grid item) */}
          <ResponsiveGrid 
            size={{ 
              xs: 6,  // Full width on mobile (6/6)
              sm: 12, // Full width on tablet (12/12) - appears as fourth row
              md: 0   // Hidden on desktop (handled by container above)
            }}
            sx={{
              order: { xs: 3, sm: 3, md: 0 },
              display: { xs: 'block', sm: 'block', md: 'none' },
            }}
          >
            <Box
              sx={{
                border: '2px solid #2e7d32',
                padding: 3,
                backgroundColor: '#e8f5e9',
                borderRadius: 1,
                height: { xs: '150px', sm: '170px' },
              }}
            >
              <Typography variant="h6" gutterBottom>
                Left Column - Div 2
              </Typography>
              <Typography variant="body2">
                This is the second div in the left column.
                On tablet, this appears after the right column div.
                Height: 170px (tablet), 150px (mobile)
              </Typography>
            </Box>
          </ResponsiveGrid>

          {/* Left Column - Div 3: appears fifth on tablet (separate Grid item) */}
          <ResponsiveGrid 
            size={{ 
              xs: 6,  // Full width on mobile (6/6)
              sm: 12, // Full width on tablet (12/12) - appears as fifth row
              md: 0   // Hidden on desktop (handled by container above)
            }}
            sx={{
              order: { xs: 4, sm: 4, md: 0 },
              display: { xs: 'block', sm: 'block', md: 'none' },
            }}
          >
            <Box
              sx={{
                border: '2px solid #2e7d32',
                padding: 3,
                backgroundColor: '#e8f5e9',
                borderRadius: 1,
                height: { xs: '160px', sm: '180px' },
              }}
            >
              <Typography variant="h6" gutterBottom>
                Left Column - Div 3
              </Typography>
              <Typography variant="body2">
                This is the third div in the left column.
                On tablet, this appears last among the left column divs.
                Height: 180px (tablet), 160px (mobile)
              </Typography>
            </Box>
          </ResponsiveGrid>
        </GridContainer>

        {/* Full row with gray background that exceeds 1200px */}
        <Box
          sx={{
            backgroundColor: '#f5f5f5',
            width: '100vw',
            position: 'relative',
            left: '50%',
            right: '50%',
            marginLeft: '-50vw',
            marginRight: '-50vw',
            mt: { xs: 3, sm: 4, md: 4 },
            py: { xs: 3, sm: 4, md: 4 },
          }}
        >
          <ContentContainer>
            <GridContainer>
              <Grid size={{ xs: 6, sm: 12, md: 12 }}>
                <Box
                  sx={{
                    border: '2px solid #616161',
                    padding: 3,
                    backgroundColor: '#ffffff',
                    borderRadius: 1,
                  }}
                >
                  <Typography variant="h5" gutterBottom>
                    Full Row with Gray Background
                  </Typography>
                  <Typography variant="body1">
                    This section has a gray background that extends edge-to-edge (beyond 1200px),
                    but the content inside respects the 1200px max-width limit.
                    The background fills the entire screen width while the content is centered.
                  </Typography>
                </Box>
              </Grid>
            </GridContainer>
          </ContentContainer>
        </Box>
      </ContentContainer>
    </PageContainer>
  );
};

export default TrackOrder;

