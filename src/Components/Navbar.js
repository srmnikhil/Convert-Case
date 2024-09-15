import React, {useState} from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
    const [themeChanged, setThemeChanged] = useState(false);
    const [navColor, setNavColor] = useState("light");
    const handleLightMode = () => {
        props.setMode("light");
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        setThemeChanged(false);
    }
    const handleDarkMode =() =>{
        props.setMode("dark");
        setThemeChanged(false);
        document.body.style.backgroundColor = "#042743";
        document.body.style.color = "white";
    }
    const handleRedBlue = () => {
        setThemeChanged(true);
        document.body.style.color = "black";
        document.body.style.backgroundColor = "#57adbf";
        setNavColor("danger");
    }
    const handleGreenYellow = () => {
        setThemeChanged(true);
        document.body.style.color = "black";
        document.body.style.backgroundColor = "yellow";
        setNavColor("success");
    }
    const collapseButtonStyle = {
        borderColor: props.mode === "dark" ? "white" : "black",
        backgroundColor: props.mode === "dark" ? "white" : "",
        color: props.mode === "dark" ? "#042743" : ""
    }
  return (
   <div className='header'>
     <nav className={`navbar fixed-top navbar-expand-lg bg-${themeChanged === true ? navColor : props.mode}`} >
        <div className={`container-fluid ${themeChanged || props.mode === "dark" ? "text-light" : "text-dark"}`}>
            <strong><a className={`navbar-brand ${themeChanged || props.mode === "dark" ? "text-light" : "text-dark"}`} href="/convert-case"><img className='logo' src={`${process.env.PUBLIC_URL}/icon.png`} alt="website-logo" />Convert Case</a></strong>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" style={collapseButtonStyle}>
            <span className="navbar-toggler-icon" style={collapseButtonStyle}></span>
            </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className={`nav-link active ${themeChanged || props.mode === "dark" ? "text-light" : "text-dark"}`} aria-current="page" href="/convert-case">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className={`nav-link ${themeChanged || props.mode === "dark" ? "text-light" : "text-dark"}`} href="/convert-case">About Us</a>
                    </li>
                    </ul>
                    <div className="icons">
                        <b><i>Set Theme:</i></b>
                        <img src={`${process.env.PUBLIC_URL}/redBlue.png`} alt="theme-icon" height={"35px"} onClick={handleRedBlue} style={{cursor : "pointer"}}/>
                        <img src={`${process.env.PUBLIC_URL}/greenYellow.png`} alt="theme-icon" height={"35px"} onClick={handleGreenYellow} style={{cursor : "pointer"}}/>
                        <img src={`${process.env.PUBLIC_URL}/darkMode.png`} alt="theme-icon" height={"35px"} onClick={handleDarkMode} style={{cursor : "pointer"}}/>
                        <img src={`${process.env.PUBLIC_URL}/lightMode.png`} alt="theme-icon" height={"35px"} onClick={handleLightMode} style={{cursor : "pointer"}}/>
                    </div>
                </div>
        </div>
    </nav>
   </div>
  )
}

Navbar.propTypes={
    setMode: PropTypes.func.isRequired,
    mode: PropTypes.string.isRequired,
    showAlert: PropTypes.func.isRequired,
}