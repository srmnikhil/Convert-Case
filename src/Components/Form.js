import React, {useState} from 'react'
import PropTypes from 'prop-types'

export default function Form(props) {
    const handleUpClick = ()=> {
        let newText = text.toUpperCase()
        setText(newText)
    }
    const handleLoClick = ()=> {
        let newText = text.toLowerCase()
        setText(newText)
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
        }
    };
    const handleExtraSpaces = ()=>{
        let newText = text.split(/\s+/).join(" ").trim();
        setText(newText)
    }
    const handleReset = ()=>{
        let newText = ""
        setText(newText)
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