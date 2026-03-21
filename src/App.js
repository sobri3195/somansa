import React from 'https://esm.sh/react@18.3.1';

const e = React.createElement;

const navLinks = [
  { label: 'Layanan', href: '#services' },
  { label: 'Tentang', href: '#about' },
  { label: 'Proses', href: '#process' },
  { label: 'Kontak', href: '#contact' },
];

const stats = [
  { value: '12+', label: 'Inisiatif bisnis lintas healthtech, software, dan layanan.' },
  { value: '24/7', label: 'Komitmen support untuk operasional dan transformasi digital.' },
  { value: 'End-to-End', label: 'Dari strategi, desain produk, pengembangan, hingga implementasi.' },
];

const services = [
  {
    title: 'Strategi Digital Perusahaan',
    desc: 'Membantu perusahaan merancang fondasi digital yang relevan dengan target pasar, model bisnis, dan pertumbuhan jangka panjang.',
  },
  {
    title: 'Pengembangan Produk & Sistem',
    desc: 'Membangun website company profile, aplikasi internal, dashboard operasional, dan sistem bisnis yang stabil serta mudah dikembangkan.',
  },
  {
    title: 'Solusi HealthTech & Operasional',
    desc: 'Menghadirkan integrasi layanan kesehatan, klinik, homecare, dan alat bantu keputusan berbasis teknologi.',
  },
];

const advantages = [
  'Posisi brand yang lebih profesional dan meyakinkan.',
  'Narasi perusahaan yang jelas untuk investor, partner, dan klien.',
  'Eksekusi cepat dengan pendekatan yang tetap terukur.',
  'Desain modern yang fokus pada kredibilitas dan konversi.',
];

const process = [
  {
    step: '01',
    title: 'Discovery',
    desc: 'Kami memahami bisnis, target audiens, dan objective utama perusahaan Anda.',
  },
  {
    step: '02',
    title: 'Positioning',
    desc: 'Menyusun pesan inti, struktur landing page, dan arah komunikasi brand.',
  },
  {
    step: '03',
    title: 'Execution',
    desc: 'Menerjemahkan strategi menjadi tampilan, copy, dan pengalaman digital yang siap dipakai.',
  },
];

function renderStats(item) {
  return e('article', { className: 'stat-card', key: item.value }, [
    e('strong', { key: 'value' }, item.value),
    e('span', { key: 'label' }, item.label),
  ]);
}

function renderService(item) {
  return e('article', { className: 'highlight-card', key: item.title }, [
    e('h3', { key: 'title' }, item.title),
    e('p', { key: 'desc' }, item.desc),
  ]);
}

function renderAdvantage(item) {
  return e('article', { className: 'pillar-card', key: item }, [
    e('h3', { key: 'title' }, item),
    e(
      'p',
      { key: 'desc' },
      'Disusun untuk membantu audiens memahami nilai perusahaan Anda dengan cepat dan meyakinkan.',
    ),
  ]);
}

function renderProcess(item) {
  return e('article', { className: 'roadmap-card', key: item.step }, [
    e('span', { key: 'step' }, item.step),
    e('h3', { key: 'title' }, item.title),
    e('p', { key: 'desc' }, item.desc),
  ]);
}

