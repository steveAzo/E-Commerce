import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faList, faBlog, faEnvelope, faTimes, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { useAuth } from './../contexts/AuthContext'
import Account from './Dropdown';


export default function Navbar1() {
    const [active, setActive] = useState('')
    const [menuOpen, setMenuOpen] = useState(false)
    const navigate = useNavigate()
    const { isSignedIn } = useAuth()



    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }
    const handleNavLinkClick = (link) => {
        setActive(link)
        window.scrollTo(0, 0)
    }

    const handleSignInClick = () => {
        navigate('/signin');
      };


    return (
        <nav className="bg-gray-200 p-4 border-b border-gray-400">
            <div className='flex items-center justify-between'>
                <div className="flex items-center">
                    <FontAwesomeIcon icon={faHome} className="text-black mr-5"/>
                    <div className="lg:hidden">
                        <button onClick={toggleMenu} className="text-black hover:text-gray-300">
                            <FontAwesomeIcon icon={menuOpen ? faTimes : faList} />
                        </button>
                    </div>
                    <ul className={`lg:flex space-x-4 text-black m-0 pl-8 ${menuOpen ? 'block' : 'hidden'}`}>
                        <li>
                            <NavLink 
                            to="/" 
                            className={`hover:text-gray-500 ${active === 'home' ? 'text-gray-500' : ''}`}
                            onClick={() => handleNavLinkClick('home')}
                            >
                             Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                            to="/cart" 
                            className={`hover:text-gray-500 ${active === 'category' ? 'text-gray-500' : ''}`}
                            onClick={() => handleNavLinkClick('category')}
                            >
                             Categoory
                            </NavLink>
                        </li>                        
                        <li>
                            <NavLink 
                            to="/signup" 
                            className={`hover:text-gray-500 ${active === 'blog' ? 'text-gray-500' : ''}`}
                            onClick={() => handleNavLinkClick('blog')}
                            >
                             Blog
                            </NavLink>
                        </li>                        
                        <li>
                            <NavLink 
                            to="#" 
                            className={`hover:text-gray-500 ${active === 'contact' ? 'text-gray-500' : ''}`}
                            onClick={() => handleNavLinkClick('contact')}
                            >
                             Contact
                            </NavLink>
                        </li>  
                                           
                    </ul>
                </div>
                <div>
                    {isSignedIn ? (
                        <Account />
                    ) : (
                        <button
                            type="button"
                            className="rounded-md bg-green-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            onClick={handleSignInClick}
                        >
                            SignIn
                        </button>
                    )}
                    
                    <NavLink to="/cart" className="text-black ml-4 pl-8 pr-4">
                        <FontAwesomeIcon icon={faShoppingCart} className="text-xl" />
                    </NavLink>
                    
                </div>
            </div>
            
        </nav>
    );
}
