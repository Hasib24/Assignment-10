import React from 'react';
import Bannar from './homepage_compo/Bannar';
import Chefs from './homepage_compo/Chefs';
import PopularRecipes from './homepage_compo/PopularRecipes';

const Home = () => {
    return (
        <div className='container mx-auto'>
            <Bannar></Bannar>
            <Chefs></Chefs>
            <PopularRecipes></PopularRecipes>
        </div>
    );
};

export default Home;