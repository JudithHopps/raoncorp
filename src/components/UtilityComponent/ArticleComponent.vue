<template>
    <ul>
      <li
        v-for="(article, i) in articles"
        :style="`background-image: url(${article.backgroundUrl});`"
        role="button"
        :class="active === i ? 'active' : ''"
        @click="() => (active = i)"
        :key="i"
      >
        <h3>{{ article.title }}</h3>
        <div class="section-content">
          <div class="inner">
            <div class="bio">
              <h2>{{ article.title }}</h2>
              <p>
                {{ article.description }}
              </p>
  
              <a
                :href="article.articleUrl"
                target="_blank"
                class="article-profile-link md:hidden"
              >
                <img
                  src="@/assets/articleButton.jpg"
                  alt="Listen on Spotify"
                  width="150"
                  loading="lazy"
                  class ="Btn"
                />
              </a>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </template>
 
  <script setup>
  import { ref } from 'vue';
  const active= ref(0);
  
  let articles= ref([]);
  try {
    articles = await fetch(`https://317063c7-d634-4287-b420-c464099608f2.mock.pstmn.io/article`).then(res => res.json());
  } catch(e) {
    //[console 확인]
    console.log(e);
  }
  </script>
   
<style scoped lang="scss">
body {
  font-family: "Roboto Condensed", sans-serif;
  color: #fff;
  line-height: 24px;
  font-size: 16px;
}

.bio {
  display: grid;
  grid-auto-flow: row;
  grid-template-rows: min-content;
  grid-gap: 24px;
}

ul {
  display: flex;
  min-height: 750px;
  height: 100vh;
  margin: 0;
  padding: 0;
  overflow: hidden;
  list-style-type: none;
  width: 100%;
  min-width: 100%;
  flex-direction: column;

  @media only screen and (min-width: 1280px) {
    flex-direction: row;
  }
}

li {
  flex: 1;
  display: flex;
  align-items: stretch;
  cursor: pointer;
  transition: all 0.35s ease;
  cursor: pointer;
  position: relative;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top center;
  overflow: hidden;
  
  

  &.active {
    flex: 6;
    cursor: default;

    &:before {
      background: linear-gradient(0deg, rgba(15, 15, 15, 0) 0%, #111111 100%); // 차이 유무 없음
      
    }
  }
}

h2 {
  font-size: 36px;
  line-height: 36px;
  font-weight: 700;
  text-transform: uppercase;
  color: white;
  -webkit-text-stroke: 0.3px black;
  @media only screen and (min-width: 768px) {
    font-size: 48px;
    line-height: 48px;
  }

  @media only screen and (max-width: 1280px) {
    font-size: 64px;
    line-height: 64px;
  }
}

h3 {
  font-weight: bold;
  white-space: nowrap;
  position: absolute;
  z-index: 30;
  opacity: 1;
  // color: white;
  // -webkit-text-stroke: 0.3px black;
  top: 50%;
  left: 50%;
  transition: top 0.35s, opacity 0.15s;
  transform-origin: 0 0;
  font-size: 24px;
  text-transform: uppercase;
  transform: translate(-50%, -50%) rotate(0deg);

  @media only screen and (min-width: 1280px) {
    top: 100%;
    left: 50%;
    font-size: 22px;
    transform: translate(-20px, -50%) rotate(-90deg);
  }

  .active & {
    opacity: 0;
    top: 200%;
  }
}

.section-content {
  position: relative;
  z-index: 30;
  opacity: 0;
  align-self: flex-end;
  width: 100%;
  transition: all 0.35s 0.1s ease-out;

  .active & {
    opacity: 1;
  }

  .inner {
    position: absolute;
    display: grid;
    grid-auto-flow: row;
    grid-template-columns: 1fr;
    grid-column-gap: 20px;
    align-items: flex-end;
    left: 0;
    bottom: 0;
    padding: 20px;
    opacity: 0;
    transition: opacity 0.25s ease-out;

    @media only screen and (min-width: 768px) {
      grid-auto-flow: column;
      grid-template-columns: calc(100% - 340px) 300px;
      grid-column-gap: 40px;
      padding: 40px;
    }

    @media only screen and (max-width: 1280px) {
      grid-auto-flow: column;
      grid-template-columns: 460px 200px;
      grid-column-gap: 40px;
      padding: 40px;
    }

    .active & {
      opacity: 1;
    }
  }
}

.article-profile-link {
  pointer-events: none;

  .active & {
    pointer-events: all;
  }
}
.Btn{
  border-radius: 5%;
}
</style>