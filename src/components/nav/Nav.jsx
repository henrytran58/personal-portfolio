import React, { useState } from 'react'
import {Link} from 'react-scroll'
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai'
import { BiMessageRoundedDots } from 'react-icons/bi'
import { BsFillJournalBookmarkFill } from 'react-icons/bs'
import { MdMiscellaneousServices } from 'react-icons/md'
import './nav.css'

const Nav = () => {
/*   const [activeNav, setActiveNav] = useState('#') */
  return (
    <nav>
      <li className="nav-item">
        <Link to="home" spy={true} smooth={true} offset={0} duration={50}><AiOutlineHome/></Link>
      </li>
      
      <li className="nav-item">
        <Link to="about" spy={true} smooth={true} offset={0} duration={50}><AiOutlineUser/></Link>
      </li>

      <li className="nav-item">
        <Link to="education" spy={true} smooth={true} offset={0} duration={50}><BsFillJournalBookmarkFill/></Link>
      </li>

      <li className="nav-item">
        <Link to="experience" spy={true} smooth={true} offset={0} duration={50}><MdMiscellaneousServices/></Link>
      </li>

      <li className="nav-item">   
        <Link to="contact" spy={true} smooth={true} offset={0} duration={50}><BiMessageRoundedDots/></Link>
      </li>

{/*       <a href="#about" onClick={()=>setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser/></a>
      <a href="#education" onClick={()=>setActiveNav('#education')} className={activeNav === '#education' ? 'active' : ''}><BsFillJournalBookmarkFill/></a>
      <a href="#experience" onClick={()=>setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><MdMiscellaneousServices/></a>
      <a href="#contact" onClick={()=>setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiMessageRoundedDots/></a> */}
    </nav>
  )
}

export default Nav