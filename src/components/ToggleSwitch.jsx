/* eslint-disable react/prop-types */

const ToggleSwitch = ({ isOn, handleToggle }) => (
  <div className="my-6">
    <h1 className='text-blue-400 font-semibold'>Toggle switch</h1>
  <div
  
    onClick={handleToggle}
    className={`w-12 h-6 flex items-center rounded-full p-1 cursor-pointer ${
      isOn ? 'bg-green-400' : 'bg-gray-400'
    }`}
  >
    
    <div
      className={`bg-white w-5 h-5 rounded-full shadow-md transform transition-transform duration-300 ${
        isOn ? 'translate-x-6' : ''
      }`}
    />
  </div>
  </div>
);

export default ToggleSwitch;
