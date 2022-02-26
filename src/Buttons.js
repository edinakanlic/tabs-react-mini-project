import React from 'react';

const Buttons = ({ jobs, onClick, value }) => {
  return (
    <div className='btn-container'>
      {jobs.map((item, index) => {
        return (
          <button
            key={item.id}
            onClick={() => {
              onClick(index);
            }}
            className={`job-btn ${index === value && 'active-btn'}`}
          >
            {item.company}
          </button>
        );
      })}
    </div>
  );
};

export default Buttons;
