import React, { useRef, useState, useEffect } from 'react';


function FreeReports() {
    const nextRef = useRef(null);

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        report01: '',
        report02: '',
        report03: '',
        _id: '',
        subject: 'Free Report: ',
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

        const scriptURL = "https://script.google.com/macros/s/AKfycbyuJPhZfze-ROb8WlkE6TBmqrrikz9Ux9tsNBPf88vAiGu_b7xZdxl-lbNFtjJedtK9hw/exec"; // Replace with your Web App URL

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
        <div className='purchaseBottomRightBox'>
            <span className='purchaseBottomRightHeading'>Get Your Free Report</span>
            <span className='purchaseBottomRightContent'>Fill out the form below, select the free report(s) you’re interested in, and they’ll be delivered to your email instantly.</span>
            <form className='purchaseBottomRightform' target="_self" action="https://formsubmit.co/rajanaresh.p@gmail.com" method="POST" onSubmit={updateSubjectContactUs} >

                <input type="hidden" name="_subject" id="subject" value={formData.subject + formData.firstName + " " + formData.lastName} />
                <input type="hidden" name="id" value={formData._id} />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_next" ref={nextRef} value="https://google.com" />
                <input type="hidden" name="_captcha" value="false" />



                <input type='text' placeholder='FIRST NAME:' id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} autoComplete="true" required />

                <input type='text' placeholder='LAST NAME:' id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} autoComplete="true" required />

                <input type='email' placeholder='EMAIL:' id="email" name="email" value={formData.email} onChange={handleChange} autoComplete="true" required />






                <b>Free Reports*</b>
                <label htmlFor="creditScore" className='freeReportscheckbox'>
                    <input type="checkbox" value="10 Secrets To Raising Your Credit Score" id="creditScore" name="report01" onChange={handleChange} /> 10 Secrets To Raising Your Credit Score
                </label>
                <label htmlFor="bestPrice" className='freeReportscheckbox'>
                    <input type="checkbox" value="How To Get The Best Price On Your Real Estate Purchase" id="bestPrice" name="report02" onChange={handleChange} /> How To Get The Best Price On Your Real Estate Purchase
                </label>
                <label htmlFor="reduceDebt" className='freeReportscheckbox'>
                    <input type="checkbox" value="Tips To Reduce Debt" id="reduceDebt" name="report03" onChange={handleChange} /> Tips To Reduce Debt
                </label>
                <br />

                <button className='freeReportsBottomButton' type='submit'>SUBMIT</button>
            </form>
        </div>
    );
}

export default FreeReports;
