import React from 'react';
import ExampleFormSubmitForReference, { ExampleFormSubmitForReferenceID } from './ExampleFormToGmail';


function TeatingGmailFormPage() {
    return (
        <div className='TeatingGmailFormPage' style={{ display: "flex", width: "100%", alignItems: "center", justifyContent: "center" }}>
            <ExampleFormSubmitForReference />

            <ExampleFormSubmitForReferenceID />
        </div>
    )
};


export default TeatingGmailFormPage;
