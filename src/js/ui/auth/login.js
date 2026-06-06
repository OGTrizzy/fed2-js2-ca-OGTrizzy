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
        const accessToken = data.data.accessToken;
        const name = data.data.name;

        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('name', name);

        alert('Logged in successfully!');
        window.location.href = '/';

    } catch (error) {
        console.error('Login error:', error);
        alert('ui Login failed');
    }
}