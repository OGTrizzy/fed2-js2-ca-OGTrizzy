export async function updatePost(id, { title, body, tags, media }) {
    const response = await fetch (`https://v2.api.noroff.dev/blog/posts/${postId}`,{
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({title, body, tags, media})
    });

    if (!response.ok) {
        throw new Error(`failed to update post`);
    }

    const data = await response.json();
    return data;
}
