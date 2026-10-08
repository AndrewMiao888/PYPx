<script setup lang="ts">
defineEmits<{
  acknowledge: []
}>()
</script>

<template>
  <aside class="fixed inset-x-4 bottom-4 z-50 mx-auto max-w-[620px] rounded-lg border border-[#d7e4d7] bg-white p-5 shadow-[0_18px_60px_rgba(23,58,53,0.2)] sm:bottom-6 sm:p-6" role="dialog" aria-label="Cookie notice">
    <div class="flex items-start gap-3.5">
      <span class="flex size-10 shrink-0 items-center justify-center rounded-2xl bg-[#e8f0df] text-[#286a52]" aria-hidden="true">
        <svg class="size-5" viewBox="0 0 24 24" fill="none"><path d="M12 3a9 9 0 1 0 9 9c-4.5 0-7-2.5-7-7 0-.7.1-1.4.3-2.1A9 9 0 0 0 12 3Z" stroke="currentColor" stroke-width="1.6"/><circle cx="8.5" cy="10" r="1" fill="currentColor"/><circle cx="11" cy="16" r="1" fill="currentColor"/><circle cx="16" cy="13" r="1" fill="currentColor"/></svg>
      </span>
      <div class="min-w-0 flex-1">
        <p class="text-sm font-bold text-ink">A little note about cookies</p>
        <p class="mt-1.5 text-xs leading-5 text-[#687d72]">This site stores one small first-party cookie to remember that you've seen this notice. It doesn't use analytics or advertising cookies.</p>
        <button type="button" class="mt-4 rounded-full bg-[#173a35] px-4 py-2.5 text-[11px] font-bold text-white transition hover:bg-[#286a52]" @click="$emit('acknowledge')">Okay, got it</button>
      </div>
    </div>
  </aside>
</template>
