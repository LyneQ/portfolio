<script setup lang="ts">
import {ref, watch} from "vue";

const isMenuOpen = ref(false);
const isDesktop = ref(window.innerWidth > 650);

const handleBurgerClick = () => {
  console.log("clicked", isMenuOpen.value);
  isMenuOpen.value = !isMenuOpen.value;
};

import {onMounted, onUnmounted} from "vue";

const updateWidth = () => {
  isDesktop.value = window.innerWidth > 650;
};

onMounted(() => {
  window.addEventListener("resize", updateWidth);
  updateWidth();
});

onUnmounted(() => {
  window.removeEventListener("resize", updateWidth);
});

</script>

<template>
  <section>
    <header>
      <div class="wrapper">
        <h1 class="name">Lyne Q.</h1>
        <img class="burgerButton" src="/burger.svg" alt="Menu" draggable="false" v-bind:onclick="handleBurgerClick"/>
        <nav class="desktop-menu" v-show=" isDesktop ">
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        <ul class="social-links">
          <li>
            <a href="https://github.com/LyneQ" target="_blank">
              <svg class="github" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/quequin-lyne/" target="_blank">
              <svg class="linkedin" version="1.0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 840.000000 779.000000" preserveAspectRatio="xMidYMid meet">
                <g transform="translate(0.000000,779.000000) scale(0.100000,-0.100000)" fill="current" stroke="none">
                  <path d="M475 7780 c-215 -43 -387 -200 -449 -409 -15 -50 -16 -358 -16 -3476 0 -3104 1 -3426 16 -3476 59 -202 231 -362 433 -405 61 -12 520 -14 3473 -11 3146 2 3407 3 3450 19 94 34 164 75 227 133 79 74 122 140 158 242 l28 78 0 3420 0 3420 -28 78 c-69 195 -212 326 -415 378 -74 19 -146 19 -3456 18 -1860 -1 -3399 -5 -3421 -9z m1468 -1098 c113 -41 180 -84 267 -172 94 -93 145 -180 176 -300 23 -87 23 -244 0 -330 -49 -180 -185 -349 -347 -429 -193 -95 -405 -95 -599 1 -115 56 -239 178 -292 288 -56 112 -72 187 -71 315 0 90 5 125 26 190 59 180 173 312 342 395 122 61 170 71 315 66 93 -3 140 -9 183 -24z m3517 -1733 c631 -57 984 -373 1113 -995 61 -293 67 -425 67 -1691 l0 -1103 -575 0 -574 0 -4 1083 c-4 1148 -4 1138 -52 1303 -28 96 -83 193 -144 255 -105 104 -216 143 -411 143 -210 -1 -338 -46 -461 -161 -108 -102 -172 -246 -210 -475 -9 -53 -13 -349 -16 -1110 l-4 -1038 -575 0 -574 0 0 1855 0 1855 555 0 555 0 0 -255 c0 -140 3 -255 8 -255 4 0 27 33 52 73 61 98 204 240 318 314 263 173 557 237 932 202z m-3150 -1934 l0 -1855 -575 0 -575 0 0 1855 0 1855 575 0 575 0 0 -1855z"/>
                </g>
              </svg>
            </a>
          </li>
          <li>
            <a href="https://bsky.app/profile/lyneq.tech" target="_blank">
              <svg class="bluesky" xmlns="http://www.w3.org/2000/svg" viewBox="0 -3.268 64 68.414"><path fill="current" d="M13.873 3.805C21.21 9.332 29.103 20.537 32 26.55v15.882c0-.338-.13.044-.41.867-1.512 4.456-7.418 21.847-20.923 7.944-7.111-7.32-3.819-14.64 9.125-16.85-7.405 1.264-15.73-.825-18.014-9.015C1.12 23.022 0 8.51 0 6.55 0-3.268 8.579-.182 13.873 3.805zm36.254 0C42.79 9.332 34.897 20.537 32 26.55v15.882c0-.338.13.044.41.867 1.512 4.456 7.418 21.847 20.923 7.944 7.111-7.32 3.819-14.64-9.125-16.85 7.405 1.264 15.73-.825 18.014-9.015C62.88 23.022 64 8.51 64 6.55c0-9.818-8.578-6.732-13.873-2.745z"/></svg>
            </a>
          </li>
        </ul>
      </div>
      <nav class="mobile-menu" v-show=" isMenuOpen || isDesktop ">
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

    </header>
    <slot/>
  </section>

</template>

<style scoped>
li {
  list-style: none;
}

header {
  background-color: var(--color-surface);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  position: fixed;
  width: 100%;

  .wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* padding: 1rem; */
    padding: 0 15vw;

    @media screen and (max-width: 450px) {
      padding: 0 8vw;
    }

    .burgerButton {
      display: none;
      font-size: 2rem;
      padding: 0 1rem;
      background: none;
      border: none;
      cursor: pointer;

      @media screen and (max-width: 650px) {
        display: block;
      }
    }

    .social-links {
      position: relative;
      z-index: 1;

      width: fit-content;

      display: flex;
      flex-direction: row;
      gap: 1rem;
      list-style: none;
      padding: 0;
      margin: 0;
      align-items: center;
      justify-content: flex-end;

      li {
        width: 32px;
        height: 32px;
      }

      svg {
        transition: all 0.2s ease-in-out;
        width: 32px;
        height: 32px;

        fill: var(--color-text-light);

        &:hover {
          transition: all 0.2s ease-in-out;
        }
      }

      svg.bluesky:hover {
        fill: #0085ff;
      }
      svg.linkedin:hover {
        fill: #0a66c2;
      }
      svg.github:hover {
        fill: #000000;
      }

    }

    .name {
      font-size: 2rem;

      background: linear-gradient(45deg, var(--color-accent), var(--color-accent), var(--color-accent), var(--color-secondary));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }




  .desktop-menu > ul {
    display: flex;
    list-style: none;
    gap: 1rem;
    padding: 0;
  }

  .mobile-menu > ul {
    display: none;

    @media screen and (max-width: 650px) {
      flex-direction: column;
      position: absolute;
      display: flex;
      align-items: center;
      top: 100%;
      left: 0;
      width: 100%;
      background-color: var(--color-surface);
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      padding: 1rem;
      gap: 1rem;
    }
  }
}
</style>