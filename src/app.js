//import "../src/css/style.css"; this code dosnt work what so ever because of the @import url(_reset.css); in it

import { onLogin } from '../src/js/ui/auth/login.js';
import router from "./js/router/index.js";

window.addEventListener('load', () => {
    router(window.location.pathname); //call router with current path
});

window.addEventListener('popstate', () => {
    router(window.location.pathname);
});

const loginForm = document.forms['login'];
if (loginForm) {
    loginForm.addEventListener('submit', onLogin);
}
