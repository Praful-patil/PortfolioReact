import React from 'react'
import './Header.scss'
import Button from '../common/Button/Button'


const Header = () => {
  return (
    <>
      <div className="navBar">
        <div className="navbarContainer container">
          <h3 className='mainLogo'>Portfolio</h3>
          <ul className='navListdiv'>
            <li className='navList'>Home</li>
            <li className='navList'>Projects</li>
            <li className='navList'>Resume</li>
            <Button className={"primary-btn"} children={"Contact Us"} />
          </ul>
        </div>
      </div>
    </>
  )
}

export default Header