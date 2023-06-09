import React from 'react';
import NormalBtn from '../components/NormalBtn';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import LazyLoad from 'react-lazy-load';
import Rating from 'react-rating';

import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

const RecipeCard = ({recipe}) => {



    const handleAddToFavourite = (id) =>{
        let storedRecipe = localStorage.getItem('favoriteRecipi')

        if(storedRecipe){
            let pastFavourite = JSON.parse(storedRecipe)
            let match = pastFavourite.find(pastId => pastId==id)

            if(!match){
                toast.success('wow! Item added')
                let favoriteRecipes = [...pastFavourite, id]
                localStorage.setItem('favoriteRecipi', JSON.stringify(favoriteRecipes))
            }else{
                toast.warn('Stop, Item alerady exist')
            }
           
        }else{
            toast.success('wow! item added')
            let favoriteRecipes = [id]
            localStorage.setItem('favoriteRecipi', JSON.stringify(favoriteRecipes))

        }  
    }



    const {id, recipiImg, recipiName, ingredients, cookingMethod, ratings} = recipe;
    return (
        <LazyLoad threshold={0.95} offset={300}>
            <div className='m-3 px-8 py-5 md:flex justify-between bg-white'>
                <div className='border px-3 py-4'>
                    <h1 className="text-xl font-bold">{recipiName}</h1>
                    <Rating
                         placeholderRating={ratings}
                         emptySymbol={<AiOutlineStar></AiOutlineStar>}
                         placeholderSymbol={<AiFillStar></AiFillStar>}
                         fullSymbol={<AiFillStar></AiFillStar>}
                        ></Rating>
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
                <div className='flex items-center'>
                    <span onClick={()=>handleAddToFavourite(id)}><NormalBtn>Add to Favourite</NormalBtn></span>

                </div>

                <ToastContainer></ToastContainer>

            </div>
        </LazyLoad>

    );
};

export default RecipeCard;