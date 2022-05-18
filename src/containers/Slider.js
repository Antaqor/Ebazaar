import React from 'react';
import sliderImage from '../assets/express-delivery.jpg'
import "../styles/Slider.css";
const Slider = () => {
    return (
        <div className="background">
         <img src={sliderImage} alt="image"/>
        </div>
    );
};

export default Slider;