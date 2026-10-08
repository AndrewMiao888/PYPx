<script setup lang="ts">
useHead({
  title: 'Science - The Journey of Microplastics',
  meta: [
    { name: 'description', content: 'A student-friendly explanation of UV photodegradation, photo-oxidation, chain scission and fragmentation.' },
  ],
})

const scienceIdeas = [
  {
    title: 'Plastic is made of polymers',
    text: 'A polymer is a very long molecule made of repeating parts. Many common plastics have carbon-rich backbones that are strong and slow to break down.',
  },
  {
    title: 'UV light adds energy',
    text: 'Ultraviolet light from the sun can start chemical changes at the plastic surface, especially when the surface already contains weak points or additives.',
  },
  {
    title: 'Oxygen changes the surface',
    text: 'In photo-oxidation, oxygen is involved in reactions that add oxygen-containing groups and weaken the material.',
  },
  {
    title: 'Chain scission shortens molecules',
    text: 'A long polymer chain can split into shorter chains. This is called chain scission. The exhibition diagram shows a simplified C-C bond split.',
  },
  {
    title: 'Brittle pieces fragment',
    text: 'After chemical weakening, physical forces such as sand, rocks, foot traffic, drains and waves can snap the brittle plastic into smaller pieces.',
  },
  {
    title: 'Fragmented is not gone',
    text: 'Full mineralisation would turn plastic into simple substances such as carbon dioxide, water and inorganic molecules. Many plastics mostly fragment in the environment.',
  },
]

const variables = [
  'Plastic type: PET, PE, PP, PS and PVC behave differently.',
  'Additives: colours, stabilisers and fillers can change how sunlight affects the material.',
  'Shape and thickness: thin films can crack differently from hard bottles.',
  'Sunlight and temperature: more UV exposure and heat can speed weathering.',
  'Oxygen and water: oxygen helps photo-oxidation, while water can transport pieces.',
  'Abrasion: sand, waves, road grit and rocks turn weakened plastic into fragments.',
]

const claimChecks = [
  {
    weak: 'Plastic disappears after 450 years.',
    stronger: 'A 450-year bottle estimate is a broad degradation estimate; plastic can break into smaller pieces instead of fully disappearing.',
  },
  {
    weak: 'Nano means anything tiny.',
    stronger: 'Our model uses nano as the smallest visible stage. Scientists often define nanoplastics as smaller than 1 micrometre.',
  },
  {
    weak: 'Sunlight alone makes microplastics.',
    stronger: 'Sunlight can weaken plastic, and physical forces such as rubbing, waves and grit help fragments break off.',
  },
  {
    weak: 'All plastics break down the same way.',
    stronger: 'Weathering depends on the polymer, additives, thickness and environmental conditions.',
  },
]
</script>

