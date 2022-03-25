import React from 'react'
import { BsLinkedin, BsGithub, BsFacebook } from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/nhantrong30520/' target='_blank'><BsLinkedin /></a>
        <a href='https://github.com/TrongNhan30520' target='_blank'><BsGithub /></a>
        <a href='https://www.facebook.com/nhan30520/' target='_blank'><BsFacebook /></a>
    </div>
  )
}

export default HeaderSocials
