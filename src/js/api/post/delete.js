export async function deletePost(id) {
    const response = await fetch(`https://v2.api.noroff.dev/blog/posts/${postId}`, {
        method: 'DELETE',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });

    if (!response.ok) {
        throw new Error('failed to delete post');
    }
}
