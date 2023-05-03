import React from 'react';

const NormalBtn =  ({ children }) => {
    return (
        <button className='my-2 px-4 py-2 bg-blue-600 text-white font-semibold rounded-md '>
            {children}
        </button>
    );
};

export default NormalBtn;