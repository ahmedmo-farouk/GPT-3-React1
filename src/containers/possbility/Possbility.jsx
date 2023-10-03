import React from 'react';
import './possbility.css'
import Possbilitys from "../../assets/possibility.png"
const Possbility = () => {
    return (
        <div className='gpt3__Possbility section__padding' id='possibility' >
            <div className='gpt3__possbility-image'>
                <img src={Possbilitys} alt="possbility" />
            </div>
            <div className='gpt3__possbility-content'>
                <h4>Request Early Access to Get Started</h4>
                <h1 className='gradient__text'>Request Early Access to Get Started</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero expedita placeat quos nostrum debitis adipisci facilis, voluptatum amet atque nam obcaecati totam beatae aliquam voluptatem aperiam rem ea cum ad?</p>
                <h4>Request Early Access to Get Started</h4>
            </div>
        </div>
    );
}

export default Possbility;
