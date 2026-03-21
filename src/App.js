import React from 'https://esm.sh/react@18.3.1';

const e = React.createElement;

const navLinks = [
  { label: 'Solusi', href: '#solutions' },
  { label: 'Keunggulan', href: '#advantages' },
  { label: 'Testimoni', href: '#testimonials' },
  { label: 'Kontak', href: '#contact' },
];

const heroStats = [
  {
    value: '12+',
    label: 'Solusi lintas kesehatan, teknologi, edukasi, retail, keamanan, dan properti dalam satu ekosistem.',
  },
  {
    value: 'Terintegrasi',
    label: 'Setiap layanan dirancang untuk memperkuat efisiensi, kualitas layanan, dan pertumbuhan bisnis Anda.',
  },
  {
    value: 'Siap Berkembang',
    label: 'Cocok untuk fasilitas kesehatan, institusi pendidikan, tenaga medis, hingga bisnis digital modern.',
  },
];

const advantages = [
  {
    title: 'Ekosistem Solusi Terhubung',
    desc: 'Somansa menggabungkan layanan kesehatan, software operasional, AI, retail medis, dan pengembangan digital dalam satu payung solusi yang konsisten.',
  },
  {
    title: 'Fokus pada Dampak Nyata',
    desc: 'Setiap produk difokuskan untuk mengurangi friksi operasional, mempercepat pelayanan, dan meningkatkan pengalaman pengguna akhir.',
  },
  {
    title: 'Siap Disesuaikan dengan Kebutuhan',
    desc: 'Mulai dari implementasi teknologi hingga layanan kesehatan dan commerce, pendekatan kami fleksibel mengikuti tahap pertumbuhan organisasi Anda.',
  },
];

