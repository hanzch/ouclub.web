<template>
  <div class="w-full h-screen bg-white">
    <main class="grid min-h-full px-6 py-24 bg-white place-items-center sm:py-32 lg:px-8">
      <div class="text-center mb-[200px]">
        <p class="text-base font-semibold text-orange-500">404</p>
        <h1 class="mt-4 text-5xl font-semibold tracking-tight text-gray-900 text-balance sm:text-7xl">Page not found</h1>
        <p class="mt-6 text-lg font-medium text-gray-500 text-pretty sm:text-xl/8">Sorry, we couldn’t find the page you’re looking for.</p>
        <div class="flex items-center justify-center mt-10 gap-x-6">
          <nuxt-link to="/" class="button">Go back home</nuxt-link>
        </div>
      </div>
    </main>
  </div>
</template>