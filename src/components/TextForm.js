
import React, { useState } from 'react';

function TextForm(props) {

  const handleUpClick = (e) => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase", "success");
  }

  const handleLoClick = (e) => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase", "success");
  }

  const handleClearClick = () => {
    let newText = " ";
    setText(newText);
    props.showAlert("Now your text is clear", "success");
  }

  const handleOnChange = (e) => {
    setText(e.target.value);
  }
  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    text.setSelectionRange(0, 999);
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copy to clipboard", "success");
  }

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Clean the extra spaces", "success");
  }

  const [text, setText] = useState(""); //array destructing syntax method use
  return (
    <>
      <div className="container" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
        <h1 className='mb-4'>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'light', color: props.mode === 'dark' ? 'white' : '#042743' }} id="myBox" rows="7"></textarea>
        </div>
        <div className="buttonArea d-flex flex-wrap justify-content-space-between">
          <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Uppercase</button>
          <button className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy</button>
          <button className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>Lowercase</button>
          <button className="btn btn-primary mx-2 my-2" onClick={handleClearClick}>Clear</button>
          <button className="btn btn-primary mx-2 my-2" onClick={handleExtraSpaces}>Remove Spaces</button>
          <button className="btn btn-primary mx-2 my-2" onClick={handleExtraSpaces}>Cut</button>
        </div>
      </div>
      <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
        <h1 className='text-center'>Your text summary</h1>
        <div className="d-flex justify-content-between align-items-center border p-3 my-3">
          <p>{text.split(" ").filter((element) => { return element.length !== 0 }).length} word and {text.length} character</p>
          <p> {text.split(" ").filter((element) => { return element.length !== 0 }).length * 0.006} minute read</p>
        </div>
        <div>
          <h3>Preview</h3>
          <p>{text.length > 0 ? text : "Enter something in the textbox to preview here"}</p>
        </div>
      </div>
    </>
  );
}

export default TextForm;
