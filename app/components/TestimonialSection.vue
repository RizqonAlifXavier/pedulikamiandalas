<template>
  <section class="testimonials section">
    <div class="container">
      <div class="section-header">
        <div class="section-badge section-badge--green">
          <i class="fas fa-quote-left"></i>
          Testimoni
        </div>
        <h2 class="section-title">
          Kata Mereka tentang<br/><span>PeduliKami Andalas</span>
        </h2>
        <p class="section-subtitle">
          Cerita nyata dari mereka yang telah merasakan manfaat dari program kemanusiaan kami.
        </p>
      </div>

      <div class="testimonials__slider">
        <div class="testimonials__track" :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
          <div v-for="testimonial in testimonials" :key="testimonial.id" class="testimonials__slide">
            <div class="testimonials__card">
              <div class="testimonials__card-quote">
                <i class="fas fa-quote-left"></i>
              </div>
              <p class="testimonials__card-text">{{ testimonial.text }}</p>
              <div class="testimonials__card-author">
                <img :src="testimonial.avatar" :alt="testimonial.name" class="testimonials__card-avatar" />
                <div>
                  <h4 class="testimonials__card-name">{{ testimonial.name }}</h4>
                  <span class="testimonials__card-role">{{ testimonial.role }}</span>
                </div>
              </div>
              <div class="testimonials__card-stars">
                <i class="fas fa-star" v-for="n in 5" :key="n"></i>
              </div>
            </div>
          </div>
        </div>

        <!-- Navigation -->
        <div class="testimonials__nav">
          <button class="testimonials__nav-btn" @click="prevSlide" :disabled="currentSlide === 0">
            <i class="fas fa-arrow-left"></i>
          </button>
          <div class="testimonials__dots">
            <button
              v-for="(_, index) in totalSlides"
              :key="index"
              class="testimonials__dot"
              :class="{ 'testimonials__dot--active': currentSlide === index }"
              @click="currentSlide = index"
            ></button>
          </div>
          <button class="testimonials__nav-btn" @click="nextSlide" :disabled="currentSlide === totalSlides - 1">
            <i class="fas fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const currentSlide = ref(0)

const testimonials = [
  {
    id: 1,
    text: 'Berkat PeduliKami Andalas, anak-anak kami sekarang bisa bersekolah dengan layak. Sekolah yang dibangun sangat bagus dan guru-gurunya sangat berdedikasi. Terima kasih sudah peduli dengan masa depan anak-anak di pelosok.',
    name: 'Ibu Sartika',
    role: 'Penerima manfaat program pendidikan, Flores',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80',
  },
  {
    id: 2,
    text: 'Saat bencana gempa menimpa desa kami, PeduliKami Andalas adalah yang pertama datang memberikan bantuan. Mereka tidak hanya memberi makanan, tapi juga membantu kami membangun kembali rumah dan kehidupan kami.',
    name: 'Bapak Ahmad',
    role: 'Korban bencana gempa, Cianjur',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80',
  },
  {
    id: 3,
    text: 'Program posyandu keliling PeduliKami Andalas sangat membantu masyarakat kami yang jauh dari puskesmas. Anak-anak kami bisa mendapatkan imunisasi dan pemeriksaan kesehatan secara rutin tanpa harus pergi jauh.',
    name: 'Ibu Dewi',
    role: 'Ibu rumah tangga, Manggarai NTT',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&q=80',
  },
  {
    id: 4,
    text: 'Sebagai donatur rutin selama 3 tahun, saya sangat puas dengan transparansi PeduliKami Andalas. Setiap rupiah yang saya donasikan dilaporkan dengan jelas. Saya tahu persis ke mana uang saya pergi dan dampaknya nyata.',
    name: 'Rendra Pratama',
    role: 'Donatur rutin, Jakarta',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80',
  },
  {
    id: 5,
    text: 'Program pelatihan keterampilan dari PeduliKami Andalas mengubah hidup saya. Dulu saya pengangguran, sekarang saya punya usaha jahit sendiri dan bisa menghidupi keluarga saya. Terima kasih PeduliKami Andalas!',
    name: 'Nurul Hidayah',
    role: 'Pelaku usaha binaan, Surabaya',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&q=80',
  },
  {
    id: 6,
    text: 'Menjadi relawan PeduliKami Andalas adalah pengalaman terbaik dalam hidup saya. Melihat langsung bagaimana bantuan kita bisa mengubah hidup orang lain adalah perasaan yang tak ternilai harganya.',
    name: 'Dimas Arya',
    role: 'Relawan aktif, Bandung',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80',
  },
]

