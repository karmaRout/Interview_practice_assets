import { useState } from 'react';

function HigherOrderInfo() {
  const [result, setResult] = useState(null);

  const handleClick = () => {
    func1(10, 20, (res) => {
      console.log("Callback called");
      setResult(res);
    });
  };

  const func1 = (num1, num2, cb) => {
    cb(num1 + num2);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6 space-y-6">
      <div className="max-w-xl w-full bg-white p-6 rounded-lg shadow-lg">
        <p className="text-lg font-semibold mb-3">
          A Higher Order Function (HOF) in JavaScript is a function that does at least one of the following:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
          <li>Takes another function as an argument</li>
          <li>Returns another function</li>
        </ul>
        <p className="italic text-gray-600">
          These are used heavily in React and functional programming.
        </p>
      </div>

      <button
        onClick={handleClick}
        className="bg-purple-600 text-gray px-5 py-2 rounded-lg shadow hover:bg-purple-700 transition"
        >
        Click me
      </button>


      <span className="text-xl text-green-700 font-medium">
        {result !== null && `Result: ${result}`}
      </span>
    </div>
  );
}

export default HigherOrderInfo;
