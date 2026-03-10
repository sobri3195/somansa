import React from 'https://esm.sh/react@18.3.1';

const navLinks = [
  { label: 'Layanan', href: '#layanan' },
  { label: 'Portofolio', href: '#portofolio' },
  { label: 'Roadmap', href: '#roadmap' },
  { label: 'Kontak', href: '#kontak' },
];

const services = [
  {
    title: 'Rekayasa Produk HealthTech',
    description:
      'Perancangan dan pengembangan platform klinik, rumah sakit, dan layanan pasien terpadu dengan arsitektur siap skala.',
    category: 'Product',
  },
  {
    title: 'Solusi AI Terapan',
    description:
      'Implementasi AI untuk clinical decision support, otomasi alur kerja, dan analitik operasional dengan tata kelola data yang disiplin.',
    category: 'AI',
  },
  {
    title: 'Modernisasi Sistem Enterprise',
    description:
      'Transformasi sistem inti agar interoperabilitas, keamanan, dan performa bisnis meningkat tanpa mengganggu operasi harian.',
    category: 'Enterprise',
  },
  {
    title: 'Integrasi Data & API',
    description: 'Menyatukan data lintas unit bisnis agar dashboard manajemen dan pelaporan regulasi menjadi real-time.',
    category: 'Data',
  },
];

const useCases = [
  {
    name: 'CogniScan',
    tag: 'AI Diagnostik',
    outcome: 'Mempercepat proses triase radiologi dan memberi dukungan keputusan klinis berbasis data visual.',
    visual: '/src/animated-pulse.svg',
  },
  {
    name: 'Kaist Medika Ecosystem',
    tag: 'Ekosistem Klinik',
    outcome: 'Menyatukan layanan klinik, homecare, dan manajemen pasien dalam alur operasional yang konsisten.',
    visual: '/src/animated-flow.svg',
  },
  {
    name: 'Inisiatif SIMRS & SIMKlinik',
    tag: 'Infrastruktur Operasional',
    outcome: 'Menguatkan efisiensi administrasi dan kualitas pelaporan melalui integrasi sistem lintas unit layanan.',
    visual: '/src/animated-orbit.svg',
  },
  {
    name: 'Medical Commerce Stack',
    tag: 'Perdagangan Kesehatan',
    outcome: 'Membangun kanal penjualan produk medis dengan kontrol inventori dan visibilitas permintaan yang lebih baik.',
    visual: '/src/animated-flow.svg',
  },
  {
    name: 'Doctor Exam Platform',
    tag: 'EdTech Medis',
    outcome: 'Menyediakan bank soal adaptif dan analitik kompetensi untuk persiapan ujian dokter.',
    visual: '/src/animated-orbit.svg',
  },
  {
    name: 'Homecare Operations Hub',
    tag: 'Manajemen Layanan',
    outcome: 'Menjadwalkan kunjungan, memantau SLA, dan meningkatkan kepuasan pasien melalui alur operasional terpusat.',
    visual: '/src/animated-pulse.svg',
  },
];

const processSteps = [
  {
    title: 'Pemetaan Strategi',
    detail:
      'Menyelaraskan tujuan bisnis, kesiapan organisasi, regulasi, dan prioritas teknologi ke dalam peta jalan yang terukur.',
  },
  {
    title: 'Desain dan Implementasi',
    detail:
      'Membangun pengalaman produk, arsitektur sistem, serta integrasi inti dengan standar kualitas enterprise-grade.',
  },
  {
    title: 'Optimalisasi Berkelanjutan',
    detail:
      'Memantau dampak, menajamkan metrik performa, dan mengeksekusi iterasi prioritas untuk pertumbuhan jangka panjang.',
  },
];

const highlights = [
  'Arsitektur modular untuk kesiapan multi-unit dan multi-lokasi.',
  'Pendekatan delivery disiplin: strategi, desain, implementasi, hingga stabilisasi.',
  'Fokus pada nilai bisnis terukur, bukan sekadar penyelesaian fitur teknis.',
];

const indicators = ['NDA-ready', 'Keamanan data sebagai fondasi', 'Pendekatan audit-trail'];

