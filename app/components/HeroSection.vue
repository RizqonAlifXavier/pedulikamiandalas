<template>
  <section id="beranda" class="hero">
    <!-- Background Image -->
    <div class="hero__bg">
      <img
        src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1920&q=80"
        alt="Anak-anak tersenyum bahagia"
        class="hero__bg-img"
      />
      <div class="hero__overlay"></div>
    </div>

    <!-- Floating Decorative Elements -->
    <div class="hero__decor hero__decor--1"></div>
    <div class="hero__decor hero__decor--2"></div>
    <div class="hero__decor hero__decor--3"></div>

    <div class="container hero__content">
      <div class="hero__text">
        <div class="hero__badge animate-fade-up">
          <i class="fas fa-hands-holding-child"></i>
          Yayasan Kemanusiaan Indonesia
        </div>

        <h1 class="hero__title animate-fade-up delay-1">
          Bersama Kita
          <span class="hero__title-accent">Wujudkan</span>
          Harapan untuk
          <span class="hero__title-highlight">Sesama</span>
        </h1>

        <p class="hero__subtitle animate-fade-up delay-2">
          PeduliKami Andalas hadir sebagai jembatan kebaikan, menyalurkan bantuan kemanusiaan
          untuk saudara-saudara kita yang membutuhkan di seluruh pelosok Indonesia.
        </p>

        <div class="hero__actions animate-fade-up delay-3">
          <a href="#donasi" class="btn btn-primary btn-lg" id="hero-donate-btn">
            <i class="fas fa-hand-holding-heart"></i>
            Donasi Sekarang
          </a>
          <a href="#tentang" class="btn btn-secondary btn-lg" id="hero-learn-btn">
            <i class="fas fa-play-circle"></i>
            Pelajari Lebih Lanjut
          </a>
        </div>

        <!-- Quick Stats -->
        <div class="hero__stats animate-fade-up delay-4">
          <div class="hero__stat">
            <div class="hero__stat-number">15K+</div>
            <div class="hero__stat-label">Jiwa Terbantu</div>
          </div>
          <div class="hero__stat-divider"></div>
          <div class="hero__stat">
            <div class="hero__stat-number">120+</div>
            <div class="hero__stat-label">Program Aktif</div>
          </div>
          <div class="hero__stat-divider"></div>
          <div class="hero__stat">
            <div class="hero__stat-number">34</div>
            <div class="hero__stat-label">Provinsi</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Scroll Indicator -->
    <div class="hero__scroll">
      <div class="hero__scroll-mouse">
        <div class="hero__scroll-wheel"></div>
      </div>
      <span>Gulir ke bawah</span>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  overflow: hidden;
}

.hero__bg {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.hero__bg-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.hero__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    135deg,
    rgba(26, 26, 46, 0.85) 0%,
    rgba(15, 52, 96, 0.75) 50%,
    rgba(27, 107, 90, 0.65) 100%
  );
}

/* Floating decorative orbs */
.hero__decor {
  position: absolute;
  border-radius: 50%;
  z-index: 1;
  animation: float 6s ease-in-out infinite;
}

.hero__decor--1 {
  width: 300px;
  height: 300px;
  background: radial-gradient(circle, rgba(232, 93, 58, 0.15), transparent 70%);
  top: 10%;
  right: -5%;
  animation-delay: 0s;
}

.hero__decor--2 {
  width: 200px;
  height: 200px;
  background: radial-gradient(circle, rgba(244, 162, 97, 0.12), transparent 70%);
  bottom: 20%;
  left: -3%;
  animation-delay: -2s;
}

.hero__decor--3 {
  width: 150px;
  height: 150px;
  background: radial-gradient(circle, rgba(42, 157, 143, 0.15), transparent 70%);
  top: 40%;
  right: 20%;
  animation-delay: -4s;
}

.hero__content {
  position: relative;
  z-index: 2;
  padding-top: 120px;
  padding-bottom: var(--space-16);
}

.hero__text {
  max-width: 720px;
}

.hero__badge {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-2) var(--space-5);
  background: rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: var(--radius-full);
  color: rgba(255, 255, 255, 0.9);
  font-size: var(--text-sm);
  font-weight: 500;
  margin-bottom: var(--space-6);
}

.hero__badge i {
  color: var(--color-accent);
}

.hero__title {
  font-family: var(--font-display);
  font-size: var(--text-7xl);
  font-weight: 700;
  color: var(--color-white);
  line-height: 1.1;
  margin-bottom: var(--space-6);
}

.hero__title-accent {
  color: var(--color-accent);
  display: block;
}

.hero__title-highlight {
  background: linear-gradient(135deg, var(--color-primary-light), var(--color-accent));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero__subtitle {
  font-size: var(--text-xl);
  color: rgba(255, 255, 255, 0.75);
  line-height: 1.8;
  margin-bottom: var(--space-10);
  max-width: 580px;
}

.hero__actions {
  display: flex;
  gap: var(--space-4);
  margin-bottom: var(--space-12);
  flex-wrap: wrap;
}

.hero__stats {
  display: flex;
  align-items: center;
  gap: var(--space-8);
  padding: var(--space-6) var(--space-8);
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(15px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: var(--radius-2xl);
  max-width: fit-content;
}

.hero__stat {
  text-align: center;
}

.hero__stat-number {
  font-family: var(--font-display);
  font-size: var(--text-3xl);
  font-weight: 700;
  color: var(--color-white);
  line-height: 1;
  margin-bottom: var(--space-1);
}

.hero__stat-label {
  font-size: var(--text-sm);
  color: rgba(255, 255, 255, 0.6);
  font-weight: 500;
}

.hero__stat-divider {
  width: 1px;
  height: 40px;
  background: rgba(255, 255, 255, 0.2);
}

/* Scroll Indicator */
.hero__scroll {
  position: absolute;
  bottom: var(--space-8);
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-2);
  z-index: 2;
  animation: pulse-slow 2s ease-in-out infinite;
}

.hero__scroll span {
  font-size: var(--text-xs);
  color: rgba(255, 255, 255, 0.5);
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.hero__scroll-mouse {
  width: 24px;
  height: 38px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 12px;
  display: flex;
  justify-content: center;
  padding-top: 6px;
}

.hero__scroll-wheel {
  width: 3px;
  height: 8px;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 3px;
  animation: scrollWheel 2s ease-in-out infinite;
}

@keyframes scrollWheel {
  0% { transform: translateY(0); opacity: 1; }
  100% { transform: translateY(12px); opacity: 0; }
}

@media (max-width: 1024px) {
  .hero__title {
    font-size: var(--text-5xl);
  }
}

@media (max-width: 768px) {
  .hero__title {
    font-size: var(--text-4xl);
  }

  .hero__subtitle {
    font-size: var(--text-lg);
  }

  .hero__stats {
    gap: var(--space-4);
    padding: var(--space-4) var(--space-5);
  }

  .hero__stat-number {
    font-size: var(--text-2xl);
  }

  .hero__actions {
    flex-direction: column;
    align-items: flex-start;
  }
}

@media (max-width: 480px) {
  .hero__title {
    font-size: var(--text-3xl);
  }

  .hero__stats {
    flex-direction: column;
    gap: var(--space-3);
  }

  .hero__stat-divider {
    width: 40px;
    height: 1px;
  }
}
</style>
