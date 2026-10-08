<script setup lang="ts">
defineEmits<{
  (event: 'open-cookie-notice'): void
}>()
</script>

<template>
  <footer class="bg-[#173a35] py-8 text-white">
    <div class="section-shell grid gap-6 lg:grid-cols-[0.9fr_1.35fr_auto] lg:items-start">
      <div class="flex items-center gap-3">
        <img src="/logo.svg" alt="" class="size-9 rounded-lg" width="36" height="36">
        <div>
          <p class="text-xs font-bold tracking-wide">THE JOURNEY OF MICROPLASTICS</p>
          <p class="mt-1 text-[10px] text-[#b3cabf]">An IB PYP Year 5 exhibition - Adelaide, South Australia</p>
        </div>
      </div>

      <details class="text-[10px] leading-5 text-[#c2d4cc]">
        <summary class="cursor-pointer font-bold text-white">Sources & further reading</summary>
        <ul class="mt-2 grid gap-1.5 sm:grid-cols-2">
          <li><a class="underline decoration-white/30 underline-offset-2 hover:text-[#d4e66d]" href="https://www.ncei.noaa.gov/products/microplastics" target="_blank" rel="noreferrer">NOAA NCEI - Marine Microplastics</a></li>
          <li><a class="underline decoration-white/30 underline-offset-2 hover:text-[#d4e66d]" href="https://marinedebris.noaa.gov/what-marine-debris/microplastics" target="_blank" rel="noreferrer">NOAA Marine Debris - Microplastics</a></li>
          <li><a class="underline decoration-white/30 underline-offset-2 hover:text-[#d4e66d]" href="https://marinedebris.noaa.gov/do-plastics-go-away-when-theyre-ocean-or-great-lakes-0" target="_blank" rel="noreferrer">NOAA - Do plastics go away?</a></li>
          <li><a class="underline decoration-white/30 underline-offset-2 hover:text-[#d4e66d]" href="https://repository.library.noaa.gov/view/noaa/41264/noaa_41264_DS1.pdf" target="_blank" rel="noreferrer">NOAA - Marine debris degradation estimates</a></li>
          <li><a class="underline decoration-white/30 underline-offset-2 hover:text-[#d4e66d]" href="https://www.epa.gov/plastics/what-you-can-do-reduce-plastic-waste" target="_blank" rel="noreferrer">US EPA - Reduce plastic waste</a></li>
          <li><a class="underline decoration-white/30 underline-offset-2 hover:text-[#d4e66d]" href="https://www.environment.sa.gov.au/topics/water-and-river-murray/water-information-and-data/water-resources-and-environments/stormwater" target="_blank" rel="noreferrer">SA Department for Environment and Water - Stormwater</a></li>
          <li><a class="underline decoration-white/30 underline-offset-2 hover:text-[#d4e66d]" href="https://www.replacethewaste.sa.gov.au/legislation-explained" target="_blank" rel="noreferrer">Replace the Waste SA - Single-use plastics</a></li>
          <li><a class="underline decoration-white/30 underline-offset-2 hover:text-[#d4e66d]" href="https://doi.org/10.1007/s43630-024-00552-3" target="_blank" rel="noreferrer">UNEP EEAP - UV radiation and plastics</a></li>
        </ul>
      </details>

      <button type="button" class="self-start text-left text-[10px] font-semibold text-[#c2d4cc] underline decoration-white/30 underline-offset-2 hover:text-[#d4e66d] lg:text-right" @click="$emit('open-cookie-notice')">
        Cookie notice
      </button>
    </div>

    <div class="section-shell mt-6 flex flex-col gap-2 border-t border-white/10 pt-4 text-[9px] font-medium tracking-[0.1em] text-[#8fa99c] sm:flex-row sm:items-center sm:justify-between">
      <span>LEARN - NOTICE - CARE</span>
      <span>Created by Andrew Miao from SynQuara Digital</span>
    </div>
  </footer>
</template>
