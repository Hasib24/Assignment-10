import React from 'react';

import marqueeimg from '../../assets/img/pexels-brett-jordan-2297961.jpg';
import NormalBtn from '../../components/NormalBtn';

import { TbClick } from 'react-icons/tb';

const MarqueeCard = ({aimg}) => {

    return (
        <div className='w-64 border p-4 m-4 rounded-lg shadow-md'>
            <img className=' rounded-lg' src={aimg} alt="" />
            <h1 className='font-semibold text-xl my-2'>Recipe Name</h1>
            <NormalBtn>View Details
                <TbClick className='inline ml-3'></TbClick>
            </NormalBtn>
            
        </div>
    );
};

export default MarqueeCard;