const totalSlides = computed(() => {
  if (typeof window !== 'undefined' && window.innerWidth < 768) return testimonials.length
  if (typeof window !== 'undefined' && window.innerWidth < 1024) return Math.ceil(testimonials.length / 2)
  return Math.ceil(testimonials.length / 3)
})

const prevSlide = () => {
  if (currentSlide.value > 0) currentSlide.value--
}

const nextSlide = () => {
  if (currentSlide.value < totalSlides.value - 1) currentSlide.value++
}
</script>

<style scoped>
.testimonials {
  background: var(--color-white);
  overflow: hidden;
}

.testimonials__slider {
  position: relative;
  overflow: hidden;
}

.testimonials__track {
  display: flex;
  transition: transform 0.5s cubic-bezier(0.25, 0.1, 0.25, 1);
}

.testimonials__slide {
  min-width: calc(100% / 3);
  padding: 0 var(--space-3);
}

.testimonials__card {
  background: var(--color-gray-50);
  border-radius: var(--radius-2xl);
  padding: var(--space-8);
  height: 100%;
  position: relative;
  border: 1px solid var(--color-gray-100);
  transition: all var(--transition-base);
}

.testimonials__card:hover {
  box-shadow: var(--shadow-lg);
  border-color: var(--color-primary-200);
  transform: translateY(-4px);
}

.testimonials__card-quote {
  color: var(--color-primary-200);
  font-size: var(--text-3xl);
  margin-bottom: var(--space-4);
}

.testimonials__card-text {
  font-size: var(--text-base);
  color: var(--color-gray-600);
  line-height: 1.8;
  margin-bottom: var(--space-6);
  font-style: italic;
}

.testimonials__card-author {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  margin-bottom: var(--space-3);
}

.testimonials__card-avatar {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid var(--color-primary-100);
}

.testimonials__card-name {
  font-weight: 700;
  font-size: var(--text-base);
  color: var(--color-gray-900);
}

.testimonials__card-role {
  font-size: var(--text-xs);
  color: var(--color-gray-400);
}

.testimonials__card-stars {
  color: var(--color-accent);
  font-size: var(--text-sm);
  display: flex;
  gap: var(--space-1);
}

/* Navigation */
.testimonials__nav {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-4);
  margin-top: var(--space-10);
}

.testimonials__nav-btn {
  width: 44px;
  height: 44px;
  background: var(--color-white);
  border: 1px solid var(--color-gray-200);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-gray-600);
  transition: all var(--transition-fast);
}

.testimonials__nav-btn:hover:not(:disabled) {
  background: var(--color-primary);
  color: white;
  border-color: var(--color-primary);
}

.testimonials__nav-btn:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

.testimonials__dots {
  display: flex;
  gap: var(--space-2);
}

.testimonials__dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--color-gray-200);
  transition: all var(--transition-fast);
}

.testimonials__dot--active {
  background: var(--color-primary);
  width: 28px;
  border-radius: var(--radius-full);
}

@media (max-width: 1024px) {
  .testimonials__slide {
    min-width: 50%;
  }
}

@media (max-width: 768px) {
  .testimonials__slide {
    min-width: 100%;
  }

  .testimonials__card {
    padding: var(--space-6);
  }
}
</style>
