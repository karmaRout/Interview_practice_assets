import React, { useState } from "react";
import FindAndFindIndexOf from "./FindAndFindIndexOf.jsx";

const courseOptions = [
  { title: "find()", content: "The find() method returns the first element in the array that satisfies the provided testing function." },
  { title: "findIndex()", content: "The findIndex() method returns the index of the first element that satisfies the testing function." },
  { title: "lastIndexOf()", content: "The lastIndexOf() method returns the last index at which a given element can be found." },
  { title: "push()", content: "The push() method adds one or more elements to the end of an array and returns the new length." },
  { title: "pop()", content: "The pop() method removes the last element from an array." },
  { title: "unshift()", content: "The unshift() method adds one or more elements to the beginning of an array." },
  { title: "shift()", content: "The shift() method removes the first element from an array and returns that element." },
  { title: "slice()", content: "The slice() method returns a shallow copy of a portion of an array into a new array object." },
  { title: "splice()", content: "The splice() method changes the contents of an array by removing or replacing existing elements." },
  { title: "map()", content: "The map() method creates a new array with the results of calling a function on every element." },
  { title: "filter()", content: "The filter() method creates a new array with all elements that pass the test." },
  { title: "reduce()", content: "The reduce() method applies a function against an accumulator to reduce it to a single value." },
];

const ArraysAndIterables = () => {
  const [selectedMethod, setSelectedMethod] = useState(null);

  const handleSelect = (index) => {
    setSelectedMethod(selectedMethod === index ? null : index); // toggle
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
        JavaScript Array Methods
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
        {courseOptions.map((item, index) => (
          <div
            key={index}
            onClick={() => handleSelect(index)}
            className={`bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer ${
              selectedMethod === index ? "ring-2 ring-blue-400" : ""
            }`}
          >
            <h2 className="text-xl font-semibold text-gray-700">
              {item.title}
            </h2>
            <p className="text-sm text-gray-500 mt-2">
              Click to {selectedMethod === index ? "hide" : "learn about"}{" "}
              <span className="font-mono">{item.title}</span>.
            </p>
          </div>
        ))}
      </div>

      {selectedMethod !== null && (
        <>
          {courseOptions[selectedMethod].title === "find()" && (
            <FindAndFindIndexOf />
          )}
        </>
      )}
    </div>
  );
};

export default ArraysAndIterables;
