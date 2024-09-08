import './App.css';
import React, {useState}from 'react';
import Navbar from './Components/Navbar';
import Form from './Components/Form';
// import About from './Components/About';

function App() {
    const [mode, setMode] = useState("light");
    const handleMode = ()=>{
        if (mode === "light"){
        setMode("dark");
        document.body.style.backgroundColor = "#042743";
        document.body.style.color = "white";
    } else{
        setMode("light");
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
    }
    }
  return (
  <>
  <Navbar title="PlayWithText" mode = {mode} handleMode = {handleMode}/>
  <div className="container my-3"><Form heading ="Enter the text Play" mode = {mode}/></div>
  </>
  );
}

export default App;
