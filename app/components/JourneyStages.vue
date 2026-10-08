<script setup lang="ts">
type Stage = {
  key: string
  name: string
  threshold: string
  short: string
  detail: string
  color: string
  habitat: string
}

const stages: Stage[] = [
  {
    key: 'macro',
    name: 'Macro',
    threshold: '>25 mm',
    short: 'The litter we can spot',
    detail: 'A bottle, wrapper or broken crate is still large enough to see from a distance. Sunlight can begin weathering the exposed surface.',
    color: '#e68162',
    habitat: 'A riverbank or beach',
  },
  {
    key: 'meso',
    name: 'Meso',
    threshold: '5–25 mm',
    short: 'Chips and flakes',
    detail: 'As the plastic becomes brittle, weather and abrasion can break off smaller pieces. The fragments are still visible, but easy to overlook.',
    color: '#e1ad54',
    habitat: 'Sand and shoreline wrack',
  },
  {
    key: 'micro',
    name: 'Micro',
    threshold: '<5 mm',
    short: 'Smaller than a grain of rice',
    detail: 'Microplastics are smaller than five millimetres. Some are made as tiny particles; others form when larger plastic breaks into fragments.',
    color: '#58a99d',
    habitat: 'Water, sand and soil',
  },
  {
    key: 'nano',
    name: 'Nano',
    threshold: '<1 mm*',
    short: 'Too tiny to see unaided',
    detail: 'The final step in our model zooms far beyond what the eye can see. Scientists use different cut-offs for nanoplastics; many describe them as smaller than one micrometre.',
    color: '#7b91c2',
    habitat: 'Microscope-scale particles',
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
  <div class="overflow-hidden rounded-[30px] border border-[#dce6dc] bg-white soft-shadow">
    <div class="grid lg:grid-cols-[0.9fr_1.1fr]">
      <div class="bg-[#f1f5ec] p-6 sm:p-9 lg:p-10">
        <p class="mb-6 text-xs font-bold uppercase tracking-[0.18em] text-leaf">Tap a stage to zoom in</p>
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
            class="group flex w-full items-center gap-4 rounded-2xl border p-3.5 text-left transition duration-200 sm:p-4"
            :class="activeIndex === index ? 'border-ink bg-white shadow-[0_8px_25px_rgba(23,58,53,0.08)]' : 'border-transparent hover:bg-white/70'"
            @click="selectStage(index)"
            @keydown="onTabKeydown($event, index)"
          >
            <span class="flex size-10 shrink-0 items-center justify-center rounded-full font-mono text-[10px] font-bold" :style="{ backgroundColor: `${stage.color}22`, color: stage.color }">0{{ index + 1 }}</span>
            <span class="min-w-0 flex-1">
              <span class="flex flex-wrap items-center gap-x-2 gap-y-0.5">
                <span class="font-semibold text-ink">{{ stage.name }}</span>
                <span class="font-mono text-xs text-[#66817a]">{{ stage.threshold }}</span>
              </span>
              <span class="mt-0.5 block text-xs text-[#71847d]">{{ stage.short }}</span>
            </span>
            <svg class="size-4 shrink-0 text-[#91a39b] transition group-hover:translate-x-0.5" viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M4 10h11m-4-4 4 4-4 4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </button>
        </div>

        <div class="mt-7 rounded-2xl border border-[#e1e8df] bg-white/75 px-4 py-3.5">
          <div class="flex items-center justify-between gap-3 text-[11px] font-bold uppercase tracking-[0.14em] text-[#66817a]">
            <span>Plastic size guide</span>
            <span class="font-mono normal-case tracking-normal">not to scale</span>
          </div>
          <div class="mt-4 flex items-end justify-between px-2" aria-hidden="true">
            <span class="size-9 rounded-xl bg-[#e68162] shadow-[inset_-5px_-5px_0_rgba(0,0,0,.06)]"></span>
            <span class="size-6 rounded-lg bg-[#e1ad54]"></span>
            <span class="size-3 rounded-full bg-[#58a99d]"></span>
            <span class="size-1.5 rounded-full bg-[#7b91c2] ring-4 ring-[#7b91c2]/15"></span>
          </div>
          <div class="mt-2 flex items-center justify-between font-mono text-[9px] text-[#8b9a92]">
            <span>large</span><span>→</span><span>tiny</span>
          </div>
        </div>
      </div>

      <div id="stage-panel" role="tabpanel" :aria-labelledby="`stage-tab-${activeIndex}`" aria-live="polite" class="relative flex min-h-[340px] flex-col justify-between overflow-hidden bg-[#173a35] p-6 text-white sm:p-9 lg:p-10">
        <div class="pointer-events-none absolute -right-20 -top-28 size-80 rounded-full border border-white/10"></div>
        <div class="pointer-events-none absolute -right-10 -top-16 size-60 rounded-full border border-white/[0.07]"></div>
        <div class="pointer-events-none absolute inset-0 opacity-[0.12] grain"></div>
        <div class="relative z-10 flex items-start justify-between gap-4">
          <div>
            <p class="text-xs font-bold uppercase tracking-[0.18em] text-[#b7d27c]">{{ activeStage.habitat }}</p>
            <h3 class="display-type mt-3 text-5xl text-white sm:text-6xl">{{ activeStage.name }}</h3>
            <p class="mt-2 font-mono text-sm text-[#bdd3c9]">{{ activeStage.threshold }}</p>
          </div>
          <span class="rounded-full border border-white/20 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-[#c6ddd4]">Stage 0{{ activeIndex + 1 }}</span>
        </div>

        <div class="relative z-10 flex min-h-[135px] items-center justify-center" aria-hidden="true">
          <svg v-if="activeStage.key === 'macro'" class="float-slow h-36 w-52" viewBox="0 0 220 150" fill="none">
            <path d="M54 32 73 19h67l20 13 8 77-19 15H66l-18-15 6-77Z" fill="#E68162" stroke="#FFD6C8" stroke-width="2"/>
            <path d="M73 19v-8h67v8M73 19l-8 13h86l-11-13M81 46h60m-58 14h57m-55 14h53m-51 14h48" stroke="#8E493A" stroke-width="2" stroke-linecap="round"/>
            <path d="m163 40 13-7m-14 28 15-2m-17 25 14 4" stroke="#F9AA8F" stroke-width="3" stroke-linecap="round"/>
            <circle cx="35" cy="66" r="3" fill="#D4E66D"/><circle cx="190" cy="91" r="4" fill="#8FCABF"/><circle cx="41" cy="113" r="2" fill="#F3C16F"/>
          </svg>
          <svg v-else-if="activeStage.key === 'meso'" class="float-slow h-36 w-52" viewBox="0 0 220 150" fill="none">
            <path d="m43 53 32-24 29 12 20-19 43 25-6 34-31 7-15 38-40-10-26 12-20-28 14-25Z" fill="#E1AD54" stroke="#F5D99D" stroke-width="2"/>
            <path d="m75 29-4 22 32 14 1-24m20-19 10 32 33-7m-4 34-28-12-16 37m-40-10 9-31-25-11" stroke="#9D6D2B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <circle cx="36" cy="36" r="6" fill="#E68162"/><circle cx="184" cy="99" r="4" fill="#8FCABF"/><circle cx="52" cy="115" r="3" fill="#D4E66D"/>
          </svg>
          <svg v-else-if="activeStage.key === 'micro'" class="float-slow h-36 w-52" viewBox="0 0 220 150" fill="none">
            <circle cx="84" cy="73" r="27" fill="#58A99D"/><circle cx="132" cy="48" r="17" fill="#E1AD54"/><circle cx="143" cy="96" r="12" fill="#E68162"/><circle cx="54" cy="108" r="10" fill="#91C9B2"/><circle cx="173" cy="68" r="7" fill="#7B91C2"/>
            <circle cx="84" cy="73" r="37" stroke="#A7D5C8" stroke-opacity=".35"/><circle cx="132" cy="48" r="27" stroke="#A7D5C8" stroke-opacity=".25"/>
            <circle cx="42" cy="47" r="2" fill="#D4E66D"/><circle cx="177" cy="119" r="3" fill="#D4E66D"/><circle cx="108" cy="114" r="2" fill="#D4E66D"/>
          </svg>
          <svg v-else class="float-slow h-36 w-52" viewBox="0 0 220 150" fill="none">
            <circle cx="111" cy="75" r="45" fill="#7B91C2" fill-opacity=".12"/><circle cx="111" cy="75" r="32" stroke="#B3C1E0" stroke-opacity=".48"/><circle cx="111" cy="75" r="18" fill="#7B91C2"/><circle cx="111" cy="75" r="6" fill="#DFE5F5"/>
            <circle cx="50" cy="45" r="3" fill="#58A99D"/><circle cx="166" cy="42" r="4" fill="#E1AD54"/><circle cx="56" cy="111" r="2" fill="#D4E66D"/><circle cx="170" cy="106" r="2.5" fill="#58A99D"/>
            <path d="M72 50 53 46m96 5 14-6M80 103l-21 7m79-4 27 1" stroke="#B3C1E0" stroke-opacity=".45" stroke-dasharray="2 5"/>
          </svg>
        </div>

        <div class="relative z-10 border-t border-white/15 pt-4">
          <p class="max-w-lg text-sm leading-6 text-[#d2e1da]">{{ activeStage.detail }}</p>
          <p v-if="activeStage.key === 'nano'" class="mt-3 text-xs leading-5 text-[#b8cfc4]">*This last bead is enlarged for the model. Nano-size definitions vary by field.</p>
        </div>
      </div>
    </div>

    <div class="border-t border-[#e7ece4] px-6 py-6 sm:px-9 sm:py-7 lg:px-10">
      <div class="flex flex-wrap items-end justify-between gap-3">
        <div>
          <p class="text-[10px] font-bold uppercase tracking-[0.18em] text-leaf">One bottle · a very long story</p>
          <p class="mt-1 text-sm text-[#62776e]">A broad view of environmental weathering</p>
        </div>
        <span class="rounded-full bg-[#f0f3e9] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.11em] text-[#6b7f75]">not a fixed clock</span>
      </div>
      <div class="relative mt-8 grid grid-cols-4 gap-2 sm:gap-4">
        <div class="absolute left-[7%] right-[7%] top-[5px] h-px bg-[#cbd8cc]"></div>
        <div v-for="point in [
          { time: 'Today', label: 'Bottle enters the environment', color: '#e68162' },
          { time: 'Years', label: 'Exposed surface starts to weather', color: '#e1ad54' },
          { time: 'Decades', label: 'Sun + abrasion make fragments', color: '#58a99d' },
          { time: 'Centuries', label: 'Some estimates reach ~450 years*', color: '#7b91c2' },
        ]" :key="point.time" class="relative">
          <span class="relative z-10 block size-[11px] rounded-full ring-4 ring-white" :style="{ backgroundColor: point.color }"></span>
          <p class="mt-3 font-mono text-xs font-bold text-ink sm:text-sm">{{ point.time }}</p>
          <p class="mt-1 max-w-[175px] text-[10px] leading-4 text-[#73857c] sm:text-xs sm:leading-5">{{ point.label }}</p>
        </div>
      </div>
      <p class="mt-5 border-t border-[#edf0ea] pt-4 text-[11px] leading-5 text-[#718078]">*450 years is a commonly quoted estimate for a plastic bottle to degrade in the marine environment—not a precise countdown to disappearance. Plastics often become smaller pieces instead of fully going away. The time spent in each size band varies. <a class="font-semibold text-[#4d7762] underline decoration-[#9cb5a2] underline-offset-2" href="https://repository.library.noaa.gov/view/noaa/41264/noaa_41264_DS1.pdf" target="_blank" rel="noreferrer">Read NOAA's estimate ↗</a></p>
    </div>
  </div>
</template>
