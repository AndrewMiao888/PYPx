<script setup lang="ts">
useHead({
  title: 'How to Help - The Journey of Microplastics',
  meta: [
    { name: 'description', content: 'Practical ways students, families and schools can reduce plastic pollution and microplastics.' },
  ],
})

const actionGroups = [
  {
    title: 'At school',
    actions: [
      'Run a wrapper-free lunch day and count how much waste is avoided.',
      'Put clear labels on bins so recycling mistakes are easier to spot.',
      'Choose paper decorations instead of plastic glitter or confetti.',
      'Do a safe litter audit around eating areas after recess or lunch.',
    ],
  },
  {
    title: 'At home',
    actions: [
      'Refill a bottle instead of buying single-use drink bottles.',
      'Use reusable containers, lunch wraps and cutlery when practical.',
      'Repair, reuse or donate plastic items that still work.',
      'Check local recycling rules before putting plastic in the yellow bin.',
    ],
  },
  {
    title: 'Laundry choices',
    actions: [
      'Wash synthetic clothing less often when it is not dirty.',
      'Wash full loads to reduce friction between clothes.',
      'Use cold, shorter cycles when suitable.',
      'Use a microfiber-catching bag, ball or external filter if available.',
    ],
  },
  {
    title: 'Around Adelaide',
    actions: [
      'Pick up litter safely before rain, especially near drains.',
      'Support local refill, reuse and plastic-free options.',
      'Learn which single-use plastic items are phased out in South Australia.',
      'Join a supervised school, beach or creek cleanup.',
    ],
  },
]

const sevenDayPlan = [
  'Day 1: Carry a refillable bottle.',
  'Day 2: Pack lunch with one less disposable wrapper.',
  'Day 3: Pick up three safe pieces of litter with adult guidance.',
  'Day 4: Check the recycling rules for one common item.',
  'Day 5: Wash one full laundry load on a cold, shorter cycle.',
  'Day 6: Ask a cafe or sports club about reuse options.',
  'Day 7: Teach one person the macro to micro journey.',
]

const impactLogic = [
  {
    title: 'Reduce',
    text: 'The strongest action is to avoid creating waste in the first place.',
  },
  {
    title: 'Reuse',
    text: 'A reused bottle, container or bag replaces many single-use moments.',
  },
  {
    title: 'Capture',
    text: 'Bins, filters, drains traps and cleanups catch material before it spreads.',
  },
  {
    title: 'Teach',
    text: 'A clear explanation helps other people understand why small actions matter.',
  },
]
</script>

