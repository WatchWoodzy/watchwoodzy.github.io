document.querySelector('form').addEventListener('submit', e => {
    e.preventDefault();
  
    // Get the form data
    const formData = new FormData(e.target);
  
    // Send the form data to the server
    fetch('/send-email.php', {
      method: 'POST',
      body: formData
    })
      .then(response => response.json())
      .then(data => {
        // Handle the response from the server
        if (data.success) {
          // The email was sent successfully
          console.log('Email sent successfully');
        } else {
          // There was an error sending the email
          console.error('Error sending email:', data.error);
        }
      })
      .catch(error => {
        // There was an error with the fetch request
        console.error('Error with fetch request:', error);
      });
  });
  