import { useState } from 'react';
import Increment from "./modules/increment/Increment.jsx";
import Hoc from "./modules/HigherOrderFunction.jsx";

function App() {
  const [activeComponent, setActiveComponent] = useState(null);

  return (
    <div className="flex h-screen w-screen m-0 p-0 overflow-hidden">
      {/* Left Sidebar */}
      <aside className="w-64 bg-gray-900 text-gray p-4 flex flex-col space-y-4">
        <h2 className="text-xl font-bold mb-4">Modules</h2>
        <button
          onClick={() => setActiveComponent('hoc')}
          className="text-left hover:bg-gray-800 p-2 rounded"
        >
          Higher Order Function
        </button>
        <button
          onClick={() => setActiveComponent('increment')}
          className="text-left hover:bg-gray-800 p-2 rounded"
        >
          Stop watch
        </button>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-6 bg-gray-100 overflow-y-auto">
        {activeComponent === 'hoc' && <Hoc />}
        {activeComponent === 'increment' && <Increment />}
        {!activeComponent && (
          <div className="text-gray-600 text-xl">
            Select a module from the left panel
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
