<template>
  <div class="donation-page">
    <div class="container">
      <div class="donation-header text-center">
        <h1 class="donation-title">Bantu Mereka yang Membutuhkan</h1>
        <p class="donation-subtitle">Setiap donasi Anda memberikan dampak nyata bagi kehidupan mereka.</p>
      </div>

      <div class="donation-content">
        <div class="donation-form-card">
          <h2 class="form-title">Formulir Donasi</h2>
          
          <form @submit.prevent="submitDonation" class="form">
            <!-- Nominal Donasi -->
            <div class="form-group">
              <label class="form-label">Pilih Nominal Donasi</label>
              <div class="donation-amounts">
                <button
                  type="button"
                  v-for="amount in predefinedAmounts"
                  :key="amount.value"
                  class="amount-btn"
                  :class="{ 'amount-btn--active': selectedAmount === amount.value && !isCustomAmount }"
                  @click="selectAmount(amount.value)"
                >
                  {{ amount.label }}
                </button>
                <button
                  type="button"
                  class="amount-btn"
                  :class="{ 'amount-btn--active': isCustomAmount }"
                  @click="isCustomAmount = true"
                >
                  Nominal Lainnya
                </button>
              </div>
              
              <div v-if="isCustomAmount" class="custom-amount-input mt-4">
                <div class="input-group">
                  <span class="input-prefix">Rp</span>
                  <input
                    type="number"
                    v-model.number="customAmountValue"
                    class="form-control"
                    placeholder="Masukkan nominal"
                    min="10000"
                  />
                </div>
              </div>
            </div>

            <!-- Data Diri -->
            <div class="form-group mt-6">
              <label class="form-label">Informasi Donatur</label>
              <div class="input-grid">
                <div class="input-wrap">
                  <label for="name">Nama Lengkap</label>
                  <input type="text" id="name" v-model="form.name" class="form-control" placeholder="Nama Anda" required />
                </div>
                <div class="input-wrap">
                  <label for="email">Email</label>
                  <input type="email" id="email" v-model="form.email" class="form-control" placeholder="Email Anda" required />
                </div>
                <div class="input-wrap">
                  <label for="phone">Nomor Telepon</label>
                  <input type="tel" id="phone" v-model="form.phone" class="form-control" placeholder="0812xxxxxx" required />
                </div>
              </div>
            </div>

            <!-- Metode Pembayaran -->
            <div class="form-group mt-6">
              <label class="form-label">Metode Pembayaran</label>
              <div class="payment-methods">
                <label class="payment-method">
                  <input type="radio" v-model="form.paymentMethod" value="qris" />
                  <span class="payment-box">
                    <i class="fas fa-qrcode"></i>
                    <span>QRIS</span>
                  </span>
                </label>
                <label class="payment-method">
                  <input type="radio" v-model="form.paymentMethod" value="transfer" />
                  <span class="payment-box">
                    <i class="fas fa-university"></i>
                    <span>Transfer Bank</span>
                  </span>
                </label>
                <label class="payment-method">
                  <input type="radio" v-model="form.paymentMethod" value="ewallet" />
                  <span class="payment-box">
                    <i class="fas fa-wallet"></i>
                    <span>E-Wallet</span>
                  </span>
                </label>
              </div>
            </div>

            <!-- Dukungan -->
            <div class="form-group mt-6">
              <label for="message" class="form-label">Pesan Dukungan (Opsional)</label>
              <textarea id="message" v-model="form.message" class="form-control" rows="3" placeholder="Tuliskan pesan dukungan Anda di sini..."></textarea>
            </div>

            <!-- Submit -->
            <div class="form-actions mt-8">
              <button type="submit" class="btn btn-primary btn-submit" :disabled="isSubmitting">
                <span v-if="isSubmitting"><i class="fas fa-spinner fa-spin"></i> Memproses...</span>
                <span v-else><i class="fas fa-heart"></i> Lanjutkan Pembayaran (Rp {{ currentTotal.toLocaleString('id-ID') }})</span>
              </button>
              <p class="secure-text mt-3 text-center">
                <i class="fas fa-shield-alt"></i> Transaksi dijamin aman dan terenkripsi
              </p>
            </div>
          </form>
        </div>
        
        <!-- Summary Sidebar -->
        <div class="donation-summary">
          <div class="summary-card">
            <h3>Ringkasan Donasi</h3>
            <div class="summary-item">
              <span>Program:</span>
              <strong>Donasi Umum PeduliKami Andalas</strong>
            </div>
            <div class="summary-item summary-total">
              <span>Total Donasi:</span>
              <strong class="text-primary">Rp {{ currentTotal.toLocaleString('id-ID') }}</strong>
            </div>
            <hr class="summary-divider" />
            <div class="trust-badges">
              <div class="trust-badge">
                <i class="fas fa-check-circle text-success"></i>
                <span>100% Transparan</span>
              </div>
              <div class="trust-badge">
                <i class="fas fa-lock text-success"></i>
                <span>Pembayaran Aman</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Success Modal -->
    <div v-if="showSuccess" class="modal-overlay">
      <div class="modal-content text-center">
        <div class="success-icon">
          <i class="fas fa-check"></i>
        </div>
        <h2>Terima Kasih, {{ form.name }}!</h2>
        <p>Donasi Anda sebesar <strong>Rp {{ currentTotal.toLocaleString('id-ID') }}</strong> sedang diproses.</p>
        <p class="modal-instruction">Silakan selesaikan pembayaran menggunakan metode <strong>{{ paymentMethodLabel }}</strong>.</p>
        <button class="btn btn-primary mt-6" @click="closeSuccess">Kembali ke Beranda</button>
      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute()
