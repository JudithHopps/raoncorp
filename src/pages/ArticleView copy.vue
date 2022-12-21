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
                  src="../assets/articleButton.jpg"
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
  let active= ref(0);
  let articles= [
          {
            title: "통합인증 플랫폼 ‘원패스 2·0’ 출시",
            description: `IT통합보안∙인증 선도기업 라온시큐어(대표 이순형, 042510)는 엔터프라이즈에 특화된 모바일 앱 기반 다채널 통합인증 플랫폼 ‘원패스(OnePass) 2.0’을 출시했다고 12일 밝혔다.이번에 출시한 원패스 2.0은 지난 2015년 출시한 FIDO 기반의 다채널 인증 플랫폼 ‘원패스 1.0’에 B2E(Business to Employee) 특화 기능을 추가한 제품으로, ▲서비스 속도 향상 ▲솔루션 운영 및 성능 최적화 ▲조직 사용자 편의성을 강화했다.           `,
            articleUrl: "https://www.raoncorp.com/ko/about/news_list/view/302",
            backgroundUrl: "https://cdn.raoncorp.com/news/thumb/20221213221052.jpg"
          },
          {
            title: "‘스마트안티피싱’, 피싱 사기 예방 효과로 성공적 시장 안착",
            description: `스마트안티피싱은 의심 키워드, 보이스피싱이 자주 오는 연락처 등과 같은 범죄 흔적을 활용해 서비스 이용자를 안전하게 보호하고, 이용자가 미처 인지하지 못하더라도 금융사 차원의 적극적인 조치로 2차, 3차 피해를 예방할 수 있다.뿐만 아니라 피해자 계좌에 소액 입금 후 보이스피싱이라고 신고하여 계좌를 지급정지시키는 일명 ‘통장협박’과 같은 최신의 보이스피싱 유형을 파악 및 분석하여 피해를 최소화할 수 있는 방안도 지속적으로 모색하고 있어 고도화되고 있는 보이스피싱 사기에 빠르게 대응할 수 있는 장점이 있다.`,
            articleUrl: "https://www.raoncorp.com/ko/about/news_list/view/301",
            backgroundUrl: "https://cdn.raoncorp.com/news/thumb/20221212150117.jpg"
          },
      
          {
            title: "나에게 맞는 NFT 마켓플레이스를 선택하는 올바른 기준은",
            description: `누구나 쉽게 NFT를 발행할 수 있는 마켓플레이스보다는 라온화이트햇의 금NFT처럼 플랫폼 사업자가 자체 구축한 블록체인 기술로 발행 과정에 참여하거나 사전에 저작권 여부에 대해 검증한 뒤 판매하는 마켓플레이스를 이용하는 것이 상대적으로 안전하다. 가상경제의 핵심인 NFT 시장이 지속 성장하기 위해서는 정부 차원의 제도적 조치도 필요하지만 앞서 언급한 기준들을 바탕으로 업계와 이용자 모두 보안과 관련한 부분에 각별한 주의를 기울일 것과, 유행과 마케팅에 현혹되지 않는 현명한 선택이 요구된다.`,
            articleUrl: "https://www.raoncorp.com/ko/about/news_list/view/300",
            backgroundUrl: "https://cdn.raoncorp.com/news/thumb/20221213221440.jpg"
          },
          {
            title: "‘옴니원 NFT 마켓플레이스’ 오픈!",
            description: `라온화이트햇은 첫번째 프로젝트로, 한국조폐공사(이하 조폐공사)와 함께 금 NFT를 옴니원 블록체인 기술로 발행∙판매한다. 금 NFT는 국내 유일의 KRX 금시장 공인 품질인증 기관인 한국조폐공사의 999.9 순도 골드바를 NFT에 페깅(pegging)해 구매∙교환할 수 있도록 했다.`,
            articleUrl: "https://www.raoncorp.com/ko/about/news_list/view/299",
            backgroundUrl: "https://cdn.raoncorp.com/news/thumb/20221117175058.jpg"
          },
          {
            title: "창립 10주년 맞아 오프라인 창립기념식 개최",
            description: `IT 통합보안∙인증 선도기업 라온시큐어(대표 이순형, 042510)는 용인 에버랜드에서 라온시큐어와 자회사 라온화이트햇의 임직원 및 가족 400여명이 함께한 가운데 창립 10주년 기념식을 진행했다고 23일 밝혔다.`,
            articleUrl: "https://www.raoncorp.com/ko/about/news_list/view/298",
            backgroundUrl: "https://cdn.raoncorp.com/news/thumb/20220928181655.jpg"
          },
          {
            title: "‘시큐업 세미나2022’에서 최신의 디지털 인증 기술과 미래 제시",
            description: `한국디지털인증협회와 IT 통합보안∙인증 선도기업 라온시큐어(대표 이순형, 042510)는 오는 10월 4일 서울 삼성동 코엑스 컨퍼러스홀에서 ‘디지털 인증의 현재와 미래’를 주제로 ‘시큐업 세미나 2022’를 개최한다고 29일 밝혔다.`,
            articleUrl: "https://www.raoncorp.com/ko/about/news_list/view/297",
            backgroundUrl: "https://cdn.raoncorp.com/news/thumb/20220829190806.png"
          },
          
         
          // {
          //   title: "Dom Dolla",
          //   description: `Dom Dolla is one of the latest Australian DJ/Producers to break globally following a succession of releases like “Take It”, “San Frandisco” & “Pump The Brakes”. Dom’s unique blend of house music has amassed over 300 million+ streams, Platinum-certified records, ARIA Award for Best Dance Release, back to back Beatport #1’s, US Billboard Dance top 10’s, triple j’s hottest 100, Shazam & Spotify Global top 100 charts.`,
          //   articleUrl: "https://www.raoncorp.com/ko/about/news_list/view/302",
          //   backgroundUrl: "https://assets.codepen.io/152347/dom-dolla.jpg"
          // },
          // {
          //   title: "Crooked Colours",
          //   description: `Crooked Colours are a three-piece band formed in Perth, Western Australia, consisting of members Phil Slabber, Leon Debaughn and Liam Merrett-Park. Starting out as house party DJs before forming in 2013, the trio have amassed a large following, peaking at number 1 on the Australian Dance Album ARIA Charts for their album "Langata".`,
          //   articleUrl:
          //     "https://open.spotify.com/article/0aA1GTrIMutjIh4GlPPUVN?si=N6CkDtcYQx-O4Zehl6CPag",
          //   backgroundUrl: "https://assets.codepen.io/152347/crooked-colours.jpg"
          // },
      //     {
      //       title: "Mallrat",
      //       description: `Grace Kathleen Elizabeth Shaw, known professionally as Mallrat, is a 23-year-old Australian musician, singer, and rapper from Brisbane.  Mallrat released her official debut single, “Suicide Blonde” in 2015 whilst in her last year of High School. Since then, she has gone on to release three EPs: Uninvited (2016), In the Sky (2018) and Driving Music (2019).`,
      //       spotify: {
      //         articleUrl:
      //           "https://open.spotify.com/article/4OSArit7O2Jaj4mgf3YN7A?si=NBgyC_b_QNujIr2Ubd2fSw",
      //         embedUrl:
      //           "https://open.spotify.com/embed/article/4OSArit7O2Jaj4mgf3YN7A?utm_source=generator"
      //       },
      //       backgroundUrl: "https://assets.codepen.io/152347/mallrat.jpg"
      //     },
      //     {
      //       title: "Allday",
      //       description: `Tom Gaynor, better known by his stage title “Allday”, is an Australian rapper from Adelaide, South Australia. Allday became active in 2011, when Gaynor began uploading his music for free online. Millennial rapper Allday got his break with a pair of radio hits in his home country of Australia in 2014. "Right Now" and "You Always Know the DJ" were included on his debut album, Startup Cult. Since his debut, Allday continues to establish himself as a household title with tracks like “Wonder Drug” and “Protection” which received ARIA Gold awards.`,
      //       spotify: {
      //         articleUrl:
      //           "https://open.spotify.com/article/2Ltr0s15RyvsjqWzSmiSRs?si=uTbBZc32RhC75qp7tlOfzw",
      //         embedUrl:
      //           "https://open.spotify.com/embed/article/2Ltr0s15RyvsjqWzSmiSRs?utm_source=generator"
      //       },
      //       backgroundUrl: "https://assets.codepen.io/152347/allday.jpg"
      //     },
      //     {
      //       title: "Boo Seeka",
      //       description: `Boo Seeka is the article title of Australian electro-pop singer-songwriter, Ben Gumbleton. After bursting onto the scene in 2015 with his debut song, Kingdom Leader - he has continued to establish himself as a must-see live act with his unmatchable energy, and continuous flow of hits such as Deception Bay, Oh My, Does This Last, Never Enough & Don’t Waste Your Love.`,
      //       spotify: {
      //         articleUrl:
      //           "https://open.spotify.com/article/1SFz3S9eSUTc49ysstadiO?si=C3KO89rcTbeJqZzsdedesA",
      //         embedUrl:
      //           "https://open.spotify.com/embed/article/1SFz3S9eSUTc49ysstadiO?utm_source=generator"
      //       },
      //       backgroundUrl: "https://assets.codepen.io/152347/boo-seeka.jpg"
      //     },
      //     {
      //       title: "Running Touch",
      //       description: `Running Touch is a triple threat singer, songwriter and producer.
      // His first project ‘A Body Slow’ hit #1 on itunes electronic album. Fast forward to 2018 ‘My Hands’ gained global attention being added to major playlists around the world and voted sexiest song by Triple J listeners.  His follow up Single a collaboration with Hayden James ‘Better Together’ is an international hit that reached #1 on iTunes USA.`,
      //       spotify: {
      //         articleUrl:
      //           "https://open.spotify.com/article/5bdwzvp6eirvqh0TwOwjgE?si=89zOMpUxQ-yHGnDcYs0M_w",
      //         embedUrl:
      //           "https://open.spotify.com/embed/article/5bdwzvp6eirvqh0TwOwjgE?utm_source=generator"
      //       },
      //       backgroundUrl: "https://assets.codepen.io/152347/running-touch.jpg"
      //     }
        ];
   
  

  </script>
  <!-- <script setup>
  import { ref } from 'vue';
  const active= ref(0);
  // let articles=[];
  // async function getList() {
  //   articles = await this.$api(
  //       "https://317063c7-d634-4287-b420-c464099608f2.mock.pstmn.io/article", "get"
  //     );
  // }
  const articles= await fetch("https://317063c7-d634-4287-b420-c464099608f2.mock.pstmn.io/article").then(res => res.json());

  //[console 확인]  console.dir(articles);
  </script> -->
   
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