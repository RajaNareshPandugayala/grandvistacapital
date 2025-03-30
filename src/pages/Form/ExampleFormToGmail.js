import React, { useEffect, useRef, useState } from 'react';

function ExampleFormSubmitForReference() {
    const nextRef = useRef(null);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        city: '',
        message: '',
        subject: 'Test Mail: ',
        bestTimeToContact: '',
        zipCode: '',
        loanType: '',
        coBorrower: '',
        report01: '',
        report02: '',
        report03: ''
    });

    function updateSubjectContactUs(event) {
        event.preventDefault();

        const { name } = formData;

        setFormData(prevData => ({
            ...prevData,
            subject: `Test Mail: ${name}`
        }));

        alert("Your request has been sent successfully!");

        const currentUrl = window.location.href;
        nextRef.current.value = currentUrl;

        // Submit form manually if desired
        event.target.submit();
    }

    function handleChange(event) {
        const { name, value } = event.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    }

    return (
        <div className='Example_Form' style={{ display: "flex", width: "50%", flexDirection: "column", padding: "50px 0px", alignItems: "center", justifyContent: "center" }}>
            <h1>With-Out ID</h1><br />
            <form style={{ display: "flex", width: "45%", flexDirection: "column", gap: "10px" }}
                className="box01_right_contact_us-form"
                target="_self"
                action="https://formsubmit.co/rajanaresh.p@gmail.com"
                method="POST"
                onSubmit={updateSubjectContactUs}
            >
                <input type="hidden" name="_subject" id="subject" value={formData.subject + formData.name} />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_next" ref={nextRef} value="https://google.com" />
                <input type="hidden" name="_captcha" value="false" />



                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    placeholder="Full Name"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    autoComplete="true"
                    required
                />

                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    placeholder="Email Address"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    autoComplete="true"
                    required
                />

                <label htmlFor="phone">Phone</label>
                <input
                    type="tel"
                    placeholder="PHONE:"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    maxLength="10"
                    minLength="10"
                    pattern="[0-9]*"
                    inputMode="numeric"
                    autoComplete="true"
                    required
                />

                <label htmlFor="city">City</label>
                <input
                    type="text"
                    placeholder="CITY:"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    autoComplete="true"
                    required
                />

                <label htmlFor="message">Message</label>
                <textarea
                    rows="10"
                    placeholder="QUESTION OR COMMENT:"
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="bestTimeToContact">Best Time to Contact</label>
                <select
                    id="bestTimeToContact"
                    name="bestTimeToContact"
                    value={formData.bestTimeToContact}
                    onChange={handleChange}
                    required
                >
                    <option value="" disabled>Best Time to Contact</option>
                    <option value="Morning time">Morning time</option>
                    <option value="Afternoon time">Afternoon time</option>
                    <option value="Evening time">Evening time</option>
                </select>

                <label htmlFor="zipCode">zip code</label>
                <input type='tel' placeholder='ZIP CODE:' id="zipCode" name="zipCode" value={formData.zipCode} onChange={handleChange} maxLength="6" minLength="5" pattern="[0-9]*" inputMode="numeric" autoComplete="true" required />

                <label htmlFor="loanType">Loan Type</label>
                <select
                    id="loanType"
                    name="loanType"
                    value={formData.loanType}
                    onChange={handleChange}
                    required
                >
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


                <label>Is there a Co-Borrower?*:</label>
                <div>
                    <label>
                        <input
                            type="radio"
                            name="coBorrower"
                            value="Yes"
                            checked={formData.coBorrower === 'Yes'}
                            onChange={handleChange}
                            required
                        /> Yes
                    </label>
                    <br />
                    <label>
                        <input
                            type="radio"
                            name="coBorrower"
                            value="No"
                            checked={formData.coBorrower === 'No'}
                            onChange={handleChange}
                        /> No
                    </label>
                </div>



                <button className="contact_us_now_button" type="submit">Contact Us Now</button>
            </form>
        </div>
    );
}

export default ExampleFormSubmitForReference;





















