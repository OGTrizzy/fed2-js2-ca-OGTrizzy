import { authGuard } from "../../utilities/authGuard";
import { onLogout } from "../../ui/auth/logout";
import { readPosts } from "../../api/post/read";

authGuard();

const logoutButton = document.getElementById("logoutButton");

logoutButton.addEventListener("click", onLogout);

export async function displayPostOnHome() {
    const postsContainer = document.getElementById("posts-container");

    try {
        const posts = await readPosts();
        postsContainer.innerHTML = ""; //to purify old content if any
        posts.forEach(post => {
            const postElement = document.createElement("div");
            postElement.className = "post";
            postElement.innerHTML = `
                <h2>${post.title}</h2>
                <p>${post.content}</p>
                <small>By: ${post.author.name}</small>
                <a href="/post.html?id=${post.id}">Read more</a>
            `;
            postsContainer.appendChild(postElement);
        });
    } catch (error) {
        console.error("failed to display posts:", error);
    }
}

document.addEventListener("DOMContentLoaded", displayPostOnHome);