import React from 'react'
import "./gallery.css"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import gallery1 from "../../assets/gallery1.jpg"
import gallery2 from "../../assets/gallery2.jpg"
import gallery3 from "../../assets/gallery3.jpg"


const Gallery = () => {
  return (
    <div className='gallery'>
        <h1>Our Projects</h1>
        <div className='gallery_box'>
            <Carousel autoPlay infiniteLoop interval={3000} showThumbs={false} width={900}>
                <div>
                    <img src={gallery1} />
                </div>
                <div>
                    <img src={gallery2} />
                </div>
                <div>
                    <img src={gallery3} />
                </div>
            </Carousel>
        </div>
    </div>
  )
}

export default Gallery