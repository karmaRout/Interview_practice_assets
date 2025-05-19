import { useState } from 'react';
import ListView  from './modules/javascript/listView/ListView.jsx';
import ReactModule from './modules/react/reactModule/ReactListView.jsx';  
function CourseSelector() {
  const [activeModule, setActiveModule] = useState(null);

  const openJavaScript = () => setActiveModule('javascript');
  const openReactjs = () => setActiveModule('reactjs');

  return (
    <div className="w-screen h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      {!activeModule && (
        <>
          <h1 className="text-2xl font-bold mb-8 text-gray-800">Choose a Topic</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-3xl">
            <div
              onClick={openJavaScript}
              className="cursor-pointer bg-white p-6 rounded-lg shadow hover:bg-blue-50 hover:shadow-md transition w-full"
            >
              <h2 className="text-lg font-semibold text-blue-700">JAVASCRIPT</h2>
              <p className="text-sm text-gray-600 mt-2">Click to explore JavaScript course</p>
            </div>

            <div
              onClick={openReactjs}
              className="cursor-pointer bg-white p-6 rounded-lg shadow hover:bg-blue-50 hover:shadow-md transition w-full"
            >
              <h2 className="text-lg font-semibold text-blue-700">REACT JS</h2>
              <p className="text-sm text-gray-600 mt-2">Click to explore React.js course</p>
            </div>
          </div>
        </>
      )}

      {/* Conditionally render child modules */}
      {activeModule === 'javascript' && <ListView />}
      {activeModule === 'reactjs' && <ReactModule />}
    </div>
  );
}

export default CourseSelector;
