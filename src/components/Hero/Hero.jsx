import React from 'react'
import "./Hero.css"
function Hero() {
  return (
    <div className='hero d-flex justify-content-center align-items-center'>
      <div className="hero-content container d-flex justify-content-center align-items-center flex-column gap-4 animate__animated animate__fadeInUp">
        <h1>We Ensure better education for a better world</h1>
        <p>Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and experiences needed to excel in the dynamic field of education</p>
        <button className='btn btn-light'>Explore more</button>
      </div>
    </div>
  )
}

export default Hero
