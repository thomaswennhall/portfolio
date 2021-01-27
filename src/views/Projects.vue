<template>
  <section id="projects">
    <div>
      <h1 class="heading">What I do</h1>
      <p class="projects-text">
        Here is a collection of projects I have done. Some are assignments from
        school and some are projects I have created in my spare time.
      </p>
    </div>
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

  @media screen and (min-width: 650px) {
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    grid-template-columns: repeat(3, 1fr);

    .project-card{
        grid-column: 2;
    }
    .rest-of-projects {
      grid-row: 1 / span 2;
      grid-column: 3;
    } 

    .projects-text{
        width: 80%;
    }

    .show-all{
        width: 50%;
        height: 50%;
        place-self: center;
    }
  }

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
}
</style>