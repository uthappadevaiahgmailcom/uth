import React from 'react';
import ProjectBox from './ProjectBox';
import NewsletterImage from '../images/NewsletterImage.png';
import RogfreeImage from '../images/NewsletterImage.png';
import TindogImage from '../images/NewsletterImage.png';
import WigglesImage from '../images/NewsletterImage.png';

const Projects = () => {
  return (
    <div>
      <h1 className='projectHeading'>My <b>Projects</b></h1>
      <div className='project'>
        <ProjectBox projectPhoto={WigglesImage} projectName="Hand gesture volume control" />
        <ProjectBox projectPhoto={NewsletterImage} projectName="Event Management System" />
        <ProjectBox projectPhoto={RogfreeImage} projectName="Handwritten digit recogniser" />
      </div>

    </div>
  )
}

export default Projects