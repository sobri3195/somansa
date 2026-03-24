import React from 'https://esm.sh/react@18.3.1';

const { useEffect, useMemo, useState } = React;
const e = React.createElement;

const navLinks = [
  { label: 'Fokus', href: '#fokus' },
  { label: 'Produk', href: '#produk' },
  { label: 'Solusi', href: '#solusi' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Kontak', href: '#kontak' },
];

const products = [
  {
    title: 'AI Radiologi & Lab',
    desc: 'Analisis berbasis AI untuk membantu triase awal, asistensi pembacaan, dan alur kerja lab yang lebih cepat.',
    badge: 'Terintegrasi',
    icon: 'scan',
  },
  {
    title: 'SIMRS & SIMKlinik',
    desc: 'Operasional klinik dan rumah sakit dari pendaftaran, rekam medis, billing, hingga pelaporan dalam satu sistem.',
    badge: 'Scalable',
    icon: 'building',
  },
  {
    title: 'HomeCare',
    desc: 'Manajemen layanan kunjungan pasien dengan penjadwalan, monitoring, dan komunikasi tim medis yang rapi.',
    badge: 'Custom',
    icon: 'home',
  },
  {
    title: 'Apotek',
    desc: 'Sistem apotek untuk inventori, resep, penjualan, dan integrasi ke layanan klinik agar data tetap sinkron.',
    badge: 'Terintegrasi',
    icon: 'pill',
  },
  {
    title: 'Software House',
    desc: 'Pengembangan produk digital kesehatan secara end-to-end, dari discovery, UI/UX, engineering, hingga maintenance.',
    badge: 'Custom',
    icon: 'code',
  },
  {
    title: 'Edukasi Dokter',
    desc: 'Platform pembelajaran, bank soal, dan pengelolaan materi untuk program edukasi tenaga kesehatan modern.',
    badge: 'Scalable',
    icon: 'graduation',
  },
];

const tabsData = {
  Klinik: {
    useCase: 'Sinkronisasi pendaftaran, antrean, rekam medis, farmasi, dan laporan operasional harian.',
    benefits: ['Waktu administrasi lebih singkat', 'Data pasien lebih konsisten', 'Koordinasi lintas tim lebih rapi'],
    features: ['SIMKlinik terintegrasi', 'Laporan operasional', 'Manajemen antrean & jadwal'],
  },
  Dokter: {
    useCase: 'Akses informasi klinis lebih cepat untuk mendukung keputusan medis dan tindak lanjut pasien.',
    benefits: ['Akses riwayat pasien lebih cepat', 'Kolaborasi dengan lab lebih efisien', 'Dokumentasi klinis lebih tertata'],
    features: ['Ringkasan pasien', 'Integrasi hasil lab', 'Template catatan medis'],
  },
  Pasien: {
    useCase: 'Pengalaman layanan yang lebih nyaman dari booking, konsultasi, hingga pemantauan berkelanjutan.',
    benefits: ['Alur layanan lebih jelas', 'Komunikasi perawatan lebih mudah', 'Kontinuitas layanan lebih baik'],
    features: ['Jadwal dan pengingat', 'Layanan HomeCare', 'Riwayat layanan terpusat'],
  },
  Lab: {
    useCase: 'Pengelolaan order pemeriksaan dan distribusi hasil yang terhubung langsung ke sistem fasilitas kesehatan.',
    benefits: ['Proses order lebih cepat', 'Minim input berulang', 'Distribusi hasil lebih aman dan rapi'],
    features: ['Manajemen order', 'Status proses pemeriksaan', 'Integrasi hasil ke SIMRS/SIMKlinik'],
  },
};

const whyItems = [
  {
    title: 'Implementasi cepat',
    desc: 'Struktur produk disiapkan agar adopsi lebih ringkas untuk tim operasional dan klinis.',
    icon: 'bolt',
  },
  {
    title: 'Modular',
    desc: 'Mulai dari kebutuhan inti, lalu tambah modul sesuai pertumbuhan layanan Anda.',
    icon: 'layers',
  },
  {
    title: 'Integrasi lebih rapi',
    desc: 'Arsitektur data dirancang untuk mengurangi silo antar aplikasi kesehatan.',
    icon: 'link',
  },
  {
    title: 'Siap scale',
    desc: 'Fondasi teknis dibangun agar stabil saat volume pasien dan layanan meningkat.',
    icon: 'expand',
  },
  {
    title: 'Fokus industri kesehatan',
    desc: 'Pendekatan produk berangkat dari alur kerja nyata di klinik, dokter, pasien, dan lab.',
    icon: 'heart',
  },
  {
    title: 'Dukungan custom',
    desc: 'Tim kami membantu penyesuaian fitur agar sejalan dengan proses dan target institusi.',
    icon: 'wrench',
  },
];

const faqItems = [
  {
    q: 'Apakah bisa integrasi dengan sistem lama?',
    a: 'Bisa. Kami melakukan asesmen sistem existing terlebih dahulu, lalu menyiapkan skema integrasi bertahap agar transisi tetap aman.',
  },
  {
    q: 'Berapa lama implementasi?',
    a: 'Durasi bergantung pada cakupan modul dan kesiapan data. Kami biasanya memulai dari kebutuhan prioritas agar hasil bisa dirasakan lebih cepat.',
  },
  {
    q: 'Apakah bisa custom / white-label?',
    a: 'Bisa. Somansa menyediakan opsi pengembangan custom termasuk penyesuaian brand, alur kerja, dan fitur spesifik institusi.',
  },
  {
    q: 'Bagaimana keamanan data?',
    a: 'Kami menerapkan praktik keamanan berlapis pada akses, infrastruktur, dan tata kelola data sesuai kebutuhan operasional organisasi kesehatan.',
  },
  {
    q: 'Apakah tersedia training dan support?',
    a: 'Tersedia. Kami menyiapkan onboarding, pelatihan pengguna, dan dukungan teknis pasca implementasi agar tim lebih siap menjalankan sistem.',
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
    bolt: 'M13 2L4 14h6l-1 8 9-12h-6z',
    layers: 'M12 3l9 5-9 5-9-5 9-5zm0 7l9 5-9 5-9-5',
    link: 'M10 13a5 5 0 0 1 0-7l2-2a5 5 0 0 1 7 7l-1 1M14 11a5 5 0 0 1 0 7l-2 2a5 5 0 1 1-7-7l1-1',
    expand: 'M8 3H3v5M16 3h5v5M21 16v5h-5M3 16v5h5',
    heart: 'M12 21s-7-4.3-9-8.9C1.6 8.5 4.2 5 7.7 5c2 0 3.4 1 4.3 2.3C12.9 6 14.3 5 16.3 5 19.8 5 22.4 8.5 21 12.1 19 16.7 12 21 12 21z',
    wrench: 'M14.7 6.3a4 4 0 0 0-5 5l-5.6 5.6a2 2 0 1 0 2.8 2.8l5.6-5.6a4 4 0 0 0 5-5l-2.2 2.2-2.8-2.8z',
    check: 'M20 6L9 17l-5-5',
    menu: 'M4 6h16M4 12h16M4 18h16',
    x: 'M6 6l12 12M18 6L6 18',
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
      e(
        'div',
        { className: 'sheet-links', key: 'links' },
        navLinks.map((item) =>
          e(
            'a',
            {
              href: item.href,
              key: item.href,
              onClick: onClose,
            },
            item.label,
          ),
        ),
      ),
      e(Button, { href: '#kontak', variant: 'primary', key: 'cta' }, 'Hubungi Kami'),
    ]),
  ]);
}

