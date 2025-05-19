import React from "react";
 const AsyncAwait = () => {
    ////WITHOUT ASYNC AWAIT PROMISE CODE START/////
    // const data = [
    //     {name:'Karma',profession:'developer'},
    //     {name:'Arjun',profession:'developer'}
    // ];
    // function fetchData() {
    //     let output = '';
    //     setTimeout(()=>{
    //         data.forEach((val)=>{
    //             output+= `<li>${val.name}</li>`;
    //         })
    //         document.body.innerHTML = output;
    //     },1000)
    // }
    // function createData(newData) {
    //     setTimeout(()=>{
    //         data.push(newData);
    //     },2000)
        
    // }
    // createData({name:'Bhabani',profession:'developer'});
    // fetchData();
    ////WITHOUT ASYNC AWAIT PROMISE CODE END/////
    ////CALLBACK CODE START/////
    // const data1 = [
    //     {name:'Karma',profession:'developer'},
    //     {name:'Arjun',profession:'developer'}
    // ];
    // function fetchData1() {
    //     let output = '';
    //     setTimeout(()=>{
    //         data1.forEach((val)=>{
    //             output+= `<li>${val.name}</li>`;
    //         })
    //         document.body.innerHTML = output;
    //     },1000)
    // }
    // function createData1(newData,cb) {
    //     setTimeout(()=>{
    //         data1.push(newData);
    //         cb();
    //     },2000)
        
    // }
    // createData1({name:'Bhabani',profession:'developer'}, fetchData1);
    ////CALLBACK CODE END/////
    ///PROMISE CODE START///
    // const data1 = [
    //     {name:'Karma',profession:'developer'},
    //     {name:'Arjun',profession:'developer'}
    // ];
    // function fetchData1() {
    //     let output = '';
    //     setTimeout(()=>{
    //         data1.forEach((val)=>{
    //             output+= `<li>${val.name}</li>`;
    //         })
    //         document.body.innerHTML = output;
    //     },1000)
    // }
    // function createData1(newData) {
    //     return new Promise((resolve, reject)=>{
    //         data1.push(newData);
    //         let err = false
    //         if(!err){
    //             resolve();
    //         }
    //         else{
    //             reject("Not working");
    //         }
    //     })
        
    // }
    // createData1({name:'Bhabani',profession:'developer'},createData1).then(fetchData1);
    ///PROMISE CODE END///

    ////Async await code starts///
    // const data = [
    //     {name:'Karma',profession:'developer'},
    //     {name:'Arjun',profession:'developer'}
    // ];
    // function fetchData() {
    //     let output = '';
    //     setTimeout(()=>{
    //         data.forEach((val)=>{
    //             output+= `<li>${val.name}</li>`;
    //         })
    //         document.body.innerHTML = output;
    //     },1000)
    // }
    // function createData(newData) {
    //     return new Promise((resolve, reject)=>{
    //           data.push(newData);
    //           let err = false
    //           if(!err){
    //               resolve();
    //           }
    //           else{
    //               reject("Not working");
    //           }
    //     })
        
    // }
    // async function start(){
    //     await createData({name:'Bhabani',profession:'developer'});
    //     fetchData();
    // }
    // start();
    ////Async await code ends////

    return (
    <div className="p-6 bg-gray-100 min-h-screen space-y-8">
      <h1 className="text-2xl font-bold text-gray-800">Async/Await vs Callback vs Promise Examples</h1>

      {/* Without Async/Await */}
      <section>
        <h2 className="text-xl font-semibold text-blue-700 mb-2">// WITHOUT ASYNC AWAIT //</h2>
        <pre className="bg-white p-4 rounded-md shadow overflow-x-auto text-sm text-gray-800">
{`const data = [
  { name: 'Karma', profession: 'developer' },
  { name: 'Arjun', profession: 'developer' }
];

function fetchData() {
  let output = '';
  setTimeout(() => {
    data.forEach((val) => {
      output += \`<li>\${val.name}</li>\`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

function createData(newData) {
  setTimeout(() => {
    data.push(newData);
  }, 2000);
}

createData({ name: 'Bhabani', profession: 'developer' });
fetchData();`}
        </pre>
      </section>

      {/* Callback Version */}
      <section>
        <h2 className="text-xl font-semibold text-green-700 mb-2">// CALLBACK VERSION //</h2>
        <pre className="bg-white p-4 rounded-md shadow overflow-x-auto text-sm text-gray-800">
{`const data1 = [
  { name: 'Karma', profession: 'developer' },
  { name: 'Arjun', profession: 'developer' }
];

function fetchData1() {
  let output = '';
  setTimeout(() => {
    data1.forEach((val) => {
      output += \`<li>\${val.name}</li>\`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

function createData1(newData, cb) {
  setTimeout(() => {
    data1.push(newData);
    cb();
  }, 2000);
}

createData1({ name: 'Bhabani', profession: 'developer' }, fetchData1);`}
        </pre>
      </section>

      {/* Promise Version */}
      <section>
        <h2 className="text-xl font-semibold text-purple-700 mb-2">// PROMISE VERSION //</h2>
        <pre className="bg-white p-4 rounded-md shadow overflow-x-auto text-sm text-gray-800">
{`const data1 = [
  { name: 'Karma', profession: 'developer' },
  { name: 'Arjun', profession: 'developer' }
];

function fetchData1() {
  let output = '';
  setTimeout(() => {
    data1.forEach((val) => {
      output += \`<li>\${val.name}</li>\`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

function createData1(newData) {
  return new Promise((resolve, reject) => {
    data1.push(newData);
    let err = false;
    if (!err) {
      resolve();
    } else {
      reject("Not working");
    }
  });
}

createData1({ name: 'Bhabani', profession: 'developer' }).then(fetchData1);`}
        </pre>
      </section>

      {/* Async/Await Version */}
      <section>
        <h2 className="text-xl font-semibold text-red-700 mb-2">// ASYNC AWAIT VERSION //</h2>
        <pre className="bg-white p-4 rounded-md shadow overflow-x-auto text-sm text-gray-800">
{`const data = [
  { name: 'Karma', profession: 'developer' },
  { name: 'Arjun', profession: 'developer' }
];

function fetchData() {
  let output = '';
  setTimeout(() => {
    data.forEach((val) => {
      output += \`<li>\${val.name}</li>\`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

function createData(newData) {
  return new Promise((resolve, reject) => {
    data.push(newData);
    let err = false;
    if (!err) {
      resolve();
    } else {
      reject("Not working");
    }
  });
}

async function start() {
  await createData({ name: 'Bhabani', profession: 'developer' });
  fetchData();
}

start();`}
        </pre>
      </section>
    </div>
  );
 }
 export default AsyncAwait;