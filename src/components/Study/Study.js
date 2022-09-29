import React, { useEffect, useState } from 'react';
import Category from '../Category/Category';
import Duration from '../Duration/Duration';
 
import './Study.css'

const Study = () => {

    const [categories, setCategories] = useState([]);
    
    useEffect(() => {

        fetch('learn.json')
            .then(res => res.json())
        .then(data => setCategories(data))
    }, []);

    const [addTime, setAddTime] = useState([]);

    const handleAddToStudy = (category) => {
        const newTime = [...addTime, category];
        setAddTime(newTime);
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
               <Duration categories={categories}></Duration>
            </div>
        </div>
    );
};

export default Study;