import React from 'react';
import NormalBtn from '../components/NormalBtn';

const RecipeCard = ({recipe}) => {
    const {recipiImg, recipiName, ingredients, cookingMethod, ratings} = recipe;
    return (
        <div className='m-3 px-8 py-5 flex justify-between bg-white'>
            <div className='border px-3 py-4'>
                <h1>{recipiName}</h1>
                <span>{ratings}</span>
                <img className='w-60 rounded-md' src={recipiImg} alt="" />
                
            </div>
            <div className='border px-3 py-4'>
                <h1 className='text-xl font-semibold'>Ingradients:</h1>
                <ul className='pl-4 list-disc'>
                    {ingredients.map(ingra =><li key={ingra}>{ingra}</li>)}
                </ul>
            </div>
            <div className='border px-3 py-4'>
            <h1 className='text-xl font-semibold'>Coocking Method:</h1>
                <ul className='pl-4 list-disc'>
                    {cookingMethod.map(cook =><li key={cook}>{cook}</li>)}
                </ul>
            </div>
            <div className='border flex items-center'>
                <NormalBtn>Add to Favourite</NormalBtn>
            </div>
            
        </div>
    );
};

export default RecipeCard;