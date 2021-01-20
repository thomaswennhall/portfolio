<template>
  <section id="about">
      <h1 class="heading">Who I am</h1>
      <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Deleniti et tempore sequi atque nam quam quaerat ducimus, quo illum possimus deserunt itaque? 
        Harum est sint labore. Est accusantium nam expedita. 
        <br/>
        <br/>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Deleniti et tempore sequi atque nam quam quaerat ducimus, quo illum possimus deserunt itaque? 
        Harum est sint labore. Est accusantium nam expedita.
        <br/>
        <br/>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Deleniti et tempore sequi atque nam quam quaerat ducimus, quo illum possimus deserunt itaque? 
        Harum est sint labore. Est accusantium nam expedita.
      </p>
      
  </section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  #about{
    background-color: pink;

    .heading{
      grid-column: span 3;
    }

    p{
      grid-column: span 5;
      grid-row: 2 / span 11;

      text-transform: lowercase;
    }
  }
</style>