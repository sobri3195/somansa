import React from 'https://esm.sh/react@18.3.1';

const { useEffect, useMemo, useState } = React;
const e = React.createElement;

const navLinks = [
  { label: 'Solusi', href: '#solusi' },
  { label: 'Layanan', href: '#layanan' },
  { label: 'Proses', href: '#proses' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Kontak', href: '#kontak' },
];

const metrics = [
  { value: '20+', label: 'Produk & modul digital' },
  { value: '5', label: 'Domain layanan utama' },
  { value: '99.9%', label: 'Target ketersediaan sistem' },
];

const solutions = [
  {
    title: 'Health Information System',
    desc: 'Platform SIMRS/SIMKlinik modular untuk operasional klinik, rumah sakit, dan jaringan layanan kesehatan.',
    badge: 'Core Platform',
    icon: 'building',
  },
  {
    title: 'AI Clinical Support',
    desc: 'Asistensi AI untuk radiologi dan alur laboratorium agar proses triase serta interpretasi awal lebih efisien.',
    badge: 'AI Engine',
    icon: 'scan',
  },
  {
    title: 'HomeCare Orchestration',
    desc: 'Penjadwalan kunjungan, koordinasi tenaga medis, dan pemantauan layanan pasien dari satu dashboard.',
    badge: 'Field Ops',
    icon: 'home',
  },
  {
    title: 'Pharmacy & Inventory',
    desc: 'Manajemen resep, stok, distribusi, dan pelaporan farmasi yang terhubung ke data layanan pasien.',
    badge: 'Integrated',
    icon: 'pill',
  },
  {
    title: 'Custom Product Development',
    desc: 'End-to-end product development untuk inisiatif digital health dari discovery, UX, engineering, hingga support.',
    badge: 'Professional Service',
    icon: 'code',
  },
  {
    title: 'Medical Education Platform',
    desc: 'Sistem pembelajaran tenaga kesehatan: bank soal, kurikulum digital, dan tracking progres peserta.',
    badge: 'Learning',
    icon: 'graduation',
  },
];

const servicePillars = [
  {
    title: 'Strategi & Discovery',
    desc: 'Audit proses bisnis, pemetaan use case, dan prioritas roadmap implementasi.',
    icon: 'search',
  },
  {
    title: 'Implementasi Terstruktur',
    desc: 'Deployment bertahap dengan standar kualitas, dokumentasi, dan kontrol risiko.',
    icon: 'layers',
  },
  {
    title: 'Data & Integrasi',
    desc: 'Sinkronisasi lintas aplikasi, migrasi data, dan interoperabilitas sistem existing.',
    icon: 'link',
  },
  {
    title: 'Enablement Tim',
    desc: 'Training pengguna, playbook operasional, dan pendampingan untuk adopsi yang berkelanjutan.',
    icon: 'users',
  },
];

const processSteps = [
  { title: 'Assessment', desc: 'Menilai kebutuhan organisasi, kesiapan data, dan target KPI utama.' },
  { title: 'Blueprint', desc: 'Merancang arsitektur solusi, alur implementasi, serta prioritas modul.' },
  { title: 'Execution', desc: 'Pengembangan/implementasi bertahap dengan quality assurance terukur.' },
  { title: 'Scale & Support', desc: 'Optimasi performa, monitoring, dan ekspansi modul sesuai pertumbuhan.' },
];

const tabsData = {
  Klinik: {
    useCase: 'Menyatukan pendaftaran, rekam medis, farmasi, billing, dan laporan operasional dalam satu alur kerja.',
    benefits: ['Administrasi lebih efisien', 'Koordinasi antar tim meningkat', 'Pelaporan lebih cepat dan akurat'],
    features: ['SIMKlinik terintegrasi', 'Dashboard operasional', 'Manajemen jadwal & antrean'],
  },
  Dokter: {
    useCase: 'Menyediakan konteks klinis yang relevan agar pengambilan keputusan medis lebih tepat waktu.',
    benefits: ['Akses informasi pasien lebih cepat', 'Dokumentasi klinis lebih rapi', 'Kolaborasi lintas unit lebih lancar'],
    features: ['Ringkasan riwayat pasien', 'Integrasi hasil lab', 'Template catatan medis'],
  },
  Pasien: {
    useCase: 'Meningkatkan pengalaman layanan dari booking, konsultasi, hingga tindak lanjut perawatan.',
    benefits: ['Alur layanan lebih jelas', 'Komunikasi perawatan lebih baik', 'Kontinuitas layanan terjaga'],
    features: ['Jadwal & pengingat', 'Layanan HomeCare', 'Riwayat layanan terpadu'],
  },
  Lab: {
    useCase: 'Mempercepat pengelolaan order dan distribusi hasil pemeriksaan secara aman ke unit terkait.',
    benefits: ['Order lebih terstruktur', 'Minim input berulang', 'Waktu distribusi hasil lebih singkat'],
    features: ['Tracking order', 'Status pemeriksaan real-time', 'Integrasi hasil ke SIMRS/SIMKlinik'],
  },
};

const faqItems = [
  {
    q: 'Apakah Somansa dapat menyesuaikan dengan sistem yang sudah berjalan?',
    a: 'Bisa. Kami memulai dengan asesmen integrasi dan menyusun rencana transisi bertahap agar operasional tetap stabil.',
  },
  {
    q: 'Berapa lama implementasi umumnya?',
    a: 'Durasi tergantung kompleksitas modul, jumlah integrasi, dan kesiapan data. Pendekatan kami berfokus pada quick wins terlebih dahulu.',
  },
  {
    q: 'Apakah tersedia pengembangan custom dan white-label?',
    a: 'Tersedia. Tim Somansa mendukung penyesuaian brand, alur kerja, serta fitur spesifik sesuai kebutuhan organisasi.',
  },
  {
    q: 'Bagaimana dukungan pasca go-live?',
    a: 'Kami menyediakan support berkelanjutan, monitoring sistem, pelatihan lanjutan, dan evaluasi periodik berbasis KPI.',
  },
];

function Icon({ name }) {
  const paths = {
    scan: 'M4 8V6a2 2 0 0 1 2-2h2M16 4h2a2 2 0 0 1 2 2v2M20 16v2a2 2 0 0 1-2 2h-2M8 20H6a2 2 0 0 1-2-2v-2M9 9h6v6H9z',
    building: 'M4 20V6a2 2 0 0 1 2-2h8v16M14 10h6v10M8 8h2M8 12h2M8 16h2M16 14h2',
    home: 'M3 11l9-7 9 7M5 10v10h14V10M10 20v-6h4v6',
    pill: 'M10.5 4.5a4.24 4.24 0 0 1 6 6l-6 6a4.24 4.24 0 1 1-6-6zM8 13h8',
    code: 'M8 8l-4 4 4 4M16 8l4 4-4 4M14 4l-4 16',
    graduation: 'M3 9l9-4 9 4-9 4-9-4zm3 4v4c0 1.5 3 3 6 3s6-1.5 6-3v-4',
    check: 'M20 6L9 17l-5-5',
    menu: 'M4 6h16M4 12h16M4 18h16',
    x: 'M6 6l12 12M18 6L6 18',
    link: 'M10 13a5 5 0 0 1 0-7l2-2a5 5 0 0 1 7 7l-1 1M14 11a5 5 0 0 1 0 7l-2 2a5 5 0 1 1-7-7l1-1',
    layers: 'M12 3l9 5-9 5-9-5 9-5zm0 7l9 5-9 5-9-5',
    users: 'M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 7a4 4 0 1 0 0 .01M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75',
    search: 'M11 19a8 8 0 1 1 5.3-14l4.7 4.7-1.4 1.4-4.7-4.7A8 8 0 0 1 11 19z',
  };

  return e(
    'svg',
    { viewBox: '0 0 24 24', className: 'icon', fill: 'none', stroke: 'currentColor', strokeWidth: '1.8', strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': 'true' },
    e('path', { d: paths[name] || paths.check }),
  );
}

function Button({ href, variant = 'secondary', children }) {
  return e('a', { href, className: `btn btn-${variant}` }, children);
}

function Badge({ children }) {
  return e('span', { className: 'badge' }, children);
}

function Sheet({ open, onClose }) {
  return e('div', { className: `sheet ${open ? 'open' : ''}` }, [
    e('button', { className: 'sheet-backdrop', 'aria-label': 'Tutup menu', onClick: onClose, key: 'backdrop' }),
    e('div', { className: 'sheet-panel', key: 'panel' }, [
      e('div', { className: 'sheet-head', key: 'head' }, [
        e('strong', { key: 'title' }, 'Navigasi'),
        e('button', { className: 'icon-btn', onClick: onClose, 'aria-label': 'Tutup menu', key: 'close' }, e(Icon, { name: 'x' })),
      ]),
      e('div', { className: 'sheet-links', key: 'links' }, navLinks.map((item) => e('a', { href: item.href, key: item.href, onClick: onClose }, item.label))),
      e(Button, { href: '#kontak', variant: 'primary', key: 'cta' }, 'Jadwalkan Konsultasi'),
    ]),
  ]);
}

export function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('Klinik');
  const [activeFaq, setActiveFaq] = useState(null);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const activeSolution = useMemo(() => tabsData[activeTab], [activeTab]);

  return e('div', { className: 'page-shell' }, [
    e('header', { className: `header ${isScrolled ? 'header-scrolled' : ''}`, key: 'header' },
      e('div', { className: 'container nav-wrap' }, [
        e('a', { href: '#top', className: 'brand', key: 'brand' }, [e('span', { className: 'brand-mark' }, 'S'), e('span', {}, 'SOMANSA')]),
        e('nav', { className: 'nav-links', key: 'desktop-nav' }, navLinks.map((item) => e('a', { href: item.href, key: item.href }, item.label))),
        e('div', { className: 'nav-actions', key: 'actions' }, [
          e(Button, { href: '#kontak', variant: 'primary', key: 'hubungi' }, 'Jadwalkan Konsultasi'),
          e('button', { className: 'icon-btn menu-btn', 'aria-label': 'Buka menu', onClick: () => setMenuOpen(true), key: 'menu' }, e(Icon, { name: 'menu' })),
        ]),
      ]),
    ),

    e('main', { id: 'top' }, [
      e('section', { className: 'section hero', key: 'hero' },
        e('div', { className: 'container hero-grid' }, [
          e('div', { className: 'hero-copy', key: 'copy' }, [
            e(Badge, { key: 'badge' }, 'Enterprise Healthtech Partner'),
            e('h1', { key: 'title' }, 'Landing page baru Somansa: lebih profesional, lebih kredibel, dan siap konversi.'),
            e('p', { className: 'hero-lead', key: 'lead' }, 'Kami membantu institusi kesehatan membangun layanan digital modern melalui kombinasi platform terintegrasi, implementasi terstruktur, dan dukungan jangka panjang.'),
            e('div', { className: 'hero-actions', key: 'hero-actions' }, [
              e(Button, { href: '#solusi', variant: 'primary', key: 'produk' }, 'Lihat Solusi'),
              e(Button, { href: '#proses', variant: 'secondary', key: 'proses' }, 'Pelajari Proses'),
            ]),
            e('div', { className: 'metric-row', key: 'metrics' }, metrics.map((item) => e('div', { className: 'metric-item', key: item.label }, [e('strong', {}, item.value), e('span', {}, item.label)]))),
          ]),
          e('div', { className: 'hero-panel', key: 'panel' }, [
            e('div', { className: 'panel-glow glow-a', 'aria-hidden': 'true', key: 'ga' }),
            e('div', { className: 'panel-glow glow-b', 'aria-hidden': 'true', key: 'gb' }),
            e('article', { className: 'panel-card', key: 'card' }, [
              e('p', { className: 'mini-label' }, 'Operational Impact'),
              e('h2', {}, 'Framework implementasi yang jelas untuk eksekusi cepat.'),
              e('div', { className: 'focus-list' }, [
                e('div', { className: 'focus-item', key: 'f1' }, [e(Icon, { name: 'check' }), e('div', {}, [e('strong', {}, 'Blueprint berbasis prioritas'), e('span', {}, 'Mulai dari area berdampak tinggi dengan indikator keberhasilan terukur.')])]),
                e('div', { className: 'focus-item', key: 'f2' }, [e(Icon, { name: 'check' }), e('div', {}, [e('strong', {}, 'Integrasi sistem existing'), e('span', {}, 'Pendekatan modular agar transisi tetap aman dan minim gangguan.')])]),
                e('div', { className: 'focus-item', key: 'f3' }, [e(Icon, { name: 'check' }), e('div', {}, [e('strong', {}, 'Governance & support'), e('span', {}, 'Dokumentasi, training, dan support berkelanjutan untuk stabilitas operasional.')])]),
              ]),
            ]),
          ]),
        ]),
      ),

      e('section', { id: 'solusi', className: 'section', key: 'solusi' },
        e('div', { className: 'container' }, [
          e('div', { className: 'section-head' }, [e(Badge, {}, 'Solusi'), e('h2', {}, 'Portofolio produk untuk ekosistem kesehatan modern'), e('p', {}, 'Setiap produk dapat berdiri sendiri maupun terhubung sebagai platform terpadu, sehingga organisasi bisa bertumbuh secara bertahap tanpa mengorbankan konsistensi data.')]),
          e('div', { className: 'product-grid' }, solutions.map((item) =>
            e('article', { className: 'card product-card', key: item.title }, [
              e('div', { className: 'card-head' }, [e('span', { className: 'icon-wrap' }, e(Icon, { name: item.icon })), e('span', { className: 'chip' }, item.badge)]),
              e('h3', {}, item.title),
              e('p', {}, item.desc),
            ]),
          )),
        ]),
      ),

      e('section', { id: 'layanan', className: 'section', key: 'layanan' },
        e('div', { className: 'container' }, [
          e('div', { className: 'section-head compact' }, [e(Badge, {}, 'Layanan Profesional'), e('h2', {}, 'Pendampingan menyeluruh dari strategi hingga scale')]),
          e('div', { className: 'why-grid' }, servicePillars.map((item) => e('article', { className: 'card why-card', key: item.title }, [e('span', { className: 'icon-wrap' }, e(Icon, { name: item.icon })), e('h3', {}, item.title), e('p', {}, item.desc)]))),
        ]),
      ),

      e('section', { className: 'section', key: 'use-case' },
        e('div', { className: 'container' }, [
          e('div', { className: 'section-head compact' }, [e(Badge, {}, 'Use Case'), e('h2', {}, 'Disesuaikan untuk peran pengguna yang berbeda')]),
          e('div', { className: 'tabs', role: 'tablist', 'aria-label': 'Solusi pengguna' }, Object.keys(tabsData).map((tab) => e('button', { className: `tab ${tab === activeTab ? 'active' : ''}`, key: tab, onClick: () => setActiveTab(tab), role: 'tab', 'aria-selected': String(tab === activeTab) }, tab))),
          e('article', { className: 'card tabs-panel' }, [
            e('div', { className: 'solution-grid' }, [
              e('div', {}, [e('h3', {}, activeTab), e('p', {}, activeSolution.useCase)]),
              e('div', {}, [e('h4', {}, 'Manfaat utama'), e('ul', { className: 'list' }, activeSolution.benefits.map((b) => e('li', { key: b }, b)))]),
              e('div', {}, [e('h4', {}, 'Fitur relevan'), e('ul', { className: 'list' }, activeSolution.features.map((f) => e('li', { key: f }, f)))]),
            ]),
          ]),
        ]),
      ),

      e('section', { id: 'proses', className: 'section', key: 'proses' },
        e('div', { className: 'container' }, [
          e('div', { className: 'section-head compact' }, [e(Badge, {}, 'Delivery Process'), e('h2', {}, 'Metodologi implementasi yang transparan dan terukur')]),
          e('div', { className: 'process-grid' }, processSteps.map((item, idx) => e('article', { className: 'card process-card', key: item.title }, [e('span', { className: 'step-index' }, `0${idx + 1}`), e('h3', {}, item.title), e('p', {}, item.desc)]))),
        ]),
      ),

      e('section', { id: 'faq', className: 'section', key: 'faq' },
        e('div', { className: 'container' }, [
          e('div', { className: 'section-head compact' }, [e(Badge, {}, 'FAQ'), e('h2', {}, 'Pertanyaan umum seputar kolaborasi dengan Somansa')]),
          e('div', { className: 'accordion' }, faqItems.map((item, idx) => {
            const open = idx === activeFaq;
            return e('article', { className: `card faq-item ${open ? 'open' : ''}`, key: item.q }, [
              e('button', { className: 'faq-trigger', onClick: () => setActiveFaq(open ? null : idx), 'aria-expanded': String(open) }, [e('span', {}, item.q), e('span', { className: 'faq-plus' }, open ? '−' : '+')]),
              open ? e('p', { className: 'faq-content' }, item.a) : null,
            ]);
          })),
        ]),
      ),

      e('section', { id: 'kontak', className: 'section', key: 'cta' },
        e('div', { className: 'container' }, [
          e('article', { className: 'card cta-card' }, [
            e(Badge, {}, 'Next Step'),
            e('h2', {}, 'Butuh landing page dan positioning produk yang lebih enterprise?'),
            e('p', {}, 'Kami siap membantu Anda merancang strategi digital, mengimplementasikan platform, dan meningkatkan pengalaman layanan secara menyeluruh.'),
            e('div', { className: 'hero-actions' }, [
              e(Button, { href: 'mailto:hello@somansa.id', variant: 'primary' }, 'Hubungi Tim Somansa'),
              e(Button, { href: 'mailto:hello@somansa.id?subject=Request%20Company%20Deck', variant: 'secondary' }, 'Minta Company Deck'),
            ]),
          ]),
        ]),
      ),
    ]),

    e('footer', { className: 'footer', key: 'footer' },
      e('div', { className: 'container footer-grid' }, [
        e('div', { key: 'desc' }, [
          e('a', { className: 'brand footer-brand', href: '#top' }, [e('span', { className: 'brand-mark' }, 'S'), e('span', {}, 'SOMANSA')]),
          e('p', {}, 'Healthtech partner untuk transformasi layanan kesehatan yang terintegrasi, aman, dan berkelanjutan.'),
        ]),
        e('div', { key: 'links' }, [e('h4', {}, 'Navigasi'), e('div', { className: 'footer-links' }, navLinks.map((item) => e('a', { href: item.href, key: item.href }, item.label)))]),
        e('div', { key: 'contact' }, [e('h4', {}, 'Kontak'), e('a', { href: 'mailto:hello@somansa.id', className: 'footer-email' }, 'hello@somansa.id')]),
      ]),
    ),

    e('div', { className: 'container copyright', key: 'copy' }, `© ${new Date().getFullYear()} Somansa. All rights reserved.`),
    e(Sheet, { open: menuOpen, onClose: () => setMenuOpen(false), key: 'sheet' }),
  ]);
}
