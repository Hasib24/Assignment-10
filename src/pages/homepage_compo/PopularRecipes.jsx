import React from 'react';

const PopularRecipes = () => {
    return (
        <section>
            <h1 className='text-5xl text-center font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-green-600'>Popular Recipes</h1>
            <div className='md:grid md:grid-cols-3'>
                <div className='my-5 mx-4 p-6 border rounded-md bg-white  hover:scale-105 duration-500 shadow-xl'>
                    <img className='rounded-md' src="https://img.freepik.com/free-photo/egg-noodle-with-red-roasted-pork-wonton-table_1150-13419.jpg?w=740&t=st=1683144179~exp=1683144779~hmac=09082fb961003b08ea1a01324265994ce00f5f0282af95a8cd3c0d61438aebf6" alt="" />
                    <h1 className='mt-3 text-center font-semibold text-xl'> Recipe name</h1>
                </div>
                
                <div className='my-5 mx-4 p-6 border rounded-md  hover:scale-105 duration-500 shadow-xl'>
                    <img className='rounded-md' src="https://img.freepik.com/free-photo/penne-pasta-tomato-sauce-with-chicken-tomatoes-wooden-table_2829-19739.jpg?t=st=1683118291~exp=1683118891~hmac=2cc18341b023b4410f343edd84737415b583af11d1fe695fa0200e40046d98da" alt="" />
                    <h1 className='mt-3 text-center font-semibold text-xl'> Recipe name</h1>
                </div>
                <div className='my-5 mx-4 p-6 border rounded-md  hover:scale-105 duration-500 shadow-xl'>
                    <img className='rounded-md' src="https://img.freepik.com/free-photo/top-view-delicious-noodles-concept_23-2148773775.jpg?w=740&t=st=1683118478~exp=1683119078~hmac=ae49b3cdb91dfd2e70d8cabf6ce7f53bada4c9c7514461abbe8ceecedfce5ce5" alt="" />
                    <h1 className='mt-3 text-center font-semibold text-xl'> Recipe name</h1>
                </div>
                
            </div>
        </section>
    );
};

export default PopularRecipes;