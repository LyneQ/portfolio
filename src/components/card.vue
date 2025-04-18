<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "card",
  props: {
    image: {
      type: String,
      default: "https://placehold.co/200"
    },
    title: {
      type: String,
      default: "Card title"
    },
    text: {
      type: String,
      default: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita impedit in iure molestias praesentium repellat!"
    },
    promoteUrl: {
      type: String,
      default: "/"
    }
  },
  data() {
    return {
      imageUrl: new URL(this.image, import.meta.url).href
    }
  },
  methods: {
    redirectTo(URL: string): void {
      if (confirm(`Are you sure you want to go to ${URL}`)) {
        window.location.href = URL;
      } else {
        console.log("User canceled redirection to ", URL.toString());
      }
    },
  }
})
</script>

<template>
  <div class="card">
    <img class="card-img" :src="imageUrl" alt="Card image" @click="redirectTo(promoteUrl)"/>
    <div class="card-body">
      <h3 class="card-title">{{ title }}</h3>
      <p class="card-text">
        {{ text }}
      </p>
    </div>
  </div>
</template>

<style scoped>
.card {
  background-color: var(--color-surface);
  border-top: 3px solid var(--color-secondary);
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  gap: 1rem;
  padding: 1rem;
  flex-direction: row;
  align-items: center;
}

.card-img {
  border-radius: 0.5rem;
  height: 200px;
  width: 200px;

  max-width: 25vw;
  max-height: 25vw;
  transition: transform 0.5s ease;

  &:hover {
    transform: scale(1.1);
    transition: transform 0.5s ease;
    cursor: pointer;
  }
}

.card-body {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  text-align: center;
}

.card-title {
  font-size: 1.5rem;
}

.card-text {
  font-size: 1rem;
  text-align: left;
}

@media (max-width: 1100px), (max-width: 480px) {

  .card {
    flex-direction: column;
  }

  .card-img {
    max-width: 25vw;
    max-height: 25vw;
  }

  .card-title {
    font-size: 1rem;
  }

  .card-text {
    font-size: 0.8rem;
  }

}
</style>