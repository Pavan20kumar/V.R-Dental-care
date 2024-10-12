
import React from'react';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { useParams } from 'react-router-dom';














const AppointmentUpdate = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [appointmentDate , setAppointmentDate] = useState('');
  const [appointmentTime, setAppointmentTime] = useState('');
  const [message, setMessage] = useState('');
 const [time, setTime] = useState('');
 const [age, setAge] = useState('');
 const [address, setAddress] = useState('');
 const {id} = useParams();
  



  


  const onSubmit = () => {
  




  const data = {
    name : name,
    email : email,
    phoneNumber : phoneNumber,
    appointmentDate : appointmentDate,
    appointmentTime : appointmentTime,
    message : message,
    time : time,
    age : age,
    address : address,

  
  }

 //update
  fetch(`https://sheetdb.io/api/v1/h9ubq2i3igtzg/id/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  .then(response => response)
  .then(data => {
    console.log('Success:', data);
    alert('Appointment Updated Successfully');
    window.location.replace('/cancel');
    setName('');
    setEmail('');
    setPhoneNumber('');
    setAppointmentDate('');
    setAppointmentTime('');
    setMessage('');
    setTime('');
    setAge('');


  })
  .catch((error) => {
    console.error('Error:', error);
    alert('Failed to Update Appointment');
  });


  //send email 

  const sendEmail ={
    email: email,
    name: name,
    appointmentDate: appointmentDate,
    appointmentTime: appointmentTime,
        message: message,
        time: time,
        address:address
        





  }



  fetch('https://v-r-dental-backend.onrender.com/edit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(sendEmail),
  })
  .then(response => response)
  .then(data => {
    console.log('Success:', data);
    
    
  })
  .catch((error) => {
    console.error('Error:', error);
   

  });


 


    






  
 




  




  



























 
    
  


    
    
   
    
    
  }











  return(
  
    <section className='book-appointment mt-5' id='Appointment'>
    <div className=" fst-italic text-white">
      <h2>Booking Appointment Update</h2>
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
            <label htmlFor="age" className='form-label'>Age</label>
            <input type="number" className='form-control'  id="age"

{...register('age', {
  required: 'age is required',
  pattern: {
    value: /^\d{2}$/,
    message: 'Invalid phone number',
  },
})}
value={age}
onChange={(e) => setAge(e.target.value)}
            
            
            
            />
          </div>
          {errors.age && <span className='bg-primary text-dark fs-5 fst-italic'>{errors.age.message}</span>}
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
            <label htmlFor="address" className='form-label'>Address</label>
            <textarea className='form-control' cols="50" row="50"
            {...register('address', { required: 'Address is required' })}
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            
            
            
            ></textarea>
          </div>
          {errors.address && <span className='bg-primary text-dark fs-5 fst-italic'>{errors.address.message}</span>}
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
            <label htmlFor='Select Am/pm' className='form-label'>Select Am/pm</label>
            <select className='form-select' id='Select Am/pm'
            {...register('time', { required: 'Select Am/pm' })}
            value={time}
            onChange={(e) => setTime(e.target.value)}
            >
              <option value="Select Am/pm">Select Am/pm</option>
              <option value="Pm">pm</option>
              <option value="Am" select>Am</option>
              
            </select>
          </div>
        </div>











        
        
        



        
        


        <div className='col-6 col-md-4'>
          <div className='mb-3'>
            <label htmlFor="appointmenttime" className='form-label'>Messages</label>
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

          <button className='btn-send'>
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

export default AppointmentUpdate;