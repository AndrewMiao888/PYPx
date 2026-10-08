<template>
  <div class="overflow-hidden rounded-lg border border-[#d5e4e1] bg-[#e5eff0]">
    <div class="relative min-h-[330px] p-5 sm:p-8">
      <div class="absolute inset-0 opacity-20 grain"></div>

      <div class="relative mx-auto grid max-w-[620px] gap-4">
        <div class="grid gap-4 sm:grid-cols-[0.9fr_1.1fr]">
          <div class="rounded-lg bg-white/80 p-4 shadow-sm">
            <p class="text-[10px] font-bold uppercase tracking-[0.14em] text-[#688078]">Step 1</p>
            <h3 class="mt-2 text-sm font-bold text-ink">UV light hits the plastic surface</h3>
            <p class="mt-2 text-xs leading-5 text-[#63776f]">Sunlight carries ultraviolet energy. The surface absorbs some energy, especially if it already has weak spots, pigments or additives.</p>
          </div>

          <div class="rounded-lg bg-white/80 p-4 shadow-sm">
            <p class="text-[10px] font-bold uppercase tracking-[0.14em] text-[#688078]">Step 2</p>
            <h3 class="mt-2 text-sm font-bold text-ink">Oxygen helps the chain reaction</h3>
            <p class="mt-2 text-xs leading-5 text-[#63776f]">Photo-oxidation can form reactive sites. Oxygen then helps reactions that shorten and weaken long polymer chains.</p>
          </div>
        </div>

        <div class="rounded-lg bg-white/90 p-5 shadow-sm">
          <div class="flex items-center justify-between gap-3">
            <p class="text-[10px] font-bold uppercase tracking-[0.14em] text-[#688078]">Polymer chain - simplified teaching diagram</p>
            <span class="rounded-lg bg-[#eff3e7] px-2.5 py-1 font-mono text-[9px] text-[#668078]">carbon backbone</span>
          </div>

          <div class="mt-6 flex flex-wrap items-center justify-center gap-2 font-mono text-sm font-bold text-[#337462]" aria-label="A simplified carbon chain with a split bond">
            <span class="rounded-lg border border-[#acd0c2] bg-[#edf7f1] px-3 py-2">C</span>
            <span class="h-0.5 w-8 bg-[#72a797]"></span>
            <span class="rounded-lg border border-[#acd0c2] bg-[#edf7f1] px-3 py-2">C</span>
            <span class="rounded-lg bg-[#ffe2d9] px-2 py-1 text-[#bd6149]">break</span>
            <span class="rounded-lg border border-[#acd0c2] bg-[#edf7f1] px-3 py-2">C</span>
            <span class="h-0.5 w-8 bg-[#72a797]"></span>
            <span class="rounded-lg border border-[#acd0c2] bg-[#edf7f1] px-3 py-2">C</span>
          </div>

          <p class="mt-4 text-center text-[11px] leading-5 text-[#63776f]">This is a simplified model of chain scission: a long chain becomes shorter pieces. Real plastic degradation has many reaction pathways.</p>
        </div>

        <div class="rounded-lg bg-[#173a35] p-4 text-white shadow-sm">
          <p class="text-[10px] font-bold uppercase tracking-[0.14em] text-[#d4e66d]">Step 3</p>
          <h3 class="mt-2 text-sm font-bold">The surface becomes brittle, then fragments</h3>
          <p class="mt-2 text-xs leading-5 text-[#c1d7ce]">Chemical weakening does not instantly make plastic vanish. Rubbing from sand, rocks, foot traffic, drains and waves can turn brittle pieces into smaller fragments.</p>
        </div>
      </div>
    </div>

    <div class="border-t border-[#d4e3e2] bg-white/70 px-5 py-4 sm:px-8">
      <p class="text-[11px] leading-5 text-[#63776f]"><span class="font-bold text-ink">Careful claim:</span> UV exposure can help start photo-oxidation, and oxygen-driven reactions can weaken polymers. The speed depends on the plastic type, additives, temperature, sunlight, water movement and abrasion.</p>
    </div>
  </div>
</template>
