import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';

import { MdClose } from 'react-icons/md';
import { GoThreeBars } from 'react-icons/go';
import { FaDragon } from 'react-icons/fa';
import { AuthContext } from '../providers/AuthContextProvider';


const Header = () => {

    const { user, logOut } = useContext(AuthContext);

    const [ displayUserInfo, setDisplayUserInf ] = useState(false);

    let [responsiveMenu, setResponsiveMenu ] = useState(false);



    const activeLinkStyle = ({isActive}) =>{
        return{

            color: isActive ? '#b70707' : ''
            
        }
    }
    return (
        <div className=' container mx-auto py-5 px-4 md:px-0 flex items-center justify-between bg-white  border-b border-slate-700 sticky top-0'>
            <div className='flex items-center'>
                <span className='inline-block text-4xl font-semibold border-2 p-4 rounded-full shadow-black shadow-md'><FaDragon/></span>
                <span className='inline-block text-3xl ml-2 font-semibold'>Dragon's</span> {""}
                <span className='inline-block text-3xl ml-1 font-extralight'>Den</span>
            </div>
            <div className='text-3xl p-1 border rounded-md md:hidden '>
                { responsiveMenu ? <MdClose onClick={()=>setResponsiveMenu(!responsiveMenu)}></MdClose> : <GoThreeBars onClick={()=>setResponsiveMenu(!responsiveMenu)}></GoThreeBars> }
            </div>
            <nav className={`border text-xl flex flex-col md:block  p-2 ${responsiveMenu ? `absolute right-4 top-20 bg-[#333] rounded-md` : `absolute right-2 -top-40`} md:static md:bg-inherit duration-500`}>
                <NavLink className={'px-3 font-semibold hover:text-red-700 duration-500'} style={activeLinkStyle} onClick={()=>setResponsiveMenu(!responsiveMenu)} to='/'>Home</NavLink>
                <NavLink className={'px-3 font-semibold hover:text-red-700 duration-500'} style={activeLinkStyle} onClick={()=>setResponsiveMenu(!responsiveMenu)} to='/blog'>Blog</NavLink>
                {
                    user ? <div className='w-10 inline-block  border ' onClick={()=>{setDisplayUserInf(!displayUserInfo)}}>
                                <img className='rounded-full inline cursor-pointer' src={`${user.photoURL}`} />
                                {console.log(user.photoURL)}
                                <div className={ displayUserInfo ? `absolute border rounded-lg bg-slate-700 text-white right-0 p-5` : `absolute hidden` }>
                                    <h1 className=''>Name: {user.displayName}</h1>
                                    <h1 className=''>Email: {user.email}</h1>
                                    <button className='border p-1 mt-5 rounded-lg' onClick={()=>{logOut()}}>Logout</button>
                                </div>
                            </div> : <NavLink className={'px-3 font-semibold hover:text-red-700 duration-500'} style={activeLinkStyle} onClick={()=>setResponsiveMenu(!responsiveMenu)} to='/login'>Login</NavLink>

                }
                
            </nav>
            
        </div>
    );
};

export default Header;