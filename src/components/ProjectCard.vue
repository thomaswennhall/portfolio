<template>
  <article class="project-card">
      <h2>{{ project.title }} {{ project.id }}</h2>
      <p>{{ project.description }}</p>
      <div class="links">
        <a :href="project.url.web" target="_blank">visit website</a>
        <a :href="project.url.code" target="_blank">view code</a>
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

        max-width: 20rem;
        margin-bottom: 1rem;

        h2{
            font-size: 1.5rem;
            margin-bottom: 0.3rem;
        }

        p{
            font-size: 1rem;
        }

        .links{
            display: flex;
            justify-content: start;
            width: 100%;
            margin: 0.6rem 0;
            
            a{
                letter-spacing: 0.2rem;
                font-size: 1rem;
                text-decoration: underline;
                
                @media screen and (min-width: 650px){
                    &:hover{
                        color: $primary-yellow;
                    }
                }

                &:first-of-type{
                    margin-right: 5%;
                }
                &:active{
                    color: transparent;
                }
            }
        }

    }
</style>