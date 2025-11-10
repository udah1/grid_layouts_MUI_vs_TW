import { useNavigate } from 'react-router-dom';
import { PageContainer, ContentContainer, GridContainer } from '../components';
import './Home.scss';

const Home = () => {
  const navigate = useNavigate();

  return (
    <PageContainer>
      <ContentContainer>
        <GridContainer>
          <div className="home-container">
            <h1 className="home-title">TSA Grid Layout System (Tailwind)</h1>
            <h2 className="home-subtitle">Select a page to view</h2>
            
            <div className="home-buttons-container">
              <button
                onClick={() => navigate('/tw/device-gallery')}
                className="home-button"
              >
                Device Gallery
              </button>
              
              <button
                onClick={() => navigate('/tw/track-order')}
                className="home-button"
              >
                Track Order
              </button>
              
              <button
                onClick={() => navigate('/tw/error')}
                className="home-button"
              >
                Error Page
              </button>
            </div>
          </div>
        </GridContainer>
      </ContentContainer>
    </PageContainer>
  );
};

export default Home;