const router = useRouter()

const predefinedAmounts = [
  { label: 'Rp 50.000', value: 50000 },
  { label: 'Rp 100.000', value: 100000 },
  { label: 'Rp 250.000', value: 250000 },
  { label: 'Rp 500.000', value: 500000 },
  { label: 'Rp 1.000.000', value: 1000000 },
]

const selectedAmount = ref(100000)
const isCustomAmount = ref(false)
const customAmountValue = ref(null)

const form = ref({
  name: '',
  email: '',
  phone: '',
  paymentMethod: 'qris',
  message: ''
})

const isSubmitting = ref(false)
const showSuccess = ref(false)

// Init amount from URL query
onMounted(() => {
  if (route.query.amount) {
    const amountParam = parseInt(route.query.amount)
    if (!isNaN(amountParam)) {
      const predefined = predefinedAmounts.find(a => a.value === amountParam)
      if (predefined) {
        selectedAmount.value = predefined.value
        isCustomAmount.value = false
      } else {
        isCustomAmount.value = true
        customAmountValue.value = amountParam
      }
    }
  }
})

const selectAmount = (val) => {
  selectedAmount.value = val
  isCustomAmount.value = false
}

const currentTotal = computed(() => {
  return isCustomAmount.value ? (customAmountValue.value || 0) : selectedAmount.value
})

const paymentMethodLabel = computed(() => {
  const map = {
    qris: 'QRIS',
    transfer: 'Transfer Bank',
    ewallet: 'E-Wallet'
  }
  return map[form.value.paymentMethod]
})

const submitDonation = async () => {
  if (currentTotal.value < 10000) {
    alert('Minimal donasi adalah Rp 10.000')
    return
  }
  
  isSubmitting.value = true
  
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1500))
  
  isSubmitting.value = false
  showSuccess.value = true
}

const closeSuccess = () => {
  showSuccess.value = false
  router.push('/')
}
</script>

<style scoped>
.donation-page {
  padding-top: 120px;
  padding-bottom: 80px;
  background-color: var(--color-gray-50);
  min-height: 100vh;
}

.donation-header {
  margin-bottom: 40px;
}

.donation-title {
  font-family: var(--font-display);
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--color-gray-900);
  margin-bottom: 10px;
}

.donation-subtitle {
  color: var(--color-gray-500);
  font-size: 1.1rem;
}

.donation-content {
  display: grid;
  grid-template-columns: 1fr 350px;
  gap: 30px;
  align-items: start;
}

.donation-form-card, .summary-card {
  background: white;
  border-radius: var(--radius-2xl);
  padding: 40px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.05);
}

.form-title {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 30px;
  color: var(--color-gray-900);
  border-bottom: 2px solid var(--color-gray-100);
  padding-bottom: 15px;
}

.form-label {
  display: block;
  font-weight: 600;
  margin-bottom: 15px;
  color: var(--color-gray-800);
}

