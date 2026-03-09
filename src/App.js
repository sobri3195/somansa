import React from 'https://esm.sh/react@18.3.1';

const navLinks = [
  { label: 'Layanan', href: '#layanan' },
  { label: 'Portofolio', href: '#portofolio' },
  { label: 'Use Cases', href: '#use-cases' },
  { label: 'Kontak', href: '#kontak' },
];

const serviceCards = [
  {
    title: 'HealthTech Product Engineering',
    subtext: 'Fondasi digital layanan kesehatan',
    desc: 'Perancangan dan pengembangan produk digital kesehatan dari arsitektur inti hingga implementasi siap operasi.',
    points: ['Arsitektur modular & terukur', 'UX klinis berorientasi akurasi', 'Kesiapan integrasi data & API'],
  },
  {
    title: 'Applied AI Solutions',
    subtext: 'AI bernilai bisnis, bukan sekadar eksperimen',
    desc: 'Penerapan AI untuk decision support, automasi, dan insight operasional dengan tata kelola yang aman dan bertanggung jawab.',
    points: ['Model governance & observability', 'Workflow automation prioritas tinggi', 'Analitik prediktif untuk keputusan cepat'],
  },
  {
    title: 'Enterprise System Modernization',
    subtext: 'Transformasi sistem inti lintas unit',
    desc: 'Modernisasi sistem untuk meningkatkan interoperabilitas, efisiensi proses, dan ketahanan operasional jangka panjang.',
    points: ['Migrasi bertahap minim gangguan', 'Standar keamanan enterprise', 'Reliability dan performa berkelanjutan'],
  },
];

const portfolioItems = [
  {
    name: 'CogniScan',
    category: 'AI Diagnostik',
    impact: 'Mempercepat proses analisis radiologi dan laboratorium dengan alur kerja yang lebih konsisten.',
  },
  {
    name: 'Kaist Medika Ecosystem',
    category: 'Ekosistem Klinik',
    impact: 'Menghubungkan layanan klinik, home care, dan operasional pasien dalam satu pengalaman terpadu.',
  },
  {
    name: 'SIMRS & SIMKlinik Initiative',
    category: 'Sistem Operasional',
    impact: 'Menyederhanakan proses administrasi dan pelaporan agar tim medis fokus pada kualitas layanan.',
  },
  {
    name: 'Medical Commerce Stack',
    category: 'Digital Commerce',
    impact: 'Memperkuat kanal penjualan produk kesehatan dengan fondasi digital yang aman dan siap skala.',
  },
];

const useCases = [
  {
    title: 'Digitalisasi Layanan Klinik Multi-Cabang',
    tag: 'Klinik & Layanan Primer',
    summary: 'Standardisasi alur operasional, rekam data, dan monitoring performa antar-cabang secara real-time.',
  },
  {
    title: 'Integrasi AI untuk Clinical Decision Support',
    tag: 'Rumah Sakit & Diagnostik',
    summary: 'Meningkatkan ketepatan keputusan klinis melalui insight berbasis data dengan kontrol risiko terukur.',
  },
  {
    title: 'Modernisasi Platform Operasional Enterprise',
    tag: 'Institusi Skala Besar',
    summary: 'Menyatukan sistem legacy dan platform baru agar organisasi lebih tangkas, aman, dan efisien.',
  },
];

