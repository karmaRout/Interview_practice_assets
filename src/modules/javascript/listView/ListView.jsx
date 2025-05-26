import React, { useState } from "react";
import Increment from "../increment/Increment.jsx";
import Hoc from "./HigherOrderFunction.jsx";
import EventLoop from "./EventLoop.jsx";
import AsyncAwait from "./AsyncAwait.jsx";
import DeepShallowCopy from "./DeepShallowCopy.jsx";
import FinFoffLoop from "./FinFoffLoop.jsx";
import ArraysAndIterables from "./arraysAndIterables/index";

const ListView = () => {
  const [activeComponent, setActiveComponent] = useState('');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex flex-col md:flex-row h-screen w-screen overflow-hidden">

      {/* Mobile Sidebar Toggle */}
      <div className="md:hidden bg-gray-900 text-white flex justify-between items-center px-4 py-2">
        <h2 className="text-lg font-semibold">Modules</h2>
        <button
          className="text-sm text-blue-300 underline"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          {sidebarOpen ? "Close" : "Open"} Menu
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`bg-gray-900 text-white p-4 space-y-3 md:space-y-4 w-full md:w-64 flex-shrink-0 transition-all duration-300 
        ${sidebarOpen ? "block" : "hidden"} md:block`}
      >
        <h2 className="text-xl font-bold mb-2 hidden md:block">Modules</h2>
        <button onClick={() => setActiveComponent('hoc')} className="block text-left text-blue-400 hover:underline text-sm">
          Higher Order Function
        </button>
        <button onClick={() => setActiveComponent('increment')} className="block text-left text-blue-400 hover:underline text-sm">
          Stop Watch
        </button>
        <button onClick={() => setActiveComponent('eventLoop')} className="block text-left text-blue-400 hover:underline text-sm">
          Event Loop
        </button>
        <button onClick={() => setActiveComponent('asyncAwait')} className="block text-left text-blue-400 hover:underline text-sm">
          Async Await Promises
        </button>
        <button onClick={() => setActiveComponent('deepShallowCopy')} className="block text-left text-blue-400 hover:underline text-sm">
          Deep Copy and Shallow Copy
        </button>
        <button onClick={() => setActiveComponent('forInForOffLoop')} className="block text-left text-blue-400 hover:underline text-sm">
          For in and for of loop
        </button>
        <button onClick={() => setActiveComponent('arraysAndIterables')} className="block text-left text-blue-400 hover:underline text-sm">
          Arrays and iterables
        </button>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto bg-gray-100 p-4 md:p-6 text-gray-800 text-sm sm:text-base">
        {activeComponent === 'hoc' && <Hoc />}
        {activeComponent === 'increment' && <Increment />}
        {activeComponent === 'eventLoop' && <EventLoop />}
        {activeComponent === 'asyncAwait' && <AsyncAwait />}
        {activeComponent === 'deepShallowCopy' && <DeepShallowCopy />}
        {activeComponent === 'forInForOffLoop' && <FinFoffLoop />}
        {activeComponent === 'arraysAndIterables' && <ArraysAndIterables />}
        {!activeComponent && (
          <div className="text-gray-600 text-lg">Select a module from the menu</div>
        )}
      </main>
    </div>
  );
};

export default ListView;
