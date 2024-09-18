import { login } from "../../api/auth/login.js";

export async function onLogin(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (!email || !password) {
        alert('Please enter both email and password');
        return;
    }

    try {
        const data = await login({ email, password }); 
        const accessToken = data.accessToken;

        localStorage.setItem('accessToken', accessToken);

        alert('Logged in successfully!');
        window.location.href = '/index.html';

    } catch (error) {
        console.error('Login error:', error);
        alert('Login failed');
    }
}