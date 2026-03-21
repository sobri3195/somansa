import React from 'https://esm.sh/react@18.3.1';

const e = React.createElement;

const navLinks = [
  { label: 'Tentang', href: '#tentang' },
  { label: 'Solusi', href: '#solusi' },
  { label: 'Produk', href: '#produk' },
  { label: 'Proses', href: '#proses' },
  { label: 'Kontak', href: '#kontak' },
];

const stats = [
  ['12+', 'Produk & unit bisnis dalam ekosistem Somansa'],
  ['24/7', 'Dukungan digital untuk operasional modern'],
  ['3x', 'Fokus percepatan delivery dari ide ke implementasi'],
];

const solutions = [
  {
    title: 'HealthTech Ecosystem',
    desc: 'Menyatukan AI diagnostik, klinik, homecare, dan retail kesehatan ke dalam pengalaman digital yang seamless.',
  },
  {
    title: 'Custom Software Delivery',
    desc: 'Membangun website, dashboard, dan sistem operasional dengan fondasi yang cepat, aman, dan mudah dikembangkan.',
  },
  {
    title: 'Growth-Ready Branding',
    desc: 'Mendesain company profile dan landing page yang lebih premium agar produk tampil kuat di mata partner maupun pelanggan.',
  },
];

const products = [
  'CogniScan — AI Radiologi & Lab',
  'Kaist Medika — Klinik & HomeCare',
  'SIMRS & SIMKlinik',
  'Medical Commerce Platform',
  'Apotek & Retail Health',
  'Website Ujian Dokter',
];

const features = [
  'Visual yang lebih modern dan premium',
  'Struktur section yang lebih jelas untuk pitching',
  'CTA yang menonjol untuk meningkatkan konversi',
  'Layout responsif untuk desktop dan mobile',
];

const process = [
  {
    step: '01',
    title: 'Discover',
    desc: 'Memetakan kebutuhan bisnis, target pengguna, dan peluang transformasi yang paling berdampak.',
  },
  {
    step: '02',
    title: 'Design & Build',
    desc: 'Merancang user experience, visual system, dan implementasi produk dengan standar profesional.',
  },
  {
    step: '03',
    title: 'Launch & Grow',
    desc: 'Meluncurkan solusi, mengukur performa, dan mengoptimalkan growth lewat iterasi berkelanjutan.',
  },
];

function sectionTitle(eyebrow, title, desc) {
  return e('div', { className: 'section-heading' }, [
    e('p', { className: 'eyebrow', key: 'eyebrow' }, eyebrow),
    e('h2', { key: 'title' }, title),
    desc ? e('p', { className: 'section-copy', key: 'desc' }, desc) : null,
  ]);
}

