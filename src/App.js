import React from 'https://esm.sh/react@18.3.1';

const navLinks = [
  { label: 'Layanan', href: '#layanan' },
  { label: 'Portofolio', href: '#portofolio' },
  { label: 'Proses', href: '#proses' },
  { label: 'Kontak', href: '#kontak' },
];

const services = [
  {
    title: 'Rekayasa Produk HealthTech',
    description:
      'Perancangan dan pengembangan platform klinik, rumah sakit, dan layanan pasien terpadu dengan arsitektur siap skala.',
  },
  {
    title: 'Solusi AI Terapan',
    description:
      'Implementasi AI untuk clinical decision support, otomasi alur kerja, dan analitik operasional dengan tata kelola data yang disiplin.',
  },
  {
    title: 'Modernisasi Sistem Enterprise',
    description:
      'Transformasi sistem inti agar interoperabilitas, keamanan, dan performa bisnis meningkat tanpa mengganggu operasi harian.',
  },
];

const useCases = [
  {
    name: 'CogniScan',
    tag: 'AI Diagnostik',
    outcome: 'Mempercepat proses triase radiologi dan memberi dukungan keputusan klinis berbasis data visual.',
  },
  {
    name: 'Kaist Medika Ecosystem',
    tag: 'Ekosistem Klinik',
    outcome: 'Menyatukan layanan klinik, homecare, dan manajemen pasien dalam alur operasional yang konsisten.',
  },
  {
    name: 'Inisiatif SIMRS & SIMKlinik',
    tag: 'Infrastruktur Operasional',
    outcome: 'Menguatkan efisiensi administrasi dan kualitas pelaporan melalui integrasi sistem lintas unit layanan.',
  },
  {
    name: 'Medical Commerce Stack',
    tag: 'Perdagangan Kesehatan',
    outcome: 'Membangun kanal penjualan produk medis dengan kontrol inventori dan visibilitas permintaan yang lebih baik.',
  },
];

const processSteps = [
  {
    title: 'Pemetaan Strategi',
    detail:
      'Menyelaraskan tujuan bisnis, kesiapan organisasi, regulasi, dan prioritas teknologi ke dalam peta jalan yang terukur.',
  },
  {
    title: 'Desain dan Implementasi',
    detail:
      'Membangun pengalaman produk, arsitektur sistem, serta integrasi inti dengan standar kualitas enterprise-grade.',
  },
  {
    title: 'Optimalisasi Berkelanjutan',
    detail:
      'Memantau dampak, menajamkan metrik performa, dan mengeksekusi iterasi prioritas untuk pertumbuhan jangka panjang.',
  },
];

const highlights = [
  'Arsitektur modular untuk kesiapan multi-unit dan multi-lokasi.',
  'Pendekatan delivery disiplin: strategi, desain, implementasi, hingga stabilisasi.',
  'Fokus pada nilai bisnis terukur, bukan sekadar penyelesaian fitur teknis.',
];

const indicators = ['NDA-ready', 'Keamanan data sebagai fondasi', 'Pendekatan audit-trail'];

const metrics = [
  ['12+', 'Inisiatif digital terkelola'],
  ['3', 'Domain strategis utama'],
  ['99,9%', 'Target reliabilitas layanan'],
];

const e = React.createElement;

