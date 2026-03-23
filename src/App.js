import React from 'https://esm.sh/react@18.3.1';

const e = React.createElement;

const priorities = [
  {
    title: 'Fokus pada dampak',
    desc: 'Produk dirancang untuk membantu klinik, tenaga medis, dan bisnis bergerak lebih cepat tanpa proses yang rumit.',
  },
  {
    title: 'Desain lebih jelas',
    desc: 'Tampilan yang rapi memudahkan visitor memahami apa yang Somansa bangun hanya dalam beberapa detik.',
  },
  {
    title: 'Siap berkembang',
    desc: 'Setiap unit bisnis dibangun dengan fondasi digital yang kuat agar mudah dikembangkan ke tahap berikutnya.',
  },
];

const products = [
  'AI Radiologi & Lab',
  'SIMRS dan SIMKlinik',
  'HomeCare & Layanan Pasien',
  'Apotek & Retail Kesehatan',
  'Edukasi & Tools Dokter',
  'Software House',
];

const metrics = [
  ['12+', 'unit bisnis yang saling terhubung'],
  ['Health', 'sebagai fokus utama inovasi'],
  ['Fast', 'dalam eksperimen, validasi, dan eksekusi'],
];

function sectionHeading(eyebrow, title, desc, compact = false) {
  return e('div', { className: `section-heading${compact ? ' compact' : ''}` }, [
    e('p', { className: 'eyebrow', key: `${title}-eyebrow` }, eyebrow),
    e('h2', { key: `${title}-title` }, title),
    desc ? e('p', { className: 'section-intro', key: `${title}-desc` }, desc) : null,
  ]);
}