const products = [
  {
    name: 'CogniScan',
    category: 'AI Radiologi & Lab',
    subtitle: 'Transformasi Diagnosis & Efisiensi Laboratorium dengan Kecerdasan Buatan',
    benefits: [
      'Deteksi dini & akurat untuk identifikasi anomali yang lebih cepat dan presisi.',
      'Peningkatan produktivitas melalui alur kerja yang lebih efisien dan hemat sumber daya.',
      'Laporan komprehensif untuk pengambilan keputusan klinis yang lebih baik.',
    ],
  },
  {
    name: 'Kaist Medika',
    category: 'Klinik & HomeCare',
    subtitle: 'Layanan Kesehatan Holistik: Dari Klinik Hingga Kenyamanan Rumah Anda',
    benefits: [
      'Akses mudah & nyaman untuk konsultasi dokter, tindakan medis, dan pemantauan di mana saja.',
      'Tim medis berpengalaman dengan dokter dan perawat profesional.',
      'Pemantauan kesehatan terpersonalisasi sesuai kondisi dan kebutuhan pasien.',
    ],
  },
  {
    name: 'Klinik Kecantikan',
    category: 'Aesthetic Care',
    subtitle: 'Pancarkan Kecantikan Alami & Bangun Kepercayaan Diri Anda',
    benefits: [
      'Perawatan estetika medis teruji dengan teknologi terkini dan produk berkualitas.',
      'Konsultasi ahli untuk rekomendasi yang sesuai jenis kulit dan kebutuhan Anda.',
      'Hasil alami & tahan lama melalui prosedur yang aman dan terukur.',
    ],
  },
  {
    name: 'SIMRS & SIMKlinik',
    category: 'Sistem Operasional',
    subtitle: 'Otomatisasi Administrasi & Optimalkan Manajemen Fasilitas Kesehatan',
    benefits: [
      'Efisiensi operasional dengan data pasien, rekam medis, dan inventaris yang terpusat.',
      'Pengambilan keputusan berbasis data lewat laporan analitik yang akurat.',
      'Peningkatan pengalaman pasien pada pendaftaran, janji temu, dan pembayaran.',
    ],
  },
  {
    name: 'Klinik Rawat Luka',
    category: 'Specialized Care',
    subtitle: 'Penanganan Luka Kronis Profesional untuk Penyembuhan Lebih Cepat',
    benefits: [
      'Perawatan luka berstandar medis dengan teknik dan material terbaru.',
      'Tim ahli rawat luka yang terdiri dari dokter dan perawat tersertifikasi.',
      'Edukasi pasien & keluarga agar proses pemulihan di rumah lebih optimal.',
    ],
  },
  {
    name: 'Scrub Dokter',
    category: 'Medical Apparel',
    subtitle: 'Kenyamanan & Keanggunan untuk Tenaga Kesehatan Profesional',
    benefits: [
      'Bahan berkualitas tinggi yang nyaman, bernapas, dan tahan lama.',
      'Desain modern & ergonomis untuk mendukung mobilitas sepanjang hari.',
      'Beragam warna & ukuran agar sesuai gaya dan preferensi pengguna.',
    ],
  },
  {
    name: 'Alat Medis Dokter',
    category: 'Medical Commerce',
    subtitle: 'Akses Mudah & Terpercaya ke Peralatan Medis Berkualitas',
    benefits: [
      'Portofolio lengkap dari alat diagnosis hingga peralatan bedah.',
      'Harga kompetitif untuk kebutuhan praktik mandiri maupun institusi.',
      'Pengiriman cepat & aman dengan dukungan logistik yang andal.',
    ],
  },
  {
    name: 'Apotek',
    category: 'Pharmacy Retail',
    subtitle: 'Penyediaan Obat Terjangkau & Pelayanan Farmasi Unggul',
    benefits: [
      'Stok obat terlengkap untuk kebutuhan resep maupun non-resep.',
      'Konsultasi apoteker untuk memastikan penggunaan obat yang tepat.',
      'Layanan pesan antar untuk akses obat yang lebih mudah.',
    ],
  },
  {
    name: 'Website Ujian Dokter',
    category: 'MedEd Platform',
    subtitle: 'Persiapan Ujian Dokter Lebih Terarah & Efektif dengan Platform Belajar Kami',
    benefits: [
      'Materi pembelajaran komprehensif yang mengikuti kebutuhan pembelajaran modern.',
      'Latihan soal & pembahasan untuk evaluasi pemahaman secara terukur.',
      'Simulasi ujian realistis untuk membangun kepercayaan diri peserta.',
    ],
  },
  {
    name: 'Tools Hacking Sobri',
    category: 'Security Tools',
    subtitle: 'Optimalkan Keamanan Digital Anda dengan Rangkaian Alat Keamanan Teruji',
    benefits: [
      'Deteksi cepat celah keamanan untuk melindungi data dan infrastruktur.',
      'Audit keamanan mendalam untuk membantu tindakan pencegahan yang tepat.',
      'Pemantauan real-time agar respons terhadap ancaman lebih cepat.',
    ],
  },
  {
    name: 'Software House',
    category: 'Digital Product Studio',
    subtitle: 'Bangun Produk Digital Inovatif & Sukses dengan Tim Pengembang Ahli Kami',
    benefits: [
      'Solusi custom untuk website, aplikasi mobile, dashboard, dan sistem internal.',
      'Proses pengembangan transparan dengan kolaborasi aktif di setiap tahap.',
      'Kualitas terjamin melalui pengujian menyeluruh dan iterasi terarah.',
    ],
  },
  {
    name: 'Kosan',
    category: 'Property Unit',
    subtitle: 'Hunian Nyaman & Terjangkau di Lokasi Strategis',
    benefits: [
      'Fasilitas lengkap & modern dengan internet cepat dan keamanan 24 jam.',
      'Lokasi strategis dekat kampus, perkantoran, dan fasilitas umum.',
      'Manajemen profesional dengan layanan responsif terhadap kebutuhan penghuni.',
    ],
  },
];

const testimonials = [
  {
    quote: 'Somansa membantu kami melihat peluang integrasi layanan kesehatan dan operasional digital dalam satu arah yang lebih jelas.',
    author: 'Mitra Fasilitas Kesehatan',
  },
  {
    quote: 'Pendekatan solusi yang menyeluruh membuat diskusi implementasi terasa lebih strategis, bukan sekadar pembelian produk.',
    author: 'Partner Teknologi & Operasional',
  },
  {
    quote: 'Struktur penawaran Somansa memudahkan kami memilih layanan yang paling relevan untuk pertumbuhan organisasi.',
    author: 'Klien Korporasi',
  },
];

