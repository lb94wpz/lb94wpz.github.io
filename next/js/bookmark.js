document.addEventListener("DOMContentLoaded",()=>{var e=()=>{localStorage.setItem("bookmark"+location.pathname,window.scrollY)},o=()=>{var e=localStorage.getItem("bookmark"+location.pathname),e=parseInt(e,10);isNaN(e)||""!==location.hash||window.anime({targets:document.scrollingElement,duration:200,easing:"linear",scrollTop:e})},t=CONFIG.bookmark.save,n=document.querySelector(".book-mark-link");window.addEventListener("scroll",()=>n.classList.toggle("book-mark-link-fixed",0===window.scrollY)),"auto"===t&&(window.addEventListener("beforeunload",e),window.addEventListener("pjax:send",e)),n.addEventListener("click",()=>{e(),window.anime({targets:n,duration:200,easing:"linear",top:-30,complete:()=>{setTimeout(()=>{n.style.top=""},400)}})}),o(),window.addEventListener("pjax:success",o)});