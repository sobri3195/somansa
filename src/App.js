import React from 'https://esm.sh/react@18.3.1';

const e = React.createElement;

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
  return e('div', { className: 'page' }, [
    e('header', { className: 'hero', key: 'hero' }, [
      e('nav', { className: 'nav', key: 'nav' }, [
        e('div', { className: 'brand', key: 'brand' }, 'SOMANSA'),
        e('a', { className: 'cta', href: '#products', key: 'cta' }, 'Explore Produk'),
      ]),
      e('div', { className: 'hero-content', key: 'content' }, [
        e('p', { className: 'badge', key: 'badge' }, 'Innovating Health, Technology, & Lifestyle'),
        e('h1', { key: 'title' }, 'Perusahaan Multi-Produk yang Membangun Masa Depan dari Indonesia'),
        e(
          'p',
          { className: 'lead', key: 'lead' },
          'Somansa menghadirkan solusi terintegrasi untuk kesehatan, teknologi, dan layanan modern dengan fokus pada dampak nyata, desain unggul, dan inovasi berkelanjutan.',
        ),
        e('div', { className: 'hero-actions', key: 'actions' }, [
          e('a', { href: '#products', className: 'btn btn-primary', key: 'portfolio' }, 'Lihat Portofolio'),
          e('a', { href: '#about', className: 'btn btn-secondary', key: 'about' }, 'Tentang Somansa'),
        ]),
      ]),
    ]),
    e(
      'section',
      { id: 'about', className: 'highlights section', key: 'about-section' },
      highlights.map((item) =>
        e('article', { className: 'card float', key: item.title }, [
          e('h3', { key: 'title' }, item.title),
          e('p', { key: 'desc' }, item.desc),
        ]),
      ),
    ),
    e('section', { id: 'products', className: 'section products', key: 'products' }, [
      e('div', { className: 'section-head', key: 'head' }, [
        e('p', { className: 'badge', key: 'badge' }, 'Produk & Unit Bisnis'),
        e('h2', { key: 'title' }, '12 Pilar Bisnis Somansa'),
      ]),
      e(
        'div',
        { className: 'grid', key: 'grid' },
        products.map((product, i) =>
          e('div', { className: 'product-card', key: product }, [
            e('span', { key: 'number' }, String(i + 1).padStart(2, '0')),
            e('h4', { key: 'title' }, product),
          ]),
        ),
      ),
    ]),
    e('section', { className: 'section banner', key: 'banner' }, [
      e('h2', { key: 'title' }, 'Ready to collaborate with Somansa?'),
      e(
        'p',
        { key: 'desc' },
        'Kami membuka kolaborasi untuk institusi kesehatan, startup, UMKM, dan transformasi digital enterprise.',
      ),
      e('a', { className: 'btn btn-primary', href: 'mailto:hello@somansa.id', key: 'link' }, 'Hubungi Tim Somansa'),
    ]),
    e('footer', { className: 'footer', key: 'footer' }, `© ${new Date().getFullYear()} Somansa. All rights reserved.`),
  ]);
}
