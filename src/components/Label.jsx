/* eslint-disable react/prop-types */
const Label = ({ text }) => {
  return (
    <div>
      <h1 className='text-blue-400 font-semibold'>Label</h1>
      <label className="block text-gray-700 mb-2">{text}</label>
    </div>
  );
};

export default Label;


