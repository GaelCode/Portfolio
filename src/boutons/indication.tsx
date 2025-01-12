import './indicationButton.css';
import React, { useEffect } from "react";
import { animateElements } from "../animation"


const IndicationButton = () => {
    useEffect(() => {
        animateElements();
    }, []);

    return (
        <a href="https://github.com/GaelCode" target='_blank' className='animatable'>
            <div className="indication-btn">
                i
            </div>
        </a>
    );
};

export default IndicationButton;