const contactItems = [
  { label: 'Alamat', value: 'Alamat kantor Somansa dapat ditambahkan di sini sesuai lokasi operasional resmi Anda.' },
  { label: 'Telepon', value: '+62 000 0000 0000' },
  { label: 'Email', value: 'hello@somansa.id', href: 'mailto:hello@somansa.id' },
  { label: 'Media Sosial', value: 'Instagram · LinkedIn · YouTube', href: '#top' },
];

function renderStat(item) {
  return e('article', { className: 'stat-card', key: item.value }, [
    e('strong', { key: 'value' }, item.value),
    e('span', { key: 'label' }, item.label),
  ]);
}

function renderAdvantage(item) {
  return e('article', { className: 'highlight-card', key: item.title }, [
    e('h3', { key: 'title' }, item.title),
    e('p', { key: 'desc' }, item.desc),
  ]);
}

function renderProduct(item, index) {
  return e('article', { className: 'product-card', key: item.name }, [
    e('div', { className: 'product-card-head', key: 'head' }, [
      e('span', { className: 'product-index', key: 'index' }, String(index + 1).padStart(2, '0')),
      e('p', { className: 'mini-label', key: 'category' }, item.category),
    ]),
    e('h3', { key: 'name' }, item.name),
    e('p', { className: 'product-subtitle', key: 'subtitle' }, item.subtitle),
    e(
      'ul',
      { className: 'benefit-list', key: 'benefits' },
      item.benefits.map((benefit) => e('li', { key: benefit }, benefit)),
    ),
  ]);
}

function renderTestimonial(item) {
  return e('article', { className: 'testimonial-card', key: item.author }, [
    e('p', { className: 'testimonial-quote', key: 'quote' }, `“${item.quote}”`),
    e('span', { className: 'testimonial-author', key: 'author' }, item.author),
  ]);
}

