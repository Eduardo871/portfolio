import React from 'react';
import './Background.css';
import Page from '../page/Page'
import seba from '../../image/seba.png'

const Background = () => {
    return (
        <div className="background">
            <div className="one">
                <img src={seba} alt="" className="image" />
            </div>
            <div className="two"></div>
            <div className="three"></div>
            <Page />
        </div>
    )
}

export default Background;