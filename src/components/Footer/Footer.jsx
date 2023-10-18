import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <div className="footerContainer container">
      <div className="footerLeft">
        <h3 className="footerHeading">Personal</h3>
        <div className="footerContact">
          <p className="footerAddress">123 Market St. #22B Charlottesville, California 44635</p>
          <p>(434) 546-4356</p>
          <p>contact@lift.agency</p>
        </div>
      </div>
      <div className="footerRight">
        <div className="footerInfo">
          <ul className="footerInfoList">
            {['About', 'Growers', 'Merchants', 'Partners', 'Contact'].map(item => (
              <li key={item} className="footerInfoListItem">
                {item}
              </li>
            ))}
          </ul>
          <p className='rightsReserved'>© 2020 Lift Media. All rights reserved.</p>
        </div>
        <div className="footerSocial">
          <ul className="footerSocialList">
            {['Facebook', 'Twitter', 'Linkedin', 'Instagram'].map(item => (
              <li key={item} className="footerSocialListItem">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
