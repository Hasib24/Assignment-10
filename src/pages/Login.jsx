import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthContextProvider';
import SignInBtns from '../components/SignInBtns';

const Login = () => {

    const { signInUser, user, setUser } = useContext(AuthContext)

    

    const handleOnSubmit = (e) =>{
        e.preventDefault();
        const form = e.target;
        let email = form.email.value;
        let password = form.password.value;

        signInUser(email, password)
        .then(res => setUser(res.user))

     
    }
 


    return (
        <div className=' justify-center flex container mx-auto'>
            <form className='p-10 border' onSubmit={handleOnSubmit}>
                <input className='block border rounded-lg outline-none my-4 p-2 w-72' type="email" name="email" id="email" placeholder='Enter email' />
                <input className='block border rounded-lg outline-none my-4 p-2 w-72' type="password" name="password" id="password" placeholder='Password' />
                <input className='border border-blue-600 rounded-lg w-72 py-1 bg-blue-600 hover:bg-white text-white hover:text-blue-600 font-semibold cursor-pointer duration-500' type="submit" value="Login" />
                <p className='my-5'>Don't have an account ? <Link to='/register' className='text-blue-600'>Regester</Link> </p>
                <p>
                    <span className='block text-center'>OR</span>
                    <SignInBtns></SignInBtns>
                </p>
            </form>
            
        </div>
    );
};

export default Login;