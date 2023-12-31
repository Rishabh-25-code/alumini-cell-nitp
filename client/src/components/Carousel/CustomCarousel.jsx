import React from 'react';
import { Carousel } from 'react-carousel-minimal';

const CustomCarousel = ({ data, captionStyle, slideNumberStyle }) => {
  return (
    <div className="App">
      <div style={{ textAlign: 'center' }}>
        <div style={{ padding: '0 20px' }}>
          <Carousel
            data={data}
            time={2000}
            width="850px"
            height="500px"
            captionStyle={captionStyle}
            radius="10px"
            // slideNumber={true}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails={true}
            thumbnailWidth="100px"
            style={{
              textAlign: 'center',
              maxWidth: '850px',
              maxHeight: '500px',
              margin: '40px auto',
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default CustomCarousel;
