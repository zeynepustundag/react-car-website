import React from 'react'

const ContactUs = () => {
  return (
    <div className='contact-usdiv'>
      <h1 className='contact-us-title'>Contact Us</h1>
      <form className='contact-form'>  {/* method='POST' */}
        <div className='contact-name'>
          <div className='contact-info'>
            <label>First Name</label>
            <input type="text" placeholder="enter your first name..." required />
          </div>
          <div className='contact-info'>
            <label>Last Name</label>
            <input type="text" placeholder="enter your last name..." required />
          </div>
        </div>
        <div className='contact-info'>
          <label>E-mail Adress</label>
          <input type="email" placeholder="enter your email adress..." required />
        </div>
        <div className='contact-info'>
          <label>Phone Number (Optional)</label>
          <input type="tel" placeholder="XXX XXX XXXX..." pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" />
        </div>
        <div className='contact-message'>
          <label>Your Message</label>
          <textarea placeholder="enter your message..." required></textarea>
        </div>
        <input className='contact-submit' type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default ContactUs