import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-2"> {/* Reduced padding top and bottom */}
          <div className="flex items-center">
            {/* Logo with Alt Text */}
            <div className="font-bold text-xl flex items-center">
              RGS Hotels 
              <img
                src="https://media.licdn.com/dms/image/D4D03AQHPuvMNaAv4kw/profile-displayphoto-shrink_200_200/0/1711101988869?e=2147483647&v=beta&t=ZtJXzaNIUq6HfaU9F46ne93q5EFk4qcNxGY61HKmcBQ"
                width="40px"  // Reduced logo size
                alt="RGS Hotels Logo"
                className="ml-2"
              />
            </div>
            {/* Navigation Links */}
            <ul className="flex space-x-4 ml-4"> {/* Reduced space between links */}
              <li><Link to="/" className="text-gray-700 hover:text-gray-900">Home</Link></li>
              <li><Link to="/rooms" className="text-gray-700 hover:text-gray-900">Rooms</Link></li>
              <li><Link to="/about" className="text-gray-700 hover:text-gray-900">About</Link></li>
              <li><Link to="/contact" className="text-gray-700 hover:text-gray-900">Contact</Link></li>
              <li><Link to="/login" className="text-gray-700 hover:text-gray-900">Login</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;

