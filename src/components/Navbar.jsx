import React, { useState } from 'react'
import { FaSearch, FaShoppingBag, FaUser, FaBars, FaTimes } from 'react-icons/fa'
import logo from '/logo.png'
import { Link } from 'react-router-dom'
const Navbar = () => {


    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }
    const navItems = [
        {title: ' Jewelry and Accessories', path: "/"},
        {title: ' Clothing & Shoes', path: "/"},
        {title: ' Home & Living', path: "/"},
        {title: ' Wedding & Party', path: "/"},
        {title: ' Toys & Entertainment', path: "/"},
        {title: ' Art & Collectibles', path: "/"},
        {title: ' Craft Supplies & Tools', path: "/"}
    ]
    return (
        <header className='max-w-screen-xl xl:px-28 lg:px-20 mx-auto absolute top-0 right-0 left-0'>
            <nav className='flex justify-between items-center  md:py-4 pt-6 pb-3'>
                <div>
                    <FaSearch className='text-Black w-5 h-5 cursor-pointer hidden md:block'/>
                </div>
                <div>
                    <a href=""><img src={logo} alt="" /></a>
                </div>
                <div className='text-lg text-black  sm:flex items-center gap-4 hidden'>
                    <a href="" className='flex items-center gap-2'> <FaUser /> Account</a>
                    <a href="" className='flex items-center gap-2'> <FaShoppingBag /> Shopping</a>
                </div>

                {/* Nabar for Small deices */}
                <div className='sm:hidden'>
                    <button onClick={toggleMenu}>
                        {
                            isMenuOpen ? <FaTimes className="w-5 h-5 text-Black" /> : <FaBars className="w-5 h-5 text-Black" /> 
                        }
                        
                    </button>
                </div>
            </nav>

            <hr />

            {/* Category items */}
            <div>
                <ul className='lg:flex items-center justify-between text-Black hidden'>
                    {
                        navItems.map(({title, path})=> (
                            <li key={title} className='hover:text-orange-400'>
                                <Link to="/">{title}</Link>
                            </li>

                        ))
                    }
                </ul>
            </div>

            {/* Only Mobile Na Items */}
            <div>
                {
                    isMenuOpen ? 
                    <ul className='bg-Black text-white py-2  '>
                    {
                        navItems.map(({title, path})=> (
                            <li key={title} className='hover:text-orange-400'>
                                <Link to="/">{title}</Link>
                            </li>

                        ))
                    }
                </ul> :
                ''
                }
           
            </div>

        </header>
    )
}

export default Navbar