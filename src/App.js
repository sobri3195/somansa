import React from 'https://esm.sh/react@18.3.1';

const e = React.createElement;

const navLinks = [
  { label: 'Tentang', href: '#tentang' },
  { label: 'Layanan', href: '#layanan' },
  { label: 'Portofolio', href: '#portofolio' },
  { label: 'Kontak', href: '#kontak' },
];

const stats = [
  ['12+', 'Produk & unit bisnis aktif'],
  ['30+', 'Kolaborasi dengan tim kesehatan & digital'],
  ['99.9%', 'Target reliability layanan'],
];

const services = [
  {
    title: 'HealthTech Product Development',
    desc: 'Membangun platform klinik, homecare, dan sistem medis yang siap scale dengan fondasi aman.',
  },
  {
    title: 'AI & Automation',
    desc: 'Mengotomatiskan proses operasional dan analitik agar tim medis lebih fokus ke kualitas layanan.',
  },
  {
    title: 'Enterprise Modernization',
    desc: 'Transformasi sistem lama ke ekosistem digital modern tanpa mengganggu operasional harian.',
  },
];

const portfolios = [
  'CogniScan — AI Radiologi & Lab',
  'Kaist Medika — Klinik & HomeCare',
  'SIMRS / SIMKlinik',
  'Medical Commerce Platform',
  'Website Ujian Dokter',
  'Apotek & Retail Health',
];

const process = [
  ['01', 'Discovery & Strategy', 'Audit kebutuhan bisnis, regulasi, dan peta implementasi prioritas.'],
  ['02', 'Design & Build', 'Perancangan UI/UX, arsitektur sistem, dan pengembangan produk bertahap.'],
  ['03', 'Launch & Optimize', 'Go-live terstruktur, monitoring KPI, dan iterasi berkelanjutan.'],
];

function sectionTitle(kicker, title, desc) {
  return e('div', { className: 'section-title' }, [
    e('p', { className: 'kicker', key: 'kicker' }, kicker),
    e('h2', { key: 'title' }, title),
    desc ? e('p', { className: 'section-desc', key: 'desc' }, desc) : null,
  ]);
}

export function App() {
  return e('div', { className: 'page' }, [
    e('header', { className: 'hero', key: 'hero' }, [
      e('nav', { className: 'nav', key: 'nav' }, [
        e('div', { className: 'brand', key: 'brand' }, [
          e('img', { src: '/somansa-logo.svg', alt: 'Somansa logo', key: 'logo' }),
          e('span', { key: 'name' }, 'SOMANSA'),
        ]),
        e(
          'div',
          { className: 'nav-links', key: 'links' },
          navLinks.map((link) => e('a', { href: link.href, key: link.href }, link.label)),
        ),
        e('a', { className: 'btn btn-primary', href: '#kontak', key: 'cta' }, 'Konsultasi'),
      ]),
      e('div', { className: 'hero-content', key: 'content' }, [
        e('p', { className: 'kicker', key: 'k' }, 'Company Profile'),
        e('h1', { key: 'h1' }, 'Mitra Transformasi Digital untuk Kesehatan, Teknologi, dan Bisnis Modern.'),
        e(
          'p',
          { className: 'lead', key: 'lead' },
          'Somansa menghadirkan solusi digital terintegrasi dari strategi hingga implementasi untuk membantu organisasi tumbuh lebih cepat dan efisien.',
        ),
        e('div', { className: 'hero-actions', key: 'actions' }, [
          e('a', { className: 'btn btn-primary', href: '#portofolio', key: 'btn1' }, 'Lihat Portofolio'),
          e('a', { className: 'btn btn-outline', href: '#tentang', key: 'btn2' }, 'Pelajari Somansa'),
        ]),
      ]),
      e(
        'div',
        { className: 'stats', key: 'stats' },
        stats.map((item) =>
          e('article', { className: 'stat-card', key: item[0] }, [
            e('strong', { key: 'n' }, item[0]),
            e('span', { key: 'd' }, item[1]),
          ]),
        ),
      ),
    ]),

    e('section', { id: 'tentang', className: 'section about', key: 'about' }, [
      sectionTitle('Tentang Kami', 'Membangun Ekosistem Digital yang Berdampak', 'Kami memadukan kekuatan teknologi, desain pengalaman pengguna, dan eksekusi produk agar setiap solusi memberikan hasil bisnis yang terukur.'),
      e('div', { className: 'about-grid', key: 'grid' }, [
        e('div', { className: 'about-card', key: 'a1' }, [e('h3', { key: 'h' }, 'Visi'), e('p', { key: 'p' }, 'Menjadi company profile digital Indonesia yang dikenal melalui produk inovatif di sektor kesehatan dan layanan modern.')]),
        e('div', { className: 'about-card', key: 'a2' }, [e('h3', { key: 'h' }, 'Misi'), e('p', { key: 'p' }, 'Menciptakan pengalaman digital yang aman, cepat, dan relevan untuk organisasi serta pengguna akhir.')]),
        e('div', { className: 'about-card', key: 'a3' }, [e('h3', { key: 'h' }, 'Value'), e('p', { key: 'p' }, 'Integrity, agility, dan impact-driven delivery pada setiap proyek dan kolaborasi jangka panjang.')]),
      ]),
    ]),

    e('section', { id: 'layanan', className: 'section', key: 'services' }, [
      sectionTitle('Layanan Utama', 'Solusi End-to-End untuk Organisasi Anda'),
      e(
        'div',
        { className: 'card-grid', key: 'service-grid' },
        services.map((service) =>
          e('article', { className: 'feature-card', key: service.title }, [
            e('h3', { key: 'h' }, service.title),
            e('p', { key: 'p' }, service.desc),
          ]),
        ),
      ),
    ]),

    e('section', { id: 'portofolio', className: 'section', key: 'portfolio' }, [
      sectionTitle('Portofolio', 'Produk & Unit Bisnis Somansa'),
      e(
        'div',
        { className: 'portfolio-list', key: 'list' },
        portfolios.map((item, idx) => e('div', { className: 'portfolio-item', key: item }, `${String(idx + 1).padStart(2, '0')} — ${item}`)),
      ),
    ]),

    e('section', { className: 'section', key: 'process' }, [
      sectionTitle('Metodologi', 'Proses Kerja yang Transparan dan Terukur'),
      e(
        'div',
        { className: 'timeline', key: 'timeline' },
        process.map((step) =>
          e('article', { className: 'timeline-item', key: step[0] }, [
            e('span', { className: 'step', key: 's' }, step[0]),
            e('h3', { key: 'h' }, step[1]),
            e('p', { key: 'p' }, step[2]),
          ]),
        ),
      ),
    ]),

    e('section', { id: 'kontak', className: 'section cta', key: 'cta-section' }, [
      e('h2', { key: 'h2' }, 'Siap berkolaborasi dengan Somansa?'),
      e('p', { key: 'p' }, 'Diskusikan kebutuhan transformasi digital perusahaan Anda bersama tim kami.'),
      e('a', { className: 'btn btn-primary', href: 'mailto:hello@somansa.id', key: 'mail' }, 'Hubungi Kami'),
    ]),

    e('footer', { className: 'footer', key: 'footer' }, `© ${new Date().getFullYear()} Somansa. All rights reserved.`),
  ]);
}
