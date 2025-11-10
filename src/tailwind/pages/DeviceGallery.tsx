import { PageContainer, ContentContainer, GridContainer, GridItem } from '../components';
import './DeviceGallery.scss';

const DeviceGallery = () => {
  // Create 6 sample items for the grid
  const gridItems = Array.from({ length: 6 }, (_, index) => index + 1);

  return (
    <PageContainer>
      <ContentContainer>
        {/* First Full Row */}
        <GridContainer>
          <GridItem xs={6} sm={12} md={12}>
            <div className="device-gallery-banner">
              <h2 className="device-gallery-banner-title">Promotional Banner 1</h2>
              <p className="device-gallery-banner-text">
                Full row banner - Height: 384px (desktop), 720px (tablet), 516px (mobile)
              </p>
            </div>
          </GridItem>
        </GridContainer>

        {/* First Grid Section - 6 items */}
        <GridContainer className="mt-4 sm:mt-6 md:mt-6">
          {gridItems.map((item) => (
            <GridItem
              key={item}
              xs={3}
              sm={6}
              md={4}
            >
              <div className="device-gallery-item">
                <h3 className="device-gallery-item-title">Item {item}</h3>
                <p className="device-gallery-item-text">Grid Item {item}</p>
              </div>
            </GridItem>
          ))}
        </GridContainer>

        {/* Second Full Row */}
        <GridContainer className="mt-4 sm:mt-6 md:mt-6">
          <GridItem xs={6} sm={12} md={12}>
            <div className="device-gallery-banner">
              <h2 className="device-gallery-banner-title">Promotional Banner 2</h2>
              <p className="device-gallery-banner-text">
                Full row banner - Height: 384px (desktop), 720px (tablet), 516px (mobile)
              </p>
            </div>
          </GridItem>
        </GridContainer>

        {/* Second Grid Section - 6 items */}
        <GridContainer className="mt-4 sm:mt-6 md:mt-6">
          {gridItems.map((item) => (
            <GridItem
              key={`second-${item}`}
              xs={3}
              sm={6}
              md={4}
            >
              <div className="device-gallery-item">
                <h3 className="device-gallery-item-title">Item {item}</h3>
                <p className="device-gallery-item-text">Grid Item {item}</p>
              </div>
            </GridItem>
          ))}
        </GridContainer>
      </ContentContainer>
    </PageContainer>
  );
};

export default DeviceGallery;

