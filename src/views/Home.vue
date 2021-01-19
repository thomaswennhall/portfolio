<template>
  <section class="home">
    <h1 :style="scaleText" class="name">Thomas Bentley Wennhall</h1>
    <BurgerMenu v-on:menu-clicked="menuClicked" class="menu-icon" />
    <DropDown class="drop-down" :class="{ active: isActive }" />
  </section>
</template>

<script>
import BurgerMenu from "@/components/BurgerMenu.vue";
import DropDown from "@/components/DropDown.vue";

export default {
  name: "Home",
  components: { BurgerMenu, DropDown },

  data() {
    return {
      scaleText: "",
      isActive: false
    };
  },

  methods: {
    toggleMenu() {
      if (this.isActive === false) {
        this.isActive = true;
      } else {
        this.isActive = false;
      }
    },
    
    miniText() {
      if (this.scaleText !== "font-size: 1.2rem; grid-column: span 2;") {
        this.scaleText = "font-size: 1.2rem; grid-column: span 2;";
      } else {
        this.scaleText = "";
      }
    },

    menuClicked() {
      this.toggleMenu()
      this.miniText()
    }
  }
};
</script>

<style lang="scss" scoped>

.home {
  background-color: #fed05a;
}

.name {
  grid-column: span 3;
  grid-row: 5 / span 3;

  font-size: 2.3rem;
  line-height: 4rem;
}

.menu-icon {
  grid-column: 5;
  grid-row: 1;
  width: 3rem;

  justify-self: end;
}

.drop-down {
  grid-column: 3 / span 3;
  grid-row: span 4;

  display: none;
}
.active {
  display: flex;
}
</style>
