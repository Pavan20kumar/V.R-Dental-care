
import React from'react';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import './BookAppointment.css'
import styled from "styled-components";












const Appointment = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [appointmentDate , setAppointmentDate] = useState('');
  const [appointmentTime, setAppointmentTime] = useState('');
  const [message, setMessage] = useState('');



  


  const onSubmit = (e,data) => {
  const serviceId ="service_hx2377k";
  const templateId ="template_ev5svo8";
  const publicKey ="0bJodC1FoIdOFtTEw";

  const templateParams = {
    from_name:name,
    from_email:email,
    from_phoneNumber:phoneNumber,
    from_appointmentDate:appointmentDate,
    from_appointmentTime:appointmentTime,
    to_name:"V.R Dental Care",
    from_message: message,
  };

  emailjs.send(serviceId, templateId, templateParams, publicKey)
  .then((response) => {
    alert('SUCCESS!', response.status, response.text);
    setName('');
    setEmail('');
    setPhoneNumber('');
    setAppointmentDate('');
    setAppointmentTime('');
    setMessage('');
  })
  .catch((error) => {
    alert('FAILED...', error);
  });
    


    
    
   
    
    
  }











  return(
  
    <section className='book-appointment' id='Appointment'>
    <div className=" fst-italic text-white">
      <h2>Booking Appointment</h2>
    </div>
 
    <div className='container-fluid'>
      <form onSubmit={handleSubmit(onSubmit)}>
      <div className='row'>
        <div className='col-6 col-md-4'>
          <div className='mb-3'>
            <label htmlFor="name" className='form-label'>Full Name</label>
            <input type="text" className='form-control' id="name" 
             {...register('name', { required: 'Name is required' })}
             value={name}
             onChange={(e) => setName(e.target.value)}
            />
          </div>
          {errors.name && <span className='bg-primary text-dark fs-5 fst-italic'>{errors.name.message}</span>}
        </div>
        

        


        <div className='col-6 col-md-4'>
          <div className='mb-3'>
            <label htmlFor="email" className='form-label'>Email</label>
            <input type="email" className='form-control'  id="email"
             {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: 'Invalid email address',
              },
            })}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          {errors.email && <span className='bg-primary text-dark fs-5 fst-italic'>{errors.email.message}</span>}      
        </div>
        

        


        <div className='col-6 col-md-4'>
          <div className='mb-3'>
            <label htmlFor="phoneNumber" className='form-label'>Phonenumber</label>
            <input type="text" className='form-control'  id="phoneNumber"

{...register('phoneNumber', {
  required: 'Phone number is required',
  pattern: {
    value: /^\d{10}$/,
    message: 'Invalid phone number',
  },
})}
value={phoneNumber}
onChange={(e) => setPhoneNumber(e.target.value)}
            
            
            
            />
          </div>
          {errors.phoneNumber && <span className='bg-primary text-dark fs-5 fst-italic'>{errors.phoneNumber.message}</span>}
        </div>
        

        <div className='col-6 col-md-4'>
          <div className='mb-3'>
            <label htmlFor="appointmentData" className='form-label'>AppointmentData</label>
            <input type="date" className='form-control'  id="appointmentData"
            {...register('appointmentDate', { required: 'Appointment date is required' })}
            value={appointmentDate}
            onChange={(e) => setAppointmentDate(e.target.value)}
            
            />
          </div>
          {errors.appointmentDate && <span className='bg-primary text-dark fs-5 fst-italic'>{errors.appointmentDate.message}</span>}
        </div>
       

        <div className='col-6 col-md-4'>
          <div className='mb-3'>
            <label htmlFor="appointmentTime" className='form-label'>AppointmentTime</label>
            <input type="time" className='form-control'  id="appointmentTime"
            {...register('appointmentTime', { required: 'Appointment time is required' })}
            value={appointmentTime}
            onChange={(e) => setAppointmentTime(e.target.value)}
           

            
            
            />
          </div>
          {errors.appointmentTime && <span className='bg-primary text-dark fs-5 fst-italic'>{errors.appointmentTime.message}</span>}
        </div>
        


        <div className='col-6 col-md-4'>
          <div className='mb-3'>
            <label htmlForfor="appointmenttime" className='form-label'>Messages</label>
            <textarea className='form-control' cols="50" row="50"
            {...register('message', { required: 'Message is required' })}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            
            
            
            ></textarea>
          </div>
          {errors.message && <span className='bg-primary text-dark fs-5 fst-italic'>{errors.message.message}</span>}
        </div>
        






        <div className='col-6 col-md-4'>
          <div className='mb-3'>

          <button>
        <div className="svg-wrapper-1">
          <div className="svg-wrapper">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path
                fill="currentColor"
                d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
              />
            </svg>
          </div>
        </div>
        <span>Send</span>
      </button>
          
            
        
          </div>
        </div>






      </div>
      </form>
    </div>

    
    













       

    
     
    </section>
    

  )
}

export default Appointment;