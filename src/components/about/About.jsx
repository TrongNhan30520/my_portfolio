import React from 'react'
import { FaAward } from 'react-icons/fa'
import { FiUsers, FiFolderPlus } from 'react-icons/fi'


import './About.css'
import ME from '../../assets/me-about.png'

const About = ({theme}) => {
  return (
    <section id='about' className={theme}>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt='About Image' />
          </div>

        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>4+ months</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon' />
              <h5>Clients</h5>
              <small>...</small>
            </article>

            <article className='about__card'>
              <FiFolderPlus className='about__icon' />
              <h5>Project</h5>
              <small>9 Completed</small>
            </article>
          </div>

          <p>
            I’m a senior student at PTIT- Posts and Telecommunications Institute of Technology. 
            My major is Information Technology. I have been learning web programming for more than 
            6 months and interned for a startup for 4 months. Currently, I’m quite familiar 
            with HTML, CSS, JavaScript, ReactJS, NodeJS, Express with a few projects. My passion is learning new languages
            and technologies to solve life's problems. I like problem analysis, share my knowledge and help others.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
