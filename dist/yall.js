!(function(e,t){var n={lazyClass:"lazy",images:null,working:!1,throttle:200,buffer:50,init:function(){n.images=[].slice.call(t.querySelectorAll("."+n.lazyClass)),n.scan(),t.addEventListener("scroll",n.scan),t.addEventListener("touchmove",n.scan),e.addEventListener("orientationchange",n.scan),e.addEventListener("resize",n.scan)},scan:function(){if(0===t.querySelectorAll("."+n.lazyClass).length)return t.removeEventListener("scroll",n.scan),t.removeEventListener("touchmove",n.scan),e.removeEventListener("orientationchange",n.scan),void e.removeEventListener("resize",n.scan);!1===n.working&&(n.working=!0,setTimeout((function(){n.images.forEach((function(e){-1!==e.className.indexOf("lazy")&&n.inViewport(e)&&n.loadImage(e)})),n.working=!1}),n.throttle))},inViewport:function(r){var s=(t.body.scrollTop||t.documentElement.scrollTop)+e.innerHeight+n.buffer,a=r.currentStyle?r.currentStyle.display:getComputedStyle(r,null).display;return r.offsetTop<=s&&"none"!==a},loadImage:function(e){"PICTURE"===e.parentNode.tagName&&[].slice.call(e.parentNode.getElementsByTagName("source")).forEach((function(e){var t=e.getAttribute("data-srcset");null!==t&&(e.setAttribute("srcset",t),e.removeAttribute("data-srcset"))}));var t=e.getAttribute("data-src"),r=e.getAttribute("data-srcset");null!==t&&(e.setAttribute("src",t),e.removeAttribute("data-src")),null!==r&&(e.setAttribute("srcset",r),e.removeAttribute("data-srcset")),e.classList.remove(n.lazyClass),e.removeAttribute("style")}};t.addEventListener("DOMContentLoaded",n.init)})(window,document);
