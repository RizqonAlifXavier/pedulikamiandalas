<template>
  <section id="program" class="programs section">
    <div class="container">
      <div class="section-header">
        <div class="section-badge section-badge--green">
          <i class="fas fa-hand-holding-heart"></i>
          Program Kami
        </div>
        <h2 class="section-title">
          Program <span>Kemanusiaan</span><br/>yang Kami Jalankan
        </h2>
        <p class="section-subtitle">
          Kami bergerak dalam berbagai bidang kemanusiaan untuk menjangkau mereka
          yang paling membutuhkan bantuan.
        </p>
      </div>

      <div class="programs__grid">
        <!-- Program Card 1 -->
        <div class="programs__card" id="program-bencana">
          <div class="programs__card-image">
            <img
              src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=600&q=80"
              alt="Bantuan Bencana Alam"
              loading="lazy"
            />
            <div class="programs__card-overlay">
              <span class="programs__card-tag">Prioritas Utama</span>
            </div>
          </div>
          <div class="programs__card-body">
            <div class="programs__card-icon">
              <i class="fas fa-house-tsunami"></i>
            </div>
            <h3 class="programs__card-title">Tanggap Bencana</h3>
            <p class="programs__card-desc">
              Respon cepat dan bantuan darurat untuk korban bencana alam di seluruh Indonesia.
              Mulai dari evakuasi, penyediaan logistik, hingga rehabilitasi pasca bencana.
            </p>
            <div class="programs__card-stats">
              <div class="programs__card-stat">
                <strong>2.500+</strong>
                <span>Keluarga terbantu</span>
              </div>
              <div class="programs__card-stat">
                <strong>15</strong>
                <span>Lokasi bencana</span>
              </div>
            </div>
            <a href="#donasi" class="programs__card-link">
              Pelajari selengkapnya <i class="fas fa-arrow-right"></i>
            </a>
          </div>
        </div>

        <!-- Program Card 2 -->
        <div class="programs__card" id="program-pendidikan">
          <div class="programs__card-image">
            <img
              src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600&q=80"
              alt="Program Pendidikan"
              loading="lazy"
            />
            <div class="programs__card-overlay">
              <span class="programs__card-tag programs__card-tag--green">Berkelanjutan</span>
            </div>
          </div>
          <div class="programs__card-body">
            <div class="programs__card-icon programs__card-icon--green">
              <i class="fas fa-graduation-cap"></i>
            </div>
            <h3 class="programs__card-title">Pendidikan untuk Semua</h3>
            <p class="programs__card-desc">
              Beasiswa, pembangunan sekolah, dan pelatihan guru di daerah terpencil.
              Memastikan setiap anak Indonesia mendapat hak pendidikan yang layak.
            </p>
            <div class="programs__card-stats">
              <div class="programs__card-stat">
                <strong>5.000+</strong>
                <span>Anak terbantu</span>
              </div>
              <div class="programs__card-stat">
                <strong>45</strong>
                <span>Sekolah dibangun</span>
              </div>
            </div>
            <a href="#donasi" class="programs__card-link">
              Pelajari selengkapnya <i class="fas fa-arrow-right"></i>
            </a>
          </div>
        </div>

        <!-- Program Card 3 -->
        <div class="programs__card" id="program-kesehatan">
          <div class="programs__card-image">
            <img
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80"
              alt="Program Kesehatan"
              loading="lazy"
            />
            <div class="programs__card-overlay">
              <span class="programs__card-tag programs__card-tag--amber">Vital</span>
            </div>
          </div>
          <div class="programs__card-body">
            <div class="programs__card-icon programs__card-icon--amber">
              <i class="fas fa-stethoscope"></i>
            </div>
            <h3 class="programs__card-title">Kesehatan Masyarakat</h3>
            <p class="programs__card-desc">
              Pengobatan gratis, posyandu keliling, dan edukasi kesehatan di daerah
              yang minim akses layanan medis. Hidup sehat adalah hak setiap orang.
            </p>
            <div class="programs__card-stats">
              <div class="programs__card-stat">
                <strong>8.000+</strong>
                <span>Pasien diobati</span>
              </div>
              <div class="programs__card-stat">
                <strong>30</strong>
                <span>Posko kesehatan</span>
              </div>
            </div>
            <a href="#donasi" class="programs__card-link">
              Pelajari selengkapnya <i class="fas fa-arrow-right"></i>
            </a>
          </div>
        </div>

        <!-- Program Card 4 -->
        <div class="programs__card" id="program-air-bersih">
          <div class="programs__card-image">
            <img
              src="https://images.unsplash.com/photo-1541544741938-0af808871cc0?w=600&q=80"
              alt="Program Air Bersih"
              loading="lazy"
            />
            <div class="programs__card-overlay">
              <span class="programs__card-tag programs__card-tag--blue">Esensial</span>
            </div>
          </div>
          <div class="programs__card-body">
            <div class="programs__card-icon programs__card-icon--blue">
              <i class="fas fa-droplet"></i>
            </div>
            <h3 class="programs__card-title">Air Bersih &amp; Sanitasi</h3>
            <p class="programs__card-desc">
              Pembangunan sumur bor, instalasi penyaringan air, dan pembangunan
              fasilitas sanitasi untuk desa-desa yang belum memiliki akses air bersih.
            </p>
            <div class="programs__card-stats">
              <div class="programs__card-stat">
                <strong>120+</strong>
                <span>Sumur dibangun</span>
              </div>
              <div class="programs__card-stat">
                <strong>50</strong>
                <span>Desa terjangkau</span>
              </div>
            </div>
            <a href="#donasi" class="programs__card-link">
              Pelajari selengkapnya <i class="fas fa-arrow-right"></i>
            </a>
          </div>
        </div>

        <!-- Program Card 5 -->
        <div class="programs__card" id="program-pangan">
          <div class="programs__card-image">
            <img
              src="https://images.unsplash.com/photo-1593113598332-cd288d649433?w=600&q=80"
              alt="Program Ketahanan Pangan"
              loading="lazy"
            />
            <div class="programs__card-overlay">
              <span class="programs__card-tag">Mendesak</span>
            </div>
          </div>
          <div class="programs__card-body">
            <div class="programs__card-icon">
              <i class="fas fa-wheat-awn"></i>
            </div>
            <h3 class="programs__card-title">Ketahanan Pangan</h3>
            <p class="programs__card-desc">
              Distribusi sembako, program urban farming, dan pelatihan pertanian
              berkelanjutan untuk masyarakat rentan agar mandiri secara pangan.
            </p>
            <div class="programs__card-stats">
              <div class="programs__card-stat">
                <strong>10.000+</strong>
                <span>Paket tersalurkan</span>
              </div>
              <div class="programs__card-stat">
                <strong>25</strong>
                <span>Kota/Kabupaten</span>
              </div>
            </div>
            <a href="#donasi" class="programs__card-link">
              Pelajari selengkapnya <i class="fas fa-arrow-right"></i>
            </a>
          </div>
        </div>

        <!-- Program Card 6 -->
        <div class="programs__card" id="program-pemberdayaan">
          <div class="programs__card-image">
            <img
              src="https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?w=600&q=80"
              alt="Pemberdayaan Ekonomi"
              loading="lazy"
            />
            <div class="programs__card-overlay">
              <span class="programs__card-tag programs__card-tag--green">Jangka Panjang</span>
            </div>
          </div>
          <div class="programs__card-body">
            <div class="programs__card-icon programs__card-icon--green">
              <i class="fas fa-hand-holding-dollar"></i>
            </div>
            <h3 class="programs__card-title">Pemberdayaan Ekonomi</h3>
            <p class="programs__card-desc">
              Pelatihan keterampilan, modal usaha mikro, dan pendampingan UMKM
              untuk masyarakat prasejahtera agar bisa mandiri secara ekonomi.
            </p>
            <div class="programs__card-stats">
              <div class="programs__card-stat">
                <strong>3.000+</strong>
                <span>Pelaku usaha</span>
              </div>
              <div class="programs__card-stat">
                <strong>18</strong>
                <span>Program aktif</span>
              </div>
            </div>
            <a href="#donasi" class="programs__card-link">
              Pelajari selengkapnya <i class="fas fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.programs {
  background: var(--color-white);
  position: relative;
}

