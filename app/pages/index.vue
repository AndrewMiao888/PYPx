<script setup lang="ts">
useHead({
  title: 'The Journey of Microplastics - Adelaide PYP Exhibition',
  meta: [
    { name: 'description', content: 'A Year 5 PYP exhibition site about how plastic litter in Adelaide can become microplastics and what people can do to help.' },
  ],
})

const pageLinks = [
  {
    title: 'Follow the journey',
    text: 'Trace a piece of plastic from a footpath or schoolyard to drains, creeks, beaches and the sea.',
    to: '/journey',
    label: 'Open journey page',
  },
  {
    title: 'Understand the science',
    text: 'Learn how UV light, oxygen, carbon chains and abrasion work together over time.',
    to: '/science',
    label: 'Open science page',
  },
  {
    title: 'Build the model',
    text: 'Use a one-hour bottle cascade to show transport, size change and prevention points.',
    to: '/model',
    label: 'Open model guide',
  },
  {
    title: 'Know how to help',
    text: 'Turn the learning into useful habits at home, school and around Adelaide.',
    to: '/help',
    label: 'Open help page',
  },
]

const logicSteps = [
  'Plastic escapes the bin or recycling stream.',
  'Rain and wind move it toward drains and waterways.',
  'Sunlight and oxygen weaken the surface.',
  'Rubbing, waves and time break it into smaller pieces.',
  'The smallest pieces are hard to collect, so prevention matters most.',
]
</script>

