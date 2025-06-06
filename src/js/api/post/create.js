import { headers } from "../headers";

export async function createPost(postData) {
    try {
        const token = localStorage.getItem('accessToken');
        if (!token) {
            throw new Error('User is not authenticated');
        }

        const fetchHeaders = headers();
        fetchHeaders.append('Authorization', `Bearer ${token}`);

        // Log the payload being sent as an object
        console.log('Payload being sent:', postData);

        const response = await fetch('https://v2.api.noroff.dev/social/posts', {
            method: 'POST',
            headers: fetchHeaders,
            body: JSON.stringify(postData)
        });

        if (!response.ok) {
            const errorData = await response.json().catch(() => {
                return { errors: [{ message: 'Unexpected error occurred' }] };
            });
            console.error('Error details:', errorData);
            throw new Error(errorData.errors[0]?.message || 'Failed to create post');
        }

        return await response.json();
    } catch (error) {
        console.error('Error in createPost:', error.message);
        throw error;
    }
}

