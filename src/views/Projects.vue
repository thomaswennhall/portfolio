<template>
  <section id="projects">
      <h1 class="section-heading">What I do</h1>
     <!--  <p class="projects-text">
        Here is a collection of projects I have done. Some are assignments from
        school and some are projects I have created in my spare time.
      </p> -->
    <ProjectCard
      class="project-card"
      v-for="project in firstThree"
      :key="project.id"
      :project="project"
    />
    <div class="rest-of-projects" v-if="showAllProjects">
      <ProjectCard
        class="project-card"
        v-for="project in theRest"
        :key="project.id"
        :project="project"
      />
    </div>
    <button v-if="projectsArr.length > 3" class="show-all" @click="showAll">{{showAllText}}</button>
  </section>
</template>

<script>
import ProjectCard from "@/components/ProjectCard.vue";

export default {
  components: { ProjectCard },

  data() {
    return {
      showAllProjects: false,
      showAllText: "show all projects"
    };
  },

  computed: {
    projectsArr() {
      return this.$root.projects;
    },
    firstThree() {
      return this.projectsArr.slice(0, 3);
    },
    theRest() {
      return this.projectsArr.slice(3);
    }
  },

  methods: {
    showAll() {
      this.showAllProjects = !this.showAllProjects;
      if(this.showAllText === "show all projects"){
          this.showAllText = "show less projects"
        } else{
          this.showAllText = "show all projects"
        }
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
  }

  .show-all {
    border: 0.2rem solid black;
    border-radius: 0.5rem;
    margin-top: 2rem;
    padding: 1rem;

    &:hover {
      background-color: $primary-red;
    }
  }

  @media screen and (min-width: 650px) {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: repeat(6, 1fr);
    gap: 2rem;

    .project-card{
      &:first-of-type{
        grid-column: 5 / span 3;
        grid-row: 3 / span 3;
      }
      &:nth-of-type(2){
        grid-column: 8 / span 3;
        grid-row: 3 / span 3;
      }
    }
    .rest-of-projects {
      grid-row: 1 / span 3;
      grid-column: 3 / span 3;
    }

    .section-heading{
      grid-column: span 3;
    }
    .projects-text{
      grid-column: span 3;
      grid-row: 2;
    }

    .show-all{
      width: 50%;
      height: 50%;
      place-self: center;
    }
  }
}
</style>