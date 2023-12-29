import './App.css';
import InputCard from './Component/InputCard';
import {useState} from 'react'
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useEffect } from 'react';

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

useEffect(()=>{
  if(localStorage.getItem("data")!=null){
    setDataArr([...JSON.parse(localStorage.getItem("data"))]);
  }
}, [])
  
let [dataArr, setDataArr]=useState([]);
function updateArrFn(updatedArr){
  setDataArr([...updatedArr]);
  console.log(updatedArr);
  localStorage.setItem("data", JSON.stringify(updatedArr));
}

function deleteData(selectedIdx){
  let filteredArr=dataArr.filter((ele,idx)=>{
    return selectedIdx != idx;
  })
  setDataArr([...filteredArr])
  localStorage.setItem("data", JSON.stringify(filteredArr));
}

function checkboxFn(id){
  console.log(id);
 let newArrayOncheck= dataArr.map((ele,idx)=>{
    if(idx==id){
      ele.checcked? ele.checcked=false: ele.checcked=true;
    }
    return ele;
  })
  setDataArr(newArrayOncheck)
  localStorage.setItem("data", JSON.stringify(newArrayOncheck));
  // console.log(newArrayOncheck);

  
}

let [groceryName, setGroceryName]=useState();
let [checked, setChekbox]=useState(true);
  return (
    <div className="App">
      <ToastContainer />
      <InputCard cardArr={updateArrFn} dataArr={dataArr} notify={notify} error={error}/>
      {dataArr.map((data,idx)=>{
          return <div key={i++} className="item">
            <div className="input">
            <input type="checkbox" onChange={()=> checkboxFn(idx)} checked={data.checcked}/>
            <label htmlFor="" style={{textDecoration:(data.checcked)? "line-through":"none"}}>{data.grocery}</label>
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
