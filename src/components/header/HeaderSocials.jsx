import React from 'react'
import { BsFacebook, BsGithub, BsLinkedin } from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/nam-tran-43601023a/?trk=public-profile-join-page" target="_blank" rel="noreferrer"><BsLinkedin/></a>
        <a href="https://github.com/henrytran58" target="_blank" rel="noreferrer"><BsGithub/></a>
        <a href="https://www.facebook.com/profile.php?id=100011402608091" target="_blank" rel="noreferrer"><BsFacebook/></a>
    </div>
  )
}

export default HeaderSocials