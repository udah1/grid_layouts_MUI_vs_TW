import { Box, Typography, Button, Stack } from '@mui/material';
import { PageContainer, ContentContainer, GridContainer } from '../components/layout';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <PageContainer>
      <ContentContainer>
        <GridContainer>
          <Box
            sx={{
              width: '100%',
              minHeight: '60vh',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              py: 8,
            }}
          >
            <Typography variant="h3" gutterBottom sx={{ mb: 4 }}>
              TSA Grid Layout System
            </Typography>
            <Typography variant="h6" color="text.secondary" sx={{ mb: 6 }}>
            MUI Components Pages
            </Typography>
            
            <Stack spacing={3} direction={{ xs: 'column', sm: 'row' }} sx={{ width: '100%', maxWidth: '600px' }}>
              <Button
                variant="contained"
                size="large"
                onClick={() => navigate('/device-gallery')}
                sx={{
                  py: 2,
                  px: 4,
                  fontSize: '1.1rem',
                  flex: 1,
                }}
              >
                Device Gallery
              </Button>
              
              <Button
                variant="contained"
                size="large"
                onClick={() => navigate('/track-order')}
                sx={{
                  py: 2,
                  px: 4,
                  fontSize: '1.1rem',
                  flex: 1,
                }}
              >
                Track Order
              </Button>
              
              <Button
                variant="contained"
                size="large"
                onClick={() => navigate('/error')}
                sx={{
                  py: 2,
                  px: 4,
                  fontSize: '1.1rem',
                  flex: 1,
                }}
              >
                Error Page
              </Button>
            </Stack>

            <Typography variant="h6" color="text.secondary" sx={{ mt: 8, mb: 4 }}>
              Tailwind CSS Pages
            </Typography>
            
            <Stack spacing={3} direction={{ xs: 'column', sm: 'row' }} sx={{ width: '100%', maxWidth: '600px' }}>
              <Button
                variant="contained"
                size="large"
                onClick={() => navigate('/tw/device-gallery')}
                sx={{
                  py: 2,
                  px: 4,
                  fontSize: '1.1rem',
                  flex: 1,
                  backgroundColor: '#9333ea',
                  '&:hover': {
                    backgroundColor: '#7e22ce',
                  },
                }}
              >
                Device Gallery (TW)
              </Button>
              
              <Button
                variant="contained"
                size="large"
                onClick={() => navigate('/tw/track-order')}
                sx={{
                  py: 2,
                  px: 4,
                  fontSize: '1.1rem',
                  flex: 1,
                  backgroundColor: '#9333ea',
                  '&:hover': {
                    backgroundColor: '#7e22ce',
                  },
                }}
              >
                Track Order (TW)
              </Button>
              
              <Button
                variant="contained"
                size="large"
                onClick={() => navigate('/tw/error')}
                sx={{
                  py: 2,
                  px: 4,
                  fontSize: '1.1rem',
                  flex: 1,
                  backgroundColor: '#9333ea',
                  '&:hover': {
                    backgroundColor: '#7e22ce',
                  },
                }}
              >
                Error Page (TW)
              </Button>
            </Stack>
          </Box>
        </GridContainer>
      </ContentContainer>
    </PageContainer>
  );
};

export default Home;

