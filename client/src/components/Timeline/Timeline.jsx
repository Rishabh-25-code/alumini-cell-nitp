import React from 'react';

const Timeline = ({ data }) => {
  return (
    <div className='px-5'>
      {data.map((item, index) => (
        <div
          key={index}
          data-aos="fade-up"
          className={`flex mb-8 ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}
        >
          <div>
            <img
              src={item.image}
              alt={item.alt}
              loading='lazy'
              className="w-45 h-45 border rounded-xl"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;

