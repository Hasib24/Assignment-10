import React from 'react';
import BlogCard from './BlogCard';

const qnAndAns = [
    {
        id: 1,
        qn: "What is the differences between uncontrolled and controlled components?",
        ans: "In React, there are two ways to manage the state of form components: controlled and uncontrolled components. In uncontrolled components, the form data is handled by the DOM itself, while in controlled components, the form data is handled by React. In controlled components, the value of the form input is set as a state property and updated by an event handler."
    },
    {
        id: 2,
        qn: "How to validate React props using PropTypes?",
        ans: "Custom hook is a system of pecketing complex code and logic into a reusable function. It is easier to share and maintain across multiple components"
    },
    {
        id: 3,
        qn: "What is the difference between nodejs and express js?",
        ans: "Node.js is a runtime environment for executing JavaScript on the server-side, while Express.js is a web framework that runs on top of Node.js and provides a set of features and utilities for building web applications and APIs."
    },
    {
        id: 4,
        qn: "What is a custom hook, and why will you create a custom hook?",
        ans: "Custom hook is a system of pecketing complex code and logic into a reusable function. It is easier to share and maintain across multiple components"
    }
]

const Blog = () => {
    return (
        <div className='container mx-auto'>
            <h1 className='text-center text-2xl font-bold text-slate-800'>Wellcome to blog</h1>
            <div>
                {qnAndAns.map(aQnAndAns =><BlogCard aQnAndAns={aQnAndAns} key={aQnAndAns.id}></BlogCard>)} 
            </div>
        </div>
    );
};

export default Blog;