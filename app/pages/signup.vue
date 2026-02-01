<template>
  <div class="min-h-screen flex flex-col bg-[#F5F7FA] font-sans text-gray-800">
    <!-- Header -->
    <AppHeader />

    <!-- Main Content -->
    <main class="flex-1 relative flex items-center justify-center py-16 px-4">
      <!-- Background Illustration (Houses approximation) -->
      <div
        class="absolute inset-x-0 bottom-0 h-96 flex items-end justify-between pointer-events-none opacity-40 text-gray-400">
        <!-- Left House -->
        <svg class="w-1/3 h-full" viewBox="0 0 300 200" preserveAspectRatio="none">
          <path d="M0,200 L150,50 L300,200 Z" fill="currentColor" />
          <rect x="20" y="100" width="40" height="40" fill="white" />
          <rect x="80" y="120" width="40" height="80" fill="white" />
        </svg>
        <!-- Right House -->
        <svg class="w-1/3 h-full" viewBox="0 0 300 200" preserveAspectRatio="none">
          <path d="M0,200 L150,80 L300,200 Z" fill="currentColor" />
          <rect x="50" y="120" width="30" height="40" fill="white" />
          <rect x="100" y="120" width="30" height="40" fill="white" />
        </svg>
      </div>

      <!-- Registration Card -->
      <div class="w-full max-w-[480px] bg-white rounded-lg shadow-xl p-8 relative z-10 border border-gray-100">
        <h1 class="text-3xl font-bold text-center mb-8 text-gray-900">Sign Up</h1>

        <!-- Social Login -->
        <div class="flex justify-center gap-4 mb-6">
          <button
            class="w-12 h-12 rounded-full bg-blue-50 hover:bg-blue-100 flex items-center justify-center transition-colors">
            <UIcon name="i-logos-facebook" class="w-6 h-6" />
          </button>
          <button
            class="w-12 h-12 rounded-full bg-gray-50 hover:bg-gray-100 flex items-center justify-center transition-colors">
            <UIcon name="i-logos-google-icon" class="w-6 h-6" />
          </button>
        </div>

        <div class="relative mb-8 text-center">
          <span class="bg-white px-2 text-sm text-gray-500 relative z-10">or registration</span>
          <div class="absolute inset-0 flex items-center">
            <div class="w-full border-t border-gray-200"></div>
          </div>
        </div>

        <UForm :state="state" class="space-y-5" @submit="onSubmit">
          <UFormGroup name="email">
            <UInput v-model="state.email" placeholder="Email or phone" size="xl"
              :ui="{ rounded: 'rounded-md', color: { white: { outline: 'ring-1 ring-gray-300 focus:ring-[#0B6FDD]' } } }" />
          </UFormGroup>

          <UFormGroup name="password">
            <UInput v-model="state.password" type="password" placeholder="Password" size="xl"
              :ui="{ rounded: 'rounded-md', color: { white: { outline: 'ring-1 ring-gray-300 focus:ring-[#0B6FDD]' } } }" />
          </UFormGroup>

          <div class="flex items-center gap-2">
            <UCheckbox v-model="state.terms" name="terms"
              :ui="{ base: 'w-5 h-5', rounded: 'rounded', color: 'blue' }" />
            <span class="text-sm text-gray-600">
              I agree to the <a href="#" class="text-gray-800 hover:underline">Terms and Private Policy</a>.
            </span>
          </div>

          <UButton type="submit" block size="xl"
            class="bg-[#0B6FDD] hover:bg-[#095bb5] text-white font-semibold rounded-md py-3">
            Sign up
          </UButton>

          <UButton to="/login" block variant="outline" size="md" color="gray"
            class="mt-4 rounded-md border-gray-400 hover:bg-gray-50 text-gray-600 font-normal w-32 mx-auto">
            Sign In
          </UButton>
        </UForm>
      </div>
    </main>

    <!-- Footer -->
    <footer class="bg-[#0C4D94] text-white py-8 mt-auto">
      <div class="container mx-auto px-4">
        <div class="flex justify-center gap-8 mb-6">
          <UButton icon="i-mdi-instagram" variant="ghost" color="white" class="hover:text-blue-200" />
          <UButton icon="i-mdi-telegram" variant="ghost" color="white" class="hover:text-blue-200" />
          <UButton icon="i-mdi-email-outline" variant="ghost" color="white" class="hover:text-blue-200" />
          <UButton icon="i-mdi-whatsapp" variant="ghost" color="white" class="hover:text-blue-200" />
          <UButton icon="i-mdi-facebook" variant="ghost" color="white" class="hover:text-blue-200" />
        </div>
        <div class="text-center text-sm text-blue-100 flex items-center justify-center gap-4">
          <span>Rentflow.com</span>
          <span>2025</span>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
const state = reactive({
  email: '',
  password: '',
  terms: false
})

const onSubmit = () => {
  console.log('Submitted', state)
}
</script>

<style scoped>
/* Custom overrides if needed */
</style>
