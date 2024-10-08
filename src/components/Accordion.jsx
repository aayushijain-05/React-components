import { useState } from 'react';

const Accordion = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-4  ">
      <h1 className='text-indigo-800 font-semibold'>Accordion</h1>
      
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left px-4 py-2 bg-gray-300 rounded-md "
      >
        {isOpen ? 'Hide' : 'Show'} Content<span>
          {
            isOpen ? <i className="fa-solid fa-chevron-up p-2"></i>:<i className="fa-solid fa-chevron-down p-2"></i>
          }
          </span>
      </button>
      {isOpen && (
        <div className="p-4 bg-gray-100">
          <p>This is the accordion content.</p>
        </div>
        
      )}
      </div>
   
  );
};

export default Accordion;
