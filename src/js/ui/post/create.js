import { createPost } from "../../api/post/create.js";
export async function onCreatePost(event) {
    event.preventDefault();

    const title = document.getElementById('post-title').value;
    const body = document.getElementById('post-body').value;
    const tags = document.getElementById('post-tags').value.split(',').map(tag => tag.trim());
    const mediaUrl = document.getElementById('post-media').value;

    if (!title || !body) {
        alert('Please fill in the title and body of your post.');
        return;
    }

    const media = {
        url: mediaUrl || "",
        alt: ""
    };

    try {
        const newPost = createPost ({ title, body, tags, media });
        alert('post created successfully!');
        window.location.href =  `/posts/${newPost.id}`;
    } catch (error) {
        console.error('error creating new post:', error);
        alert('failed to create post' + error.message);
    }
}
