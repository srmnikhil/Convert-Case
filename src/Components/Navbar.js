import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
        const myStyle = {
            borderColor: props.mode === "dark" ? "white" : "black",
            backgroundColor: props.mode === "dark" ? "white" : "",
            color: props.mode === "dark" ? "#042743" : ""
        }
  return (
    <nav className={`navbar navbar-expand-lg bg-${props.mode}`} >
    <div className={`container-fluid ${props.mode === "dark" ? "text-light" : "text-dark"}`}>
        <h1><a className={`navbar-brand ${props.mode === "dark" ? "text-light" : "text-dark"}`} href="/">{props.title}</a></h1>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" style={myStyle}>
        <span className="navbar-toggler-icon" style={myStyle}></span>
        </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <a className={`nav-link active ${props.mode === "dark" ? "text-light" : "text-dark"}`} aria-current="page" href="/">Home</a>
                </li>
                <li className="nav-item">
                    <a className={`nav-link ${props.mode === "dark" ? "text-light" : "text-dark"}`} href="About.js">About Us</a>
                </li>
                </ul>
                <div className="form-check form-switch">
                    <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.handleMode}/>
                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.mode === "light" ? "Dark" : "Light"} Mode</label>
                </div>
            </div>
    </div>
</nav>
  )
}

Navbar.propTypes={
    title: PropTypes.string.isRequired,
}