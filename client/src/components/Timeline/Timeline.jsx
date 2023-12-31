import React from 'react';

const Timeline = ({ data }) => {
  return (
    // <div className="mx-auto max-w-2xl">
    <div>
      {data.map((item, index) => (
        <div
          key={index}
          className={`flex mb-8 ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}
        >
          {/* <div className="mr-4"> */}
          <div>
            <img
              src={item.image}
              alt={item.alt}
              className="w-45 h-45 border rounded-lg"
            />
          </div>
          {/* <div className={`text-white ${index % 2 === 0 ? 'bg-gray-800' : 'bg-gray-800'} p-4 rounded-lg`}> */}
            {/* <h3 className="mb-2 font-bold">{item.title}</h3> */}
            {/* <p>{item.description}</p> */}
          {/* </div> */}
        </div>
      ))}
    </div>
  );
};

export default Timeline;

