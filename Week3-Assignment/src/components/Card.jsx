import React from "react";

const Card = ({ title, content }) => {
  return (
    <div className="border rounded shadow p-4 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 transition-colors">
      <h2 className="text-lg font-bold mb-2">{title}</h2>
      <p>{content}</p>
    </div>
  );
};

export default Card;
