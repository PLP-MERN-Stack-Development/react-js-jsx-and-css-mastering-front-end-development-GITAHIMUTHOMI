import React from "react";

const CardsContainer = () => {
  return (
    <div className="flex gap-4 my-6">
      <div className="bg-white dark:bg-gray-800 p-4 rounded shadow w-1/2">
        <h3 className="font-bold mb-2">Card 1</h3>
        <p>This is the first card.</p>
      </div>
      <div className="bg-white dark:bg-gray-800 p-4 rounded shadow w-1/2">
        <h3 className="font-bold mb-2">Card 2</h3>
        <p>This is the second card.</p>
      </div>
    </div>
  );
};

export default CardsContainer;