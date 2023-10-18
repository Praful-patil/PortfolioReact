import React from 'react'
import './MyServices.scss'
import Button from '../common/Button/Button'
import MyServiceCard from '../common/MyServiceCard';

const cardData = [
    {
        heading: "Ui/UX",
        paragraph: "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying.",
        image: "assets/images/uiUx.png"
    },
    {
        heading: "Design",
        paragraph: "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying.",
        image: "assets/images/design.png"
    },
    {
        heading: "Developer",
        paragraph: "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying.",
        image: "assets/images/developer.png"
    }
];

const MyServices = () => {
    return (
        <div className="myServiceContainer container">
            <div className="myServiceTop">
                <h2 className='primary-heading'>My <span > services</span></h2>
                <p className='primary-discription'>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in layingLorem ipsum, or lipsum as it is sometimes known, is dummy text used in layingLore</p>
                <Button className={"primary-btn"} children={"Download Resume"} />
                <div className="myServiceCards">
                    {cardData.map((card, index) => (
                        <MyServiceCard imageUrl={card.image} key={index} title={card.heading} description={card.paragraph} />
                    ))}
                </div>
            </div>

        </div>
    )
}

export default MyServices;