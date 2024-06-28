import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContent } from './AuthFile/AuthData';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import { SiTicktick } from "react-icons/si";

const Navbar = () => {
    const {user,logOut} = useContext(AuthContent);
    console.log(user)
    const handleLogOut = () =>{
        logOut()
        .then(res=>{
          Swal.fire({
            icon:'success',
            title: 'Logged Out',
            showConfirmButton: false,
            timer: 1500
          })
        })
        .catch(data=>{
            Swal.fire({
                icon:'error',
                title: 'Something went wrong for sign Out',
                showConfirmButton: false,
                timer: 1500
            })
        })
    }
    const nanLink = <>
        <li>
            <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-red-500 underline" : ""
                }
            >
                Home
            </NavLink>
        </li>

        {
            user &&
            <li>
            <NavLink
                to="/addTour"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-red-500 underline" : ""
                }
            >
                Add Tourists Spot
            </NavLink>
        </li>
        }
       
    </>
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {nanLink}
                        </ul>
                    </div>
                   <div className='flex justify-center items-center gap-2'>
                     <img src="https://i.pinimg.com/736x/4a/c5/64/4ac564b1f9c9f73824fc640cc5e0a3b2.jpg" className='w-[70px] h-[70px] rounded' alt="" />
                     <p className='text-xl font-semibold'><span className='text-blue-500'>S</span><span className='text-orange-500'>Travels</span></p>
                   </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {nanLink}
                    </ul>
                </div>

                <div className='navbar-end gap-2'>
                 
                {
                    user?<>
                    <div className="dropdown dropdown-end flex justify-end items-center">
                        <div>
                            <div tabIndex={2} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img
                                        alt="loading"
                                        src={user.photoURL || 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'} />
                                </div>
                            </div>
                            <ul
                                tabIndex={2}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                <li>
                                    <a className="justify-between">
                                        {user.displayName}
                                        <span className="badge"><SiTicktick className='text-blue-400'/></span>
                                    </a>
                                </li>
                                <li><button onClick={handleLogOut} className='btn btn-sm btn-outline'>LogOut</button></li>
                            </ul>
                        </div>
                    </div>
                    </>:<>
                    <Link className='btn btn-outline btn-info' to={'/login'}>Login</Link>
                    </>
                }
                </div>

            </div >
        </div>
    );
};

export default Navbar;