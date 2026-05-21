<template>
  <section id="donasi" class="cta">
    <div class="cta__bg">
      <div class="cta__bg-pattern"></div>
    </div>

    <div class="container cta__content">
      <div class="cta__grid">
        <!-- Left Content -->
        <div class="cta__text">
          <div class="section-badge" style="background: rgba(255,255,255,0.15); color: rgba(255,255,255,0.9);">
            <i class="fas fa-hand-holding-heart"></i>
            Mari Berdonasi
          </div>
          <h2 class="cta__title">
            Satu Langkah Kecilmu,<br/>
            <span>Sejuta Harapan</span> Bagi Mereka
          </h2>
          <p class="cta__subtitle">
            Setiap donasi yang Anda berikan, sekecil apapun, memiliki dampak besar
            bagi saudara-saudara kita yang membutuhkan. Bersama kita bisa membuat
            perubahan nyata.
          </p>

          <!-- Donation Options -->
          <div class="cta__amounts">
            <button
              v-for="amount in donationAmounts"
              :key="amount.value"
              class="cta__amount"
              :class="{ 'cta__amount--active': selectedAmount === amount.value }"
              @click="selectedAmount = amount.value"
            >
              {{ amount.label }}
            </button>
          </div>

          <div class="cta__actions">
            <NuxtLink :to="`/donasi?amount=${selectedAmount}`" class="btn btn-primary btn-lg cta__donate-btn" id="cta-donate-btn">
              <i class="fas fa-heart"></i>
              Donasi Rp {{ selectedAmount.toLocaleString('id-ID') }}
            </NuxtLink>
            <p class="cta__secure">
              <i class="fas fa-shield-halved"></i>
              Transaksi aman &amp; terenkripsi
            </p>
          </div>
        </div>

        <!-- Right - Image Card -->
        <div class="cta__visual">
          <div class="cta__card">
            <img
              src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&q=80"
              alt="Anak-anak bahagia"
              loading="lazy"
            />
            <div class="cta__card-content">
              <div class="cta__card-progress">
                <div class="cta__card-progress-bar">
                  <div class="cta__card-progress-fill"></div>
                </div>
                <div class="cta__card-progress-info">
                  <span><strong>Rp 8,5 Juta</strong> terkumpul</span>
                  <span>Target: Rp 15 Juta</span>
                </div>
              </div>
              <h4>Bantu Anak-anak Pedalaman Mendapat Pendidikan</h4>
              <p>127 donatur telah berkontribusi</p>
            </div>
          </div>

          <!-- Floating badge top -->
          <div class="cta__floating cta__floating--1 animate-float">
            <i class="fas fa-heart"></i>
            <span>+500 donatur hari ini</span>
          </div>
        </div>
      </div>

      <!-- 100% transparan badge - centered below grid -->
      <div class="cta__trust">
        <div class="cta__floating animate-float" style="animation-delay: -1.5s; position: relative;">
          <i class="fas fa-check-circle"></i>
          <span>100% transparan</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const selectedAmount = ref(100000)

const donationAmounts = [
  { label: 'Rp 50.000', value: 50000 },
  { label: 'Rp 100.000', value: 100000 },
  { label: 'Rp 250.000', value: 250000 },
  { label: 'Rp 500.000', value: 500000 },
  { label: 'Rp 1.000.000', value: 1000000 },
]
</script>

<style scoped>
.cta {
  position: relative;
  padding: var(--space-24) 0;
  background: linear-gradient(135deg, var(--color-dark) 0%, var(--color-dark-2) 50%, var(--color-dark-3) 100%);
  overflow: hidden;
}

.cta__bg-pattern {
  position: absolute;
  inset: 0;
  background-image:
    radial-gradient(circle at 20% 50%, rgba(232, 93, 58, 0.08) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(42, 157, 143, 0.08) 0%, transparent 50%),
    radial-gradient(circle at 60% 80%, rgba(244, 162, 97, 0.06) 0%, transparent 50%);
}

.cta__content {
  position: relative;
  z-index: 1;
}

.cta__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-16);
  align-items: center;
}

.cta__title {
  font-family: var(--font-display);
  font-size: var(--text-5xl);
  font-weight: 700;
  color: var(--color-white);
  line-height: 1.2;
  margin-bottom: var(--space-5);
}

