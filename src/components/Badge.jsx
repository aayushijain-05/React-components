/* eslint-disable react/prop-types */


const Badge = ({ count, children, color }) => {
  const badgeColor = {
    blue: 'bg-blue-500',
    red: 'bg-red-500',
    green: 'bg-green-500',
    yellow: 'bg-yellow-500',
   
  };

  return (
    <div className="relative inline-block m-4">
      {children}
      {count > 0 && (
        <span className={`absolute top-0 right-0 px-2 py-1 text-xs font-bold text-white rounded-full ${badgeColor[color]}`}>
          {count}
        </span>
      )}
    </div>
  );
};

export default Badge;
