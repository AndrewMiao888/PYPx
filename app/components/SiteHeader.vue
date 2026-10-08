<script setup lang="ts">
const route = useRoute()

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Journey', to: '/journey' },
  { label: 'Science', to: '/science' },
  { label: 'Model', to: '/model' },
  { label: 'Help', to: '/help' },
]

function isActive(to: string) {
  return to === '/' ? route.path === '/' : route.path.startsWith(to)
}
</script>

<template>
  <header class="sticky top-0 z-30 border-b border-[#e0e9df] bg-sand/95 backdrop-blur">
    <div class="section-shell flex min-h-[76px] items-center justify-between gap-4">
      <NuxtLink to="/" class="flex items-center gap-2.5 rounded-lg" aria-label="The Journey of Microplastics home">
        <img src="/logo.svg" alt="" class="size-9" width="36" height="36">
        <span class="text-[13px] font-bold tracking-wide text-ink sm:text-sm">FIELD<span class="text-[#7e9b5c]">/</span>NOTES</span>
      </NuxtLink>

      <nav class="hidden items-center gap-1 md:flex" aria-label="Main navigation">
        <NuxtLink
          v-for="link in navLinks"
          :key="link.to"
          :to="link.to"
          :aria-current="isActive(link.to) ? 'page' : undefined"
          class="rounded-lg px-3 py-2 text-xs font-semibold text-[#5e756a] transition hover:bg-white/70 hover:text-ink"
          :class="isActive(link.to) ? 'bg-white text-ink shadow-sm' : ''"
        >
          {{ link.label }}
        </NuxtLink>
      </nav>

      <NuxtLink to="/help" class="inline-flex items-center gap-2 rounded-lg bg-[#173a35] px-4 py-2.5 text-[11px] font-bold text-white transition hover:bg-[#286a52]">
        Help now
        <svg class="size-3.5" viewBox="0 0 20 20" fill="none" aria-hidden="true">
          <path d="M4 10h11m-4-4 4 4-4 4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </NuxtLink>
    </div>

    <nav class="section-shell flex gap-2 overflow-x-auto border-t border-[#e5ece1] py-2 md:hidden" aria-label="Mobile navigation">
      <NuxtLink
        v-for="link in navLinks"
        :key="link.to"
        :to="link.to"
        :aria-current="isActive(link.to) ? 'page' : undefined"
        class="shrink-0 rounded-lg px-3 py-1.5 text-[11px] font-bold text-[#5e756a]"
        :class="isActive(link.to) ? 'bg-white text-ink shadow-sm' : 'bg-[#eef3e8]'"
      >
        {{ link.label }}
      </NuxtLink>
    </nav>
  </header>
</template>
