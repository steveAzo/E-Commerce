import React, { useState } from 'react';
import { RiSearchLine } from 'react-icons/ri';

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const performSearch = () => {
    alert('You searched for: ' + searchQuery);
  };

  return (
    <>
        <div className="max-w-md mt-4 relative">
            <input
                type="text"
                className="w-full p-4 pr-64 border border-gray-300 rounded-md focus:outline-none focus:border-black"
                placeholder="Search for products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{height:'70px'}}
            />
            <button
                className="absolute top-0 right-0  bg-green-500 text-white p-6 rounded-md hover:bg-gray cursor-pointer"
                onClick={performSearch}
            >
                <RiSearchLine size={20} />
            </button>
        </div>
    </>
  );
};

export default SearchBar;