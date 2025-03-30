import React, { useRef, useState, useEffect } from 'react';

function FreeQuoteForm({ officerName }) {
    const nextRef = useRef(null);

    const [formData, setFormData] = useState({
        officerName: officerName || '',
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
        _id: '',
        subject: 'FreeQuote Form: '
    });

    const [isLoading, setIsLoading] = useState(false);

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

    function handleChange(event) {
        const { name, value } = event.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    }

    function updateSubjectContactUs(event) {
        event.preventDefault();
        setIsLoading(true); // Set loading state to true

        const data = new FormData();
        for (const key in formData) {
            data.append(key, formData[key]);
        }

        const scriptURL = "https://script.google.com/macros/s/AKfycbzzm47DeF3lI0FD2zye3Fu9wbph7H3i1oAwyUSMwe2EWjtwyPNEf_xPZsG--VFpF8mn/exec";

        fetch(scriptURL, {
            method: 'POST',
            body: data,
        })
            .then(response => {
                if (response.ok) {
                    // alert("Your application has been received successfully, and an email has been sent!");
                    window.location.reload();
                } else {
                    // alert("There was a problem submitting your application. Please try again.");
                }
            })
            .catch(error => {
                console.error("Error!", error.message);
                // alert("An error occurred while submitting your application.");
            })
            .finally(() => {
                setIsLoading(false); // Reset loading state
            });
    }

    return (
        <div className='purchaseBottomRightBox contactUsBottomRightBox FreeQuoteBox'>
            <span className='purchaseBottomRightHeading'>I’d be delighted to hear from you</span>
            <span className='purchaseBottomRightContent'>Kindly complete the form below.</span>
            <form
                className={`purchaseBottomRightform ${isLoading ? 'loading' : ''}`}
                onSubmit={updateSubjectContactUs}
            >
                <input type="hidden" name="_subject" id="subject" value={formData.subject + formData.firstName + formData.lastName} />
                <input type="hidden" name="id" value={formData._id} />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_next" ref={nextRef} value="https://google.com" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="officerName" value={formData.officerName} />

                <input type='text' placeholder='FIRST NAME:' id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} autoComplete="true" required />
                <input type='text' placeholder='LAST NAME:' id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} autoComplete="true" required />
                <input type='email' placeholder='EMAIL:' id="email" name="email" value={formData.email} onChange={handleChange} autoComplete="true" required />
                <input type='tel' placeholder='PHONE:' id="phone" name="phone" value={formData.phone} onChange={handleChange} maxLength="10" minLength="10" pattern="[0-9]*" inputMode="numeric" autoComplete="true" required />
                <textarea cols="auto" rows="5" placeholder='MESSAGE:' id="message" name="message" value={formData.message} onChange={handleChange} autoComplete="true" required></textarea>

                <button type='submit' disabled={isLoading}>
                    {isLoading ? 'Submitting...' : 'SUBMIT'}
                </button>
            </form>
        </div>
    );
}

export default FreeQuoteForm;
