import React, { useEffect, useState } from 'react';
import Category from '../Category/Category';
import Duration from '../Duration/Duration';
 
import './Study.css'

const Study = () => {

    const [categories, setCategories] = useState([]);

    const [addTimes, setAddTimes] = useState([]);
    
    useEffect(() => {

        fetch('learn.json')
            .then(res => res.json())
        .then(data => setCategories(data))
    }, []);

   

    const handleAddToStudy = (category) => {
        const newTime = [...addTimes, category];
        setAddTimes(newTime);
    }


    return (
        <div className='study-container'>

            <div className='study-category'>
                {/* <h2>Select Category : {categories.length} </h2> */}
            
                <div className='categories'>
                    
                    {
                        categories.map(category => <Category category={category}
                            key={category.id}
                            handleAddToStudy={handleAddToStudy}
                        
                        ></Category>)    

                    }
                </div>
     
            </div>


            <div className='duration'>
               <Duration addTimes={addTimes}></Duration>
            </div>
        </div>
    );
};

export default Study;