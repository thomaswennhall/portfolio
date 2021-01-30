<template>
  <nav id="nav">
    <a 
      @click="toggleAbout" 
      :class="{ active: active.about }" 
      href="#about"
      >WHO I AM</a
    >
    <a
      @click="toggleProjects"
      :class="{ active: active.projects }"
      href="#projects"
      >WHAT I DO</a
    >
    <a
      @click="toggleContact"
      :class="{ active: active.contact }"
      href="#contact"
      >HOW TO FIND ME</a
    >
  </nav>
</template>

<script>
export default {
  data() {
    return {
      active: {
        about: false,
        projects: false,
        contact: false
      }
    };
  },

  methods: {
    toggleAbout() {
      this.active.about = true;
      this.active.projects = false;
      this.active.contact = false;
    },
    toggleProjects() {
      this.active.about = false;
      this.active.projects = true;
      this.active.contact = false;
    },
    toggleContact() {
      this.active.about = false;
      this.active.projects = false;
      this.active.contact = true;
    }
  }
};
</script>

<style lang="scss" scoped>
nav {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;

  a {
    margin-bottom: 2rem;

    &:hover {
      color: $primary-pink;
    }
    &.active {
      font-size: 2rem;
      &:hover {
        color: black;
      }
    }
  }
}
</style>