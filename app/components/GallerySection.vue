<template>
  <section id="galeri" class="gallery section">
    <div class="container">
      <div class="section-header">
        <div class="section-badge">
          <i class="fas fa-images"></i>
          Galeri Kegiatan
        </div>
        <h2 class="section-title">
          Dokumentasi <span>Aksi</span><br/>Kemanusiaan Kami
        </h2>
        <p class="section-subtitle">
          Setiap foto menceritakan kisah perubahan dan harapan yang telah kita wujudkan bersama.
        </p>
      </div>

      <!-- Filter Tabs -->
      <div class="gallery__filters">
        <button
          v-for="filter in filters"
          :key="filter.id"
          class="gallery__filter"
          :class="{ 'gallery__filter--active': activeFilter === filter.id }"
          @click="activeFilter = filter.id"
        >
          <i :class="filter.icon"></i>
          {{ filter.label }}
        </button>
      </div>

      <!-- Gallery Grid -->
      <div class="gallery__grid">
        <div
          v-for="(item, index) in filteredItems"
          :key="item.id"
          class="gallery__item"
          :class="[`gallery__item--${item.size || 'normal'}`]"
          @click="openLightbox(index)"
        >
          <img :src="item.image" :alt="item.caption" loading="lazy" />
          <div class="gallery__item-overlay">
            <div class="gallery__item-info">
              <span class="gallery__item-category">{{ item.categoryLabel }}</span>
              <h4 class="gallery__item-caption">{{ item.caption }}</h4>
              <span class="gallery__item-location">
                <i class="fas fa-map-pin"></i> {{ item.location }}
              </span>
            </div>
            <div class="gallery__item-zoom">
              <i class="fas fa-expand"></i>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Lightbox -->
    <Teleport to="body">
      <div class="lightbox" :class="{ 'lightbox--open': lightboxOpen }" @click.self="closeLightbox">
        <button class="lightbox__close" @click="closeLightbox">
          <i class="fas fa-times"></i>
        </button>
        <button class="lightbox__nav lightbox__nav--prev" @click="prevImage">
          <i class="fas fa-chevron-left"></i>
        </button>
        <div class="lightbox__content" v-if="lightboxOpen && filteredItems[currentIndex]">
          <img :src="filteredItems[currentIndex].image" :alt="filteredItems[currentIndex].caption" />
          <div class="lightbox__caption">
            <h4>{{ filteredItems[currentIndex].caption }}</h4>
            <p><i class="fas fa-map-pin"></i> {{ filteredItems[currentIndex].location }}</p>
          </div>
        </div>
        <button class="lightbox__nav lightbox__nav--next" @click="nextImage">
          <i class="fas fa-chevron-right"></i>
        </button>
      </div>
    </Teleport>
  </section>
</template>

<script setup>
const activeFilter = ref('all')
const lightboxOpen = ref(false)
const currentIndex = ref(0)

const filters = [
  { id: 'all', label: 'Semua', icon: 'fas fa-border-all' },
  { id: 'bencana', label: 'Bencana', icon: 'fas fa-house-tsunami' },
  { id: 'pendidikan', label: 'Pendidikan', icon: 'fas fa-graduation-cap' },
  { id: 'kesehatan', label: 'Kesehatan', icon: 'fas fa-stethoscope' },
  { id: 'sosial', label: 'Sosial', icon: 'fas fa-users' },
]

const galleryItems = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1594708767771-a7502209ff51?w=800&q=80',
    caption: 'Distribusi Bantuan Bencana Cianjur',
    location: 'Cianjur, Jawa Barat',
    category: 'bencana',
    categoryLabel: 'Tanggap Bencana',
    size: 'large',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1509099836639-18ba4637b590?w=600&q=80',
    caption: 'Anak-anak Belajar di Sekolah Darurat',
    location: 'Palu, Sulawesi Tengah',
    category: 'pendidikan',
    categoryLabel: 'Pendidikan',
    size: 'normal',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=600&q=80',
    caption: 'Pemeriksaan Kesehatan Gratis',
    location: 'Flores, NTT',
    category: 'kesehatan',
    categoryLabel: 'Kesehatan',
    size: 'normal',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1617450365226-9bf28c04e130?w=800&q=80',
    caption: 'Pembagian Sembako di Bulan Ramadhan',
    location: 'Jakarta Utara',
    category: 'sosial',
    categoryLabel: 'Sosial',
    size: 'normal',
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&q=80',
    caption: 'Senyum Anak-anak Pedalaman Papua',
    location: 'Jayapura, Papua',
    category: 'pendidikan',
    categoryLabel: 'Pendidikan',
    size: 'large',
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1578357078586-491adf1aa5ba?w=600&q=80',
    caption: 'Relawan Membantu Evakuasi Banjir',
    location: 'Kalimantan Selatan',
    category: 'bencana',
    categoryLabel: 'Tanggap Bencana',
    size: 'normal',
  },
  {
    id: 7,
    image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&q=80',
    caption: 'Kegiatan Bakti Sosial Bersama',
    location: 'Bandung, Jawa Barat',
    category: 'sosial',
    categoryLabel: 'Sosial',
    size: 'normal',
  },
  {
    id: 8,
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80',
    caption: 'Posyandu Keliling di Desa Terpencil',
    location: 'Manggarai, NTT',
    category: 'kesehatan',
    categoryLabel: 'Kesehatan',
    size: 'normal',
  },
]