.programs__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-8);
}

.programs__card {
  background: var(--color-white);
  border-radius: var(--radius-2xl);
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
  border: 1px solid var(--color-gray-100);
  transition: all var(--transition-base);
}

.programs__card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-2xl);
  border-color: transparent;
}

.programs__card-image {
  position: relative;
  height: 220px;
  overflow: hidden;
}

.programs__card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-slow);
}

.programs__card:hover .programs__card-image img {
  transform: scale(1.08);
}

.programs__card-overlay {
  position: absolute;
  top: var(--space-4);
  left: var(--space-4);
}

.programs__card-tag {
  display: inline-block;
  padding: var(--space-1) var(--space-3);
  background: rgba(232, 93, 58, 0.9);
  color: white;
  font-size: var(--text-xs);
  font-weight: 600;
  border-radius: var(--radius-md);
  backdrop-filter: blur(10px);
}

.programs__card-tag--green {
  background: rgba(27, 107, 90, 0.9);
}

.programs__card-tag--amber {
  background: rgba(244, 162, 97, 0.9);
}

.programs__card-tag--blue {
  background: rgba(90, 200, 250, 0.9);
  color: var(--color-dark);
}

.programs__card-body {
  padding: var(--space-6);
}

.programs__card-icon {
  width: 50px;
  height: 50px;
  background: var(--color-primary-50);
  color: var(--color-primary);
  border-radius: var(--radius-lg);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--text-xl);
  margin-bottom: var(--space-4);
  transition: all var(--transition-base);
}

