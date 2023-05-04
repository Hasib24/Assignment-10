import React from 'react';
import BlogCard from './BlogCard';
import { BsPrinter } from 'react-icons/bs';

// import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
// const styles = StyleSheet.create({
//     page: {
//       flexDirection: 'row',
//       backgroundColor: '#E4E4E4'
//     },
//     section: {
//       margin: 10,
//       padding: 10,
//       flexGrow: 1
//     }
//   });


const qnAndAns = [
    {
        id: 1,
        qn: "What is the differences between uncontrolled and controlled components?",
        ans: "In React, there are two ways to manage the state of form components: controlled and uncontrolled components. In uncontrolled components, the form data is handled by the DOM itself, while in controlled components, the form data is handled by React. In controlled components, the value of the form input is set as a state property and updated by an event handler."
    },
    {
        id: 2,
        qn: "How to validate React props using PropTypes?",
        ans: " To validate props using PropType first I have toi mport PropTypes from the prop-types package. Thend efine a propTypes object inside your React component class or function.Define each prop as a property of the propTypes object with its expected data type.Finally pass the props object as a parameter to your component.PropTypes will throw an error in the console if a prop is not of the expected data type."
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
        // <Document>
        //     <Page size="A4" style={styles.page}>
        //         <View style={styles.section}>
        //         <div className='container mx-auto my-10'>
        //             <h1 className='text-center text-2xl font-bold text-slate-800'>Wellcome to blog</h1>
        //             <div className='text-right'><button className='border rounded-md p-2 font-semibold hover:text-white hover:bg-slate-600'><BsPrinter className='inline m-1 text-xl'></BsPrinter>Print  </button> </div>
        //             <div>
        //                 {qnAndAns.map(aQnAndAns =><BlogCard aQnAndAns={aQnAndAns} key={aQnAndAns.id}></BlogCard>)} 
        //             </div>
        //             </div>
        //         </View>
        //     </Page>

        // </Document>
        <div className='container mx-auto my-10'>
            <h1 className='text-center text-2xl font-bold text-slate-800'>Wellcome to blog</h1>
            <div className='text-right'><button className='border rounded-md p-2 font-semibold hover:text-white hover:bg-slate-600'><BsPrinter className='inline m-1 text-xl'></BsPrinter>Print  </button> </div>
            <div>
                {qnAndAns.map(aQnAndAns =><BlogCard aQnAndAns={aQnAndAns} key={aQnAndAns.id}></BlogCard>)} 
            </div>
        </div>
    );
};

export default Blog;