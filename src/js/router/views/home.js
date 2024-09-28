import { authGuard } from "../../utilities/authGuard";
import { onLogout } from "../../ui/auth/logout";
import { readPosts } from "../../api/post/read";

authGuard();

const logoutButton = document.getElementById("logoutButton");
logoutButton.addEventListener("click", onLogout);

async function displayPostOnHome() {
    const postsContainer = document.getElementById("posts-container");

    if (!postsContainer) {
        console.error('post container not found');
        return;
    }

    try {
        const response = await readPosts();
        console.log('Fetched Posts:', response);
        const posts = response.data;
        
        if (Array.isArray(posts)) {
            postsContainer.innerHTML = ""; // Clear old content if any
            
            posts.forEach(post => {
                const postElement = document.createElement("div");
                postElement.className = "post";
                postElement.innerHTML = `
                    <a href="/post/index.html?id=${post.id}" class="post-link">
                    <h2>${post.title}</h2>
                    <p>${post.body}</p>
                    ${post.media ? `<img src="${post.media.url}" alt="${post.media.alt}">` : ''}
                    ${post.tags && post.tags.length > 0 ? `<p>Tags: ${post.tags.join(', ')}</p>` : ''}
                    <small>By: ${post.author ? post.author.name : 'Unknown Author'}</small>
                `;
                postsContainer.appendChild(postElement);
            });            
        } else {
            console.error('Posts is not an array:', posts);
        }
    } catch (error) {
        console.error("failed to display posts:", error);
    }
}



document.addEventListener("DOMContentLoaded", displayPostOnHome);
displayPostOnHome();