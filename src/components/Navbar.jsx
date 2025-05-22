import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className="bg-blue-600 text-white p-4">
            <div className="container mx-auto flex justify-between">
                <Link to="/" className="font-bold text-lg">Flight Finder</Link>
                <div>
                    <Link to="/login" className="ml-4">Login</Link>
                </div>
            </div>
        </nav>
    );
}