<template>
    <header
        class="h-[120px] bg-[#F0F4F8] border-b border-[#0B6FDD] px-[72px] flex items-center justify-between box-border">
        <NuxtLink to="/" class="flex items-center">
            <div class="bg-[#0C4D94] text-white font-['Montserrat'] font-bold text-[48px] leading-none px-2 py-1">
                Rent
            </div>
            <div class="bg-[#0B6FDD] text-white font-bold text-[48px] leading-none px-2 py-1">
                Flow
            </div>
        </NuxtLink>

        <div class="flex items-center gap-6">
            <div class="flex items-center gap-4 text-[#959595]">
                <UButton variant="ghost" color="neutral" size="xl"
                    class="text-brand hover:text-primary-500 w-12 h-12 flex items-center justify-center p-0">
                    <UIcon name="i-heroicons-heart" class="w-[40px] h-[40px]" />
                </UButton>
                <UButton variant="ghost" color="neutral" size="xl"
                    class="text-brand hover:text-primary-500 w-12 h-12 flex items-center justify-center p-0">
                    <UIcon name="i-heroicons-bell" class="w-[40px] h-[40px]" />
                </UButton>
                <UButton variant="ghost" color="neutral" size="xl"
                    class="text-brand hover:text-primary-500 w-12 h-12 flex items-center justify-center p-0">
                    <UIcon name="i-heroicons-user" class="w-[40px] h-[40px]" />
                </UButton>
            </div>
            <UButton label="Add object"
                class="text-[20px] leading-[24px] px-8 py-3 bg-[#0B6FDD] hover:bg-[#095bb5] text-[#FAFAFA] rounded-[6px]" />
        </div>
    </header>
</template>
