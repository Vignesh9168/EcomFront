document.getElementById('loginButton').addEventListener('click', function() {
     window.location.href = 'Main.html'; 
    
    })// Navigate to login page });



document.getElementById('loginForm').addEventListener('submit', function(event) { 
    event.preventDefault();

    const username = document.getElementById('Name').value;
     const email = document.getElementById('email').value; 
     const password = document.getElementById('password').value;

     fetch('http://localhost:3000/register', {
       method: 'POST',
       headers: { 'Content-Type': 'application/json' }, 
      body: JSON.stringify({ username, email, password })
     })
     .then(response => response.json())
      .then(data =>      {
         console.log('Success:', data);
             if (data.error)      { 
                document.getElementById('error-msg').textContent = data.error; 
            } else { 
                document.getElementById('error-msg').textContent = 'User registered successfully!'; 
            } }) 
            .catch((error) => { 
                console.error('Error:', error); 
                document.getElementById('error-msg').textContent = 'An error occurred.';
                console.log(error)
             });
             });