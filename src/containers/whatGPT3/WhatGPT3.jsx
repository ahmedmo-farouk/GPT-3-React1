import React from 'react';
import Feature from '../../components/feature/Feature'
import './whatGPT3.css'
const WhatGPT3 = () => {
    return (
        <div className='gpt3__whatgpt3 section__margin' id='wgpt3'>
            <div className='gpt3__whatgpt3-feature'>
                <Feature title="what is GPT-3" text=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, excepturi? Facere repellendus ut repudiandae maiores adipisci, ea, earum architecto at eos odio maxime labore aut excepturi libero quo, rerum accusantium. " />
            </div>
            <div className='gpt3__whatgpt3-heading' > 
                <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
                <p>Expiore The Library</p>
            </div>
            <div className='gpt3__whatgpt3-container'>
                <Feature title="Chatbots" text="repudiandae maiores adipisci, ea, earum architecto at eos odio maxime labore aut excepturi libero quo, rerum accusantium" />
                <Feature title="knowledgebase"  text="repudiandae maiores adipisci, ea, earum architecto at eos odio maxime labore aut excepturi libero quo, rerum accusantium" />
                <Feature title="Education"  text="repudiandae maiores adipisci, ea, earum architecto at eos odio maxime labore aut excepturi libero quo, rerum accusantium" />
            </div>
        </div>
    );
}
export default WhatGPT3;
