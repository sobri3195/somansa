import React from 'https://esm.sh/react@18.3.1';

const e = React.createElement;

const products = [
  'AI Radiologi & Lab',
  'SIMRS & SIMKlinik',
  'HomeCare',
  'Apotek',
  'Software House',
  'Edukasi Dokter',
];

export function App() {
  return e('div', { className: 'page' }, [
    e('header', { className: 'hero', key: 'hero' }, [
      e('nav', { className: 'nav', key: 'nav' }, [
        e('div', { className: 'brand', key: 'brand' }, [
          e('span', { className: 'brand-mark', key: 'mark' }, 'S'),
          'SOMANSA',
        ]),
        e('a', { className: 'btn btn-secondary', href: '#kontak', key: 'contact-nav' }, 'Kontak'),
      ]),
      e('div', { className: 'hero-grid', key: 'hero-grid' }, [
        e('div', { className: 'hero-copy', key: 'copy' }, [
          e('p', { className: 'eyebrow', key: 'eyebrow' }, 'Health • Tech'),
          e('h1', { key: 'title' }, 'Satu ekosistem produk kesehatan.'),
          e('p', { className: 'hero-lead', key: 'lead' }, 'Lebih simpel, jelas, dan langsung ke inti.'),
          e('div', { className: 'hero-actions', key: 'actions' }, [
            e('a', { className: 'btn btn-primary', href: '#produk', key: 'products' }, 'Lihat Produk'),
            e('a', { className: 'btn btn-ghost', href: 'mailto:hello@somansa.id', key: 'email' }, 'Email Kami'),
          ]),
        ]),
        e('div', { className: 'hero-panel', key: 'panel' }, [
          e('div', { className: 'panel-surface', key: 'surface' }, [
            e('p', { className: 'mini-label', key: 'mini-label' }, 'Fokus'),
            e('h2', { key: 'heading' }, 'Produk digital untuk klinik, dokter, dan pasien.'),
            e('div', { className: 'panel-list', key: 'list' }, [
              e('div', { key: 'point-1' }, [
                e('strong', { key: 'title' }, 'Cepat'),
                e('span', { key: 'desc' }, 'Implementasi ringkas.'),
              ]),
              e('div', { key: 'point-2' }, [
                e('strong', { key: 'title' }, 'Terhubung'),
                e('span', { key: 'desc' }, 'Data lebih rapi.'),
              ]),
              e('div', { key: 'point-3' }, [
                e('strong', { key: 'title' }, 'Siap Scale'),
                e('span', { key: 'desc' }, 'Mudah dikembangkan.'),
              ]),
            ]),
          ]),
          e('div', { className: 'panel-glow panel-glow-a', 'aria-hidden': 'true', key: 'glow-a' }),
          e('div', { className: 'panel-glow panel-glow-b', 'aria-hidden': 'true', key: 'glow-b' }),
        ]),
      ]),
    ]),
    e('main', { key: 'main' }, [
      e('section', { id: 'produk', className: 'section products-section', key: 'products' }, [
        e('div', { className: 'section-heading compact', key: 'heading' }, [
          e('p', { className: 'eyebrow', key: 'eyebrow' }, 'Produk'),
          e('h2', { key: 'title' }, 'Yang kami bangun'),
        ]),
        e(
          'div',
          { className: 'products-grid', key: 'products-grid' },
          products.map((product) =>
            e('article', { className: 'product-card', key: product }, [
              e('h3', { key: 'title' }, product),
              e('p', { key: 'desc' }, 'Bagian dari ekosistem Somansa.'),
            ]),
          ),
        ),
      ]),
      e('section', { id: 'kontak', className: 'section cta-section', key: 'cta' }, [
        e('div', { className: 'cta-card', key: 'card' }, [
          e('p', { className: 'eyebrow', key: 'eyebrow' }, 'Kolaborasi'),
          e('h2', { key: 'title' }, 'Butuh solusi digital kesehatan?'),
          e('a', { className: 'btn btn-primary', href: 'mailto:hello@somansa.id', key: 'contact' }, 'Hubungi Somansa'),
        ]),
      ]),
    ]),
    e('footer', { className: 'footer', key: 'footer' }, `© ${new Date().getFullYear()} Somansa.`),
  ]);
}
