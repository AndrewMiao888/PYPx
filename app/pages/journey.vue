<script setup lang="ts">
useHead({
  title: 'Journey - The Journey of Microplastics',
  meta: [
    { name: 'description', content: 'Follow the pathway of plastic from land to stormwater, coast and smaller fragments.' },
  ],
})

const routeSteps = [
  {
    title: '1. Escape',
    label: 'Where it starts',
    text: 'A bottle, wrapper, lid, balloon tie or takeaway item is dropped, blown from a bin, left after sport or washed from a picnic area.',
    stopPoint: 'Use a closed bin, reuse containers and pick up litter before rain.',
  },
  {
    title: '2. Transport',
    label: 'How it moves',
    text: 'Wind pushes light plastic. Rainwater carries pieces along gutters and through stormwater drains. In Adelaide, stormwater systems connect streets to waterways and coastal waters.',
    stopPoint: 'Keep drains clear, use gross pollutant traps and stop rubbish at the street level.',
  },
  {
    title: '3. Weathering',
    label: 'What changes it',
    text: 'Sunlight, oxygen, heat and movement change the surface. The plastic can become faded, cracked and brittle over time.',
    stopPoint: 'Shade or burial can slow UV weathering, but the best action is removal before it fragments.',
  },
  {
    title: '4. Fragmentation',
    label: 'Why size matters',
    text: 'Sand, rocks, road grit and waves can break brittle plastic into mesoplastics, microplastics and even smaller particles.',
    stopPoint: 'Once fragments are tiny, cleanup becomes much harder and prevention becomes even more important.',
  },
  {
    title: '5. Exposure',
    label: 'Who meets it',
    text: 'Small plastic pieces can mix with sediment, float in water or be mistaken for food by wildlife. Scientists are still studying the full effects.',
    stopPoint: 'Reduce plastic entering the system and support monitoring, cleanups and better product choices.',
  },
]

const adelaideLinks = [
  {
    place: 'Schoolyard or oval',
    detail: 'Small wrappers, bottle caps and synthetic fibres can start on land, especially near eating areas, sports bags and bins.',
  },
  {
    place: 'Street gutter',
    detail: 'Rain turns a hard surface into a transport path. Anything loose can move quickly toward the drain.',
  },
  {
    place: 'Stormwater network',
    detail: 'Stormwater projects can capture and clean water. South Australian guidance notes that captured pollutants would otherwise flow toward Gulf St Vincent.',
  },
  {
    place: 'Gulf St Vincent',
    detail: 'Coastal water, sand and sediment can all become places where plastic fragments are found and studied.',
  },
]

const evidenceNotes = [
  'Microplastic usually means plastic smaller than 5 mm.',
  'Macro and meso categories are useful teaching stages, but exact boundaries can vary by source.',
  'A plastic bottle degradation estimate of about 450 years is a broad teaching estimate, not a timer.',
  'Plastic often fragments without fully mineralising into simple end products.',
]
</script>

<template>
  <div>
    <section class="bg-sand py-14 sm:py-16 lg:py-20">
      <div class="section-shell grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
        <div>
          <p class="text-xs font-bold uppercase tracking-[0.18em] text-[#658a6b]">The pathway</p>
          <h1 class="display-type mt-3 text-5xl leading-tight text-ink sm:text-6xl">From Adelaide land to tiny fragments.</h1>
        </div>
        <p class="max-w-[560px] text-sm leading-7 text-[#62756b]">This page explains the journey logic: plastic escapes, moves with wind and rain, weathers under sunlight and oxygen, then fragments into smaller pieces that become harder to remove.</p>
      </div>
    </section>

    <section class="bg-white py-14 sm:py-16 lg:py-20">
      <div class="section-shell">
        <div class="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div class="max-w-[620px]">
            <p class="text-xs font-bold uppercase tracking-[0.18em] text-[#658a6b]">Interactive size breakdown</p>
            <h2 class="display-type mt-3 text-4xl leading-tight text-ink sm:text-5xl">Macro, meso, micro and nano.</h2>
          </div>
          <p class="max-w-[360px] text-xs leading-6 text-[#718178]">Use this component at the exhibition table. It connects each size stage to a timeline, place and model part.</p>
        </div>
        <JourneyStages />
      </div>
    </section>

    <section class="bg-[#f1f5ec] py-14 sm:py-16 lg:py-20">
      <div class="section-shell">
        <div class="max-w-[680px]">
          <p class="text-xs font-bold uppercase tracking-[0.18em] text-[#658a6b]">Cause and effect</p>
          <h2 class="display-type mt-3 text-4xl leading-tight text-ink sm:text-5xl">The journey is a chain of events.</h2>
        </div>
        <div class="mt-8 grid gap-4 lg:grid-cols-5">
          <article v-for="step in routeSteps" :key="step.title" class="rounded-lg bg-white p-5 shadow-sm">
            <p class="font-mono text-[10px] font-bold uppercase tracking-[0.12em] text-[#5d7f68]">{{ step.label }}</p>
            <h3 class="mt-3 text-base font-bold text-ink">{{ step.title }}</h3>
            <p class="mt-3 text-xs leading-6 text-[#61756b]">{{ step.text }}</p>
            <p class="mt-4 border-t border-[#e8eee5] pt-3 text-[11px] font-semibold leading-5 text-[#416b58]">{{ step.stopPoint }}</p>
          </article>
        </div>
      </div>
    </section>

    <section class="bg-white py-14 sm:py-16 lg:py-20">
      <div class="section-shell grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
        <div>
          <p class="text-xs font-bold uppercase tracking-[0.18em] text-[#658a6b]">Adelaide context</p>
          <h2 class="display-type mt-3 text-4xl leading-tight text-ink sm:text-5xl">Where the model connects to real places.</h2>
          <p class="mt-4 text-sm leading-7 text-[#62756b]">The cascade is a small version of a bigger pathway: land, hard surfaces, drains, treatment points and coastal water.</p>
        </div>
        <div class="grid gap-4 sm:grid-cols-2">
          <article v-for="item in adelaideLinks" :key="item.place" class="rounded-lg border border-[#dce6dc] bg-[#f8faf3] p-5">
            <h3 class="text-base font-bold text-ink">{{ item.place }}</h3>
            <p class="mt-3 text-xs leading-6 text-[#64776e]">{{ item.detail }}</p>
          </article>
        </div>
      </div>
    </section>

    <section class="bg-[#173a35] py-14 text-white sm:py-16 lg:py-20">
      <div class="section-shell grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <p class="text-xs font-bold uppercase tracking-[0.18em] text-[#d4e66d]">Careful science wording</p>
          <h2 class="display-type mt-3 text-4xl leading-tight sm:text-5xl">What the evidence lets us say.</h2>
        </div>
        <ul class="grid gap-3">
          <li v-for="note in evidenceNotes" :key="note" class="rounded-lg border border-white/10 bg-white/[0.08] p-4 text-sm leading-6 text-[#d9e8df]">{{ note }}</li>
        </ul>
      </div>
    </section>
  </div>
</template>
