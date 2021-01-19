<template>
  <article class="project-card">
      <h2>{{ project.title }}</h2>
      <p>{{ project.description }}</p>
      <a :href="project.url" target="_blank">Visit website</a>
  </article>
</template>

<script>
export default {
    props: { project: Object}
}
</script>

<style lang="scss" scoped>
    .project-card{
        padding-top: 1rem;

        h2{
            font-size: 1.6rem;
        }

        p{
            font-size: 1rem;
        }

        a{
            text-decoration: none;
            font-size: 1rem;
            color: black;

            &:hover{
                color: #fed05a;
            }
        }
    }
</style>