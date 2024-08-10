<script setup>
definePageMeta({
  layout: "main",
});
useHead({
  title: "Contact",
});
</script>
<template>
  <section class="content">
    <div class="container mx-auto">
      <div class="prose">
        <h1 class="text-center">Reach Me!</h1>

        <div class="cards max-w-[300px] mx-auto">
          <div class="contact | flex items-center gap-3 mb-5">
            <div class="i-mdi-github w-6 h-6 bg-gray-500"></div>
            <a href="https://github.com/mage1k99" target="_blank">
              github/mage1k99
            </a>
          </div>
          <div class="contact | flex items-center gap-3 mb-5">
            <div class="i-mdi-gmail w-6 h-6 bg-red-500"></div>
            <a href="mailto:mage1k99@gmail.com">mage1k99@gmail.com</a>
          </div>
          <div class="contact | flex items-center gap-3 mb-5">
            <div class="i-mdi-telegram w-6 h-6 bg-[#2294cf]"></div>
            <a href="https://t.me/mage1k99x" target="_blank">@mage1k99</a>
          </div>
          <div class="contact | flex items-center gap-3 mb-5">
            <div class="i-mdi-linkedin w-6 h-6 bg-blue-500"></div>
            <a href="https://linkedin.com/in/mage1k99" target="_blank"
              >MageshBabu</a
            >
          </div>
          <div class="contact | flex items-center gap-3 mb-5">
            <div class="i-mdi-instagram w-6 h-6 bg-red-500"></div>
            <a href="https://instagram.com/mage1k99" target="_blank"
              >@mage1k99</a
            >
          </div>
          <div class="contact | flex items-center gap-3 mb-5">
            <div class="i-mdi-file-document w-6 h-6 bg-red-500"></div>
            <a download href="/MageshBabu_Resume_Public.pdf" target="_blank"
              >CV/Resume</a
            >
          </div>
          <!--  -->
        </div>
      </div>
    </div>
  </section>
</template>
