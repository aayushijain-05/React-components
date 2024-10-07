/* eslint-disable react/prop-types */

function Card({ title, content, titleColor, contentColor }) {
  const cardColor = {
    red: "text-red-600",
    green: "text-green-600",
    blue: "text-blue-600",
    yellow: "text-yellow-600",
  };

  return (
    <div className=" bg-slate-200 border border-gray-300 rounded-md p-4 m-4 shadow-md">
      <h3 className={`font-bold text-lg ${cardColor[titleColor]}`}>{title}</h3>
      <p className={cardColor[contentColor]}>{content}</p>
    </div>
  );
}

export default Card;
