import { onCreatePost } from "../../ui/post/create";
import { authGuard } from "../../utilities/authGuard";

authGuard();

const form = document.forms['create-post'];

form.addEventListener("submit", onCreatePost);
