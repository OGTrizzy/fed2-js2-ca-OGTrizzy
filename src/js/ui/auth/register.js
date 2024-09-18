export async function onRegister(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const bio = document.getElementById('bio').value; //optional
    const banner = document.getElementById('banner').value; //optional
    const avatar = document.getElementById('avatar').value; //optional

    if (!name || !email || !password) {
        alert("Please fill in required fields.");
        return;
    }

    try {
        const data = register({ name, email, password, bio, banner, avatar });
        console.log(data)
        alert('Registration completed! You can now log in.');
        windows.location.href = '../login/index.html'
    } catch(error) {
        console.error('registration error:', error);
        alert('registration failed, please try again');
    }
}
