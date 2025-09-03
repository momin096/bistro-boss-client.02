import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {

    const links = <>
        <li>
            <NavLink to={'/'}>Home</NavLink>
        </li>
        <li>
            <NavLink to={'/'}>Contact Us</NavLink>
        </li>
        <li>
            <NavLink to={'/menu'}>Our Menu</NavLink>
        </li>
        <li>
            <NavLink to={'/order'}>Order</NavLink>
        </li>
        <li>
            <NavLink to={'/'}>Dashboard</NavLink>
        </li>

        <li>
            <NavLink to={'/'}>Cart</NavLink>
        </li>
    </>
    return (
        <div className='shadow-2xl bg-base-100/50 fixed z-50 w-full'>
            <div className='container mx-auto'>
                <div className="navbar  shadow-sm">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm font-semibold dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow uppercase">
                                {links}
                            </ul>
                        </div>
                        <a className="btn btn-ghost text-xl">BistroBoss</a>
                    </div>

                    <div className="navbar-end">
                        <ul className="menu font-semibold menu-horizontal px-1 hidden lg:flex uppercase">
                            {links}
                        </ul>
                        <a className="btn">Button</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;