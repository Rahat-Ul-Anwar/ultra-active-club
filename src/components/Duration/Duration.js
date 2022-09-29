
import React from 'react';
import Information from '../Information/Information';
import './Duration.css';

const Duration = (props) => { 

    console.log(props.categories)

    
    return (
        <div className='duration'>
         
            <Information></Information>


            
            <h2>Selected Item: {props.categories.length}</h2>
            <h2>Study details</h2>
            <h3>Study Time :</h3>
            <h3>Break Time :</h3>
        </div>
    );
};

export default Duration;