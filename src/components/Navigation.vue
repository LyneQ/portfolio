<script setup lang="ts">
import {ref, watch} from "vue";
const isMenuOpen = ref(false);
const isDesktop = ref(window.innerWidth > 510);

const handleBurgerClick = () => {
  console.log("clicked", isMenuOpen.value);
  isMenuOpen.value = !isMenuOpen.value;
};

import { onMounted, onUnmounted } from "vue";
import {SlotFlags} from "@vue/shared";

const updateWidth = () => {
  isDesktop.value = window.innerWidth > 510;
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
        <nav v-show=" isMenuOpen || isDesktop ">
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        <img class="burgerButton" src="/burger.svg" alt="Menu" draggable="false" v-bind:onclick="handleBurgerClick"/>
      </div>
    </header>
    <slot/>
  </section>

</template>

<style scoped>
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

    .burgerButton {
      display: none;
      font-size: 2rem;
      padding: 0 1rem;
      background: none;
      border: none;
      cursor: pointer;

      @media screen and (max-width: 510px) {
        display: block;
      }
    }

    ul {
      display: flex;
      list-style: none;
      gap: 1rem;

      @media screen and (max-width: 510px) {
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

    .name {
      font-size: 2rem;

      background: linear-gradient(45deg, var(--color-accent), var(--color-accent), var(--color-accent), var(--color-secondary));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
}
</style>