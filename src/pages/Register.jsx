import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthContextProvider';
import Login from './Login';
import { getAuth, updateProfile } from 'firebase/auth';
import { app } from '../../firebase.config';
import SignInBtns from '../components/SignInBtns';

const auth = getAuth(app)

const Register = () => {

    const { createUser, user, setUser } = useContext(AuthContext)
    const [tarmsAndPolices, setTarmAndPolicies] = useState(false)

    const handleOnSubmit = (e) =>{
        e.preventDefault();
        const form = e.target;
        let name = form.name.value;
        let email = form.email.value;
        let password = form.password.value;


        createUser(email, password)
        .then((res) =>{

            updateProfile(auth.currentUser, { displayName: name })
            .then(()=>{
                // profile updated 
            })
            .catch(error => console.log(error.message))

      

            res.user.displayName = name;

            setUser(res.user)
            
            form.reset()
        } )
        .catch(error => console.log(error.message))

    }
    const handleTasmsPolicy = (event) =>{
        setTarmAndPolicies(event.target.checked);
    }



    



    return (
        <div className='justify-center flex container mx-auto'>
            <form className='p-10 border' onSubmit={handleOnSubmit}>
                <input className='block border rounded-lg my-4 p-2 w-72 outline-none' type="text" name="name" id="name" placeholder='Enter name' required />
                <input className='block border rounded-lg my-4 p-2 w-72 outline-none' type="email" name="email" id="email" placeholder='Enter email' required />
                <input className='block border rounded-lg my-4 p-2 w-72 outline-none' type="password" name="password" id="password" placeholder='Password' required/>
                <span className='block my-2 ml-2'><input className='mr-2' type="checkbox" name="checkbox" id="checkbox" onClick={(event)=>handleTasmsPolicy(event)} /><label htmlFor="checkbox">Accept Terms and Policies</label></span>      
                <input className={!tarmsAndPolices ? `border border-red-600 rounded-lg w-72 py-1 bg-blue-500 hover:bg-white text-white hover:text-blue-500 font-semibold cursor-pointer duration-500` : `border border-blue-600 rounded-lg w-72 py-1 bg-blue-800 hover:bg-white text-white hover:text-blue-800 font-semibold cursor-pointer duration-500` } type="submit" value="Create" disabled={!tarmsAndPolices} />
                <p className='my-5'>Already have an account ? <Link to='/login' className='text-blue-600'>Login</Link> </p>
                <p>
                    <span className='block text-center'>OR</span>
                    <SignInBtns></SignInBtns>
                </p>
            </form>
        </div>
    );
};

export default Register;