const filteredItems = computed(() => {
  if (activeFilter.value === 'all') return galleryItems
  return galleryItems.filter(item => item.category === activeFilter.value)
})

const openLightbox = (index) => {
  currentIndex.value = index
  lightboxOpen.value = true
  document.body.style.overflow = 'hidden'
}

const closeLightbox = () => {
  lightboxOpen.value = false
  document.body.style.overflow = ''
}

const prevImage = () => {
  currentIndex.value = currentIndex.value > 0 ? currentIndex.value - 1 : filteredItems.value.length - 1
}

const nextImage = () => {
  currentIndex.value = currentIndex.value < filteredItems.value.length - 1 ? currentIndex.value + 1 : 0
}
</script>

<style scoped>
.gallery {
  background: var(--color-gray-50);
}

.gallery__filters {
  display: flex;
  justify-content: center;
  gap: var(--space-3);
  margin-bottom: var(--space-10);
  flex-wrap: wrap;
}

.gallery__filter {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-3) var(--space-5);
  background: var(--color-white);
  color: var(--color-gray-500);
  font-size: var(--text-sm);
  font-weight: 500;
  border-radius: var(--radius-full);
  border: 1px solid var(--color-gray-200);
  transition: all var(--transition-base);
}

.gallery__filter:hover {
  color: var(--color-primary);
  border-color: var(--color-primary-200);
}

.gallery__filter--active {
  background: var(--color-primary);
  color: var(--color-white);
  border-color: var(--color-primary);
  box-shadow: 0 4px 12px rgba(232, 93, 58, 0.3);
}

.gallery__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-4);
  grid-auto-rows: 250px;
}

.gallery__item {
  position: relative;
  border-radius: var(--radius-xl);
  overflow: hidden;
  cursor: pointer;
}

.gallery__item--large {
  grid-column: span 2;
  grid-row: span 2;
}

.gallery__item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-slow);
}

.gallery__item:hover img {
  transform: scale(1.08);
}

.gallery__item-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 60%);
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  padding: var(--space-5);
  opacity: 0;
  transition: opacity var(--transition-base);
}

.gallery__item:hover .gallery__item-overlay {
  opacity: 1;
}

.gallery__item-category {
  display: inline-block;
  padding: var(--space-1) var(--space-3);
  background: rgba(232, 93, 58, 0.8);
  color: white;
  font-size: var(--text-xs);
  font-weight: 600;
  border-radius: var(--radius-md);
  margin-bottom: var(--space-2);
}

.gallery__item-caption {
  color: white;
  font-size: var(--text-base);
  font-weight: 600;
  margin-bottom: var(--space-1);
}

.gallery__item-location {
  font-size: var(--text-xs);
  color: rgba(255, 255, 255, 0.7);
}

.gallery__item-zoom {
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  align-self: flex-end;
}

/* Lightbox */
.lightbox {
  position: fixed;
  inset: 0;
  z-index: 2000;
  background: rgba(0, 0, 0, 0.95);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  visibility: hidden;
  transition: all var(--transition-base);
}

.lightbox--open {
  opacity: 1;
  visibility: visible;
}

.lightbox__close {
  position: absolute;
  top: var(--space-6);
  right: var(--space-6);
  width: 44px;
  height: 44px;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--text-xl);
  transition: all var(--transition-fast);
  z-index: 2001;
}

.lightbox__close:hover {
  background: rgba(255, 255, 255, 0.2);
}

.lightbox__nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 50px;
  height: 50px;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--text-lg);
  transition: all var(--transition-fast);
  z-index: 2001;
}

.lightbox__nav:hover {
  background: rgba(255, 255, 255, 0.2);
}

.lightbox__nav--prev {
  left: var(--space-6);
}

.lightbox__nav--next {
  right: var(--space-6);
}

.lightbox__content {
  max-width: 90vw;
  max-height: 85vh;
  text-align: center;
}

.lightbox__content img {
  max-width: 100%;
  max-height: 75vh;
  object-fit: contain;
  border-radius: var(--radius-lg);
  margin: 0 auto;
}

.lightbox__caption {
  margin-top: var(--space-4);
  color: white;
}

.lightbox__caption h4 {
  font-size: var(--text-lg);
  font-weight: 600;
}

.lightbox__caption p {
  font-size: var(--text-sm);
  color: rgba(255, 255, 255, 0.6);
  margin-top: var(--space-1);
}

@media (max-width: 1024px) {
  .gallery__grid {
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 200px;
  }
}

@media (max-width: 768px) {
  .gallery__grid {
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 180px;
  }

  .gallery__item--large {
    grid-column: span 2;
    grid-row: span 1;
  }
}

@media (max-width: 480px) {
  .gallery__grid {
    grid-template-columns: 1fr;
    grid-auto-rows: 220px;
  }

  .gallery__item--large {
    grid-column: span 1;
  }
}
</style>
