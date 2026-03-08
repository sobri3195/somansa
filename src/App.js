import React from 'https://esm.sh/react@18.3.1';

const productNames = [
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

const productMeta = {
  'CogniScan — AI Radiologi & Lab': { icon: '🧠', tag: 'AI Diagnostic' },
  'Kaist Medika — Klinik Dokter Sobri & HomeCare': { icon: '🏥', tag: 'Clinical Service' },
  'Klinik Kecantikan': { icon: '✨', tag: 'Aesthetic Care' },
  'SIMRS & SIMKlinik': { icon: '📊', tag: 'Hospital System' },
  'Klinik Rawat Luka': { icon: '🩹', tag: 'Specialized Care' },
  'Jualan Scrub Dokter': { icon: '🧴', tag: 'Medical Retail' },
  'Jualan Alat Medis Dokter': { icon: '🩺', tag: 'Medical Device' },
  Apotek: { icon: '💊', tag: 'Pharmacy' },
  'Website Ujian Dokter': { icon: '📝', tag: 'Medical Education' },
  'Tools Hacking Sobri': { icon: '🛡️', tag: 'Security Tools' },
  'Software House': { icon: '💻', tag: 'Tech Builder' },
  Kosan: { icon: '🏠', tag: 'Property' },
};

const products = productNames.map((name) => ({ name, ...productMeta[name] }));

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

const metrics = [
  { label: 'Unit Produk', value: '12+' },
  { label: 'Fokus Industri', value: 'HealthTech' },
  { label: 'Model Eksekusi', value: 'Build Fast' },
];

const audiences = ['Rumah Sakit', 'Klinik & Dokter', 'Startup Digital', 'UMKM Health Retail'];

const valueProps = [
  {
    title: 'Satu Mitra, Banyak Solusi',
    desc: 'Dari konsultasi strategi, pengembangan sistem, hingga operasional digital, semua bisa dieksekusi dalam satu tim.',
  },
  {
    title: 'Berorientasi Dampak',
    desc: 'Kami membangun produk yang menyelesaikan masalah nyata pasien, tenaga medis, dan pelaku bisnis kesehatan.',
  },
  {
    title: 'Siap Scale',
    desc: 'Arsitektur produk dirancang modular sehingga cepat berkembang seiring pertumbuhan bisnis Anda.',
  },
];

const journeys = [
  {
    title: 'Discovery & Audit',
    desc: 'Memetakan kebutuhan bisnis, tantangan operasional, dan prioritas transformasi digital.',
  },
  {
    title: 'Build & Integrate',
    desc: 'Mengembangkan solusi web/app/AI dan menghubungkannya dengan sistem yang sudah berjalan.',
  },
  {
    title: 'Launch & Iterate',
    desc: 'Meluncurkan produk, memonitor performa, lalu melakukan iterasi berbasis data pengguna.',
  },
];

const stories = [
  {
    title: 'Klinik Lebih Efisien',
    desc: 'Digitalisasi alur pendaftaran, rekam medis, dan laporan manajemen untuk operasional yang lebih rapi.',
  },
  {
    title: 'Layanan Pasien Lebih Cepat',
    desc: 'Integrasi layanan homecare dan komunikasi pasien membuat proses pelayanan lebih responsif.',
  },
  {
    title: 'Bisnis Kesehatan Lebih Tumbuh',
    desc: 'Pendekatan produk + marketing membantu unit bisnis kesehatan meningkatkan visibilitas dan konversi.',
  },
];

const faq = [
  {
    q: 'Apakah Somansa hanya untuk sektor kesehatan?',
    a: 'Fokus utama kami HealthTech, namun kami juga mengerjakan solusi teknologi untuk edukasi, retail, dan layanan digital lainnya.',
  },
  {
    q: 'Bisa mulai dari project kecil dulu?',
    a: 'Bisa. Kami dapat mulai dari audit singkat atau MVP, lalu scale bertahap sesuai kebutuhan dan budget.',
  },
  {
    q: 'Apakah Somansa menerima kolaborasi jangka panjang?',
    a: 'Ya. Kami membuka model kerja project-based maupun partnership jangka panjang untuk pengembangan berkelanjutan.',
  },
];

const e = React.createElement;

export function App() {
  return e(
    'div',
    { className: 'page' },
    e(
      'header',
      { className: 'hero' },
      e(
        'nav',
        { className: 'nav' },
        e(
          'div',
          { className: 'brand-wrap' },
          e('img', { src: '/somansa-logo.svg', className: 'brand-logo', alt: 'Logo Somansa' }),
          e('div', { className: 'brand' }, 'SOMANSA'),
        ),
        e('a', { className: 'cta', href: '#products' }, 'Explore Produk'),
      ),
      e(
        'div',
        { className: 'hero-content' },
        e('p', { className: 'badge' }, 'Innovating Health, Technology, & Lifestyle'),
        e('h1', null, 'Perusahaan Multi-Produk yang Membangun Masa Depan dari Indonesia'),
        e(
          'p',
          { className: 'lead' },
          'Somansa menghadirkan solusi terintegrasi untuk kesehatan, teknologi, dan layanan modern dengan fokus pada dampak nyata, desain unggul, dan inovasi berkelanjutan.',
        ),
        e(
          'div',
          { className: 'hero-actions' },
          e('a', { href: '#products', className: 'btn btn-primary' }, 'Lihat Portofolio'),
          e('a', { href: '#value', className: 'btn btn-secondary' }, 'Kenapa Somansa'),
        ),
        e(
          'div',
          { className: 'audience-pills' },
          ...audiences.map((item) => e('span', { className: 'audience-pill', key: item }, item)),
        ),
        e(
          'div',
          { className: 'metrics' },
          ...metrics.map((item) =>
            e(
              'article',
              { className: 'metric-card', key: item.label },
              e('strong', null, item.value),
              e('span', null, item.label),
            ),
          ),
        ),
      ),
      e('div', { className: 'glow glow-a' }),
      e('div', { className: 'glow glow-b' }),
    ),
    e(
      'section',
      { id: 'about', className: 'highlights section' },
      ...highlights.map((item) =>
        e(
          'article',
          { className: 'card float', key: item.title },
          e('h3', null, item.title),
          e('p', null, item.desc),
        ),
      ),
    ),
    e(
      'section',
      { id: 'value', className: 'section' },
      e(
        'div',
        { className: 'section-head' },
        e('p', { className: 'badge' }, 'Value Proposition'),
        e('h2', null, 'Kenapa brand memilih Somansa'),
      ),
      e(
        'div',
        { className: 'value-grid' },
        ...valueProps.map((item, i) =>
          e(
            'article',
            { className: 'value-card', key: item.title },
            e('span', { className: 'value-index' }, `${String(i + 1).padStart(2, '0')}.`),
            e('h3', null, item.title),
            e('p', null, item.desc),
          ),
        ),
      ),
    ),
    e(
      'section',
      { id: 'products', className: 'section products' },
      e(
        'div',
        { className: 'section-head' },
        e('p', { className: 'badge' }, 'Produk & Unit Bisnis'),
        e('h2', null, '12 Pilar Bisnis Somansa'),
      ),
      e(
        'div',
        { className: 'grid' },
        ...products.map((product, i) =>
          e(
            'div',
            {
              className: 'product-card reveal tilt',
              style: { animationDelay: `${i * 70}ms` },
              key: product.name,
            },
            e(
              'div',
              { className: 'product-head' },
              e('span', null, String(i + 1).padStart(2, '0')),
              e('div', { className: 'product-icon', 'aria-hidden': true }, product.icon),
            ),
            e('h4', null, product.name),
            e('p', { className: 'product-tag' }, product.tag),
          ),
        ),
      ),
    ),
    e(
      'section',
      { className: 'section' },
      e(
        'div',
        { className: 'section-head' },
        e('p', { className: 'badge' }, 'How We Work'),
        e('h2', null, 'Perjalanan kolaborasi bersama Somansa'),
      ),
      e(
        'div',
        { className: 'journey-grid' },
        ...journeys.map((item, i) =>
          e(
            'article',
            { className: 'journey-card', key: item.title },
            e('span', { className: 'journey-index' }, `Step ${i + 1}`),
            e('h3', null, item.title),
            e('p', null, item.desc),
          ),
        ),
      ),
    ),
    e(
      'section',
      { className: 'section' },
      e(
        'div',
        { className: 'section-head' },
        e('p', { className: 'badge' }, 'Impact Story'),
        e('h2', null, 'Dampak yang ingin kami ciptakan'),
      ),
      e(
        'div',
        { className: 'story-grid' },
        ...stories.map((item) =>
          e(
            'article',
            { className: 'story-card', key: item.title },
            e('h3', null, item.title),
            e('p', null, item.desc),
          ),
        ),
      ),
    ),
    e(
      'section',
      { className: 'section' },
      e(
        'div',
        { className: 'section-head' },
        e('p', { className: 'badge' }, 'FAQ'),
        e('h2', null, 'Pertanyaan yang sering ditanyakan'),
      ),
      e(
        'div',
        { className: 'highlights' },
        ...faq.map((item) =>
          e('article', { className: 'card', key: item.q }, e('h3', null, item.q), e('p', null, item.a)),
        ),
      ),
    ),
    e(
      'section',
      { className: 'section banner' },
      e('h2', null, 'Ready to collaborate with Somansa?'),
      e(
        'p',
        null,
        'Kami membuka kolaborasi untuk institusi kesehatan, startup, UMKM, dan transformasi digital enterprise.',
      ),
      e('a', { className: 'btn btn-primary', href: 'mailto:hello@somansa.id' }, 'Hubungi Tim Somansa'),
    ),
    e('footer', { className: 'footer' }, `© ${new Date().getFullYear()} Somansa. All rights reserved.`),
  );
}