function renderContact(item) {
  const valueNode = item.href
    ? e('a', { href: item.href, key: 'value' }, item.value)
    : e('span', { key: 'value' }, item.value);

  return e('article', { className: 'contact-card', key: item.label }, [
    e('p', { className: 'mini-label', key: 'label' }, item.label),
    valueNode,
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
          e('p', { className: 'hero-badge', key: 'badge' }, 'Solusi kesehatan & teknologi terintegrasi'),
          e('h1', { key: 'title' }, 'Somansa: Solusi Kesehatan & Teknologi Terintegrasi untuk Masa Depan Anda'),
          e(
            'p',
            { className: 'hero-desc', key: 'desc' },
            'Akselerasi pertumbuhan & tingkatkan efisiensi dengan ekosistem solusi terintegrasi kami — dirancang untuk institusi kesehatan, tenaga profesional, bisnis digital, dan pengguna modern yang membutuhkan layanan andal dalam satu partner strategis.',
          ),
          e('div', { className: 'hero-actions', key: 'actions' }, [
            e('a', { className: 'button button-primary', href: '#contact', key: 'primary' }, 'Temukan Solusi yang Tepat untuk Kebutuhan Anda!'),
            e('a', { className: 'button button-secondary', href: '#solutions', key: 'secondary' }, 'Jelajahi Ragam Solusi'),
          ]),
          e('div', { className: 'stats-grid', key: 'stats' }, heroStats.map(renderStat)),
        ]),
        e('aside', { className: 'showcase-card hero-spotlight', key: 'showcase' }, [
          e('p', { className: 'mini-label', key: 'label' }, 'Kenapa memilih Somansa'),
          e('h3', { key: 'title' }, 'Satu ekosistem untuk pelayanan yang lebih cepat, operasional yang lebih efisien, dan pertumbuhan yang lebih terarah.'),
          e('ul', { className: 'showcase-list', key: 'list' }, [
            e('li', { key: '1' }, 'Menggabungkan AI, layanan klinis, software operasional, retail medis, security tools, dan software house.'),
            e('li', { key: '2' }, 'Membantu organisasi membangun fondasi digital sekaligus meningkatkan pengalaman pengguna akhir.'),
            e('li', { key: '3' }, 'Siap menjadi partner transformasi dari tahap awal hingga skala pertumbuhan berikutnya.'),
          ]),
          e('div', { className: 'hero-proof', key: 'proof' }, [
            e('span', { key: 'span' }, 'Visual Direction'),
            e('p', { key: 'copy' }, 'Palet warna modern, tipografi yang mudah dibaca, dan layout modular dipilih untuk menonjolkan kualitas brand Somansa secara profesional dan persuasif.'),
          ]),
        ]),
      ]),
    ]),
    e('main', { key: 'main' }, [
      e('section', { className: 'section', id: 'advantages', key: 'advantages' }, [
        e('div', { className: 'section-header', key: 'header' }, [
          e('p', { className: 'section-label', key: 'label' }, 'Keunggulan Utama'),
          e('h2', { key: 'title' }, 'Ekosistem Somansa dirancang untuk mempercepat layanan, mengoptimalkan proses, dan membuka peluang pertumbuhan baru.'),
          e('p', { className: 'section-desc', key: 'desc' }, 'Setiap solusi ditulis dengan bahasa yang jelas, ringkas, dan berfokus pada keuntungan nyata yang dirasakan pengguna maupun institusi.'),
        ]),
        e('div', { className: 'cards-grid cards-grid-3', key: 'grid' }, advantages.map(renderAdvantage)),
      ]),
      e('section', { className: 'section', id: 'solutions', key: 'solutions' }, [
        e('div', { className: 'section-header', key: 'header' }, [
          e('p', { className: 'section-label', key: 'label' }, 'Produk & Layanan'),
          e('h2', { key: 'title' }, 'Jelajahi Ragam Solusi Inovatif Somansa'),
          e('p', { className: 'section-desc', key: 'desc' }, 'Dari AI radiologi hingga software house, dari pelayanan klinis hingga retail farmasi, Somansa menghadirkan portofolio solusi yang saling melengkapi.'),
        ]),
        e('div', { className: 'cards-grid cards-grid-3', key: 'grid' }, products.map(renderProduct)),
      ]),
      e('section', { className: 'section', id: 'testimonials', key: 'testimonials' }, [
        e('div', { className: 'section-header', key: 'header' }, [
          e('p', { className: 'section-label', key: 'label' }, 'Testimoni'),
          e('h2', { key: 'title' }, 'Meningkatkan kepercayaan melalui pengalaman kolaborasi yang terasa strategis dan relevan.'),
          e('p', { className: 'section-desc', key: 'desc' }, 'Section ini disiapkan sebagai ruang untuk menampilkan suara pelanggan yang puas agar tingkat kepercayaan dan konversi semakin kuat.'),
        ]),
        e('div', { className: 'cards-grid cards-grid-3', key: 'grid' }, testimonials.map(renderTestimonial)),
      ]),
      e('section', { className: 'section', id: 'contact', key: 'contact' }, [
        e('div', { className: 'cta-panel', key: 'panel' }, [
          e('div', { className: 'cta-copy', key: 'copy' }, [
            e('p', { className: 'section-label', key: 'label' }, 'Hubungi Kami'),
            e('h2', { key: 'title' }, 'Butuh Informasi Lebih Lanjut? Hubungi Kami Sekarang!'),
            e('p', { className: 'section-desc', key: 'desc' }, 'Arahkan pengunjung ke formulir kontak, halaman detail produk, atau percakapan awal bersama tim Somansa untuk menemukan solusi yang paling relevan.'),
            e('div', { className: 'cta-actions', key: 'actions' }, [
              e('a', { className: 'button button-primary', href: 'mailto:hello@somansa.id?subject=Konsultasi%20Solusi%20Somansa', key: 'email' }, 'Hubungi via Email'),
              e('a', { className: 'button button-secondary', href: '#solutions', key: 'products' }, 'Lihat Detail Solusi'),
            ]),
          ]),
          e('div', { className: 'contact-grid', key: 'contacts' }, contactItems.map(renderContact)),
        ]),
      ]),
    ]),
    e('footer', { className: 'footer', key: 'footer' }, [
      e('p', { key: 'copy' }, `© ${new Date().getFullYear()} Somansa. All Rights Reserved.`),
    ]),
  ]);
}
