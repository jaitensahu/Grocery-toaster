import './App.css';
import InputCard from './Component/InputCard';
import {useState} from 'react'
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
let i=0;
function App() {
  const notify = (str) => {
    // toast("Deleted!!!");
    toast.success(str, {
      position: toast.POSITION.TOP_CENTER
    });
  }
  const error=(str)=>{
    toast.error(str, {
      position: toast.POSITION.TOP_CENTER
    });
  }
let [dataArr, setDataArr]=useState([]);
function updateArrFn(updatedArr){
  console.log(updatedArr);
  setDataArr([...updatedArr])
}
function deleteData(selectedIdx){
  let filteredArr=dataArr.filter((ele,idx)=>{
    return selectedIdx != idx;
  })
  setDataArr([...filteredArr])
}
  return (
    <div className="App">
      <ToastContainer />
      <InputCard cardArr={updateArrFn} dataArr={dataArr} notify={notify} error={error}/>
      {dataArr.map((data,idx)=>{
          return <div key={i++} className="item">
            <div className="input">
            <input type="checkbox" />
            <label htmlFor="">{data.grocery}</label>
            </div>
            <button onClick={()=>{
                                  deleteData(idx)
                                  notify("Grocery Deleted"); 
              }}>Delete</button>
          </div>
      })
      }
    </div>
  );
}

export default App;
