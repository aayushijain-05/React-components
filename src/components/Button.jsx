import { useState } from 'react';

const Button = () => {
  const [bgColor, setBgColor] = useState('bg-blue-600'); 

  const changeColor = () => {
    
    setBgColor((prevColor) => {
      if (prevColor === 'bg-blue-600') return 'bg-green-600';
      if (prevColor === 'bg-green-600') return 'bg-red-600';
      return 'bg-blue-600';
    });
    
  };

  return (
    <div>
      
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
