import React, { useRef, useState, useEffect } from 'react';


function ShortApplication() {
    const nextRef = useRef(null);

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        loanOfficer: '',
        coBorrower: '',
        eveningPhone: '',
        workPhone: '',
        contactPreference: '',
        creditRating: '',
        propertyAddress: '',
        City: '',
        state: '',
        zipCode: '',
        loanPurpose: '',
        propertyWillBe: '',
        estimatedValue: '',
        _id: '',
        subject: 'Short Application: '

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

        const scriptURL = "https://script.google.com/macros/s/AKfycbzX3jkt71QZ4ZGZ8GCZ0O-A1rHUCMslLbZujhqujqNrUO3jqq6yYapcIRjLfHJ9spYg/exec"; // Replace with your Web App URL

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
        <div className='quickQuoteformParent'>
            <div className='quickQuoteformBox'>
                <h3 className='quickQuoteformheading'>Short Application</h3>
                <form className='quickQuoteform' target="_self" action="https://formsubmit.co/rajanaresh.p@gmail.com" method="POST" onSubmit={updateSubjectContactUs}>


                    <input type="hidden" name="_subject" id="subject" value={formData.subject + formData.firstName + ' ' + formData.lastName} />
                    <input type="hidden" name="id" value={formData._id} />
                    <input type="hidden" name="_template" value="table" />
                    <input type="hidden" name="_next" ref={nextRef} value="https://google.com" />
                    <input type="hidden" name="_captcha" value="false" />



                    <label>
                        First Name*:
                        <br /><input className='quickQuoteformInput'
                            type="text"
                            id='firstName'
                            name="firstName"
                            placeholder="Provide your first name"
                            value={formData.firstName}
                            onChange={handleChange}
                            autocomplete="true"
                            required
                        />
                    </label>

                    <label>
                        Last Name*:
                        <br /><input className='quickQuoteformInput'
                            type="text"
                            id='lastName'
                            name="lastName"
                            placeholder="Provide your last name"
                            value={formData.lastName}
                            onChange={handleChange}
                            autocomplete="true"
                            required
                        />
                    </label>

                    <label>
                        Email Address*:
                        <br /><input className='quickQuoteformInput'
                            type="email"
                            id='email'
                            name="email"
                            placeholder="Enter your Email"
                            value={formData.email}
                            onChange={handleChange}
                            autocomplete="true"
                            required
                        />
                    </label>

                    <label>
                        Loan Officer:
                        <br /><select className='quickQuoteformSelect'
                            id='loanOfficer'
                            name="loanOfficer"
                            value={formData.loanOfficer}
                            onChange={handleChange}
                        >
                            <option value="" disabled>-Please Select-</option>
                            <option value="Sri Annapareddy">Sri Annapareddy</option>
                            {/* {[...Array(10)].map((_, i) => (
                                <option key={i} value={`Loan Officer ${i + 1}`}>
                                    Loan Officer {i + 1}
                                </option>
                            ))} */}
                        </select>
                    </label>

                    <label>
                        Is there a Co-Borrower?*:
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
                    </label>

                    <label>
                        Evening Phone*:
                        <br /><input className='quickQuoteformInput'
                            type="tel"
                            id='eveningPhone'
                            name="eveningPhone"
                            placeholder="Provide your Phone#"
                            value={formData.eveningPhone}
                            onChange={handleChange}
                            maxlength="10" minlength="10" pattern="[0-9]*" inputmode="numeric" autocomplete="true"
                            required
                        />
                    </label>

                    <label>
                        Work Phone:
                        <br /><input className='quickQuoteformInput'
                            type="tel"
                            id='workPhone'
                            name="workPhone"
                            placeholder="Provide your work phone"
                            value={formData.workPhone}
                            onChange={handleChange}
                            maxlength="10" minlength="10" pattern="[0-9]*" inputmode="numeric" autocomplete="true"
                        />
                    </label>

                    <label>
                        How Would You Prefer to be contacted:
                        <br /><select className='quickQuoteformSelect'
                            id='contactPreference'
                            name="contactPreference"
                            value={formData.contactPreference}
                            onChange={handleChange}
                        >
                            <option value="" disabled>-Please Select-</option>
                            <option value="Evening Phone">Evening Phone</option>
                            <option value="Work Phone">Work Phone</option>
                            <option value="Email">Email</option>
                        </select>
                    </label>

                    <label>
                        My / Our Credit is:
                        <br /><select className='quickQuoteformSelect'
                            id='creditRating'
                            name="creditRating"
                            value={formData.creditRating}
                            onChange={handleChange}
                        >
                            <option value="" disabled>-Please Select-</option>
                            <option value="Very Good">Very Good</option>
                            <option value="Good">Good</option>
                            <option value="Some Problems">Some Problems</option>
                            <option value="Major Problems">Major Problems</option>
                            <option value="I'm not sure">I'm not sure</option>
                        </select>
                    </label>

                    <h3>Loan and Property Info</h3>
                    <div className='quickQuoteformLoanBox'>
                        <label>
                            Property Address:
                            <br /><input className='quickQuoteformInput'
                                type="text"
                                id='propertyAddress'
                                name="propertyAddress"
                                placeholder="Enter a location"
                                value={formData.propertyAddress}
                                onChange={handleChange}
                                autocomplete="true"
                            />
                        </label>

                        <label>
                            City:
                            <br /><input className='quickQuoteformInput'
                                type="text"
                                id='City'
                                name="City"
                                placeholder="Enter city"
                                value={formData.City}
                                onChange={handleChange}
                                autocomplete="true"
                            />
                        </label>

                        <label>
                            State:
                            <br /><select className='quickQuoteformSelect'
                                id='state'
                                name="state"
                                value={formData.state}
                                onChange={handleChange}
                            >
                                <option value="" disabled>-Please Select-</option>
                                {/* List of US states */}
                                {[
                                    'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado',
                                    'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho',
                                    'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana',
                                    'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota',
                                    'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada',
                                    'New Hampshire', 'New Jersey', 'New Mexico', 'New York',
                                    'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon',
                                    'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota',
                                    'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington',
                                    'West Virginia', 'Wisconsin', 'Wyoming'
                                ].map((state) => (
                                    <option key={state} value={state}>
                                        {state}
                                    </option>
                                ))}
                            </select>
                        </label>

                        <label>
                            ZIP Code:
                            <br /><input className='quickQuoteformInput'
                                type="text"
                                id='zipCode'
                                name="zipCode"
                                placeholder="Enter your location ZIP Code"
                                value={formData.zipCode}
                                onChange={handleChange}
                                maxlength="6" minlength="5" pattern="[0-9]*" inputmode="numeric" autocomplete="true"
                                required
                            />
                        </label>

                        <label>
                            Purpose of Loan*:
                            <br /><select className='quickQuoteformSelect'
                                id='loanPurpose'
                                name="loanPurpose"
                                value={formData.loanPurpose}
                                onChange={handleChange}
                                required
                            >
                                <option value="" disabled>-Please Select-</option>
                                <option value="Purchase">Purchase</option>
                                <option value="Refinance">Refinance</option>
                                <option value="Construction">Construction</option>
                                <option value="Construction - Permanent">Construction - Permanent</option>
                                <option value="Other">Other</option>
                            </select>
                        </label>

                        <label>
                            Property Will Be*:
                            <br /><select className='quickQuoteformSelect'
                                id='propertyWillBe'
                                name="propertyWillBe"
                                value={formData.propertyWillBe}
                                onChange={handleChange}
                                required
                            >
                                <option value="" disabled >-Please Select-</option>
                                <option value="Primary Residence">Primary Residence</option>
                                <option value="Secondary Residence">Secondary Residence</option>
                                <option value="Investment Property">Investment Property</option>
                            </select>
                        </label>

                        <label>
                            Purchase Price (or Estimated Value):
                            <br /><input className='quickQuoteformInput'
                                type="text"
                                id='estimatedValue'
                                name="estimatedValue"
                                placeholder="$"
                                value={formData.estimatedValue}
                                onChange={handleChange}
                                autocomplete="true"
                            />
                        </label>
                    </div>
                    <div className='quickQuoteButtonBox'>
                        <button type="submit" className='quickQuoteButton'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ShortApplication;
