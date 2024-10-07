import { useState } from 'react';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = ['Tab 1', 'Tab 2', 'Tab 3'];

  
  const tabColors = [
    'bg-blue-500',  
    'bg-green-500',
    'bg-red-500',  
  ];

  return (
    <div className="mb-4">
      <h1 className='text-blue-400 font-semibold'>Tabs</h1>
      <div className="flex space-x-4">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`px-4 py-2 rounded-md ${activeTab === index ? tabColors[index] : 'bg-gray-200'} text-white`}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="p-4 mt-2 bg-gray-100 rounded-md">
        {`Content for ${tabs[activeTab]}`}
      </div>
      <br></br>
    </div>
  );
};

export default Tabs;
