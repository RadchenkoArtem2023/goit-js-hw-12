import{S as b,a as w,i as u}from"./assets/vendor-eded45c0.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();const L=document.querySelector(".gallery"),S=t=>{const r=t.map(s=>`<li class="gallery-item">
           <a class="gallery-link" href="${s.largeImageURL}">
             <img
               class="gallery-image"
               width="1280"
               height="152"
               src="${s.webformatURL}"
               data-source="${s.largeImageURL}"
               alt="${s.tags}"
             />
             </a>
             <ul class="gallery-description">
             <li><h3>Likes</h3><p>${s.likes}</p>
             </li>
             <li><h3>Views</h3><p>${s.views}</p>
               </li>
               <li><h3>Comments</h3><p>${s.comments}</p>
                 </li>
                 <li><h3>Downloads</h3><p>${s.downloads}</p>
                   </li>
             </ul>
           </li>`).join("");L.insertAdjacentHTML("beforeend",r),$.refresh()},$=new b(".gallery a",{captionsData:"alt",captionDelay:250,close:!0,enableKeyboard:!0,docClose:!0});async function y(t,r){const s="https://pixabay.com",n="/api/",e=new URLSearchParams({key:"42962590-b9bb006e5b1e7f6cfce132ccb",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:r}),o=`${s}${n}?${e}`;try{return(await w.get(o)).data}catch{throw new Error("Error fetching images")}}const h=document.querySelector(".form"),q=document.querySelector(".gallery"),c=document.querySelector(".load-more"),m=document.querySelector(".loader");let i="",a=1;const p=()=>{m.style.display="block"},f=()=>{m.style.display="none"},d=()=>{u.error({maxWidth:"432px",height:"48px",color:"red",position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"})},g=t=>{S(t.hits)},E=async t=>{if(t.preventDefault(),q.innerHTML="",a=1,i=t.currentTarget.elements.image.value.trim(),!i){u.error({color:"yellow",message:"Please fill in the field for search query.",position:"topRight"});return}c.style.display="none",p();try{const r=await y(i,a);if(r.hits.length===0){d();return}g(r),r.totalHits>15&&(c.style.display="block")}catch{d()}finally{f(),h.reset()}},P=async()=>{a+=1,p();try{const t=await y(i,a);if(g(t),t.totalHits<=a*15){c.style.display="none",u.info({color:"yellow",message:"We're sorry, but you've reached the end of search results.",position:"topRight"});return}R()}catch{d()}finally{f()}};h.addEventListener("submit",E);c.addEventListener("click",P);function R(){const r=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:r*2,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
