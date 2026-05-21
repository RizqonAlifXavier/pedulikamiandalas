<template>
  <section id="tentang" class="about section">
    <div class="container">
      <div class="about__grid">
        <!-- Image Column -->
        <div class="about__images">
          <div class="about__image-main">
            <img
              src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&q=80"
              alt="Relawan membantu masyarakat"
              loading="lazy"
            />
            <div class="about__image-badge">
              <span class="about__image-badge-number">12+</span>
              <span class="about__image-badge-text">Tahun Pengalaman</span>
            </div>
          </div>
          <div class="about__image-secondary">
            <img
              src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=600&q=80"
              alt="Kegiatan sosial"
              loading="lazy"
            />
          </div>
          <!-- Decorative elements -->
          <div class="about__dots"></div>
        </div>

        <!-- Content Column -->
        <div class="about__content">
          <div class="section-badge">
            <i class="fas fa-info-circle"></i>
            Tentang Kami
          </div>
          <h2 class="section-title" style="text-align: left;">
            Menyebarkan Kebaikan<br/>
            untuk <span>Indonesia</span>
          </h2>
          <p class="about__text">
            PeduliKami Andalas didirikan pada tahun 2013 dengan satu tekad: menjadi
            jembatan antara mereka yang ingin berbagi dan mereka yang membutuhkan.
            Kami percaya bahwa setiap orang berhak mendapatkan kehidupan yang layak.
          </p>
          <p class="about__text">
            Selama lebih dari satu dekade, kami telah hadir di berbagai pelosok
            Indonesia — dari pedalaman Papua hingga pesisir Aceh — memberikan
            bantuan kemanusiaan, pendidikan, dan pemberdayaan masyarakat.
          </p>

          <!-- Values -->
          <div class="about__values">
            <div class="about__value">
              <div class="about__value-icon">
                <i class="fas fa-heart"></i>
              </div>
              <div>
                <h4 class="about__value-title">Kepedulian Tanpa Batas</h4>
                <p class="about__value-desc">Melayani siapa saja tanpa membedakan suku, agama, dan ras.</p>
              </div>
            </div>
            <div class="about__value">
              <div class="about__value-icon about__value-icon--green">
                <i class="fas fa-shield-halved"></i>
              </div>
              <div>
                <h4 class="about__value-title">Transparansi &amp; Akuntabilitas</h4>
                <p class="about__value-desc">Setiap donasi dilaporkan secara terbuka dan dapat dipertanggungjawabkan.</p>
              </div>
            </div>
            <div class="about__value">
              <div class="about__value-icon about__value-icon--amber">
                <i class="fas fa-users"></i>
              </div>
              <div>
                <h4 class="about__value-title">Kolaborasi Bermakna</h4>
                <p class="about__value-desc">Bekerja sama dengan komunitas lokal untuk dampak yang berkelanjutan.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about {
  background: var(--color-gray-50);
  position: relative;
  overflow: hidden;
}

.about::before {
  content: '';
  position: absolute;
  top: -200px;
  right: -200px;
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(232, 93, 58, 0.05), transparent 70%);
  border-radius: 50%;
}

.about__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-16);
  align-items: center;
}

.about__images {
  position: relative;
}

.about__image-main {
  position: relative;
  border-radius: var(--radius-2xl);
  overflow: hidden;
  box-shadow: var(--shadow-2xl);
}

.about__image-main img {
  width: 100%;
  height: 450px;
  object-fit: cover;
  transition: transform var(--transition-slow);
}

.about__image-main:hover img {
  transform: scale(1.03);
}

.about__image-badge {
  position: absolute;
  bottom: var(--space-6);
  right: var(--space-6);
  background: linear-gradient(135deg, var(--color-primary), var(--color-accent));
  color: white;
  padding: var(--space-4) var(--space-6);
  border-radius: var(--radius-xl);
  text-align: center;
  box-shadow: var(--shadow-xl);
}

.about__image-badge-number {
  display: block;
  font-family: var(--font-display);
  font-size: var(--text-3xl);
  font-weight: 700;
  line-height: 1;
}

.about__image-badge-text {
  font-size: var(--text-xs);
  font-weight: 500;
  opacity: 0.9;
}

.about__image-secondary {
  position: absolute;
  bottom: -30px;
  left: -30px;
  width: 200px;
  height: 200px;
  border-radius: var(--radius-2xl);
  overflow: hidden;
  border: 5px solid var(--color-white);
  box-shadow: var(--shadow-xl);
}

.about__image-secondary img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.about__dots {
  position: absolute;
  top: -20px;
  left: -20px;
  width: 100px;
  height: 100px;
  background-image: radial-gradient(circle, var(--color-primary) 2px, transparent 2px);
  background-size: 15px 15px;
  opacity: 0.3;
}

.about__content {
  padding-left: var(--space-8);
}

.about__text {
  font-size: var(--text-lg);
  color: var(--color-gray-600);
  line-height: 1.8;
  margin-bottom: var(--space-4);
}

.about__values {
  display: flex;
  flex-direction: column;
  gap: var(--space-5);
  margin-top: var(--space-8);
}

.about__value {
  display: flex;
  align-items: flex-start;
  gap: var(--space-4);
  padding: var(--space-4);
  border-radius: var(--radius-xl);
  transition: all var(--transition-base);
}

.about__value:hover {
  background: var(--color-white);
  box-shadow: var(--shadow-md);
  transform: translateX(5px);
}

.about__value-icon {
  width: 48px;
  height: 48px;
  background: var(--color-primary-50);
  color: var(--color-primary);
  border-radius: var(--radius-lg);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--text-xl);
  flex-shrink: 0;
}

.about__value-icon--green {
  background: rgba(27, 107, 90, 0.1);
  color: var(--color-secondary);
}

.about__value-icon--amber {
  background: rgba(244, 162, 97, 0.15);
  color: var(--color-accent-dark);
}

.about__value-title {
  font-weight: 700;
  font-size: var(--text-base);
  color: var(--color-gray-900);
  margin-bottom: var(--space-1);
}

.about__value-desc {
  font-size: var(--text-sm);
  color: var(--color-gray-500);
  line-height: 1.6;
}

@media (max-width: 1024px) {
  .about__grid {
    grid-template-columns: 1fr;
    gap: var(--space-12);
  }

  .about__content {
    padding-left: 0;
  }

  .about__image-main img {
    height: 350px;
  }
}

@media (max-width: 768px) {
  .about__image-secondary {
    width: 150px;
    height: 150px;
    bottom: -20px;
    left: -10px;
  }
}
</style>
