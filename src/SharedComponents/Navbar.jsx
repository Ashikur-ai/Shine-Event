import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import toast from 'react-hot-toast';

const Navbar = () => {
    const { user, LogOut } = useContext(AuthContext);

    const handleLogOut = () => {
        LogOut()
            .then(
                toast.error('Logged out successful')
            )
            .catch(error => {
            console.log(error);
        })
    }

    return (
        <div className="navbar bg-base-100 container mx-auto mt-4">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost md:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><NavLink to="/meeting">Meeting</NavLink></li>
                        <li><NavLink to="/latestEvent">Latest Event</NavLink></li>
                    </ul>
                </div>
                <NavLink to="/" className="btn btn-ghost normal-case text-4xl font-bold"><span className='text-blue-600'>Shine</span> Events</NavLink>
            </div>
            <div className="navbar-center">
                <ul className='hidden md:flex justify-between gap-6'>
                   
                    <li><NavLink to="/meeting" className='btn btn-primary'>Meet Us</NavLink></li>
                    <li><NavLink to="/latestEvent" className="btn btn-primary">Latest Event</NavLink></li>
                    
                </ul>
            </div>
            
            <div className="navbar-end space-x-3">
                
                {
                    user ?
                        <>
                            <div className="dropdown dropdown-end">
                                <label tabIndex={0} className="btn btn-ghost btn-circle bg-blue-500 avatar">
                                    <div className="w-10 rounded-full">
                                        {
                                            user.photoURL ?
                                                <img src={`${user.photoURL}`} alt="" />
                                                :
                                                <div className='font-bold text-2xl text-white'>{ user.email.slice(0,1) }</div>
                                        }
                                    </div>
                                </label>
                                <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                                    <li>
                                        <a className="justify-between">
                                            {user.displayName ? user.displayName : user.email}
                                            
                                        </a>
                                    </li>
                                    <li onClick={handleLogOut}><a>Logout</a></li>
                                </ul>
                            </div>
                        </>
                        :
                        <NavLink to="/login">
                            <button className="btn">LogIn</button>
                        </NavLink>
                   
                }
            </div>
        </div>
    );
};

export default Navbar;