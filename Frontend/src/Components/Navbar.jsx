import React, { useState } from "react";
import logo from "../Components/assets/logo.png";
import { Link } from "react-router-dom";
import Modal from "../Components/Modal";
import { UseSelector, useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/actions/authAction";
import Swal from 'sweetalert2';


const Navbar = ({ toggleModal }) => {
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
    console.log("isLoggedIn:",isLoggedIn);
    const dispatch = useDispatch();

    const handleLogout = () => {
        Swal.fire({
            title:'Are You sure?',
            text:'You will be logged out!',
            icon:'warning',
            showCancelButton:true,
            confirmButtonColor:'#3085d6',
            cancelButtonColor:'#d33',
            confirmButtonText:'Yes, log me out'
        }).then((result)=>{
            if(result.isConfirmed){
                dispatch(logout());
                localStorage.removeItem('authToken');
                Swal.fire(
                    'Logged Out!',
                    'You have been logged out',
                    'success'
                );
            }
        });
        
    };
    return (
        <nav className="bg-gray-800 shadow-lg">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    <div className="flex-shrink-0 flex items-center">
                        <img src={logo} alt="read hub logo" className="h-12 w-auto"></img>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            <a href="#" className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium">Home</a>
                            <a href="#" className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium">About</a>
                            <a href="#" className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium">Contact</a>
                            {isLoggedIn ? (
                                <button onClick={handleLogout} className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium">Logout</button>
                            ) : (
                                <button onClick={toggleModal} className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium">Sign Up</button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;