<template>
  <div>
    <section class="bg-sand py-14 sm:py-16 lg:py-20">
      <div class="section-shell grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
        <div>
          <p class="text-xs font-bold uppercase tracking-[0.18em] text-[#658a6b]">How to help</p>
          <h1 class="display-type mt-3 text-5xl leading-tight text-ink sm:text-6xl">Stop the journey before it starts.</h1>
        </div>
        <p class="max-w-[600px] text-sm leading-7 text-[#62756b]">The most helpful action is prevention. One bottle picked up today is easier to manage than thousands of small fragments later.</p>
      </div>
    </section>

    <section class="bg-white py-14 sm:py-16 lg:py-20">
      <div class="section-shell">
        <div class="max-w-[700px]">
          <p class="text-xs font-bold uppercase tracking-[0.18em] text-[#658a6b]">Practical action bank</p>
          <h2 class="display-type mt-3 text-4xl leading-tight text-ink sm:text-5xl">What students, families and schools can do.</h2>
        </div>
        <div class="mt-8 grid gap-4 lg:grid-cols-4">
          <article v-for="group in actionGroups" :key="group.title" class="rounded-lg border border-[#dce6dc] bg-[#f8faf3] p-5">
            <h3 class="text-base font-bold text-ink">{{ group.title }}</h3>
            <ul class="mt-4 space-y-3">
              <li v-for="action in group.actions" :key="action" class="flex gap-2 text-xs leading-5 text-[#61756b]">
                <span class="mt-1 size-1.5 shrink-0 rounded-full bg-[#70a47a]" aria-hidden="true"></span>
                <span>{{ action }}</span>
              </li>
            </ul>
          </article>
        </div>
      </div>
    </section>

    <section class="bg-[#f1f5ec] py-14 sm:py-16 lg:py-20">
      <div class="section-shell grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
        <div>
          <p class="text-xs font-bold uppercase tracking-[0.18em] text-[#658a6b]">Why these actions work</p>
          <h2 class="display-type mt-3 text-4xl leading-tight text-ink sm:text-5xl">Four helpful levers.</h2>
          <p class="mt-4 text-sm leading-7 text-[#62756b]">Microplastics are hard to remove once they spread, so the logic is to reduce, reuse, capture and teach.</p>
        </div>
        <div class="grid gap-4 sm:grid-cols-2">
          <article v-for="item in impactLogic" :key="item.title" class="rounded-lg bg-white p-5 shadow-sm">
            <h3 class="text-base font-bold text-ink">{{ item.title }}</h3>
            <p class="mt-3 text-xs leading-6 text-[#64776e]">{{ item.text }}</p>
          </article>
        </div>
      </div>
    </section>

    <section class="bg-white py-14 sm:py-16 lg:py-20">
      <div class="section-shell grid gap-8 lg:grid-cols-2">
        <div class="rounded-lg bg-[#173a35] p-5 text-white sm:p-8">
          <p class="text-xs font-bold uppercase tracking-[0.18em] text-[#d4e66d]">A simple challenge</p>
          <h2 class="display-type mt-3 text-4xl leading-tight">Seven days of small changes.</h2>
          <ol class="mt-6 space-y-3">
            <li v-for="day in sevenDayPlan" :key="day" class="rounded-lg bg-white/[0.08] p-4 text-sm leading-6 text-[#e0ebe4]">{{ day }}</li>
          </ol>
        </div>

        <div class="rounded-lg border border-[#dce6dc] bg-[#f8faf3] p-5 sm:p-8">
          <p class="text-xs font-bold uppercase tracking-[0.18em] text-[#658a6b]">Exhibition pledge wall</p>
          <h2 class="display-type mt-3 text-4xl leading-tight text-ink">Turn visitors into helpers.</h2>
          <p class="mt-4 text-sm leading-7 text-[#62756b]">Ask visitors to choose one action and write it on a paper leaf. Sort the leaves into reduce, reuse, capture and teach.</p>
          <div class="mt-6 grid gap-3 sm:grid-cols-2">
            <div class="rounded-lg bg-white p-4">
              <p class="text-[10px] font-bold uppercase tracking-[0.14em] text-[#5d7f68]">Prompt 1</p>
              <p class="mt-2 text-sm font-semibold leading-6 text-ink">One plastic item I can avoid is...</p>
            </div>
            <div class="rounded-lg bg-white p-4">
              <p class="text-[10px] font-bold uppercase tracking-[0.14em] text-[#5d7f68]">Prompt 2</p>
              <p class="mt-2 text-sm font-semibold leading-6 text-ink">One drain or place I can protect is...</p>
            </div>
            <div class="rounded-lg bg-white p-4">
              <p class="text-[10px] font-bold uppercase tracking-[0.14em] text-[#5d7f68]">Prompt 3</p>
              <p class="mt-2 text-sm font-semibold leading-6 text-ink">One person I can teach is...</p>
            </div>
            <div class="rounded-lg bg-white p-4">
              <p class="text-[10px] font-bold uppercase tracking-[0.14em] text-[#5d7f68]">Prompt 4</p>
              <p class="mt-2 text-sm font-semibold leading-6 text-ink">One thing our school could change is...</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-[#dcecdf] py-14 sm:py-16">
      <div class="section-shell grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <div>
          <p class="text-xs font-bold uppercase tracking-[0.18em] text-[#528064]">Local note</p>
          <h2 class="display-type mt-2 text-4xl leading-tight text-ink">South Australia is already reducing single-use plastics.</h2>
        </div>
        <p class="text-sm leading-7 text-[#456459]">State rules have phased out many problematic single-use plastic products. The exhibition can connect those rules to everyday choices: carrying reusables, avoiding litter and choosing products designed to be used again.</p>
      </div>
    </section>
  </div>
</template>
