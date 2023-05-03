import React from 'react';

import NormalBtn from '../../components/NormalBtn';
import { FcLike } from 'react-icons/fc';

const ChefCard = ({chef}) => {
    
    const {chefPicture, chefName, yearsOfExperience, numberOfRecipes, likes} = chef;
    return (
        <div className='mx-3 mb-5 p-5 border border-slate-300 rounded-md text-start flex flex-col justify-between shadow-md hover:shadow-xl hover:border-slate-400 duration-500'>
            <img className='rounded-md h-48 object-cover' src={chefPicture} alt="" />
            <h1 className='font-semibold'>Chef Name: {chefName}</h1>
            <h1 className='font-semibold'>Experience : {yearsOfExperience} years</h1>
            <h1 className='font-semibold'>Recipes : {numberOfRecipes}+</h1>
            <p className='flex justify-between items-center'>
                <span>Likes: {likes}</span>
                <NormalBtn>View Recipes</NormalBtn>
            </p>
        </div>
    );
};

export default ChefCard;