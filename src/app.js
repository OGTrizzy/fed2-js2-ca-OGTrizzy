import { onCreatePost } from "./js/ui/post/create.js";
import { onLogin } from '../src/js/ui/auth/login.js';
import router from "./js/router/index.js";
import 'bootstrap';

//import { getKey } from "./js/api/auth/key.js";

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

const createPostForm = document.forms['create-post'];
if (createPostForm) {
    createPostForm.addEventListener('submit', onCreatePost);
}

//window.addEventListener('load', async () => {
//    const name = "Tristian";
//    try {
//        const apiKey = await getKey(name);
//        localStorage.setItem('apiKey', apiKey)
//        console.log('api key saved!');
//    } catch (error) {
//        console.error('error getting api key:', error);
//    }
//});                         