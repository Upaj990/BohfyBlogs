import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';


export default function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <img className="logo" src="../../logo.png" alt="logo"/>  
    {/* <a className="navbar-brand" href="/">{props.title}</a> */}
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    {/* <div className={`form-check form-switch text-${props.mode === 'light'? 'dark' : 'light'}`}>
        <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
        {/* <img className="dark" src="../../dark-mode.png" alt="logo"/> */}
        {/* <label className="form-check-label" htmlFor="flexSwitchCheckDefault"></label> 
      </div>
      <div className={`form-check form-switch text-${props.mode === 'light'? 'dark' : 'light'}`}>
        <input className="form-check-input" onClick={props.toggleRedMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
        {/* <img className="dark" src="../../dark-mode.png" alt="logo"/> */}
        {/* <label className="form-check-label" htmlFor="flexSwitchCheckDefault"></label> 
      </div>
      <div className={`form-check form-switch text-${props.mode === 'light'? 'dark' : 'light'}`}>
        <input className="form-check-input" onClick={props.toggleBlueMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
        {/* <img className="dark" src="../../dark-mode.png" alt="logo"/> */}
        {/* <label className="form-check-label" htmlFor="flexSwitchCheckDefault"></label> 
      </div> */}

      <div class="btn-group" role="group" aria-label="Basic example">
        <button type="button" onClick={props.toggleMode} class={`btn btn-primary form-check form-switch text-${props.mode ===  'dark'}`}>Dark
        </button>
        <button type="button" onClick={props.toggleRedMode} class={`btn btn-primary form-check form-switch text-${props.mode ===  'dark'}`}>Red-Dark</button>
        <button type="button" onClick={props.toggleBlueMode} class={`btn btn-primary form-check form-switch text-${props.mode ===  'dark'}`}>Blue-Dark</button>
      </div>
    
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">{props.aboutText}</Link>
        </li>
        
        
      </ul>
      
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-primary" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    )
}

Navbar.propTypes ={
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string.isRequired
}

Navbar.defaultProps={
    title: "Set title here",
    aboutText: "Set about here"
}