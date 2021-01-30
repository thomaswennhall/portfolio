<template>
  <section id="contact">
    <h1 class="section-heading">How to find me</h1>
    <a 
      class="link-github" 
      href="https://github.com/thomaswennhall"
      target="_blank"
    >
      <GithubIcon />
    </a>
    <a
      class="link-linkedin"
      href="https://www.linkedin.com/in/thomasbentleywennhall"
      target="_blank"
    >
      <LinkedinIcon />
    </a>
    <a class="link-mail" href="mailto:wennhall@gmail.com">
      <MailIcon />
    </a>
    <p>
      Thanks for scrolling all the way through to the end of my portfolio. 
      If anything interested you on your way down here, please don't hesitate to
      contact me through clicking on one of the icons above. 
      <br/><br/> 
      <span>Best Regards</span> 
      <br/> 
      <span>Thomas</span>
    </p>
  </section>
</template>

<script>
import GithubIcon from '@/components/svg-icons/GithubIcon.vue'
import LinkedinIcon from '@/components/svg-icons/LinkedinIcon.vue'
import MailIcon from '@/components/svg-icons/MailIcon.vue'

export default {
  components: { GithubIcon, LinkedinIcon, MailIcon }
};
</script>

<style lang="scss" scoped>
#contact {
  background-color: $primary-red;
  
  .section-heading {
    grid-column: span 12;
    overflow: auto;
  }

  .link {

    &-github {
      grid-column: 3;
      grid-row: 3;
      
      @media screen and (min-width: 650px) {
        grid-column: 5;
        justify-self: right;
      }
    }
    &-linkedin {
      grid-column: 5;
      grid-row: 4;
      justify-self: right;
       @media screen and (min-width: 650px) {
        grid-column: 6;
      }
    }
    &-mail {
      grid-column: 8;
      grid-row: 3;
    }

    &:active{
      transform: scale(0.7);
    }
  }

  p {
    grid-column: span 12;
    grid-row: 6 / span 4;
    @media screen and (min-width: 650px) {
      grid-column: 5 / span 4;
    }
  }
}
</style>