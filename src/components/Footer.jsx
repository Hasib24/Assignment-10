import React from 'react';
import { FaFacebookF } from 'react-icons/fa';
import { TiSocialTwitter } from 'react-icons/ti';
import { FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    const siteLogoStyle = {
        backgroundImage: 'linear-gradient(90deg, #7E90FE 0%, #9873FF 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor:'transparent'

    }

    return (
        <>
        


        <div className='bg-slate-800'>
            <div className='container mx-auto md:grid grid-cols-6  text-white py-10 px-2'>  
            <div className='m-2 text-center md:text-left col-span-2'>
                <div className='flex items-center'>
                    <span className='inline-block text-3xl font-semibold'>Dragon's</span> {""}
                    <span className='inline-block text-3xl ml-1 font-extralight'>Den</span>
                </div>
                <p className='my-3 text-justify'>From classic dishes to modern creations, we aim to bring you an unparalleled culinary experience that will delight your taste buds and satisfy your hunger. Whether you're a seasoned foodie or simply looking to try something new, we are committed to providing you with the freshest ingredients, the finest recipes, and the highest quality of service.</p>
                <div className='flex sm:justify-center md:justify-start'>
                    <FaFacebookF className='inline-block text-4xl border p-1 m-1 rounded-full cursor-pointer '></FaFacebookF>
                    <TiSocialTwitter className='inline-block text-4xl border p-1 m-1 rounded-full cursor-pointer '></TiSocialTwitter>
                    <FaInstagram className='inline-block text-4xl border p-1 m-1 rounded-full cursor-pointer '></FaInstagram>
                </div>
            </div>
            <div className='m-2 text-center md:text-left'>
                <h1 className='text-xl font-semibold'>Links</h1>
                <p>
                    <Link className='font-extralight hover:underline' to={'/'}>About Us</Link> <br />
                    <Link className='font-extralight hover:underline' to={'/'}>Menu</Link> <br />
                    <Link className='font-extralight hover:underline' to={'/'}>Catering</Link> <br />
                    <Link className='font-extralight hover:underline' to={'/'}>Events</Link> <br />
                    <Link className='font-extralight hover:underline' to={'/'}>Become a Shef</Link> <br />
                    <Link className='font-extralight hover:underline' to={'/'}>Recipies</Link>
                </p>
            </div>
            <div className='m-2 text-center md:text-left'>
                <h1 className='text-xl font-semibold'>Popular Recipes</h1>
                <p>
                <Link className='font-extralight hover:underline' to={'/'}>Kung Pao Chicken</Link> <br />
                    <Link className='font-extralight hover:underline' to={'/'}>Mapo Tofu</Link> <br />
                    <Link className='font-extralight hover:underline' to={'/'}>Hot and Sour Soup</Link> <br />
                    <Link className='font-extralight hover:underline' to={'/'}>Egg Fried Rice</Link> <br />
                    <Link className='font-extralight hover:underline' to={'/'}>Chow Mein</Link>
                </p>
            </div>
            <div className='m-2 text-center md:text-left'>
                <h1 className='text-xl font-semibold'>Support</h1>
                <p>
                    <a className='font-extralight' href="#">Help Desk</a> <br />
                    <a className='font-extralight' href="#">Sales</a> <br />
                    <a className='font-extralight' href="#">Become a Partner</a> <br />
                </p>
            </div>
            <div className='m-2 text-center md:text-left'>
                <h1 className='text-xl font-semibold'>Contact</h1>
                
                <address className='not-italic'>
                    <h1 className='font-extralight' >123 Main Street</h1>
                    <h1 className='font-extralight' >Anytown, CA 12345</h1>
                    <h1 className='font-extralight' >+1 777 - 978 - 5570</h1>
                    <h1 className='font-extralight' >United States</h1>
                    



                </address>

            </div>
        </div>
        <div className='text-white text-center md:flex md:justify-between container mx-auto py-6 border-t border-slate-700'>
            <div> &copy; 2023 <span className='cursor-pointer font-semibold'>Dragon's Den</span> || All Right Researved </div>
            <div>Powered by <span className='font-bold cursor-pointer'>Company Name</span></div>
        </div>
        </div>
        </>
        
    );
};

export default Footer;