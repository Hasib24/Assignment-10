import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='justify-center flex container mx-auto'>
            <form className='p-10 border'>
                <input className='block border my-4 p-2 w-72' type="email" name="email" id="email" placeholder='Enter email' />
                <input className='block border my-4 p-2 w-72' type="password" name="password" id="password" placeholder='Password' />
                <input className='border w-72' type="submit" value="Login" />
                <p className='my-5'>Don't have an account ? <Link to='/register'>Regester</Link> </p>
            </form>
        </div>
    );
};

export default Login;