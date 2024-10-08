import  { useState } from 'react';
import Badge from './components/Badge';
import Select from './components/Select';
import Tooltip from './components/Tooltip';
import ToggleSwitch from './components/ToggleSwitch';
import Textarea from './components/Textarea';
import Tabs from './components/Tabs';
import Label from './components/Label';
import Input from './components/Input';
import Popover from './components/Popover';
import Button from './components/Button';
import Card from './components/Card';
import Carousel from './components/Carousel';
import Checkbox from './components/Checkbox';
import Radio from './components/Radio';
import DatePicker from './components/DatePicker';
import Progress from './components/Progress';
import Accordion from './components/Accordion';


const App = () => {
  
  const [isToggleOn, setIsToggleOn] = useState(false);
  const [checkboxChecked, setCheckboxChecked] = useState(false);
  const [radioValue, setRadioValue] = useState('option1');

  const radioOptions = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ];
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleToggle = () => setIsToggleOn(!isToggleOn);

  return (
    <div className="p-8">
      <div className='flex flex-row shrink-0'>
      <div>
      <Badge count={5} color="blue">
        <div className='bg-blue-600 m-4 p-4 border rounded-md'>
          Notifications
        </div>
      </Badge>
    </div>
    <div>
      <Badge count={5} color="green">
        <div className='bg-green-600 m-4 p-4 border rounded-md'>
          Notifications
        </div>
      </Badge>
    </div>
    <div>
      <Badge count={5} color="yellow">
        <div className='bg-yellow-600 m-4 p-4 border rounded-md'>
          Notifications
        </div>
      </Badge>
    </div>
    </div>
      
      
      
      <Select />
 
      <Tooltip message="This is a tooltip ">Hover me!</Tooltip>
      <ToggleSwitch isOn={isToggleOn} handleToggle={handleToggle} />
      <Textarea />
       <Tabs /> 
      <Label text="Name"   />
      
     <Input
        placeholder={"Enter your name"}
        value={inputValue}
        onChange={handleInputChange} 
      />
    
      <div className="py-8">
      <Popover content="This is the popover content!">
      <h1 className='text-indigo-800 font-semibold mb-2'>Popover</h1>
        <button className="px-4 py-2 bg-blue-500 text-white rounded-md">
          Click Me
        </button>
      </Popover>
    </div>
    <div className='flex flex-row shrink-0'>
    <h1 className='text-indigo-800 font-semibold m-5'>Submit button</h1>
      <Button text="Submit" />
      <Button text="Submit" />
      </div>
      
      <div className='flex flex-row shrnik-0 '>
      <Card
            title="Card Title"
            titleColor="yellow"
            contentColor={`blue`}
            content="This is the card content."
            
          />
          <Card
            title="Card Title"
            titleColor="blue"
            content="This is the card content."
          />
          <Card
            title="Card Title"
            titleColor="red"
            content="This is the card content."
          />
          </div>
          <br></br>
      <Carousel  /> 
      <br></br>
      <Checkbox
        checked={checkboxChecked}
        onChange={() => setCheckboxChecked(!checkboxChecked)}
        label="Check this box"
      />
       <div className="py-8">
       <h1 className='text-indigo-800 font-semibold'>Radio button</h1>
      <h2 className="text-lg font-semibold mb-4">Choose an option:</h2>
      <Radio 
        value={radioValue} 
        onChange={setRadioValue} 
        options={radioOptions} 
      />
      <p className="mt-4">Selected Value: {radioValue}</p>
    </div>
      <DatePicker />
      <div className='flex flex-row  w-full max-w-max'>
      <Progress progress={50}  />
      <Accordion />
      </div>
       
    </div>
  );
};

export default App;
