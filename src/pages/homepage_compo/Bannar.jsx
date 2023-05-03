import React from 'react';
import Marquee from "react-fast-marquee";
import MarqueeCard from './MarqueeCard';
import BigBtn from '../../components/BigBtn';

import { BsArrowRight } from 'react-icons/bs';

const Bannar = () => {


    return (
        <section>
            <div className='text-center'>
                <Marquee pauseOnHover={true} gradient={true} gradientColor={[255, 255, 255]} gradientWidth={50}>

                    <MarqueeCard></MarqueeCard>
                    <MarqueeCard></MarqueeCard>
                    <MarqueeCard></MarqueeCard>
                    <MarqueeCard></MarqueeCard>
                    <MarqueeCard></MarqueeCard>
                    <MarqueeCard></MarqueeCard>
                </Marquee>
                <h1 className='text-6xl text-center font-bold tracking-wider   text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-green-600'>Bringing the world to your plate!</h1>
                <BigBtn>Explore
                    <BsArrowRight className='inline ml-3'></BsArrowRight>
                </BigBtn>
                
            </div>
            
        </section>
    );
};

export default Bannar;