<script setup lang="ts">
const materials = [
  '1 clean, empty clear drink bottle for the starting object',
  '3 clean PET bottles cut lengthwise by an adult to make smooth channels',
  '4 clear cups, jars or food tubs to catch water at each stage',
  'Tray, towels, tape, cardboard and a low table',
  'Water, a jug and a small funnel',
  'Scrap paper or card for the macro, meso, micro and nano tokens',
  'Labels, markers and a ruler for the size guide',
]

const steps = [
  { time: '5 min', title: 'Set the scene', description: 'Put the tray down first. Place four catch containers in a downhill line and leave enough space for the bottle channels.' },
  { time: '8 min', title: 'Label the stages', description: 'Label the containers Macro >25 mm, Meso 5-25 mm, Micro <5 mm and Nano <1 mm model stage.' },
  { time: '10 min', title: 'Make particle tokens', description: 'Cut one large bottle token, several medium flakes, tiny dots and one enlarged nano dot. Use paper so no real plastic fragments are made.' },
  { time: '15 min', title: 'Build the cascade', description: 'Tape the adult-prepared bottle channels to cardboard in a gentle zigzag. Test with a small pour and adjust the slope.' },
  { time: '10 min', title: 'Run the water path', description: 'Slowly pour a small amount of water into the top channel. Watch how it moves from container to container like stormwater.' },
  { time: '7 min', title: 'Tell the science story', description: 'Move the paper tokens from large to small while explaining UV light, oxygen, brittleness, abrasion and transport.' },
  { time: '5 min', title: 'Reset safely', description: 'Dry the tray, collect every token, and keep all water in the container. Nothing from the model should enter a drain.' },
]
</script>

<template>
  <div class="grid gap-5 lg:grid-cols-[0.76fr_1.24fr]">
    <aside class="rounded-lg bg-[#dcecdf] p-5 sm:p-8">
      <div class="flex items-center gap-3">
        <span class="flex size-11 items-center justify-center rounded-lg bg-[#286a52] text-white" aria-hidden="true">
          <svg class="size-5" viewBox="0 0 24 24" fill="none"><path d="M5 5v6c0 2 1.5 3.5 3.5 3.5H12m0 0-3-3m3 3-3 3M19 19v-6c0-2-1.5-3.5-3.5-3.5H12m0 0 3-3m-3 3 3 3" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" /></svg>
        </span>
        <div>
          <p class="text-xs font-bold uppercase tracking-[0.14em] text-[#477460]">Kitchen-table science</p>
          <p class="text-sm font-semibold text-ink">The bottle cascade</p>
        </div>
      </div>
      <p class="mt-6 text-sm leading-6 text-[#4d6a5e]">A tabletop model that shows how litter can move with rainwater, where it can be stopped, and why tiny fragments are harder to recover.</p>

      <div class="mt-7 flex items-end justify-between border-b border-[#bdd5c4] pb-3">
        <h3 class="display-type text-3xl text-ink">What you need</h3>
        <span class="rounded-lg bg-white/70 px-3 py-1.5 font-mono text-[10px] font-bold text-[#477460]">about 1 hour</span>
      </div>
      <ul class="mt-4 space-y-3">
        <li v-for="item in materials" :key="item" class="flex gap-2.5 text-xs leading-5 text-[#456459]">
          <span class="mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-full bg-[#b8d3bd] text-[9px] font-bold text-[#286a52]" aria-hidden="true">+</span>{{ item }}
        </li>
      </ul>
      <div class="mt-6 rounded-lg border border-[#b8d3bd] bg-white/60 p-4">
        <p class="text-[10px] font-bold uppercase tracking-[0.13em] text-[#286a52]">Safety rule</p>
        <p class="mt-1.5 text-[11px] leading-5 text-[#567064]">Ask an adult to cut bottles. Do not grind, heat or scrape plastic. Use paper tokens instead of making real microplastic pieces.</p>
      </div>
    </aside>

    <div class="rounded-lg border border-[#dce6dc] bg-white p-5 sm:p-8">
      <div class="flex flex-wrap items-end justify-between gap-3 border-b border-[#e8ede5] pb-4">
        <div>
          <p class="text-xs font-bold uppercase tracking-[0.14em] text-leaf">Make it in seven short steps</p>
          <h3 class="display-type mt-1 text-3xl text-ink">Build the story</h3>
        </div>
        <span class="font-mono text-[10px] text-[#789087]">7 steps - 60 minutes</span>
      </div>
      <ol class="mt-2">
        <li v-for="(step, index) in steps" :key="step.title" class="group relative flex gap-4 py-4">
          <span v-if="index < steps.length - 1" class="absolute bottom-0 left-[17px] top-[48px] w-px bg-[#dbe6dc]" aria-hidden="true"></span>
          <span class="relative z-10 flex size-[35px] shrink-0 items-center justify-center rounded-lg bg-[#eff4e9] font-mono text-xs font-bold text-[#4c7c67] transition group-hover:bg-[#d4e66d]">0{{ index + 1 }}</span>
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
