import { authGuard } from "../../utilities/authGuard";
import { onLogout } from "../../ui/auth/logout";
import { readPosts } from "../../api/post/read";

authGuard();

const logoutButton = document.getElementById("logoutButton");
logoutButton.addEventListener("click", onLogout);

export async function displayPostOnHome() {
    const postsContainer = document.getElementById("posts-container");

    if (!postsContainer) {
        console.error('post container not found');
        return;
    }

    try {
        const response = await readPosts();
        const posts = response.data.slice(0, 12);  // get the first 12 posts

        if (Array.isArray(posts)) {
            postsContainer.innerHTML = ""; // Clear old content if any
            
            posts.forEach(post => {
                const postElement = document.createElement("div");
                postElement.className = "post-post";
                postElement.innerHTML = `
                <div class="card h-100" style="cursor: pointer;">
                        ${
                        post.media
                            ? `<img src="${post.media.url}" class="card-img-top" alt="${post.media.alt}">`
                            : ""
                        }
                    <div class="card-body d-flex flex-column"> <!-- Column layout for spacing -->
                        <h2 class="card-title">${post.title}</h2>
                        <p class="card-text">${post.body}</p>
                        ${
                            post.tags && post.tags.length > 0
                                ? `<p class="card-text mt-auto"><small class="text-muted">Tags: ${post.tags.join(", ")}</small></p>`
                                : ""
                        }
                    </div>
                </div>
                `;
                
                postElement.addEventListener('click', () => {
                    window.location.href = `/fed2-js2-ca-OGTrizzy/post/?id=${post.id}`;
                });
            
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