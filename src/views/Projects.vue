<template>
  <section id="projects-view">
      <h1 class="heading">What I do</h1>
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
        background-color: rgb(60, 179, 99);
        display: flex;
        flex-direction: column;
    }
</style>