import React from 'react'
import './Body.scss'
import Button from '../common/Button/Button'


const Body = () => {
  return (
    <div className="bodymain">
      <div className="bodymainContainer container">
        <div className="heroLeft">
          <h1 className='heroHeading'>Hi! I Am <span className='heroheading-span'> Lorem </span></h1>
          <p className='jonDiscription'>As a Frontend Developer, I am responsible for creating and implementing user-friendly web interfaces and ensuring seamless user experiences. I leverage my expertise in web technologies and design principles to transform wireframes and mockups into fully functional and visually appealing websites and web applications</p>
          <Button className={"primary-btn"} children={"Hire me"} />
        </div>
        <div className="heroRight">
          <img className='heroRightImg' src="/assets/images/rightIimg.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Body