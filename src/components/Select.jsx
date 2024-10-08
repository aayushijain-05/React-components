import { useState } from 'react';

const Select = () => {
  const [value, setValue] = useState('');

  
  const getSelectClass = () => {
    switch (value) {
      case 'option1':
        return 'bg-rose-400';
      case 'option2':
        return 'bg-green-400';
      default:
        return 'bg-white'; 
    }
  };

  return (
    <div className="mb-4 p-4">
      <h1 className='text-indigo-800 font-semibold my-3'>Select options</h1>
      <select
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className={`border rounded-md p-2 ${getSelectClass()}`} 
      >
        <option value="">Select an option</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
      </select>
    </div>
  );
};

export default Select;

