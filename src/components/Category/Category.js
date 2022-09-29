import React from 'react';
import './Category.css';

const Category = (props) => {

    const { name, img ,for_age, time_required} = props.category;
    return (
        <div className='category'>
            <img src={img} alt="" srcset="" />
            <div className='category-info'>
            <h4 className='title'>{name}</h4>
            <p>For Age: {for_age}</p>
            <p>Time Required: {time_required} hours</p>
            <button  onClick={() =>props.handleAddToStudy(props.category)} className='add-button'>Add To List</button>
             </div>
        </div>
    );
};

export default Category;