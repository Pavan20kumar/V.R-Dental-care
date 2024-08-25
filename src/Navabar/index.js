import React from'react';
import './nav.css';
function Nava(){











    return(
        <div>
            <nav class="navbar navbar-expand-lg bg-body-tertiary fixed-top z-3">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
        <img src="./logo/logo.JPEG" width="30" height="30" class="d-inline-block align-top" alt="" />
        <span id=''>V.R Dental Care</span>
  
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav ms-auto fs-5 text-darck fst-italic">
        <a class="nav-link active" aria-current="page" id='color' href="#">Home</a>
        <a class="nav-link" id='color' href="#services">Services</a>
        <a class="nav-link" id='color' href="#about">About</a>
        <a class="nav-link" id='color' href='#our-blog'>Blog</a>
        <a class="nav-link" id='color' href='#contact'>Contact</a>
        <div>
        
        <a href='#appointment'>
          <button className='btn btn-primary' id="btn">Book Appointment</button>
          </a>
      
        
        </div>
      </div>
    </div>
  </div>
</nav>
        </div>

    )
}

export default Nava;