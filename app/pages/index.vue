<script setup lang="ts">
const navLinks = [
  { label: 'The journey', href: '#journey' },
  { label: 'The science', href: '#science' },
  { label: 'Make a model', href: '#model' },
]

const cookieNoticeOpen = ref(false)
const cookieNotice = useCookie('microplastics-cookie-notice', {
  maxAge: 60 * 60 * 24 * 365,
  sameSite: 'lax',
  path: '/',
})

onMounted(() => {
  cookieNoticeOpen.value = !cookieNotice.value
})

function acknowledgeCookieNotice() {
  cookieNotice.value = 'seen'
  cookieNoticeOpen.value = false
}
</script>

<template>
  <div class="overflow-hidden text-ink">
    <header class="relative z-20 border-b border-[#e7ece3] bg-sand/90 backdrop-blur">
      <div class="section-shell flex h-[76px] items-center justify-between">
        <a href="#top" class="flex items-center gap-2.5 rounded-lg" aria-label="The Journey of Microplastics home">
          <img src="/logo.svg" alt="" class="size-9" width="36" height="36">
          <span class="text-[13px] font-bold tracking-[-0.03em] text-ink sm:text-sm">FIELD<span class="text-[#7e9b5c]">/</span>NOTES</span>
        </a>
        <nav class="hidden items-center gap-7 md:flex" aria-label="Main navigation">
          <a v-for="link in navLinks" :key="link.href" :href="link.href" class="text-xs font-semibold text-[#5e756a] transition hover:text-ink">{{ link.label }}</a>
        </nav>
        <a href="#journey" class="inline-flex items-center gap-2 rounded-full bg-[#173a35] px-4 py-2.5 text-[11px] font-bold text-white transition hover:bg-[#286a52] sm:px-5">
          Explore the journey <span aria-hidden="true">↘</span>
        </a>
      </div>
    </header>

    <main>
      <section id="top" class="relative isolate overflow-hidden bg-sand pb-16 pt-12 sm:pb-20 sm:pt-16 lg:pb-24 lg:pt-20">
        <div class="pointer-events-none absolute -right-20 top-0 -z-10 size-[490px] rounded-full bg-[#e1eddb] blur-[1px]"></div>
        <div class="pointer-events-none absolute -right-2 top-32 -z-10 size-[360px] rounded-full border border-[#bbd2b9]/60"></div>
        <div class="pointer-events-none absolute right-14 top-44 -z-10 size-[260px] rounded-full border border-[#bbd2b9]/40"></div>
        <div class="section-shell grid items-center gap-10 lg:grid-cols-[0.93fr_1.07fr] lg:gap-8">
          <div class="relative z-10 max-w-[580px]">
            <div class="inline-flex items-center gap-2 rounded-full border border-[#dce6d5] bg-white/70 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.15em] text-[#557863]">
              <span class="size-1.5 rounded-full bg-[#70a47a]"></span> IB PYP · Year 5 Exhibition
            </div>
            <p class="mt-7 text-xs font-bold uppercase tracking-[0.19em] text-[#668b6d]">A tiny piece can travel a long way</p>
            <h1 class="display-type mt-3 max-w-[620px] text-[clamp(3.5rem,8vw,6.35rem)] leading-[0.94] text-[#173a35]">The Journey of <span class="text-[#54826a]">Microplastics.</span></h1>
            <p class="mt-6 max-w-[460px] text-sm leading-7 text-[#62756b] sm:text-base sm:leading-8">From a sunlit footpath in Adelaide to the waters of Gulf St Vincent, follow how discarded plastic can weather into fragments too small to see.</p>
            <div class="mt-7 flex flex-wrap items-center gap-3">
              <a href="#journey" class="inline-flex items-center gap-2 rounded-full bg-[#173a35] px-5 py-3 text-xs font-bold text-white shadow-[0_8px_22px_rgba(23,58,53,.16)] transition hover:-translate-y-0.5 hover:bg-[#286a52]">Follow the particle <span aria-hidden="true">↘</span></a>
              <a href="#model" class="rounded-full px-4 py-3 text-xs font-bold text-[#3b6755] transition hover:bg-white/70">Build the model <span aria-hidden="true">→</span></a>
            </div>
            <div class="mt-9 flex items-center gap-3 text-[11px] text-[#789087]">
              <span class="flex -space-x-1.5" aria-hidden="true"><span class="size-5 rounded-full border-2 border-sand bg-[#d4e66d]"></span><span class="size-5 rounded-full border-2 border-sand bg-[#7fc2b1]"></span><span class="size-5 rounded-full border-2 border-sand bg-[#e9b55d]"></span></span>
              <span>Look closer. Think longer. Choose better.</span>
            </div>
          </div>

          <div class="relative mx-auto w-full max-w-[590px] lg:-mr-4">
            <div class="relative aspect-[1.08/1] overflow-hidden rounded-[34px] bg-[#d9eae3]">
              <div class="absolute inset-0 opacity-20 grain"></div>
              <div class="absolute -right-7 -top-10 size-56 rounded-full bg-[#eff5d6]/80 blur-3xl"></div>
              <svg class="absolute inset-0 size-full" viewBox="0 0 600 540" fill="none" role="img" aria-labelledby="hero-art-title hero-art-desc">
                <title id="hero-art-title">A plastic bottle beginning a journey across water</title>
                <desc id="hero-art-desc">An illustrated bottle floats above layered blue-green waves as it transforms into smaller coloured particles.</desc>
                <defs><linearGradient id="water" x1="300" x2="300" y1="283" y2="540" gradientUnits="userSpaceOnUse"><stop stop-color="#b9ddd1"/><stop offset="1" stop-color="#7eb9ae"/></linearGradient><linearGradient id="bottle" x1="229" x2="341" y1="123" y2="326" gradientUnits="userSpaceOnUse"><stop stop-color="#fffff6" stop-opacity=".95"/><stop offset="1" stop-color="#d8efe5" stop-opacity=".77"/></linearGradient><filter id="shadow" x="145" y="107" width="301" height="284" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feGaussianBlur stdDeviation="13"/></filter></defs>
                <circle cx="463" cy="112" r="37" fill="#f4cf77" fill-opacity=".86"/><circle cx="463" cy="112" r="54" stroke="#fff6d9" stroke-opacity=".5"/>
                <path d="M0 286c61-31 111 34 171 4s113-25 161 2 94 22 134-3 87-33 134-3v254H0V286Z" fill="url(#water)"/>
                <path d="M0 343c55-23 105 19 162 3 57-17 98-28 153-4 55 25 97 14 143-6s97-20 142 4" stroke="#eef8e8" stroke-opacity=".74" stroke-width="3" stroke-linecap="round"/>
                <path d="M0 402c50-20 106 9 157 2 63-8 95-27 157-2 59 24 103 23 154 0 53-24 87-18 132 0" stroke="#eff8e7" stroke-opacity=".48" stroke-width="2" stroke-linecap="round"/>
                <path d="M0 460c54-16 91 10 155 2 66-8 110-23 162-4 53 19 109 28 155 3 51-27 84-14 128 0" stroke="#eff8e7" stroke-opacity=".38" stroke-width="2" stroke-linecap="round"/>
                <ellipse cx="289" cy="335" fill="#315f55" fill-opacity=".2" filter="url(#shadow)" rx="131" ry="29"/>
                <g class="float-slow" transform="rotate(-11 287 217)">
                  <path d="M270 132v-21h38v21l15 15c7 7 11 17 11 27v111c0 21-17 38-38 38h-20c-21 0-38-17-38-38V174c0-10 4-20 11-27l21-15Z" fill="url(#bottle)" stroke="#fffef1" stroke-width="3"/>
                  <path d="M270 111h38v21h-38z" fill="#e1ad54" stroke="#fff4d9" stroke-width="2"/><path d="M266 105h46v7h-46z" fill="#c58e3e"/>
                  <path d="M244 181c27 9 79 10 105 0m-105 15c31 8 75 9 105 0m-105 15c26 7 77 9 105 0m-104 16c27 7 77 7 103-1" stroke="#7bb7a5" stroke-opacity=".52" stroke-width="2"/>
                  <path d="M264 236c0-8 6-14 14-14h40c8 0 14 6 14 14v24c0 19-15 34-34 34h-2c-18 0-32-15-32-33v-25Z" fill="#d3e7db" fill-opacity=".64" stroke="#fffef1" stroke-width="2"/>
                  <path d="M277 250h35m-35 9h35" stroke="#fffef1" stroke-opacity=".8" stroke-width="2" stroke-linecap="round"/>
                </g>
                <path d="M340 249c45 12 67 9 99-2" stroke="#8aa893" stroke-width="1.5" stroke-dasharray="4 7"/>
                <circle class="float-delay" cx="451" cy="243" r="13" fill="#e68162"/><circle cx="500" cy="280" r="8" fill="#e1ad54"/><circle class="float-slow" cx="409" cy="290" r="6" fill="#7b91c2"/><circle cx="472" cy="323" r="4" fill="#f4cf77"/><circle cx="534" cy="348" r="3" fill="#e68162"/><circle cx="432" cy="352" r="2.5" fill="#d4e66d"/>
                <path d="M442 229c13-14 25-22 38-26" stroke="#52776a" stroke-width="1.2" stroke-dasharray="3 5"/><path d="M500 269c13-13 23-16 35-17" stroke="#52776a" stroke-width="1.2" stroke-dasharray="3 5"/>
                <path d="M96 245c20-24 40-34 60-39m-2-12 2 12-12-1" stroke="#729984" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <rect x="39" y="199" width="109" height="34" rx="17" fill="#f8faef" fill-opacity=".88"/><text x="57" y="221" fill="#42695a" font-family="Arial,sans-serif" font-size="11" font-weight="700" letter-spacing="1.3">SUN + TIME</text>
                <rect x="420" y="160" width="131" height="34" rx="17" fill="#f8faef" fill-opacity=".88"/><text x="438" y="182" fill="#42695a" font-family="Arial,sans-serif" font-size="11" font-weight="700" letter-spacing="1.3">SMALLER PIECES</text>
                <text x="40" y="505" fill="#eff8e8" fill-opacity=".92" font-family="Arial,sans-serif" font-size="12" font-weight="700" letter-spacing="2">ADELAIDE · TORRENS TO GULF ST VINCENT</text>
              </svg>
              <div class="absolute bottom-5 left-5 rounded-2xl border border-white/70 bg-white/75 px-4 py-3 backdrop-blur-sm sm:bottom-7 sm:left-7">
                <p class="text-[9px] font-bold uppercase tracking-[0.16em] text-[#63816f]">The starting point</p>
                <p class="mt-1 text-xs font-semibold text-ink">One everyday bottle</p>
              </div>
            </div>
            <div class="absolute -bottom-5 right-5 rounded-2xl bg-[#d4e66d] px-4 py-3 shadow-[0_12px_28px_rgba(23,58,53,.12)] sm:-bottom-6 sm:right-9 sm:px-5 sm:py-4">
              <p class="font-mono text-[9px] font-bold uppercase tracking-[0.16em] text-[#456440]">The size shift</p>
              <p class="display-type mt-0.5 text-2xl text-[#173a35]">∞ small</p>
            </div>
          </div>
        </div>
        <div class="section-shell mt-12 flex items-center justify-between border-t border-[#dfe8db] pt-4 text-[10px] font-bold uppercase tracking-[0.14em] text-[#809087] sm:mt-16">
          <span>A local lens on a global issue</span><span class="hidden sm:inline">Scroll to explore <span aria-hidden="true">↓</span></span>
        </div>
      </section>

      <section id="journey" class="bg-white py-16 sm:py-20 lg:py-24">
        <div class="section-shell">
          <div class="mb-8 flex flex-wrap items-end justify-between gap-4 sm:mb-10">
            <div class="max-w-[580px]">
              <p class="text-xs font-bold uppercase tracking-[0.18em] text-[#658a6b]">01 / The size shift</p>
              <h2 class="display-type mt-3 text-4xl leading-[1.03] text-ink sm:text-5xl">One material.<br class="sm:hidden"> Four very different scales.</h2>
            </div>
            <p class="max-w-[335px] text-xs leading-6 text-[#718178]">Plastic fragments can get smaller as they weather. Choose a stage to see the scale and where we might find it.</p>
          </div>
          <JourneyStages />
          <p class="mt-4 text-[10px] leading-5 text-[#84928a]">Microplastic commonly means a plastic particle smaller than 5 mm. Boundaries for meso and nano size categories can vary between sources and fields.</p>
        </div>
      </section>

      <section id="science" class="bg-[#f1f5ec] py-16 sm:py-20 lg:py-24">
        <div class="section-shell">
          <div class="mb-8 grid gap-4 sm:mb-10 sm:grid-cols-[1fr_0.7fr] sm:items-end">
            <div>
              <p class="text-xs font-bold uppercase tracking-[0.18em] text-[#658a6b]">02 / What sunlight does</p>
              <h2 class="display-type mt-3 text-4xl leading-[1.04] text-ink sm:text-5xl">A closer look at<br>the chemistry.</h2>
            </div>
            <p class="max-w-[380px] text-xs leading-6 text-[#718178]">Plastic is made of long molecular chains. Sunlight, oxygen and movement from weather all play a part in changing them.</p>
          </div>
          <div class="grid items-stretch gap-5 lg:grid-cols-[1fr_0.86fr]">
            <ScienceDiagram />
            <div class="flex flex-col justify-between rounded-[28px] bg-[#173a35] p-6 text-white sm:p-8">
              <div>
                <span class="inline-flex items-center gap-2 rounded-full border border-white/15 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.15em] text-[#c7dfd1]"><span class="size-1.5 rounded-full bg-[#d4e66d]"></span> The science in 3 ideas</span>
                <ol class="mt-6 space-y-5">
                  <li class="flex gap-3"><span class="font-mono text-xs font-bold text-[#d4e66d]">01</span><p class="text-sm leading-6 text-[#e0ebe4]"><strong class="text-white">UV energy</strong> reaches plastic left in sunlight and can start chemical changes at its surface.</p></li>
                  <li class="flex gap-3"><span class="font-mono text-xs font-bold text-[#d4e66d]">02</span><p class="text-sm leading-6 text-[#e0ebe4]">In photo-oxidation, oxygen helps reactions that weaken and shorten long <strong class="text-white">carbon chains</strong>.</p></li>
                  <li class="flex gap-3"><span class="font-mono text-xs font-bold text-[#d4e66d]">03</span><p class="text-sm leading-6 text-[#e0ebe4]">The brittle surface cracks. <strong class="text-white">Wind, waves and rubbing</strong> can turn it into smaller pieces.</p></li>
                </ol>
              </div>
              <div class="mt-7 rounded-2xl bg-white/[0.08] p-4">
                <p class="text-[10px] font-bold uppercase tracking-[0.14em] text-[#d4e66d]">Remember</p>
                <p class="mt-1.5 text-xs leading-5 text-[#d4e1da]">Smaller does not mean gone. Plastic may break into fragments without fully decomposing.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="model" class="bg-white py-16 sm:py-20 lg:py-24">
        <div class="section-shell">
          <div class="mb-8 max-w-[650px] sm:mb-10">
            <p class="text-xs font-bold uppercase tracking-[0.18em] text-[#658a6b]">03 / Try it yourself</p>
            <h2 class="display-type mt-3 text-4xl leading-[1.04] text-ink sm:text-5xl">Make the journey<br class="sm:hidden"> visible.</h2>
            <p class="mt-4 max-w-[540px] text-sm leading-6 text-[#718178]">Build a bottle cascade to show how rain can move litter downhill. Then trace the change from one large object to tiny fragments.</p>
          </div>
          <ModelGuide />
        </div>
      </section>

      <section class="bg-[#dcecdf] py-14 sm:py-16">
        <div class="section-shell grid gap-8 sm:grid-cols-[0.78fr_1.22fr] sm:items-center">
          <div>
            <p class="text-xs font-bold uppercase tracking-[0.17em] text-[#528064]">An Adelaide action</p>
            <h2 class="display-type mt-2 max-w-[380px] text-3xl leading-tight text-ink sm:text-4xl">A small choice can stop a long journey.</h2>
          </div>
          <div class="grid gap-3 sm:grid-cols-3">
            <div class="rounded-2xl border border-[#bcd4c3] bg-white/55 p-4"><span class="font-mono text-[10px] font-bold text-[#568267]">01</span><p class="mt-2 text-xs font-semibold leading-5 text-[#315a47]">Use a refillable bottle when you can.</p></div>
            <div class="rounded-2xl border border-[#bcd4c3] bg-white/55 p-4"><span class="font-mono text-[10px] font-bold text-[#568267]">02</span><p class="mt-2 text-xs font-semibold leading-5 text-[#315a47]">Put rubbish in a bin with the lid closed.</p></div>
            <div class="rounded-2xl border border-[#bcd4c3] bg-white/55 p-4"><span class="font-mono text-[10px] font-bold text-[#568267]">03</span><p class="mt-2 text-xs font-semibold leading-5 text-[#315a47]">Join a local clean-up and pick up safely.</p></div>
          </div>
        </div>
      </section>
    </main>

    <footer class="bg-[#173a35] py-8 text-white">
      <div class="section-shell flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div class="flex items-center gap-3">
          <img src="/logo.svg" alt="" class="size-9 rounded-xl" width="36" height="36">
          <div><p class="text-xs font-bold tracking-wide">THE JOURNEY OF MICROPLASTICS</p><p class="mt-1 text-[10px] text-[#b3cabf]">An IB PYP Year 5 exhibition · Adelaide, South Australia</p></div>
        </div>
        <details class="max-w-[465px] text-[10px] leading-5 text-[#c2d4cc]">
          <summary class="cursor-pointer font-bold text-white">Sources & further reading</summary>
          <ul class="mt-2 space-y-1.5">
            <li><a class="underline decoration-white/30 underline-offset-2 hover:text-[#d4e66d]" href="https://oceanservice.noaa.gov/facts/degrade.html" target="_blank" rel="noreferrer">NOAA Ocean Service · How marine debris degrades</a></li>
            <li><a class="underline decoration-white/30 underline-offset-2 hover:text-[#d4e66d]" href="https://repository.library.noaa.gov/view/noaa/41264/noaa_41264_DS1.pdf" target="_blank" rel="noreferrer">NOAA · Citizen's Guide to Marine Debris (degradation estimates)</a></li>
            <li><a class="underline decoration-white/30 underline-offset-2 hover:text-[#d4e66d]" href="https://marinedebris.noaa.gov/do-plastics-go-away-when-theyre-ocean-or-great-lakes-0" target="_blank" rel="noreferrer">NOAA Marine Debris Program · Do plastics go away?</a></li>
            <li><a class="underline decoration-white/30 underline-offset-2 hover:text-[#d4e66d]" href="https://marinedebris.noaa.gov/discover-marine-debris/mystery-how-long-until-its-gone" target="_blank" rel="noreferrer">NOAA Marine Debris Program · The Mystery of How Long Until It’s Gone</a></li>
            <li><a class="underline decoration-white/30 underline-offset-2 hover:text-[#d4e66d]" href="https://repository.library.noaa.gov/view/noaa/68181/noaa_68181_DS1.pdf" target="_blank" rel="noreferrer">UNEP Environmental Effects Assessment Panel · Plastics and UV radiation (2023)</a></li>
            <li><a class="underline decoration-white/30 underline-offset-2 hover:text-[#d4e66d]" href="https://doi.org/10.1016/j.polymdegradstab.2020.109364" target="_blank" rel="noreferrer">Gewert et al. · Weathering of polyolefins, Polymer Degradation and Stability (2020)</a></li>
          </ul>
        </details>
        <button type="button" class="self-start text-[10px] font-semibold text-[#c2d4cc] underline decoration-white/30 underline-offset-2 hover:text-[#d4e66d] sm:ml-auto sm:self-end" @click="cookieNoticeOpen = true">Cookie notice</button>
      </div>
      <div class="section-shell mt-6 flex flex-col gap-2 border-t border-white/10 pt-4 text-[9px] font-medium tracking-[0.1em] text-[#8fa99c] sm:flex-row sm:items-center sm:justify-between"><span>LEARN · NOTICE · CARE</span><span>Created by Andrew Miao from SynQuara Digital</span></div>
    </footer>

    <CookieConsent v-if="cookieNoticeOpen" @acknowledge="acknowledgeCookieNotice" />
  </div>
</template>
