<template>
  <article class="project-card">
      <h2>{{ project.title }}</h2>
      <p>{{ project.description }}</p>
      <a :href="project.url" target="_blank">Visit website</a>
  </article>
</template>

<script>
export default {
    props: { project: Object }
}
</script>

<style lang="scss" scoped>
    .project-card{
        display: flex;
        flex-direction: column;

        padding-top: 1rem;

        h2{
            font-size: 1.6rem;
        }

        p{
            font-size: 1rem;
        }

        a{
            text-align: center;
            font-size: 1rem;
            border: 0.16rem solid black;
            border-radius: 0.2rem;
            padding: 0.2rem;
            margin-top: 0.4rem;
            max-width: 54%;

            background-color: #fed05a;

            &:hover{
                background-color: rgb(60, 179, 99);
            }
        }
    }
</style>