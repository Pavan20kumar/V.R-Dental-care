import React from 'react';
import './AboutReadMore.css';
import { Link } from 'react-scroll';



const AboutReadMore = () => {
  return (

    <section className="about" id="about">
     
      <div className="container">
        <h5 className='text-primary fs-2'>About Us</h5>
        <h2>V.R Dental Care</h2>
        
        <div className="about-content">
          <div className="about-text">
            <p>V.R Dental Care is committed to providing exceptional dental services to our community. With our team of experienced professionals and state-of-the-art technology, we ensure that every patient receives personalized care and achieves their best smile.</p>
            <p>Our mission is to create a comfortable and welcoming environment where patients of all ages can receive top-quality dental care. We focus on preventive dentistry and offer a wide range of services to meet all your oral health needs.</p>
          </div>
          <div className="about-image main-image">
            <img src="./about/dental-team.jpg" alt="V.R Dental Care Team" />
          </div>
        </div>

        <div className="about-features">
          <div className="feature">
            <img src="./about/experienced-staff.jpg" alt="Experienced Staff" />
            <h3>Experienced Staff</h3>
            <p>Our team of dental professionals brings years of experience and expertise to every patient interaction.</p>
          </div>
          <div className="feature">
            <img src="./about/modern-equipment.jpg" alt="Modern Equipment" />
            <h3>Modern Equipment</h3>
            <p>We utilize the latest dental technology to provide efficient and comfortable treatments.</p>
          </div>
          <div className="feature">
            <img src="./about/comprehensive-care.jpg" alt="Comprehensive Care" />
            <h3>Comprehensive Care</h3>
            <p>From routine check-ups to advanced procedures, we offer a full range of dental services.</p>
          </div>
          <div className="feature">
            <img src="./about/comfortable-facility.jpg" alt="Comfortable Facility" />
            <h3>Comfortable Facility</h3>
            <p>Our modern, welcoming office is designed to make your dental visit as pleasant as possible.</p>
          </div>
        </div>

        <div className="about-cta mb-3">
          <h3>Experience the V.R Dental Care Difference</h3>
          <p>Schedule your appointment today and see why our patients love us!</p>
          <Link to="/" >
          <button className="cta-button">Book an Appointment</button>
          </Link>
        </div>
      </div>
      
    </section>
  );
};

export default AboutReadMore;
