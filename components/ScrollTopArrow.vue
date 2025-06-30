<template>
  <button aria-label="scroll to up" class="fixed cursor-pointer shadow-lg bottom-10 right-10 z-40 flex items-center justify-center size-10 md:size-12 lg:size-14 ml-5 mr-auto transition-all duration-300 rounded-full ring ring-gray-500 bg-gray-800/90 hover:bg-[#283a00]" :class="visible ? 'opacity-100' : 'opacity-0'" @click="scrollTop">
    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"/>
    </svg>
  </button>
</template>

<script setup>

const visible = ref(false);

const scrollTop = () => {
  window.scrollTo({top: 0, left: 0, behavior: 'smooth',});
};

const scrollListener = () => {
  visible.value = window.scrollY > 150;
};

onMounted(() => {
  window.addEventListener('scroll', scrollListener);
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', scrollListener);
});
</script>