const trustPoints = [
  {
    title: 'Discovery yang terukur',
    detail: 'Workshop singkat untuk memetakan prioritas, risiko, dan peluang dampak bisnis sebelum fase delivery.',
  },
  {
    title: 'Eksekusi transparan',
    detail: 'Update progres berkala dengan metrik yang mudah dibaca stakeholder non-teknis maupun tim operasional.',
  },
  {
    title: 'Adopsi berkelanjutan',
    detail: 'Pendampingan pasca go-live agar solusi benar-benar digunakan dan memberikan ROI yang konsisten.',
  },
];

const testimonials = [
  {
    quote: 'Somansa membantu kami menurunkan waktu administrasi pasien lebih dari 30% dalam 1 kuartal.',
    name: 'Direktur Operasional Klinik',
  },
  {
    quote: 'Struktur delivery mereka rapi, komunikatif, dan relevan untuk kebutuhan manajemen eksekutif.',
    name: 'Head of Digital Transformation',
  },
  {
    quote: 'Tim kami terbantu karena implementasi AI dilakukan bertahap namun langsung memberi dampak nyata.',
    name: 'Medical Service Manager',
  },
];

const faqItems = [
  {
    q: 'Apakah Somansa bisa mulai dari audit sistem lama?',
    a: 'Ya, kami dapat memulai dari discovery dan audit sistem sebelum masuk ke desain roadmap implementasi.',
  },
  {
    q: 'Berapa lama proyek biasanya berjalan?',
    a: 'Durasi menyesuaikan ruang lingkup. Fase discovery biasanya 1-2 minggu, delivery inti 8-16 minggu.',
  },
  {
    q: 'Apakah ada pendampingan setelah go-live?',
    a: 'Ada. Kami menyediakan support stabilisasi, monitoring KPI, dan iterasi prioritas pasca peluncuran.',
  },
];

const roadmap = [
  ['Q1', 'Discovery dan audit proses'],
  ['Q2', 'Implementasi MVP terfokus'],
  ['Q3', 'Integrasi lintas unit & pelaporan'],
  ['Q4', 'Scale-up, otomasi, dan AI advanced'],
];

const metrics = [
  ['12+', 'Inisiatif digital terkelola'],
  ['3', 'Domain strategis utama'],
  ['99,9%', 'Target reliabilitas layanan'],
  ['24/7', 'Monitoring untuk sistem kritikal'],
];

const prestigeStats = [
  ['Enterprise-Grade', 'Standar kualitas delivery premium'],
  ['Security First', 'Governance & compliance by design'],
  ['Human-Centered UX', 'Pengalaman modern yang elegan'],
];

const visualAssets = [
  {
    title: 'Pulse Monitoring AI',
    src: '/src/animated-pulse.svg',
    alt: 'Ilustrasi AI pulse monitoring',
  },
  {
    title: 'Integrated Orbit Platform',
    src: '/src/animated-orbit.svg',
    alt: 'Ilustrasi platform orbit terintegrasi',
  },
  {
    title: 'Clinical Workflow Automation',
    src: '/src/animated-flow.svg',
    alt: 'Ilustrasi alur otomasi klinis',
  },
];

const showcaseGallery = [
  {
    title: 'Clinical Intelligence Dashboard',
    src: '/src/animated-pulse.svg',
    alt: 'Dashboard intelligence untuk pemantauan performa klinis',
    caption: 'Insight real-time untuk tim operasional dan manajemen.',
  },
  {
    title: 'Connected Patient Journey',
    src: '/src/health-illustration.svg',
    alt: 'Perjalanan pasien terhubung dari registrasi hingga tindak lanjut',
    caption: 'Alur layanan digital yang lebih jelas untuk tenaga medis dan pasien.',
  },
  {
    title: 'Automation Command Center',
    src: '/src/animated-flow.svg',
    alt: 'Visual command center untuk otomasi workflow layanan kesehatan',
    caption: 'Koordinasi lintas unit lebih cepat dengan workflow automation.',
  },
  {
    title: 'Scalable Integration Hub',
    src: '/src/animated-orbit.svg',
    alt: 'Hub integrasi data dan aplikasi yang scalable',
    caption: 'Integrasi sistem inti tanpa mengganggu operasional harian.',
  },
];

