import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthContextProvider';
import Login from './Login';
import { getAuth, updateProfile } from 'firebase/auth';
import { app } from '../../firebase.config';
import SignInBtns from '../components/SignInBtns';

const auth = getAuth(app)

const Register = () => {

    const { createUser, user, setUser } = useContext(AuthContext)

    const handleOnSubmit = (e) =>{
        e.preventDefault();
        const form = e.target;
        let email = form.email.value;
        let password = form.password.value;

        createUser(email, password)
        .then(res => {
            updateProfile(auth.currentUser, { displayName: "Hasibul Islam" })
            .then((result) => {console.log(result)})

            setUser(res.user)
        })
        .catch(error => console.log(error.message))

    }



    return (
        <div className='justify-center flex container mx-auto'>
            <form className='p-10 border' onSubmit={handleOnSubmit}>
                <input className='block border rounded-lg my-4 p-2 w-72 outline-none' type="text" name="name" id="name" placeholder='Enter name' required />
                <input className='block border rounded-lg my-4 p-2 w-72 outline-none' type="email" name="email" id="email" placeholder='Enter email' required />
                <input className='block border rounded-lg my-4 p-2 w-72 outline-none' type="password" name="password" id="password" placeholder='Password' required/>
                <input className='border border-blue-600 rounded-lg w-72 py-1 bg-blue-600 hover:bg-white text-white hover:text-blue-600 font-semibold cursor-pointer duration-500' type="submit" value="Create" />
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