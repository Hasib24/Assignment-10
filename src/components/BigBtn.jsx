import React from 'react';

const BigBtn = ({ children }) => {
    return (
        <button className='my-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-md text-xl'>
            {children}
        </button>
    );
};

export default BigBtn;