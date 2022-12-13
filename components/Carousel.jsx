import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

export const Carrusel = () => {
  return (
    <div>
         <Carousel autoPlay infiniteLoop>
                  <div>
                      <img src="/1.jpg" alt="image1"/>
                      <p className="legend">Imagen 1</p>
  
                  </div>
                  <div>
                      <img src="/2.jpg" alt="image2" />
                      <p className="legend">Imagen 2</p>
  
                  </div>
                  <div>
                      <img src="/3.jpg" alt="image3"/>
                      <p className="legend">Imagen 3</p>
  
                  </div>
                  <div>
                      <img src="/4.jpg" alt="image4"/>
                      <p className="legend">Imagen 4</p>
  
                  </div>
                  <div>
                      <img src="/5.jpg" alt="image5"/>
                      <p className="legend">Image 5</p>
  
                  </div>
              </Carousel>
    </div>
  )
}
