<script setup lang="ts">

import { ref, onMounted, onUnmounted } from "vue";

const circle = ref<HTMLElement | null>(null);

onMounted(() => {
  document.body.addEventListener("mousemove", (e) => {
    if (circle.value) {
      circle.value.style.left = e.clientX + "px";
      circle.value.style.top = e.clientY + "px";
    }
  });
});

</script>

<template>
  <slot/>
  <div class="background">
  </div>
</template>

<style scoped>

.background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background: var(--color-background);
  overflow: hidden;
}



</style>