import React from 'react'
import ME from '../../assets/mee.JPG'
import CTA from './CTA'
import './header.css'
import HeaderSocials from './HeaderSocials'
const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Nam Tran</h1>
        <h5 className="text-light">Computer Science Undergraduate</h5>
        <h5 className="text-light">at University of Maryland, College Park</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt="Me" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
        
      </div>
    </header>
  )
}

export default Header