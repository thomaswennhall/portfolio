<template>
        <button @click="changeImg" class="menu-button">
            <img :src="menuImg" alt="menu icon">
        </button>
</template>

<script>
export default {
    data(){ return {
        menuImg: require("@/assets/Menu.svg")
    }},
    
    methods: {
    showNav(){
        if(this.isActive === false){
            this.isActive = true
        }
    },
    changeImg(){
        this.showNav()
        if(this.menuImg === require("@/assets/Menu.svg")){
            this.menuImg = require("@/assets/cross_thin.svg")
        } else {
            this.menuImg = require("@/assets/Menu.svg")
        }
        this.$emit("menu-clicked")
    }
  }
}
</script>

<style lang="scss" scoped>
    img{
        width: 100%;
    }
</style>