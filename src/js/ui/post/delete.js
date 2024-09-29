import { API_SOCIAL_POSTS } from "../../api/constants"; 
import { headers } from "../../api/headers"; 

export async function onDeletePost(postId) {
    try {
        const token = localStorage.getItem('accessToken');
        if (!token) {
            throw new Error('User is not authenticated');
        }

        const fetchHeaders = headers(); 
        fetchHeaders.append('Authorization', `Bearer ${token}`); 

        const response = await fetch(`${API_SOCIAL_POSTS}/${postId}`, {
            method: 'DELETE',
            headers: fetchHeaders,
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(`Failed to delete post: ${errorData.errors[0].message}`);
        }

        alert('Post deleted successfully!');
        window.location.href = '/'; 
    } catch (error) {
        console.error('Error deleting post:', error);
        alert('Failed to delete post: ' + error.message);
    }
}
