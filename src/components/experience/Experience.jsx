import React from 'react'
import { BsFillPatchCheckFill } from 'react-icons/bs'
import './experience.css'
const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="programming">
          <h3>Programming Languages</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsFillPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Python</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className="experience__details">
              <BsFillPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Java</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className="experience__details">
              <BsFillPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>C/C++</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className="experience__details">
              <BsFillPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>HTML/CSS/JS</h4>
                <small className='text-light'>Beginner</small>
              </div>
            </article>

            <article className="experience__details">
              <BsFillPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>MATLAB</h4>
                <small className='text-light'>Beginner</small>
              </div>
            </article>

            <article className="experience__details">
              <BsFillPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>MIPS</h4>
                <small className='text-light'>Beginner</small>
              </div>
            </article>
          </div>
        </div>
        {/* END OF PROGRAMMING */}

        <div className="tools">
          <h3>Development Tools</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsFillPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Git</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className="experience__details">
              <BsFillPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>VSCode</h4>
                <small className='text-light'>Advanced</small>
              </div>
            </article>

            <article className="experience__details">
              <BsFillPatchCheckFill className='experience__details-icon' />
              <flex>
                <h4>Eclipse</h4>
                <small className='text-light'>Basic</small>
              </flex>
            </article>

            <article className="experience__details">
              <BsFillPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>MS Office</h4>
                <small className='text-light'>Advanced</small>
              </div>
            </article>

            <article className="experience__details">
              <BsFillPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>LaTeX</h4>
                <small className='text-light'>Basic</small>
              </div>
            </article>

            <article className="experience__details">
              <BsFillPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Android Studio</h4>
                <small className='text-light'>Basic</small>
              </div>
            </article>
          </div>
        </div>

        {/* END OF TOOLS */}
      </div>
    </section>
  )
}

export default Experience