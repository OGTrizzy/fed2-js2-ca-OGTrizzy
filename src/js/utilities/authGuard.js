export function authGuard() {
  if (!localStorage.accessToken) {
    alert("You must be logged in to view this page");
    window.location.href = "/fed2-js2-ca-OGTrizzy/auth/login/";
  }
}
