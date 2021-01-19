<template>
    <nav class="drop-down-menu">
        <a href="#about">WHO I AM</a>
        <a href="#projects">WHAT I DO</a>
        <a href="#">HOW TO FIND ME</a>
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
            text-decoration: none;
            text-align: end;
            font-size: 1.2rem;
            line-height: 4rem;
            color: black;

            &:hover{
                color: pink;
            }
        }
    }
</style>