import './InputCard.css'
import {useState} from 'react'
const InputCard=(props)=>{
    // console.log(props.dataArr);
    const [grocery, setInputData]=useState("");
    const [inp, setInp]=useState("")
    function addGrocery(){
        console.log(grocery);
        if(grocery==""){
            props.error("Please Provide Some Data");
        }else{
        let newData={
            grocery
        }
        props.dataArr.push(newData)
        props.notify("New Grocery Added");
        props.cardArr(props.dataArr);
    }

    }
    function inputChange(e){
        setInputData(e.target.value)
        setInp(e.target.value)
        
    }
    return(
        <div className="inputCard">
            <h1>Grocery Bud</h1>
            <div className="inputContainer">
             <input type="text" onChange={inputChange} value={inp}/>
             <button onClick={addGrocery}>Add Item</button>
             </div>
        </div>
    )
}

export default InputCard