const e = React.createElement;

export function App() {
  const [activeService, setActiveService] = React.useState('Semua');
  const [searchTerm, setSearchTerm] = React.useState('');
  const [activeFaq, setActiveFaq] = React.useState(0);
  const [testimonialIndex, setTestimonialIndex] = React.useState(0);
  const [darkMode, setDarkMode] = React.useState(false);
  const [email, setEmail] = React.useState('');
  const [message, setMessage] = React.useState('');
  const [submitted, setSubmitted] = React.useState(false);

  React.useEffect(() => {
    document.body.classList.toggle('dark', darkMode);
    return () => document.body.classList.remove('dark');
  }, [darkMode]);

  const categories = ['Semua', ...new Set(services.map((item) => item.category))];

  const filteredServices = services.filter((item) => {
    const matchCategory = activeService === 'Semua' || item.category === activeService;
    const matchSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchCategory && matchSearch;
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!email || !message) return;
    setSubmitted(true);
    setEmail('');
    setMessage('');
  };

  const currentTestimonial = testimonials[testimonialIndex];

  return e(
    'div',
    { className: 'page' },
    e('a', { className: 'skip-link', href: '#kontak' }, 'Lewati ke kontak'),
    e(
      'header',
      { className: 'hero-shell', id: 'top' },
      e(
        'nav',
        { className: 'nav glass' },
        e('a', { href: '#top', className: 'logo', 'aria-label': 'Somansa home' }, e('img', { src: '/somansa-logo.svg', alt: 'Somansa' }), e('span', null, 'SOMANSA')),
        e('div', { className: 'nav-links' }, ...navLinks.map((link) => e('a', { key: link.label, href: link.href }, link.label))),
        e(
          'button',
          { className: 'btn btn-ghost', onClick: () => setDarkMode((v) => !v), type: 'button' },
          darkMode ? 'Light mode' : 'Dark mode',
        ),
      ),
      e(
        'section',
        { className: 'hero grid' },
        e(
          'div',
          { className: 'hero-copy glass' },
          e('p', { className: 'chip' }, 'Mitra Transformasi Digital HealthTech & AI'),
          e('h1', null, 'Membangun Solusi HealthTech dan AI yang Andal, Bernilai Tinggi, dan Siap Skala Enterprise.'),
          e(
            'p',
            { className: 'hero-lead' },
            'Somansa mendampingi organisasi kesehatan dan institusi enterprise untuk merancang strategi produk, mempercepat implementasi, serta memastikan teknologi menghasilkan dampak operasional yang nyata.',
          ),
          e('div', { className: 'actions' }, e('a', { className: 'btn btn-primary', href: '#kontak' }, 'Mulai Diskusi Strategis'), e('a', { className: 'btn btn-ghost', href: '#portofolio' }, 'Tinjau Portofolio')),
          e('div', { className: 'quick-points' }, e('span', null, 'Respons awal ≤ 1x24 jam'), e('span', null, 'Sesi discovery tanpa biaya')),
          e(
            'div',
            { className: 'prestige-row', 'aria-label': 'Keunggulan standar premium Somansa' },
            ...prestigeStats.map((item) =>
              e(
                'article',
                { key: item[0], className: 'prestige-item' },
                e('strong', null, item[0]),
                e('small', null, item[1]),
              ),
            ),
          ),
        ),
        e(
          'aside',
          { className: 'hero-visual glass', 'aria-label': 'Ringkasan kapabilitas enterprise Somansa' },
          e('img', {
            className: 'hero-image float-soft',
            src: '/src/health-illustration.svg',
            alt: 'Visual ekosistem layanan kesehatan digital Somansa',
          }),
          e('div', { className: 'orb orb-cyan' }),
          e('div', { className: 'orb orb-violet' }),
          e('p', { className: 'eyebrow' }, 'Profil Kesiapan Enterprise'),
          e('h3', null, 'Delivery partner untuk institusi kesehatan yang membutuhkan eksekusi presisi.'),
          e('ul', { className: 'highlights-list' }, ...highlights.map((item) => e('li', { key: item }, item))),
          e('div', { className: 'indicator-row' }, ...indicators.map((item) => e('span', { key: item }, item))),
          e(
            'div',
            { className: 'metric-grid' },
            ...metrics.map((item) =>
              e('article', { key: item[0], className: 'metric-card' }, e('strong', null, item[0]), e('small', null, item[1])),
            ),
          ),
        ),
      ),
    ),
    e(
      'section',
      { className: 'section innovation-strip glass', 'aria-label': 'Visual showcase Somansa' },
      e('p', { className: 'chip' }, 'Visual Story'),
      e('h2', null, 'Desain modern yang menyampaikan kapabilitas produk secara profesional.'),
      e(
        'div',
        { className: 'cards-3 visual-grid' },
        ...visualAssets.map((asset, index) =>
          e(
            'article',
            { key: asset.title, className: 'card visual-card', style: { animationDelay: `${index * 120}ms` } },
            e('img', { src: asset.src, alt: asset.alt }),
            e('h3', null, asset.title),
          ),
        ),
      ),
    ),
    e(
      'section',
      { className: 'section image-story', 'aria-label': 'Galeri visual Somansa' },
      e('p', { className: 'chip' }, 'Image-first Experience'),
      e('h2', null, 'UI/UX dengan lebih banyak visual agar pesan bisnis lebih cepat dipahami.'),
      e(
        'div',
        { className: 'gallery-grid' },
        ...showcaseGallery.map((item) =>
          e(
            'figure',
            { key: item.title, className: 'gallery-card glass' },
            e('img', { src: item.src, alt: item.alt }),
            e('figcaption', null, e('strong', null, item.title), e('span', null, item.caption)),
          ),
        ),
      ),
    ),
    e(
      'section',
      { className: 'section trust-strip', 'aria-label': 'Alasan memilih Somansa' },
      e('p', { className: 'chip' }, 'Kenapa Somansa'),
      e('h2', null, 'Proses kolaborasi dirancang agar keputusan lebih cepat dan risiko lebih terkendali.'),
      e(
        'div',
        { className: 'cards-3' },
        ...trustPoints.map((item) => e('article', { key: item.title, className: 'card glass trust-card' }, e('h3', null, item.title), e('p', null, item.detail))),
      ),
    ),
    e(
      'section',
      { className: 'section', id: 'layanan' },
      e('p', { className: 'chip' }, 'Layanan Inti'),
      e('h2', null, 'Kapabilitas terstruktur untuk inisiatif bernilai strategis.'),
      e(
        'div',
        { className: 'filters' },
        e('input', {
          value: searchTerm,
          onChange: (event) => setSearchTerm(event.target.value),
          placeholder: 'Cari layanan...',
          className: 'search',
          'aria-label': 'Cari layanan',
        }),
        e(
          'div',
          { className: 'filter-buttons' },
          ...categories.map((item) =>
            e(
              'button',
              {
                key: item,
                className: `btn btn-filter ${activeService === item ? 'active' : ''}`,
                onClick: () => setActiveService(item),
                type: 'button',
              },
              item,
            ),
          ),
        ),
      ),
      e('div', { className: 'cards-3' }, ...filteredServices.map((item) => e('article', { key: item.title, className: 'card glass service-card' }, e('h3', null, item.title), e('p', null, item.description), e('span', { className: 'case-tag' }, item.category)))),
    ),
    e(
      'section',
      { className: 'section', id: 'portofolio' },
      e('p', { className: 'chip' }, 'Portofolio & Use Case'),
      e('h2', null, 'Inisiatif terpilih dengan konteks bisnis yang jelas.'),
      e(
        'div',
        { className: 'cards-2' },
        ...useCases.map((item, index) =>
          e(
            'article',
            { key: item.name, className: 'card glass usecase' },
            e('img', { className: 'usecase-image', src: item.visual, alt: `Ilustrasi ${item.name}` }),
            e('div', { className: 'case-top' }, e('span', { className: 'case-index' }, `0${index + 1}`), e('span', { className: 'case-tag' }, item.tag)),
            e('h3', null, item.name),
            e('p', null, item.outcome),
          ),
        ),
      ),
    ),
    e(
      'section',
      { className: 'section glass', id: 'roadmap' },
      e('p', { className: 'chip' }, 'Roadmap Implementasi'),
      e('h2', null, 'Rencana eksekusi 4 fase untuk memastikan hasil bertahap namun konsisten.'),
      e(
        'div',
        { className: 'roadmap-grid' },
        ...roadmap.map((item) => e('article', { key: item[0], className: 'card mini-card' }, e('strong', null, item[0]), e('p', null, item[1]))),
      ),
    ),
    e(
      'section',
      { className: 'section glass testimonial' },
      e('p', { className: 'chip' }, 'Testimoni Klien'),
      e('h2', null, 'Kolaborasi yang menghasilkan dampak terukur.'),
      e('blockquote', null, `“${currentTestimonial.quote}”`),
      e('p', { className: 'author' }, currentTestimonial.name),
      e(
        'div',
        { className: 'actions' },
        e('button', { className: 'btn btn-ghost', onClick: () => setTestimonialIndex((testimonialIndex + testimonials.length - 1) % testimonials.length), type: 'button' }, 'Sebelumnya'),
        e('button', { className: 'btn btn-primary', onClick: () => setTestimonialIndex((testimonialIndex + 1) % testimonials.length), type: 'button' }, 'Berikutnya'),
      ),
    ),
    e(
      'section',
      { className: 'section', id: 'proses' },
      e('p', { className: 'chip' }, 'Metodologi Kerja'),
      e('h2', null, 'Ringkas, disiplin, dan relevan untuk lingkungan enterprise.'),
      e(
        'div',
        { className: 'cards-3 process' },
        ...processSteps.map((item, index) =>
          e('article', { key: item.title, className: 'card glass process-card' }, e('span', { className: 'step' }, `Tahap ${index + 1}`), e('h3', null, item.title), e('p', null, item.detail)),
        ),
      ),
    ),
    e(
      'section',
      { className: 'section', id: 'faq' },
      e('p', { className: 'chip' }, 'FAQ'),
      e('h2', null, 'Pertanyaan yang paling sering ditanyakan.'),
      e(
        'div',
        { className: 'faq-list' },
        ...faqItems.map((item, index) =>
          e(
            'button',
            {
              key: item.q,
              className: `faq-item glass ${activeFaq === index ? 'open' : ''}`,
              onClick: () => setActiveFaq(index),
              type: 'button',
            },
            e('strong', null, item.q),
            activeFaq === index ? e('p', null, item.a) : null,
          ),
        ),
      ),
    ),
    e(
      'section',
      { className: 'section cta glass', id: 'kontak' },
      e('p', { className: 'chip' }, 'Kolaborasi Strategis'),
      e('h2', null, 'Siapkan inisiatif HealthTech dan AI Anda dengan fondasi yang tepat.'),
      e('p', null, 'Diskusikan target bisnis, risiko implementasi, dan prioritas eksekusi bersama tim Somansa dalam sesi konsultasi terarah.'),
      e(
        'form',
        { className: 'contact-form', onSubmit: handleSubmit },
        e('input', {
          type: 'email',
          value: email,
          onChange: (event) => setEmail(event.target.value),
          placeholder: 'Email bisnis Anda',
          required: true,
        }),
        e('textarea', {
          value: message,
          onChange: (event) => setMessage(event.target.value),
          placeholder: 'Jelaskan kebutuhan inti Anda',
          rows: 4,
          required: true,
        }),
        e('button', { type: 'submit', className: 'btn btn-primary cta-button' }, 'Kirim kebutuhan awal'),
      ),
      submitted ? e('p', { className: 'success-msg' }, 'Terima kasih! Tim Somansa akan menghubungi Anda dalam 1x24 jam.') : null,
      e('p', { className: 'cta-note' }, 'Atau kirim ringkasan kebutuhan Anda ke hello@somansa.id — tim kami akan menyiapkan rekomendasi awal.'),
    ),
    e(
      'a',
      { href: '#top', className: 'back-to-top', 'aria-label': 'Kembali ke atas' },
      '↑',
    ),
    e('footer', { className: 'footer' }, `© ${new Date().getFullYear()} Somansa. Dirancang untuk kepercayaan enterprise.`),
  );
}
