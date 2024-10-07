/* eslint-disable react/prop-types */


const Progress = ({ progress }) => (
  <div>
  <h1 className='text-blue-400 font-semibold'>Progress</h1>

  <div className="w-full bg-gray-200 rounded-full h-4 mb-4">
    
    <div
      className="bg-blue-500 h-4 rounded-full"
      style={{ width: `${progress}%` }}
    />
  </div>
  </div>
);


export default Progress;