export function App() {
  return e('div', { className: 'page-shell' }, [
    e('div', { className: 'bg-orb orb-one', key: 'orb-1' }),
    e('div', { className: 'bg-orb orb-two', key: 'orb-2' }),
    e('div', { className: 'bg-grid', key: 'grid' }),
    e('header', { className: 'hero-section', id: 'top', key: 'hero' }, [
      e('nav', { className: 'nav', key: 'nav' }, [
        e('a', { className: 'brand', href: '#top', key: 'brand' }, [
          e('img', { src: '/somansa-logo.svg', alt: 'Somansa logo', key: 'logo' }),
          e('span', { key: 'name' }, 'SOMANSA'),
        ]),
        e(
          'div',
          { className: 'nav-links', key: 'links' },
          navLinks.map((link) => e('a', { href: link.href, key: link.href }, link.label)),
        ),
        e('a', { className: 'btn btn-ghost', href: '#kontak', key: 'cta' }, 'Mulai Diskusi'),
      ]),
      e('div', { className: 'hero-layout', key: 'layout' }, [
        e('div', { className: 'hero-copy', key: 'copy' }, [
          e('p', { className: 'eyebrow', key: 'eyebrow' }, 'Landing page • Company profile • HealthTech'),
          e('h1', { key: 'title' }, 'Somansa tampil lebih kuat sebagai landing page modern untuk bisnis kesehatan & teknologi.'),
          e(
            'p',
            { className: 'hero-description', key: 'desc' },
            'Kami memadukan desain premium, struktur konten yang persuasif, dan CTA yang jelas agar website terasa lebih profesional seperti landing page siap pitching.',
          ),
          e('div', { className: 'hero-actions', key: 'actions' }, [
            e('a', { className: 'btn btn-primary', href: '#produk', key: 'primary' }, 'Lihat Produk'),
            e('a', { className: 'btn btn-secondary', href: '#tentang', key: 'secondary' }, 'Explore Profile'),
          ]),
          e(
            'div',
            { className: 'hero-proof', key: 'proof' },
            stats.map((item) =>
              e('article', { className: 'proof-card', key: item[0] }, [
                e('strong', { key: 'value' }, item[0]),
                e('span', { key: 'label' }, item[1]),
              ]),
            ),
          ),
        ]),
        e('div', { className: 'hero-visual', key: 'visual' }, [
          e('div', { className: 'visual-card glass', key: 'vc1' }, [
            e('p', { className: 'mini-label', key: 'label' }, 'Why Somansa'),
            e('h3', { key: 'title' }, 'One ecosystem for modern healthcare businesses.'),
            e(
              'ul',
              { className: 'feature-list', key: 'list' },
              features.map((feature) => e('li', { key: feature }, feature)),
            ),
          ]),
          e('div', { className: 'metric-card glass', key: 'vc2' }, [
            e('span', { className: 'metric-badge', key: 'badge' }, 'Featured capabilities'),
            e('div', { className: 'metric-stack', key: 'metrics' }, [
              e('div', { key: 'm1' }, [e('strong', { key: 'v1' }, 'AI'), e('span', { key: 'l1' }, 'Diagnostic & workflow tools')]),
              e('div', { key: 'm2' }, [e('strong', { key: 'v2' }, 'UX'), e('span', { key: 'l2' }, 'Landing page experience')]),
              e('div', { key: 'm3' }, [e('strong', { key: 'v3' }, 'Scale'), e('span', { key: 'l3' }, 'Business-ready platform delivery')]),
            ]),
          ]),
        ]),
      ]),
    ]),

    e('main', { key: 'main' }, [
      e('section', { className: 'section section-panel', id: 'tentang', key: 'about' }, [
        sectionTitle(
          'Tentang Somansa',
          'Bukan sekadar company profile, tetapi halaman presentasi yang terasa seperti produk.',
          'Tampilan baru difokuskan untuk memberi kesan premium, rapi, dan relevan bagi calon partner, investor, atau klien yang pertama kali mengenal Somansa.',
        ),
        e('div', { className: 'about-panel', key: 'panel' }, [
          e('div', { className: 'about-highlight glass', key: 'ah' }, [
            e('p', { className: 'mini-label', key: 'mini' }, 'Positioning'),
            e('h3', { key: 'h' }, 'Digital partner untuk healthtech, software house, dan layanan modern.'),
            e(
              'p',
              { key: 'p' },
              'Struktur visual dan copywriting diarahkan agar pengunjung langsung memahami value utama Somansa hanya dalam beberapa detik.',
            ),
          ]),
          e('div', { className: 'about-grid', key: 'grid' }, [
            e('article', { className: 'info-card', key: 'vision' }, [e('h3', { key: 'h' }, 'Visi'), e('p', { key: 'p' }, 'Menjadi ekosistem bisnis digital Indonesia yang dikenal lewat inovasi di sektor kesehatan dan teknologi.')]),
            e('article', { className: 'info-card', key: 'mission' }, [e('h3', { key: 'h' }, 'Misi'), e('p', { key: 'p' }, 'Menghadirkan pengalaman digital yang modern, jelas, dan berorientasi hasil bagi setiap stakeholder.')]),
            e('article', { className: 'info-card', key: 'approach' }, [e('h3', { key: 'h' }, 'Approach'), e('p', { key: 'p' }, 'Menggabungkan desain, teknologi, dan strategi komunikasi agar brand tampil lebih meyakinkan.')]),
          ]),
        ]),
      ]),

      e('section', { className: 'section', id: 'solusi', key: 'solutions' }, [
        sectionTitle('Solusi Unggulan', 'Website kini disusun seperti landing page yang fokus pada nilai jual utama.'),
        e(
          'div',
          { className: 'card-grid', key: 'cards' },
          solutions.map((item) =>
            e('article', { className: 'feature-card glass', key: item.title }, [
              e('span', { className: 'card-icon', key: 'icon' }, '✦'),
              e('h3', { key: 'h' }, item.title),
              e('p', { key: 'p' }, item.desc),
            ]),
          ),
        ),
      ]),

      e('section', { className: 'section section-panel', id: 'produk', key: 'products' }, [
        sectionTitle('Produk & Unit Bisnis', 'Portofolio Somansa tampil lebih terstruktur dan mudah dipindai.'),
        e(
          'div',
          { className: 'portfolio-grid', key: 'portfolio' },
          products.map((item, index) =>
            e('article', { className: 'portfolio-card', key: item }, [
              e('span', { className: 'portfolio-number', key: 'number' }, String(index + 1).padStart(2, '0')),
              e('h3', { key: 'title' }, item),
              e('p', { key: 'desc' }, 'Dikurasi sebagai bagian dari ekosistem yang menunjukkan kekuatan Somansa dalam membangun produk lintas sektor.'),
            ]),
          ),
        ),
      ]),

      e('section', { className: 'section', id: 'proses', key: 'process' }, [
        sectionTitle('Proses Kerja', 'Alur yang sederhana, profesional, dan mudah dipahami pengunjung.'),
        e(
          'div',
          { className: 'timeline', key: 'timeline' },
          process.map((item) =>
            e('article', { className: 'timeline-card', key: item.step }, [
              e('span', { className: 'timeline-step', key: 'step' }, item.step),
              e('h3', { key: 'title' }, item.title),
              e('p', { key: 'desc' }, item.desc),
            ]),
          ),
        ),
      ]),

      e('section', { className: 'section', id: 'kontak', key: 'contact' }, [
        e('div', { className: 'contact-banner glass', key: 'banner' }, [
          e('div', { key: 'copy' }, [
            e('p', { className: 'eyebrow', key: 'eyebrow' }, 'Let’s build together'),
            e('h2', { key: 'title' }, 'Siap membuat brand dan produk Anda tampil sekuat ini?'),
            e(
              'p',
              { className: 'section-copy', key: 'desc' },
              'Somansa siap membantu kebutuhan website, landing page, software, maupun pengembangan ekosistem digital yang lebih matang.',
            ),
          ]),
          e('div', { className: 'contact-actions', key: 'actions' }, [
            e('a', { className: 'btn btn-primary', href: 'mailto:hello@somansa.id', key: 'email' }, 'Hubungi via Email'),
            e('a', { className: 'btn btn-secondary', href: '#top', key: 'top' }, 'Kembali ke Atas'),
          ]),
        ]),
      ]),
    ]),

    e('footer', { className: 'footer', key: 'footer' }, [
      e('p', { key: 'text' }, `© ${new Date().getFullYear()} Somansa. Crafted for a stronger first impression.`),
    ]),
  ]);
}
