<template>
  <div id="app">
    <Home class="view home-view" />
    <About class="view about-view" />
    <Projects class="view projects-view" />
  </div>
</template>

<script>
import About from "@/views/About.vue";
import Home from "@/views/Home.vue";
import Projects from "@/views/Projects.vue";

export default {
  components: { About, Home, Projects },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Fjalla+One&display=swap");

/* COLOURS */
$base-yellow: #fed05a;
/* COLOURS */

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
html {
  scroll-behavior: smooth;
}

h1,
h2,
a,
p {
  font-family: "Fjalla One", sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
}
h1{
  font-size: 2rem;
}

button {
  outline: none;
  background-color: transparent;
  border: none;
}

.view {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(12, 1fr);

  min-height: 100vh;
  padding: 2rem;
}
</style>
