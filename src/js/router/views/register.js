import { onRegister } from "../../ui/auth/register";
import { register } from "../../api/auth/register";

register();

const form = document.forms.register;

form.addEventListener("submit", onRegister);
