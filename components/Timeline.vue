<script setup>
const { data } = defineProps(["data"]);
</script>

<template>
  <div class="container mx-auto p-4">
    <ul class="timeline relative list-none pl-8">
      <li
        v-for="(item, index) in data"
        :key="index"
        class="timeline__item flex"
      >
        <!-- Timeline line and dot -->
        <div class="relative">
          <span
            class="timeline__item__dot absolute top-4 left-1.5 w-4 h-4 bg-primary rounded-full z-10"
          ></span>
          <span
            class="timeline__item__line absolute left-3 top-0 w-1 h-full bg-gray-300"
          ></span>
          <span
            class="timeline__item__horizontal-line absolute top-4 left-4 w-6 h-1 bg-gray-300"
          ></span>
        </div>

        <!-- Content -->
        <div
          class="timeline__item__content dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm rounded-lg p-4 relative w-full ml-6 mb-8"
        >
          <div
            class="timeline__item__content__header flex justify-between items-center mb-2"
          >
            <div class="timeline__item__content__header__title">
              <h4 class="text-lg font-semibold">{{ item.position }}</h4>
              <p class="text-sm mb-1">{{ item.company }}</p>
              <p class="text-sm mt-0">{{ item.date }}</p>
            </div>
          </div>
          <div class="timeline__item__content__footer">
            <div class="timeline__item__content__footer__achievements">
              <h5 class="text-sm font-semibold mb-1">Achievements</h5>
              <ul class="list-none">
                <li
                  v-for="(achievement, index) in item.achievements"
                  :key="index"
                  class="mb-1"
                >
                  🥇 <span class="italic text-sm">{{ achievement }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.timeline__item {
  position: relative;
}

.timeline__item__line {
  left: 0.75rem;
}

.timeline__item__dot {
  left: 0rem;
  transform: translateX(-50%);
}

.timeline__item__horizontal-line {
  left: 1rem;
  transform: translateX(-20%);
}

.timeline__item__content {
  position: relative;
  margin-left: 2rem;
}
</style>
