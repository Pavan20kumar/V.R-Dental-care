import React from 'react';
import { FaInstagram,FaFacebookF, FaLinkedin, FaMapMarkerAlt ,FaPhoneAlt, FaEnvelopeOpen } from "react-icons/fa";
import './Footer.css';
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <footer id='Contact'>
      <div className="footer-container">
        <div className="footer-section">
          <h3>Services</h3>
          <ul className=''>
            <li>Dental Implants</li>
            <li>Teeth Whitening</li>
            <li>Orthodontics</li>
            <li>Cosmetic Dentistry</li>
            <li>Dental Fillings</li>
            <li>Root Canal Therapy</li>
            <li>Periodontics</li>
            <li>Endodontics</li>

        
          </ul>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul className='pe-4'>
          <li><Link to='About' smooth={true}  duration={500} >About</Link></li>
            <li><Link to='services' smooth={true}  duration={500} >Services</Link></li>
            <li><Link to='#' smooth={true}  duration={500} >Doctors</Link></li>
            <li><Link to='Blog' smooth={true}  duration={500}>Blog</Link></li>
            <li><Link to='Contact' smooth={true}  duration={500} >Contact</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contact</h3>
          <div className="contact-info">
            <p>
              <FaMapMarkerAlt className='fs-4' /> <a href="https://" className='text-black mt-1 '>V.R Dental Care, 123 Main Street, City, State, Zip Code</a>
            </p>
            <p>
              <FaPhoneAlt/> <a href="tel:+91 8790349798 " className='text-black '>+91 8790349798</a>
            </p>
            <p>
              <FaEnvelopeOpen /> <a href="mailto:praveenmedidhi@gmail.com" className='text-black '>praveenmedidhi@gmail.com</a>
            </p>
          </div>
        </div>
        <div className="footer-section">
          <h3>Location</h3>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3820.885683439295!2d82.21168809999999!3d16.7325548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a37f5629e08049d%3A0x57e44639afd7d3a6!2sV.R.%20Dental%20Care%20%26%20Dental%20implant%20centre!5e0!3m2!1sen!2sin!4v1724930210061!5m2!1sen!2sin"
          width="100%"
          height="200"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Maps"
          
          
          
          ></iframe>


        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            
          </div>
        </div>
      </div>

      <div className="foot-time fw-blod">
      <h3>Opening Hours</h3>
      <p>Monday - Friday: 9:00 AM - 7:00 PM</p>
      <p>Saturday: 10:00 AM - 6:00 PM</p>
      <p>Sunday: Closed</p>

      





      </div>
        

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} V.R Dental Care</p>
      </div>
    </footer>
  );
};

export default Footer;