.donation-amounts {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.amount-btn {
  padding: 12px 20px;
  border: 2px solid var(--color-gray-200);
  border-radius: var(--radius-xl);
  background: transparent;
  color: var(--color-gray-600);
  font-weight: 600;
  transition: all 0.2s;
  flex: 1;
  min-width: calc(33.333% - 10px);
  text-align: center;
}

.amount-btn:hover {
  border-color: var(--color-primary-light);
  color: var(--color-primary);
}

.amount-btn--active {
  border-color: var(--color-primary);
  background: var(--color-primary-50);
  color: var(--color-primary);
}

.input-group {
  display: flex;
  align-items: center;
}

.input-prefix {
  padding: 12px 20px;
  background: var(--color-gray-100);
  border: 2px solid var(--color-gray-200);
  border-right: none;
  border-radius: var(--radius-xl) 0 0 var(--radius-xl);
  font-weight: 600;
  color: var(--color-gray-600);
}

.input-group .form-control {
  border-radius: 0 var(--radius-xl) var(--radius-xl) 0;
}

.input-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
}

.input-wrap label {
  display: block;
  font-size: 0.9rem;
  color: var(--color-gray-600);
  margin-bottom: 8px;
}

.form-control {
  width: 100%;
  padding: 12px 20px;
  border: 2px solid var(--color-gray-200);
  border-radius: var(--radius-xl);
  font-size: 1rem;
  transition: border-color 0.2s;
  font-family: inherit;
}

.form-control:focus {
  outline: none;
  border-color: var(--color-primary);
}

.payment-methods {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
}

.payment-method input {
  display: none;
}

.payment-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 20px;
  border: 2px solid var(--color-gray-200);
  border-radius: var(--radius-xl);
  cursor: pointer;
  transition: all 0.2s;
  color: var(--color-gray-600);
}

.payment-box i {
  font-size: 1.5rem;
}

.payment-method input:checked + .payment-box {
  border-color: var(--color-primary);
  background: var(--color-primary-50);
  color: var(--color-primary);
}

.btn-submit {
  width: 100%;
  font-size: 1.2rem;
  padding: 15px;
}

.secure-text {
  font-size: 0.9rem;
  color: var(--color-gray-500);
}

/* Summary */
.summary-card h3 {
  font-size: 1.2rem;
  margin-bottom: 20px;
  color: var(--color-gray-900);
}

.summary-item {
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-bottom: 20px;
}

.summary-item span {
  font-size: 0.9rem;
  color: var(--color-gray-500);
}

.summary-total {
  font-size: 1.2rem;
}

.text-primary {
  color: var(--color-primary);
}

.summary-divider {
  border: none;
  border-top: 1px dashed var(--color-gray-300);
  margin: 20px 0;
}

.trust-badges {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.trust-badge {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 0.95rem;
  color: var(--color-gray-700);
}

.text-success {
  color: var(--color-success);
}

.mt-3 { margin-top: 12px; }
.mt-4 { margin-top: 16px; }
.mt-6 { margin-top: 24px; }
.mt-8 { margin-top: 32px; }
.text-center { text-align: center; }

/* Modal */
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.6);
  backdrop-filter: blur(5px);
  z-index: 10000;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-content {
  background: white;
  padding: 50px;
  border-radius: var(--radius-2xl);
  max-width: 500px;
  width: 90%;
  animation: scaleIn 0.3s ease-out;
}

.success-icon {
  width: 80px;
  height: 80px;
  background: var(--color-success);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  margin: 0 auto 20px;
}

.modal-content h2 {
  font-size: 1.8rem;
  margin-bottom: 15px;
  color: var(--color-gray-900);
}

.modal-content p {
  color: var(--color-gray-600);
  margin-bottom: 10px;
}

.modal-instruction {
  background: var(--color-gray-50);
  padding: 15px;
  border-radius: var(--radius-lg);
  margin-top: 20px;
}

@keyframes scaleIn {
  from { transform: scale(0.9); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
}

@media (max-width: 1024px) {
  .donation-content {
    grid-template-columns: 1fr;
  }
  
  .donation-summary {
    order: -1;
  }
}

@media (max-width: 768px) {
  .amount-btn {
    min-width: calc(50% - 5px);
  }
  
  .payment-methods {
    grid-template-columns: 1fr;
  }
  
  .donation-form-card, .summary-card {
    padding: 25px;
  }
}
</style>
