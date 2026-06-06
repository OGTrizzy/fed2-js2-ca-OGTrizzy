import{a as s}from"./authGuard-Db64pB-f.js";import{r as i}from"./read-DqYgNXWp.js";import"./app-GIeB1Y3z.js";async function c(){localStorage.removeItem("accessToken"),localStorage.removeItem("name"),window.location.href="/auth/login/"}s();const d=document.getElementById("logoutButton");d.addEventListener("click",c);async function r(){const t=document.getElementById("posts-container");if(!t){console.error("post container not found");return}try{const n=(await i()).data;Array.isArray(n)?(t.innerHTML="",n.forEach(e=>{const o=document.createElement("div");o.className="post",o.innerHTML=`
                    <h2>${e.title}</h2>
                    <p>${e.body}</p>
                    ${e.media?`<img src="${e.media.url}" alt="${e.media.alt}">`:""}
                    ${e.tags&&e.tags.length>0?`<p>Tags: ${e.tags.join(", ")}</p>`:""}
                `,o.addEventListener("click",()=>{window.location.href=`/post/?id=${e.id}`}),t.appendChild(o)})):console.error("Posts is not an array:",n)}catch(a){console.error("failed to display posts:",a)}}document.addEventListener("DOMContentLoaded",r);r();export{r as displayPostOnHome};
