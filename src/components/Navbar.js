import React from 'react'
import { Link } from "react-router-dom";
import Logo from './Logo'


 const Navbar = () =>{
    return (
      <div>
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark border-bottom-0"style={{backgroundColor:"#0c1626"}}>
  <div className="container-fluid">
    <div className="navbar-brand"><Logo/>News Man</div>
    <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
       <li className="nav-item"><Link className="nav-link" to="/general">General</Link></li>   
       <li className="nav-item"><Link className="nav-link" to="/business">Business</Link></li>
       <li className="nav-item"><Link className="nav-link" to="/entertainment">Entertainment</Link> </li>
       <li className="nav-item"><Link className="nav-link" to="/health">Health</Link> </li>
       <li className="nav-item"><Link className="nav-link" to="/science">Science</Link> </li>
       <li className="nav-item"><Link className="nav-link" to="/sports">Sports</Link> </li>
       <li className="nav-item"><Link className="nav-link" to="/technology">Technology</Link> </li>
       <li className="nav-item"><Link className="nav-link" data-bs-toggle="modal" to="#exampleModalToggle">Connect Us</Link> </li>
      </ul>
    </div>
  </div>
</nav> 
      </div>
    )
  }

export default Navbar