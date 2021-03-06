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
      <div class="uppercase text-xs text-center">{{ item.title }}</div>
    </div>
  </div>
    `,
};

const Background = {
  inheritAttrs: false,
  template: `
  <div class="absolute inset-0 bg-orange-200 overflow-hidden">
    <Icon id="fluent:food-pizza-20-regular" class="absolute top-[5%] left-[50%] w-64 h-64 -ml-4 text-orange-300/50" />
    <Icon id="fluent:food-apple-24-regular" class="-rotate-12 absolute top-[30%] left-[5%] w-48 h-48 -ml-4 text-orange-300/50" />
    <Icon id="mdi:food-turkey" class="rotate-12 absolute top-[60%] left-[40%] w-64 h-64 -ml-4 text-orange-300/50" />
  </div>
  <div class="absolute inset-0" v-bind="$attrs">
    <slot />
  </div
  `,
};

const AnimatedBackground = {
  inheritAttrs: false,
  template: `
  <div class="absolute inset-0 bg-orange-200 overflow-hidden">
    <Icon id="fluent:food-pizza-20-regular" class="bounce absolute top-[5%] left-[50%] w-64 h-64 -ml-4 text-orange-300/50" />
    <Icon id="fluent:food-apple-24-regular" class="bounce -rotate-12 absolute top-[30%] left-[5%] w-48 h-48 -ml-4 text-orange-300/50" />
    <Icon id="mdi:food-turkey" class="bounce rotate-12 absolute top-[60%] left-[40%] w-64 h-64 -ml-4 text-orange-300/50" />
  </div>
  <div class="absolute inset-0" v-bind="$attrs">
    <slot />
  </div
  `,
};

const Logo = {
  template: `
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16.9818 7.96573C16.9818 5.26972 15.2941 3.02216 13.148 3.02216C11.0019 3.02216 9.31599 5.26972 9.31599 7.96573C9.16257 9.76484 10.0813 11.4133 11.6138 12.4626V22.5022C11.6138 23.4009 12.2292 24 13.148 24C14.0668 24 14.6822 23.4009 14.6822 22.5022V12.4626C16.2147 11.4133 17.1334 9.76484 16.9818 7.96573ZM15.0961 7.88597L14.816 8.16425L13.0927 9.87828L11.0893 7.88597C10.9761 7.77354 10.8864 7.64007 10.8251 7.49317C10.7639 7.34627 10.7324 7.18884 10.7324 7.02984C10.7324 6.87084 10.7639 6.7134 10.8251 6.5665C10.8864 6.41961 10.9761 6.28614 11.0893 6.17371C11.2024 6.06128 11.3368 5.9721 11.4846 5.91125C11.6325 5.8504 11.7909 5.81909 11.9509 5.81909C12.111 5.81909 12.2694 5.8504 12.4173 5.91125C12.5651 5.9721 12.6995 6.06128 12.8126 6.17371L13.0927 6.45022L13.3746 6.17371C13.6031 5.94641 13.9131 5.81863 14.2365 5.81846C14.5598 5.81829 14.87 5.94576 15.0988 6.17282C15.3276 6.39988 15.4562 6.70793 15.4563 7.02921C15.4565 7.35049 15.3282 7.65867 15.0997 7.88597H15.0961ZM19.4009 4.49513V13.4854H20.9351V22.4809C20.9351 23.3778 21.547 23.977 22.4676 23.977C23.3881 23.977 24 23.3778 24 22.4809V0C21.4025 0 19.4009 1.94623 19.4009 4.49513ZM6.89868 3.77193C6.70146 3.78303 6.51503 3.86506 6.3742 4.0027C6.23338 4.14034 6.14777 4.32419 6.13335 4.51994V8.26706H4.59912V4.51994C4.60499 4.41912 4.58912 4.31821 4.55256 4.22398C4.516 4.12975 4.4596 4.04436 4.38714 3.97354C4.31468 3.90272 4.22782 3.84809 4.13239 3.81333C4.03696 3.77856 3.93516 3.76444 3.83379 3.77193C3.63638 3.78299 3.44973 3.86495 3.30861 4.00256C3.16749 4.14016 3.08151 4.32404 3.06668 4.51994V8.26706H1.53423V4.51994C1.54013 4.41896 1.52421 4.31789 1.48755 4.22352C1.45089 4.12916 1.39432 4.04368 1.32166 3.97283C1.249 3.90198 1.16192 3.84739 1.06627 3.81274C0.970627 3.77809 0.868623 3.76418 0.767116 3.77193C0.5697 3.78299 0.383054 3.86495 0.241933 4.00256C0.100811 4.14016 0.0148301 4.32404 0 4.51994V9.46529C0.00940128 10.0941 0.247375 10.6983 0.670011 11.1664C1.09265 11.6346 1.67143 11.935 2.29956 12.0124V22.5022C2.29956 23.4009 2.91325 24 3.83379 24C4.75433 24 5.36624 23.4009 5.36624 22.5022V12.0124C5.99452 11.9354 6.57352 11.635 6.99622 11.1668C7.41893 10.6986 7.65677 10.0942 7.6658 9.46529V4.51994C7.65097 4.32404 7.56499 4.14016 7.42387 4.00256C7.28274 3.86495 7.0961 3.78299 6.89868 3.77193Z" fill="currentColor"/>
  </svg>
  `,
};
export const components = { AnimatedBackground, Background, Carousel, Logo };
