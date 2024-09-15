import './App.css';
import React, {useState}from 'react';
import Navbar from './Components/Navbar';
import Form from './Components/Form';
import Alert from './Components/Alert';
import Footer from './Components/Footer';


function App() {
        const [mode, setMode] = useState("light");
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
  <Navbar title = "Convert Case" mode = {mode} setMode = {setMode} showAlert = {showAlert}/>
  <Alert alert = {alert}/>
  <Form heading = "Enter the text" showAlert = {showAlert} mode = {mode}/>
  <Footer />
  </>
  );
}

export default App;
