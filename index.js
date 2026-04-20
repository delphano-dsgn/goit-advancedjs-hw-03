import{a as f,S as d,i as a}from"./assets/vendor-BCrCAnXC.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const m="55519599-d6063fdf91732cac9901be169",p="https://pixabay.com/api/";function h(s){return f.get(p,{params:{key:m,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(o=>o.data)}const l=document.querySelector(".gallery"),u=document.querySelector(".loader"),g=new d(".gallery a",{captionsData:"alt",captionDelay:250});function y(s){const o=s.map(t=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${t.largeImageURL}">
          <img
            class="gallery-image"
            src="${t.webformatURL}"
            alt="${t.tags}"
          />
        </a>
        <div class="info">
          <p class="info-item"><b>Likes</b> ${t.likes}</p>
          <p class="info-item"><b>Views</b> ${t.views}</p>
          <p class="info-item"><b>Comments</b> ${t.comments}</p>
          <p class="info-item"><b>Downloads</b> ${t.downloads}</p>
        </div>
      </li>
    `).join("");l.insertAdjacentHTML("beforeend",o),g.refresh()}function b(){l.innerHTML=""}function L(){u.classList.remove("hidden")}function c(){u.classList.add("hidden")}const w=document.querySelector("#search-form");w.addEventListener("submit",S);function S(s){s.preventDefault();const o=s.currentTarget,t=o.elements["search-text"].value.trim();if(t===""){a.warning({title:"Увага",message:"Будь ласка, введіть слово для пошуку!",position:"topRight"});return}b(),L(),h(t).then(n=>{if(c(),n.hits.length===0){a.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"#EF4040",messageColor:"#FAFAFB"});return}y(n.hits)}).catch(n=>{c(),a.error({title:"Помилка",message:"Щось пішло не так. Спробуйте пізніше.",position:"topRight"}),console.error(n)}).finally(()=>{o.reset()})}
//# sourceMappingURL=index.js.map
