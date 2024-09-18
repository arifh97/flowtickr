import React from 'react'

export default function Contact() {
  return (
    <div className='contact'>
      <div className="contact-wrap bg-white">
        <h3 className='text-center'>Contact Us</h3>
        <div className="form-box">
          <label htmlFor="#" className="form-label">Name</label>
          <input type="text" placeholder='Type here' className="form-control" />
        </div>
      </div>
    </div>
  )
}
