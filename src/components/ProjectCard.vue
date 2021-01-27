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

        margin-top: 1.6rem;

        h2{
            font-size: 1.6rem;
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
                
                /* padding: 0.2rem 0.6rem;
                border: 0.16rem solid black;
                border-radius: 0.3rem;
            
                background-color: $primary-pink; */

                &:first-of-type{
                    /* background-color: $primary-yellow; */
                    margin-right: 5%;
                }/* 
                &:active{
                    background-color: transparent;
                } */
            }
        }

    }
</style>