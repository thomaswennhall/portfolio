<template>
  <div id="app">
    <Home class="view view--home" />
    <NavBar class="nav-bar" :class="{sticky: sticky}"/>
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

  data(){ return {
    sticky: false
  }},

  mounted() {
    window.document.onscroll = () => {
     const navBar = document.querySelector('.nav-bar')
     let navPosition = navBar.offsetTop

     if(window.scrollY > navPosition){
       this.sticky = true
        if(window.scrollY < window.innerHeight - navBar.offsetHeight - 32){
          this.sticky = false
        }
       }else{
          this.sticky = false
        } 
    }
  
  }
  
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
  line-height: 1.3rem;
}

button{
  outline: none;
  background-color: transparent;
  border: none;
}

.nav-bar{
  position: absolute;
  bottom: 32px;
  z-index: 10;
  left: 4rem;
  padding-top: 4rem;

  &.sticky{
    position: fixed;
    top: 0;
    bottom: auto;
  }
}

.view{
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(9, 1fr);

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
