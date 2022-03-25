import React from 'react'

import './Header.css'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'
import ME from '../../assets/me.png'

const Header = ({theme}) => {
  return (
    <header className={theme}>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Nguyễn Trọng Nhân</h1>
        <h5 className="text-light">Web Developer</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href='#contact' className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header
