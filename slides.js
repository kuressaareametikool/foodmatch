// Add your own variables

import { ref, computed } from "vue";

const customX = ref(0);
const customY = computed(() => customX.value * 10);
const customReset = () => (customX.value = 0);

export const setup = { customX, customY, customReset };

// Add your own components

import { f } from "fachwerk";

const Carousel = {
  props: ["items"],
  template: `
  <div class="not-prose grid grid-cols-6 gap-20 overflow-x-auto w-full">
    <div v-for="item in items" class="w-16">
      <img class="shadow aspect-square rounded-full" :src="item.image">
      <div class="text-xs text-center">{{ item.title }}</div>
    </div>
  </div>
    `,
};

export const components = { Carousel };
