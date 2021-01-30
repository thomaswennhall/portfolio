<template>
  <section id="about">
    <h1 class="section-heading">Who I am</h1>
      <article class="article article-first">
        <p>
          My name is Thomas, I grew up in V&auml;ster&aring;s where I spent most
          of my time skateboarding, then playing rugby and doing homework.
        </p>
        <p>
          I studied 3 years in Sundsvall where I graduated with a bachelor&rsquo;s
          degree in industrial design engineering. I then moved to Stockholm to
          receive a master&rsquo;s degree in product development &amp; innovation
          management.
        </p>
        <p>
          After a time of working full-time in a restaurant and learning the
          basics of web-development in my spare time, I am now studying my second
          semester at ITHS in Stockholm to become a Javascript developer.
        </p>
      </article>
      <article class="article article-second">
        <p>
          One thing that I like about web-development is that with only my laptop
          as my aid I can create beautifully functional products with instant
          feedback.
        </p>
        <p>
          I am a logical person and I love solving challenging problems. Working
          with web-development gives me a chance to do what I love, every day.
        </p>
        <p>
          I am currently looking for an internship position starting August 2021.
        </p>
      </article>
  </section>
</template>

<script>
export default {
};
</script>

<style lang="scss" scoped>
#about {
  background-color: $primary-pink;

  display: flex;
  flex-direction: column;

  .section-heading{
    grid-column: span 2;
  }

  p {
    text-transform: none;
    margin-top: 1rem;
    &:first-of-type{
      margin-top: 0;
    }
  }

  .article{
    margin-top: 1rem;
    &:last-of-type{
      margin-bottom: 2rem;
    }
  }

  @media screen and (min-width: 650px) {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: repeat(12, 1fr);
    gap: 0.2rem;

    .section-heading{
      grid-column: span 2;
    }
    .article {
      margin-top: 0;
      &-first{
        grid-column: 4 / span 3;
        grid-row: 1 / span 8;
      }
      &-second{
        grid-column: 8 / span 3;
        grid-row: 6 / span 6;
      }
    }
  }
}
</style>