.programs__card:hover .programs__card-icon {
  background: var(--color-primary);
  color: white;
  transform: scale(1.1) rotate(5deg);
}

.programs__card-icon--green {
  background: rgba(27, 107, 90, 0.1);
  color: var(--color-secondary);
}

.programs__card:hover .programs__card-icon--green {
  background: var(--color-secondary);
  color: white;
}

.programs__card-icon--amber {
  background: rgba(244, 162, 97, 0.15);
  color: var(--color-accent-dark);
}

.programs__card:hover .programs__card-icon--amber {
  background: var(--color-accent-dark);
  color: white;
}

.programs__card-icon--blue {
  background: rgba(90, 200, 250, 0.15);
  color: #0091D5;
}

.programs__card:hover .programs__card-icon--blue {
  background: #0091D5;
  color: white;
}

.programs__card-title {
  font-family: var(--font-display);
  font-size: var(--text-xl);
  font-weight: 700;
  color: var(--color-gray-900);
  margin-bottom: var(--space-3);
}

.programs__card-desc {
  font-size: var(--text-sm);
  color: var(--color-gray-500);
  line-height: 1.7;
  margin-bottom: var(--space-4);
}

.programs__card-stats {
  display: flex;
  gap: var(--space-6);
  padding: var(--space-4) 0;
  border-top: 1px solid var(--color-gray-100);
  margin-bottom: var(--space-4);
}

.programs__card-stat strong {
  display: block;
  font-family: var(--font-display);
  font-size: var(--text-lg);
  color: var(--color-gray-900);
  font-weight: 700;
}

.programs__card-stat span {
  font-size: var(--text-xs);
  color: var(--color-gray-400);
}

.programs__card-link {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  font-size: var(--text-sm);
  font-weight: 600;
  color: var(--color-primary);
  transition: all var(--transition-fast);
}

.programs__card-link:hover {
  gap: var(--space-3);
  color: var(--color-primary-dark);
}

@media (max-width: 1024px) {
  .programs__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .programs__grid {
    grid-template-columns: 1fr;
    gap: var(--space-6);
  }

  .programs__card-image {
    height: 180px;
  }
}
</style>
