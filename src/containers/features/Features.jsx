import React from 'react';
import Feature from '../../components/feature/Feature'
import './features.css'
const featuresDate = [
    {
        title : 'Improving end distrusts',
        text : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, excepturi? Facere repellendus ut repudiandae maiores adipisci, ea, earum architecto at eos odio maxime labore aut excepturi libero quo, rerum accusantium.'
    },
    {
        title : 'Improving end distrusts',
        text : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, excepturi? Facere repellendus ut repudiandae maiores adipisci, ea, earum architecto at eos odio maxime labore aut excepturi libero quo, rerum accusantium.'

    },
    {
        title : 'Improving end distrusts',
        text : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, excepturi? Facere repellendus ut repudiandae maiores adipisci, ea, earum architecto at eos odio maxime labore aut excepturi libero quo, rerum accusantium.'

    },
    {
        title : 'Improving end distrusts',
        text : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, excepturi? Facere repellendus ut repudiandae maiores adipisci, ea, earum architecto at eos odio maxime labore aut excepturi libero quo, rerum accusantium.'
    
    },
]
const Features = () => {
    return (
        <div className='gpt3__features section__padding ' id='features'>
            <div className='gpt3__features-heading'>
                <h1 className='gradient__text'>The Feature is Now and you just need to realize it.step into feature today & make it happen </h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className='gpt3__features-contaiter'>
                {featuresDate.map((item, index) => (
                     <Feature title={item.title} text={item.text} key={item.title + index }/> 
                ))}
            </div>
        </div>
    );
}
export default Features;
