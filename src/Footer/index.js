import React from 'react';
import { Map, Marker } from 'react-map-gl';
import './Footer.css';

const Footer = () => {
  const mapboxAccessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;
  const mapViewport = {
    latitude: 37.7749,
    longitude: -122.4194,
    zoom: 12,
  };

  const services = [
    'General Dentistry',
    'Cosmetic Dentistry',
    'Orthodontics',
    'Pediatric Dentistry',
    'Oral Surgery',
  ];

  return (
    <a name = "contact">
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>
            123 Main Street<br />
            San Francisco, CA 94111<br />
            <a href='tel:+9885349798'>Phone:9885349798<br /></a>
            Email: info@dentalpractice.com
          </p>
        </div>
        <div className="footer-section">
          <h3>Services</h3>
          <ul>
            {services.map((service, index) => (
              <li key={index}>
                <a href="#">{service}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer-section">
          <h3>Location</h3>
          <div className="map-container">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3820.885683439295!2d82.21168809999999!3d16.7325548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a37f5629e08049d%3A0x57e44639afd7d3a6!2sV.R.%20Dental%20Care%20%26%20Dental%20implant%20centre!5e0!3m2!1sen!2sin!4v1724490333300!5m2!1sen!2sin" width="400" height="250"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
           
          </div>
        </div>
      </div>
    </footer>
    </a>
  );
};

export default Footer;
