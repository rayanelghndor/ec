document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  

    localStorage.setItem(username, JSON.stringify({ password, broductes: [] }));
  
    alert('Sign Up Successful! Please log in.');
    window.location.href = 'login.html';
})
  