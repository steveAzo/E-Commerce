export default function Navbar1() {
    return (
        <>
            <nav className="bg-gray-50 p-4 border-b border-gray-500">
                <div className="flex justify-between items-center">
                    <ul className="flex space-x-4 text-black">
                        <li><a href='#' className="hover:text-gray-300">Home</a></li>
                        <li><a href='#' className="hover:text-gray-300">Categories</a></li>
                        <li><a href='#' className="hover:text-gray-300">Blog</a></li>
                        <li><a href='#' className="hover:text-gray-300">Contact</a></li>
                    </ul>
                </div>
                
            </nav>
        </>
    )
}