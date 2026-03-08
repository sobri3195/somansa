import React from 'https://esm.sh/react@18.3.1';

const products = [
  { name: 'CogniScan — AI Radiologi & Lab', icon: '🧠', tag: 'AI Diagnostic' },
  { name: 'Kaist Medika — Klinik Dokter Sobri & HomeCare', icon: '🏥', tag: 'Clinical Service' },
  { name: 'Klinik Kecantikan', icon: '✨', tag: 'Aesthetic Care' },
  { name: 'SIMRS & SIMKlinik', icon: '📊', tag: 'Hospital System' },
  { name: 'Klinik Rawat Luka', icon: '🩹', tag: 'Specialized Care' },
  { name: 'Jualan Scrub Dokter', icon: '🧴', tag: 'Medical Retail' },
  { name: 'Jualan Alat Medis Dokter', icon: '🩺', tag: 'Medical Device' },
  { name: 'Apotek', icon: '💊', tag: 'Pharmacy' },
  { name: 'Website Ujian Dokter', icon: '📝', tag: 'Medical Education' },
  { name: 'Tools Hacking Sobri', icon: '🛡️', tag: 'Security Tools' },
  { name: 'Software House', icon: '💻', tag: 'Tech Builder' },
  { name: 'Kosan', icon: '🏠', tag: 'Property' },
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

const metrics = [
  { label: 'Unit Produk', value: '12+' },
  { label: 'Fokus Industri', value: 'HealthTech' },
  { label: 'Model Eksekusi', value: 'Build Fast' },
];

const audiences = ['Rumah Sakit', 'Klinik & Dokter', 'Startup Digital', 'UMKM Health Retail'];

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
          e('a', { href: '#about', className: 'btn btn-secondary' }, 'Tentang Somansa'),
        ),
        e(
          'div',
          { className: 'audience-pills' },
          ...audiences.map((item) => e('span', { className: 'audience-pill', key: item }, item)),
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
              className: 'product-card reveal tilt',
              style: { animationDelay: `${i * 70}ms` },
              key: product.name,
            },
            e(
              'div',
              { className: 'product-head' },
              e('span', null, String(i + 1).padStart(2, '0')),
              e('div', { className: 'product-icon', 'aria-hidden': true }, product.icon),
            ),
            e('h4', null, product.name),
            e('p', { className: 'product-tag' }, product.tag),
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
