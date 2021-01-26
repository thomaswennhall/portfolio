<template>
  <section id="about">
      <h1 class="heading">Who I am</h1>
        <div>
          <p> 
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Deleniti et tempore sequi atque nam quam quaerat ducimus, quo illum possimus deserunt itaque? 
            Harum est sint labore. 
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Deleniti et tempore sequi atque nam quam quaerat ducimus, quo illum possimus deserunt itaque? 
            Harum est sint labore. Est accusantium nam expedita.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Deleniti et tempore sequi atque nam quam quaerat ducimus, quo illum possimus deserunt itaque? 
            Harum est sint labore.
          </p>
        </div>
  </section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  #about{
    background-color: $primary-pink;

    display: flex;
    flex-direction: column;

    @media screen and (min-width: 650px){
      display: grid;
      grid-template-rows: 100%;
      grid-template-columns: repeat(3, 1fr);
      p{
        grid-column: 2;
      }
    }

    p{
      text-transform: none;
      margin-top: 1rem;
    }
  }
</style>