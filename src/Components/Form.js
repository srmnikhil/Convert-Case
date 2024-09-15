import React, {useState} from 'react'
import PropTypes from 'prop-types'

export default function Form(props) {
    const[text, setText] = useState("");
    const splChar = [
        '@', '!', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+',
        '{', '}', '[', ']', '|', '\\', ':', ';', '"', "'", '<', '>', ',', '.',
        '?', '/', '~', '`'
      ];
    const handleUpClick = ()=> {
        let upperText = text.toUpperCase();
        setText(upperText);
        if(text.length>0){
            props.showAlert("Your text was converted to Uppercase.", "success");
        } else {
            props.showAlert("Enter some text to convert in Uppercase.", "warning");
        }
    };
    const handleLoClick = ()=> {
        let lowerText = text.toLowerCase();
        setText(lowerText);
        if(text.length>0){
            props.showAlert("Your text was converted to Lowercase.", "success");
        } else {
            props.showAlert("Enter some text to convert in Lowercase.", "warning");
        }
    }
    const handleInverseClick = () => {
        if (text.length > 0) {
            let invertedText = text.split('').map(char => {
                if (char === char.toUpperCase()) {
                    return char.toLowerCase();
                } else {
                    return char.toUpperCase();
                }
            }).join(''); 
            setText(invertedText);
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
            setText(capitalizedSentence);
            props.showAlert("Your text was converted to Capitalized Words.", "success");
            } else {
            props.showAlert("Enter some text to convert in Capitalized Words.", "warning");
            }
        }
    const handleExtraSpaces = ()=>{
        let newText = text.split(/\s+/).join(" ").trim();
        setText(newText);
        if (text.length > 0 && newText !== text) {
            props.showAlert("Removed extra spaces from your text.", "success");
        } else if (text.length === 0) {
            props.showAlert("Enter some text to remove extra spaces.", "danger");
        } else {
            props.showAlert("Your text don't have any extra spaces.", "warning");
        }
    }
    const handleRemoveSplChar = () =>{
        let removeSplChar = text.split(" ");
        let removedSplCharText = removeSplChar.map(words =>{
            return words.split("").filter(char => !splChar.includes(char)).join("");
        });
        let newText = removedSplCharText.join(" ").replace(/\s+/g, " ").trim();
        setText(newText);
        if (newText.length === 0){
            props.showAlert("Enter some text to remove Special Characters.", "danger");
        } else if (newText !== text){
            props.showAlert("Special Characters removed from your text.", "success");
        } else {
            props.showAlert("Your text does not have any Special Characters.", "warning");
        }
    }
    const handleCopy = () =>{
        if(text.length>0){
            navigator.clipboard.writeText(text);
            props.showAlert("Copied to Clipboard.", "success");
        } else {
            props.showAlert("Enter some text to Copy to Clipboard.", "warning");
        }
    }
    const handleReset = ()=>{
        if(text.length>0){
            setText("");
            props.showAlert("TextArea is cleared Successfully.", "success");
        } else {
            props.showAlert("TextArea is already cleared.", "warning");
        }
    }
    const handleOnChange = (event)=> {
        setText(event.target.value);
    }

    const wordCount = text.split(" ").filter(Boolean).length;
    const readTime = 0.008 * wordCount;
  return (
    <>
    <div className="container" >
        <h1>{props.heading}</h1>
        <div className="mb-2">
            <textarea className="form-control" value={text} onChange = {handleOnChange} id="myBox" rows="7" placeholder='Enter the text here' style={{backgroundColor: props.mode === "light" ? "white" : "#bfbdbd", color: props.mode === "dark" ? "white" : "black" }}></textarea>
        </div>
        <button className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Lower Case</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleCapClick}>Capitalized Words</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Upper Case</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleInverseClick}>Inverse Case</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleRemoveSplChar}>Remove Special Characters</button>
        <button className="btn btn-success mx-1 my-1" onClick={handleCopy}>Copy to Clipboard</button>
        <button className="btn btn-danger mx-1 my-1" onClick={handleReset}>Reset</button>
    </div>
    <div className="container" >
       <h1>Your Text Summary</h1>
       <p>{wordCount} words and {text.length} characters</p>
       <p>{readTime.toFixed(2)} minute will took to read the text.</p>
       </div>
    </>
  )
}
Form.propTypes = {
    heading: PropTypes.string.isRequired,
    mode: PropTypes.string.isRequired,
    showAlert: PropTypes.func.isRequired
}