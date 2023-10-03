import React from 'react';
import './header.css'
import people from'../../assets/people.png'
import ai from'../../assets/ai.aa60586ba1ba53762d94.png'
const Header = () => {
    return (

            <div className='gpt3__header section__padding'>
                <div className='gpt3__header-content'>
                    < h1 className='gradient__text'>
                        Lets Build Something amazing with GPT-3 OpenAI
                    </h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, excepturi? Facere repellendus ut repudiandae maiores adipisci, ea, earum architecto at eos odio maxime labore aut excepturi libero quo, rerum accusantium.</p>
                <div className='gpt__header-input'>
                    <input type='email' placeholder ="Your Email Address" />
                    <button type='button'>Get Started</button>
                </div>
                <div className='gpt3__header-people'>
                    <img src={people} alt="people" />
                    <p> 1,500Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt sed, voluptas alias iusto ducimus itaque?</p>
                </div>
            </div>
            <div className='gpt3__header-image'>
                        <img src={ai} alt="ai" />
            </div>
        </div>

    
    );
}

export default Header;
