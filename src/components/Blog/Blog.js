import React from 'react';
import './Blog.css';

const Blog = () => {
    return (
        <div className='blog'>
            <h1>Some Interview Questions</h1>

            <h3> How does React work?</h3>
            <p> React is a JavaScript library developed by Facebook which, among other things, was used to build Instagram.com. Its aim is to allow developers to easily create fast user interfaces for websites and applications alike. The main concept of React. js is virtual DOM. 
            </p>
            <br />
            <h3> What's the difference between state and props in React?</h3>
            <p> Simply put, State is the local state of the component which cannot be accessed and modified outside of the component. It's equivalent to local variables in a function. Props, on the other hand, make components reusable by giving components the ability to receive data from their parent component in the form of props. 
            </p>
            <br />
            <h3> What are the use cases of useEffect in react without data loading?</h3>
            <p> 
                <li>Running once on mount: fetch API data</li>
                <li>Running on state change: validating input field</li>
                <li>Running on state change: live filtering</li>
                <li> Running on state change: trigger animation on new array value</li>
                <li> Running on props change: update paragraph list on fetched API data update</li>
                <li>Running on props change: updating fetched API data to get BTC updated price </li>
            </p>
        
        </div>
    );
};

export default Blog;