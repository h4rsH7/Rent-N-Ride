function signUp() {
    const username = document.getElementById('signupUsername').value;
    const password = document.getElementById('signupPassword').value;
  
    let storedCredentials = JSON.parse(localStorage.getItem('credentials')) || [];
    storedCredentials.push({ username, password });
    localStorage.setItem('credentials', JSON.stringify(storedCredentials));
  
    window.location.href="index.html";
    alert('User registered successfully!');
  }