<template>
  <footer class="bg-dark-surface mt-auto py-8">
    <div class="container mx-auto px-4">
      <div class="flex flex-wrap justify-between">
        <div class="w-full md:w-1/3 mb-6 md:mb-0">
          <div class="flex items-center">
            <FileText class="h-5 w-5 mr-2 text-primary-500" />
            <h3 class="text-primary-300 font-semibold">DocFlow</h3>
          </div>
          <p class="text-gray-400 mt-2">Advanced document and speech processing tools.</p>
        </div>
        <div class="w-full md:w-1/3 mb-6 md:mb-0">
          <div class="flex items-center">
            <Link2 class="h-5 w-5 mr-2 text-primary-500" />
            <h4 class="text-primary-300 font-semibold">Quick Links</h4>
          </div>
          <ul class="text-gray-400 mt-2">
            <li class="flex items-center mt-1">
              <ChevronRight class="h-4 w-4 mr-1 text-primary-500" />
              <NuxtLink to="/speech-editing" class="hover:text-primary-400 transition duration-300">Text Editing</NuxtLink>
            </li>
            <li class="flex items-center mt-1">
              <ChevronRight class="h-4 w-4 mr-1 text-primary-500" />
              <NuxtLink to="/docs-editing" class="hover:text-primary-400 transition duration-300">Docs Editing</NuxtLink>
            </li>
            <li class="flex items-center mt-1">
              <ChevronRight class="h-4 w-4 mr-1 text-primary-500" />
              <NuxtLink to="/pricing" class="hover:text-primary-400 transition duration-300">Pricing</NuxtLink>
            </li>
          </ul>
        </div>
        <div class="w-full md:w-1/3">
          <div class="flex items-center">
            <Mail class="h-5 w-5 mr-2 text-primary-500" />
            <h4 class="text-primary-300 font-semibold">Contact Us</h4>
          </div>
          <div class="text-gray-400 mt-2">
            <p class="flex items-center mt-1">
              <AtSign class="h-4 w-4 mr-2 text-primary-500" />
              Email: info@docflow.com
            </p>
            <p class="flex items-center mt-1">
              <Phone class="h-4 w-4 mr-2 text-primary-500" />
              Phone: +1 (123) 456-7890
            </p>
          </div>
        </div>
      </div>
      <div class="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
        <p class="flex items-center justify-center">
          <Copyright class="h-4 w-4 mr-1 text-primary-500" />
          2024 DocFlow. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { FileText, Link2, ChevronRight, Mail, AtSign, Phone, Copyright } from 'lucide-vue-next'
</script>

