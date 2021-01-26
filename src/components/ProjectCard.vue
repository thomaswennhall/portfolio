<template>
  <article class="project-card">
      <h2>{{ project.title }} {{ project.id }}</h2>
      <p>{{ project.description }}</p>
      <div class="links">
        <a :href="project.url.web" target="_blank">Visit website</a>
        <a :href="project.url.code" target="_blank">Check code</a>
      </div>
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

        margin-top: 1.6rem;

        h2{
            font-size: 1.6rem;
        }

        p{
            font-size: 1rem;
        }

        .links{
            display: flex;
            justify-content: start;
            width: 100%;
            margin-top: 0.6rem;
            
            a{
                display: grid;
                place-items: center;
                
                font-size: 1rem;
                border: 0.16rem solid black;
                border-radius: 0.2rem;
                
                margin-right: 5%;
                max-width: 50%;

                background-color: $primary-pink;
                &:first-of-type{
                    background-color: $primary-yellow;
                }
                &:hover{
                    background-color: transparent;
                }
            }
        }

    }
</style>