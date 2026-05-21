<template>
  <section id="dampak" class="impact">
    <div class="impact__bg">
      <img
        src="https://images.unsplash.com/photo-1504159506876-f8338247a14a?w=1920&q=80"
        alt="Pemandangan Indonesia"
        loading="lazy"
      />
      <div class="impact__overlay"></div>
    </div>

    <div class="container impact__content">
      <div class="section-header">
        <div class="section-badge" style="background: rgba(255,255,255,0.15); color: rgba(255,255,255,0.9);">
          <i class="fas fa-chart-line"></i>
          Dampak Kami
        </div>
        <h2 class="section-title" style="color: white;">
          Perubahan Nyata<br/><span>yang Kami Ciptakan</span>
        </h2>
        <p class="section-subtitle" style="color: rgba(255,255,255,0.7);">
          Setiap donasi Anda telah menghasilkan dampak yang nyata dan terukur bagi kehidupan ribuan orang.
        </p>
      </div>

      <div class="impact__grid">
        <div class="impact__card" id="impact-lives">
          <div class="impact__card-icon">
            <i class="fas fa-people-group"></i>
          </div>
          <div class="impact__card-number" ref="counter1">15.847</div>
          <div class="impact__card-label">Jiwa Terbantu</div>
          <div class="impact__card-bar">
            <div class="impact__card-bar-fill" style="width: 85%;"></div>
          </div>
        </div>

        <div class="impact__card" id="impact-programs">
          <div class="impact__card-icon impact__card-icon--green">
            <i class="fas fa-clipboard-list"></i>
          </div>
          <div class="impact__card-number">124</div>
          <div class="impact__card-label">Program Terlaksana</div>
          <div class="impact__card-bar">
            <div class="impact__card-bar-fill impact__card-bar-fill--green" style="width: 72%;"></div>
          </div>
        </div>

        <div class="impact__card" id="impact-volunteers">
          <div class="impact__card-icon impact__card-icon--amber">
            <i class="fas fa-hand-fist"></i>
          </div>
          <div class="impact__card-number">3.200+</div>
          <div class="impact__card-label">Relawan Aktif</div>
          <div class="impact__card-bar">
            <div class="impact__card-bar-fill impact__card-bar-fill--amber" style="width: 68%;"></div>
          </div>
        </div>

        <div class="impact__card" id="impact-provinces">
          <div class="impact__card-icon impact__card-icon--blue">
            <i class="fas fa-map-location-dot"></i>
          </div>
          <div class="impact__card-number">34</div>
          <div class="impact__card-label">Provinsi Terjangkau</div>
          <div class="impact__card-bar">
            <div class="impact__card-bar-fill impact__card-bar-fill--blue" style="width: 100%;"></div>
          </div>
        </div>

        <div class="impact__card" id="impact-donors">
          <div class="impact__card-icon">
            <i class="fas fa-heart-circle-check"></i>
          </div>
          <div class="impact__card-number">25.000+</div>
          <div class="impact__card-label">Donatur Terdaftar</div>
          <div class="impact__card-bar">
            <div class="impact__card-bar-fill" style="width: 90%;"></div>
          </div>
        </div>

        <div class="impact__card" id="impact-funds">
          <div class="impact__card-icon impact__card-icon--green">
            <i class="fas fa-coins"></i>
          </div>
          <div class="impact__card-number">Rp 12,5M</div>
          <div class="impact__card-label">Dana Tersalurkan</div>
          <div class="impact__card-bar">
            <div class="impact__card-bar-fill impact__card-bar-fill--green" style="width: 78%;"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.impact {
  position: relative;
  padding: var(--space-24) 0;
  overflow: hidden;
}

.impact__bg {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.impact__bg img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.impact__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    135deg,
    rgba(26, 26, 46, 0.92) 0%,
    rgba(15, 52, 96, 0.88) 50%,
    rgba(27, 107, 90, 0.85) 100%
  );
}

.impact__content {
  position: relative;
  z-index: 1;
}

.impact__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-6);
}

.impact__card {
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: var(--radius-2xl);
  padding: var(--space-8);
  text-align: center;
  transition: all var(--transition-base);
}

.impact__card:hover {
  background: rgba(255, 255, 255, 0.14);
  transform: translateY(-5px);
  border-color: rgba(255, 255, 255, 0.25);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
}

.impact__card-icon {
  width: 60px;
  height: 60px;
  background: rgba(232, 93, 58, 0.2);
  color: var(--color-primary-light);
  border-radius: var(--radius-xl);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--text-2xl);
  margin: 0 auto var(--space-5);
}

.impact__card-icon--green {
  background: rgba(42, 157, 143, 0.2);
  color: var(--color-secondary-light);
}

.impact__card-icon--amber {
  background: rgba(244, 162, 97, 0.2);
  color: var(--color-accent);
}

.impact__card-icon--blue {
  background: rgba(90, 200, 250, 0.2);
  color: var(--color-info);
}

.impact__card-number {
  font-family: var(--font-display);
  font-size: var(--text-4xl);
  font-weight: 700;
  color: var(--color-white);
  margin-bottom: var(--space-2);
  line-height: 1;
}

.impact__card-label {
  font-size: var(--text-sm);
  color: rgba(255, 255, 255, 0.6);
  font-weight: 500;
  margin-bottom: var(--space-5);
}

.impact__card-bar {
  width: 100%;
  height: 4px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: var(--radius-full);
  overflow: hidden;
}

.impact__card-bar-fill {
  height: 100%;
  background: linear-gradient(90deg, var(--color-primary), var(--color-primary-light));
  border-radius: var(--radius-full);
  transition: width 1.5s ease;
}

.impact__card-bar-fill--green {
  background: linear-gradient(90deg, var(--color-secondary), var(--color-secondary-light));
}

.impact__card-bar-fill--amber {
  background: linear-gradient(90deg, var(--color-accent-dark), var(--color-accent));
}

.impact__card-bar-fill--blue {
  background: linear-gradient(90deg, #0091D5, var(--color-info));
}

@media (max-width: 1024px) {
  .impact__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .impact__grid {
    grid-template-columns: repeat(2, 1fr);
    gap: var(--space-4);
  }

  .impact__card {
    padding: var(--space-5);
  }

  .impact__card-number {
    font-size: var(--text-3xl);
  }
}

@media (max-width: 480px) {
  .impact__grid {
    grid-template-columns: 1fr;
  }
}
</style>
