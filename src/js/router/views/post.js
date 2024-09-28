import { readPost } from "../../api/post/read";

const urlParams = new URLSearchParams(window.location.search);
const postId = urlParams.get("id");

async function fetchPost() {
    try {
        const post = await readPost(postId);
        if (post) {
            document.getElementById('post-title').innerText = post.title;
            document.getElementById('post-body').innerText = post.body;
            document.getElementById('post-author').innerText = `By: ${post.author.name}`;
            document.getElementById('post-image').src = post.media.url;
            if (post.tags && post.tags.length > 0) {
                document.getElementById('post-tags').innerText = `Tags: ${post.tags.join(', ')}`;
            }
        }
    } catch (error) {
        console.error(error);
    }
}

document.addEventListener("DOMContentLoaded", fetchPost);