import React from 'react';
import Marquee from "react-fast-marquee";
import MarqueeCard from './MarqueeCard';
import BigBtn from '../../components/BigBtn';

import { BsArrowRight } from 'react-icons/bs';

const Bannar = () => {

const imgArray = [
    "https://img.freepik.com/free-photo/penne-pasta-tomato-sauce-with-chicken-tomatoes-wooden-table_2829-19739.jpg?t=st=1683118291~exp=1683118891~hmac=2cc18341b023b4410f343edd84737415b583af11d1fe695fa0200e40046d98da",    
    "https://img.freepik.com/free-photo/chicken-skewers-with-slices-sweet-peppers-dill_2829-18813.jpg?w=740&t=st=1683118364~exp=1683118964~hmac=f971ac6458e2119b5b5ec2a3fe52c1d3fdb95ac423906131f8d048fada5a4517",
    "https://img.freepik.com/free-photo/top-view-delicious-noodles-concept_23-2148773775.jpg?w=740&t=st=1683118478~exp=1683119078~hmac=ae49b3cdb91dfd2e70d8cabf6ce7f53bada4c9c7514461abbe8ceecedfce5ce5",
    "https://img.freepik.com/free-photo/egg-noodle-with-red-roasted-pork-wonton-table_1150-13419.jpg?w=740&t=st=1683144179~exp=1683144779~hmac=09082fb961003b08ea1a01324265994ce00f5f0282af95a8cd3c0d61438aebf6",
    "https://img.freepik.com/free-photo/asian-dish-plate-with-chopsticks-vegetables_23-2148694376.jpg?w=740&t=st=1683144281~exp=1683144881~hmac=1a4b06a9ae9cbcb7a0db34f5ccaae8b3ae6e68194548f2c6bc81700824e2bc2d",
    "https://img.freepik.com/free-photo/flat-lay-salad-with-chicken-sesame-seeds_23-2148700369.jpg?w=740&t=st=1683144340~exp=1683144940~hmac=445d751103d5441bff034bb39c00a9e75092146746d88ae6c17872cb333f4ef8",    
    "https://img.freepik.com/free-photo/tasty-asian-noodles-with-cheese-tofu-vegetables-bowls_1220-5312.jpg?w=740&t=st=1683144433~exp=1683145033~hmac=8c2e0a461527520647c5363072f21928783fab0fc01452f7071e303b3c1983d3",
    "https://img.freepik.com/free-photo/high-angle-japanese-dumplings-composition_23-2148809869.jpg?w=740&t=st=1683144524~exp=1683145124~hmac=29ab184405a54c76d9236a83700e28421c1300453c327cdd3609cd026010b9b2",
    "https://cdn.pixabay.com/photo/2016/12/27/09/26/ohhyangjangyuk-1933565_960_720.jpg"
]



    return (
        <section>
            <div className='text-center'>
                <Marquee pauseOnHover={true} gradient={true} gradientColor={[255, 255, 255]} gradientWidth={50}>
                    {imgArray.map((aimg)=>{return<MarqueeCard aimg={aimg}></MarqueeCard> })}
                    
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