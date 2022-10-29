import React, { useState } from "react";
import { validateEmail } from '../../assets/utils/helpers'

function ContactForm () {
    const [formState, setFormState] = useState({
        name:'', 
        email: '', 
        message:''
    });

    const [errorMessage, setErrorMessage] = useState('');
    // const { name, email, message } = formState;

    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid= validateEmail(e.target.value);
            if (!isValid) {
                setErrorMessage ('Your email is invalid!');
            } else {
                setErrorMessage('');
            } 
        } else {
                if (!e.target.value.length) {
                    setErrorMessage(`${e.target.name} is required.`);
                } else {
                    setErrorMessage('');
                }
            }
        }
        console.log('errorMessage', errorMessage);


    function handleSubmit(e) {
        e.preventDefault();
        if(!errorMessage) {
            setFormState({...formState, [e.target.name]:e.target.value })
            }
        console.log(formState);
    }

    return (
        <section className="contact">
            <h1>Contact Me</h1>
            {/* <form id="contact-form" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='name'>Name:</label>
                    <input className="my-1" type='text' name='name' defaultValue={formState.name} onBlur={handleChange}/>
                </div>
                <div>
                    <label htmlFor='email'>Email:</label>
                    <input className="my-1" type='email' name='email' defaultValue={formState.email} onBlur={handleChange}/>
                </div>
                <div>
                    <label htmlFor='message'>Message:</label>
                    <textarea name='message' rows="5" defaultValue={formState.message} onBlur={handleChange}/>
                </div>
                {errorMessage && (
                    <div>
                        <p className="error-text">{ errorMessage }</p>
                    </div>
                )}
                <button type='submit'>Submit</button>
            </form> */}
            <div>
                Email: sam.haberman@gmail.com
                </div>
                <div>
                Phone: (970) 379-4719
                </div>
           
        </section>
    )
}

export default ContactForm