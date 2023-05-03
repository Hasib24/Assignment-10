import React from 'react';

const PopularRecipes = () => {
    return (
        <section>
            <h1 className='text-5xl text-center font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-green-600'>Popular Recipes</h1>
            <div className='md:grid md:grid-cols-3'>
                <div className='my-5 mx-4 p-6 border rounded-md bg-white  hover:scale-105 duration-500 shadow-xl'>
                    <img className='rounded-md' src="https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                    <h1 className='mt-3 text-center font-semibold text-xl'> Recipe name</h1>
                </div>
                <div className='my-5 mx-4 p-6 border rounded-md  hover:scale-105 duration-500 shadow-xl'>
                    <img className='rounded-md' src="https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                    <h1 className='mt-3 text-center font-semibold text-xl'> Recipe name</h1>
                </div>
                <div className='my-5 mx-4 p-6 border rounded-md  hover:scale-105 duration-500 shadow-xl'>
                    <img className='rounded-md' src="https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                    <h1 className='mt-3 text-center font-semibold text-xl'> Recipe name</h1>
                </div>
                
            </div>
        </section>
    );
};

export default PopularRecipes;