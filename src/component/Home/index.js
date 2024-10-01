import React from'react';

import Part from '../Introduction';
import Services from '../our services';
import OurBlog from '../Our Blog';
import About from '../About';
import OurDoctors from '../ourdoctor';
import Testimonials from '../Testimonials';
import Appointment from '../Appointment';
import Nava from '../Navabar/index.js';










function Home (){
    return(
        <div>
            <Nava></Nava>
       
      
      <Part></Part>

      <Services></Services>

      <OurBlog></OurBlog>
      
      <About></About>
      
      

      <OurDoctors></OurDoctors>

      <Testimonials></Testimonials>


      <Appointment></Appointment>
      



      
     
     

        </div>

    )
}
export default Home;