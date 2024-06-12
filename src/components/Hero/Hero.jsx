import React from 'react'
import "./hero.css"
import hero from "../../assets/hero.jpg"

const Hero = () => {
  return (
    <div className='hero'>
        <img src={hero} alt="" srcset="" />
        <h1><span style={{color: "#215191"}}>PM - SURYA GHAR:</span> MUFT BIJLI YOJANA</h1>
    </div>
  )
}

export default Hero