export function App() {
  return e(
    'div',
    { className: 'page' },
    e(
      'header',
      { className: 'hero-shell', id: 'top' },
      e(
        'nav',
        { className: 'nav glass' },
        e('a', { href: '#top', className: 'logo', 'aria-label': 'Somansa home' }, e('img', { src: '/somansa-logo.svg', alt: 'Somansa' }), e('span', null, 'SOMANSA')),
        e('div', { className: 'nav-links' }, ...navLinks.map((link) => e('a', { key: link.label, href: link.href }, link.label))),
        e('a', { className: 'btn btn-primary', href: '#kontak' }, 'Konsultasi Strategis'),
      ),
      e(
        'section',
        { className: 'hero grid' },
        e(
          'div',
          { className: 'hero-copy glass' },
          e('p', { className: 'chip' }, 'Mitra Transformasi Digital HealthTech & AI'),
          e('h1', null, 'Membangun Solusi HealthTech dan AI yang Andal, Bernilai Tinggi, dan Siap Skala Enterprise.'),
          e(
            'p',
            { className: 'hero-lead' },
            'Somansa mendampingi organisasi kesehatan dan institusi enterprise untuk merancang strategi produk, mempercepat implementasi, serta memastikan teknologi menghasilkan dampak operasional yang nyata.',
          ),
          e('div', { className: 'actions' }, e('a', { className: 'btn btn-primary', href: '#kontak' }, 'Mulai Diskusi Strategis'), e('a', { className: 'btn btn-ghost', href: '#portofolio' }, 'Tinjau Portofolio')),
          e('p', { className: 'positioning' }, 'Dipercaya sebagai partner eksekusi untuk inisiatif mission-critical dengan ekspektasi kualitas tinggi.'),
        ),
        e(
          'aside',
          { className: 'hero-visual glass', 'aria-label': 'Ringkasan kapabilitas enterprise Somansa' },
          e('div', { className: 'orb orb-cyan' }),
          e('div', { className: 'orb orb-violet' }),
          e('p', { className: 'eyebrow' }, 'Profil Kesiapan Enterprise'),
          e('h3', null, 'Delivery partner untuk institusi kesehatan yang membutuhkan eksekusi presisi.'),
          e('ul', { className: 'highlights-list' }, ...highlights.map((item) => e('li', { key: item }, item))),
          e('div', { className: 'indicator-row' }, ...indicators.map((item) => e('span', { key: item }, item))),
          e(
            'div',
            { className: 'metric-grid' },
            ...metrics.map((item) =>
              e('article', { key: item[0], className: 'metric-card' }, e('strong', null, item[0]), e('small', null, item[1])),
            ),
          ),
        ),
      ),
    ),
    e(
      'section',
      { className: 'section glass company-intro' },
      e('p', { className: 'chip' }, 'Profil Singkat'),
      e('h2', null, 'Somansa adalah partner strategis yang menyatukan visi bisnis dengan eksekusi teknologi.'),
      e(
        'p',
        null,
        'Kami bekerja seperti perpanjangan tim internal Anda: menjaga akurasi prioritas, mempercepat pengambilan keputusan, dan membangun solusi yang siap mendukung pertumbuhan jangka panjang.',
      ),
    ),
    e(
      'section',
      { className: 'section', id: 'layanan' },
      e('p', { className: 'chip' }, 'Layanan Inti'),
      e('h2', null, 'Kapabilitas terstruktur untuk inisiatif bernilai strategis.'),
      e('div', { className: 'cards-3' }, ...services.map((item) => e('article', { key: item.title, className: 'card glass service-card' }, e('h3', null, item.title), e('p', null, item.description)))),
    ),
    e(
      'section',
      { className: 'section', id: 'portofolio' },
      e('p', { className: 'chip' }, 'Portofolio & Use Case'),
      e('h2', null, 'Inisiatif terpilih dengan konteks bisnis yang jelas.'),
      e(
        'div',
        { className: 'cards-2' },
        ...useCases.map((item, index) =>
          e(
            'article',
            { key: item.name, className: 'card glass usecase' },
            e('div', { className: 'case-top' }, e('span', { className: 'case-index' }, `0${index + 1}`), e('span', { className: 'case-tag' }, item.tag)),
            e('h3', null, item.name),
            e('p', null, item.outcome),
          ),
        ),
      ),
    ),
    e(
      'section',
      { className: 'section', id: 'proses' },
      e('p', { className: 'chip' }, 'Metodologi Kerja'),
      e('h2', null, 'Ringkas, disiplin, dan relevan untuk lingkungan enterprise.'),
      e(
        'div',
        { className: 'cards-3 process' },
        ...processSteps.map((item, index) =>
          e('article', { key: item.title, className: 'card glass process-card' }, e('span', { className: 'step' }, `Tahap ${index + 1}`), e('h3', null, item.title), e('p', null, item.detail)),
        ),
      ),
    ),
    e(
      'section',
      { className: 'section cta glass', id: 'kontak' },
      e('p', { className: 'chip' }, 'Kolaborasi Strategis'),
      e('h2', null, 'Siapkan inisiatif HealthTech dan AI Anda dengan fondasi yang tepat.'),
      e('p', null, 'Diskusikan target bisnis, risiko implementasi, dan prioritas eksekusi bersama tim Somansa dalam sesi konsultasi terarah.'),
      e('a', { href: 'mailto:hello@somansa.id', className: 'btn btn-primary cta-button' }, 'Jadwalkan Konsultasi Eksekutif'),
    ),
    e('footer', { className: 'footer' }, `© ${new Date().getFullYear()} Somansa. Dirancang untuk kepercayaan enterprise.`),
  );
}
