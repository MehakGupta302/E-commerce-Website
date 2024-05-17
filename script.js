const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');


if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}
if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}

document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var errorMessage = document.getElementById('errorMessage');

    // Simple validation (In reality, you'd validate against a database)
    if (email === 'user@example.com' && password === 'password123') {
        alert('Login successful!');
        // Redirect to a different page or perform some actions
        window.location.href = 'dashboard.html';
    } else {
        errorMessage.textContent = 'Invalid email or password';
        errorMessage.style.display = 'block';
    }
});