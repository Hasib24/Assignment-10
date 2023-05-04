import React, { useContext } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { BsGithub } from 'react-icons/bs';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { app } from '../../firebase.config';
import { Result } from 'postcss';
import { AuthContext } from '../providers/AuthContextProvider';

const googleProvider = new GoogleAuthProvider()
const auth = getAuth(app);



const SignInBtns = () => {
    const {setUser} = useContext(AuthContext)

    const handleGoogleSignInBtn = () =>{
        signInWithPopup(auth, googleProvider)
        .then(result=>setUser(result.user))
        .catch(error =>console.log(error.message))

    }

    const handleGitHubSignInBtn = () =>{
        console.log(`git clicked`);
    }

    return (
        <>
            <button onClick={()=>handleGoogleSignInBtn()} className='block border rounded-lg w-full my-2 py-1 font-semibold'><FcGoogle className='inline-block text-2xl'></FcGoogle> SignIn with Google</button>
            <button onClick={()=>handleGitHubSignInBtn()} className='block border rounded-lg w-full my-2 py-1 font-semibold'> <BsGithub className='inline-block text-2xl'></BsGithub> SignIn with GitHub</button>
        </>
        
    );
};

export default SignInBtns;