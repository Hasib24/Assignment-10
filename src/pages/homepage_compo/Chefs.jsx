import React, { useEffect, useState } from 'react';
import BigBtn from '../../components/BigBtn';
import ChefCard from './ChefCard';
import { useLoaderData } from 'react-router-dom';

const Chefs = () => {

    let [chefs, setChefs] = useState(useLoaderData())

    return (
        <section className='bg-slate-100'>
            <div className='container mx-auto py-10 md:grid md:grid-cols-12 text-center'>
                <div className='col-span-4'>
                    <img className='rounded-lg shadow-lg' src="https://images.pexels.com/photos/3814446/pexels-photo-3814446.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                    <BigBtn>Master Chefs</BigBtn>
                </div>
                <div className='col-span-8 md:grid grid-cols-3'>

                    {chefs.map(chef => <ChefCard chef={chef} key={chef.id}></ChefCard>)}

                </div>
        </div>
        </section>
        
    );
};

export default Chefs;