import React from 'react';

const Blog = () => {
    return (
        <div className='mt-20 mb-20 p-20'>

            <h1 className='text-3xl mt-10'>What are the different ways to manage a state in a React application?</h1>
            <p className='mt-5'>
                Local (UI) state – Local state is data we manage in one or another component.
                <br />
                Global (UI) state – Global state is data we manage across multiple components.
                <br />
                Server state – Data that comes from an external server that must be integrated with our UI state.
                <br />
                URL state – Data that exists on our URLs, including the pathname and query parameters.

            </p>
            <h1 className='text-3xl mt-10'>How does prototypical inheritance work?</h1>
            <p className='mt-5'>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object</p>
            <h1 className='text-3xl mt-10'>What is a unit test? Why should we write unit tests?</h1>
            <p className='mt-5'>The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages</p>
            <h1 className='text-3xl mt-10'>React vs. Angular vs. Vue?</h1>
            <p className='mt-5'>React is a UI library, Angular is a fully-fledged front-end framework, while Vue.js is a progressive framework.</p>
        </div>
    );
};

export default Blog;