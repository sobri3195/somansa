import React from 'https://esm.sh/react@18.3.1';

const navLinks = [
  { label: 'Layanan', href: '#services' },
  { label: 'Inisiatif', href: '#portfolio' },
  { label: 'Proses', href: '#process' },
  { label: 'Kontak', href: '#cta' },
];

const serviceItems = [
  {
    icon: '✦',
    title: 'HealthTech Product Engineering',
    desc: 'Membangun platform klinik, homecare, e-health, hingga sistem operasional medis dengan fondasi arsitektur yang aman dan scalable.',
  },
  {
    icon: '◉',
    title: 'Applied AI Solutions',
    desc: 'Mengintegrasikan AI untuk triage, diagnostic assist, automation workflow, dan intelligence layer yang relevan untuk use case nyata.',
  },
  {
    icon: '▣',
    title: 'Enterprise System Modernization',
    desc: 'Merapikan proses bisnis lewat integrasi SIMRS/SIMKlinik, dashboard manajemen, dan digital operations yang siap tumbuh jangka panjang.',
  },
];

const portfolioItems = [
  {
    title: 'CogniScan',
    category: 'AI Diagnostic Platform',
    industry: 'Radiologi & Laboratorium',
    impact: 'Mendukung proses analisis lebih cepat dan konsisten dengan AI-assisted workflow untuk tim medis.',
  },
  {
    title: 'Kaist Medika Ecosystem',
    category: 'Clinical Operations Suite',
    industry: 'Klinik & Homecare',
    impact: 'Menyatukan alur pasien dari registrasi, layanan tindakan, hingga follow-up homecare dalam satu sistem terintegrasi.',
  },
  {
    title: 'SIMRS & SIMKlinik Initiative',
    category: 'Hospital / Clinic System',
    industry: 'Fasilitas Kesehatan',
    impact: 'Meningkatkan visibilitas operasional dan kualitas pengambilan keputusan lewat data yang lebih rapi dan terstruktur.',
  },
  {
    title: 'Medical Commerce Stack',
    category: 'Digital Commerce Enablement',
    industry: 'Retail Kesehatan',
    impact: 'Membantu unit bisnis apotek, alat medis, dan produk dokter memperluas distribusi digital secara terukur.',
  },
];

const processSteps = [
  {
    title: 'Discovery & Strategic Alignment',
    desc: 'Audit kebutuhan, pemetaan prioritas, dan perumusan objective yang jelas untuk memastikan solusi tepat sasaran.',
  },
  {
    title: 'Design, Build & Integration',
    desc: 'Eksekusi product design dan engineering secara disiplin, dengan standar kualitas enterprise dan dokumentasi yang rapi.',
  },
  {
    title: 'Launch, Measure & Improve',
    desc: 'Go-live terkontrol, monitoring metrik bisnis, lalu iterasi terarah agar produk terus memberi dampak berkelanjutan.',
  },
];

const trustIndicators = ['Fokus: HealthTech, Product Engineering, AI', 'Execution model: end-to-end delivery', 'Kolaborasi: startup, institusi, enterprise'];

const quickStats = [
  { value: '12+', label: 'Produk & inisiatif aktif' },
  { value: '98%', label: 'Timeline delivery tercapai' },
  { value: '24/7', label: 'Monitoring untuk solusi penting' },
];

const e = React.createElement;

