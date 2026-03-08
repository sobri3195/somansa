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

export function App() {
  return React.createElement(
    'div',
    { className: 'page' },
    React.createElement(
      'header',
      { className: 'hero' },
      React.createElement(
        'nav',
        { className: 'nav' },
        React.createElement('div', { className: 'brand' }, 'SOMANSA'),
        React.createElement('a', { className: 'cta', href: '#products' }, 'Explore Produk'),
      ),
      React.createElement(
        'div',
        { className: 'hero-content' },
        React.createElement('p', { className: 'badge' }, 'Innovating Health, Technology, & Lifestyle'),
        React.createElement('h1', null, 'Perusahaan Multi-Produk yang Membangun Masa Depan dari Indonesia'),
        React.createElement(
          'p',
          { className: 'lead' },
          'Somansa menghadirkan solusi terintegrasi untuk kesehatan, teknologi, dan layanan modern dengan fokus pada dampak nyata, desain unggul, dan inovasi berkelanjutan.',
        ),
        React.createElement(
          'div',
          { className: 'hero-actions' },
          React.createElement('a', { href: '#products', className: 'btn btn-primary' }, 'Lihat Portofolio'),
          React.createElement('a', { href: '#about', className: 'btn btn-secondary' }, 'Tentang Somansa'),
        ),
      ),
      React.createElement('div', { className: 'glow glow-a' }),
      React.createElement('div', { className: 'glow glow-b' }),
    ),
    React.createElement(
      'section',
      { id: 'about', className: 'highlights section' },
      ...highlights.map((item) =>
        React.createElement(
          'article',
          { className: 'card float', key: item.title },
          React.createElement('h3', null, item.title),
          React.createElement('p', null, item.desc),
        ),
      ),
    ),
    React.createElement(
      'section',
      { id: 'products', className: 'section products' },
      React.createElement(
        'div',
        { className: 'section-head' },
        React.createElement('p', { className: 'badge' }, 'Produk & Unit Bisnis'),
        React.createElement('h2', null, '12 Pilar Bisnis Somansa'),
      ),
      React.createElement(
        'div',
        { className: 'grid' },
        ...products.map((product, i) =>
          React.createElement(
            'div',
            {
              className: 'product-card reveal',
              style: { animationDelay: `${i * 70}ms` },
              key: product,
            },
            React.createElement('span', null, String(i + 1).padStart(2, '0')),
            React.createElement('h4', null, product),
          ),
        ),
      ),
    ),
    React.createElement(
      'section',
      { className: 'section banner' },
      React.createElement('h2', null, 'Ready to collaborate with Somansa?'),
      React.createElement(
        'p',
        null,
        'Kami membuka kolaborasi untuk institusi kesehatan, startup, UMKM, dan transformasi digital enterprise.',
      ),
      React.createElement('a', { className: 'btn btn-primary', href: 'mailto:hello@somansa.id' }, 'Hubungi Tim Somansa'),
    ),
    React.createElement('footer', { className: 'footer' }, `© ${new Date().getFullYear()} Somansa. All rights reserved.`),
  );
}
