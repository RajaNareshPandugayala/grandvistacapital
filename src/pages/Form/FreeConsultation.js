import React, { useRef, useState, useEffect } from 'react';


function FreeConsultation() {
    const nextRef = useRef(null);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        cellPhone: '',
        workPhone: '',
        zipCode: '',
        bestTimeToContact: '', // new field
        loanType: '', // new field
        _id: '', // new field
        subject: 'Free Consultation: '

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

        const scriptURL = "https://script.google.com/macros/s/AKfycbzXdGy2_UHCoEFKg_2tbMmPYVVCzUzFYxrouvrNXl4oG99VFF0XP9T6y6PkxKmdT5IeXw/exec"; // Replace with your Web App URL

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
            <span className='purchaseBottomRightHeading'>Get a Free Consultation</span>
            <span className='purchaseBottomRightContent'>Spend just 30 seconds filling out the form to receive a consultation at no cost. We will analyze your case and recommend the optimal solution.</span>
            <form className='purchaseBottomRightform' target="_self" action="https://formsubmit.co/rajanaresh.p@gmail.com" method="POST" onSubmit={updateSubjectContactUs}>
                {/* <form className='purchaseBottomRightform' target="_self" action="https://script.google.com/macros/s/AKfycbwH69jhSfylGiWHGAJTvZtjoUI-BaHnBcTXwqsP7ZGCOTcZJpcCpPzksViyw8z4mXs/exec" method="POST" onSubmit={updateSubjectContactUs}> */}

                <input type="hidden" name="_subject" id="subject" value={formData.subject + formData.name} />
                <input type="hidden" name="id" value={formData._id} />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_next" ref={nextRef} value="https://google.com" />
                <input type="hidden" name="_captcha" value="false" />
                {/* <input type="hidden" name="_autoresponse" value="Thank you for your submission! Our team will contact you soon." /> */}


                <input type='text' placeholder='NAME:' id="name"
                    name="name" value={formData.name} onChange={handleChange} autoComplete="true" required />

                <input type='tel' placeholder='CELL PHONE:' id="cellPhone" name="cellPhone" value={formData.cellPhone} onChange={handleChange} maxLength="10" minLength="10" pattern="[0-9]*" inputMode="numeric" autoComplete="true" required />

                <input type='tel' placeholder='WORK PHONE:' id="workPhone" name="workPhone" value={formData.workPhone} onChange={handleChange} maxLength="10" minLength="10" pattern="[0-9]*" inputMode="numeric" autoComplete="true" />

                <select id="bestTimeToContact" name="bestTimeToContact" value={formData.bestTimeToContact} onChange={handleChange} required >
                    <option value="" disabled>Best Time to Contact</option>
                    <option value="Morning time">Morning time</option>
                    <option value="Afternoon time">Afternoon time</option>
                    <option value="Evening time">Evening time</option>
                </select>

                <input type='email' placeholder='EMAIL:' id="email" name="email" value={formData.email} onChange={handleChange} autoComplete="true" required />

                <input type='tel' placeholder='ZIP CODE:' id="zipCode" name="zipCode" value={formData.zipCode} onChange={handleChange} maxLength="6" minLength="5" pattern="[0-9]*" inputMode="numeric" autoComplete="true" required />

                <select id="loanType" name="loanType" value={formData.loanType} onChange={handleChange} required >
                    <option value="" disabled>Choose Loan Type</option>
                    <option value="Refinance"> Refinance</option>
                    <option value="Home Purchase">Home Purchase</option>
                    <option value="Home Equity">Home Equity</option>
                    <option value="Debt Consolidation">Debt Consolidation</option>
                    <option value="Home Improvement">Home Improvement</option>
                    <option value="FHA/VA - Purchase">FHA/VA - Purchase</option>
                    <option value="FHA/VA - Refinance">FHA/VA - Refinance</option>
                    <option value="Construction Loans">Construction Loans</option>
                </select>
                <button type='submit'>SUBMIT</button>
            </form>
        </div>
    );
}

export default FreeConsultation;
