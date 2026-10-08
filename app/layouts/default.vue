<script setup lang="ts">
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
  <div class="min-h-screen overflow-hidden bg-sand text-ink">
    <SiteHeader />
    <main>
      <slot />
    </main>
    <SiteFooter @open-cookie-notice="cookieNoticeOpen = true" />
    <CookieConsent v-if="cookieNoticeOpen" @acknowledge="acknowledgeCookieNotice" />
  </div>
</template>
