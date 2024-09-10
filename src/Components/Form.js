import React, {useState} from 'react'
import PropTypes from 'prop-types'

export default function Form(props) {
    const handleUpClick = ()=> {
        let newText = text.toUpperCase();
        setText(newText);
        if(text.length>0){
            props.showAlert("Your text was converted to Uppercase.", "success");
        } else {
            props.showAlert("Enter some text to convert in Uppercase.", "warning");
        }
    }
    const handleLoClick = ()=> {
        let newText = text.toLowerCase();
        setText(newText);
        if(text.length>0){
            props.showAlert("Your text was converted to Lowercase.", "success");
        } else {
            props.showAlert("Enter some text to convert in Lowercase.", "warning");
        }
    }
    const handleInverseClick = () => {
            if(text === text.toLowerCase() && text !== text.toUpperCase()){
                handleUpClick();
            } else if (text === text.toUpperCase() && text !== text.toLowerCase()){
                handleLoClick();
            }
            else if (text !== text.toUpperCase() && text !== text.toLowerCase() && text[0].charAt(0) !== text[0].charAt(0).toLowerCase()){
            let capWord = text.split(' ');
            let capitalizedWords = capWord.map(words =>
                words.charAt(0).toLowerCase() + words.slice(1).toUpperCase()
            );
            let capitalizedSentence = capitalizedWords.join(' ');
            let newText = capitalizedSentence;
            setText(newText);
            }
            else {
                handleCapClick();
            }
            if(text.length>0){
                props.showAlert("Your text was converted to Inversecase.", "success");
            } else {
                props.showAlert("Enter some text to convert in Inversecase.", "warning");
            }
    };
    const handleCapClick = () => {
        if (text.length > 0) {
            let capWord = text.split(' ');
            let capitalizedWords = capWord.map(words =>
                words.charAt(0).toUpperCase() + words.slice(1).toLowerCase()
            );
            let capitalizedSentence = capitalizedWords.join(' ');
            let newText = capitalizedSentence
            setText(newText);
            props.showAlert("Your text was converted to Capitalized Words.", "success");
            } else {
                props.showAlert("Enter some text to convert in Capitalized Words.", "warning");
            }
        }
    const handleExtraSpaces = ()=>{
        let newText = text.split(/\s+/).join(" ").trim();
        setText(newText);
        if (text.length > 0 && newText !== text.trim()) {
            // If text has content and newText does not match the trimmed text, there were extra spaces
            props.showAlert("Removed extra spaces from your text.", "success");
        } else if (text.length === 0) {
            // If text is empty, prompt the user to enter some text
            props.showAlert("Enter some text to remove extra spaces.", "danger");
        } else {
            // For all other cases, handle appropriately
            props.showAlert("Your text don't have any extra spaces.", "warning");
        }
    }
    const handleCopy = () =>{
        let copyText = document.getElementById("myBox");
        copyText.select();
        navigator.clipboard.writeText(copyText.value);
        if(text.length>0){
            props.showAlert("Copied to Clipboard.", "success");
        } else {
            props.showAlert("Enter some text to Copy to Clipboard.", "warning");
        }
    }
    const handleReset = ()=>{
        let newText = "";
        setText(newText);
        if(text.length>0){
            props.showAlert("TextArea is cleared Successfully.", "success");
        } else {
            props.showAlert("TextArea is already cleared.", "warning");
        }
    }
    const handleOnChange = (event)=> {
        setText(event.target.value)
    }
    const[text, setText] = useState("");
    let wordCount = text.split(" ").filter(Boolean).length;
    let readTime = 0.008 * wordCount;
  return (
    <>
    <div className="container" >
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange = {handleOnChange} id="myBox" rows="8" placeholder='Enter the text here' style={{backgroundColor: props.mode === "dark" ? "grey" : "white", color: props.mode === "dark" ? "white" : "black" }}></textarea>
        </div>
        <button className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Lower Case</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleCapClick}>Capitalized Words</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Upper Case</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleInverseClick}>Inverse Case</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        <button className="btn btn-success mx-1 my-1" onClick={handleCopy}>Copy to Clipboard</button>
        <button className="btn btn-danger mx-1 my-1" onClick={handleReset}>Reset</button>
    </div>
    <div className="container" >
       <h1 >Your Text Summary</h1>
       <p >{wordCount} words and {text.length} characters</p>
       <p >{readTime.toFixed(2)} minute will took to read the text.</p>
       </div>
    </>
  )
}
Form.propTypes = {
    heading: PropTypes.string.isRequired,
}