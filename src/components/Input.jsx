/* eslint-disable react/prop-types */


const Input = ({ placeholder, type = "text", value, onChange }) => {
  return (
    <div>
      <h1 className='text-blue-400 font-semibold'>Input</h1>
    <input
      type={type}
      className="border rounded-md p-2 w-full"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
    </div>
  );
};

export default Input;

