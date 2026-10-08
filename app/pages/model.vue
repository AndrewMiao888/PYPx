<script setup lang="ts">
useHead({
  title: 'Model Guide - The Journey of Microplastics',
  meta: [
    { name: 'description', content: 'A one-hour bottle cascade model guide for showing microplastic transport and fragmentation.' },
  ],
})

const modelRoles = [
  {
    part: 'Top bottle',
    represents: 'The original plastic item before it escapes into the environment.',
  },
  {
    part: 'Water pour',
    represents: 'Rain and stormwater moving litter across hard surfaces.',
  },
  {
    part: 'Bottle channels',
    represents: 'Gutters, drains, creeks and flow paths that move material downhill.',
  },
  {
    part: 'Catch cups',
    represents: 'Places where plastic can collect, be noticed or be stopped.',
  },
  {
    part: 'Paper particles',
    represents: 'The size shift from visible litter to small fragments without creating real plastic pollution.',
  },
]

const fairTests = [
  'Change the slope and time how fast water reaches the final cup.',
  'Add a paper filter or mesh screen and count how many tokens it catches.',
  'Compare a slow pour with a sudden pour to model light rain and heavy rain.',
  'Try different positions for the catch cups to show why trap placement matters.',
]

const scriptLines = [
  'This bottle is the macroplastic stage because it is larger than 25 mm and easy to see.',
  'The water shows how rain can move litter from land into the stormwater system.',
  'The smaller paper pieces show fragmentation. We use paper so we do not create real microplastics.',
  'UV light and oxygen can weaken plastic over time, but rubbing and movement help pieces break off.',
  'The final lesson is prevention: it is easier to pick up one bottle than thousands of tiny fragments.',
]
</script>

<template>
  <div>
    <section class="bg-sand py-14 sm:py-16 lg:py-20">
      <div class="section-shell grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
        <div>
          <p class="text-xs font-bold uppercase tracking-[0.18em] text-[#658a6b]">DIY model</p>
          <h1 class="display-type mt-3 text-5xl leading-tight text-ink sm:text-6xl">Build the one-hour bottle cascade.</h1>
        </div>
        <p class="max-w-[600px] text-sm leading-7 text-[#62756b]">The model turns the science into something visitors can see: movement downhill, places to catch litter, and the change from one visible item to smaller fragments.</p>
      </div>
    </section>

    <section class="bg-white py-14 sm:py-16 lg:py-20">
      <div class="section-shell">
        <ModelGuide />
      </div>
    </section>

    <section class="bg-[#f1f5ec] py-14 sm:py-16 lg:py-20">
      <div class="section-shell grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
        <div>
          <p class="text-xs font-bold uppercase tracking-[0.18em] text-[#658a6b]">Model logic</p>
          <h2 class="display-type mt-3 text-4xl leading-tight text-ink sm:text-5xl">What each part means.</h2>
          <p class="mt-4 text-sm leading-7 text-[#62756b]">A good exhibition model is a simplification. Label the simplification clearly so visitors know what each piece represents.</p>
        </div>
        <div class="grid gap-4 sm:grid-cols-2">
          <article v-for="role in modelRoles" :key="role.part" class="rounded-lg bg-white p-5 shadow-sm">
            <p class="font-mono text-[10px] font-bold uppercase tracking-[0.12em] text-[#5d7f68]">{{ role.part }}</p>
            <p class="mt-3 text-sm leading-6 text-[#526b60]">{{ role.represents }}</p>
          </article>
        </div>
      </div>
    </section>

    <section class="bg-white py-14 sm:py-16 lg:py-20">
      <div class="section-shell grid gap-8 lg:grid-cols-2">
        <div class="rounded-lg border border-[#dce6dc] bg-[#f8faf3] p-5 sm:p-8">
          <p class="text-xs font-bold uppercase tracking-[0.18em] text-[#658a6b]">Fair-test ideas</p>
          <h2 class="display-type mt-3 text-4xl leading-tight text-ink">Turn it into an investigation.</h2>
          <ul class="mt-6 space-y-3">
            <li v-for="test in fairTests" :key="test" class="rounded-lg bg-white p-4 text-sm leading-6 text-[#526b60]">{{ test }}</li>
          </ul>
        </div>
        <div class="rounded-lg bg-[#173a35] p-5 text-white sm:p-8">
          <p class="text-xs font-bold uppercase tracking-[0.18em] text-[#d4e66d]">Presentation script</p>
          <h2 class="display-type mt-3 text-4xl leading-tight">Say this to visitors.</h2>
          <ol class="mt-6 space-y-3">
            <li v-for="(line, index) in scriptLines" :key="line" class="flex gap-3 rounded-lg bg-white/[0.08] p-4">
              <span class="font-mono text-xs font-bold text-[#d4e66d]">0{{ index + 1 }}</span>
              <p class="text-sm leading-6 text-[#e0ebe4]">{{ line }}</p>
            </li>
          </ol>
        </div>
      </div>
    </section>

    <section class="bg-[#dcecdf] py-14 sm:py-16">
      <div class="section-shell grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <div>
          <p class="text-xs font-bold uppercase tracking-[0.18em] text-[#528064]">Clean reset</p>
          <h2 class="display-type mt-2 text-4xl leading-tight text-ink">Finish with zero mess.</h2>
        </div>
        <p class="text-sm leading-7 text-[#456459]">Collect every paper token, dry the bottles and tray, and pour the water into a sink or garden area with adult permission. The model should teach about pollution without creating any.</p>
      </div>
    </section>
  </div>
</template>
