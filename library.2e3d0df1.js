!function(){function e(e,n,t,r){Object.defineProperty(e,n,{get:t,set:r,enumerable:!0,configurable:!0})}function n(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},i={},a=t.parcelRequired7c6;null==a&&((a=function(e){if(e in r)return r[e].exports;if(e in i){var n=i[e];delete i[e];var t={id:e,exports:{}};return r[e]=t,n.call(t.exports,t,t.exports),t.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,n){i[e]=n},t.parcelRequired7c6=a),a.register("iE7OH",(function(n,t){var r,i;e(n.exports,"register",(function(){return r}),(function(e){return r=e})),e(n.exports,"resolve",(function(){return i}),(function(e){return i=e}));var a={};r=function(e){for(var n=Object.keys(e),t=0;t<n.length;t++)a[n[t]]=e[n[t]]},i=function(e){var n=a[e];if(null==n)throw new Error("Could not resolve bundle with id "+e);return n}})),a.register("aNJCr",(function(n,t){var r;e(n.exports,"getBundleURL",(function(){return r}),(function(e){return r=e}));var i={};function a(e){return(""+e).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}r=function(e){var n=i[e];return n||(n=function(){try{throw new Error}catch(n){var e=(""+n.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);if(e)return a(e[2])}return"/"}(),i[e]=n),n}})),a("iE7OH").register(JSON.parse('{"2Y0K8":"library.2e3d0df1.js","hBMgR":"backdrop-kino.27c72f8a.jpg","4O56q":"movie-pic.fe810275.jpg"}'));a("aNJCr").getBundleURL("2Y0K8"),a("iE7OH").resolve("hBMgR");var s={};function o(e){return e.map((e=>{const{genres:t,id:r,poster_path:i,title:a,vote_average:o,release_date:l}=e,c=function(e){return 0===e.length?"Other":e.length<=3?e.map((e=>e.name)):`${e[0].name}, ${e[1].name}, Other`}(t);return`<li class="films__item js-target" data-id="${r}">\n                  <div class="films__img-wrapper">\n                   <img\n                    src="${i?`https://image.tmdb.org/t/p/w500${i}`:n(s)}"\n                    alt="${a}"\n                    class="films__img" loading="lazy"\n                   />\n                   <div class="rating">\n                     <p class="films__desk">\n                       <span class="films__rating--text"> Rating: </span>\n                       <span class="films__rating">${o.toFixed(1)}</span>\n                     </p>\n                    </div>\n                  </div>\n               <div class="films__info">\n                 <p class="films__name">${a}</p>\n                 <p class="films__desk">\n                   <span class="films__genre">${c}</span> |\n                    <span class="films__year">${Number.parseInt(l)}</span>\n                  </p>\n               </div>\n             </li>`})).join("")}s=a("aNJCr").getBundleURL("2Y0K8")+a("iE7OH").resolve("4O56q");const l=document.querySelector(".js-films-list"),c=document.querySelector(".js-btn-library-watched"),d=document.querySelector(".js-btn-library-queue"),u=localStorage.getItem("watchedMovies"),f=localStorage.getItem("queueMovies");window.onload=(d.classList.add("main-btn--library-active"),void(l.innerHTML=f?o(JSON.parse(f)):'<div style="height: 500px; font-size: 24px">Add films to your queue!</div>')),d.addEventListener("click",(()=>{c.classList.remove("main-btn--library-active"),d.classList.add("main-btn--library-active"),l.innerHTML=f?o(JSON.parse(f)):'<div style="height: 500px; font-size: 24px">Add films to your queue!</div>'})),c.addEventListener("click",(()=>{d.classList.remove("main-btn--library-active"),c.classList.add("main-btn--library-active"),l.innerHTML=u?o(JSON.parse(u)):'<div style="height: 500px; font-size: 24px">Add films to your watched!</div>'}))}();
//# sourceMappingURL=library.2e3d0df1.js.map