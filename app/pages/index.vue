<template>
  <div class="min-h-screen flex flex-col bg-gray-950 text-gray-100 font-sans">
    <header class="flex-1 flex flex-col items-center justify-center text-center py-20 relative overflow-hidden">
      <!-- Background Gradients -->
      <div class="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/15 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
      <div class="absolute bottom-0 left-0 w-[500px] h-[500px] bg-pink-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

      <UContainer class="relative z-10">
        <h1 class="text-6xl font-extrabold leading-tight mb-6 tracking-tight">
          Find Your <span class="bg-gradient-to-br from-indigo-500 to-pink-500 bg-clip-text text-transparent">Dream</span> Space
        </h1>
        <p class="text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
          Experience the future of real estate. Premium properties for premium lives.
        </p>
        <div class="flex gap-4 justify-center">
          <UButton 
            size="xl" 
            color="primary" 
            variant="solid" 
            class="rounded-full px-8 py-4 font-semibold shadow-[0_4px_20px_-5px_rgba(99,102,241,0.5)] hover:-translate-y-0.5 transition-transform"
          >
            Explore Listings
          </UButton>
          <UButton 
            size="xl" 
            color="white" 
            variant="ghost" 
            class="rounded-full px-8 py-4 font-semibold hover:bg-white/10"
          >
            About Us
          </UButton>
        </div>
      </UContainer>
    </header>
  </div>
</template>
