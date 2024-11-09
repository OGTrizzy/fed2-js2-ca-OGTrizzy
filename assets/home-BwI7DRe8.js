import{a as r}from"./authGuard-DDO8JLiG.js";import{r as c}from"./read-CWlOJm2d.js";import"./app-Cyp1_vXL.js";async function l(){localStorage.removeItem("accessToken"),localStorage.removeItem("name"),window.location.href="/auth/login/"}r();const i=document.getElementById("logoutButton");i.addEventListener("click",l);async function s(){const o=document.getElementById("posts-container");if(!o){console.error("post container not found");return}try{const a=(await c()).data.slice(0,12);Array.isArray(a)?(o.innerHTML="",a.forEach(t=>{const e=document.createElement("div");e.className="post-post",e.innerHTML=`
                <div class="card h-100" style="cursor: pointer;">
                        ${t.media?`<img src="${t.media.url}" class="card-img-top" alt="${t.media.alt}">`:""}
                    <div class="card-body d-flex flex-column"> <!-- Column layout for spacing -->
                        <h2 class="card-title">${t.title}</h2>
                        <p class="card-text">${t.body}</p>
                        ${t.tags&&t.tags.length>0?`<p class="card-text mt-auto"><small class="text-muted">Tags: ${t.tags.join(", ")}</small></p>`:""}
                    </div>
                </div>
                `,e.addEventListener("click",()=>{window.location.href=`/post/?id=${t.id}`}),o.appendChild(e)})):console.error("Posts is not an array:",a)}catch(n){console.error("failed to display posts:",n)}}document.addEventListener("DOMContentLoaded",s);s();export{s as displayPostOnHome};
