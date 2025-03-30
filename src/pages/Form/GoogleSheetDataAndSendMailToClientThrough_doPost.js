function doPost(e) {
    try {
        // Parse the form data
        var data = e.parameter;

        // Open the active spreadsheet and sheet
        var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

        // Append a new row with the form data
        sheet.appendRow([
            data.zipCode,
            data.propertyType,
            data.firstTimeHomebuyer,
            data.stageOfTheProcess,
            data.purchasePrice,
            data.downPaymentPercent,
            data.creditScore,
            data.beforeTaxesAnnualHouseHoldIncome,
            data.employmentStatus,
            data.bankruptcy_ShortSale_or_foreclosure_in_the_last_3_years,
            data.showProofOfIncome,
            data.working_with_a_real_estate_agent,
            data.agentName,
            data.working_with_a_Loan_Officer,
            data.loanOfficerName,
            data.firstName,
            data.lastName,
            data.email,
            data.phone,
            data._id,
        ]);

        // Read the last row of the sheet to get the submitted data
        var lastRow = sheet.getLastRow();
        var rowData = sheet.getRange(lastRow, 1, 1, sheet.getLastColumn()).getValues()[0];

        // Generate an HTML table from the row data
        var headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0]; // Assuming headers are in the first row
        var tableRows = headers.map((header, i) => {
            return `<tr><td><strong>${header}</strong></td><td>${rowData[i] || ''}</td></tr>`;
        }).join('');

        var tableHTML = `
            <table border="1" style="border-collapse: collapse; width: 100%;">
                <thead>
                    <tr>
                        <th style="text-align: left; background-color: yellow;">Field</th>
                        <th style="text-align: left; background-color: yellow;">Value</th>
                    </tr>
                </thead>
                <tbody>
                    ${tableRows}
                </tbody>
            </table>
        `;

        // Send an email notification with the table to the user's email
        var subject = "Purchase ChatBot Details Received Successfully";
        var body = `
            Dear ${data.firstName} ${data.lastName},

            Your application has been received successfully.

            Below are the details you submitted:
        `;

        var htmlBody = `
            <p>${body.replace(/\n/g, '<br>')}</p>
            ${tableHTML}
            <p>Thank you for your submission! You will be hearing from one of our representatives shortly.</p>
            <p>Sincerely,</p>
            <p>_____ Mortgage, LLC</p>
            <p><a href="https://www.###mtg.com/">https://www.###mtg.com/</a></p>
            <img src="https://via.placeholder.com/300?text=Congratulations+or+Successful" alt="Congratulations Image" />
        `;

        GmailApp.sendEmail(data.email, subject, body, { htmlBody: htmlBody });

        // Send the same email to your email "rajanaresh.p@gmail.com"
        var adminEmail = "rajanaresh.p@gmail.com";
        GmailApp.sendEmail(adminEmail, subject, body, { htmlBody: htmlBody });

        // Return a success response
        return ContentService.createTextOutput("Success").setMimeType(ContentService.MimeType.TEXT);
    } catch (error) {
        Logger.log("Error: " + error.message);
        return ContentService.createTextOutput("Error").setMimeType(ContentService.MimeType.TEXT);
    }
}
