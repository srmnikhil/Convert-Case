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
  <div className="app-container">
    <Navbar mode = {mode} setMode = {setMode} showAlert = {showAlert}/>
    <Alert alert = {alert}/>
    <div className="content">
        <Form heading = "Enter the text" showAlert = {showAlert} mode = {mode}/>
    </div>
    <Footer />
  </div>
  </>
  );
}

export default App;
