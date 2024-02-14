import Navbar1 from "../components/Nav1"
import SearchBar from "../components/searchBox"
import "../styles/home.css"
import { Link } from "react-router-dom"


export default function HomePage() {
    return(
        <>
            <Navbar1 />
            <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between mt-8 mb-32 sm:mt-32 ml-8">
                <div className="flex flex-col text-center sm:text-left sm:w-2/3 sm:mr-8">
                    <h1 className="text-2xl font-bold mb-2">Discover the finest shop products at AZshoP</h1>
                    <p>Find the perfect supplies for your furry friends</p>
                    <div className="flex items-center mt-2">
                        <SearchBar/>
                    </div>
                </div>
                <div className="ml-auto">
                    <img src={require('../pictures/e-shop.jpg')} 
                    alt="a picture of an e-commerce stance" 
                    className="h-48 w-96 mr-20 rounded-md"
                    />
                    
                </div>
                
            </div>
            <div className="mt-8">
                <h2 className="text-center mt-10 mb-10 text-2xl font-bold">Categories</h2>
            </div>
            <div className="flex flex-wrap justify-around mb-10">
                <div className="category-box sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4"><Link to="/groceries">Groceries</Link></div>
                <div className="category-box sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4"><Link to="/utensils">Utensils</Link></div>
                <div className="category-box sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4"><Link to="/electronics">Electronics</Link></div>
                <div className="category-box sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4"><Link to="/food">Food</Link></div>
                <div className="category-box sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4"><Link to="/clothes">Clothes</Link></div>
                <div className="category-box sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4"><Link to="/animals">Animals</Link></div>
            </div>
            <div className="flex flex-col sm:flex-row justify-between mt-8 ml-10">
                <div className="w-full sm:w-1/3 mb-4 sm:mb-0 sm:mr-4">
                    <h1>Hellow World</h1>
                    <div className="bg-gray-400 rounded-md">Special offers</div>
                    <div className="bg-gray-300 mt-4 rounded-md">
                        <div className="text-center mb-4">
                            <div className="bg-yellow-400 w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold ml-28 mt-8 ">
                            50% Off
                            </div>
                        </div>
                        <p>Exclusive deals with a 50% discount!</p>
                        <button className="bg-blue-500 text-white py-2 px-4 mt-4 rounded-md ml-8">
                            Shop Now
                        </button>
                    </div>
                </div>
                <div className="w-full sm:w-2/3">
                    <h1>Hello World</h1>
                    <div className="bg-gray-400 rounded-md">Trending Products</div>
                </div>
            </div>
        </>
    )
}