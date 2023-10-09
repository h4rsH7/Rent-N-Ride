document.getElementById('carRentalForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission behavior
  
    const selectedLocation = document.getElementById('location').value;
  
    // Define the URLs for redirection based on the selected location
    let redirectUrl;
    if (selectedLocation === 'Vadodara') {
      redirectUrl = 'html/12.html';
    } else if (selectedLocation === 'Ahmedabad') {
      redirectUrl = 'html/13.html';
    } else if (selectedLocation === 'Surat') {
      redirectUrl = 'html/15.html';
    } else if (selectedLocation === 'Rajkot') {
      redirectUrl = 'html/18.html';
    } else {
      alert('Please select a location.');
      return;
    }
  
    // Redirect to the appropriate page
    window.location.href = redirectUrl;
  });
  