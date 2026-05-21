<template>
  <footer id="kontak" class="footer">
    <!-- Top wave separator -->
    <div class="footer__wave">
      <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <path d="M0 60L48 52C96 44 192 28 288 32C384 36 480 60 576 68C672 76 768 68 864 56C960 44 1056 28 1152 24C1248 20 1344 28 1392 32L1440 36V120H0V60Z" fill="currentColor"/>
      </svg>
    </div>

    <div class="footer__main">
      <div class="container">
        <div class="footer__grid">
          <!-- Brand Column -->
          <div class="footer__brand">
            <div class="footer__logo">
              <img src="/logopeduli.png" alt="Logo PeduliKami Andalas" class="footer__logo-img" />
              <div>
                <span class="footer__logo-name">PeduliKami Andalas</span>
                <span class="footer__logo-tagline">Yayasan Kemanusiaan</span>
              </div>
            </div>
            <p class="footer__desc">
              Menjadi jembatan kebaikan antara mereka yang ingin berbagi dan
              mereka yang membutuhkan. Bersama membangun Indonesia yang lebih peduli.
            </p>
            <div class="footer__social">
              <a href="#" class="footer__social-link" id="footer-facebook" aria-label="Facebook">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="#" class="footer__social-link" id="footer-instagram" aria-label="Instagram">
                <i class="fab fa-instagram"></i>
              </a>
              <a href="#" class="footer__social-link" id="footer-twitter" aria-label="Twitter">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="#" class="footer__social-link" id="footer-youtube" aria-label="YouTube">
                <i class="fab fa-youtube"></i>
              </a>
              <a href="#" class="footer__social-link" id="footer-tiktok" aria-label="TikTok">
                <i class="fab fa-tiktok"></i>
              </a>
            </div>
          </div>

          <!-- Quick Links -->
          <div class="footer__links">
            <h4 class="footer__links-title">Navigasi</h4>
            <ul>
              <li><a href="#beranda">Beranda</a></li>
              <li><a href="#tentang">Tentang Kami</a></li>
              <li><a href="#program">Program</a></li>
              <li><a href="#dampak">Dampak</a></li>
              <li><a href="#galeri">Galeri</a></li>
              <li><a href="#donasi">Donasi</a></li>
            </ul>
          </div>

          <!-- Programs -->
          <div class="footer__links">
            <h4 class="footer__links-title">Program Kami</h4>
            <ul>
              <li><a href="#program-bencana">Tanggap Bencana</a></li>
              <li><a href="#program-pendidikan">Pendidikan</a></li>
              <li><a href="#program-kesehatan">Kesehatan</a></li>
              <li><a href="#program-air-bersih">Air Bersih</a></li>
              <li><a href="#program-pangan">Ketahanan Pangan</a></li>
              <li><a href="#program-pemberdayaan">Pemberdayaan Ekonomi</a></li>
            </ul>
          </div>

          <!-- Contact -->
          <div class="footer__links">
            <h4 class="footer__links-title">Hubungi Kami</h4>
            <div class="footer__contact">
              <div class="footer__contact-item">
                <i class="fas fa-map-marker-alt"></i>
                <span>Jl. Kemanusiaan No. 45<br/>Jakarta Selatan, 12345</span>
              </div>
              <div class="footer__contact-item">
                <i class="fas fa-phone"></i>
                <span>(021) 123-4567</span>
              </div>
              <div class="footer__contact-item">
                <i class="fas fa-envelope"></i>
                <span>info@pedulikami.org</span>
              </div>
              <div class="footer__contact-item">
                <i class="fas fa-clock"></i>
                <span>Senin - Jumat, 08:00 - 17:00 WIB</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Newsletter -->
        <div class="footer__newsletter">
          <div class="footer__newsletter-text">
            <h4>Tetap Terhubung</h4>
            <p>Dapatkan kabar terbaru tentang kegiatan dan program kemanusiaan kami.</p>
          </div>
          <div class="footer__newsletter-form">
            <input type="email" placeholder="Masukkan email Anda" class="footer__newsletter-input" id="footer-email-input" />
            <button class="btn btn-primary footer__newsletter-btn" id="footer-subscribe-btn">
              <i class="fas fa-paper-plane"></i>
              Berlangganan
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom Bar -->
    <div class="footer__bottom">
      <div class="container footer__bottom-inner">
        <p>&copy; 2024 PeduliKami Andalas. Seluruh hak cipta dilindungi undang-undang.</p>
        <div class="footer__bottom-links">
          <a href="#">Kebijakan Privasi</a>
          <a href="#">Syarat & Ketentuan</a>
          <a href="#">Laporan Keuangan</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  position: relative;
  background: var(--color-gray-900);
  color: var(--color-gray-300);
}

