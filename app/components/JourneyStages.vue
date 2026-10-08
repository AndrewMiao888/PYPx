<script setup lang="ts">
type Stage = {
  key: string
  name: string
  threshold: string
  short: string
  detail: string
  color: string
  place: string
  timeline: string
  modelRole: string
}

const stages: Stage[] = [
  {
    key: 'macro',
    name: 'Macro',
    threshold: '>25 mm',
    short: 'The litter we can spot',
    detail: 'A bottle, wrapper, lid or broken plastic item is still large enough to see and pick up. This is the easiest stage to stop because people can notice it before rain or wind moves it.',
    color: '#e68162',
    place: 'Footpath, oval, beach or bin area',
    timeline: 'Minutes to years',
    modelRole: 'Use one bottle-shaped paper token or a whole clean bottle.',
  },
  {
    key: 'meso',
    name: 'Meso',
    threshold: '5-25 mm',
    short: 'Chips, flakes and small pieces',
    detail: 'Weathered plastic becomes brittle. A larger object can crack into visible fragments when it is rubbed by sand, stepped on, moved by water or pushed around by waves.',
    color: '#e1ad54',
    place: 'Drain edges, sand and shoreline wrack',
    timeline: 'Years to decades',
    modelRole: 'Use several medium paper flakes at the second catch cup.',
  },
  {
    key: 'micro',
    name: 'Micro',
    threshold: '<5 mm',
    short: 'Smaller than a pencil eraser',
    detail: 'Microplastics are plastic pieces or fibres smaller than five millimetres. Some are made small, while many form when larger plastic breaks down.',
    color: '#58a99d',
    place: 'Water, sediment, soil and air',
    timeline: 'Years to centuries',
    modelRole: 'Use tiny paper dots and explain that real particles may be hard to see.',
  },
  {
    key: 'nano',
    name: 'Nano',
    threshold: '<1 mm in this model',
    short: 'A zoomed-in teaching stage',
    detail: 'The exhibition uses nano as the smallest visible model stage. In science, nanoplastics are often described as smaller than one micrometre, so the model dot is enlarged on purpose.',
    color: '#7b91c2',
    place: 'Microscope-scale particles',
    timeline: 'Long-term weathering',
    modelRole: 'Use one enlarged dot and label it clearly as a model, not actual size.',
  },
]

const activeIndex = ref(0)
const activeStage = computed(() => stages[activeIndex.value]!)

function selectStage(index: number) {
  activeIndex.value = (index + stages.length) % stages.length
}

function onTabKeydown(event: KeyboardEvent, index: number) {
  if (event.key === 'ArrowRight') {
    event.preventDefault()
    selectStage(index + 1)
    document.getElementById(`stage-tab-${(index + 1) % stages.length}`)?.focus()
  } else if (event.key === 'ArrowLeft') {
    event.preventDefault()
    selectStage(index - 1)
    document.getElementById(`stage-tab-${(index + stages.length - 1) % stages.length}`)?.focus()
  } else if (event.key === 'Home') {
    event.preventDefault()
    selectStage(0)
    document.getElementById('stage-tab-0')?.focus()
  } else if (event.key === 'End') {
    event.preventDefault()
    selectStage(stages.length - 1)
    document.getElementById(`stage-tab-${stages.length - 1}`)?.focus()
  }
}
</script>

