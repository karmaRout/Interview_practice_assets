import React,{useState} from "react";
import Increment from "../increment/Increment.jsx";
import Hoc from "./HigherOrderFunction.jsx";
import EventLoop from "./EventLoop.jsx";
import AsyncAwait from "./AsyncAwait.jsx";
import DeepShallowCopy from "./DeepShallowCopy.jsx";
const ListView = () => {
    const [activeComponent,setActiveComponent] = useState('');
    return(
         <div className="flex h-screen w-screen m-0 p-0 overflow-hidden">
        {/* Left Sidebar */}
        <aside className="w-64 bg-gray-900 text-gray p-4 flex flex-col space-y-4">
            <h2 className="text-xl font-bold mb-4">Modules</h2>
            <button
            onClick={() => setActiveComponent('hoc')}
            className="text-left text-blue-400 hover:underline text-xs px-1 py-0.5"
        >
            Higher Order Function
        </button>
        <button
            onClick={() => setActiveComponent('increment')}
            className="text-left text-blue-400 hover:underline text-xs px-1 py-0.5"
        >
            Stop watch
        </button>
         <button
            onClick={() => setActiveComponent('eventLoop')}
            className="text-left text-blue-400 hover:underline text-xs px-1 py-0.5"
        >
            Event loop
        </button>
        <button
            onClick={() => setActiveComponent('asyncAwait')}
            className="text-left text-blue-400 hover:underline text-xs px-1 py-0.5"
        >
            Async Await Promises
        </button>
        <button
            onClick={() => setActiveComponent('deepShallowCopy')}
            className="text-left text-blue-400 hover:underline text-xs px-1 py-0.5"
        >
           Deep copy and Shallow Copy
        </button>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 p-6 bg-gray-100 overflow-y-auto">
            {activeComponent === 'hoc' && <Hoc />}
            {activeComponent === 'increment' && <Increment />}
            {activeComponent === 'eventLoop' && <EventLoop />}
            {activeComponent === 'asyncAwait' && <AsyncAwait />}
            {activeComponent === 'deepShallowCopy' && <DeepShallowCopy />}
            {!activeComponent && (
            <div className="text-gray-600 text-xl">
                Select a module from the left panel
            </div>
            )}
        </main>
    </div>
    )
}
export default ListView;