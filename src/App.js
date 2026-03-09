import React from 'https://esm.sh/react@18.3.1';

const navLinks = [
  { label: 'Layanan', href: '#layanan' },
  { label: 'Inisiatif', href: '#inisiatif' },
  { label: 'Proses', href: '#proses' },
  { label: 'Kontak', href: '#kontak' },
];

const services = [
  ['HealthTech Product Engineering', 'Perancangan dan pengembangan produk digital kesehatan dari fondasi arsitektur hingga implementasi siap operasi.'],
  ['Applied AI Solutions', 'Penerapan AI untuk decision support, automation, dan insight operasional dengan pendekatan yang terukur dan aman.'],
  ['Enterprise System Modernization', 'Modernisasi sistem inti untuk meningkatkan interoperabilitas, efisiensi lintas unit, dan ketahanan jangka panjang.'],
];

const useCases = ['CogniScan', 'Kaist Medika Ecosystem', 'SIMRS & SIMKlinik Initiative', 'Medical Commerce Stack'];

const processSteps = [
  ['Discovery & Strategic Alignment', 'Menyelaraskan prioritas bisnis, regulasi, dan kapabilitas teknologi ke dalam roadmap eksekusi yang jelas.'],
  ['Design, Build & Integration', 'Mendesain pengalaman, membangun sistem, dan mengintegrasikan komponen inti dengan standar kualitas enterprise.'],
  ['Launch, Measure & Improve', 'Meluncurkan solusi, mengukur dampak, lalu melakukan iterasi terarah untuk pertumbuhan yang berkelanjutan.'],
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
          e('p', { className: 'chip' }, 'Digital Partner • HealthTech • AI • Enterprise'),
          e('h1', null, 'Membangun Solusi HealthTech dan AI yang Siap Digunakan, Andal, dan Siap Skala.'),
          e('p', null, 'Somansa membantu organisasi merancang, membangun, dan mengembangkan produk digital HealthTech dan AI dengan pendekatan strategis dan standar kualitas enterprise.'),
          e('div', { className: 'actions' }, e('a', { className: 'btn btn-primary', href: '#kontak' }, 'Konsultasi Strategis'), e('a', { className: 'btn btn-ghost', href: '#inisiatif' }, 'Lihat Inisiatif')),
          e(
            'div',
            { className: 'trust-row' },
            e('article', null, e('strong', null, '12+'), e('span', null, 'inisiatif digital')),
            e('article', null, e('strong', null, '3'), e('span', null, 'domain inti')),
            e('article', null, e('strong', null, 'End-to-end'), e('span', null, 'delivery')),
          ),
        ),
        e(
          'aside',
          { className: 'hero-visual glass', 'aria-label': 'Abstract technology illustration' },
          e('div', { className: 'orb orb-cyan' }),
          e('div', { className: 'orb orb-violet' }),
          e('div', { className: 'dashboard' }, e('div', { className: 'line' }), e('div', { className: 'line short' }), e('div', { className: 'bars' }, e('span'), e('span'), e('span'))),
          e('p', null, 'Strategic execution partner for hospitals, clinics, startups, and enterprise institutions.'),
        ),
      ),
    ),
    e('section', { className: 'section glass', id: 'sorotan' }, e('p', { className: 'chip' }, 'Sorotan Perusahaan'), e('h2', null, 'Somansa adalah partner eksekusi, bukan sekadar vendor.'), e('p', null, 'Kami bekerja sebagai perpanjangan tim Anda: memperjelas prioritas, mempercepat realisasi, dan memastikan keputusan teknologi menghasilkan dampak bisnis yang nyata.')),
    e(
      'section',
      { className: 'section', id: 'layanan' },
      e('p', { className: 'chip' }, 'Layanan Inti'),
      e('h2', null, 'Kapabilitas utama untuk kebutuhan mission-critical.'),
      e('div', { className: 'cards-3' }, ...services.map((item) => e('article', { key: item[0], className: 'card glass' }, e('h3', null, item[0]), e('p', null, item[1])))),
    ),
    e(
      'section',
      { className: 'section', id: 'inisiatif' },
      e('p', { className: 'chip' }, 'Portfolio & Use Cases'),
      e('h2', null, 'Inisiatif terpilih dengan orientasi dampak.'),
      e('div', { className: 'cards-2' }, ...useCases.map((item, index) => e('article', { key: item, className: 'card glass usecase' }, e('span', null, `0${index + 1}`), e('h3', null, item)))),
    ),
    e(
      'section',
      { className: 'section', id: 'proses' },
      e('p', { className: 'chip' }, 'Proses Kerja'),
      e('h2', null, 'Kerangka kerja ringkas, disiplin, dan adaptif.'),
      e('div', { className: 'cards-3 process' }, ...processSteps.map((item, index) => e('article', { key: item[0], className: 'card glass' }, e('span', { className: 'step' }, `Langkah ${index + 1}`), e('h3', null, item[0]), e('p', null, item[1])))),
    ),
    e('section', { className: 'section cta glass', id: 'kontak' }, e('h2', null, 'Butuh partner eksekusi untuk inisiatif HealthTech atau AI Anda?'), e('a', { href: 'mailto:hello@somansa.id', className: 'btn btn-primary' }, 'Jadwalkan Konsultasi Strategis')),
    e('footer', { className: 'footer' }, `© ${new Date().getFullYear()} Somansa. Crafted for enterprise trust.`),
  );
}