<template>
  <div>
    <section class="bg-sand py-14 sm:py-16 lg:py-20">
      <div class="section-shell grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
        <div>
          <p class="text-xs font-bold uppercase tracking-[0.18em] text-[#658a6b]">The science</p>
          <h1 class="display-type mt-3 text-5xl leading-tight text-ink sm:text-6xl">How sunlight helps plastic crack.</h1>
        </div>
        <p class="max-w-[600px] text-sm leading-7 text-[#62756b]">The science story has two parts: chemical weathering weakens the plastic, and physical movement breaks weakened plastic into smaller pieces.</p>
      </div>
    </section>

    <section class="bg-white py-14 sm:py-16 lg:py-20">
      <div class="section-shell grid gap-6 lg:grid-cols-[1.08fr_0.92fr] lg:items-start">
        <ScienceDiagram />
        <div class="rounded-lg bg-[#173a35] p-5 text-white sm:p-8">
          <p class="text-xs font-bold uppercase tracking-[0.18em] text-[#d4e66d]">Explain it out loud</p>
          <h2 class="display-type mt-3 text-4xl leading-tight sm:text-5xl">The short version.</h2>
          <ol class="mt-6 space-y-4">
            <li class="flex gap-3">
              <span class="font-mono text-xs font-bold text-[#d4e66d]">01</span>
              <p class="text-sm leading-6 text-[#e0ebe4]"><strong class="text-white">UV light</strong> gives energy to the plastic surface.</p>
            </li>
            <li class="flex gap-3">
              <span class="font-mono text-xs font-bold text-[#d4e66d]">02</span>
              <p class="text-sm leading-6 text-[#e0ebe4]"><strong class="text-white">Oxygen</strong> helps reactions that weaken polymer chains.</p>
            </li>
            <li class="flex gap-3">
              <span class="font-mono text-xs font-bold text-[#d4e66d]">03</span>
              <p class="text-sm leading-6 text-[#e0ebe4]"><strong class="text-white">Abrasion</strong> breaks the brittle surface into smaller fragments.</p>
            </li>
          </ol>
          <div class="mt-7 rounded-lg bg-white/[0.08] p-4">
            <p class="text-[10px] font-bold uppercase tracking-[0.14em] text-[#d4e66d]">Main message</p>
            <p class="mt-1.5 text-xs leading-5 text-[#d4e1da]">Breaking into smaller pieces is not the same as safely disappearing.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-[#f1f5ec] py-14 sm:py-16 lg:py-20">
      <div class="section-shell">
        <div class="max-w-[680px]">
          <p class="text-xs font-bold uppercase tracking-[0.18em] text-[#658a6b]">The full logic</p>
          <h2 class="display-type mt-3 text-4xl leading-tight text-ink sm:text-5xl">Six ideas that connect the chemistry.</h2>
        </div>
        <div class="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <article v-for="idea in scienceIdeas" :key="idea.title" class="rounded-lg bg-white p-5 shadow-sm">
            <h3 class="text-base font-bold text-ink">{{ idea.title }}</h3>
            <p class="mt-3 text-xs leading-6 text-[#64776e]">{{ idea.text }}</p>
          </article>
        </div>
      </div>
    </section>

    <section class="bg-white py-14 sm:py-16 lg:py-20">
      <div class="section-shell grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p class="text-xs font-bold uppercase tracking-[0.18em] text-[#658a6b]">Why timelines vary</p>
          <h2 class="display-type mt-3 text-4xl leading-tight text-ink sm:text-5xl">There is no single plastic clock.</h2>
          <p class="mt-4 text-sm leading-7 text-[#62756b]">A bottle on a sunny beach does not weather like a thick toy buried in soil. Scientists look at many variables before comparing timelines.</p>
        </div>
        <ul class="grid gap-3 sm:grid-cols-2">
          <li v-for="item in variables" :key="item" class="rounded-lg border border-[#dce6dc] bg-[#f8faf3] p-4 text-sm leading-6 text-[#526b60]">{{ item }}</li>
        </ul>
      </div>
    </section>

    <section class="bg-[#173a35] py-14 text-white sm:py-16 lg:py-20">
      <div class="section-shell">
        <div class="max-w-[690px]">
          <p class="text-xs font-bold uppercase tracking-[0.18em] text-[#d4e66d]">Better exhibition wording</p>
          <h2 class="display-type mt-3 text-4xl leading-tight sm:text-5xl">Say it like a scientist.</h2>
        </div>
        <div class="mt-8 grid gap-4 lg:grid-cols-2">
          <article v-for="check in claimChecks" :key="check.weak" class="rounded-lg border border-white/10 bg-white/[0.08] p-5">
            <p class="text-[10px] font-bold uppercase tracking-[0.14em] text-[#d4e66d]">Instead of</p>
            <p class="mt-2 text-sm leading-6 text-[#c8dcd2]">{{ check.weak }}</p>
            <p class="mt-4 text-[10px] font-bold uppercase tracking-[0.14em] text-[#d4e66d]">Say</p>
            <p class="mt-2 text-sm font-semibold leading-6 text-white">{{ check.stronger }}</p>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>
