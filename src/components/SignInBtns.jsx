import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { BsGithub } from 'react-icons/bs';

const SignInBtns = () => {
    return (
        <>
            <button className='block border rounded-lg w-full my-2 py-1 font-semibold'><FcGoogle className='inline-block text-2xl'></FcGoogle> SignIn with Google</button>
            <button className='block border rounded-lg w-full my-2 py-1 font-semibold'> <BsGithub className='inline-block text-2xl'></BsGithub> SignIn with GitHub</button>
        </>
        
    );
};

export default SignInBtns;