<script setup>
import { useWorkExperienceStore } from "~~/store/data/experience";

definePageMeta({
  layout: "main",
});
useHead({
  title: "Professional Work experience",
});
const experience = useWorkExperienceStore();
</script>
<template>
  <section class="content">
    <div class="container mx-auto">
      <div class="prose">
        <h1 class="text-center">Professional Work experience 🧑‍💻</h1>
        <Timeline :data="experience.experience" />
      </div>
    </div>
  </section>
</template>

<style>
body {
  padding-bottom: 0px;
}
footer {
  padding: 10px;
}
</style>
