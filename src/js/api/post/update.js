import { headers } from "../headers";

export async function updatePost(id, postData) {
    const url = `https://v2.api.noroff.dev/social/posts/${id}`;

    try {
        const token = localStorage.getItem('accessToken');
        if (!token) {
            throw new Error('User is not authenticated');
        }

        const fetchHeaders = headers();
        fetchHeaders.append('Authorization', `Bearer ${token}`);

        const response = await fetch(url, {
            method: 'PUT', 
            headers: fetchHeaders,
            body: JSON.stringify(postData)
        });

        if (!response.ok) {
            const errorData = await response.json().catch(() => {
                return { errors: [{ message: 'Unexpected error occurred' }] };
            });
            console.error('Error details:', errorData);
            throw new Error(errorData.errors[0]?.message || 'Failed to update post');
        }

        return await response.json();
    } catch (error) {
        console.error('Error in updatePost:', error.message);
        throw error;
    }
}