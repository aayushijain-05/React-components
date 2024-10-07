import  { useState } from 'react';

const DatePicker = () => {
  const [date, setDate] = useState('');

  return (
    <div>
    <h1 className='text-blue-400 font-semibold'>Date Picker</h1>
    <input
      type="date"
      value={date}
      onChange={(e) => setDate(e.target.value)}
      className="border rounded-md p-2"
    />
    <br></br>
    <br></br>
    </div>
  );
};

export default DatePicker;
