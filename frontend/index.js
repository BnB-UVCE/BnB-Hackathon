const logregBox = document.querySelector('.logreg-box');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');

registerLink.addEventListener('click', () => {
    logregBox.classList.add('active');
});

loginLink.addEventListener('click', () => {
    logregBox.classList.remove('active');
});

// Form Submission for Login
const loginForm = document.querySelector('.form-box.login form');
loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const email = loginForm.querySelector('input[type="email"]').value;
    const password = loginForm.querySelector('input[type="password"]').value;
    
    try {
        const res = await fetch('http://localhost:5000/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });
        const data = await res.json();
        if (res.ok) {
            window.location.href = data.redirectUrl;
        } else {
            alert(data.message);
        }
    } catch (error) {
        alert('Error logging in');
    }
});

// Form Submission for Registration
const registerForm = document.querySelector('.form-box.register form');
registerForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const name = registerForm.querySelector('input[type="text"]').value;
    const email = registerForm.querySelector('input[type="email"]').value;
    const password = registerForm.querySelector('input[type="password"]').value;
    
    try {
        const res = await fetch('http://localhost:5000/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, password }),
        });
        const data = await res.json();
        if (res.ok) {
            alert('Registration successful');
        } else {
            alert(data.message);
        }
    } catch (error) {
        alert('Error registering');
    }
});
