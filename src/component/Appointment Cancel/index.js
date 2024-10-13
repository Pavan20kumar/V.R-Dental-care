import { useState } from 'react'
import { Link } from 'react-router-dom';
import './cancel.css'

function AppointmentCancel() {
    const [appointment, setAppointment] = useState([]);
    const [searchValue, setSearchValue] = useState('');




    const oncancel = (id) => {
        fetch(`https://sheetdb.io/api/v1/pe52vd9b9m9ex/id/${id}`, {
            method: 'DELETE',
        })
            .then(response => response.json())
            .then(data => {
                setAppointment(appointment.filter(item => item.id !== id));
            })
            .catch(error => console.error('Error:', error));



        //send email cancel appointment


        fetch('https://v-r-dental-backend.onrender.com/cancel', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({


                email: appointment.find(item => item.id === id).email,
                name: appointment.find(item => item.id === id).name,
                appointmentDate: appointment.find(item => item.id === id).appointmentDate,
                appointmentTime: appointment.find(item => item.id === id).appointmentTime,
                message: 'appointment date is cancelled ',

            }),
        })
            .then(response => response)
            .then(data => {
                console.log('Success:', data);
                alert('Appointment canceled successfully!');

            })
            .catch((error) => {
                console.error('Error:', error);
                alert('Failed to cancel appointment.');

            });
























    }

    //search fetch
    const onSubmit = (e) => {
        e.preventDefault();
        setSearchValue('');
        fetch(`https://sheetdb.io/api/v1/pe52vd9b9m9ex/search?name=${searchValue}`)
            .then(response => response.json())
            .then(data => setAppointment(data))
            .catch(error => console.error('Error:', error));



    }



















    return (
        <div>
            <form onSubmit={onSubmit}>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12 mt-3'>
                            <label htmlFor="search" className='form-label'>Search Name</label>
                            <input type="text" className='form-control' placeholder='Search Name' onChange={(e) => setSearchValue(e.target.value)} />
                        </div>
                        <div className='col-12'>
                            <button className='btn btn-primary mt-3'>Search</button>
                        </div>
                    </div>'
                </div>
            </form>

            <div className='mt-2'>
                {appointment.map((item) => (
                    <div key={item.id} className='card mb-3'>
                        <div className="user-details-container">
                            <div className="user-details-card">
                                <div className="user-info">

                                    <h5>Name:{item.name}</h5>
                                    <p><strong>Age:</strong> {item.age}</p>
                                    <p><strong>Email:</strong> {item.email}</p>
                                    <p><strong>Phone:</strong> {item.phoneNumber}</p>
                                    <p><strong>address:</strong> {item.address}</p>
                                </div>
                                <div className="user-bio">
                                    <h3 className='mb-3 mt-1 text-primary fst-italic'>Appointment</h3>
                                    
                                    <p><strong>Date:</strong> {item.appointmentDate}</p>
                                    <p><strong>Time:</strong> {item.appointmentTime}{item.time}</p>
                                    <p><strong>Message:</strong> {item.message}</p>
                                </div>
                                <div className="user-actions">
                                    <h3>Actions</h3>
                                    <button className='btn btn-danger me-3' onClick={() => oncancel(item.id)}>Cancel</button>
                                    <Link to={`/edit/${item.id}`} className='btn btn-primary'>Edit</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>


        </div>

    )
}
export default AppointmentCancel;

