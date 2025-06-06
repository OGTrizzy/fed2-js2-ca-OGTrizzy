import { readPost } from "../../api/post/read"; 

const urlParams = new URLSearchParams(window.location.search);
const postId = urlParams.get("id");

async function fetchPost() {
    try {
        const response = await readPost(postId);
        const post = response.data;
        if (post) {
            document.getElementById('post-title').innerText = post.title;
            document.getElementById('post-body').innerText = post.body;

            if (post.media && post.media.url) {
                document.getElementById('post-image').src = post.media.url;
                document.getElementById('post-image').alt = post.media.alt || 'Post media';
            } else {
                document.getElementById('post-image').style.display = 'none';
            }

            if (post.tags && post.tags.length > 0) {
                document.getElementById('post-tags').innerText = `Tags: ${post.tags.join(', ')}`;
            } else {
                document.getElementById('post-tags').style.display = 'none';
            }

            document.getElementById('edit-post').addEventListener('click', () => {
                window.location.href = `/post/edit/?id=${post.id}`;
            });

        } else {
            throw new Error('Post not found');
        }
    } catch (error) {
        console.error(error);
        document.getElementById('post-container').innerText = 'Failed to load post.';
    }
}

document.addEventListener("DOMContentLoaded", fetchPost);
fetchPost();
