import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ChefRecipes = () => {
    const chef = useLoaderData();
    console.log(chef);
    return (
        <section>
            chef Chef Recipes
        </section>
    );
};

export default ChefRecipes;