<template>
  <div>
    <section class="relative isolate bg-sand py-14 sm:py-16 lg:py-20">
      <div class="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-28 bg-white"></div>
      <div class="section-shell grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div class="max-w-[640px]">
          <p class="inline-flex rounded-lg border border-[#dbe8d6] bg-white/75 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-[#557863]">IB PYP Year 5 Exhibition - Adelaide</p>
          <h1 class="display-type mt-6 text-5xl leading-[1.02] text-[#173a35] sm:text-6xl lg:text-7xl">The Journey of Microplastics</h1>
          <p class="mt-5 max-w-[520px] text-base leading-8 text-[#62756b]">A local science story about how everyday plastic can travel through Adelaide's streets, drains and coastal waters, then break into fragments too small to easily clean up.</p>
          <div class="mt-7 flex flex-wrap gap-3">
            <NuxtLink to="/journey" class="inline-flex items-center gap-2 rounded-lg bg-[#173a35] px-5 py-3 text-xs font-bold text-white shadow-[0_8px_22px_rgba(23,58,53,.16)] transition hover:-translate-y-0.5 hover:bg-[#286a52]">
              Start the journey
              <svg class="size-3.5" viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M4 10h11m-4-4 4 4-4 4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" /></svg>
            </NuxtLink>
            <NuxtLink to="/model" class="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-xs font-bold text-[#3b6755] shadow-sm transition hover:-translate-y-0.5 hover:bg-[#f5f9ef]">
              Build the model
              <svg class="size-3.5" viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M4 10h11m-4-4 4 4-4 4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" /></svg>
            </NuxtLink>
          </div>
        </div>

        <div class="relative">
          <div class="overflow-hidden rounded-lg border border-[#d9e7d9] bg-[#d9eae3] shadow-[0_24px_70px_rgba(24,57,52,0.12)]">
            <div class="relative min-h-[410px] p-6 sm:p-8">
              <div class="absolute inset-0 opacity-20 grain"></div>
              <div class="absolute inset-x-0 bottom-0 h-44 bg-[#84bdb4]"></div>
              <div class="absolute inset-x-0 bottom-16 h-20 bg-[#b8d9d3]"></div>
              <div class="relative z-10 grid gap-4 sm:grid-cols-2">
                <div class="rounded-lg bg-white/80 p-4 shadow-sm">
                  <p class="text-[10px] font-bold uppercase tracking-[0.14em] text-[#5f7d6f]">Local context</p>
                  <p class="mt-2 text-sm font-semibold leading-6 text-ink">Stormwater can carry litter and pollutants toward Gulf St Vincent if they are not captured first.</p>
                </div>
                <div class="rounded-lg bg-[#173a35] p-4 text-white shadow-sm">
                  <p class="text-[10px] font-bold uppercase tracking-[0.14em] text-[#d4e66d]">Key idea</p>
                  <p class="mt-2 text-sm font-semibold leading-6">Smaller does not mean gone. It can mean harder to see, measure and remove.</p>
                </div>
              </div>

              <div class="absolute bottom-8 left-8 right-8 z-10">
                <div class="grid grid-cols-4 gap-2">
                  <div v-for="stage in ['Macro', 'Meso', 'Micro', 'Nano']" :key="stage" class="rounded-lg bg-white/90 px-3 py-3 text-center shadow-sm">
                    <p class="font-mono text-[10px] font-bold text-[#5f7d6f]">{{ stage }}</p>
                  </div>
                </div>
                <div class="mt-4 flex items-center justify-between rounded-lg bg-white/70 px-4 py-3 text-[10px] font-bold uppercase tracking-[0.12em] text-[#517465]">
                  <span>large object</span>
                  <span>weathering over time</span>
                  <span>tiny fragments</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-white py-14 sm:py-16 lg:py-20">
      <div class="section-shell">
        <div class="max-w-[680px]">
          <p class="text-xs font-bold uppercase tracking-[0.18em] text-[#658a6b]">Explore the exhibition</p>
          <h2 class="display-type mt-3 text-4xl leading-tight text-ink sm:text-5xl">Four pages, one connected story.</h2>
        </div>
        <div class="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <NuxtLink v-for="item in pageLinks" :key="item.to" :to="item.to" class="group rounded-lg border border-[#dce6dc] bg-[#f8faf3] p-5 transition hover:-translate-y-1 hover:border-[#a9c8ad] hover:bg-white hover:shadow-[0_18px_45px_rgba(24,57,52,0.10)]">
            <h3 class="text-base font-bold text-ink">{{ item.title }}</h3>
            <p class="mt-3 text-xs leading-6 text-[#64776e]">{{ item.text }}</p>
            <p class="mt-5 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.12em] text-[#4d7762]">
              {{ item.label }}
              <svg class="size-3 transition group-hover:translate-x-0.5" viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M4 10h11m-4-4 4 4-4 4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" /></svg>
            </p>
          </NuxtLink>
        </div>
      </div>
    </section>

    <section class="bg-[#f1f5ec] py-14 sm:py-16 lg:py-20">
      <div class="section-shell grid gap-8 lg:grid-cols-[0.84fr_1.16fr] lg:items-start">
        <div>
          <p class="text-xs font-bold uppercase tracking-[0.18em] text-[#658a6b]">The logic</p>
          <h2 class="display-type mt-3 text-4xl leading-tight text-ink sm:text-5xl">Why prevention comes first.</h2>
          <p class="mt-4 text-sm leading-7 text-[#62756b]">The model is not just about a bottle moving downhill. It shows a system: escape, transport, weathering, fragmentation and action points.</p>
        </div>
        <ol class="grid gap-3">
          <li v-for="(step, index) in logicSteps" :key="step" class="flex gap-4 rounded-lg bg-white p-4 shadow-sm">
            <span class="flex size-8 shrink-0 items-center justify-center rounded-lg bg-[#d4e66d] font-mono text-xs font-bold text-ink">0{{ index + 1 }}</span>
            <p class="pt-1 text-sm leading-6 text-[#526b60]">{{ step }}</p>
          </li>
        </ol>
      </div>
    </section>

    <section class="bg-white py-14 sm:py-16 lg:py-20">
      <div class="section-shell">
        <div class="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div class="max-w-[620px]">
            <p class="text-xs font-bold uppercase tracking-[0.18em] text-[#658a6b]">Interactive preview</p>
            <h2 class="display-type mt-3 text-4xl leading-tight text-ink sm:text-5xl">Zoom from macro to nano.</h2>
          </div>
          <NuxtLink to="/journey" class="inline-flex items-center gap-2 rounded-lg bg-[#edf5ec] px-4 py-2.5 text-xs font-bold text-[#3b6755] transition hover:bg-[#d4e66d]">
            More journey detail
            <svg class="size-3.5" viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M4 10h11m-4-4 4 4-4 4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" /></svg>
          </NuxtLink>
        </div>
        <JourneyStages />
      </div>
    </section>
  </div>
</template>
