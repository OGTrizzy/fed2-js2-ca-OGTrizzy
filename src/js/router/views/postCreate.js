import { onCreatePost } from "../../ui/post/create";
import { authGuard } from "../../utilities/authGuard";

authGuard();

const form = document.forms['create-post'];
if (form) {
    form.addEventListener("submit", onCreatePost);
} else {
    console.error('Form not found');
}
