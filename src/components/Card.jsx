import React from 'react';

function Card({ imageUrl, title, description, btnProfile }) {
  return (
    <div className="relative max-w-xs mx-auto mb-4 border border-blue-500 rounded-lg overflow-hidden shadow-xl"> {/* Added border and shadow classes */}
    <div className="h-32 rounded-t-lg overflow-hidden">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-full object-cover"
        style={{ margin: '20px' }} // Added inline style for margin
      />
    </div>
    <div className="bg-white rounded-b-lg p-4">
      <h3 className=" m-10">{title}</h3>
      <p className="mt-2 text-sm text-gray-600">{description}</p>
      <button className="mt-2 inline-flex items-center text-sm font-semibold text-gray-800">
        {btnProfile} →
      </button>
    </div>
  </div>
  
  


  );
}

export default Card;
