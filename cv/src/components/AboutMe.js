import React, { Component } from 'react'
import './aboutme.css'

class AboutMe extends Component {
  render() {
    return (
      <div className='about-container'>
        <div className='opening-state'>
          <h1> about me </h1>
          <p>
            Hello there! I am a passionate individual with a zest for life and a keen interest in diverse fields. My journey through this ever-changing world has been shaped by a love for learning and a curiosity that knows no bounds. Whether delving into the realms of science, art, technology, or culture, I find joy in exploring the myriad facets that make our world rich and vibrant.
            A perpetual seeker of knowledge, I thrive on challenges that push me to grow and evolve. My experiences have sculpted me into a versatile individual, open-minded and adaptable to the dynamic nature of life. I believe in the power of connection, valuing the relationships and interactions that contribute to the tapestry of my existence.
            In both personal and professional pursuits, I am driven by a commitment to excellence and a desire to make a positive impact. Creativity fuels my endeavors, and I embrace innovation as a driving force for positive change. Life, to me, is an intricate mosaic of experiences, each contributing to the unique narrative that defines who I am.
            As I navigate the twists and turns of my journey, I carry with me a spirit of resilience, a sense of wonder, and an unwavering belief in the potential for greatness within ourselves and the world around us. Join me on this adventure, and let's explore, learn, and create together!
          </p>
        </div>
        <div className='hobbies'>
          <h1> my hobbies</h1>
          <div className='fishing'>fishing</div>
          <div className='volleyball'>volleyball</div>
          <div className='family'>family</div>
        </div>
        
      </div>
    )
  }
}

export default AboutMe