import { Box, Typography, Button, Stack } from '@mui/material';
import { PageContainer, ContentContainer } from '../components/layout';
import HomeIcon from '@mui/icons-material/Home';
import PhoneIcon from '@mui/icons-material/Phone';
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <PageContainer>
      <ContentContainer>
        {/* Desktop: Custom container with 64px gap */}
        <Box
          sx={{
            display: { xs: 'block', sm: 'block', md: 'flex' },
            gap: { xs: 0, sm: 0, md: '64px' },
            alignItems: { md: 'center' }, // Center vertically on desktop
            minHeight: { xs: 'auto', sm: 'auto', md: 'calc(100vh - 200px)' }, // Full viewport height minus header/footer space
            justifyContent: { md: 'center' }, // Center horizontally on desktop
          }}
        >
          {/* Mobile/Tablet: Image First */}
          <Box
            sx={{
              display: { xs: 'flex', sm: 'flex', md: 'none' },
              justifyContent: 'center',
              mb: { xs: 2, sm: 4, md: 0 },
            }}
          >
            <Box
              sx={{
                width: {
                  xs: '200px',
                  sm: '380px',
                },
                height: {
                  xs: '200px',
                  sm: '380px',
                },
                backgroundColor: '#fff3e0',
                borderRadius: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '2px solid #ff9800',
                mt: {
                  xs: 4,  // 32px
                  sm: 8,  // 64px
                },
              }}
            >
              <Typography variant="h4" sx={{ color: '#ff9800' }}>
                🚫
              </Typography>
            </Box>
          </Box>

          {/* Desktop: Left Image - 480x480 */}
          <Box
            sx={{
              display: { xs: 'none', sm: 'none', md: 'block' },
              width: '480px',
              flexShrink: 0,
            }}
          >
            <Box
              sx={{
                width: '480px',
                height: '480px',
                backgroundColor: '#fff3e0',
                borderRadius: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '2px solid #ff9800',
              }}
            >
              <Typography variant="h2" sx={{ color: '#ff9800' }}>
                🚫
              </Typography>
            </Box>
          </Box>

          {/* Right Content Section */}
          <Box
            sx={{
              flex: { md: 1 },
              display: 'flex',
              flexDirection: 'column',
              height: { md: '328px' },
              position: { xs: 'relative', sm: 'relative', md: 'static' },
              minHeight: { xs: 'auto', sm: 'auto', md: '328px' },
              justifyContent: { xs: 'center', sm: 'center', md: 'flex-start' }, // Center content vertically on mobile/tablet
              alignItems: { xs: 'center', sm: 'center', md: 'flex-start' }, // Center content horizontally on mobile/tablet
              textAlign: { xs: 'center', sm: 'center', md: 'left' }, // Center text alignment on mobile/tablet
              pb: { xs: '180px', sm: 'auto', md: 'auto' }, // Padding bottom on mobile to prevent content from being hidden behind fixed button
            }}
          >
            {/* First Row: Title and Description with 24px gap */}
            <Stack
              spacing={3} // 24px gap
              sx={{
                mb: { xs: 3, sm: 3, md: 6 }, // 48px gap on desktop
                alignItems: { xs: 'center', sm: 'center', md: 'flex-start' }, // Center stack items on mobile/tablet
                width: { xs: '100%', sm: '100%', md: 'auto' },
              }}
            >
              <Box sx={{ width: '100%', textAlign: { xs: 'center', sm: 'center', md: 'left' } }}>
                <Typography variant="h3" gutterBottom sx={{ fontWeight: 'bold' }}>
                  Oops...
                </Typography>
              </Box>
              <Box sx={{ width: '100%', textAlign: { xs: 'center', sm: 'center', md: 'left' } }}>
                <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                  This tracking link has expired or is no longer valid.
                </Typography>
              </Box>
            </Stack>

            {/* Middle Row: Button */}
            <Box
              sx={{
                mb: { xs: 0, sm: 3, md: 6 }, // No bottom margin on mobile (handled by fixed positioning)
                mt: { xs: 'auto', sm: 3, md: 0 }, // Push to bottom on mobile
                position: { xs: 'fixed', sm: 'static', md: 'static' },
                bottom: { xs: 'calc(56px + 48px)', sm: 'auto', md: 'auto' }, // Help section height (~56px) + 48px spacing
                left: { xs: 0, sm: 'auto', md: 'auto' },
                right: { xs: 0, sm: 'auto', md: 'auto' },
                width: { xs: '100%', sm: 'auto', md: 'auto' },
                display: { xs: 'flex', sm: 'block', md: 'block' },
                justifyContent: { xs: 'center', sm: 'flex-start', md: 'flex-start' },
                px: { xs: 2, sm: 0, md: 0 }, // Horizontal padding on mobile
                zIndex: { xs: 999, sm: 'auto', md: 'auto' },
              }}
            >
              <Button
                variant="contained"
                size="large"
                startIcon={<HomeIcon />}
                onClick={() => navigate('/')}
                sx={{
                  backgroundColor: '#4caf50',
                  '&:hover': {
                    backgroundColor: '#45a049',
                  },
                  px: 4,
                  py: 1.5,
                  width: { xs: 'calc(100% - 32px)', sm: 'auto', md: 'auto' }, // Full width minus padding on mobile
                }}
              >
                Go to Homepage
              </Button>
            </Box>

            {/* Lower Row: Help Section */}
            <Box
              sx={{
                pt: { xs: 0, sm: 0, md: 6 }, // 48px top padding on desktop
                mt: { xs: 'auto', sm: 'auto', md: 0 }, // Push to bottom on tablet/mobile
                position: { xs: 'fixed', sm: 'fixed', md: 'static' },
                bottom: { xs: 0, sm: 0, md: 'auto' },
                left: { xs: 0, sm: 0, md: 'auto' },
                right: { xs: 0, sm: 0, md: 'auto' },
                width: { xs: '100%', sm: '100%', md: 'auto' },
                backgroundColor: { xs: 'background.paper', sm: 'background.paper', md: 'transparent' },
                p: { xs: 2, sm: 3, md: 0 },
                borderTop: { xs: '1px solid', sm: '1px solid', md: 'none' },
                borderColor: { xs: 'divider', sm: 'divider', md: 'transparent' },
                zIndex: { xs: 1000, sm: 1000, md: 'auto' },
              }}
            >
              <Stack direction="row" spacing={1} alignItems="center" flexWrap="wrap">
                <PhoneIcon sx={{ color: 'primary.main' }} />
                <Typography variant="body2">
                  Need help?{' '}
                  <Typography
                    component="a"
                    href="#"
                    sx={{
                      color: 'primary.main',
                      textDecoration: 'underline',
                      cursor: 'pointer',
                    }}
                  >
                    Get a Call Back
                  </Typography>
                  {' '}or call us at{' '}
                  <Typography
                    component="a"
                    href="tel:081180"
                    sx={{
                      color: 'primary.main',
                      textDecoration: 'underline',
                      cursor: 'pointer',
                    }}
                  >
                    081180
                  </Typography>
                </Typography>
              </Stack>
            </Box>
          </Box>
        </Box>
      </ContentContainer>
    </PageContainer>
  );
};

export default ErrorPage;
