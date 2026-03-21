import React from 'https://esm.sh/react@18.3.1';

const e = React.createElement;

const navLinks = [
  { label: 'Produk', href: '#products' },
  { label: 'Layanan', href: '#services' },
  { label: 'Tentang', href: '#about' },
  { label: 'Proses', href: '#process' },
  { label: 'Kontak', href: '#contact' },
];

const stats = [
  { value: '12', label: 'Produk dan unit bisnis aktif yang memperluas ekosistem Somansa.' },
  { value: '24/7', label: 'Komitmen support untuk operasional dan transformasi digital.' },
  { value: 'End-to-End', label: 'Dari strategi, desain produk, pengembangan, hingga implementasi.' },
];

const products = [
  { name: 'CogniScan', category: 'AI Radiologi & Lab', desc: 'Platform AI untuk membantu pembacaan radiologi dan alur analitik laboratorium yang lebih cepat.' },
  { name: 'Kaist Medika', category: 'Klinik & HomeCare', desc: 'Layanan klinik Dokter Sobri dan homecare untuk konsultasi, tindakan, serta monitoring pasien.' },
  { name: 'Klinik Kecantikan', category: 'Aesthetic Care', desc: 'Layanan estetika dengan pendekatan medis untuk perawatan kulit, wajah, dan self-care modern.' },
  { name: 'SIMRS & SIMKlinik', category: 'Sistem Operasional', desc: 'Sistem manajemen rumah sakit dan klinik untuk administrasi, rekam medis, hingga pelaporan.' },
  { name: 'Klinik Rawat Luka', category: 'Specialized Care', desc: 'Layanan rawat luka terfokus untuk penanganan pasien kronis, pascaoperasi, dan home visit.' },
  { name: 'Scrub Dokter', category: 'Medical Apparel', desc: 'Produk apparel medis yang nyaman, rapi, dan relevan untuk kebutuhan tenaga kesehatan.' },
  { name: 'Alat Medis Dokter', category: 'Medical Commerce', desc: 'Distribusi alat medis yang mendukung praktik dokter, klinik, dan kebutuhan operasional kesehatan.' },
  { name: 'Apotek', category: 'Pharmacy Retail', desc: 'Unit distribusi obat dan kebutuhan kesehatan yang terhubung dengan layanan klinik dan pasien.' },
  { name: 'Website Ujian Dokter', category: 'MedEd Platform', desc: 'Platform persiapan ujian dokter dengan materi, latihan soal, dan alur belajar yang terstruktur.' },
  { name: 'Tools Hacking Sobri', category: 'Security Tools', desc: 'Eksplorasi tools keamanan dan otomasi teknis untuk riset, audit, dan pengembangan internal.' },
  { name: 'Software House', category: 'Digital Product Studio', desc: 'Tim pengembang yang membangun website, aplikasi, dashboard, dan sistem bisnis lintas industri.' },
  { name: 'Kosan', category: 'Property Unit', desc: 'Unit properti yang memperkuat diversifikasi Somansa di luar healthtech dan layanan digital.' },
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

function renderProduct(item) {
  return e('article', { className: 'product-card', key: item.name }, [
    e('p', { className: 'mini-label', key: 'category' }, item.category),
    e('h3', { key: 'name' }, item.name),
    e('p', { key: 'desc' }, item.desc),
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
          e('p', { className: 'hero-badge', key: 'badge' }, 'Multi-Product Ecosystem'),
          e('h1', { key: 'title' }, 'Landing page perusahaan yang rapi, profesional, dan menjual value bisnis.'),
          e(
            'p',
            { className: 'hero-desc', key: 'desc' },
            'Somansa membangun ekosistem multi-produk di healthtech, software, edukasi medis, commerce, dan layanan modern. Halaman ini merangkum portofolio inti agar calon klien, partner, dan investor langsung memahami kekuatan bisnis yang sedang dibangun.',
          ),
          e('div', { className: 'hero-actions', key: 'actions' }, [
            e('a', { className: 'button button-primary', href: '#products', key: 'primary' }, 'Lihat Produk'),
            e('a', { className: 'button button-secondary', href: '#about', key: 'secondary' }, 'Lihat Profil'),
          ]),
          e('div', { className: 'stats-grid', key: 'stats' }, stats.map(renderStats)),
        ]),
        e('aside', { className: 'showcase-card', key: 'showcase' }, [
          e('p', { className: 'mini-label', key: 'label' }, 'Kenapa portofolio produk penting?'),
          e('h3', { key: 'title' }, 'Karena orang perlu melihat bukti eksekusi bisnis, bukan hanya janji brand.'),
          e('ul', { className: 'showcase-list', key: 'list' }, [
            e('li', { key: '1' }, 'Menunjukkan breadth bisnis Somansa dari healthtech sampai properti.'),
            e('li', { key: '2' }, 'Membantu partner memahami unit yang paling relevan untuk diajak kolaborasi.'),
            e('li', { key: '3' }, 'Menguatkan kredibilitas melalui daftar produk yang sudah atau sedang dibangun.'),
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
      e('section', { className: 'section', id: 'products', key: 'products' }, [
        e('div', { className: 'section-header', key: 'header' }, [
          e('p', { className: 'section-label', key: 'label' }, 'Produk & Unit Bisnis'),
          e('h2', { key: 'title' }, 'Ekosistem produk Somansa yang sekarang ikut kami tampilkan.'),
          e(
            'p',
            { className: 'section-desc', key: 'desc' },
            'Dari layanan kesehatan, software operasional, edukasi dokter, hingga commerce dan properti, setiap unit dirancang untuk saling memperkuat pertumbuhan ekosistem Somansa.',
          ),
        ]),
        e('div', { className: 'cards-grid cards-grid-3', key: 'grid' }, products.map(renderProduct)),
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
