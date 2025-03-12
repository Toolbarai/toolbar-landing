<template>
  <header 
    class="w-full fixed top-0 transition-all duration-300 z-50"
    :class="[
      scrolled && !isMenuOpen ? 'bg-dark-surface shadow-lg' : isMenuOpen ? 'bg-transparent' : 'bg-transparent'
    ]"
  >
    <div class="container mx-auto px-4">
      <div class="flex justify-between items-center py-4 relative z-20">
        <div class="flex items-center">
          <FileText class="h-8 w-8 mr-2 text-primary-500" />
          <span class="font-semibold text-xl text-primary-300">DocFlow</span>
        </div>
        
        <nav class="hidden md:flex space-x-6">
          <NuxtLink to="/speech-editing" class="text-gray-200 hover:text-primary-400 transition duration-300">
             Text Editing
          </NuxtLink>
          <NuxtLink to="/docs-editing" class="text-gray-200 hover:text-primary-400 transition duration-300">
            Docs Editing
          </NuxtLink>
          <NuxtLink to="/pricing" class="text-gray-200 hover:text-primary-400 transition duration-300">
            Pricing
          </NuxtLink>
        </nav>
        
        <div class="flex items-center">
          <NuxtLink to="/login" class="hidden md:block bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded transition duration-300">
            Login
          </NuxtLink>
          <button 
            @click="toggleMenu" 
            class="md:hidden focus:outline-none ml-4 p-1 rounded-md hover:bg-gray-800 transition-colors z-50 relative"
            :class="{ 'fixed ': isMenuOpen }"
          >
            <Menu v-if="!isMenuOpen" class="h-6 w-6 text-primary-300" />
            <X v-else class="h-6 w-6 text-white" />
          </button>
        </div>
      </div>
    </div>

    <div 
      v-if="isMenuOpen" 
      class="fixed inset-0 bg-dark-surface bg-opacity-95 flex flex-col items-center justify-center z-10 animate-in fade-in duration-300"
    >
      <div class="flex flex-col items-center space-y-6 w-full px-8">
        <NuxtLink 
          to="/speech-editing" 
          class="text-xl text-center py-3 w-full border-b border-gray-800 text-white hover:text-primary-400 transition duration-300"
          @click="isMenuOpen = false"
        >
          Text Editing
        </NuxtLink>
        <NuxtLink 
          to="/docs-editing" 
          class="text-xl text-center py-3 w-full border-b border-gray-800 text-white hover:text-primary-400 transition duration-300"
          @click="isMenuOpen = false"
        >
          Docs Editing
        </NuxtLink>
        <NuxtLink 
          to="/pricing" 
          class="text-xl text-center py-3 w-full border-b border-gray-800 text-white hover:text-primary-400 transition duration-300"
          @click="isMenuOpen = false"
        >
          Pricing
        </NuxtLink>
        <NuxtLink 
          to="/login" 
          class="mt-6 bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-md transition duration-300 text-xl"
          @click="isMenuOpen = false"
        >
          Login
        </NuxtLink>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { FileText, Menu, X } from 'lucide-vue-next'

const isMenuOpen = ref(false)
const scrolled = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
  
  if (process.client) {
    if (isMenuOpen.value) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }
}

const handleScroll = () => {
  if (process.client) {
    scrolled.value = window.scrollY > 0
  }
}

// Close menu when escape key is pressed
const handleKeyDown = (e) => {
  if (e.key === 'Escape' && isMenuOpen.value) {
    isMenuOpen.value = false
  }
}

onMounted(() => {
  if (process.client) {
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('keydown', handleKeyDown)
    handleScroll()
  }
})

onUnmounted(() => {
  if (process.client) {
    window.removeEventListener('scroll', handleScroll)
    window.removeEventListener('keydown', handleKeyDown)
    document.body.style.overflow = ''
  }
})


watch(isMenuOpen, (newVal) => {
  if (!newVal && process.client) {
    document.body.style.overflow = ''
  }
})
</script>

