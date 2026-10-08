<script setup lang="ts">
const materials = [
  '1 clean, empty clear drink bottle',
  '3 clean PET bottles, pre-cut lengthwise by an adult',
  '4 clear cups or food tubs to catch the water',
  'Paper, markers, tape, cardboard and a tray',
  'Water, a jug and a small funnel',
  'Scrap card to make particle tokens',
]

const steps = [
  { time: '5 min', title: 'Gather and sketch', description: 'Set out a tray, the pre-cut bottle channels and four clear containers. Sketch a gentle downhill path with room for each stage.' },
  { time: '10 min', title: 'Make the stage labels', description: 'Write Macro, Meso, Micro and Nano on paper bands. Add the size guide, then tape a label to each container.' },
  { time: '10 min', title: 'Make safe particle tokens', description: 'Cut reusable scrap card into one large bottle shape, a few flakes and several tiny dots. Draw the nano dot large enough to see.' },
  { time: '15 min', title: 'Build the cascade', description: 'Tape the smooth, adult-prepared bottle channels to cardboard in a downhill zigzag. Place a labelled container at each outlet, with the last tub at the bottom.' },
  { time: '10 min', title: 'Show the journey', description: 'Arrange the card tokens from large to tiny beside each container. Slowly pour a little blue-tinted water from the bottle into the top channel and trace its path down to the last tub.' },
  { time: '10 min', title: 'Test and tell the story', description: 'Check that the tray catches spills. Point from bottle to tiny token and explain: UV weakens exposed plastic; rain and movement can carry fragments on.' },
]
</script>

<template>
  <div class="grid gap-5 lg:grid-cols-[0.76fr_1.24fr]">
    <aside class="rounded-[28px] bg-[#dcecdf] p-6 sm:p-8">
      <div class="flex items-center gap-3">
        <span class="flex size-11 items-center justify-center rounded-2xl bg-[#286a52] text-white" aria-hidden="true">
          <svg class="size-5" viewBox="0 0 24 24" fill="none"><path d="M5 5v6c0 2 1.5 3.5 3.5 3.5H12m0 0-3-3m3 3-3 3M19 19v-6c0-2-1.5-3.5-3.5-3.5H12m0 0 3-3m-3 3 3 3" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </span>
        <div><p class="text-xs font-bold uppercase tracking-[0.14em] text-[#477460]">Kitchen-table science</p><p class="text-sm font-semibold text-ink">The bottle cascade</p></div>
      </div>
      <p class="mt-6 text-sm leading-6 text-[#4d6a5e]">Make a tabletop model that shows how litter can move from land toward waterways—and how a large object can become tiny fragments over time.</p>

      <div class="mt-7 flex items-end justify-between border-b border-[#bdd5c4] pb-3">
        <h3 class="display-type text-3xl text-ink">What you need</h3>
        <span class="rounded-full bg-white/70 px-3 py-1.5 font-mono text-[10px] font-bold text-[#477460]">about 1 hour</span>
      </div>
      <ul class="mt-4 space-y-3">
        <li v-for="item in materials" :key="item" class="flex gap-2.5 text-xs leading-5 text-[#456459]">
          <span class="mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-full bg-[#b8d3bd] text-[9px] font-bold text-[#286a52]" aria-hidden="true">✓</span>{{ item }}
        </li>
      </ul>
      <div class="mt-6 rounded-2xl border border-[#b8d3bd] bg-white/60 p-4">
        <p class="text-[10px] font-bold uppercase tracking-[0.13em] text-[#286a52]">A safe model</p>
        <p class="mt-1.5 text-[11px] leading-5 text-[#567064]">Ask an adult to prepare and check the bottle channels first. Use paper tokens instead of plastic fragments, keep water in the tray, and don’t grind or heat plastic.</p>
      </div>
    </aside>

    <div class="rounded-[28px] border border-[#dce6dc] bg-white p-6 sm:p-8">
      <div class="flex flex-wrap items-end justify-between gap-3 border-b border-[#e8ede5] pb-4">
        <div><p class="text-xs font-bold uppercase tracking-[0.14em] text-leaf">Make it in six short steps</p><h3 class="display-type mt-1 text-3xl text-ink">Build the story</h3></div>
        <span class="font-mono text-[10px] text-[#789087]">6 steps · 60 minutes</span>
      </div>
      <ol class="mt-2">
        <li v-for="(step, index) in steps" :key="step.title" class="group relative flex gap-4 py-4">
          <span v-if="index < steps.length - 1" class="absolute bottom-0 left-[17px] top-[48px] w-px bg-[#dbe6dc]" aria-hidden="true"></span>
          <span class="relative z-10 flex size-[35px] shrink-0 items-center justify-center rounded-full bg-[#eff4e9] font-mono text-xs font-bold text-[#4c7c67] transition group-hover:bg-[#d4e66d]">0{{ index + 1 }}</span>
          <div class="min-w-0 flex-1 pt-0.5">
            <div class="flex flex-wrap items-center justify-between gap-x-3 gap-y-1">
              <h4 class="text-sm font-bold text-ink">{{ step.title }}</h4>
              <span class="font-mono text-[10px] text-[#8a9b91]">{{ step.time }}</span>
            </div>
            <p class="mt-1.5 max-w-2xl text-xs leading-5 text-[#718178]">{{ step.description }}</p>
          </div>
        </li>
      </ol>
    </div>
  </div>
</template>
