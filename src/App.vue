<template>
  <header>
    <div class="wrapper">
      <h1 class="name">Lyne Q.</h1>
      <nav>
        <ul>
          <li><a href="#">About</a></li>
          <li><a href="#">Projects</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </div>
  </header>

  <main id="about">
    <div class="container">
      <img class="avatar" src="https://placehold.co/200" alt="Avatar" />
      <div class="text">
        <h1>
          Hi, I'm<span class="stack" style="--stacks: 3;">
            <span style="--index: 0;">Lyne Quequin</span>
            <span style="--index: 1;">Lyne Quequin</span>
            <span style="--index: 2;">Lyne Quequin</span>
          </span>
        </h1>
        <p class="quote">
          The only limit to what you can do, <br/>
          is what you're willing to become.
        </p>
      </div>
    </div>

    <div class="intro">
      <h1> I believe to be full-stack developer</h1>
      <h5> currently learning web development at <a href="https:/becode.org/">@BeCode.org</a>, </h5>
      <p>
        I love to create web applications and websites that are both beautiful and functional.<br/>
        I'm currently looking for new opportunities, so feel free to contact me if you think I could be a good fit for your team!
      </p>
    </div>
  </main>

  <section id="experience">
    <Card
      image="/becode.jpg"
      title="Junior Web Developer"
      text="learned web development at BeCode, a 7-month intensive training program."
    />
    <Card
      image="/johndoe.jpg"
      title="John Doe Inc."
      text="3-month internship at John Doe Inc. as a junior developer, working on a E-commerce website."
    />
    <Card
      image="/johndoe.jpg"
      title="John Doe Inc."
      text="3-month internship at John Doe Inc. as a junior developer, working on a E-commerce website."
    />
    <Card
      image="/johndoe.jpg"
      title="John Doe Inc."
      text="3-month internship at John Doe Inc. as a junior developer, working on a E-commerce website."
    />
  </section>

  <section id="projects">
    <Project
      :reverse="false"
      status="in progress"
      image="https://placehold.co/900x700"
      title="Project Delta"
      text="This project is focused on creating a new social media platform with unique features."
      link="https://example.com/project-delta"
    />
    <Project
      :reverse="true"
      status="completed"
      image="https://placehold.co/900x700"
      title="Project Epsilon"
      text="A completed project that developed a cutting-edge data analytics tool."
      link="https://example.com/project-epsilon"
    />
    <Project
      :reverse="false"
      status="in progress"
      image="https://placehold.co/900x700"
      title="Project Zeta"
      text="This project aims to build a new cloud storage solution with enhanced security."
      link="https://example.com/project-zeta"
    />
  </section>

  <section id="contact">
    <h1>Contact</h1>
    <p>Interested in working together? <br/>
      Feel free to contact me at the following email address:</p>
    <a href="mailto:lyne.quequin@gmail.com">lyne.quequin@gmail.com</a>
  </section>
</template>

<style scoped>
@import "src/assets/base.css";

header {
  background-color: var(--color-surface);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  .wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;

    ul {
      display: flex;
      list-style: none;
      gap: 1rem;
    }

    .name {
      @media (max-width: 480px) {
        padding-left: 0;
      }
      padding-left: 15vw;
      font-size: 2rem;

      background: linear-gradient(45deg, var(--color-accent), var(--color-accent), var(--color-accent), var(--color-secondary));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
}

main {
  padding: 2rem;
  text-align: center;

  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;

    .avatar {
      border-radius: 50%;
    }

    .text {
      text-align: left;

      @media (max-width: 480px) {
        h1 {
          font-size: 1.5rem;
          width: fit-content;
          margin: 0 auto;
        }

        span {
          width: fit-content;
        }

        .quote {
          font-size: 1rem;
        }
      }
    }
  }

  .intro {
    margin: 7vw auto 5vw;
    display: block;
    text-align: initial;
    width: 50vw;

    h5 {
      margin-bottom: 2rem;
    }

    a {
      font-weight: bold;
    }
  }
}

#projects {
  display: flex;
  flex-direction: column;
  align-items: center;
}

#experience {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;
  justify-content: center;
  align-content: center;
  gap: 1rem;
  margin: 0 10vw;

  & > * {
    width: fit-content !important;
  }
}

#contact {
  text-align: center;
  padding: 2rem;
}
</style>

<script setup lang="ts">
import Card from "@/components/card.vue";
import Project from "@/components/project.vue";
</script>