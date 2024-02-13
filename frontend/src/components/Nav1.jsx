import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faList, faBlog, faEnvelope } from '@fortawesome/free-solid-svg-icons'


export default function Navbar1() {
    return (
        <nav className="bg-gray-200 p-4 border-b border-gray-400">
            <div className='flex items-center justify-between'>
                <div className="flex items-center">
                    <FontAwesomeIcon icon={faHome} className="text-black mr-5"/>
                    <ul className="flex space-x-4 text-black m-0 pl-8">
                        <li><a href="#" className="hover:text-gray-500">Home</a></li>
                        <li><a href="#" className="hover:text-gray-500">Categories</a></li>
                        <li><a href="#" className="hover:text-gray-500">Blog</a></li>
                        <li><a href="#" className="hover:text-gray-500">Contact</a></li>
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
