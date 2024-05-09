import React from "react";

const Rooms = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Our Rooms</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Room 1 */}
        <div className="border rounded-lg overflow-hidden shadow-md">
          <img
            src="https://example.com/room1.jpg"
            alt="Room 1"
            className="w-full h-64 object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-bold mb-2">Room 101</h2>
            <p className="text-gray-700 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
              risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing
              nec, ultricies sed, dolor.
            </p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
              Book Now
            </button>
          </div>
        </div>
        
        {/* Room 2 */}
        <div className="border rounded-lg overflow-hidden shadow-md">
          <img
            src="https://example.com/room2.jpg"
            alt="Room 2"
            className="w-full h-64 object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-bold mb-2">Room 102</h2>
            <p className="text-gray-700 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
              risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing
              nec, ultricies sed, dolor.
            </p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
              Book Now
            </button>
          </div>
        </div>
        
        {/* Room 3 */}
        <div className="border rounded-lg overflow-hidden shadow-md">
          <img
            src="https://example.com/room3.jpg"
            alt="Room 3"
            className="w-full h-64 object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-bold mb-2">Room 103</h2>
            <p className="text-gray-700 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
              risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing
              nec, ultricies sed, dolor.
            </p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
              Book Now
            </button>
          </div>
        </div>
        
        {/* Add more rooms here as needed */}
        
      </div>
    </div>
  );
};

export default Rooms;

