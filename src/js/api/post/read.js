export async function readPost(id) {
    const url = `https://v2.api.noroff.dev/posts/${id}`;

    try {
        const response = await fetch(url);
        if (!response.ok){
            throw new Error('failed to get post');
        }
        const post = await response.json();
        return post;
    }catch (error){
        console.error('error:',error);
    }
}


export async function readPosts(limit = 12, page = 1, tag) {
    let url = `https://v2.api.noroff.dev/posts?limit=${limit}&page=${page}`;
    if (tag) {
        url += `&tag=${tag}`;
    }

    try {
        const response = await fetch(url);
        if (!response.ok){
            const errorMessage = `Failed to fetch posts: ${response.status} - ${response.statusText}`;
            throw new Error(errorMessage);
        }

        const posts = await response.json();
        return posts;
    } catch (error) {
        console.error('error:',error);
        throw error;
    }
}

export async function readPostsByUser(username, limit = 12, page = 1, tag) {
    let url = `https://v2.api.noroff.dev/posts?author=${username}&limit=${limit}&page=${page}`;
    if (tag) {
        url += `&tag=${tag}`;
    }

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('failed to get post from user');
        }
        const posts = await response.json();
        return posts;
    } catch (error) {
        console.error('error:',error);
    }
}
