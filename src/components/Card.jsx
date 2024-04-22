import React from 'react';

function Card({ imageUrl, title, description }) {
  return (
    <div className="relative max-w-xs mx-auto mb-4">
  <div className="h-32 rounded-md overflow-hidden border border-gray-300"> {/* Added border class for visualization */}
    <img
      src={imageUrl}
      alt={title}
      className="w-full h-full object-cover"
      style={{ margin: '20px' }} // Added inline style for margin
    />
  </div>
  <div className="bg-white shadow-md rounded-md p-4 -mt-12">
    <h1 className=" ">{title}</h1>
    <p className="mt-2 text-sm text-gray-600">{description}</p>
    <button className="mt-2 inline-flex items-center text-sm font-semibold text-gray-800">
      View Profile →
    </button>
  </div>
</div>


  );
}

export default Card;
