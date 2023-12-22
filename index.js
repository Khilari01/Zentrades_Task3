function login() {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    // Email validation
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(username)) {
        alert('Please enter a valid email address.');
        return;
    }

    // Password validation
    var passwordRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d@]{8,}$/;
    if (!passwordRegex.test(password)) {
        alert('Password must contain an uppercase letter, a number, and be at least 8 characters long.');
        return;
    }

    // You can add your login logic here
    alert('Login successful!');
    location.reload();
}