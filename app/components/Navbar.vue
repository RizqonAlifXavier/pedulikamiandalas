<template>
  <nav class="navbar" :class="{ 'navbar--scrolled': isSolid, 'navbar--open': isMobileOpen }">
    <div class="container navbar__inner">
      <!-- Logo -->
      <a href="#" class="navbar__logo" id="navbar-logo">
        <img src="/logopeduli.png" alt="Logo PeduliKami Andalas" class="navbar__logo-img" />
        <div class="navbar__logo-text">
          <span class="navbar__logo-name">PeduliKami Andalas</span>
          <span class="navbar__logo-tagline">Yayasan Kemanusiaan</span>
        </div>
      </a>

      <!-- Desktop Navigation -->
      <ul class="navbar__menu" id="navbar-menu">
        <li><NuxtLink to="/#beranda" class="navbar__link" @click="closeMobile">Beranda</NuxtLink></li>
        <li><NuxtLink to="/#tentang" class="navbar__link" @click="closeMobile">Tentang Kami</NuxtLink></li>
        <li><NuxtLink to="/#program" class="navbar__link" @click="closeMobile">Program</NuxtLink></li>
        <li><NuxtLink to="/#dampak" class="navbar__link" @click="closeMobile">Dampak</NuxtLink></li>
        <li><NuxtLink to="/#galeri" class="navbar__link" @click="closeMobile">Galeri</NuxtLink></li>
        <li><NuxtLink to="/#kontak" class="navbar__link" @click="closeMobile">Kontak</NuxtLink></li>
      </ul>

      <!-- CTA Button -->
      <NuxtLink to="/#donasi" class="btn btn-primary navbar__cta" id="navbar-donate-btn">
        <i class="fas fa-hand-holding-heart"></i>
        Donasi Sekarang
      </NuxtLink>

      <!-- Mobile Toggle -->
      <button class="navbar__toggle" id="navbar-toggle" @click="toggleMobile" :aria-expanded="isMobileOpen" aria-label="Toggle navigation">
        <span class="navbar__toggle-bar"></span>
        <span class="navbar__toggle-bar"></span>
        <span class="navbar__toggle-bar"></span>
      </button>
    </div>

    <!-- Mobile Menu -->
    <div class="navbar__mobile" :class="{ 'navbar__mobile--open': isMobileOpen }">
      <ul class="navbar__mobile-menu">
        <li><NuxtLink to="/#beranda" class="navbar__mobile-link" @click="closeMobile">Beranda</NuxtLink></li>
        <li><NuxtLink to="/#tentang" class="navbar__mobile-link" @click="closeMobile">Tentang Kami</NuxtLink></li>
        <li><NuxtLink to="/#program" class="navbar__mobile-link" @click="closeMobile">Program</NuxtLink></li>
        <li><NuxtLink to="/#dampak" class="navbar__mobile-link" @click="closeMobile">Dampak</NuxtLink></li>
        <li><NuxtLink to="/#galeri" class="navbar__mobile-link" @click="closeMobile">Galeri</NuxtLink></li>
        <li><NuxtLink to="/#kontak" class="navbar__mobile-link" @click="closeMobile">Kontak</NuxtLink></li>
      </ul>
      <NuxtLink to="/#donasi" class="btn btn-primary navbar__mobile-cta" @click="closeMobile">
        <i class="fas fa-hand-holding-heart"></i>
        Donasi Sekarang
      </NuxtLink>
    </div>
  </nav>
</template>

<script setup>
const route = useRoute()
const isScrolled = ref(false)
const isMobileOpen = ref(false)

const isSolid = computed(() => isScrolled.value || route.path !== '/')

const toggleMobile = () => {
  isMobileOpen.value = !isMobileOpen.value
  document.body.style.overflow = isMobileOpen.value ? 'hidden' : ''
}

const closeMobile = () => {
  isMobileOpen.value = false
  document.body.style.overflow = ''
}

onMounted(() => {
  window.addEventListener('scroll', () => {
    isScrolled.value = window.scrollY > 50
  })
})
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: var(--space-4) 0;
  transition: all var(--transition-base);
}

.navbar--scrolled {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.08);
  padding: var(--space-3) 0;
}

.navbar__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.navbar__logo {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  z-index: 1001;
}

.navbar__logo-img {
  width: 48px;
  height: 48px;
  object-fit: contain;
  border-radius: 50%;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.navbar__logo-text {
  display: flex;
  flex-direction: column;
}

.navbar__logo-name {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: var(--text-xl);
  color: var(--color-gray-900);
  line-height: 1.2;
}

.navbar:not(.navbar--scrolled) .navbar__logo-name {
  color: var(--color-white);
}

.navbar__logo-tagline {
  font-size: var(--text-xs);
  color: var(--color-gray-400);
  font-weight: 500;
  letter-spacing: 0.05em;
}

.navbar:not(.navbar--scrolled) .navbar__logo-tagline {
  color: rgba(255, 255, 255, 0.7);
}

.navbar__menu {
  display: flex;
  align-items: center;
  gap: var(--space-1);
}

.navbar__link {
  padding: var(--space-2) var(--space-4);
  font-size: var(--text-sm);
  font-weight: 500;
  color: var(--color-gray-600);
  border-radius: var(--radius-lg);
  transition: all var(--transition-fast);
}

.navbar:not(.navbar--scrolled) .navbar__link {
  color: rgba(255, 255, 255, 0.85);
}

.navbar__link:hover {
  color: var(--color-primary);
  background: var(--color-primary-50);
}

.navbar:not(.navbar--scrolled) .navbar__link:hover {
  color: var(--color-white);
  background: rgba(255, 255, 255, 0.15);
}

.navbar__cta {
  padding: var(--space-3) var(--space-6);
  font-size: var(--text-sm);
}

.navbar__toggle {
  display: none;
  flex-direction: column;
  gap: 5px;
  z-index: 1001;
  padding: var(--space-2);
}

.navbar__toggle-bar {
  width: 24px;
  height: 2px;
  background: var(--color-gray-900);
  border-radius: 2px;
  transition: all var(--transition-base);
}

.navbar:not(.navbar--scrolled) .navbar__toggle-bar {
  background: var(--color-white);
}

.navbar--open .navbar__toggle-bar:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}

.navbar--open .navbar__toggle-bar:nth-child(2) {
  opacity: 0;
}

.navbar--open .navbar__toggle-bar:nth-child(3) {
  transform: rotate(-45deg) translate(5px, -5px);
}

/* Mobile Menu */
.navbar__mobile {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(26, 26, 46, 0.98);
  backdrop-filter: blur(20px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 0;
  visibility: hidden;
  transition: all var(--transition-base);
  z-index: 999;
}

.navbar__mobile--open {
  opacity: 1;
  visibility: visible;
}

.navbar__mobile-menu {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-4);
  margin-bottom: var(--space-8);
}

.navbar__mobile-link {
  font-size: var(--text-2xl);
  font-weight: 600;
  color: rgba(255, 255, 255, 0.8);
  transition: all var(--transition-fast);
}

.navbar__mobile-link:hover {
  color: var(--color-primary);
}

.navbar__mobile-cta {
  padding: var(--space-4) var(--space-10);
  font-size: var(--text-lg);
}

@media (max-width: 1024px) {
  .navbar__menu,
  .navbar__cta {
    display: none;
  }

  .navbar__toggle {
    display: flex;
  }
}
</style>
