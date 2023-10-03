import React from 'react';
import './barand.css'
import {   google , slack , atlassian ,dropbox ,shopify  } from './imports'
const Barand = () => {
    return (
        <div className='gpt3__brand .section__padding'>
            <div>
                <img src={google} alt="googel" />
            </div>
            <div>
                <img src={slack} alt="slack" />
            </div>
            <div>
                <img src={atlassian} alt="atlssian" />
            </div>
            <div>
                <img src={dropbox} alt="drobox" />
            </div>
            <div>
                <img src={shopify} alt="shopify" />
            </div>
        </div>
    );
}

export default Barand;
