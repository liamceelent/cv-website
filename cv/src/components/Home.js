import React, { Component } from 'react'
import './home.css'
class Home extends Component {
  render() {
    return (
      <div className='body'>
        <div className='text'>
          <div className='home_img'></div>
        </div>

        <div className='title'>
          <h1 className='titlehead'>Hello, I'm  Liam!</h1>

          <div className='aboutme'>Profile/Career Aim
            As an ambitious and driven university student nearing the completion of my second year, I am eagerly seeking internship opportunities to complement my academic knowledge and gain practical experience in the field of computer science. My career aim is to secure a challenging and dynamic internship position where I can apply and further develop my skills, contribute meaningfully to the organization's objectives, and foster professional growth. 
            Through my academic pursuits, I have cultivated a strong foundation in computer science, equipping me with theoretical insights and problem-solving abilities. Now, I am eager to bridge the gap between theory and practice by immersing myself in a real-world work environment. 
            My goal is to actively engage with professionals and collaborate with teams to not only expand my technical proficiency but also sharpen my communication and interpersonal skills. I am excited to leverage my passion for computer science and a keen willingness to learn to make a positive impact on projects and 
            contribute to the overall success of the company. 
            </div>
        </div>
      </div>
    )
  }
}

export default Home