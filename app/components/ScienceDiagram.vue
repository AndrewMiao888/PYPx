<template>
  <div class="overflow-hidden rounded-[30px] bg-[#e5eff0]">
    <div class="relative min-h-[300px] p-5 sm:p-8">
      <div class="absolute inset-0 opacity-20 grain"></div>
      <div class="relative mx-auto flex max-w-[490px] flex-col gap-3">
        <div class="flex items-center gap-3 rounded-2xl bg-white/80 px-4 py-3 shadow-sm">
          <span class="flex size-9 items-center justify-center rounded-full bg-[#fff2c9] text-base" aria-hidden="true">☀</span>
          <div><p class="text-xs font-bold text-ink">Sunlight carries UV energy</p><p class="text-[10px] text-[#688078]">The exposed surface absorbs some of it.</p></div>
          <svg class="ml-auto h-7 w-10 shrink-0" viewBox="0 0 40 28" fill="none" aria-hidden="true"><path d="M5 14h27m-6-6 6 6-6 6" stroke="#58877A" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 2v4m9-3-2 4m14-2-4 3" stroke="#DDAA42" stroke-width="1.5" stroke-linecap="round"/></svg>
        </div>

        <div class="rounded-2xl bg-white/80 px-4 py-4 shadow-sm sm:px-5">
          <div class="flex items-center justify-between gap-2">
            <p class="text-[10px] font-bold uppercase tracking-[0.14em] text-[#688078]">Polymer chain · simplified</p>
            <span class="rounded-full bg-[#eff3e7] px-2.5 py-1 font-mono text-[9px] text-[#668078]">carbon backbone</span>
          </div>
          <div class="mt-5 flex items-center justify-center gap-1.5 font-mono text-xs font-bold text-[#337462] sm:gap-2 sm:text-sm" aria-label="A simplified carbon chain with a split bond">
            <span class="rounded-full border border-[#acd0c2] bg-[#edf7f1] px-2 py-1.5 sm:px-3">C</span>
            <span class="h-0.5 w-5 bg-[#72a797] sm:w-8"></span>
            <span class="rounded-full border border-[#acd0c2] bg-[#edf7f1] px-2 py-1.5 sm:px-3">C</span>
            <span class="mx-0.5 text-[#e68162] sm:mx-1">···</span>
            <span class="rounded-full border border-[#acd0c2] bg-[#edf7f1] px-2 py-1.5 sm:px-3">C</span>
            <span class="h-0.5 w-5 bg-[#72a797] sm:w-8"></span>
            <span class="rounded-full border border-[#acd0c2] bg-[#edf7f1] px-2 py-1.5 sm:px-3">C</span>
          </div>
          <div class="mt-3 flex items-start justify-center gap-2 text-[10px] leading-4 text-[#9c614d]"><span aria-hidden="true">↑</span><span>One carbon–carbon (C–C) link can split in this teaching model.</span></div>
        </div>

        <div class="flex items-center gap-3 rounded-2xl bg-[#173a35] px-4 py-3 text-white shadow-sm">
          <span class="flex size-9 shrink-0 items-center justify-center rounded-full bg-white/10 text-lg" aria-hidden="true">✳</span>
          <div><p class="text-xs font-bold">Shorter chains; a brittle surface</p><p class="text-[10px] leading-4 text-[#c1d7ce]">Oxygen-driven reactions help weaken plastic. Wind and waves then chip it into fragments.</p></div>
          <span class="ml-auto flex size-9 shrink-0 items-center justify-center rounded-full bg-[#d4e66d] text-[10px] font-bold text-ink" aria-hidden="true">C·</span>
        </div>
      </div>
    </div>
    <div class="border-t border-[#d4e3e2] bg-white/60 px-5 py-4 sm:px-8">
      <p class="text-[11px] leading-5 text-[#63776f]"><span class="font-bold text-ink">A simplified picture:</span> UV exposure and oxygen can start photo-oxidation. Chemical reactions shorten polymer chains; the weakened plastic can crack and fragment. Real plastics weather in different ways, depending on their material and surroundings.</p>
    </div>
  </div>
</template>
