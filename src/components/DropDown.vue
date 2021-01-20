<template>
    <nav class="drop-down-menu">
        <a href="#about">WHO I AM</a>
        <a href="#projects-view">WHAT I DO</a>
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

            &:hover{
                color: pink;
            }

            &:nth-of-type(2){
                &:hover{
                    color:rgb(60, 179, 99);
                }
            }
            &:nth-of-type(3){
                &:hover{
                    color:tomato;
                }
            }
        }
    }
</style>