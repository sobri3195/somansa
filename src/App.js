import React from 'https://esm.sh/react@18.3.1';

const products = [
  'CogniScan — AI Radiologi & Lab',
  'Kaist Medika — Klinik Dokter Sobri & HomeCare',
  'Klinik Kecantikan',
  'SIMRS & SIMKlinik',
  'Klinik Rawat Luka',
  'Jualan Scrub Dokter',
  'Jualan Alat Medis Dokter',
  'Apotek',
  'Website Ujian Dokter',
  'Tools Hacking Sobri',
  'Software House',
  'Kosan',
];

const highlights = [
  {
    title: 'HealthTech Terintegrasi',
    desc: 'Ekosistem kesehatan dari AI diagnostik, manajemen klinik, hingga layanan pasien di rumah.',
  },
  {
    title: 'Eksekusi Cepat',
    desc: 'Tim software house Somansa fokus pada produk yang scalable, aman, dan siap dipakai bisnis nyata.',
  },
  {
    title: 'Diversifikasi Cerdas',
    desc: 'Dari medis, edukasi dokter, retail kesehatan, hingga properti — semua tumbuh dalam satu visi.',
  },
];

const valuePoints = [
  'UI modern dengan fokus conversion dan trust.',
  'Arsitektur produk dibuat modular dan mudah dikembangkan.',
  'Pendekatan AI-first untuk efisiensi operasional klinik.',
  'Integrasi data antar unit bisnis untuk insight real-time.',
  'Peta jalan produk berbasis kebutuhan pengguna nyata.',
  'Keamanan data dan privasi menjadi prioritas utama.',
  'Sistem siap multi-device: desktop, tablet, mobile.',
  'Monitoring performa untuk menjaga uptime layanan.',
  'Onboarding cepat untuk tim medis dan non-teknis.',
  'Kolaborasi end-to-end dari strategi hingga deployment.',
];

const metrics = [
  { label: 'Unit Produk', value: '12+' },
  { label: 'Fokus Industri', value: 'HealthTech' },
  { label: 'Model Eksekusi', value: 'Build Fast' },
];

const e = React.createElement;

export function App() {
  return e(
    'div',
    { className: 'page' },
    e(
      'header',
      { className: 'hero' },
      e(
        'nav',
        { className: 'nav' },
        e(
          'div',
          { className: 'brand-wrap' },
          e('img', { src: '/somansa-logo.svg', className: 'brand-logo', alt: 'Logo Somansa' }),
          e('div', { className: 'brand' }, 'SOMANSA'),
        ),
        e('a', { className: 'cta', href: '#products' }, 'Explore Produk'),
      ),
      e(
        'div',
        { className: 'hero-content' },
        e('p', { className: 'badge' }, 'Innovating Health, Technology, & Lifestyle'),
        e('h1', null, 'Perusahaan Multi-Produk yang Membangun Masa Depan dari Indonesia'),
        e(
          'p',
          { className: 'lead' },
          'Somansa menghadirkan solusi terintegrasi untuk kesehatan, teknologi, dan layanan modern dengan fokus pada dampak nyata, desain unggul, dan inovasi berkelanjutan.',
        ),
        e(
          'div',
          { className: 'hero-actions' },
          e('a', { href: '#products', className: 'btn btn-primary' }, 'Lihat Portofolio'),
          e('a', { href: '#value', className: 'btn btn-secondary' }, 'Nilai Unggul'),
        ),
        e(
          'div',
          { className: 'metrics' },
          ...metrics.map((item) =>
            e(
              'article',
              { className: 'metric-card', key: item.label },
              e('strong', null, item.value),
              e('span', null, item.label),
            ),
          ),
        ),
      ),
      e('div', { className: 'glow glow-a' }),
      e('div', { className: 'glow glow-b' }),
    ),
    e(
      'section',
      { id: 'about', className: 'highlights section' },
      ...highlights.map((item) =>
        e(
          'article',
          { className: 'card float', key: item.title },
          e('h3', null, item.title),
          e('p', null, item.desc),
        ),
      ),
    ),
    e(
      'section',
      { id: 'value', className: 'section value' },
      e(
        'div',
        { className: 'section-head' },
        e('p', { className: 'badge' }, '10 Nilai & Animasi Experience'),
        e('h2', null, 'Kenapa UI/UX Somansa Lebih Menarik?'),
      ),
      e(
        'div',
        { className: 'value-grid' },
        ...valuePoints.map((point, i) =>
          e(
            'article',
            {
              className: 'value-card reveal',
              key: point,
              style: { animationDelay: `${100 + i * 80}ms` },
            },
            e('span', { className: 'value-index' }, `${String(i + 1).padStart(2, '0')}`),
            e('p', null, point),
          ),
        ),
      ),
    ),
    e(
      'section',
      { id: 'products', className: 'section products' },
      e(
        'div',
        { className: 'section-head' },
        e('p', { className: 'badge' }, 'Produk & Unit Bisnis'),
        e('h2', null, '12 Pilar Bisnis Somansa'),
      ),
      e(
        'div',
        { className: 'grid' },
        ...products.map((product, i) =>
          e(
            'div',
            {
              className: 'product-card reveal',
              style: { animationDelay: `${i * 70}ms` },
              key: product,
            },
            e('span', null, String(i + 1).padStart(2, '0')),
            e('h4', null, product),
          ),
        ),
      ),
    ),
    e(
      'section',
      { className: 'section banner' },
      e('h2', null, 'Ready to collaborate with Somansa?'),
      e(
        'p',
        null,
        'Kami membuka kolaborasi untuk institusi kesehatan, startup, UMKM, dan transformasi digital enterprise.',
      ),
      e('a', { className: 'btn btn-primary', href: 'mailto:hello@somansa.id' }, 'Hubungi Tim Somansa'),
    ),
    e('footer', { className: 'footer' }, `© ${new Date().getFullYear()} Somansa. All rights reserved.`),
  );
}
