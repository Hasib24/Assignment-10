import React from 'react';
import { useLoaderData } from 'react-router-dom';
import RecipeCard from './RecipeCard';

const ChefRecipeCardGroup = () => {
    const chef = useLoaderData()
    const recipes = chef.recipes
    return (
        <section className='bg-slate-200 py-10'>
        <div className='container mx-auto'>

            <h1 className='text-5xl font-bold text-center tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-green-600'>Recipes of </h1>
            <div>
                
                {recipes.map((recipe)=>{
                   return <RecipeCard recipe={recipe} key={recipe.id}></RecipeCard>
                })}
                
                
            </div>
        </div>
    </section>
    );
};

export default ChefRecipeCardGroup;