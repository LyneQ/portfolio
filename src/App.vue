<script setup lang="ts">
import Card from "@/components/card.vue";
import Project from "@/components/Project.vue";
import Navigation from "@/components/Navigation.vue";
import Background from "@/components/Background.vue";

</script>
<template>

  <Background>
    <Navigation>
      <main id="about">
        <div class="container">
          <img class="avatar" src="/lyneq2.png" alt="Illustration of me"/>
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
          <h1>i aspire to become a full-stack developer,<br/> I'm also interested in DevOps</h1>
          <h5> currently learning web development at <a href="https:/becode.org/">@BeCode.org</a>, </h5>
          <p>
            I love to create web applications and websites that are both beautiful and functional.<br/>
            I'm currently looking for new opportunities, so feel free to contact me if you think I could be a good fit for
            your team!
          </p>
        </div>
      </main>
      <section id="experience">
        <Card
            image="/becode.png"
            title="Junior Web Developer"
            text="learned web development at BeCode, a 7-month intensive training program."
            promote-url="https://becode.org/"
        />
        <Card
            image="/scitoyen.png"
            title="Service Citoyen"
            text="Volunteered for a 2 month in a retirement home, helping the elderly in my community."
            promote-url="https://www.service-citoyen.be/"
        />
      </section>
      <section id="projects">

        <h2 class="subTitle">Projects</h2>

        <Project
            :reverse="false"
            status="completed"
            image="/genialo.png"
            title="Génial-O"
            text="A discord bot / website that I developed when i started learning Node.js. It's a fun project that train me with vueJS, MongoDB and Debian server."
            link="https://github.com/Genial-Team/Genial-O-14"
        />
        <Project
            :reverse="true"
            status="completed"
            image="https://placeholder.lyneq.tech/256x128?label=Placeholder%20!&font_size=32&font_color=e0e0e0&font_style=Inter&background_color=131313FF"
            title="Placeholder-api"
            text="A small API made with Go that returns a placeholder image with a lot of customization options for fonts an colors and backgrounds, making first for a personal use and because I wanted to strengthen my Go skills."
            link="https://github.com/LyneQ/Placeholder-API"
        />
      </section>
      <section id="contact">
        <h1 class="subTitle">Contact</h1>
        <p>Interested in working together? <br/>
          Feel free to contact me at the following email address:</p>
        <a href="mailto:hey@lyneq.tech">hey@lyneq.tech</a>
      </section>
    </Navigation>
  </Background>


</template>

<style scoped>

.subTitle {
  text-align: center;
  font-size: 2.5rem;
  width: fit-content;
  margin: 2rem auto;
  border-bottom: 2px solid var(--color-accent);

  background: linear-gradient(45deg, var(--color-accent), var(--color-accent), var(--color-accent), var(--color-secondary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

main {
  padding: 5rem 2rem 2rem 2rem;
  text-align: center;

  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;

    .avatar {
      border-radius: 15%;
      width: 15vw;

      @media (max-width: 700px) {
        width: 30vw;
      }

      @media (max-width: 480px) {
        width: 40vw;
      }

    }

    .text {
      text-align: left;

      @media (max-width: 400px) {
        max-width: 50vw;
      }

      @media (max-width: 480px) {
        h1 {
          width: fit-content;
        }

        span {
          width: fit-content;
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

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }

  & > * {
    width: fit-content !important;
  }
}

#contact {
  text-align: center;
  padding: 2rem;
}
</style>