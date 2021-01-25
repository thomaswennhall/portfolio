<template>
  <section id="projects-view">
      <h1 class="heading">What I do</h1>
      <p>
          Here is a collection of projects I have done. 
          Some are assignments from school and some are 
          projects I have created in my spare time.
      </p>
      <ProjectCard class="project-card"
        v-for="project in projectsArr" 
        :key="project.id" 
        :project="project"
      />
  </section>
</template>

<script>
import ProjectCard from '@/components/ProjectCard.vue'

export default {
    components: { ProjectCard },

    computed: {
        projectsArr(){
            return this.$root.projects
        }
    }
}
</script>

<style lang="scss" scoped>
    #projects-view{
        background-color: $primary-green;
        display: flex;
        flex-direction: column;

        p{
            font-size: 0.8rem;
        }
    }
</style>