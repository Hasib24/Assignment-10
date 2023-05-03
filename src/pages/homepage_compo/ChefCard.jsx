import React from 'react';

import NormalBtn from '../../components/NormalBtn';
import { FcLike } from 'react-icons/fc';

const ChefCard = () => {
    return (
        <div className='mx-3 mb-5 p-5 border border-slate-300 rounded-md text-start flex flex-col justify-between shadow-md hover:shadow-xl hover:border-slate-400 duration-500'>
            <img className='rounded-md' src="https://images.pexels.com/photos/3769999/pexels-photo-3769999.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
            <h1 className='font-semibold'>Chef Name</h1>
            <h1 className='font-semibold'>Experience : 5 years</h1>
            <h1 className='font-semibold'>Recipes : 59834+</h1>
            <p className='flex justify-between items-center'>
                <span>Likes</span>
                <NormalBtn>View Recipes</NormalBtn>
            </p>
        </div>
    );
};

export default ChefCard;