.footer__wave {
  position: absolute;
  top: -1px;
  left: 0;
  right: 0;
  color: var(--color-gray-900);
  line-height: 0;
}

.footer__wave svg {
  width: 100%;
  height: 80px;
}

.footer__main {
  padding: var(--space-24) 0 var(--space-12);
}

.footer__grid {
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr 1.2fr;
  gap: var(--space-10);
  padding-bottom: var(--space-12);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

/* Brand */
.footer__logo {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  margin-bottom: var(--space-5);
}

.footer__logo-img {
  width: 48px;
  height: 48px;
  object-fit: contain;
  border-radius: 50%;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

.footer__logo-name {
  display: block;
  font-family: var(--font-display);
  font-weight: 700;
  font-size: var(--text-xl);
  color: var(--color-white);
  line-height: 1.2;
}

.footer__logo-tagline {
  font-size: var(--text-xs);
  color: var(--color-gray-400);
}

.footer__desc {
  font-size: var(--text-sm);
  line-height: 1.8;
  color: var(--color-gray-400);
  margin-bottom: var(--space-6);
}

.footer__social {
  display: flex;
  gap: var(--space-3);
}

.footer__social-link {
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: var(--radius-lg);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-gray-400);
  transition: all var(--transition-base);
}

.footer__social-link:hover {
  background: var(--color-primary);
  border-color: var(--color-primary);
  color: white;
  transform: translateY(-3px);
}

/* Links */
.footer__links-title {
  font-weight: 700;
  font-size: var(--text-base);
  color: var(--color-white);
  margin-bottom: var(--space-5);
}

.footer__links ul {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}

.footer__links a {
  font-size: var(--text-sm);
  color: var(--color-gray-400);
  transition: all var(--transition-fast);
}

.footer__links a:hover {
  color: var(--color-primary-light);
  padding-left: var(--space-2);
}

/* Contact */
.footer__contact {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
}

.footer__contact-item {
  display: flex;
  align-items: flex-start;
  gap: var(--space-3);
  font-size: var(--text-sm);
  color: var(--color-gray-400);
}

.footer__contact-item i {
  color: var(--color-primary);
  margin-top: 3px;
  width: 16px;
}

/* Newsletter */
.footer__newsletter {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-8);
  padding: var(--space-8) 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.footer__newsletter-text h4 {
  font-weight: 700;
  font-size: var(--text-lg);
  color: var(--color-white);
  margin-bottom: var(--space-1);
}

.footer__newsletter-text p {
  font-size: var(--text-sm);
  color: var(--color-gray-400);
}

.footer__newsletter-form {
  display: flex;
  gap: var(--space-3);
}

.footer__newsletter-input {
  padding: var(--space-3) var(--space-5);
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: var(--radius-xl);
  color: white;
  font-family: var(--font-primary);
  font-size: var(--text-sm);
  min-width: 280px;
  transition: all var(--transition-fast);
}

.footer__newsletter-input::placeholder {
  color: var(--color-gray-500);
}

.footer__newsletter-input:focus {
  outline: none;
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px rgba(232, 93, 58, 0.1);
}

.footer__newsletter-btn {
  white-space: nowrap;
}

/* Bottom Bar */
.footer__bottom {
  padding: var(--space-5) 0;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
}

.footer__bottom-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.footer__bottom p {
  font-size: var(--text-sm);
  color: var(--color-gray-500);
}

.footer__bottom-links {
  display: flex;
  gap: var(--space-6);
}

.footer__bottom-links a {
  font-size: var(--text-sm);
  color: var(--color-gray-500);
  transition: color var(--transition-fast);
}

.footer__bottom-links a:hover {
  color: var(--color-primary-light);
}

@media (max-width: 1024px) {
  .footer__grid {
    grid-template-columns: 1fr 1fr;
    gap: var(--space-8);
  }

  .footer__newsletter {
    flex-direction: column;
    align-items: flex-start;
  }

  .footer__newsletter-form {
    width: 100%;
  }

  .footer__newsletter-input {
    min-width: auto;
    flex: 1;
  }
}

@media (max-width: 768px) {
  .footer__grid {
    grid-template-columns: 1fr;
    gap: var(--space-8);
  }

  .footer__bottom-inner {
    flex-direction: column;
    gap: var(--space-3);
    text-align: center;
  }

  .footer__newsletter-form {
    flex-direction: column;
  }
}
</style>
