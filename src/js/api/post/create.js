export async function createPost({ title, body, tags, media }) {
    const response = await fetch ('https://v2.api.noroff.dev/blog/posts', {
        method:  'POST',
        headers: {
            'Content-Type':  'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({title, body, tags, media})
    });
    if (!response.ok){
        throw new Error('failed to create post');
    }
    
    const data = await response.json();
    return data;
}
