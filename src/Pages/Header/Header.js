import React, { useContext, useEffect, useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Authcontext } from '../../Shared/Authprovider/Authprovider';
import './Header.css';
import Headerli from './Headerli';
import navimgicon from './navicon.png'

const Header = () => {
    const { user, logout } = useContext(Authcontext);

    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('https://y-omega-two.vercel.app/services')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])


    const handlelogout = () => {
        logout()
            .then(() => { })
            .catch(error => console.error(error))
    }


    const menuItem = <React.Fragment>
        <li className=' hover:btn-secondary font-serif'><Link to='/'>Home</Link></li>
        <li className='hover:btn-secondary font-serif'>
            <a>
                Categories
                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
            </a>
            <ul className="p-2 bg-base-100 categories-li">
                {
                    categories.map(category =>
                        <Link to={`/allcatagories/${category.catagory_name}`}>
                            <li className='btn-outline hover:btn-secondary'>{category.catagory_name}</li>
                        </Link>
                    )
                }
            </ul>
        </li>




        {user?.uid ?
            <>
                <li className='hover:btn-secondary font-serif max-lg:hidden'><Link to='/dashboard'>Dashboard</Link></li>
                <li className='hover:btn-secondary font-serif'><Link onClick={handlelogout} to='/login'>Logout</Link></li>
            </>
            :
            <>
                <li className='hover:btn-secondary font-serif'><Link to='/register'>Register</Link></li>
                <li className='hover:btn-secondary font-serif'><Link to='/login'>LogIn</Link></li>
            </>
        }

    </React.Fragment>
    return (
        <div className="navbar bg-base-100 flex justify-between header-container">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItem}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case">
                    <img className=' h-12' src={navimgicon} alt="" />
                    <span className='text-sm font-bold mt-8 font-serif'>MÖBEL</span>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItem}
                </ul>
            </div>

        </div>
    );
};

export default Header;