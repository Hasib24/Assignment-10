import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';

import { MdClose } from 'react-icons/md';
import { GoThreeBars } from 'react-icons/go';
import { FaDragon } from 'react-icons/fa';
import { AuthContext } from '../providers/AuthContextProvider';


const Header = () => {

    const { user, logOut } = useContext(AuthContext);

    const [ displayUserInfo, setDisplayUserInf ] = useState(false);
    const [ handleHoverOnHead, setHandleHoverOnHead ] = useState(null)

    let [responsiveMenu, setResponsiveMenu ] = useState(false);

    const handleResponsiveCrossBtn=()=>{
        setResponsiveMenu(!responsiveMenu)
        setDisplayUserInf(!displayUserInfo)
        
    }

    



    const activeLinkStyle = ({isActive}) =>{
        return{

            color: isActive ? '#b70707' : ''
            
        }
    }
    return (
        <header className='bg-white  sticky top-0 z-50 shadow-lg'>
            <div className=' container mx-auto py-3 px-4 md:px-0 flex items-center justify-between bg-white border-slate-700'>
                <div className='flex items-center'>
                    <span className='inline-block text-4xl font-semibold border-2 p-4 rounded-full shadow-black shadow-md'><FaDragon/></span>
                    <span className='inline-block text-3xl ml-2 font-semibold'>Dragon's</span> {""}
                    <span className='inline-block text-3xl ml-1 font-extralight'>Den</span>
                </div>
                <div className='text-3xl p-1 border rounded-md md:hidden '>
                    { responsiveMenu ? <MdClose onClick={()=>handleResponsiveCrossBtn()}></MdClose> : <GoThreeBars onClick={()=>setResponsiveMenu(!responsiveMenu)}></GoThreeBars> }
                </div>
                <nav className={`text-xl flex flex-col md:block  p-2 ${responsiveMenu ? `absolute right-4 top-20 bg-[#d4d3d3] rounded-md` : `absolute right-2 -top-40`} md:static md:bg-inherit duration-500`}>
                    <NavLink className={'px-3 font-semibold hover:text-red-700 duration-500'} style={activeLinkStyle} onClick={()=>setResponsiveMenu(!responsiveMenu)} to='/'>Home</NavLink>
                    <NavLink className={'px-3 font-semibold hover:text-red-700 duration-500'} style={activeLinkStyle} onClick={()=>setResponsiveMenu(!responsiveMenu)} to='/blog'>Blog</NavLink>
                    <NavLink className={'px-3 font-semibold hover:text-red-700 duration-500'} style={activeLinkStyle} onClick={()=>setResponsiveMenu(!responsiveMenu)} to='/about'>About</NavLink>
                    {
                        user ? <div className='w-12 inline-block' onClick={()=>{setDisplayUserInf(!displayUserInfo)}}>

                                    {
                                    /* by hover on the display image can see displayName and by click he can find logout option
                                        the div next to the img is conditionaly rendered to show displayName on hover on img teg
                                        */
                                    }
                                    <img className='rounded-full inline cursor-pointer' src={`${user.photoURL}`} onMouseEnter={()=>setHandleHoverOnHead(true)} onMouseOut={()=>setHandleHoverOnHead(null)}/>
                                    
                                    <div className={handleHoverOnHead ? `absolute text-sm font-semibold`:`absolute text-sm font-semibold hidden` }>
                                        <h1>{user.displayName}</h1>
                                        <h1>click on head</h1>
                                    </div>
                                
                                    <div className={ displayUserInfo ? `absolute rounded-lg bg-slate-700 text-white right-2 p-5` : `absolute hidden` }>
                                        <h1 className=''>Name: {user.displayName}</h1>
                                        <h1 className=''>Email: {user.email}</h1>
                                        <button className='border p-1 mt-5 rounded-lg' onClick={()=>{logOut()}}>Logout</button>
                                    </div>
                                </div> : <NavLink className={'px-3 font-semibold hover:text-red-700 duration-500'} style={activeLinkStyle} onClick={()=>setResponsiveMenu(!responsiveMenu)} to='/login'>Login</NavLink>

                    }

                </nav>
                
            </div>
        </header>

    );
};

export default Header;