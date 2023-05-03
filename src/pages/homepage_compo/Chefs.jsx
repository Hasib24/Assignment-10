import React from 'react';
import BigBtn from '../../components/BigBtn';
import ChefCard from './ChefCard';

const Chefs = () => {
    return (
        <div className='py-10 md:grid md:grid-cols-12 text-center'>
            <div className='col-span-4'>
                <img className='rounded-lg shadow-lg' src="https://images.pexels.com/photos/3814446/pexels-photo-3814446.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                <BigBtn>Master Chefs</BigBtn>
            </div>
            <div className='col-span-8 md:grid grid-cols-3'>
                <ChefCard></ChefCard>
                <ChefCard></ChefCard>
                <ChefCard></ChefCard>
                <ChefCard></ChefCard>
                <ChefCard></ChefCard>
                <ChefCard></ChefCard>
            </div>

            
        </div>
    );
};

export default Chefs;