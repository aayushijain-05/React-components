import { useState } from 'react';

const Button = () => {
  const [bgColor, setBgColor] = useState('bg-blue-600'); 

  const changeColor = () => {
    
    setBgColor((prevColor) =>
      prevColor === 'bg-blue-600' ? 'bg-green-600' : 'bg-blue-600'
    );
  };

  return (
    <div>
      <h1 className='text-blue-400 font-semibold'>Submit button</h1>
      <button
        className={`${bgColor} rounded-xl p-3 m-4 text-white`}
        onClick={changeColor}
      >
        Submit
      </button>
      <br></br>
      <br></br>
    </div>
  );
};

export default Button;
