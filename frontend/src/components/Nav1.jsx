import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faList, faBlog, faEnvelope } from '@fortawesome/free-solid-svg-icons'


export default function Navbar1() {
    const [active, setActive] = useState('')
    const [menuOpen, setMenuOpen] = useState(false)

    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }
    const handleNavLinkClick = (link) => {
        setActive(link)
        window.scrollTo(0, 0)
    }


    return (
        <nav className="bg-gray-200 p-4 border-b border-gray-400">
            <div className='flex items-center justify-between'>
                <div className="flex items-center">
                    <FontAwesomeIcon icon={faHome} className="text-black mr-5"/>
                    <div className="lg:hidden">
                        <button onClick={toggleMenu} className="text-black hover:text-gray-300">
                            <FontAwesomeIcon icon={menuOpen ? faList : faList} />
                        </button>
                    </div>
                    <ul className={`lg:flex space-x-4 text-black m-0 pl-8 ${menuOpen ? 'block' : 'hidden'}`}>
                        <li>
                            <NavLink 
                            to="#" 
                            className={`hover:text-gray-500 ${active === 'home' ? 'text-gray-500' : ''}`}
                            onClick={() => handleNavLinkClick('home')}
                            >
                             Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                            to="#" 
                            className={`hover:text-gray-500 ${active === 'category' ? 'text-gray-500' : ''}`}
                            onClick={() => handleNavLinkClick('category')}
                            >
                             Categoory
                            </NavLink>
                        </li>                        
                        <li>
                            <NavLink 
                            to="#" 
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
                    <a href='#' className='text-black hover:text-gray-300 mr-2'>
                        <FontAwesomeIcon icon={faList} />
                    </a>
                    <a href="#" className="text-black hover:text-gray-300">
                        <FontAwesomeIcon icon={faEnvelope} />
                    </a>
                </div>
            </div>
            
        </nav>
    );
}
