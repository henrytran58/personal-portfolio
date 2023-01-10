import React from 'react'
import { BsGithub, BsInstagram, BsLinkedin } from 'react-icons/bs'
import { FaFacebookF } from 'react-icons/fa'
import './footer.css'

const Footer = () => {
  return (
    <footer id='footer'>
      <ul className='permalinks'>
        <li><a href='#home'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#education'>Education</a></li>
        <li><a href='#experience'>Experience</a></li>
{/*         <li><a href='#projects'>Projects</a></li> */}
        <li><a href='#contact'>Contact</a></li>
      </ul>
      <div className="footer__socials">
        <a href="https://www.facebook.com/profile.php?id=100011402608091"><FaFacebookF/></a>
        <a href="https://www.instagram.com/_khuong_ne_/"><BsInstagram/></a>
        <a href="https://www.linkedin.com/in/nam-tran-43601023a/?trk=public-profile-join-page/"><BsLinkedin/></a>
        <a id='footer__github' href="https://github.com/henrytran58"><BsGithub/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; EGATOR Tutorials. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer