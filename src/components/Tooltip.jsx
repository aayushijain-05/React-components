/* eslint-disable react/prop-types */

const Tooltip = ({ message, children }) => (
  <div>
    <h1 className='text-indigo-800 font-semibold'>Tooltip</h1>
  <div className="relative group block ">
    {children}
    <div className="absolute bottom-full left-1/2 w-full  transform -translate-x-1/2 p-2 text-sm text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
      {message}
    </div>
  </div>
  </div>
);

export default Tooltip;
