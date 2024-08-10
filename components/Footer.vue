<script setup>
import { onMounted, ref } from "vue";

const emojis = [
  "🌊",
  "🎉",
  "🦄",
  "🎁",
  "🎋",
  "🎈",
  "🎧",
  "🎸",
  "🎺",
  "🎻",
  "🎶",
  "🎵",
  "🎭",
  "🚀",
  "🌈",
  "🎨",
  "🧑‍🎤",
];

const randomEmoji = ref(emojis[Math.floor(Math.random() * emojis.length)]);

onMounted(() => {
  const link = document.createElement("link");
  link.setAttribute("rel", "stylesheet");
  link.setAttribute(
    "href",
    "https://fonts.googleapis.com/css2?family=Noto+Color+Emoji&display=swap"
  );
  document.head.appendChild(link);
});
</script>

<template>
  <footer>
    <div class="container mx-auto">
      <p class="text-gray-700 text-center text-lg">{{ randomEmoji }}</p>
    </div>
  </footer>
</template>
