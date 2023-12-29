import "./App.css";
import InputCard from "./Component/InputCard";
import { useState } from "react";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import { useEffect } from "react";

import "react-toastify/dist/ReactToastify.css";
let i = 0;
function App() {
  const notify = (str) => {
    // toast("Deleted!!!");
    toast.success(str, {
      position: toast.POSITION.TOP_CENTER,
    });
  };
  const error = (str) => {
    toast.error(str, {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  useEffect(() => {
    if (localStorage.getItem("data") != null) {
      setDataArr([...JSON.parse(localStorage.getItem("data"))]);
    }
  }, []);

  let [dataArr, setDataArr] = useState([]);
  function updateArrFn(updatedArr) {
    setDataArr([...updatedArr]);
    console.log(updatedArr);
    localStorage.setItem("data", JSON.stringify(updatedArr));
  }

  function deleteData(selectedIdx) {
    let filteredArr = dataArr.filter((ele, idx) => {
      return selectedIdx != idx;
    });
    setDataArr([...filteredArr]);
    localStorage.setItem("data", JSON.stringify(filteredArr));
  }

  function checkboxFn(id) {
    console.log(id);
    let newArrayOncheck = dataArr.map((ele, idx) => {
      if (idx == id) {
        ele.checcked ? (ele.checcked = false) : (ele.checcked = true);
      }
      return ele;
    });
    setDataArr(newArrayOncheck);
    localStorage.setItem("data", JSON.stringify(newArrayOncheck));
    // console.log(newArrayOncheck);
  }

  let [groceryName, setGroceryName] = useState();
  let [checked, setChekbox] = useState(true);
  return (
    <div className="App">
      <ToastContainer />
      <InputCard
        cardArr={updateArrFn}
        dataArr={dataArr}
        notify={notify}
        error={error}
      />
      {dataArr.map((data, idx) => {
        return (
          <div key={i++} className="item">
            <div className="input">
              <input
                type="checkbox"
                onChange={() => checkboxFn(idx)}
                checked={data.checcked}
              />
              <label
                htmlFor=""
                style={{
                  textDecoration: data.checcked ? "line-through" : "none",
                }}
              >
                {data.grocery}
              </label>
            </div>
            <button class="button" onClick={() => {
                deleteData(idx);
                notify("Grocery Deleted");
              }}>
              <svg viewBox="0 0 448 512" class="svgIcon">
                <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"></path>
              </svg>
            </button>
            
          </div>
        );
      })}
    </div>
  );
}

export default App;