export function App() {
  return e('div', { className: 'page-shell' }, [
    e('div', { className: 'background-grid', key: 'grid' }),
    e('div', { className: 'background-glow glow-left', key: 'glow-left' }),
    e('div', { className: 'background-glow glow-right', key: 'glow-right' }),
    e('header', { className: 'hero', id: 'top', key: 'hero' }, [
      e('nav', { className: 'nav', key: 'nav' }, [
        e('a', { className: 'brand', href: '#top', key: 'brand' }, 'SOMANSA'),
        e(
          'div',
          { className: 'nav-links', key: 'links' },
          navLinks.map((link) => e('a', { href: link.href, key: link.href }, link.label)),
        ),
      ]),
      e('div', { className: 'hero-grid', key: 'hero-grid' }, [
        e('section', { className: 'hero-copy', key: 'copy' }, [
          e('p', { className: 'hero-badge', key: 'badge' }, 'Company Landing Page'),
          e('h1', { key: 'title' }, 'Landing page perusahaan yang rapi, profesional, dan menjual value bisnis.'),
          e(
            'p',
            { className: 'hero-desc', key: 'desc' },
            'Jika Anda ingin halaman utama yang lebih meyakinkan untuk calon klien, partner, maupun investor, Somansa membantu menyusun narasi perusahaan menjadi presentasi digital yang jelas, elegan, dan fokus pada hasil.',
          ),
          e('div', { className: 'hero-actions', key: 'actions' }, [
            e('a', { className: 'button button-primary', href: '#contact', key: 'primary' }, 'Konsultasi Sekarang'),
            e('a', { className: 'button button-secondary', href: '#about', key: 'secondary' }, 'Lihat Profil'),
          ]),
          e('div', { className: 'stats-grid', key: 'stats' }, stats.map(renderStats)),
        ]),
        e('aside', { className: 'showcase-card', key: 'showcase' }, [
          e('p', { className: 'mini-label', key: 'label' }, 'Kenapa landing page penting?'),
          e('h3', { key: 'title' }, 'Karena kesan pertama menentukan apakah pengunjung lanjut tertarik atau langsung pergi.'),
          e('ul', { className: 'showcase-list', key: 'list' }, [
            e('li', { key: '1' }, 'Menjelaskan siapa perusahaan Anda dalam beberapa detik.'),
            e('li', { key: '2' }, 'Menonjolkan layanan utama secara ringkas dan mudah dipahami.'),
            e('li', { key: '3' }, 'Mengarahkan pengunjung untuk menghubungi tim Anda.'),
          ]),
        ]),
      ]),
    ]),
    e('main', { key: 'main' }, [
      e('section', { className: 'section section-split', id: 'about', key: 'about' }, [
        e('div', { className: 'section-header', key: 'header' }, [
          e('p', { className: 'section-label', key: 'label' }, 'Tentang Perusahaan'),
          e('h2', { key: 'title' }, 'Susunan yang tepat membuat company profile terasa lebih kuat.'),
          e(
            'p',
            { className: 'section-desc', key: 'desc' },
            'Landing page perusahaan sebaiknya tidak hanya terlihat bagus, tetapi juga menyampaikan positioning, keunggulan, dan ajakan bertindak dengan runtut. Karena itu struktur halaman perlu disusun ulang agar pesan brand terasa lebih matang.',
          ),
        ]),
        e('article', { className: 'spotlight-card', key: 'spotlight' }, [
          e('p', { className: 'mini-label', key: 'label' }, 'Yang kami susun ulang'),
          e('h2', { key: 'title' }, 'Headline, value proposition, layanan, kredibilitas, dan CTA utama.'),
          e(
            'p',
            { key: 'desc' },
            'Dengan alur yang lebih strategis, pengunjung dapat memahami bisnis Anda lebih cepat dan lebih percaya untuk melanjutkan komunikasi.',
          ),
        ]),
      ]),
      e('section', { className: 'section', id: 'services', key: 'services' }, [
        e('div', { className: 'section-header', key: 'header' }, [
          e('p', { className: 'section-label', key: 'label' }, 'Layanan Utama'),
          e('h2', { key: 'title' }, 'Apa yang bisa ditampilkan di landing page perusahaan.'),
        ]),
        e('div', { className: 'cards-grid cards-grid-3', key: 'grid' }, services.map(renderService)),
      ]),
      e('section', { className: 'section', key: 'advantages' }, [
        e('div', { className: 'section-header', key: 'header' }, [
          e('p', { className: 'section-label', key: 'label' }, 'Keunggulan'),
          e('h2', { key: 'title' }, 'Elemen yang membuat landing page terasa profesional.'),
        ]),
        e('div', { className: 'cards-grid cards-grid-2', key: 'grid' }, advantages.map(renderAdvantage)),
      ]),
      e('section', { className: 'section', id: 'process', key: 'process' }, [
        e('div', { className: 'section-header', key: 'header' }, [
          e('p', { className: 'section-label', key: 'label' }, 'Alur Kerja'),
          e('h2', { key: 'title' }, 'Proses penyusunan landing page yang lebih terarah.'),
        ]),
        e('div', { className: 'cards-grid cards-grid-3', key: 'grid' }, process.map(renderProcess)),
      ]),
      e('section', { className: 'section', id: 'contact', key: 'contact' }, [
        e('div', { className: 'cta-panel', key: 'panel' }, [
          e('div', { key: 'copy' }, [
            e('p', { className: 'section-label', key: 'label' }, 'Siap disusun ulang'),
            e('h2', { key: 'title' }, 'Kalau mau, saya bisa lanjut bantu susun versi landing page perusahaan yang lebih spesifik.'),
            e(
              'p',
              { className: 'section-desc', key: 'desc' },
              'Misalnya untuk perusahaan teknologi, klinik, agency, kontraktor, manufaktur, atau bisnis jasa profesional. Tinggal tentukan target audiens dan layanan utamanya.',
            ),
          ]),
          e('div', { className: 'cta-actions', key: 'actions' }, [
            e('a', { className: 'button button-primary', href: 'mailto:hello@somansa.id', key: 'email' }, 'Hubungi Tim'),
            e('a', { className: 'button button-secondary', href: 'https://wa.me/6280000000000', key: 'whatsapp' }, 'Diskusi Konsep'),
          ]),
        ]),
      ]),
    ]),
    e('footer', { className: 'footer', key: 'footer' }, `© ${new Date().getFullYear()} Somansa. Company landing page concept.`),
  ]);
}
