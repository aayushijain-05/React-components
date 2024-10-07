import { useState } from 'react';

const Accordion = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-4">
      <h1 className='text-blue-400 font-semibold'>Accordion</h1>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left px-4 py-2 bg-gray-300 rounded-md"
      >
        {isOpen ? 'Hide' : 'Show'} Content
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