export function App() {
  return e('div', { className: 'page' }, [
    e('header', { className: 'hero', key: 'hero' }, [
      e('nav', { className: 'nav', key: 'nav' }, [
        e('div', { className: 'brand', key: 'brand' }, [
          e('span', { className: 'brand-mark', key: 'mark' }, 'S'),
          'SOMANSA',
        ]),
        e('div', { className: 'nav-links', key: 'links' }, [
          e('a', { href: '#tentang', key: 'about' }, 'Tentang'),
          e('a', { href: '#produk', key: 'products' }, 'Produk'),
          e('a', { href: '#kontak', key: 'contact' }, 'Kontak'),
        ]),
        e('a', { className: 'btn btn-secondary', href: '#kontak', key: 'discuss' }, 'Diskusi'),
      ]),
      e('div', { className: 'hero-grid', key: 'hero-grid' }, [
        e('div', { className: 'hero-copy', key: 'copy' }, [
          e('p', { className: 'eyebrow', key: 'eyebrow' }, 'Health • Technology • Lifestyle'),
          e('h1', { key: 'title' }, 'Landing page lebih sederhana, tapi tetap terasa premium.'),
          e(
            'p',
            { className: 'hero-lead', key: 'lead' },
            'Somansa membangun ekosistem produk kesehatan dan teknologi yang praktis, modern, dan relevan untuk kebutuhan bisnis nyata.',
          ),
          e('div', { className: 'hero-actions', key: 'actions' }, [
            e('a', { className: 'btn btn-primary', href: '#produk', key: 'products' }, 'Lihat Produk Utama'),
            e('a', { className: 'btn btn-ghost', href: '#tentang', key: 'learn' }, 'Pelajari Somansa'),
          ]),
          e('div', { className: 'hero-note', key: 'note' }, [
            e('strong', { key: 'title' }, 'Simple message, stronger impression.'),
            e(
              'span',
              { key: 'desc' },
              'Struktur konten dirapikan agar visitor lebih cepat memahami value Somansa tanpa distraksi berlebih.',
            ),
          ]),
        ]),
        e('div', { className: 'hero-panel', key: 'panel' }, [
          e('div', { className: 'panel-surface', key: 'surface' }, [
            e('p', { className: 'mini-label', key: 'mini-label' }, 'Core focus'),
            e('h2', { key: 'heading' }, 'Produk digital yang mendekatkan layanan kesehatan dengan pengalaman yang lebih baik.'),
            e('div', { className: 'panel-list', key: 'list' }, [
              e('div', { key: 'integrated' }, [
                e('strong', { key: 'title' }, 'Integrated'),
                e('span', { key: 'desc' }, 'Dari diagnosis, operasional, hingga layanan pasien.'),
              ]),
              e('div', { key: 'efficient' }, [
                e('strong', { key: 'title' }, 'Efficient'),
                e('span', { key: 'desc' }, 'Lebih sedikit noise, lebih banyak kejelasan.'),
              ]),
              e('div', { key: 'scalable' }, [
                e('strong', { key: 'title' }, 'Scalable'),
                e('span', { key: 'desc' }, 'Siap dipakai untuk validasi cepat maupun pertumbuhan jangka panjang.'),
              ]),
            ]),
          ]),
          e('div', { className: 'panel-glow panel-glow-a', 'aria-hidden': 'true', key: 'glow-a' }),
          e('div', { className: 'panel-glow panel-glow-b', 'aria-hidden': 'true', key: 'glow-b' }),
        ]),
      ]),
    ]),
    e('main', { key: 'main' }, [
      e('section', { id: 'tentang', className: 'section intro-section', key: 'about' }, [
        sectionHeading(
          'Tentang Somansa',
          'Lebih fokus, lebih ringan, lebih mudah dipahami.',
          'Redesign ini mengutamakan hierarki visual yang bersih: headline kuat, penjelasan singkat, dan blok konten yang cukup untuk membangun rasa percaya.',
        ),
        e(
          'div',
          { className: 'priority-grid', key: 'priority-grid' },
          priorities.map((item, index) =>
            e('article', { className: 'info-card', key: item.title }, [
              e('span', { className: 'card-kicker', key: 'number' }, `0${index + 1}`),
              e('h3', { key: 'title' }, item.title),
              e('p', { key: 'desc' }, item.desc),
            ]),
          ),
        ),
      ]),
      e('section', { id: 'produk', className: 'section products-section', key: 'products' }, [
        sectionHeading('Produk Utama', 'Unit bisnis yang paling mudah dikenali visitor.', null, true),
        e(
          'div',
          { className: 'products-grid', key: 'products-grid' },
          products.map((product) =>
            e('article', { className: 'product-card', key: product }, [
              e('h3', { key: 'title' }, product),
              e(
                'p',
                { key: 'desc' },
                'Bagian dari ekosistem Somansa yang menghubungkan kebutuhan operasional dan pengalaman pengguna.',
              ),
            ]),
          ),
        ),
      ]),
      e('section', { className: 'section metrics-section', key: 'metrics' }, [
        e(
          'div',
          { className: 'metrics-panel', key: 'panel' },
          metrics.map(([value, label]) =>
            e('div', { className: 'metric-item', key: label }, [
              e('strong', { key: 'value' }, value),
              e('span', { key: 'label' }, label),
            ]),
          ),
        ),
      ]),
      e('section', { id: 'kontak', className: 'section cta-section', key: 'cta' }, [
        e('div', { className: 'cta-card', key: 'card' }, [
          e('p', { className: 'eyebrow', key: 'eyebrow' }, 'Kolaborasi'),
          e('h2', { key: 'title' }, 'Butuh landing page atau produk digital yang terasa lebih jelas dan meyakinkan?'),
          e(
            'p',
            { key: 'desc' },
            'Somansa terbuka untuk kolaborasi di ranah healthtech, software, dan pengembangan produk digital yang berorientasi hasil.',
          ),
          e('a', { className: 'btn btn-primary', href: 'mailto:hello@somansa.id', key: 'contact' }, 'Hubungi Somansa'),
        ]),
      ]),
    ]),
    e('footer', { className: 'footer', key: 'footer' }, `© ${new Date().getFullYear()} Somansa. Crafted with a cleaner direction.`),
  ]);
}
