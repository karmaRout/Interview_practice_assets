import React from "react";

const DeeepShalloCopy = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto text-gray-800 space-y-8">
      <h1 className="text-3xl font-bold text-blue-600">Deep vs Shallow Copy in JavaScript</h1>

      {/* Shallow Copy */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-700">🔁 Shallow Copy</h2>
        <p>
          A shallow copy only copies the top-level properties. If a property is
          an object or array, only the reference is copied.
        </p>
        <div className="bg-gray-100 p-4 rounded-md text-sm font-mono overflow-x-auto">
          <pre>{`const original = { a: 1, b: { c: 2 } };
const copy = { ...original };

copy.b.c = 42;
console.log(original.b.c); // 42 (changed!)`}</pre>
        </div>
        <div className="bg-gray-100 p-4 rounded-md text-sm font-mono overflow-x-auto">
          <pre>{`const copy = Object.assign({}, original);`}</pre>
        </div>
      </section>

      {/* Deep Copy */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-700">🧬 Deep Copy</h2>
        <p>
          A deep copy duplicates all nested structures, ensuring changes do not affect the original.
        </p>

        <h3 className="text-xl font-medium">✅ Using structuredClone()</h3>
        <div className="bg-gray-100 p-4 rounded-md text-sm font-mono overflow-x-auto">
          <pre>{`const original = { a: 1, b: { c: 2 } };
const deepCopy = structuredClone(original);

deepCopy.b.c = 42;
console.log(original.b.c); // 2 (unchanged)`}</pre>
        </div>

        <h3 className="text-xl font-medium">✅ Using JSON (with limitations)</h3>
        <div className="bg-gray-100 p-4 rounded-md text-sm font-mono overflow-x-auto">
          <pre>{`const deepCopy = JSON.parse(JSON.stringify(original));`}</pre>
        </div>
        <ul className="list-disc list-inside text-sm text-gray-600">
          <li>Doesn’t support functions, undefined, Date, Map, Set, etc.</li>
          <li>Circular references will throw an error.</li>
        </ul>
      </section>

      {/* Custom Function */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-700">🔁 Custom Deep Copy Function</h2>
        <div className="bg-gray-100 p-4 rounded-md text-sm font-mono overflow-x-auto">
          <pre>{`function deepClone(obj) {
  if (obj === null || typeof obj !== 'object') return obj;

  if (Array.isArray(obj)) {
    return obj.map(deepClone);
  }

  const copy = {};
  for (const key in obj) {
    copy[key] = deepClone(obj[key]);
  }
  return copy;
}`}</pre>
        </div>
      </section>

      {/* Summary Table */}
      <section className="space-y-2">
        <h2 className="text-2xl font-semibold text-gray-700">📊 Summary</h2>
        <table className="w-full text-sm border border-gray-300 text-left">
          <thead className="bg-blue-100 font-semibold">
            <tr>
              <th className="p-2 border">Method</th>
              <th className="p-2 border">Type</th>
              <th className="p-2 border">Handles Nested?</th>
              <th className="p-2 border">Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2 border">Spread / Object.assign</td>
              <td className="p-2 border">Shallow</td>
              <td className="p-2 border">❌</td>
              <td className="p-2 border">Only top-level copied</td>
            </tr>
            <tr>
              <td className="p-2 border">JSON.parse/stringify</td>
              <td className="p-2 border">Deep</td>
              <td className="p-2 border">✅ (mostly)</td>
              <td className="p-2 border">Fails on special objects</td>
            </tr>
            <tr>
              <td className="p-2 border">structuredClone()</td>
              <td className="p-2 border">Deep</td>
              <td className="p-2 border">✅</td>
              <td className="p-2 border">Modern and reliable</td>
            </tr>
            <tr>
              <td className="p-2 border">Custom Function</td>
              <td className="p-2 border">Deep</td>
              <td className="p-2 border">✅</td>
              <td className="p-2 border">Manual but flexible</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default DeeepShalloCopy;
