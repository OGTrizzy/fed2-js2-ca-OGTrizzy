import { API_SOCIAL_POSTS } from "../constants";
import { headers } from "../headers";
const token = localStorage.getItem('accessToken');

export async function readPost(id) {
    const url = `${API_SOCIAL_POSTS}/${id}`;

    try {
        const token = localStorage.getItem('accessToken');
        if (!token) {
            throw new Error('User is not authenticated');
        }

        const fetchHeaders = headers();
        fetchHeaders.append("Authorization", `Bearer ${token}`);

        const response = await fetch(url, {
            method: 'GET',
            headers: fetchHeaders
        });

        if (!response.ok) {
            throw new Error('Failed to get post');
        }

        const post = await response.json();
        console.log("Fetched Posts:", post);
        return post;
    } catch (error) {
        console.error('Error fetching post:', error);
        throw error;
    }
}


export async function readPosts(limit = 12, page = 1, tag) {
    let url = `${API_SOCIAL_POSTS}?limit=${limit}&page=${page}`;
    if (tag) {
        url += `&tag=${tag}`;
    }

    try {
        const fetchHeaders = headers(); 
        fetchHeaders.append("Authorization", `Bearer ${token}`); 

        const response = await fetch(url, {
            method: 'GET',
            headers: fetchHeaders
        });
        const responseText = await response.text();

        if (!response.ok) {
            const errorMessage = `failed to fetch posts: ${response.status} - ${response.statusText}`;
            throw new Error(errorMessage);
        }
        const posts = JSON.parse(responseText);
        posts.data.sort((a, b) => new Date(b.updated) - new Date(a.updated)); //this is supposed to sort the content from api from new to old
        return posts;
    } catch (error) {
        console.error('error:', error);
        throw error;
    }
}

export async function readPostsByUser(username, limit = 12, page = 1, tag) {
    let url = `https://v2.api.noroff.dev/posts/social?author=${username}&limit=${limit}&page=${page}`;
    if (tag) {
        url += `&tag=${tag}`;
    }

    try {
        const fetchHeaders = headers(); 
        fetchHeaders.append("Authorization", `Bearer ${token}`); 

        const response = await fetch(url, {
            method: 'GET',
            headers: fetchHeaders
        });
        if (!response.ok) {
            throw new Error('failed to get post from user');
        }
        const posts = await response.json();
        return posts;
    } catch (error) {
        console.error('error:',error);
    }
}
