import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

export const Carrusel = () => {
  return (
    <div>
         <Carousel autoPlay infiniteLoop showThumbs={false} showIndicators={false}>
                  <div>
                      <img src="/1.jpg" alt="image1"/>
  
                  </div>
                  <div>
                      <img src="/2.jpg" alt="image2" />
  
                  </div>
                  <div>
                      <img src="/3.jpg" alt="image3"/>
  
                  </div>
                  <div>
                      <img src="/4.jpg" alt="image4"/>
  
                  </div>
                 
              </Carousel>
    </div>
  )
}
