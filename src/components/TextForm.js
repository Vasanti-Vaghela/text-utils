import React, {useState} from 'react'

export default function TextForm(props) {
  const [text, setText] = useState('Enter Text here');
  // text="new Text";    //wrong way to set the state
  // setText("new Text");  //correct way to set the state
  const handleOnClick=()=>{
    console.log('you have clicked');
    let newText = text.toUpperCase();
    setText(newText);
  }
  const handleUpChange=(event)=>{
    console.log('On change');
    setText(event.target.value);
  }
  return (
    <>
    <div className="container">
           
        <div className="mb-3">
        <h1>{props.heading}</h1>
        <textarea className="form-control mb-3" value={text} onChange={handleUpChange} id="myBox" rows="8"></textarea>
        <button className="btn btn-primary  " onClick={handleOnClick}>Convert to Uppercase</button>
        </div>
    </div>
    <div className="container my-3">
      <h1>Words Summary</h1>
      <p>{text.split(" ").length} words {text.length} characters</p>
    </div>
    </>
  )
}
