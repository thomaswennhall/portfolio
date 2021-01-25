<template>
  <section id="projects-view">
      <h1 class="heading">What I do</h1>
      <p class="projects-text">
          (Here is a collection of projects I have done. 
          Some are assignments from school and some are 
          projects I have created in my spare time.)
      </p>
      <ProjectCard class="project-card"
        v-for="project in firstThree" 
        :key="project.id" 
        :project="project"
      />
      <div v-if="showAllProjects">
        <ProjectCard class="project-card"
            v-for="project in theRest" 
            :key="project.id" 
            :project="project"
        />
      </div>
      <button @click="showAll">Show all projects</button>
  </section>
</template>

<script>
import ProjectCard from '@/components/ProjectCard.vue'

export default {
    components: { ProjectCard },

    data(){ return {
        showAllProjects: false
    }},

    computed: {
        projectsArr(){
            return this.$root.projects
        },
        firstThree(){
            return this.projectsArr.slice(0, 3)
        },
        theRest(){
            return this.projectsArr.slice(3)
        }
    },

    methods: {
        showAll(){
            this.showAllProjects = !this.showAllProjects
        }
    }
}
</script>

<style lang="scss" scoped>
    #projects-view{
        background-color: $primary-green;
        display: flex;
        flex-direction: column;

        .projects-text{
            font-size: 0.8rem;

            letter-spacing: 0.2rem;
            line-height: 1.2rem;
        }

        button{
            border: 0.2rem solid black;
            margin-top: 2rem;

            &:hover{
                background-color: #fff;
            }
        }
    }
</style>