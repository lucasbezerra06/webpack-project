import React from 'react';

import classes from './PizzaImage.css'; 
import PizzaImg from '../../assets/pizza.jpg';

function PizzaImage() {
    return (
        <div className={classes.PizzaImage}>
            <img src={PizzaImg} className={classes.PizzaImg}/>
        </div>
    );
}

export default PizzaImage;