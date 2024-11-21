import { Link } from "react-router-dom";


export default function Navbar() {
    return(
        <nav className="bg-white shadow-lg">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between">
                    <div className="flex space-x-7">
                        <div>
                            <Link to="/" className="flex items-center py-4 px-2">
                            <span className="font-semibold text-gray-500 text-lg">Profession Park Ticket Management</span>
                            </Link>
                        </div>
                    </div>
                    <div className="hidden md:flex items-center space-x-3">
                        <Link to="/login" className="py-2 px-2 font-medium text-gray-500 rounded hover:bg-gray-400 hover:text-white transition duration-300">Login </Link>
                        <Link to="/register" className="py-2 px-2 font-medium text-gray-500 rounded hover:bg-gray-400 hover:text-white transition duration-300">Register</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}