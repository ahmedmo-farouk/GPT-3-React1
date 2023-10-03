import React from 'react';
import{ Footer , Blog , Possbility ,  Features, WhatGPT3 , Header } from './containers'
import{   Barand , CTA  , Navbar} from './components'
import './App.css'
const App = () => {
    return (
        <div className='App'>
            <div className='gradient__bg'>
                < Navbar />
                < Header />
            </div>
            <div>
                < Barand />
                < WhatGPT3 />
                < Features />
                < Possbility />
                < CTA />
                < Blog />
                < Footer />
            </div>
        </div>
    );
}

export default App;



