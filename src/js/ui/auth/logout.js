export function onLogout() {
    localStorage.removeItem('accessToken');
    window.location.href = '/login.html';
}
