/* eslint-disable react/prop-types */

const Radio = ({ value, onChange, options }) => (
  <div className="mb-4">
    {options.map(option => (
      <label className="block mb-2" key={option.value}>
        <input
          type="radio"
          name="radio"
          value={option.value}
          checked={value === option.value}
          onChange={() => onChange(option.value)}
          className="mr-2"
        />
        {option.label}
      </label>
    ))}
  </div>
);

export default Radio;
