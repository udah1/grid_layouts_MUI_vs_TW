import { PageContainer, ContentContainer, GridContainer, GridItem } from '../components';
import './TrackOrder.scss';

const TrackOrder = () => {
  
  return (
    <PageContainer>
      <ContentContainer>
        {/* First full row */}
        <GridContainer>
          <GridItem xs={6} sm={12} md={12}>
            <div className="track-order-first-row">
              <h2 className="track-order-first-row-title">First Full Row</h2>
              <p className="track-order-first-row-text">
                This is the first full row that spans the entire width. 
                On desktop it's 12/12 columns, on tablet 12/12, and on mobile 6/6.
              </p>
            </div>
          </GridItem>
        </GridContainer>

        {/* Two column section - reordered on tablet */}
        <GridContainer className="mt-4 sm:mt-6 md:mt-6">
          {/* Left Column Container - 5 cols on desktop, full width on tablet/mobile */}
          <GridItem xs={6} sm={12} md={5} className="order-1 sm:order-1 md:order-1">
            {/* Desktop: Stack all 3 divs vertically */}
            <div className="hidden md:flex flex-col gap-6 w-full">
              {/* Left Column - Div 1 */}
              <div className="track-order-left-col-item track-order-left-col-item-1">
                <h3 className="track-order-left-col-title">Left Column - Div 1</h3>
                <p className="track-order-left-col-text">This is the first div in the left column. Height: 220px (desktop only)</p>
              </div>

              {/* Left Column - Div 2 */}
              <div className="track-order-left-col-item track-order-left-col-item-2">
                <h3 className="track-order-left-col-title">Left Column - Div 2</h3>
                <p className="track-order-left-col-text">This is the second div in the left column. Height: 190px (desktop only)</p>
              </div>

              {/* Left Column - Div 3 */}
              <div className="track-order-left-col-item track-order-left-col-item-3">
                <h3 className="track-order-left-col-title">Left Column - Div 3</h3>
                <p className="track-order-left-col-text">This is the third div in the left column. Height: 200px (desktop only)</p>
              </div>
            </div>

            {/* Tablet/Mobile: Show only Div 1 */}
            <div className="block sm:block md:hidden track-order-left-col-item track-order-left-col-item-mobile">
              <h3 className="track-order-left-col-title">Left Column - Div 1</h3>
              <p className="track-order-left-col-text">
                This is the first div in the left column. 
                On tablet, this appears as the second full row.
                Height: 200px (tablet), 180px (mobile)
              </p>
            </div>
          </GridItem>

          {/* Right Column - Div 1: appears third on tablet, right column on desktop */}
          <GridItem xs={6} sm={12} md={7} className="order-2 sm:order-2 md:order-2">
            <div className="track-order-right-col-item">
              <h3 className="track-order-right-col-title">Right Column - Div 1</h3>
              <p className="track-order-right-col-text">
                This is the single div in the right column.
                On tablet, this appears after the first left column div.
                Height: 300px (desktop), 280px (tablet), 250px (mobile)
              </p>
            </div>
          </GridItem>

          {/* Left Column - Div 2: appears fourth on tablet (separate Grid item) */}
          <GridItem xs={6} sm={12} md={0} className="order-3 sm:order-3 md:hidden">
            <div className="track-order-left-col-item track-order-left-col-item-mobile-2">
              <h3 className="track-order-left-col-title">Left Column - Div 2</h3>
              <p className="track-order-left-col-text">
                This is the second div in the left column.
                On tablet, this appears after the right column div.
                Height: 170px (tablet), 150px (mobile)
              </p>
            </div>
          </GridItem>

          {/* Left Column - Div 3: appears fifth on tablet (separate Grid item) */}
          <GridItem xs={6} sm={12} md={0} className="order-4 sm:order-4 md:hidden">
            <div className="track-order-left-col-item track-order-left-col-item-mobile-3">
              <h3 className="track-order-left-col-title">Left Column - Div 3</h3>
              <p className="track-order-left-col-text">
                This is the third div in the left column.
                On tablet, this appears last among the left column divs.
                Height: 180px (tablet), 160px (mobile)
              </p>
            </div>
          </GridItem>
        </GridContainer>

        {/* Full row with gray background that exceeds 1200px */}
        <div className="track-order-gray-section">
          <ContentContainer>
            <GridContainer>
              <GridItem xs={6} sm={12} md={12}>
                <div className="track-order-gray-content">
                  <h2 className="track-order-gray-title">Full Row with Gray Background</h2>
                  <p className="track-order-gray-text">
                    This section has a gray background that extends edge-to-edge (beyond 1200px),
                    but the content inside respects the 1200px max-width limit.
                    The background fills the entire screen width while the content is centered.
                  </p>
                </div>
              </GridItem>
            </GridContainer>
          </ContentContainer>
        </div>
      </ContentContainer>
    </PageContainer>
  );
};

export default TrackOrder;

