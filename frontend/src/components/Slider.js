import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Carousel } from 'react-responsive-carousel';
import { API_URL } from '../helper';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles if not already imported

const Slider = () => {
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    axios.get(`${API_URL}/api/slider`)
      .then(res => setSlides(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="container mt-4">
      <div style={{ maxWidth: '800px', margin: '0 auto' }}> {/* Control overall width */}
        <Carousel
          showThumbs={false}
          autoPlay
          infiniteLoop
          interval={3000}
          showStatus={false}
          swipeable
          emulateTouch
        >
          {slides.map(slide => (
            <div key={slide.id} style={{ height: '300px' }}> {/* Set a fixed height */}
              <img 
                src={`${API_URL}/image/${slide.image_url}`} 
                alt={slide.title} 
                style={{ 
                  objectFit: 'cover', 
                  height: '100%', 
                  width: '100%' 
                }} 
              />
              <p className="legend">{slide.title}</p>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Slider;
