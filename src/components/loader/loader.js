import React from 'react';
import './loader.css'

function Loader() {
    return (
        <div className='spinner-container'>
        <div className='spinner'>
            <div className='quadrant'></div>
            <div className='quadrant'></div>
            <div className='quadrant'></div>
            <div className='quadrant'></div>
        </div>
        </div>
    );
}

export default Loader;