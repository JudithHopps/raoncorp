<template>
<div>
    <div class='container'>
      <h2 class="fadeup" id="raon">라온시큐어</h2>
      <div class='reveal'>
        <div class="image-wrap">
          <img src='../assets/raonsecure.jpg' >
        </div>
      </div>
    </div>
    <div class='container'>
      <h2 class="fadeup">IT 통합 보안·인증 선도기업</h2>
      <div class='reveal'>
        <div class="image-wrap">
          <img src='../assets/raonicon.jpg' >
        </div>
      </div>
    </div>
    <div class='container'>
      <h2 class="fadeup">차세대 IT보안 솔루션</h2>
      <div class='reveal'>
        <div class="image-wrap">
          <img src='../assets/raonfield.jpg' >
        </div>
      </div>
    </div>
    <div class='container'>
      <h2 class="fadeup">make IT fun and secure</h2>
      <div class='reveal'>
        <div class="image-wrap">
          <img src='https://www.raoncorp.com/common/ko/img/content/ceo.png'>
        </div>
      </div>
    </div>
    
</div>
</template>
      
    <script setup>
    document.addEventListener("DOMContentLoaded", function () {
      const options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.4
      };
    
      // IMAGE ANIMATION
    
      let revealCallback = (entries) => {
        entries.forEach((entry) => {
          let container = entry.target;
    
          if (entry.isIntersecting) {
            console.log(container);
            container.classList.add("animating");
            return;
          }
    
          if (entry.boundingClientRect.top > 0) {
            container.classList.remove("animating");
          }
        });
      };
    
      let revealObserver = new IntersectionObserver(revealCallback, options);
    
      document.querySelectorAll(".reveal").forEach((reveal) => {
        revealObserver.observe(reveal);
      });
    
      // TEXT ANIMATION
    
      let fadeupCallback = (entries) => {
        entries.forEach((entry) => {
          let container = entry.target;
          container.classList.add("not-fading-up");
    
          if (entry.isIntersecting) {
            container.classList.add("fading-up");
            return;
          }
    
          if (entry.boundingClientRect.top > 0) {
            container.classList.remove("fading-up");
          }
        });
      };
    
      let fadeupObserver = new IntersectionObserver(fadeupCallback, options);
    
      document.querySelectorAll(".fadeup").forEach((fadeup) => {
        fadeupObserver.observe(fadeup);
      });
    });
    
    </script>
    
    
    <style scoped>
    .container {
      display: grid;
      place-items: center;
      height: 100vh;
      max-width: 100%;
      position: relative;
      overflow: hidden;
    }
    
    
    .container:nth-child(1) {
      background: #ffc40008;
    }
    .container:nth-child(2) {
      background: #ff800044;
    }
    .container:nth-child(3) {
      background: #FFEFBA;
    }
    .container:nth-child(4) {
      background: #f4f1cc;
    }
    
    
    img {
      height: 100%;
      width: 25vw;
      max-width: 55vw;
      object-fit: contain;
      opacity: 60%;
    }
    
    h2 {
      font-family: Termina, sans-serif;
      font-weight: 800;
      text-transform: uppercase;
      -webkit-text-stroke: 2px white;
      color: transparent;
      font-size: clamp(3rem, 10vw, 6rem);
      position: absolute;
      top: 25%;
      left: 5%;
      width: 90%;
      height: 50%;
      z-index: 99;
      display: grid;
      place-items: center;
    }
    
    body:not(.no-js) .image-wrap {
      transition: 1s ease-out;
      transition-delay: 0.2s;
      position: relative;
      width: auto;
      height: 80vh;
      overflow: hidden;
      clip-path: polygon(0 100%, 100% 100%, 100% 100%, 0 100%);
      visibility: hidden;
    }
    
    body:not(.no-js) .image-wrap img {
      transform: scale(1.3);
      transition: 2s ease-out;
    }
    
    body:not(.no-js) .animating .image-wrap {
      clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
      visibility: visible;
      transform: skewY(0);
    }
    
    body:not(.no-js) .animating img {
      transform: scale(1);
      transition: 4s ease-out;
    }
    
    body:not(.no-js) .fadeup {
      opacity: 0;
      transition: 0.4s ease-out;
      transform: translateY(40px);
    }
    
    body:not(.no-js) .fading-up {
      opacity: 1;
      transition: 1s ease-out;
      transform: translateY(0px);
      transition-delay: 0.7s;
    }
    #raon{
        
         
        background: -webkit-linear-gradient(-70deg,#e23a3a97 40%,orange 60%,rgba(233, 242, 102, 0.859)90% );
        -webkit-background-clip: text;
        background-clip: text;    
        -webkit-text-fill-color: transparent;    
        font-weight: 900;
        font-size:150px;
        text-align: center;
        -webkit-text-stroke:0px;
         
      
     }
    </style>