export function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('Klinik');
  const [activeFaq, setActiveFaq] = useState(null);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const activeSolution = useMemo(() => tabsData[activeTab], [activeTab]);

  return e('div', { className: 'page-shell' }, [
    e('header', { className: `header ${isScrolled ? 'header-scrolled' : ''}`, key: 'header' },
      e('div', { className: 'container nav-wrap' }, [
        e('a', { href: '#top', className: 'brand', key: 'brand' }, [
          e('span', { className: 'brand-mark', key: 'mark' }, 'S'),
          e('span', { key: 'txt' }, 'SOMANSA'),
        ]),
        e('nav', { className: 'nav-links', key: 'desktop-nav' }, navLinks.map((item) => e('a', { href: item.href, key: item.href }, item.label))),
        e('div', { className: 'nav-actions', key: 'actions' }, [
          e(Button, { href: '#kontak', variant: 'primary', key: 'hubungi' }, 'Hubungi Kami'),
          e('button', { className: 'icon-btn menu-btn', 'aria-label': 'Buka menu', onClick: () => setMenuOpen(true), key: 'menu' }, e(Icon, { name: 'menu' })),
        ]),
      ]),
    ),

    e('main', { id: 'top' }, [
      e('section', { id: 'fokus', className: 'section hero', key: 'hero' },
        e('div', { className: 'container hero-grid' }, [
          e('div', { className: 'hero-copy', key: 'copy' }, [
            e(Badge, { key: 'badge' }, 'Ekosistem Digital Kesehatan'),
            e('h1', { key: 'title' }, 'Satu ekosistem produk kesehatan untuk operasional yang lebih terhubung.'),
            e('p', { className: 'hero-lead', key: 'lead' }, 'Somansa membantu klinik, dokter, pasien, dan lab menjalankan layanan modern dengan alur yang rapi, jelas, dan siap berkembang.'),
            e('div', { className: 'hero-actions', key: 'hero-actions' }, [
              e(Button, { href: '#produk', variant: 'primary', key: 'produk' }, 'Lihat Produk'),
              e(Button, { href: 'mailto:hello@somansa.id', variant: 'secondary', key: 'email' }, 'Konsultasi / Email Kami'),
            ]),
          ]),
          e('div', { className: 'hero-panel', key: 'panel' }, [
            e('div', { className: 'panel-glow glow-a', 'aria-hidden': 'true', key: 'ga' }),
            e('div', { className: 'panel-glow glow-b', 'aria-hidden': 'true', key: 'gb' }),
            e('article', { className: 'panel-card', key: 'card' }, [
              e('p', { className: 'mini-label', key: 'ml' }, 'Fokus Somansa'),
              e('h2', { key: 'h2' }, 'Produk digital yang siap dipakai dan mudah dikembangkan.'),
              e('div', { className: 'focus-list', key: 'list' }, [
                e('div', { className: 'focus-item', key: 'f1' }, [e(Icon, { name: 'check' }), e('div', {}, [e('strong', {}, 'Cepat diimplementasikan'), e('span', {}, 'Onboarding lebih ringkas untuk tim Anda.')])]),
                e('div', { className: 'focus-item', key: 'f2' }, [e(Icon, { name: 'check' }), e('div', {}, [e('strong', {}, 'Sistem saling terhubung'), e('span', {}, 'Data lintas layanan tetap sinkron.')])]),
                e('div', { className: 'focus-item', key: 'f3' }, [e(Icon, { name: 'check' }), e('div', {}, [e('strong', {}, 'Siap berkembang'), e('span', {}, 'Modular untuk kebutuhan tahap berikutnya.')])]),
              ]),
            ]),
          ]),
        ]),
      ),

      e('section', { id: 'produk', className: 'section', key: 'produk-section' },
        e('div', { className: 'container' }, [
          e('div', { className: 'section-head', key: 'head' }, [e(Badge, {}, 'Produk'), e('h2', {}, 'Yang kami bangun'), e('p', {}, 'Portofolio Somansa dirancang agar tiap solusi bisa berdiri sendiri sekaligus saling terintegrasi.')]),
          e('div', { className: 'product-grid', key: 'grid' }, products.map((item) =>
            e('article', { className: 'card product-card', key: item.title }, [
              e('div', { className: 'card-head', key: 'ch' }, [e('span', { className: 'icon-wrap' }, e(Icon, { name: item.icon })), e('span', { className: 'chip' }, item.badge)]),
              e('h3', { key: 't' }, item.title),
              e('p', { key: 'd' }, item.desc),
            ]),
          )),
        ]),
      ),

      e('section', { id: 'solusi', className: 'section', key: 'solusi' },
        e('div', { className: 'container' }, [
          e('div', { className: 'section-head', key: 'head' }, [e(Badge, {}, 'Solusi Berdasarkan Pengguna'), e('h2', {}, 'Disesuaikan untuk peran yang berbeda'), e('p', {}, 'Setiap peran memiliki kebutuhan operasional yang unik. Pilih peran untuk melihat use case, manfaat, dan fitur relevan.')]),
          e('div', { className: 'tabs', role: 'tablist', 'aria-label': 'Solusi pengguna', key: 'tabs' }, Object.keys(tabsData).map((tab) => e('button', { className: `tab ${tab === activeTab ? 'active' : ''}`, key: tab, onClick: () => setActiveTab(tab), role: 'tab', 'aria-selected': String(tab === activeTab) }, tab))),
          e('article', { className: 'card tabs-panel', key: 'panel' }, [
            e('div', { className: 'solution-grid' }, [
              e('div', {}, [e('h3', {}, activeTab), e('p', {}, activeSolution.useCase)]),
              e('div', {}, [e('h4', {}, 'Manfaat utama'), e('ul', { className: 'list' }, activeSolution.benefits.map((b) => e('li', { key: b }, b)))]),
              e('div', {}, [e('h4', {}, 'Fitur relevan'), e('ul', { className: 'list' }, activeSolution.features.map((f) => e('li', { key: f }, f)))]),
            ]),
          ]),
        ]),
      ),

      e('section', { className: 'section', key: 'why' },
        e('div', { className: 'container' }, [
          e('div', { className: 'section-head', key: 'head' }, [e(Badge, {}, 'Why Somansa'), e('h2', {}, 'Dibangun untuk kebutuhan kesehatan yang nyata')]),
          e('div', { className: 'why-grid', key: 'wg' }, whyItems.map((item) => e('article', { className: 'card why-card', key: item.title }, [e('span', { className: 'icon-wrap' }, e(Icon, { name: item.icon })), e('h3', {}, item.title), e('p', {}, item.desc)]))),
        ]),
      ),

      e('section', { className: 'section trust', key: 'trust' },
        e('div', { className: 'container' }, [
          e('div', { className: 'section-head compact', key: 'head' }, [e(Badge, {}, 'Kepercayaan & Kredibilitas'), e('h2', {}, 'Dirancang untuk kolaborasi jangka panjang')]),
          e('div', { className: 'card trust-card', key: 'tc' }, [
            e('p', {}, 'Somansa berfokus pada kemitraan implementatif bersama institusi kesehatan, tim dokter, dan unit operasional digital.'),
            e('div', { className: 'logo-row' }, ['Mitra Klinik', 'Jaringan Dokter', 'Tim Lab', 'Unit Operasional'].map((item) => e('span', { key: item }, item))),
          ]),
        ]),
      ),

      e('section', { id: 'faq', className: 'section', key: 'faq' },
        e('div', { className: 'container' }, [
          e('div', { className: 'section-head compact', key: 'head' }, [e(Badge, {}, 'FAQ'), e('h2', {}, 'Pertanyaan yang sering ditanyakan')]),
          e('div', { className: 'accordion', key: 'acc' }, faqItems.map((item, idx) => {
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
            e(Badge, {}, 'Kolaborasi'),
            e('h2', {}, 'Bangun layanan kesehatan digital yang lebih siap untuk masa depan.'),
            e('p', {}, 'Diskusikan kebutuhan organisasi Anda bersama tim Somansa untuk strategi implementasi yang tepat.'),
            e('div', { className: 'hero-actions' }, [
              e(Button, { href: 'mailto:hello@somansa.id', variant: 'primary' }, 'Hubungi Somansa'),
              e(Button, { href: 'mailto:hello@somansa.id?subject=Jadwalkan%20Diskusi', variant: 'secondary' }, 'Jadwalkan Diskusi'),
            ]),
          ]),
        ]),
      ),
    ]),

    e('footer', { className: 'footer', key: 'footer' },
      e('div', { className: 'container footer-grid' }, [
        e('div', { key: 'desc' }, [
          e('a', { className: 'brand footer-brand', href: '#top' }, [e('span', { className: 'brand-mark' }, 'S'), e('span', {}, 'SOMANSA')]),
          e('p', {}, 'Brand health-tech yang membangun ekosistem produk digital untuk klinik, dokter, pasien, dan laboratorium.'),
        ]),
        e('div', { key: 'links' }, [e('h4', {}, 'Navigasi'), e('div', { className: 'footer-links' }, navLinks.map((item) => e('a', { href: item.href, key: item.href }, item.label)))]),
        e('div', { key: 'contact' }, [e('h4', {}, 'Kontak'), e('a', { href: 'mailto:hello@somansa.id', className: 'footer-email' }, 'hello@somansa.id')]),
      ]),
    ),

    e('div', { className: 'container copyright', key: 'copy' }, `© ${new Date().getFullYear()} Somansa. All rights reserved.`),
    e(Sheet, { open: menuOpen, onClose: () => setMenuOpen(false), key: 'sheet' }),
  ]);
}
