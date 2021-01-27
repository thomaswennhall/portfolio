<template>
  <div id="app">
    <Home class="view view--home" />
    <NavBar class="nav-bar"/>
    <About class="view view--about" />
    <Projects class="view view--projects" />
    <Contact class="view view--contact" />
  </div>
</template>

<script>
import About from "@/views/About.vue";
import Home from "@/views/Home.vue";
import Projects from "@/views/Projects.vue";
import Contact from "@/views/Contact.vue";
import NavBar from "@/components/NavBar.vue";

export default {
  components: { About, Home, Projects, Contact, NavBar },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Fjalla+One&display=swap");

*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
html{
  scroll-behavior: smooth;
}

h1,
h2,
a,
p,
button {
  font-family: "Fjalla One", sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
}
h1{
  font-size: 2rem;
}
a{
  text-decoration: none;
  color: black;
}
p{
  line-height: 1.4rem;
}

button{
  outline: none;
  background-color: transparent;
  border: none;
}

.nav-bar{
  position: fixed;
  top: 0;
  display: none;
  height: 10vh;
}

.view{
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(11, 1fr);

  padding: 2rem;
  @media screen and (min-width: 650px) {
    padding: 4rem;
  }

  &--about, &--projects, &--contact{
    min-height: 100vh;
  }

  &--home{
    height: 100vh;
  }
}
</style>
