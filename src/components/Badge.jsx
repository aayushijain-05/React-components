
/* eslint-disable react/prop-types */
const Badge = ({ count, children, color }) => {
  return (
    <div>
      
    <div className="relative inline-block m-4 p-4">
      {children}
      {count > 0 && (
        <span
          className={`absolute top-0 right-0 px-2 py-1 text-xs font-bold text-white rounded-full`}
          style={{ backgroundColor: color }}
        >
          {count}
        </span>
      )}
    </div>
    </div>
  );
};

export default Badge;



