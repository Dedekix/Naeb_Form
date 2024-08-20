document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('applicationForm');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formFields = [
                'companyName', 'licenseNumber', 'issuedDate', 'expirationDate',
                'exportVolume', 'participantName', 'phoneNumber'
            ];
            
            const formData = {};
            
            for (const field of formFields) {
                const element = document.getElementById(field);
                if (element) {
                    formData[field] = element.value;
                } else {
                    console.error(`Element with id "${field}" not found`);
                    alert(`Form field "${field}" is missing. Please check the form structure.`);
                    return;
                }
            }
            
            // Replace this URL with your Google Apps Script web app URL
            const scriptURL = 'https://script.google.com/macros/s/AKfycbxf7ZY9PL_pgBNSHnV3oZkQ3-mZEVKaH46RC212SHLd4SOkS54qv73y_EaEgMzUl21LWg/exec';
            
            fetch(scriptURL, {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            }).then(() => {
                alert('Application submitted successfully!');
                window.location.href = 'index.html?success=true';
            }).catch(error => {
                console.error('Error:', error);
                alert('An error occurred. Please try again.');
            });
        });
    } else {
        console.error('Form with id "applicationForm" not found');
    }
});