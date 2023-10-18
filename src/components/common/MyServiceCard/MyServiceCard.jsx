import React from 'react';
import './MyServiceCard.scss';

const MyServiceCard = ({ imageUrl, title, description }) => {

  return (
    <div className="myServiceCard">
      <img className='myServiceCard-img' src={imageUrl} alt={title} />
      <div className="myServiceCard-bottom">
        <h3 className='myServiceCardHeading'>{title}</h3>
        <p className='myServiceCardDiscription'>{description}</p>
      </div>
    </div>
  );
};

export default MyServiceCard;