const trustIndicators = [
  ['12+', 'Inisiatif digital lintas domain'],
  ['End-to-End', 'Strategi, produk, hingga operasi'],
  ['Enterprise-Grade', 'Standar keamanan dan reliability'],
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
        e('a', { className: 'btn btn-primary', href: '#kontak' }, 'Konsultasi Eksekutif'),
      ),
      e(
        'section',
        { className: 'hero grid' },
        e(
          'div',
          { className: 'hero-copy glass' },
          e('p', { className: 'chip' }, 'Strategic HealthTech Partner • AI • Enterprise Delivery'),
          e('h1', null, 'Mitra Strategis untuk Transformasi HealthTech dan Sistem Enterprise yang Andal.'),
          e('p', { className: 'hero-lead' }, 'Somansa membantu organisasi merancang dan mengeksekusi inisiatif digital secara disiplin—dari strategi, pembangunan produk, hingga akselerasi dampak bisnis yang terukur.'),
          e('div', { className: 'actions' }, e('a', { className: 'btn btn-primary', href: '#kontak' }, 'Jadwalkan Diskusi Strategis'), e('a', { className: 'btn btn-ghost', href: '#portofolio' }, 'Pelajari Portofolio')),
          e(
            'div',
            { className: 'trust-row' },
            ...trustIndicators.map((item) => e('article', { key: item[0] }, e('strong', null, item[0]), e('span', null, item[1]))),
          ),
        ),
        e(
          'aside',
          { className: 'hero-visual glass', 'aria-label': 'Panel sorotan perusahaan' },
          e('div', { className: 'orb orb-cyan' }),
          e('div', { className: 'orb orb-violet' }),
          e('div', { className: 'panel-head' }, e('p', { className: 'panel-kicker' }, 'Company Highlights'), e('h3', null, 'Eksekusi terukur untuk organisasi yang menuntut kepastian.')),
          e(
            'div',
            { className: 'highlights-list' },
            e('article', { className: 'mini-card' }, e('span', null, '01'), e('h4', null, 'Strategic Alignment'), e('p', null, 'Roadmap bisnis, regulasi, dan teknologi disatukan sejak fase awal.')),
            e('article', { className: 'mini-card' }, e('span', null, '02'), e('h4', null, 'Operational Confidence'), e('p', null, 'Desain sistem berfokus pada reliability, keamanan, dan kontinuitas layanan.')),
            e('article', { className: 'mini-card' }, e('span', null, '03'), e('h4', null, 'Sustainable Impact'), e('p', null, 'Setiap rilis diarahkan pada value bisnis yang bisa diukur dan ditingkatkan.')),
          ),
        ),
      ),
    ),
    e('section', { className: 'section section-intro glass' }, e('p', { className: 'chip' }, 'Positioning'), e('h2', null, 'Somansa hadir sebagai mitra eksekusi tingkat enterprise, bukan sekadar vendor implementasi.'), e('p', null, 'Kami bekerja sebagai perpanjangan tim internal Anda untuk memperjelas prioritas, menurunkan risiko implementasi, dan mempercepat pencapaian hasil secara profesional.')),
    e(
      'section',
      { className: 'section', id: 'layanan' },
      e('p', { className: 'chip' }, 'Layanan Inti'),
      e('h2', null, 'Kapabilitas strategis untuk inisiatif mission-critical.'),
      e('div', { className: 'cards-3' }, ...serviceCards.map((item) => e('article', { key: item.title, className: 'card glass service-card' }, e('p', { className: 'card-subtitle' }, item.subtext), e('h3', null, item.title), e('p', null, item.desc), e('ul', null, ...item.points.map((point) => e('li', { key: point }, point)))))),
    ),
    e(
      'section',
      { className: 'section', id: 'portofolio' },
      e('p', { className: 'chip' }, 'Portofolio Terpilih'),
      e('h2', null, 'Inisiatif dengan orientasi hasil dan skalabilitas jangka panjang.'),
      e('div', { className: 'cards-2' }, ...portfolioItems.map((item, index) => e('article', { key: item.name, className: 'card glass portfolio-card' }, e('span', { className: 'index' }, `0${index + 1}`), e('p', { className: 'tag' }, item.category), e('h3', null, item.name), e('p', null, item.impact)))),
    ),
    e(
      'section',
      { className: 'section', id: 'use-cases' },
      e('p', { className: 'chip' }, 'Use Cases Prioritas'),
      e('h2', null, 'Rancangan solusi yang relevan untuk konteks organisasi modern.'),
      e('div', { className: 'cards-3 usecase-grid' }, ...useCases.map((item) => e('article', { key: item.title, className: 'card glass usecase' }, e('p', { className: 'tag' }, item.tag), e('h3', null, item.title), e('p', null, item.summary)))),
    ),
    e(
      'section',
      { className: 'section cta glass', id: 'kontak' },
      e('p', { className: 'chip' }, 'Mulai Kolaborasi'),
      e('h2', null, 'Saatnya mengubah agenda transformasi Anda menjadi keunggulan operasional yang nyata.'),
      e('p', null, 'Libatkan tim Somansa untuk menyusun langkah prioritas, memvalidasi arsitektur, dan mengeksekusi inisiatif digital Anda dengan kualitas enterprise.'),
      e('a', { href: 'mailto:hello@somansa.id', className: 'btn btn-primary' }, 'Hubungi Tim Strategis Somansa'),
    ),
    e('footer', { className: 'footer' }, `© ${new Date().getFullYear()} Somansa. Dirancang untuk kepercayaan institusi modern.`),
  );
}
