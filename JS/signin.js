function signIn() {
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;
  
    const storedCredentials = JSON.parse(localStorage.getItem('credentials')) || [];
  
    const foundCredentials = storedCredentials.find(cred => cred.username === username && cred.password === password);
  
    if (foundCredentials) {
        window.location.href = 'home.html';
      alert('Login successful!');
      // Redirect to another page after successful login
    } else {
      alert('Invalid credentials. Please try again.');
    }
  }
  