import Navbar1 from "../components/Nav1";
import React from "react";
import { useLocation } from "react-router";
import SideBar1 from "../components/SideBar";

export default function SearchResults() {
    const { search } = useLocation()
    const searchParams = new URLSearchParams(search)
    const query = searchParams.get('query')
    return(
        <>
        <div>
            <Navbar1 />
        </div>
        <div>
            <h1>Search Result Page</h1>
            <p>Displaying results for: {query}</p>
        </div>
        <div>
            <SideBar1 />
        </div>
            
        </>
    )
}