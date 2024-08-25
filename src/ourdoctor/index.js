import React from 'react';
import './OurDoctors.css';
import { FaInstagram,FaFacebookF, FaLinkedin } from "react-icons/fa";




const OurDoctors = () => {
  const doctors = [
    {
      name: 'Dr. John Doe',
      specialty: 'General Dentist',
      image: './doctors/doctor-1.png',
     
      
    },
    {
      name: 'Dr. Jane Smith',
      specialty: 'Cosmetic Dentist',
      image: './doctors/doctor-2.png',
     
    },
    {
      name: 'Dr. Michael Johnson',
      specialty: 'Orthodontist',
      image: './doctors/doctor-3.png',
      
    }
  ];

  return (
    <section className="our-doctors">
      <div className="container">
        <h5 className='text-primary'>Our Doctors</h5>
        <h2>Best Expert Dentist</h2>
        <div className="doctor-cards">
          {doctors.map((doctor, index) => (
            
            <div className="doctor-card" key={index}>

              <div className="doctor-image">
                <img src={doctor.image} alt={doctor.name} />
              </div>
              <div className="doctor-info">
                <h3>{doctor.name}</h3>
                <p>{doctor.specialty}</p>
                <p>{doctor.description}</p>
              </div>

              <div className='social-icons'>

              <a href={doctor.instagarm}  className="social-icon instagram" ><FaInstagram /></a>
              <a href={doctor.facebook} className="social-icon facebook"><FaFacebookF /></a>
              <a href={doctor.linkedin} className="social-icon linkedin" ><FaLinkedin  /></a>








              </div>


            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurDoctors;