export function App() {
  return e(
    'div',
    { className: 'page' },
    e(
      'header',
      { className: 'hero-wrapper' },
      e(
        'nav',
        { className: 'nav' },
        e(
          'a',
          { className: 'brand-wrap', href: '#top', 'aria-label': 'Somansa' },
          e('img', { src: '/somansa-logo.svg', className: 'brand-logo', alt: 'Logo Somansa' }),
          e(
            'div',
            { className: 'brand-copy' },
            e('strong', { className: 'brand' }, 'SOMANSA'),
            e('span', null, 'HealthTech • Engineering • AI'),
          ),
        ),
        e('div', { className: 'nav-links' }, ...navLinks.map((link) => e('a', { key: link.label, href: link.href }, link.label))),
        e('a', { className: 'nav-cta', href: '#cta' }, 'Konsultasi'),
      ),
        e(
          'div',
          { className: 'hero', id: 'top' },
        e(
          'div',
          { className: 'hero-content animated-border' },
          e('p', { className: 'eyebrow' }, 'Digital partner untuk organisasi kesehatan & bisnis berbasis teknologi'),
          e('h1', null, 'Membangun Solusi HealthTech dan AI yang Siap Dipakai, Siap Tumbuh, dan Siap Dipercaya.'),
          e(
            'p',
            { className: 'lead' },
            'Somansa membantu institusi dan bisnis merancang, membangun, serta mengembangkan produk digital dengan pendekatan strategis, eksekusi rapi, dan kualitas enterprise.',
          ),
          e(
            'div',
            { className: 'hero-actions' },
            e('a', { href: '#cta', className: 'btn btn-primary' }, 'Jadwalkan Konsultasi'),
            e('a', { href: '#portfolio', className: 'btn btn-secondary' }, 'Lihat Inisiatif'),
          ),
          e('p', { className: 'hero-proof' }, 'Diskusi awal tanpa komitmen • Respon cepat untuk kebutuhan digital health & AI'),
          e(
            'div',
            { className: 'stat-row', 'aria-label': 'Statistik utama Somansa' },
            ...quickStats.map((stat) =>
              e(
                'article',
                { key: stat.label, className: 'stat-pill' },
                e('strong', null, stat.value),
                e('span', null, stat.label),
              ),
            ),
          ),
        ),
        e(
          'aside',
          { className: 'trust-block animated-border', 'aria-label': 'Company highlights' },
          e('img', { src: '/src/health-illustration.svg', className: 'trust-image', alt: 'Ilustrasi dashboard kesehatan digital Somansa' }),
          e('p', { className: 'trust-label' }, 'Company highlights'),
          e('h2', null, 'Execution partner yang fokus pada dampak bisnis.'),
          e(
            'div',
            { className: 'trust-metrics' },
            e('article', null, e('strong', null, '12+'), e('span', null, 'inisiatif lintas produk & layanan')),
            e('article', null, e('strong', null, '3 Core'), e('span', null, 'healthtech, engineering, AI solutions')),
            e('article', null, e('strong', null, 'End-to-End'), e('span', null, 'discovery sampai iterasi pasca launch')),
          ),
          e('ul', { className: 'trust-list' }, ...trustIndicators.map((item) => e('li', { key: item }, item))),
        ),
      ),
    ),
    e(
      'section',
      { className: 'section impact-strip', 'aria-label': 'nilai utama' },
      e('p', null, 'UI modern dengan nuansa premium, micro-interactions halus, dan visual hierarchy yang lebih jelas.'),
      e('p', null, 'Navigasi cepat untuk layanan, portfolio, hingga konsultasi tanpa mengganggu fokus pengunjung.'),
      e('p', null, 'Konten dirancang agar trust-building lebih kuat untuk calon partner enterprise maupun startup.'),
    ),
    e(
      'section',
      { id: 'services', className: 'section' },
      e('p', { className: 'section-kicker' }, 'Core Services'),
      e('h2', null, 'Kapabilitas yang dirancang untuk kebutuhan organisasi modern'),
      e(
        'p',
        { className: 'section-intro' },
        'Setiap layanan dibangun dengan standar delivery yang konsisten agar keputusan bisnis dapat diterjemahkan menjadi produk digital yang relevan dan bernilai jangka panjang.',
      ),
      e(
        'div',
        { className: 'service-grid' },
        ...serviceItems.map((item) =>
          e(
            'article',
            { className: 'service-card animated-border', key: item.title },
            e('span', { className: 'service-icon', 'aria-hidden': true }, item.icon),
            e('h3', null, item.title),
            e('p', null, item.desc),
          ),
        ),
      ),
    ),
    e(
      'section',
      { id: 'portfolio', className: 'section' },
      e('p', { className: 'section-kicker' }, 'Portfolio & Initiatives'),
      e('h2', null, 'Inisiatif yang menunjukkan konteks nyata dan nilai terukur'),
      e('div', { className: 'portfolio-grid' },
        ...portfolioItems.map((item, index) =>
          e(
            'article',
            { className: 'portfolio-card animated-border', key: item.title },
            e('div', { className: 'portfolio-top' }, e('span', { className: 'portfolio-index' }, `0${index + 1}`), e('span', { className: 'portfolio-badge' }, item.category)),
            e('h3', null, item.title),
            e('p', { className: 'portfolio-industry' }, item.industry),
            e('p', { className: 'portfolio-impact' }, item.impact),
          ),
        ),
      ),
    ),
    e(
      'section',
      { id: 'process', className: 'section process' },
      e('p', { className: 'section-kicker' }, 'How We Work'),
      e('h2', null, 'Proses kerja terstruktur untuk delivery yang dapat diandalkan'),
      e('p', { className: 'section-intro' }, 'Tim Somansa bekerja dengan ritme eksekusi yang jelas: discovery → build → launch & improve.'),
      e('div', { className: 'process-line', 'aria-hidden': true }),
      e(
        'div',
        { className: 'process-grid' },
        ...processSteps.map((step, index) =>
          e(
            'article',
            { className: 'step-card animated-border', key: step.title },
            e('span', { className: 'step-index' }, `Step ${index + 1}`),
            e('h3', null, step.title),
            e('p', null, step.desc),
          ),
        ),
      ),
      e('p', { className: 'process-note' }, 'Setiap fase memiliki owner, scope, dan indikator keberhasilan yang terdefinisi sejak awal.'),
    ),
    e(
      'section',
      { id: 'cta', className: 'section cta-panel animated-border' },
      e('p', { className: 'section-kicker' }, 'Start a Strategic Conversation'),
      e('h2', null, 'Butuh partner eksekusi untuk inisiatif HealthTech atau AI Anda?'),
      e(
        'p',
        { className: 'section-intro' },
        'Mari validasi prioritas, ruang lingkup, dan pendekatan implementasi terbaik untuk kebutuhan organisasi Anda.',
      ),
      e('a', { className: 'btn btn-primary btn-large', href: 'mailto:hello@somansa.id' }, 'Konsultasi dengan Tim Somansa'),
      e('p', { className: 'cta-cue' }, 'Diskusi awal tanpa komitmen • Respon cepat pada hari kerja'),
    ),
    e('footer', { className: 'footer' }, `© ${new Date().getFullYear()} Somansa. All rights reserved.`),
  );
}
