import React from 'https://esm.sh/react@18.3.1';

const e = React.createElement;

const navLinks = [
  { label: 'Tentang', href: '#tentang' },
  { label: 'Keunggulan', href: '#keunggulan' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Roadmap', href: '#roadmap' },
  { label: 'Kontak', href: '#kontak' },
];

const stats = [
  { value: '12+', label: 'Unit bisnis dalam ekosistem Somansa' },
  { value: '< 30 hari', label: 'Rata-rata sprint untuk validasi solusi baru' },
  { value: '24/7', label: 'Fokus pada operasional digital yang selalu aktif' },
];

const capabilityPoints = [
  'AI & workflow untuk layanan kesehatan modern',
  'Landing page, dashboard, dan software yang siap dipresentasikan',
  'Visual branding premium agar bisnis terlihat lebih terpercaya',
];

const highlights = [
  {
    title: 'Ekosistem terpadu',
    desc: 'Seluruh lini bisnis dirangkai agar saling menguatkan, mulai dari diagnostic tools sampai commerce dan operasional klinik.',
  },
  {
    title: 'Responsif di setiap layar',
    desc: 'Tata letak disusun ulang supaya tetap nyaman dibaca pada mobile, tablet, hingga desktop widescreen.',
  },
  {
    title: 'Call-to-action lebih kuat',
    desc: 'Alur konten diarahkan untuk membantu visitor memahami value Somansa dan bergerak ke langkah berikutnya.',
  },
];

const pillars = [
  {
    title: 'HealthTech Products',
    desc: 'AI diagnostik, workflow klinik, dan layanan pasien yang dirancang untuk mempercepat keputusan dan meningkatkan kualitas layanan.',
    icon: '✦',
  },
  {
    title: 'Software House Delivery',
    desc: 'Custom website, dashboard, dan aplikasi internal dengan pendekatan yang rapi, cepat, dan berorientasi hasil bisnis.',
    icon: '◎',
  },
  {
    title: 'Growth & Brand Experience',
    desc: 'Desain presentasi digital yang membuat brand terasa lebih premium ketika dilihat calon partner maupun pelanggan.',
    icon: '◈',
  },
];

const products = [
  {
    title: 'CogniScan',
    tag: 'AI Radiologi & Lab',
    desc: 'Platform kecerdasan buatan untuk membantu pembacaan hasil dan mempercepat alur diagnostik.',
    image: '/src/product-cogniscan.svg',
  },
  {
    title: 'Kaist Medika',
    tag: 'Klinik & Homecare',
    desc: 'Pengalaman layanan pasien yang lebih terstruktur dari kunjungan klinik hingga perawatan di rumah.',
    image: '/src/product-homecare.svg',
  },
  {
    title: 'MedCommerce',
    tag: 'Retail & Commerce',
    desc: 'Distribusi produk kesehatan, alat medis, dan kebutuhan klinik dalam satu alur yang efisien.',
    image: '/src/product-medcommerce.svg',
  },
  {
    title: 'SIMRS / SIMKlinik',
    tag: 'Operational System',
    desc: 'Sistem informasi yang membantu operasional fasilitas kesehatan agar lebih tertata dan mudah dikembangkan.',
    image: '/src/animated-flow.svg',
  },
  {
    title: 'Doctor Education',
    tag: 'Assessment Platform',
    desc: 'Website ujian dan modul digital yang mendukung pembelajaran tenaga medis secara modern.',
    image: '/src/animated-pulse.svg',
  },
  {
    title: 'Lifestyle Ventures',
    tag: 'Multi-business Expansion',
    desc: 'Ekspansi bisnis ke sektor pendukung yang tetap sejalan dengan visi pertumbuhan ekosistem Somansa.',
    image: '/src/animated-orbit.svg',
  },
];

const roadmap = [
  {
    step: '01',
    title: 'Positioning',
    desc: 'Menentukan narasi utama, target audience, dan pesan yang paling penting untuk disampaikan pada halaman.',
  },
  {
    step: '02',
    title: 'Design System',
    desc: 'Menyusun visual hierarchy, warna, spacing, dan komponen agar brand terasa lebih matang dan konsisten.',
  },
  {
    step: '03',
    title: 'Conversion Journey',
    desc: 'Mengarahkan pengunjung dari impresi pertama menuju eksplorasi portfolio dan ajakan berdiskusi dengan lebih natural.',
  },
];

function sectionHeader(label, title, desc) {
  return e('div', { className: 'section-header' }, [
    e('p', { className: 'section-label', key: 'label' }, label),
    e('h2', { key: 'title' }, title),
    desc ? e('p', { className: 'section-desc', key: 'desc' }, desc) : null,
  ]);
}

function renderStat(item) {
  return e('article', { className: 'stat-card', key: item.value }, [
    e('strong', { key: 'value' }, item.value),
    e('span', { key: 'label' }, item.label),
  ]);
}

function renderHighlight(item) {
  return e('article', { className: 'highlight-card', key: item.title }, [
    e('h3', { key: 'title' }, item.title),
    e('p', { key: 'desc' }, item.desc),
  ]);
}

function renderPillar(item) {
  return e('article', { className: 'pillar-card', key: item.title }, [
    e('span', { className: 'pillar-icon', key: 'icon' }, item.icon),
    e('h3', { key: 'title' }, item.title),
    e('p', { key: 'desc' }, item.desc),
  ]);
}

function renderProduct(item, index) {
  return e('article', { className: 'product-card', key: item.title }, [
    e('div', { className: 'product-visual', key: 'visual' }, [
      e('img', { src: item.image, alt: item.title, key: 'image' }),
      e('span', { className: 'product-index', key: 'index' }, String(index + 1).padStart(2, '0')),
    ]),
    e('div', { className: 'product-copy', key: 'copy' }, [
      e('span', { className: 'product-tag', key: 'tag' }, item.tag),
      e('h3', { key: 'title' }, item.title),
      e('p', { key: 'desc' }, item.desc),
    ]),
  ]);
}

function renderRoadmap(item) {
  return e('article', { className: 'roadmap-card', key: item.step }, [
    e('span', { className: 'roadmap-step', key: 'step' }, item.step),
    e('div', { key: 'copy' }, [
      e('h3', { key: 'title' }, item.title),
      e('p', { key: 'desc' }, item.desc),
    ]),
  ]);
}

export function App() {
  return e('div', { className: 'page-shell' }, [
    e('div', { className: 'background-grid', key: 'grid' }),
    e('div', { className: 'background-glow glow-left', key: 'glow-left' }),
    e('div', { className: 'background-glow glow-right', key: 'glow-right' }),
    e('header', { className: 'hero', id: 'top', key: 'hero' }, [
      e('nav', { className: 'nav', key: 'nav' }, [
        e('a', { className: 'brand', href: '#top', key: 'brand' }, [
          e('img', { src: '/somansa-logo.svg', alt: 'Somansa logo', key: 'logo' }),
          e('span', { key: 'text' }, 'SOMANSA'),
        ]),
        e(
          'div',
          { className: 'nav-links', key: 'links' },
          navLinks.map((link) => e('a', { href: link.href, key: link.href }, link.label)),
        ),
        e('a', { className: 'button button-secondary nav-cta', href: '#kontak', key: 'cta' }, 'Mulai Diskusi'),
      ]),
      e('div', { className: 'hero-grid', key: 'hero-grid' }, [
        e('section', { className: 'hero-copy', key: 'copy' }, [
          e('p', { className: 'hero-badge', key: 'badge' }, 'HealthTech • Software House • Business Ecosystem'),
          e('h1', { key: 'title' }, 'Tampilan Somansa kini lebih premium, menarik, dan jauh lebih siap untuk semua ukuran layar.'),
          e(
            'p',
            { className: 'hero-desc', key: 'desc' },
            'Landing page ini disusun ulang agar terasa lebih hidup: visual lebih kuat, hirarki konten lebih jelas, dan pengalaman mobile lebih nyaman untuk calon partner maupun pelanggan.',
          ),
          e('div', { className: 'hero-actions', key: 'actions' }, [
            e('a', { className: 'button button-primary', href: '#portfolio', key: 'primary' }, 'Lihat Portfolio'),
            e('a', { className: 'button button-secondary', href: '#tentang', key: 'secondary' }, 'Pelajari Somansa'),
          ]),
          e('div', { className: 'stats-grid', key: 'stats' }, stats.map(renderStat)),
        ]),
        e('section', { className: 'hero-showcase', key: 'showcase' }, [
          e('article', { className: 'showcase-card spotlight-card', key: 'spotlight' }, [
            e('p', { className: 'mini-label', key: 'label' }, 'Why this redesign works'),
            e('h2', { key: 'title' }, 'Pesan utama lebih cepat tertangkap dalam beberapa detik pertama.'),
            e(
              'ul',
              { className: 'capability-list', key: 'list' },
              capabilityPoints.map((point) => e('li', { key: point }, point)),
            ),
          ]),
          e('article', { className: 'showcase-card orbit-card', key: 'orbit' }, [
            e('img', { src: '/src/health-illustration.svg', alt: 'Health illustration', key: 'illustration' }),
            e('div', { className: 'orbit-copy', key: 'copy' }, [
              e('span', { className: 'mini-label', key: 'label' }, 'Responsive experience'),
              e('strong', { key: 'title' }, 'Visual cards, spacing, dan CTA dioptimalkan untuk desktop sampai mobile.'),
            ]),
          ]),
        ]),
      ]),
    ]),
    e('main', { key: 'main' }, [
      e('section', { className: 'section intro-section', id: 'tentang', key: 'intro' }, [
        sectionHeader(
          'Tentang Somansa',
          'Website sekarang terasa seperti halaman presentasi bisnis yang lebih meyakinkan.',
          'Selain mempercantik tampilan, struktur section disusun ulang agar visitor bisa memahami value Somansa, melihat portfolio utama, lalu terdorong untuk menghubungi tim.',
        ),
        e('div', { className: 'highlight-grid', key: 'highlights' }, highlights.map(renderHighlight)),
      ]),
      e('section', { className: 'section', id: 'keunggulan', key: 'pillars' }, [
        sectionHeader('Keunggulan', 'Tiga pilar utama yang membuat brand Somansa tampil lebih kuat.'),
        e('div', { className: 'pillar-grid', key: 'grid' }, pillars.map(renderPillar)),
      ]),
      e('section', { className: 'section portfolio-section', id: 'portfolio', key: 'portfolio' }, [
        sectionHeader(
          'Portfolio Utama',
          'Setiap lini bisnis tampil dalam kartu visual yang lebih engaging dan mudah dipindai.',
          'Grid dibuat lebih fleksibel sehingga kartu produk tetap rapi pada layar lebar, tablet, maupun smartphone.',
        ),
        e('div', { className: 'product-grid', key: 'products' }, products.map(renderProduct)),
      ]),
      e('section', { className: 'section roadmap-section', id: 'roadmap', key: 'roadmap' }, [
        sectionHeader('Roadmap Pengalaman', 'Alur informasi dibuat sederhana supaya halaman terasa nyaman di-scroll.'),
        e('div', { className: 'roadmap-grid', key: 'grid' }, roadmap.map(renderRoadmap)),
      ]),
      e('section', { className: 'section cta-section', id: 'kontak', key: 'cta' }, [
        e('div', { className: 'cta-panel', key: 'panel' }, [
          e('div', { key: 'copy' }, [
            e('p', { className: 'section-label', key: 'label' }, 'Let’s collaborate'),
            e('h2', { key: 'title' }, 'Butuh landing page, software, atau ekosistem digital yang tampil lebih profesional?'),
            e(
              'p',
              { className: 'section-desc', key: 'desc' },
              'Somansa siap berdiskusi untuk membantu bisnis kesehatan dan teknologi memiliki kehadiran digital yang lebih kuat, modern, dan scalable.',
            ),
          ]),
          e('div', { className: 'cta-actions', key: 'actions' }, [
            e('a', { className: 'button button-primary', href: 'mailto:hello@somansa.id', key: 'email' }, 'Hubungi via Email'),
            e('a', { className: 'button button-secondary', href: '#top', key: 'top' }, 'Kembali ke Atas'),
          ]),
        ]),
      ]),
    ]),
    e('footer', { className: 'footer', key: 'footer' }, [
      e('p', { key: 'text' }, `© ${new Date().getFullYear()} Somansa. Better visuals, stronger first impression.`),
    ]),
  ]);
}
