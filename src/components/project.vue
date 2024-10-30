<script lang="ts">
import { defineComponent, computed } from 'vue';

export default defineComponent({
  name: "project",
  props: {
    reverse: {
      type: Boolean,
      default: false
    },
    image: {
      type: String,
      default: "https://placehold.co/900x700"
    },
    status: {
      type: String,
      default: "in progress"
    },
    title: {
      type: String,
      default: "Project title"
    },
    text: {
      type: String,
      default: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita impedit in iure molestias praesentium repellat!"
    },
    link: {
      type: String,
      default: ""
    }
  },
  setup(props) {
    const clientIsMobile = window.matchMedia('(max-width: 480px)').matches;
    const flexDirection = computed(() => (props.reverse ? 'row-reverse' : 'row'));
    const textAlignRight = computed(() => (props.reverse ? 'left' : 'right'));
    return { flexDirection, textAlignRight, clientIsMobile };
  }
});
</script>

<template>
  <div class="project" :style="{ flexDirection: flexDirection }">
    <img v-show="!clientIsMobile" class="project-img" :src="image" alt="Project image" />
    <div>
      <div class="project-head" :style="!clientIsMobile ? { textAlign: textAlignRight } : {}">
        <h5>{{ status }}</h5>
        <h3 class="project-title">{{ title }}</h3>
        <img v-show="clientIsMobile" class="project-img" :src="image" alt="Project image" />
      </div>

      <div class="project-body">
        <p class="project-text">
          {{ text }}
        </p>
        <button class="card-btn"><a :href="link"> Read more</a> </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.project {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin: 4rem 0;
}

.project-head {
  padding: 0 1rem;
}

.project-body {
  background-color: rgba(19, 19, 19, 0.7);
  border: 2px solid rgba(41, 27, 59, 0.5);
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 35vw;
  height: 100%;
  text-align: left;
}

.project-img {
  border-radius: 0.5rem;
  height: 100%;
  width: 35vw;
}

.project-title {
  color: var(--color-accent);
  font-size: 1.5rem;
  margin: 0;
}

.card-btn {
  background-color: var(--color-primary);
  border: none;
  border-radius: 0.5rem;
  color: var(--color-accent);
  cursor: pointer;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  width: fit-content;
  margin: 0 auto;
}

.card-btn:hover {
  animation: space-glow-hover 2s infinite;
}


@media (max-width: 480px) {
  .project {
    flex-direction: column;
    gap: 0.5rem;
    align-items: center;
    margin: 3rem 0;
}

 .project-img {
  width: 100%;
  height: auto;
   margin-bottom: 1rem;
  align-self: flex-end;
}

  .project-body {
    width: 100%;
  }

  .card-btn {
    width: 100%;
  }
}
</style>