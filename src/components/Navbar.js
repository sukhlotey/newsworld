import React from 'react'
import { NavLink } from "react-router-dom";
import Logo from './Logo'


 const Navbar = () =>{
    return (
      <div>
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark border-bottom-0"style={{backgroundColor:"rgb(0 8 20)"}}>
  <div className="container-fluid">
    <div className="navbar-brand"><Logo/>News Daily</div>
    <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
       <li className="nav-item"><NavLink className="nav-link" to="/general">General</NavLink></li>   
       <li className="nav-item"><NavLink className="nav-link" to="/business">Business</NavLink></li>
       <li className="nav-item"><NavLink className="nav-link" to="/entertainment">Entertainment</NavLink> </li>
       <li className="nav-item"><NavLink className="nav-link" to="/health">Health</NavLink> </li>
       <li className="nav-item"><NavLink className="nav-link" to="/science">Science</NavLink> </li>
       <li className="nav-item"><NavLink className="nav-link" to="/sports">Sports</NavLink> </li>
       <li className="nav-item"><NavLink className="nav-link" to="/technology">Technology</NavLink> </li>
       <li className="nav-item"><NavLink className="nav-link" data-bs-toggle="modal" to="#exampleModalToggle" style={{color:"#ff0000",textDecoration:"none"}}>Connect Us</NavLink> </li>
      </ul>
    </div>
  </div>
</nav> 
      </div>
    )
  }

export default Navbar