<template>
  <div class="overflow-hidden rounded-lg border border-[#dce6dc] bg-white soft-shadow">
    <div class="grid lg:grid-cols-[0.92fr_1.08fr]">
      <div class="bg-[#f1f5ec] p-5 sm:p-8">
        <p class="mb-5 text-xs font-bold uppercase tracking-[0.18em] text-leaf">Tap a stage to zoom in</p>
        <div role="tablist" aria-label="Plastic fragment size stages" class="space-y-2">
          <button
            v-for="(stage, index) in stages"
            :id="`stage-tab-${index}`"
            :key="stage.key"
            type="button"
            role="tab"
            :aria-selected="activeIndex === index"
            aria-controls="stage-panel"
            :tabindex="activeIndex === index ? 0 : -1"
            class="group flex w-full items-center gap-4 rounded-lg border p-3.5 text-left transition duration-200"
            :class="activeIndex === index ? 'border-ink bg-white shadow-[0_8px_25px_rgba(23,58,53,0.08)]' : 'border-transparent hover:bg-white/70'"
            @click="selectStage(index)"
            @keydown="onTabKeydown($event, index)"
          >
            <span class="flex size-10 shrink-0 items-center justify-center rounded-lg font-mono text-[10px] font-bold" :style="{ backgroundColor: `${stage.color}22`, color: stage.color }">0{{ index + 1 }}</span>
            <span class="min-w-0 flex-1">
              <span class="flex flex-wrap items-center gap-x-2 gap-y-0.5">
                <span class="font-semibold text-ink">{{ stage.name }}</span>
                <span class="font-mono text-xs text-[#66817a]">{{ stage.threshold }}</span>
              </span>
              <span class="mt-0.5 block text-xs text-[#71847d]">{{ stage.short }}</span>
            </span>
            <svg class="size-4 shrink-0 text-[#91a39b] transition group-hover:translate-x-0.5" viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M4 10h11m-4-4 4 4-4 4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" /></svg>
          </button>
        </div>

        <div class="mt-7 rounded-lg border border-[#e1e8df] bg-white/75 px-4 py-3.5">
          <div class="flex items-center justify-between gap-3 text-[11px] font-bold uppercase tracking-[0.14em] text-[#66817a]">
            <span>Size guide</span>
            <span class="font-mono normal-case tracking-normal">not to scale</span>
          </div>
          <div class="mt-4 flex items-end justify-between px-2" aria-hidden="true">
            <span class="size-9 rounded-lg bg-[#e68162] shadow-[inset_-5px_-5px_0_rgba(0,0,0,.06)]"></span>
            <span class="size-6 rounded-md bg-[#e1ad54]"></span>
            <span class="size-3 rounded-full bg-[#58a99d]"></span>
            <span class="size-1.5 rounded-full bg-[#7b91c2] ring-4 ring-[#7b91c2]/15"></span>
          </div>
          <div class="mt-2 flex items-center justify-between font-mono text-[9px] text-[#8b9a92]">
            <span>large</span><span>to</span><span>tiny</span>
          </div>
        </div>
      </div>

      <div id="stage-panel" role="tabpanel" :aria-labelledby="`stage-tab-${activeIndex}`" aria-live="polite" class="relative flex min-h-[390px] flex-col justify-between overflow-hidden bg-[#173a35] p-5 text-white sm:p-8">
        <div class="pointer-events-none absolute -right-20 -top-28 size-80 rounded-full border border-white/10"></div>
        <div class="pointer-events-none absolute -right-10 -top-16 size-60 rounded-full border border-white/[0.07]"></div>
        <div class="pointer-events-none absolute inset-0 opacity-[0.12] grain"></div>
        <div class="relative z-10 flex items-start justify-between gap-4">
          <div>
            <p class="text-xs font-bold uppercase tracking-[0.18em] text-[#b7d27c]">{{ activeStage.place }}</p>
            <h3 class="display-type mt-3 text-5xl text-white sm:text-6xl">{{ activeStage.name }}</h3>
            <p class="mt-2 font-mono text-sm text-[#bdd3c9]">{{ activeStage.threshold }}</p>
          </div>
          <span class="rounded-lg border border-white/20 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-[#c6ddd4]">Stage 0{{ activeIndex + 1 }}</span>
        </div>

        <div class="relative z-10 my-6 flex min-h-[120px] items-center justify-center" aria-hidden="true">
          <div v-if="activeStage.key === 'macro'" class="h-32 w-44 rounded-lg bg-[#e68162] shadow-[inset_-16px_-16px_0_rgba(0,0,0,0.07)] ring-4 ring-[#ffd6c8]/30"></div>
          <div v-else-if="activeStage.key === 'meso'" class="grid w-56 grid-cols-3 gap-3">
            <span class="h-16 rounded-lg bg-[#e1ad54] rotate-6"></span>
            <span class="h-12 rounded-lg bg-[#e1ad54] -rotate-6"></span>
            <span class="h-20 rounded-lg bg-[#e1ad54] rotate-12"></span>
          </div>
          <div v-else-if="activeStage.key === 'micro'" class="relative h-32 w-56">
            <span class="absolute left-8 top-8 size-8 rounded-full bg-[#58a99d]"></span>
            <span class="absolute left-24 top-3 size-5 rounded-full bg-[#e1ad54]"></span>
            <span class="absolute left-32 top-20 size-4 rounded-full bg-[#e68162]"></span>
            <span class="absolute left-44 top-12 size-3 rounded-full bg-[#d4e66d]"></span>
            <span class="absolute left-4 top-24 size-2 rounded-full bg-[#7b91c2]"></span>
          </div>
          <div v-else class="relative flex size-36 items-center justify-center rounded-full border border-[#b3c1e0]/40 bg-[#7b91c2]/10">
            <span class="size-20 rounded-full border border-[#b3c1e0]/50"></span>
            <span class="absolute size-7 rounded-full bg-[#7b91c2]"></span>
            <span class="absolute size-2 rounded-full bg-white"></span>
          </div>
        </div>

        <div class="relative z-10 grid gap-4 border-t border-white/15 pt-4 sm:grid-cols-2">
          <div>
            <p class="text-[10px] font-bold uppercase tracking-[0.14em] text-[#d4e66d]">What is happening</p>
            <p class="mt-2 text-sm leading-6 text-[#d2e1da]">{{ activeStage.detail }}</p>
          </div>
          <div>
            <p class="text-[10px] font-bold uppercase tracking-[0.14em] text-[#d4e66d]">Model role</p>
            <p class="mt-2 text-sm leading-6 text-[#d2e1da]">{{ activeStage.modelRole }}</p>
            <p class="mt-3 font-mono text-xs text-[#bdd3c9]">Timeline: {{ activeStage.timeline }}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="border-t border-[#e7ece4] px-5 py-6 sm:px-8">
      <div class="flex flex-wrap items-end justify-between gap-3">
        <div>
          <p class="text-[10px] font-bold uppercase tracking-[0.18em] text-leaf">One bottle, a very long story</p>
          <p class="mt-1 text-sm text-[#62776e]">Environmental weathering is a process, not a fixed countdown.</p>
        </div>
        <span class="rounded-lg bg-[#f0f3e9] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.11em] text-[#6b7f75]">years to centuries</span>
      </div>
      <div class="relative mt-8 grid grid-cols-4 gap-2 sm:gap-4">
        <div class="absolute left-[7%] right-[7%] top-[5px] h-px bg-[#cbd8cc]"></div>
        <div v-for="point in [
          { time: 'Today', label: 'Plastic enters the environment', color: '#e68162' },
          { time: 'Weeks-years', label: 'Surface starts to weather', color: '#e1ad54' },
          { time: 'Years-decades', label: 'Cracks and fragments form', color: '#58a99d' },
          { time: 'Centuries', label: 'Some bottle estimates reach about 450 years', color: '#7b91c2' },
        ]" :key="point.time" class="relative">
          <span class="relative z-10 block size-[11px] rounded-full ring-4 ring-white" :style="{ backgroundColor: point.color }"></span>
          <p class="mt-3 font-mono text-[11px] font-bold text-ink sm:text-sm">{{ point.time }}</p>
          <p class="mt-1 max-w-[175px] text-[10px] leading-4 text-[#73857c] sm:text-xs sm:leading-5">{{ point.label }}</p>
        </div>
      </div>
      <p class="mt-5 border-t border-[#edf0ea] pt-4 text-[11px] leading-5 text-[#718078]">A commonly used estimate says a plastic bottle can take about 450 years to degrade in the marine environment, but that does not mean it neatly disappears. NOAA explains that many plastics break into smaller and smaller pieces instead of fully mineralising into carbon dioxide, water and inorganic molecules.</p>
    </div>
  </div>
</template>
