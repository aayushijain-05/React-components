/* eslint-disable react/prop-types */


import { useState } from 'react';

const Progress = () => {
  const [progress, setProgress] = useState(0);

  const handleChange = (e) => {
    
    const value = Math.max(0, Math.min(100, Number(e.target.value)));
    setProgress(value);
  };

  return (
    <div className="mr-40">
      <h1 className="w-40 text-indigo-800 font-semibold">Progress</h1>
      <input
        type="number"
        value={progress}
        onChange={handleChange}
        className="border rounded p-2 mb-4 w-20"
        placeholder="Enter progress"
      />
      <div className="min-w-min bg-gray-200 rounded-full h-4 mb-4">
        <div
          className="bg-green-500 h-4 rounded-full"
          style={{ width: `${progress}%` }}
        />
      </div>
      <p>{progress}%</p>
    </div>
  );
};

export default Progress;
