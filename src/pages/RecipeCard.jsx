import React from 'react';

const RecipeCard = ({recipe}) => {
    const {recipiImg, recipiName, ingredients, cookingMethod, ratings} = recipe;
    return (
        <div className='m-3 flex bg-white'>
            <div>
                <h1>{recipiName}</h1>
                <span>{ratings}</span>
                <img className='w-60' src={recipiImg} alt="" />
                
            </div>
            <div>
                <ul>
                    {ingredients.map(ingra =><li key={ingra}>{ingra}</li>)}
                </ul>
            </div>
            <div>
                <ul>
                    {cookingMethod.map(cook =><li key={cook}>{cook}</li>)}
                </ul>
            </div>

            
        </div>
    );
};

export default RecipeCard;