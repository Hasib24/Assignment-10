import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { TbNumber } from 'react-icons/tb';
import { BsCalendar2Month } from 'react-icons/bs';
import { BiLike } from 'react-icons/bi';
import ChefRecipeCardGroup from './ChefRecipeCardGroup';

const ChefRecipes = () => {
    const chef = useLoaderData();
    
    const {id, chefPicture, chefName, shortBio, yearsOfExperience, numberOfRecipes, likes, recipes} = chef;
    return (
        <>
           <section className=' p-2 '>
                <div className='container mx-auto md:grid md:grid-cols-12'>
                    <div className='col-span-5 px-10 py-16'><img className='' src={chefPicture} alt="" /></div>
                    <div className='col-span-7 flex flex-col justify-center px-10'>
                        <h1 className='text-5xl font-bold'>{chefName}</h1>
                        <p className='text-xl text-justify'>{shortBio[0]}</p>
                        <p className='text-xl text-justify'>{shortBio[1]}</p>
                        <div className='flex justify-between px-5'>

                            <h1 className='border p-2 font-semibold'><TbNumber className='text-4xl inline-block '></TbNumber>Number of Recipes : {numberOfRecipes}</h1>
                            <h1 className='border p-2 font-semibold'><BsCalendar2Month className='text-3xl inline-block '></BsCalendar2Month>Years of Experience : {yearsOfExperience}</h1>
                            <h1 className='border p-2 font-semibold'><BiLike className='text-3xl inline-block '></BiLike>Likes :{likes}</h1>
                        </div>
                    </div>
                </div>
            </section>
            <ChefRecipeCardGroup></ChefRecipeCardGroup>

        </>

    );
};

export default ChefRecipes;