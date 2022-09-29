
import React from 'react';
import Information from '../Information/Information';
import './Duration.css';

const Duration = (props) => { 

console.log(props.addTimes)
    const {addTimes} = props;

    let total = 0;
    for (const time of addTimes) {
        
         
       
        total = total + time.time_required;
        console.log(typeof total)
    
    }
   
return (
        <div className='duration'>
         
            <Information></Information>
            
            <h2>Selected Item: {props.addTimes.length}</h2>
            <h2>Study details</h2>
            <h3>Study Time : {total} hours</h3>
            <h3>Break Time : </h3>
        </div>
    );
};

export default Duration;