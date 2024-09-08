import React from'react';
import './nav.css';
import {Link} from 'react-scroll'
function Nava(){











    return(
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top z-3 ">
  <div className="container-fluid">
   <Link to='Home' smooth={true}  duration={500}  className="navbar-brand"  >
   <img src="./logo/logo.png" width="30" height="30" className="d-inline-block align-top ml-3 me-3" alt="" />
        <span className='g-3'>V.R </span>
        <span className='det'>Dental Care</span>
   
   
   </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav ms-auto fs-5 text-darck fst-italic">
        <Link to='Home' smooth={true}  duration={500}  className="nav-link" id='color' >Home</Link>
        <Link to='services' smooth={true}  duration={500}  className="nav-link" id='color' >Services</Link>
        <Link to='About' smooth={true}  duration={500}  className="nav-link" id='color' >About</Link>
        
        <Link to='Blog' smooth={true}  duration={500}  className="nav-link" id='color' >Blog</Link>
        <Link to='Contact' smooth={true}  duration={500}  className="nav-link" id='color' >Contact</Link>
        

        <div>
        
        <Link to='Appointment' smooth={true} offset={-100} duration={500}  className="nav-link"  >
          <button className='btn btn-primary' id="btn">Book Appointment</button>
          </Link>
          
      
        
        </div>
      </div>
    </div>
  </div>
</nav>
        </div>

    )
}

export default Nava;