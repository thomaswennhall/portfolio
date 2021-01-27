<template>
    <nav class="drop-down-menu">
        <a href="#about">WHO I AM</a>
        <a href="#projects">WHAT I DO</a>
        <a href="#contact">HOW TO FIND ME</a>
    </nav>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
    .drop-down-menu{
        display: flex;
        flex-direction: column;

        a{
            text-align: end;
            font-size: 1.2rem;
            line-height: 4rem;

            &:active{
                color: $primary-pink;
            }

            &:nth-of-type(2){
                &:active{
                    color: $primary-green;
                }
            }
            &:nth-of-type(3){
                &:active{
                    color: $primary-red;
                }
            }
        }
    }
</style>