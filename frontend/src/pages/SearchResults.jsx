import Navbar1 from "../components/Nav1";
import React from "react";
import { useLocation } from "react-router";
import SideBar1 from "../components/SideBar";
import ProductSearched from "../components/SearchedProducts";



export default function SearchResults() {
    const { search } = useLocation()
    const searchParams = new URLSearchParams(search)
    const query = searchParams.get('query')
    return(
        <>
        <div>
            <Navbar1 />
        </div>
        <div className="flex">
            <div className="w-1/3 mt-8">
                <SideBar1 />
            </div>
            <div className="w-2/3">
                <h1>Search Result for: {query}</h1>
                <ProductSearched />
            </div>

        </div>
        
        
            
        </>
    )
}