function ExampleFormSubmitForReferenceID() {
    const nextRef = useRef(null);

    const [formData, setFormData] = useState({
        _id: '',
        name: '',
        email: '',
        phone: '',
        city: '',
        message: '',
        subject: 'Test Mail: ',
        bestTimeToContact: '',
        zipCode: '',
        loanType: '',
        coBorrower: '',
        report01: '',
        report02: '',
        report03: ''
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

        const scriptURL = "https://script.google.com/macros/s/AKfycbwFo8o5pwkRk0w-CvrFNyZw1mXavveCjJ_yEGVdwsbZbnU5sHfIpMAaRTCHekCEjME/exec"; // Replace with your Web App URL

        // Submit the form data to Google Apps Script
        fetch(scriptURL, {
            method: 'POST',
            body: data,
        })
            .then((response) => {
                if (response.ok) {
                    alert("Your application has been received successfully, and an email has been sent!");
                    window.location.reload();
                } else {
                    alert("There was a problem submitting your application. Please try again.");
                }
            })
            .catch((error) => {
                console.error("Error!", error.message);
                alert("An error occurred while submitting your application.");
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
        <div className='Example_Form' style={{ display: "flex", width: "50%", flexDirection: "column", padding: "50px 0px", alignItems: "center", justifyContent: "center" }}>
            <h1>With ID</h1><br />
            <form style={{ display: "flex", width: "45%", flexDirection: "column", gap: "10px" }}
                className="box01_right_contact_us-form"
                target="_self"
                action="https://formsubmit.co/rajanaresh.p@gmail.com"
                method="POST"
                onSubmit={updateSubjectContactUs}
            >
                {/* Subject with name */}
                <input type="hidden" name="_subject" value={formData.subject + formData.name + " - " + formData._id} />

                {/* New hidden input for _id */}
                <input type="hidden" name="id" value={formData._id} />

                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_next" ref={nextRef} value="https://google.com" />
                <input type="hidden" name="_captcha" value="false" />

                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    placeholder="Full Name"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    autoComplete="true"
                    required
                />

                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    placeholder="Email Address"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    autoComplete="true"
                    required
                />

                <label htmlFor="phone">Phone</label>
                <input
                    type="tel"
                    placeholder="PHONE:"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    maxLength="10"
                    minLength="10"
                    pattern="[0-9]*"
                    inputMode="numeric"
                    autoComplete="true"
                    required
                />

                <label htmlFor="city">City</label>
                <input
                    type="text"
                    placeholder="CITY:"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    autoComplete="true"
                    required
                />

                <label htmlFor="message">Message</label>
                <textarea
                    rows="10"
                    placeholder="QUESTION OR COMMENT:"
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="bestTimeToContact">Best Time to Contact</label>
                <select
                    id="bestTimeToContact"
                    name="bestTimeToContact"
                    value={formData.bestTimeToContact}
                    onChange={handleChange}
                    required
                >
                    <option value="" disabled>Best Time to Contact</option>
                    <option value="Morning time">Morning time</option>
                    <option value="Afternoon time">Afternoon time</option>
                    <option value="Evening time">Evening time</option>
                </select>

                <label htmlFor="zipCode">zip code</label>
                <input type='tel' placeholder='ZIP CODE:' id="zipCode" name="zipCode" value={formData.zipCode} onChange={handleChange} maxLength="6" minLength="5" pattern="[0-9]*" inputMode="numeric" autoComplete="true" required />

                <label htmlFor="loanType">Loan Type</label>
                <select
                    id="loanType"
                    name="loanType"
                    value={formData.loanType}
                    onChange={handleChange}
                    required
                >
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

                <b>Free Reports*</b>
                <label htmlFor="CreditScore" className='freeReportscheckbox'>
                    <input type="checkbox" value="10 Secrets To Raising Your Credit Score" id="CreditScore" name="report01" onChange={handleChange} /> 10 Secrets To Raising Your Credit Score
                </label>
                <label htmlFor="BestPrice" className='freeReportscheckbox'>
                    <input type="checkbox" value="How To Get The Best Price On Your Real Estate Purchase" id="BestPrice" name="report02" onChange={handleChange} /> How To Get The Best Price On Your Real Estate Purchase
                </label>
                <label htmlFor="ReduceDebt" className='freeReportscheckbox'>
                    <input type="checkbox" value="Tips To Reduce Debt" id="ReduceDebt" name="report03" onChange={handleChange} /> Tips To Reduce Debt
                </label>


                <label>Is there a Co-Borrower?*:</label>
                <div>
                    <label>
                        <input
                            type="radio"
                            name="coBorrower"
                            value="Yes"
                            checked={formData.coBorrower === 'Yes'}
                            onChange={handleChange}
                            required
                        /> Yes
                    </label>
                    <br />
                    <label>
                        <input
                            type="radio"
                            name="coBorrower"
                            value="No"
                            checked={formData.coBorrower === 'No'}
                            onChange={handleChange}
                        /> No
                    </label>
                </div>



                <button className="contact_us_now_button" type="submit">Contact Us Now</button>
            </form>
        </div>
    );
}

export { ExampleFormSubmitForReferenceID };
