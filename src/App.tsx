import { ThemeProvider, CssBaseline } from '@mui/material';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { customTheme } from './theme/CustomTheme';
import Home from './pages/Home';
import DeviceGallery from './pages/DeviceGallery';
import TrackOrder from './pages/TrackOrder';
import ErrorPage from './pages/ErrorPage';
// Tailwind pages
import HomeTW from './tailwind/pages/Home';
import DeviceGalleryTW from './tailwind/pages/DeviceGallery';
import TrackOrderTW from './tailwind/pages/TrackOrder';
import ErrorPageTW from './tailwind/pages/ErrorPage';

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          {/* MUI Pages */}
          <Route path="/" element={<Home />} />
          <Route path="/device-gallery" element={<DeviceGallery />} />
          <Route path="/track-order" element={<TrackOrder />} />
          <Route path="/error" element={<ErrorPage />} />
          {/* Tailwind Pages */}
          <Route path="/tw" element={<HomeTW />} />
          <Route path="/tw/device-gallery" element={<DeviceGalleryTW />} />
          <Route path="/tw/track-order" element={<TrackOrderTW />} />
          <Route path="/tw/error" element={<ErrorPageTW />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

