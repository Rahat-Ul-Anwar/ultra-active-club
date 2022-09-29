
import React, { useState } from 'react';
import Break from '../Break/Break';
import Information from '../Information/Information';
import './Duration.css';

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
        console.log(value);
         
    }
   
return (
        <div className='duration'>
         
        <Information></Information>
        <Break handleAddButton={handleAddButton}></Break>
            
            <h5>Selected Item: {props.addTimes.length}</h5>
            <h4>Study details</h4>
            <div className='time'>
                <h6>Study Time : {total} hours</h6>
                <h6>Break Time : {button} seconds</h6>
            </div>
        
        <button type="button" className='add-button' id="liveToastBtn">Activity Completed</button>

      

        <div className="toast-container position-fixed bottom-0 end-0 p-3">
        <div id="liveToast" class="toast" role="alert" aria-live="assertive" aria-atomic="true">
            <div class="toast-header">
            <img src="..." class="rounded me-2" alt="..."/>
            <strong class="me-auto">Bootstrap</strong>
            <small>11 mins ago</small>
            <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
            </div>
            <div class="toast-body">
            Hello, world! This is a toast message.
            </div>
        </div>
        </div>
        </div>
    );
};

export default Duration;