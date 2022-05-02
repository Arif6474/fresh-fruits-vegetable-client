import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css'

const Banner = () => {
    return ( <div className="banner">
        <Carousel>
  <Carousel.Item>
   
    <img
     
     src="https://i.ibb.co/PDrMCHn/alexander-schimmeck-2z-Jh-A9-RSkys-unsplash-ccexpress.jpg" className="img-fluid w-100"
     alt="First slide"
   />

    
  </Carousel.Item>
  <Carousel.Item>
    
    <img  
      src="https://i.ibb.co/2gYRYps/nrd-D6-Tu-L3ch-LE-unsplash-ccexpress.jpg" className="img-fluid w-100"
      alt="Second slide"
    />
 

  
  </Carousel.Item>
  <Carousel.Item>
 
  <img
      src="https://i.ibb.co/99zJZpH/sharon-pittaway-KUZnfk-2-DSQ-unsplash-ccexpress.jpg" className="img-fluid w-100 "
      alt="Third slide"
    />
 

    
  </Carousel.Item>
</Carousel>
</div>
    );
};

export default Banner;
