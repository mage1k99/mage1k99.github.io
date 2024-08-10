<script setup>
definePageMeta({
  layout: "main",
});
useHead({
  title: "Home",
});
</script>
<template>
  <section class="content">
    <div class="container mx-auto">
      <div class="prose">
        <h1 class="text-center">Hey There 👋</h1>
        <p>
          I am MageshBabu, a Software Engineer working at
          <a href="https://memorres.com">Memorres Digital.</a>
        </p>
        <p>
          I work on different kinds of projects and various tech stacks. Created
          projects, most of them are private for now. New projects are yet to
          come. I choose a simple yet aesthetic design, that's the reason for
          this design.
        </p>
        <p>
          Also planning to create a blog with this site. I will be updating this
          site. You can always say hello by using one of
          <nuxt-link to="contact">these.</nuxt-link>
        </p>
        <p>
          Apart from programming, I also enjoy listening to music, watching
          anime, movies and series. currently my hobby is to gardening
        </p>
        <p>
          You can see my professional work experience
          <nuxt-link to="work-experience">here</nuxt-link>
        </p>
        <hr />
      </div>
    </div>
  </section>
</template>