.cta__title span {
  background: linear-gradient(135deg, var(--color-primary-light), var(--color-accent));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.cta__subtitle {
  font-size: var(--text-lg);
  color: rgba(255, 255, 255, 0.65);
  line-height: 1.8;
  margin-bottom: var(--space-8);
}

.cta__amounts {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-3);
  margin-bottom: var(--space-8);
}

.cta__amount {
  padding: var(--space-3) var(--space-5);
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: var(--radius-xl);
  color: rgba(255, 255, 255, 0.8);
  font-weight: 600;
  font-size: var(--text-sm);
  transition: all var(--transition-base);
}

.cta__amount:hover {
  background: rgba(255, 255, 255, 0.12);
  border-color: rgba(255, 255, 255, 0.3);
}

.cta__amount--active {
  background: linear-gradient(135deg, var(--color-primary), var(--color-primary-dark));
  border-color: var(--color-primary);
  color: white;
  box-shadow: 0 4px 15px rgba(232, 93, 58, 0.4);
}

.cta__actions {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  align-items: flex-start;
}

.cta__donate-btn {
  min-width: 280px;
  justify-content: center;
}

.cta__secure {
  font-size: var(--text-sm);
  color: rgba(255, 255, 255, 0.4);
  display: flex;
  align-items: center;
  gap: var(--space-2);
}

/* Visual / Card */
.cta__visual {
  position: relative;
}

.cta__card {
  background: var(--color-white);
  border-radius: var(--radius-2xl);
  overflow: hidden;
  box-shadow: var(--shadow-2xl);
}

.cta__card img {
  width: 100%;
  height: 280px;
  object-fit: cover;
}

.cta__card-content {
  padding: var(--space-6);
}

.cta__card-progress {
  margin-bottom: var(--space-4);
}

.cta__card-progress-bar {
  width: 100%;
  height: 8px;
  background: var(--color-gray-100);
  border-radius: var(--radius-full);
  overflow: hidden;
  margin-bottom: var(--space-2);
}

.cta__card-progress-fill {
  width: 57%;
  height: 100%;
  background: linear-gradient(90deg, var(--color-primary), var(--color-accent));
  border-radius: var(--radius-full);
  position: relative;
}

.cta__card-progress-fill::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
  background-size: 200% 100%;
  animation: shimmer 2s linear infinite;
}

.cta__card-progress-info {
  display: flex;
  justify-content: space-between;
  font-size: var(--text-sm);
  color: var(--color-gray-500);
}

.cta__card-progress-info strong {
  color: var(--color-primary);
}

.cta__card-content h4 {
  font-family: var(--font-display);
  font-size: var(--text-lg);
  font-weight: 700;
  color: var(--color-gray-900);
  margin-bottom: var(--space-2);
}

.cta__card-content p {
  font-size: var(--text-sm);
  color: var(--color-gray-400);
}

/* Floating badges */
.cta__floating {
  position: absolute;
  display: flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-3) var(--space-4);
  background: var(--color-white);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-lg);
  font-size: var(--text-sm);
  font-weight: 600;
  color: var(--color-gray-700);
}

.cta__floating i {
  color: var(--color-primary);
}

.cta__floating--1 {
  top: -10px;
  right: -10px;
}

.cta__trust {
  display: flex;
  justify-content: center;
  margin-top: var(--space-10);
}

.cta__trust .cta__floating i {
  color: var(--color-success);
}

@media (max-width: 1024px) {
  .cta__grid {
    grid-template-columns: 1fr;
    gap: var(--space-10);
  }

  .cta__title {
    font-size: var(--text-4xl);
  }

  .cta__floating--1 {
    right: 10px;
  }

  .cta__floating--2 {
    left: 10px;
  }
}

@media (max-width: 768px) {
  .cta__title {
    font-size: var(--text-3xl);
  }

  .cta__amounts {
    gap: var(--space-2);
  }

  .cta__amount {
    padding: var(--space-2) var(--space-4);
    font-size: var(--text-xs);
  }

  .cta__donate-btn {
    min-width: auto;
    width: 100%;
  }
}
</style>
