document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    const user = JSON.parse(localStorage.getItem(username));
  
    if (user && user.password === password) {
      localStorage.setItem('currentUser', username);
      window.location.href = 'index.html';
    } else {
      alert('Invalid username or password!');
    }
  });
  