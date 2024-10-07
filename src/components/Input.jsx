/* eslint-disable react/prop-types */


const Input = ({ placeholder, type = "text", value, onChange }) => {
  return (
    <div>
      <h1 className='text-indigo-800 font-semibold mb-2'>Input</h1>
    <input
      type={type}
      className="border p-2 w-full rounded-md hover:border-indigo-500 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 outline-none"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
    </div>
  );
};

export default Input;

