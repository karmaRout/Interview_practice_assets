import React from "react";

const FinFoffLoop = () => {
  return (
    <div className="p-4 max-w-md mx-auto bg-white rounded-xl shadow-lg space-y-6 text-gray-800 text-sm sm:text-base">
      <h1 className="text-2xl font-bold text-blue-600">for...of vs for...in in JavaScript</h1>

      <p>
        In JavaScript, <code className="bg-gray-100 px-1 rounded">for...of</code> and{" "}
        <code className="bg-gray-100 px-1 rounded">for...in</code> are loops used to
        iterate elements, but for different data types.
      </p>

      {/* for...of Section */}
      <section>
        <h2 className="text-lg font-semibold text-green-600">🔁 for...of loop</h2>
        <p>Used for iterable objects like Arrays, Strings, Maps, Sets, etc.</p>

        <div className="bg-gray-100 p-3 rounded font-mono text-xs overflow-x-auto">
{`const arr = ['a', 'b', 'c'];

for (const value of arr) {
  console.log(value);
}`}
        </div>

        <p className="font-medium">Output:</p>
        <div className="bg-gray-100 p-3 rounded font-mono text-xs">a{'\n'}b{'\n'}c</div>

        <ul className="list-disc list-inside ml-4 space-y-1">
          <li>Use when you want values from an iterable</li>
          <li>Works with arrays, strings, maps, sets</li>
        </ul>
      </section>

      {/* for...in Section */}
      <section>
        <h2 className="text-lg font-semibold text-purple-600">🔁 for...in loop</h2>
        <p>Used to iterate over object properties (keys).</p>

        <div className="bg-gray-100 p-3 rounded font-mono text-xs overflow-x-auto">
{`const obj = { name: 'Alice', age: 30 };

for (const key in obj) {
  console.log(key, obj[key]);
}`}
        </div>

        <p className="font-medium">Output:</p>
        <div className="bg-gray-100 p-3 rounded font-mono text-xs">name Alice{'\n'}age 30</div>

        <ul className="list-disc list-inside ml-4 space-y-1">
          <li>Use when looping through object keys</li>
          <li>Ideal for plain objects</li>
        </ul>
      </section>

      {/* Key Differences Table */}
      <section>
        <h2 className="text-lg font-semibold text-red-600">⚠️ Key Differences</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left border border-gray-300 text-xs">
            <thead className="bg-gray-200">
              <tr>
                <th className="p-2 border">Feature</th>
                <th className="p-2 border">for...of</th>
                <th className="p-2 border">for...in</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2 border">Works on</td>
                <td className="p-2 border">Iterables</td>
                <td className="p-2 border">Objects</td>
              </tr>
              <tr>
                <td className="p-2 border">Iterates over</td>
                <td className="p-2 border">Values</td>
                <td className="p-2 border">Keys</td>
              </tr>
              <tr>
                <td className="p-2 border">Used with</td>
                <td className="p-2 border">Array, Set, String</td>
                <td className="p-2 border">Plain Objects</td>
              </tr>
              <tr>
                <td className="p-2 border">Best for</td>
                <td className="p-2 border">Data collection</td>
                <td className="p-2 border">Object inspection</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Example Section */}
      <section>
        <h2 className="text-lg font-semibold text-indigo-600">🔍 Array Example</h2>
        <div className="bg-gray-100 p-3 rounded font-mono text-xs overflow-x-auto">
{`const colors = ['red', 'green', 'blue'];

for (const index in colors) {
  console.log(index); // for...in: prints index
}

for (const color of colors) {
  console.log(color); // for...of: prints value
}`}
        </div>
      </section>

      <p className="text-gray-500 text-xs">
        Need examples with <code className="bg-gray-100 px-1 rounded">Map</code>,{" "}
        <code className="bg-gray-100 px-1 rounded">Set</code>, or nested loops? Just ask!
      </p>
    </div>
  );
};

export default FinFoffLoop;
