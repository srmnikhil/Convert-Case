import './App.css';
import React, {useState}from 'react';
import Navbar from './Components/Navbar';
import Form from './Components/Form';
import Alert from './Components/Alert';


function App() {
    const [mode, setMode] = useState("light");
    const handleMode = ()=>{
        if (mode === "light"){
        setMode("dark");
        document.body.style.backgroundColor = "#042743";
        document.body.style.color = "white";
        showAlert("Dark mode was enabled.", "success")
    } else{
        setMode("light");
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        showAlert("Light mode was enabled.", "success")
    }
    }
    const [alert, setAlert] = useState(null);
    const showAlert = (message, type) => {
            setAlert({
                    msg : message,
                    type : type
                })
            setTimeout(() => {
                setAlert(null);
                }, 2000);
        }
     
  return (
  <>
  <Navbar title="Convert Case" mode = {mode} handleMode = {handleMode}/>
  <Alert alert = {alert}/>
  <Form heading ="Enter the text" showAlert = {showAlert} mode = {mode}/>
  </>
  );
}

export default App;
