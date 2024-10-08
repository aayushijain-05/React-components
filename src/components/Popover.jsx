
/* eslint-disable react/prop-types */

import { useState } from 'react';

const Popover = ({ content, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopover = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="relative block">
      <div onClick={togglePopover} className="cursor-pointer">
        {children}
      </div>
      {isOpen && (
        <div className="absolute left-10 ml-20 max-w-max mt-1  w-transform -translate-x-1/2 p-2 text-sm text-white bg-black rounded">
          {content}
        </div>
      )}
    </div>
  );
};

export default Popover;
