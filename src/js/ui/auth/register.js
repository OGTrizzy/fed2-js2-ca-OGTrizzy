import { register } from "../../api/auth/register.js";

export async function onRegister(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;


    console.log({ name, email, password });


    if (!name || !email || !password) {
        alert("Please fill in required fields.");
        return;
    }

    try {
        const data = await register({ name, email, password });
        console.log(data)
        alert('Registration completed! You can now log in.');
        window.location.href = '../login/'
    } catch(error) {
        console.error('registration error:', error);
        alert(error.message);
    }
}