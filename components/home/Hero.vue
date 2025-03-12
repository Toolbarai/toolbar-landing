<template>
  <section class="relative w-full h-screen flex items-center justify-center overflow-hidden">
    <!-- Background image with Nuxt Image optimization -->
    <div class="absolute inset-0 w-full h-full">
      <NuxtImg src="/images/Hero.webp" alt="DocFlow background" width="1920" height="1080"
        class="w-full h-full object-cover object-center" placeholder loading="lazy" />
      <div class="absolute inset-0 bg-black/60"></div>
    </div>

    <!-- Content container with animation -->
    <div class="relative z-10 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto text-center" v-motion
      :initial="{ opacity: 0, y: 20 }" :enter="{ opacity: 1, y: 0, transition: { duration: 800 } }">
      <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
        Welcome to <span class="text-primary-500">DocFlow</span>
      </h1>

      <p class="mt-6 text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
        Advanced document and speech processing tools at your fingertips.
      </p>

      <div class="mt-8 md:mt-10 flex flex-col sm:flex-row justify-center gap-4">
        <NuxtLink to="/text-editing"
          class="px-6 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-all duration-300 font-medium shadow-lg hover:shadow-primary-500/30">
          <span class="flex items-center justify-center gap-2">
            <FileText class="w-5 h-5" />
            Text Editing
          </span>
        </NuxtLink>

        <NuxtLink to="/docs-editing"
          class="px-6 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-medium">
          <span class="flex items-center justify-center gap-2">
            <FileEdit class="w-5 h-5" />
            Docs Editing
          </span>
        </NuxtLink>
      </div>

      <div class="mt-12">
        <button @click="scrollToContent" class="text-white hover:text-primary-400 transition-colors duration-300"
          aria-label="Scroll to content">
          <ChevronDown class="w-8 h-8 animate-bounce" />
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { FileText, FileEdit, ChevronDown } from "lucide-vue-next";

const scrollToContent = () => {
  window.scrollTo({
    top: window.innerHeight,
    behavior: 'smooth'
  });
};
</script>

<style scoped>
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-bounce {
  animation: bounce 2s infinite;
}

@keyframes bounce {

  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-10px);
  }
}
</style>