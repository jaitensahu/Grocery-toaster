import "./InputCard.css";
import { useState } from "react";

const InputCard = (props) => {
  // console.log(props.dataArr);
  const [grocery, setInputData] = useState("");
  const [inp, setInp] = useState("");
  function addGrocery() {
    let checcked = false;
    console.log(grocery);
    if (grocery == "") {
      props.error("Please Provide Some Data");
    } else {
      let newData = {
        grocery,
        checcked,
      };
      props.dataArr.push(newData);
      props.notify("New Grocery Added");
      props.cardArr(props.dataArr);
    }
  }
  function inputChange(e) {
    setInputData(e.target.value);
    setInp(e.target.value);
  }
  return (
    <div className="inputCard">
      <h1>Grocery Bud</h1>
      <div className="inputContainer">
        <input type="text" onChange={inputChange} placeholder="Enter Grocery name"/>
        <button class="cssbuttons-io-button" onClick={addGrocery}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path
              fill="currentColor"
              d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z"
            ></path>
          </svg>
          <span>Add</span>
        </button>
      </div>
    </div>
  );
};

export default InputCard;
