import { useNavigate } from 'react-router-dom';
import { PageContainer, ContentContainer } from '../components';
import './ErrorPage.scss';

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <PageContainer>
      <ContentContainer>
        {/* Desktop: Custom container with 64px gap */}
        <div className="error-container">
          {/* Mobile/Tablet: Image First */}
          <div className="error-image-mobile-container">
            <div className="error-image-mobile flex items-center justify-center">
              <span className="error-icon">🚫</span>
            </div>
          </div>

          {/* Desktop: Left Image - 480x480 */}
          <div className="error-image-desktop-container">
            <div className="error-image-desktop flex items-center justify-center">
              <span className="error-icon-large">🚫</span>
            </div>
          </div>

          {/* Right Content Section */}
          <div className="error-content">
            {/* First Row: Title and Description with 24px gap */}
            <div className="error-title-section">
              <div className="error-title-wrapper">
                <h1 className="error-title">Oops...</h1>
              </div>
              <div className="error-description-wrapper">
                <p className="error-description">
                  This tracking link has expired or is no longer valid.
                </p>
              </div>
            </div>

            {/* Middle Row: Button */}
            <div className="error-button-container">
              <button
                onClick={() => navigate('/')}
                className="error-button"
                style={{ width: 'calc(100% - 32px)' }}
              >
                <svg className="error-button-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                Go to Homepage
              </button>
            </div>

            {/* Lower Row: Help Section */}
            <div className="error-help-container">
              <div className="error-help-content">
                <svg className="error-help-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <p className="error-help-text">
                  Need help?{' '}
                  <a href="#" className="error-help-link">
                    Get a Call Back
                  </a>
                  {' '}or call us at{' '}
                  <a href="tel:081180" className="error-help-link">
                    081180
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </ContentContainer>
    </PageContainer>
  );
};

export default ErrorPage;
