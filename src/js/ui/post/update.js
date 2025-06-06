import { updatePost } from "../../api/post/update";

export async function onUpdatePost(event, postId) {
    event.preventDefault();

    const updatedPost = {
        title: document.getElementById('post-title').value,
        body: document.getElementById('post-body').value,
        tags: document.getElementById('post-tags').value.split(',').map(tag => tag.trim()),
    };

    try {
        await updatePost(postId, updatedPost); 
        alert('Post updated successfully!');
        window.location.href = `/post/?id=${postId}`;
    } catch (error) {
        console.error('Error updating post:', error);
        alert('Failed to update post: ' + error.message);
    }
}

