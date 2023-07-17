import React, { useState } from 'react';
import validateEmail  from '../../utils/helpers';

export default function  Form() {
    const [name, setName] = useState('');
    const [email, setEmailAddress] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('')

    const handleInputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'name') {
            setName(inputValue);            
        }else if (inputType === 'emailAddress') {
            setEmailAddress(inputValue);
        }else {
            setMessage(inputValue);
        }
    };
    const handleFormSubmit = (e) => {
        e.preventDefault();

        if(!validateEmail(email)) {
            setErrorMessage('Please enter a valid email address');
            
            return;
        }

        setName('');
        setEmailAddress('');
        setMessage('');
    };
    // TODO: Make this look better!
  return (
    <div>
      <p>Hello {name}</p>
      <form className="form">

        <input 
        value={name}
        name="name"
        onChange={handleInputChange}
        type="name"
        placeholder="Name"
        />

        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="email"
        />
        
        <input
        className='message'
          value={message}
          name="message"
          onChange={handleInputChange}
          type="message"
          placeholder="Message"
        />
        <button type="button" onClick={handleFormSubmit}>Submit</button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}