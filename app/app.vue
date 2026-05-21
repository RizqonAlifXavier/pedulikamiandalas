<template>
  <div id="app">
    <Navbar />
    <NuxtPage />
    <FooterSection />
  </div>
</template>

<script setup>
const route = useRoute()

// Redirect ke beranda setiap kali halaman di-refresh / load awal
if (route.path !== '/') {
  navigateTo('/')
}

useSeoMeta({
  title: 'PeduliKami Andalas - Yayasan Kemanusiaan Indonesia',
  ogTitle: 'PeduliKami Andalas - Yayasan Kemanusiaan Indonesia',
  description: 'Bersama membangun harapan untuk Indonesia yang lebih baik melalui program kemanusiaan, pendidikan, dan pemberdayaan masyarakat.',
  ogDescription: 'Bersama membangun harapan untuk Indonesia yang lebih baik.',
})
</script>

<style>
/* Global scrollbar styling */
::-webkit-scrollbar {
  width: 8px;
}
::-webkit-scrollbar-track {
  background: var(--color-gray-100);
}
::-webkit-scrollbar-thumb {
  background: var(--color-primary);
  border-radius: var(--radius-full);
}
::-webkit-scrollbar-thumb:hover {
  background: var(--color-primary-dark);
}
</style>
