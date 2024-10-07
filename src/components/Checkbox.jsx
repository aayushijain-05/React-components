/* eslint-disable react/prop-types */

const Checkbox = ({ checked, onChange, label }) => {
  return (
    <div>
      <h1 className='text-blue-400 font-semibold'>Checkbox</h1>
      <label className="block mb-4">
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
          className="mr-2"
        />
        {label}
      </label>
      <br></br>
    </div>
  );
};

export default Checkbox;
