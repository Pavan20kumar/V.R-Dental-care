import React from 'react';
import './about.css';
import { useState } from 'react';
import ReactiveButton from 'reactive-button';


const About = () => {
  const [state, setState] = useState('idle');
  return (
    <a name = "about">
    <section className="about">
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-12 col-md-6 col-lg-6'>

          <div className="about-text">
<h2>About V.R Dental Care</h2>
<p>
  At V.R Dental Care, we are committed to providing exceptional dental care in a warm and welcoming environment. Our team of highly skilled and experienced dentists and dental professionals use the latest techniques and state-of-the-art technology to ensure you receive the best possible treatment.
</p>
<p>
  We understand that visiting the dentist can be a daunting experience for some, which is why we strive to make your experience as comfortable and stress-free as possible. From the moment you walk through our doors, you'll be greeted by our friendly staff who will guide you through every step of your treatment.
</p>

<ReactiveButton     
      buttonState={state}
      onClick={() => {
        setState('loading');
        setTimeout(() => {
          setState('success');
        }, 2000);
      }}
    ></ReactiveButton>



</div>

          </div>

          <div className='col-12 col-md-6 col-lg-6'>
          <div className="about-image">
            <img src="./about/about-1.jpeg" alt="About V.R Dental Care" />
          </div>
          </div>


          
        </div>



      </div>
      
      
   
    </section>
    </a>
  );
};

export default About;










