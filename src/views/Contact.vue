<template>
  <section id="contact">
    <h1 class="heading">How to find me</h1>
    <a class="link-github" href="https://github.com/thomaswennhall">
      <img
        class="icon icon-github"
        src="@/assets/github.svg"
        alt="GitHub Icon"
      />
    </a>

    <a
      class="link-linkedin"
      href="https://www.linkedin.com/in/thomasbentleywennhall"
    >
      <img
        class="icon icon-linkedin"
        src="@/assets/linkedin_round.svg"
        alt="LinkedIn Icon"
      />
    </a>
    <a class="link-mail" href="mailto:wennhall@gmail.com">
      <img
        class="icon icon-mail"
        src="@/assets/mail_round.svg"
        alt="E-mail Icon"
      />
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
export default {};
</script>

<style lang="scss" scoped>
#contact {
  background-color: tomato;

  .heading {
    grid-column: span 5;
  }

  .icon {
    width: 4rem;
  }

  .link {

    &-github {
      grid-column: 1;
      grid-row: 3;
    }
    &-linkedin {
      grid-column: 2;
      grid-row: 5;
    }
    &-mail {
      grid-column: 4;
      grid-row: 4;
    }
  }

  p {
    grid-column: span 5;
    grid-row: 7 / span 5;
  }
}
</style>