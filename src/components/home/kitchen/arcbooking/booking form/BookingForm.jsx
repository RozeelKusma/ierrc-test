import React from 'react'
import './bookingform.css'

const BookingForm = () => {
  return (
    <div className='form_main'>
        <div className="form_container">
            <label>Email: 

            <input type="email" className='booking_input' />
            </label>
            <label>Contact Number:
            <input type='number' className='booking_input'/>
            </label>
            <label>Address: 

            <input type="text" className='booking_input' />
            </label>


        </div>

    </div>
  )
}

export default BookingForm