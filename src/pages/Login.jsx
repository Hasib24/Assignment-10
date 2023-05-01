import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {

    const handleOnSubmit = (e) =>{
        e.preventDefault();
        const form = e.target;
        let email = form.email.value;
        let password = form.password.value;

        console.log(email, password);
    }


    return (
        <div className='justify-center flex container mx-auto'>
            <form className='p-10 border' onSubmit={handleOnSubmit}>
                <input className='block border my-4 p-2 w-72' type="email" name="email" id="email" placeholder='Enter email' />
                <input className='block border my-4 p-2 w-72' type="password" name="password" id="password" placeholder='Password' />
                <input className='border w-72' type="submit" value="Login" />
                <p className='my-5'>Don't have an account ? <Link to='/register' className='text-blue-600'>Regester</Link> </p>
            </form>
        </div>
    );
};

export default Login;