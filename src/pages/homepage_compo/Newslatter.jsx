import React from 'react';
import { BsArrowRight } from 'react-icons/bs';

const Newslatter = () => {
    return (
        <section className="
        
        bg-[url('https://images.pexels.com/photos/5605061/pexels-photo-5605061.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')]
        
        bg-center
        text-center
        items-center
        flex
        justify-center
        h-[50vh]
        text-white
        ">
            <div className='bg-slate-900 bg-opacity-80 flex flex-col justify-center items-center w-full h-[50vh]'>
                <h1 className='text-5xl font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-green-600'>To get latest update</h1>
                <h1 className='text-5xl font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-green-600'>Subscribe our Newslatter !</h1>
                <p className='flex items-center border rounded-md'>
                    <input className='p-2 bg-transparent' type="email" name="" id="" placeholder='Your Email'/>
                    <button className='border-l rounded-md px-5 py-3 bg-blue-600 text-2xl'><BsArrowRight></BsArrowRight> </button>

                </p>
            </div>
            
        </section>
    );
};

export default Newslatter;