import { createPost } from "../../api/post/create.js";

export async function onCreatePost(event) {
    event.preventDefault();
    const form = new FormData(event.target)

    const imageUrl = form.get('post-media-url');
    const  imageAlt = form.get('post-media-alt');


    const postData = { 
        title: form.get('post-title'), 
        body: form.get('post-body'), 
        tags: form.get('post-tags')
        ? form
            .get('post-tags')
            .split(', ')
            .map((tag) => tag.trim())
        : [], 
        media: imageUrl  || imageAlt ? { url: imageUrl, alt: imageAlt } : null };


    try {
        const newPost = createPost(postData);
        alert('Post created successfully!');
        window.location.href = '/'; 
        return newPost;
    } catch (error) {
        console.error('Error creating new post:', error);
        alert('Failed to create post: ' + error.message);
    }
}
