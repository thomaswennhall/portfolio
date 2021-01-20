<template>
    <button @click="toggleDropDown" class="menu-button">
        <MenuBurger v-if="burger" class="menu-icon"/>
        <MenuCross v-else />
    </button>
</template>

<script>
import MenuBurger from '@/components/svg-icons/MenuBurger.vue'
import MenuCross from '@/components/svg-icons/MenuCross.vue'

export default {
    components: { MenuBurger, MenuCross },
    data(){ return {
        burger: true
    }},
    
    methods: {
    switchIcon(){
        if(this.burger === false){
            this.burger = true
        } else{
            this.burger = false
        }
    },
    toggleDropDown(){
        this.switchIcon()
        this.$emit("menu-clicked")
    }
  }
}
</script>

<style lang="scss" scoped>
    .menu-button{
        cursor: pointer;
        transition: 0.2s;
        &:active{
            transform: scale(0.7);
        }
    }

</style>