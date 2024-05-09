import React from 'react';
import { Link } from 'react-router-dom';
import home from '../assets/iimages/home.jpg';
export const HotelHomePage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Navigation */}

  {/* Hero Section */}
<div className="relative h-screen">
  {/* Adjust the height of the hero section */}
  <img
    src={home}
    alt="Hotel Home"
    className="w-full h-full object-cover"
    style={{ filter: "brightness(70%)" }} // Adjust brightness for better readability of text
  />
  {/* Add a gradient overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 opacity-75" />
  {/* Center content vertically and horizontally */}
  <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
    {/* Add your hero section content here */}
    <h1 className="text-4xl font-bold mb-4">Welcome to RGS Hotel and stay</h1>
    <p className="text-lg mb-4">
      We provide the best services worldwide. Experience luxury like never before
      at our exquisite hotel. Nestled in the heart of India, our hotel offers
      unparalleled comfort, impeccable service, and breathtaking views.
    </p>
    <p className="mb-4">
      Whether you're traveling for business or leisure, we strive to make your
      stay truly memorable. Indulge in world-class amenities, savor delectable
      cuisine at our restaurants, rejuvenate your senses at our spa, or host your
      events in our elegant venues. Whatever your desires, we're here to exceed
      your expectations and create unforgettable moments.
    </p>
    {/* Additional content */}
    <div className="flex justify-center space-x-4 mb-4">
      <div className="flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-pink-500 mr-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 14l9-5-9-5-9 5 9 5z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 14l9-5-9-5-9 5 9 5z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 14l9-5-9-5-9 5 9 5z"
          />
        </svg>
        <p className="text-sm">Free Wi-Fi</p>
      </div>
      <div className="flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-pink-500 mr-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 14l9-5-9-5-9 5 9 5z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 14l9-5-9-5-9 5 9 5z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 14l9-5-9-5-9 5 9 5z"
          />
        </svg>
        <p className="text-sm">24/7 Room Service</p>
      </div>
    </div>
    <button className="px-6 py-3 bg-white text-pink-500 font-semibold rounded hover:bg-pink-200 hover:text-pink-800">Book Now</button>
  </div>
</div>

<div className="py-16 bg-white">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold mb-8">Featured Rooms</h2>
    {/* Featured Room Cards */}
    <div className="flex flex-wrap -mx-4">
      {/* General Room Card */}
      <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8">
        <div className="bg-gray-200 rounded-lg p-6 h-full flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-semibold mb-2">General Room</h3>
            <p className="mb-4">A comfortable stay with essential amenities.</p>
          </div>
          <button className="px-4 py-2 bg-pink-500 text-white rounded hover:bg-pink-600">View Details</button>
        </div>
      </div>
      {/* Standard Room Card */}
      <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8">
        <div className="bg-gray-200 rounded-lg p-6 h-full flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-semibold mb-2">Standard Room</h3>
            <p className="mb-4">Enjoy a comfortable stay with all necessary amenities.</p>
          </div>
          <button className="px-4 py-2 bg-pink-500 text-white rounded hover:bg-pink-600">View Details</button>
        </div>
      </div>
      {/* Deluxe Room Card */}
      <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8">
        <div className="bg-gray-200 rounded-lg p-6 h-full flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-semibold mb-2">Deluxe Room</h3>
            <p className="mb-4">Experience luxury with premium amenities and breathtaking views.</p>
          </div>
          <button className="px-4 py-2 bg-pink-500 text-white rounded hover:bg-pink-600">View Details</button>
        </div>
      </div>
      {/* Joint Room Card */}
      <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8">
        <div className="bg-gray-200 rounded-lg p-6 h-full flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-semibold mb-2">Joint Room</h3>
            <p className="mb-4">Perfect for families or groups, with shared amenities.</p>
          </div>
          <button className="px-4 py-2 bg-pink-500 text-white rounded hover:bg-pink-600">View Details</button>
        </div>
      </div>
      {/* King Size Room Card */}
      <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8">
        <div className="bg-gray-200 rounded-lg p-6 h-full flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-semibold mb-2">King Size Room</h3>
            <p className="mb-4">Spacious room with a king-sized bed for ultimate comfort.</p>
          </div>
          <button className="px-4 py-2 bg-pink-500 text-white rounded hover:bg-pink-600">View Details</button>
        </div>
      </div>
      {/* Queen Size Room Card */}
      <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8">
        <div className="bg-gray-200 rounded-lg p-6 h-full flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-semibold mb-2">Queen Size Room</h3>
            <p className="mb-4">Comfortable room with a queen-sized bed for a relaxing stay.</p>
          </div>
          <button className="px-4 py-2 bg-pink-500 text-white rounded hover:bg-pink-600">View Details</button>
        </div>
      </div>
      {/* Add more room cards as needed */}
    </div>
  </div>
</div>





      

      
      {/* Footer */}
      <footer className="bg-gray-800 text-white py-1">
        <div className="container mx-auto px-2">
          <p className="text-center text-sm">&copy; 2024 Hotel Name. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};


// export const About=()=>{
//     return<>
    
//     <h1>Welcome RGS hotel</h1>
    
//     </>
// }
// export const Contact=()=>{
//     return<>
//     <h1>Contact NO - 8790456312</h1>
//     </>
// }
// export const Rooms=()=>{
//     return<>
//     <h1>Welcome to the </h1>
//     </>
// }
