<template>
  <nav id="nav">
    <a 
      class="link-about"
      :class="{ active: active.about }" 
      href="#about"
      >WHO I AM</a
    >
    <a
      class="link-projects"
      :class="{ active: active.projects }"
      href="#projects"
      >WHAT I DO</a
    >
    <a
      class="link-contact"
      :class="{ active: active.contact }"
      href="#contact"
      >HOW TO FIND ME</a
    >
  </nav>
</template>

<script>
export default {
  props: {
    active: Object
  }
};
</script>

<style lang="scss" scoped>
nav {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;

  @media screen and (max-width: 650px) {
    display: none;
  }

  a {
    margin-bottom: 2rem;
    &.link-about{
      &:hover {
        color: $primary-pink;
      }
    }
    &.link-projects{
      &:hover {
        color: $primary-green;
      }
    }
    &.link-contact{
      &:hover {
        color: $primary-red;
      }
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