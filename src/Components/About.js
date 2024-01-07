import React from 'react';
import Skills from './Skills.js';
import Tilt from 'react-parallax-tilt';
import Lottie from "lottie-react"
import Coder from '../LottieFiles/coder.json';

const About = () => {
  return (
    <>
      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading' >Get to <b>know</b> me!</h1>
          <p>
            Hi, my name is <b>Uthappa Devaiah</b> and I am from Karnataka, India.
            I'm a <b>MERN stack web developer</b> and a final year college student pursuing <b>BTech in AIML</b>. <br/><br/>
            I have done an internship as a <b>system processes and embedded software developer</b> at Tata Advanced Sytems.
            I love to create different projects with beautiful designs, you can check out some of my work in the projects section.<br/><br/>
            
          </p>
        </div>

        <div>
          <Tilt>
              <Lottie 
              className="illustration" 
              animationData={Coder} 
              loop={true} 
            />
          </Tilt>
        </div>

      </div>
      
      <h1 className='SkillsHeading'>Professional Skillset</h1>
      <div className='skills'>
        
        <Skills skill='Node' />
        <Skills skill='Python' />
        <Skills skill='MongoDb' />
        <Skills skill='Git' />
        <Skills skill='Github' />
        <Skills skill='Javascript' />
        <Skills skill='C++' />
        
      </div>
    </>
  )
}

export default About