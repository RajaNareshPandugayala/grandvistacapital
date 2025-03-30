import React, { useState, useEffect } from 'react';

function ChatBotPurchase() {
    const [purchasePrice] = useState(100000);
    const [downPaymentPercent] = useState(0);
    const [beforeTaxesAnnualHouseHoldIncome] = useState(0);
    const [currentStep, setCurrentStep] = useState(0);
    const [errorMessage, setErrorMessage] = useState('');

    const [formData, setFormData] = useState({
        zipCode: '',
        propertyType: '',
        firstTimeHomebuyer: '',
        stageOfTheProcess: '',
        purchasePrice: 100000,
        downPaymentPercent: 0,
        creditScore: '',
        beforeTaxesAnnualHouseHoldIncome: 0,
        employmentStatus: '',
        bankruptcy_ShortSale_or_foreclosure_in_the_last_3_years: '',
        showProofOfIncome: '',
        working_with_a_real_estate_agent: '',
        agentName: '',
        working_with_a_Loan_Officer: '',
        loanOfficerName: '',
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        _id: '',
        subject: 'Purchase ChartBot: '
    });

    // Generate custom _id
    useEffect(() => {
        const generateId = () => {
            const now = new Date();
            const year = now.getFullYear();
            const month = now.toLocaleString('en-US', { month: 'short' }).toUpperCase();
            const date = String(now.getDate()).padStart(2, '0');
            const day = now.toLocaleString('en-US', { weekday: 'short' }).toUpperCase();
            const hours = String(now.getHours()).padStart(2, '0');
            const minutes = String(now.getMinutes()).padStart(2, '0');
            const seconds = String(now.getSeconds()).padStart(2, '0');
            return `${year}${month}${date}${day}${hours}${minutes}${seconds}`;
        };

        setFormData(prevData => ({ ...prevData, _id: generateId() }));
    }, []);


    const handleNextStep = () => {
        const inputs = document.querySelectorAll('.ChartBotFormSpan.active input:invalid, .ChartBotFormSpan.active select:invalid');
        if (inputs.length > 0) {
            // alert('Please fill out all required fields!');
            setErrorMessage('*Please fill out all required fields!');
            return;
        }

        // Specifically check if loanOfficerName is selected before proceeding
        if (currentStep === 14 && !formData.loanOfficerName) {
            // alert('Please select a Loan Officer before proceeding.');
            setErrorMessage('*Please select a Loan Officer before proceeding.');
            return;
        }

        setErrorMessage('');
        setCurrentStep(prev => prev + 1);
    };


    // const handlePreviousStep = () => setCurrentStep(prev => (prev > 0 ? prev - 1 : 0));
    const handlePreviousStep = () => {
        setErrorMessage(''); // Clear the error message
        setCurrentStep(prev => (prev > 0 ? prev - 1 : 0));
    };

    // const handleLabelClick = () => handleNextStep();

    function handleSubmit(event) {
        event.preventDefault();

        const formElement = event.target;
        formElement.classList.add('submitting'); // Add loading class

        // Build the form data object
        const data = new FormData();
        for (const key in formData) {
            data.append(key, formData[key]);
        }

        const scriptURL = "https://script.google.com/macros/s/AKfycbz-PGiZ19Vl0sTTmrSGBhLQCkqhGM8GkkZshIXgUnvv3ETirMH5obXsTSpBHQ3OscTo_w/exec"; // Replace with your Web App URL

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


    const handleChange = (event) => {
        setErrorMessage(''); // Clear the error message
        const { name, value } = event.target;
        setFormData(prevData => ({ ...prevData, [name]: value }));
    };

    const handleRangeChange = (name, value) => {
        setFormData(prevData => ({ ...prevData, [name]: value }));
    };


    return (
        <div className='ChartBotPurchaseBox ChartBotBothBox'>
            <form className='ChartBotForm' target="_self" action="https://formsubmit.co/rajanaresh.p@gmail.com" method="POST" onSubmit={handleSubmit}>

                <input type="hidden" name="_subject" id="subject" value={formData.subject + formData.name} />
                <input type="hidden" name="id" value={formData._id} />
                <input type="hidden" name="_template" value="table" />
                {/* <input type="hidden" name="_next" ref={nextRef} value="https://google.com" /> */}
                <input type="hidden" name="_captcha" value="false" />


                <span className={`ChartBotFormSpan ${currentStep === 0 ? 'active' : ''}`}>
                    <label>
                        <h3 className='ChartBotFormSpan_H3Tag'>Get an Instant Home Buying Evaluation</h3>
                        <p className='ChartBotFormSpan_PTag'>Take our 30 second analysis to see if you qualify</p>
                        <input type='tel' placeholder='ZIP CODE:' id="zipCode" name="zipCode" value={formData.zipCode} onChange={handleChange} maxLength="6" minLength="5" pattern="[0-9]*" inputMode="numeric" autoComplete="true" required />
                    </label>
                    {errorMessage && <p className='error'>{errorMessage}</p>}
                    <span className='ChartBotForm_ContinueButton' onClick={handleNextStep}>Continue</span>
                </span>
                <span className={`ChartBotFormSpan ${currentStep === 1 ? 'active' : ''}`}>
                    <label>
                        <h3 className='ChartBotFormSpan_H3Tag'>What kind of property are you interested in?</h3>
                        <div className='ChartBotFormSpan_Div'> <label>     <input type="radio" name="propertyType" value="Single Family Home" checked={formData.propertyType === 'Single Family Home'} onChange={handleChange} onClick={handleNextStep} /> Single Family Home </label>
                            <label>     <input type="radio" name="propertyType" value="Condominium" checked={formData.propertyType === 'Condominium'} onChange={handleChange} onClick={handleNextStep} /> Condominium </label>
                            <label>     <input type="radio" name="propertyType" value="TownHouse" checked={formData.propertyType === 'TownHouse'} onChange={handleChange} onClick={handleNextStep} /> TownHouse </label>
                            <label>     <input type="radio" name="propertyType" value="Multi Family Unit" checked={formData.propertyType === 'Multi Family Unit'} onChange={handleChange} onClick={handleNextStep} /> Multi Family Unit </label>
                        </div>
                    </label>
                    <span className='ChartBotForm_GoBack' onClick={handlePreviousStep}>Go BACK</span>
                </span>
                <span className={`ChartBotFormSpan ${currentStep === 2 ? 'active' : ''}`}>
                    <label>
                        <h3 className='ChartBotFormSpan_H3Tag'>Is this your first time buying a home?</h3>
                        <div className='ChartBotFormSpan_Div'> <label>     <input type="radio" name="firstTimeHomebuyer" value="Yes" checked={formData.firstTimeHomebuyer === 'Yes'} onChange={handleChange} required onClick={handleNextStep} /> Yes </label>
                            <label>     <input type="radio" name="firstTimeHomebuyer" value="No" checked={formData.firstTimeHomebuyer === 'No'} onChange={handleChange} onClick={handleNextStep} /> No </label>
                        </div>
                    </label>
                    <span className='ChartBotForm_GoBack' onClick={handlePreviousStep}>Go BACK</span>
                </span>
                <span className={`ChartBotFormSpan ${currentStep === 3 ? 'active' : ''}`}>
                    <label>
                        <h3 className='ChartBotFormSpan_H3Tag'>Where are you currently in the home buying journey?</h3>
                        <div className='ChartBotFormSpan_Div'> <label>     <input type="radio" name="stageOfTheProcess" value="Signed a Purchase Agreement" checked={formData.stageOfTheProcess === 'Signed a Purchase Agreement'} onChange={handleChange} required onClick={handleNextStep} /> Signed a Purchase Agreement </label>
                            <label>     <input type="radio" name="stageOfTheProcess" value="I made an offer" checked={formData.stageOfTheProcess === 'I made an offer'} onChange={handleChange} onClick={handleNextStep} /> I made an offer </label>
                            <label>     <input type="radio" name="stageOfTheProcess" value="Buying in the next few months" checked={formData.stageOfTheProcess === 'Buying in the next few months'} onChange={handleChange} onClick={handleNextStep} /> Buying in the next few months </label>
                            <label>     <input type="radio" name="stageOfTheProcess" value="Researching what's out there" checked={formData.stageOfTheProcess === "Researching what's out there"} onChange={handleChange} onClick={handleNextStep} /> Researching what's out there </label>
                        </div>
                    </label>
                    <span className='ChartBotForm_GoBack' onClick={handlePreviousStep}>Go BACK</span>
                </span>
                <span className={`ChartBotFormSpan ${currentStep === 4 ? 'active' : ''}`}>
                    <label >
                        <h3 className='ChartBotFormSpan_H3Tag'>How much is the property you want to buy?</h3>
                        <p className='ChartBotFormSpan_PTag'>(estimate ok)</p>

                        <span>{`$ ${Number(formData.purchasePrice).toLocaleString()}`}</span>
                        <input type="range" min="100000" max="3000000" value={formData.purchasePrice || purchasePrice} onChange={(e) => handleRangeChange('purchasePrice', +e.target.value)} />
                    </label>
                    <span className='ChartBotForm_ContinueButton' onClick={handleNextStep}>Continue</span>
                    <span className='ChartBotForm_GoBack' onClick={handlePreviousStep}>Go BACK</span>
                </span>
                <span className={`ChartBotFormSpan ${currentStep === 5 ? 'active' : ''}`}>
                    <label>
                        <h3 className='ChartBotFormSpan_H3Tag'>What percentage of the purchase price do you plan to pay as a down payment?
                        </h3>
                        <p className='ChartBotFormSpan_PTag'>(estimate ok)</p>

                        <span>{`${Number(formData.downPaymentPercent).toLocaleString()}%`}</span>
                        <input type="range" min="0" max="50" value={formData.downPaymentPercent || downPaymentPercent} onChange={(e) => handleRangeChange('downPaymentPercent', +e.target.value)} />
                    </label>
                    <span className='ChartBotForm_ContinueButton' onClick={handleNextStep}>Continue</span>
                    <span className='ChartBotForm_GoBack' onClick={handlePreviousStep}>Go BACK</span>
                </span>
                <span className={`ChartBotFormSpan ${currentStep === 6 ? 'active' : ''}`}>
                    <label>
                        <h3 className='ChartBotFormSpan_H3Tag'>Can you provide your current credit score?</h3>
                        <div className='ChartBotFormSpan_Div'> <label>     <input type="radio" name="creditScore" value="Excellent 740+" checked={formData.creditScore === 'Excellent 740+'} onChange={handleChange} required onClick={handleNextStep} /> Excellent 740+ </label>
                            <label>     <input type="radio" name="creditScore" value="Very Good 700-739" checked={formData.creditScore === 'Very Good 700-739'} onChange={handleChange} onClick={handleNextStep} /> Very Good 700-739 </label>
                            <label>     <input type="radio" name="creditScore" value="Good 680-699" checked={formData.creditScore === 'Good 680-699'} onChange={handleChange} onClick={handleNextStep} /> Good 680-699 </label>
                            <label>     <input type="radio" name="creditScore" value="Some Issues 640-679" checked={formData.creditScore === "Some Issues 640-679"} onChange={handleChange} onClick={handleNextStep} /> Some Issues 640-679 </label>
                            <label>     <input type="radio" name="creditScore" value="Needs Work 639 and below" checked={formData.creditScore === "Needs Works 639 and below"} onChange={handleChange} onClick={handleNextStep} /> Needs Works 639 and below </label>
                        </div>
                    </label>
                    <span className='ChartBotForm_GoBack' onClick={handlePreviousStep}>Go BACK</span>
                </span>
                <span className={`ChartBotFormSpan ${currentStep === 7 ? 'active' : ''}`}>
                    <label>
                        <h3 className='ChartBotFormSpan_H3Tag'>What is your total annual household income before taxes?
                        </h3>
                        {/* <p className='ChartBotFormSpan_PTag'>don't include dogs they typically aren't big earners but we still love them :</p> */}

                        <span>{`$ ${Number(formData.beforeTaxesAnnualHouseHoldIncome).toLocaleString()}`}</span>
                        <input type="range" min="0" max="350000" value={formData.beforeTaxesAnnualHouseHoldIncome || beforeTaxesAnnualHouseHoldIncome} onChange={(e) => handleRangeChange('beforeTaxesAnnualHouseHoldIncome', +e.target.value)} />
                    </label>
                    <span className='ChartBotForm_ContinueButton' onClick={handleNextStep}>Continue</span>
                    <span className='ChartBotForm_GoBack' onClick={handlePreviousStep}>Go BACK</span>
                </span>
                <span className={`ChartBotFormSpan ${currentStep === 8 ? 'active' : ''}`}>
                    <label>
                        <h3 className='ChartBotFormSpan_H3Tag'>What is your current employment situation?</h3>
                        <div className='ChartBotFormSpan_Div'> <label>     <input type="radio" name="employmentStatus" value="Employed" checked={formData.employmentStatus === 'Employed'} onChange={handleChange} required onClick={handleNextStep} /> Employed </label>
                            <label>     <input type="radio" name="employmentStatus" value="Not Employed" checked={formData.employmentStatus === 'Not Employed'} onChange={handleChange} onClick={handleNextStep} /> Not Employed </label>
                            <label>     <input type="radio" name="employmentStatus" value="Self Employed" checked={formData.employmentStatus === 'Self Employed'} onChange={handleChange} onClick={handleNextStep} /> Self Employed </label>
                            <label>     <input type="radio" name="employmentStatus" value="Retired" checked={formData.employmentStatus === "Retired"} onChange={handleChange} onClick={handleNextStep} /> Retired </label>
                        </div>
                    </label>
                    <span className='ChartBotForm_GoBack' onClick={handlePreviousStep}>Go BACK</span>
                </span>
                <span className={`ChartBotFormSpan ${currentStep === 9 ? 'active' : ''}`}>
                    <label>
                        <h3 className='ChartBotFormSpan_H3Tag'>Bankruptcy, short sale, or foreclosure in the last 3 years?</h3>
                        <div className='ChartBotFormSpan_Div'> <label>     <input type="radio" name="bankruptcy_ShortSale_or_foreclosure_in_the_last_3_years" value="Yes" checked={formData.bankruptcy_ShortSale_or_foreclosure_in_the_last_3_years === 'Yes'} onChange={handleChange} required onClick={handleNextStep} /> Yes </label>
                            <label>     <input type="radio" name="bankruptcy_ShortSale_or_foreclosure_in_the_last_3_years" value="No" checked={formData.bankruptcy_ShortSale_or_foreclosure_in_the_last_3_years === 'No'} onChange={handleChange} onClick={handleNextStep} /> No </label>
                        </div>
                    </label>
                    <span className='ChartBotForm_GoBack' onClick={handlePreviousStep}>Go BACK</span>
                </span>
                <span className={`ChartBotFormSpan ${currentStep === 10 ? 'active' : ''}`}>
                    <label>
                        <h3 className='ChartBotFormSpan_H3Tag'>Are you able to provide proof of your income?</h3>
                        <div className='ChartBotFormSpan_Div'> <label>     <input type="radio" name="showProofOfIncome" value="Yes" checked={formData.showProofOfIncome === 'Yes'} onChange={handleChange} required onClick={handleNextStep} /> Yes </label>
                            <label>     <input type="radio" name="showProofOfIncome" value="No" checked={formData.showProofOfIncome === 'No'} onChange={handleChange} onClick={handleNextStep} /> No </label>
                        </div>
                    </label>
                    <span className='ChartBotForm_GoBack' onClick={handlePreviousStep}>Go BACK</span>
                </span>
                <span className={`ChartBotFormSpan ${currentStep === 11 ? 'active' : ''}`}>
                    <label>
                        <h3 className='ChartBotFormSpan_H3Tag'>Have you engaged a real estate agent for assistance?</h3>
                        <div className='ChartBotFormSpan_Div'>
                            <label>
                                <input type="radio" name="working_with_a_real_estate_agent" value="Yes" checked={formData.working_with_a_real_estate_agent === 'Yes'} onChange={handleChange} required onClick={handleNextStep} /> Yes </label>
                            <label>
                                <input type="radio" name="working_with_a_real_estate_agent" value="No" checked={formData.working_with_a_real_estate_agent === 'No'}
                                    onChange={handleChange}
                                    onClick={() => {
                                        if (formData.working_with_a_real_estate_agent === 'No') {
                                            setCurrentStep((prev) => (prev > 1 ? prev + 2 : 0)); // Go back two steps if "No".
                                        } else {
                                            setCurrentStep((prev) => (prev > 1 ? prev + 2 : 0)); // Go back one step otherwise.
                                        }
                                    }} /> No
                            </label>
                        </div>
                    </label>
                    <span className='ChartBotForm_GoBack' onClick={handlePreviousStep}>Go BACK</span>
                </span>
                <span className={`ChartBotFormSpan ${currentStep === 12 ? 'active' : ''}`}>
                    <label>
                        <h3 className='ChartBotFormSpan_H3Tag'>What is the name of your real estate agent?</h3>
                        <input type="text" id='agentName' name="agentName" placeholder="AGENT NAME"
                            value={formData.working_with_a_real_estate_agent === 'No' ? '' : formData.agentName}
                            onChange={(e) => {
                                // Only allow changes to agentName if working_with_a_real_estate_agent is not 'No'
                                if (formData.working_with_a_real_estate_agent !== 'No') {
                                    handleChange(e);
                                }
                            }}
                            autocomplete="true" required={formData.working_with_a_real_estate_agent === 'Yes'} />
                    </label>
                    {errorMessage && <p className='error'>{errorMessage}</p>}
                    <span className='ChartBotForm_ContinueButton' onClick={handleNextStep}>Continue</span>
                    <span className='ChartBotForm_GoBack' onClick={handlePreviousStep}>Go BACK</span>
                </span>
                <span className={`ChartBotFormSpan ${currentStep === 13 ? 'active' : ''}`}>
                    <label>
                        <h3 className='ChartBotFormSpan_H3Tag'>Do you have a loan officer you are working with?</h3>
                        <div className='ChartBotFormSpan_Div'> <label>     <input type="radio" name="working_with_a_Loan_Officer" value="Yes" checked={formData.working_with_a_Loan_Officer === 'Yes'} onChange={handleChange} required onClick={handleNextStep} /> Yes </label>
                            <label>     <input type="radio" name="working_with_a_Loan_Officer" value="No" checked={formData.working_with_a_Loan_Officer === 'No'} onChange={handleChange}
                                onClick={() => {
                                    if (formData.working_with_a_Loan_Officer === 'No') {
                                        setCurrentStep((prev) => (prev > 1 ? prev + 2 : 0)); // Go back two steps if "No".
                                    } else {
                                        setCurrentStep((prev) => (prev > 1 ? prev + 2 : 0)); // Go back one step otherwise.
                                    }
                                }} /> No </label>
                        </div>
                    </label>
                    <span className='ChartBotForm_GoBack'
                        onClick={() => {
                            if (formData.working_with_a_real_estate_agent === 'No') {
                                setCurrentStep((prev) => (prev > 1 ? prev - 2 : 0)); // Go back two steps if "No".
                            } else {
                                handlePreviousStep(); // Go back one step otherwise.
                            }
                        }}>Go BACK</span>
                </span>
                <span className={`ChartBotFormSpan ${currentStep === 14 ? 'active' : ''}`}>
                    <label>
                        <h3 className='ChartBotFormSpan_H3Tag'>Choose your loan officer.</h3>
                        <select id='loanOfficerName' name="loanOfficerName"
                            value={formData.working_with_a_Loan_Officer === 'No' ? '' : formData.loanOfficerName} // Conditional value
                            onChange={(e) => {
                                // Only allow selection if "Yes" is selected for working_with_a_Loan_Officer
                                if (formData.working_with_a_Loan_Officer !== 'No') {
                                    handleChange(e);
                                }
                            }}
                        >
                            <option value="" disabled>-Please Select-</option>
                            <option value="Sri Annapareddy">Sri Annapareddy</option>
                            {/* {[...Array(10)].map((_, i) => (<option key={i} value={`Loan Officer ${i + 1}`}> Loan Officer {i + 1}     </option>))} */}
                        </select>
                    </label>
                    {/* <label>
                        <h3 className='ChartBotFormSpan_H3Tag'>Loan Officer Name</h3>
                        <input type="text" id='loanOfficerName' name="loanOfficerName" placeholder="OFFICER NAME"
                            value={formData.working_with_a_Loan_Officer === 'No' ? '' : formData.loanOfficerName} // Conditional value
                            onChange={(e) => {
                                // Only allow selection if "Yes" is selected for working_with_a_Loan_Officer
                                if (formData.working_with_a_Loan_Officer !== 'No') {
                                    handleChange(e);
                                }
                            }}
                            autocomplete="true" required={formData.working_with_a_Loan_Officer === 'Yes'} />
                    </label> */}
                    {errorMessage && <p className='error'>{errorMessage}</p>}
                    <span className='ChartBotForm_ContinueButton' onClick={handleNextStep} disabled={!formData.loanOfficerName}>Continue</span>
                    <span className='ChartBotForm_GoBack' onClick={handlePreviousStep}>Go BACK</span>
                </span>
                <span className={`ChartBotFormSpan ${currentStep === 15 ? 'active' : ''}`}>
                    <label>
                        <h3 className='ChartBotFormSpan_H3Tag'>What is your first name?</h3>
                        <input type="text" id='firstName' name="firstName" placeholder="FIRST NAME" value={formData.firstName} onChange={handleChange} autocomplete="true" required />
                    </label>
                    {errorMessage && <p className='error'>{errorMessage}</p>}
                    <span className='ChartBotForm_ContinueButton' onClick={handleNextStep}>Continue</span>
                    <span className='ChartBotForm_GoBack'
                        onClick={() => {
                            if (formData.working_with_a_Loan_Officer === 'No') {
                                setCurrentStep((prev) => (prev > 1 ? prev - 2 : 0)); // Go back two steps if "No".
                            } else {
                                handlePreviousStep(); // Go back one step otherwise.
                            }
                        }}>Go BACK</span>
                </span>
                <span className={`ChartBotFormSpan ${currentStep === 16 ? 'active' : ''}`}>
                    <label>
                        <h3 className='ChartBotFormSpan_H3Tag'>What is your last name?</h3>
                        <input type="text" id='lastName' name="lastName" placeholder="LAST NAME" value={formData.lastName} onChange={handleChange} autocomplete="true" required />
                    </label>
                    {errorMessage && <p className='error'>{errorMessage}</p>}
                    <span className='ChartBotForm_ContinueButton' onClick={handleNextStep}>Continue</span>
                    <span className='ChartBotForm_GoBack' onClick={handlePreviousStep}>Go BACK</span>
                </span>
                <span className={`ChartBotFormSpan ${currentStep === 17 ? 'active' : ''}`}>
                    <label>
                        <h3 className='ChartBotFormSpan_H3Tag'>Could you provide your email address?</h3>
                        <input type="email" id='email' name="email" placeholder="YOUR Email" value={formData.email} onChange={handleChange} autocomplete="true" required />
                    </label>
                    {errorMessage && <p className='error'>{errorMessage}</p>}
                    <span className='ChartBotForm_ContinueButton' onClick={handleNextStep}>Continue</span>
                    <span className='ChartBotForm_GoBack' onClick={handlePreviousStep}>Go BACK</span>
                </span>
                <span className={`ChartBotFormSpan ${currentStep === 18 ? 'active' : ''}`}>
                    <label>
                        <h3 className='ChartBotFormSpan_H3Tag'>Please share your phone number.</h3>
                        <p className='ChartBotFormSpan_PTag'>By submitting you agree to receive SMS or e-mails for the provided channel. Rates may be applied.</p>
                        <input type="tel" id='phone' name="phone" placeholder="YOUR PHONE" value={formData.eveningPhone} onChange={handleChange} maxlength="10" minlength="10" pattern="[0-9]*" inputmode="numeric" autocomplete="true" required />
                    </label>
                    {errorMessage && <p className='error'>{errorMessage}</p>}
                    <button type='submit' className='ChartBotForm_ContinueButton' onClick={handleSubmit && handleNextStep}>SUBMIT</button>
                    <span className='ChartBotForm_GoBack' onClick={handlePreviousStep}>Go BACK</span>
                </span>
                {/* <span className='ChartBotFormSpanThankYou'> */}
                <span className={`ChartBotFormSpan ${currentStep === 19 ? 'active' : ''}`}>

                    <h1 className='ChartBotFormSpanThankYou_H1Tag'>Thank You for Reaching Out!</h1>
                    <i class="ri-check-double-line"></i>
                    <p className='ChartBotFormSpanThankYou_PTag'>Your inquiry has been submitted, and our team is currently evaluating your information. An expert will be reaching out shortly for a one-on-one consultation. For immediate assistance, please contact our mortgage experts directly at (513)-999-2324. We're eager to speak with you!</p>
                </span>
            </form>
        </div>
    );
}

export default ChatBotPurchase;
