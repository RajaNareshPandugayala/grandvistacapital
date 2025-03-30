import React, { useRef, useState, useEffect } from 'react';

function ContactForm() {
    const nextRef = useRef(null);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        city: '',
        message: '',
        _id: '',
        subject: 'Contact Form: '
    });

    // Function to generate the custom _id
    function generateId() {
        const now = new Date();
        const year = now.getFullYear();
        const month = now.toLocaleString('en-US', { month: 'short' }).toUpperCase();
        const date = String(now.getDate()).padStart(2, '0');
        const day = now.toLocaleString('en-US', { weekday: 'short' }).toUpperCase();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        return `${year}${month}${date}${day}${hours}${minutes}${seconds}`;
    }

    useEffect(() => {
        setFormData(prevData => ({
            ...prevData,
            _id: generateId()
        }));
    }, []);


    function updateSubjectContactUs(event) {
        event.preventDefault();

        const formElement = event.target;
        formElement.classList.add('submitting'); // Add loading class

        // Build the form data object
        const data = new FormData();
        for (const key in formData) {
            data.append(key, formData[key]);
        }

        const scriptURL = "https://script.google.com/macros/s/AKfycbx5cH5KYsqqJE6vMHKIIzbhhp0V4avu4B_1ZTgVUSBxoq5XIydWb5vAEh4Qr1cFmCfO/exec"; // Replace with your Web App URL

        // Submit the form data to Google Apps Script
        fetch(scriptURL, {
            method: 'POST',
            body: data,
        })
            .then((response) => {
                if (response.ok) {
                    // alert("Your application has been received successfully, and an email has been sent!");
                    window.location.reload();
                } else {
                    // alert("There was a problem submitting your application. Please try again.");
                }
            })
            .catch((error) => {
                console.error("Error!", error.message);
                // alert("An error occurred while submitting your application.");
            })
            .finally(() => {
                formElement.classList.remove('submitting'); // Remove loading class
            });
    }


    function handleChange(event) {
        const { name, value } = event.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    }
    return (
        <div className='purchaseBottomRightBox contactUsBottomRightBox'>
            <span className='purchaseBottomRightHeading'>Contact Information</span>
            <span className='purchaseBottomRightContent'>Complete this brief form to get in touch with us.</span>
            <form className='purchaseBottomRightform' target="_self" action="https://formsubmit.co/rajanaresh.p@gmail.com" method="POST" onSubmit={updateSubjectContactUs}>

                <input type="hidden" name="_subject" id="subject" value={formData.subject + formData.name} />
                <input type="hidden" name="id" value={formData._id} />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_next" ref={nextRef} value="https://google.com" />
                <input type="hidden" name="_captcha" value="false" />

                <input type='text' placeholder='NAME:' id="name" name="name" value={formData.name} onChange={handleChange} autocomplete="true" required />
                <input type='email' placeholder='EMAIL:' id="email" name="email" value={formData.email} onChange={handleChange} autocomplete="true" required />
                <input type='tel' placeholder='PHONE:' id="phone" name="phone" value={formData.phone} onChange={handleChange} maxlength="10" minlength="10" pattern="[0-9]*" inputmode="numeric" autocomplete="true" required />
                <input type='text' placeholder='CITY:' id="city" name="city" value={formData.city} onChange={handleChange} autoComplete="true" required />
                <textarea cols="auto" rows="10" placeholder='QUESTION OR COMMENT:' id="message" name="message" value={formData.message} onChange={handleChange} autoComplete="true" required></textarea>

                <button type='submit'>SUBMIT</button>
            </form>
        </div>
    );
}

export default ContactForm;
