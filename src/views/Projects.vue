<template>
  <section id="projects">
      <h1 class="section-heading">What I do</h1>
      <p class="projects-text">
        Here is a collection of projects I have done. Some are assignments from
        school and some are projects I have done in my spare time.
      </p>
    <article class="project-cards">
      <ProjectCard
        class="project-card"
        v-for="project in projectsArr"
        :key="project.id"
        :project="project"
      />
    </article>
  </section>
</template>

<script>
import ProjectCard from "@/components/ProjectCard.vue";

export default {
  components: { ProjectCard },

  computed: {
    projectsArr() {
      return this.$root.projects;
    }
  }

};
</script>

<style lang="scss" scoped>
#projects {
  background-color: $primary-green;
  display: flex;
  flex-direction: column;

  .projects-text {
    font-size: 0.9rem;
    letter-spacing: 0.2rem;
    line-height: 1.2rem;
    grid-column: 4 / span 4;
    margin-bottom: 2rem;
  }

  @media screen and (min-width: 650px) {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: auto;

    .projects-text {
      grid-column: 4 / span 4;
    }

    .project-cards{
      grid-column: 5 / span 9;
      display: flex;
      flex-wrap: wrap;

      min-height: 50%;
    }

  }
}
</style>