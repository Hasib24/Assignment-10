import React from 'react';
import NormalBtn from '../components/NormalBtn';
import { json } from 'react-router-dom';

const RecipeCard = ({recipe}) => {



    const handleAddToFavourite = (id) =>{
        let storedRecipe = localStorage.getItem('favoriteRecipi')

        if(storedRecipe){
            let pastFavourite = JSON.parse(storedRecipe)
            let match = pastFavourite.find(pastId => pastId==id)

            if(!match){

                let favoriteRecipes = [...pastFavourite, id]
                localStorage.setItem('favoriteRecipi', JSON.stringify(favoriteRecipes))
            }else{return}
           
        }else{
            let favoriteRecipes = [id]
            localStorage.setItem('favoriteRecipi', JSON.stringify(favoriteRecipes))

        }  
    }


    
    const {id, recipiImg, recipiName, ingredients, cookingMethod, ratings} = recipe;
    return (
        <div className='m-3 px-8 py-5 md:flex justify-between bg-white'>
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
                <span onClick={()=>handleAddToFavourite(id)}><NormalBtn>Add to Favourite</NormalBtn></span>
                
            </div>
            
        </div>
    );
};

export default RecipeCard;