import { readPost } from "../../api/post/read";
import { onUpdatePost } from "../../ui/post/update";
import { authGuard } from "../../utilities/authGuard";
import { onDeletePost } from "../../ui/post/delete";

authGuard();

const urlParams = new URLSearchParams(window.location.search);
const postId = urlParams.get("id");

async function fetchPost() {
    try {
        const post = await readPost(postId);
        if (post) {
            document.getElementById('post-title').value = post.title; 
            document.getElementById('post-body').value = post.body; 
            document.getElementById('post-tags').value = post.tags.join(', '); 
        } else {
            throw new Error('Post not found');
        }
    } catch (error) {
        console.error(error);
        document.getElementById('posts-container').innerText = 'Failed to load post.';
    }
}

document.addEventListener("DOMContentLoaded", fetchPost);

document.getElementById('delete-button').addEventListener('click', async () => {
    try {
        await onDeletePost(postId);
        alert('Post deleted successfully!');
        window.location.href = '/fed2-js2-ca-OGTrizzy/'; 
    } catch (error) {
        console.error('Error deleting post:', error);
        alert('Failed to delete post: ' + error.message);
    }
});

document.getElementById('edit-post-form').addEventListener('submit', (event) => {
    onUpdatePost(event, postId);
});
