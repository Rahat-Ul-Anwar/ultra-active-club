import React from 'react';
import './Break.css';

const Break = () => {
    return (
        <div className='break'>
            <h5>Add  A Break</h5>
            <div className="break-btn">
                  
            <button>10s</button>
            <button>20s</button>
            <button>30s</button>
            <button>40s</button>
          </div>
            
        </div>
    );
};

export default Break;