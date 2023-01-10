import React from 'react'
import { FaAward } from 'react-icons/fa'
import { FiActivity } from 'react-icons/fi'
import { MdOutlineFolderSpecial } from 'react-icons/md'
import ME from "../../assets/me-about.jpeg"
import './about.css'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className='about__icon'/>
              <h5>Certificate</h5>
              <small>Associate's Degree in Computer Science</small>
            </article>

            <article className="about__card">
              <MdOutlineFolderSpecial className='about__icon'/>
              <h5>Projects</h5>
              <small>50+ School Projects</small>
              <div></div>
              <small>10+ Personal Projects</small>
            </article>

            <article className="about__card">
              <FiActivity className='about__icon'/>
              <h5>Interests</h5>
              <small>Video Games (TFT, LoL)</small>
              <div></div>
              <small>Solving Puzzle</small>

            </article>
          </div>
          <p >
            Hi there, I'm Nam Tran, but feel free to call me Henry.
            <div></div>
            Vietnamese by birth, I've lived in the US for about three years. 
            <div></div>
            Prince George's Community College was where I started my academic journey and got my Associate's degree.
            <div></div>
            To continue my journey, I transferred to the University of Maryland.
            <div></div>
            My major is Computer Science with a minor in Mathematics.
            <div></div>
            Thank you for visiting my portfolio! Do not hesitate to reach out to me,
            I am a responsive person!
          </p>

          <a href="#contact" className='btn btn-primary' id="AboutTalk">Let's Talk</a>
        </div>
      </div>

        
      
    </section>
  )
}

export default About