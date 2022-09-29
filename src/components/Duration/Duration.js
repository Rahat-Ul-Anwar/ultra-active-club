
import React, { useState } from 'react';
import Break from '../Break/Break';
import Information from '../Information/Information';
import './Duration.css';
import Swal from 'sweetalert2';

const Duration = (props) => { 

 
    const {addTimes} = props;

    let total = 0;
    for (const time of addTimes) {
        
        total = total + time.time_required;
        console.log(typeof total)
    
    }


     
    const [button, setButton] = useState(0);

    const handleAddButton = (value) => {
        setButton(value);
    }

    const handleToast = () => {
        Swal.fire(
            'Congratulation!',
            'You are done the activity!',
            
          )
    }
   
return (
        <div className='duration'>
         
        <Information></Information>
        <Break handleAddButton={handleAddButton}></Break>
            
            <h5>Selected Item: {props.addTimes.length}</h5>
            <h4>Study Details</h4>
            <div className='time'>
                <h6>Study Time : {total} hours</h6>
                <h6>Break Time : {button} seconds</h6>
            </div>
        
        <button onClick={handleToast} className='add-button'>Activity Completed</button>
       </div>
    );
};

export default Duration;