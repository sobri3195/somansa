import React from 'https://esm.sh/react@18.3.1';

const e = React.createElement;

const navItems = [
  ['Tentang', '#tentang'],
  ['Solusi', '#solusi'],
  ['Produk', '#produk'],
  ['Portofolio', '#portofolio'],
  ['Kolaborasi', '#kolaborasi'],
];

const trustBadges = ['HealthTech', 'Software House', 'AI', 'Enterprise Solutions'];

const valueProps = [
  {
    title: 'Terintegrasi dari strategi hingga operasi',
    desc: 'Somansa menghubungkan alur digital, layanan klinis, commerce, dan aset operasional agar pertumbuhan bisnis berjalan lebih efisien.',
  },
  {
    title: 'Eksekusi cepat dengan pola enterprise-ready',
    desc: 'Tim lintas disiplin kami mempercepat validasi ide, pembangunan produk, serta implementasi sistem yang stabil dan scalable.',
  },
  {
    title: 'Diversifikasi cerdas, tetap fokus pada value',
    desc: 'Setiap unit bisnis dibangun dengan positioning yang jelas agar saling menguatkan, bukan sekadar menambah daftar produk.',
  },
  {
    title: 'Fokus pada dampak nyata dan adopsi jangka panjang',
    desc: 'Kami mendesain solusi yang mudah dipakai stakeholder utama: institusi kesehatan, partner strategis, enterprise, dan tim internal.',
  },
];

const businessFocus = [
  {
    title: 'HealthTech',
    desc: 'Platform, AI, dan pengalaman pasien untuk layanan kesehatan yang lebih presisi, cepat, dan terintegrasi.',
    icon: '✚',
  },
  {
    title: 'Software House',
    desc: 'Pengembangan software custom, dashboard operasional, integrasi sistem, dan produk digital untuk skala enterprise.',
    icon: '</>',
  },
  {
    title: 'Clinical Operations',
    desc: 'Digitalisasi alur klinik, layanan homecare, radiologi, rawat luka, dan manajemen operasional layanan medis.',
    icon: '◎',
  },
  {
    title: 'Commerce / Retail Medis',
    desc: 'Retail farmasi, alat kesehatan, produk dokter, dan channel penjualan modern yang mendukung distribusi layanan medis.',
    icon: '◫',
  },
  {
    title: 'Property / Asset Support',
    desc: 'Aset pendukung pertumbuhan bisnis, ruang operasional, dan pengembangan properti yang memperkuat ekosistem Somansa.',
    icon: '▣',
  },
];

const productGroups = [
  {
    label: 'Unggulan HealthTech',
    items: [
      {
        title: 'CogniScan',
        desc: 'AI radiologi & lab untuk membaca insight lebih cepat dan membantu pengambilan keputusan klinis.',
        featured: true,
      },
      {
        title: 'SIMRS & SIMKlinik',
        desc: 'Sistem manajemen rumah sakit dan klinik yang menyederhanakan alur administrasi, data, dan monitoring layanan.',
        featured: true,
      },
      {
        title: 'Kaist Medika & HomeCare',
        desc: 'Ekosistem layanan klinik dan homecare untuk pengalaman pasien yang lebih dekat, rapi, dan terukur.',
        featured: true,
      },
    ],
  },
  {
    label: 'Layanan Klinis & Medis',
    items: [
      {
        title: 'Klinik Kecantikan',
        desc: 'Layanan estetika modern dengan pengalaman brand yang premium dan patient journey yang terstruktur.',
      },
      {
        title: 'Klinik Rawat Luka',
        desc: 'Layanan spesialis dengan fokus pada kualitas perawatan, dokumentasi, dan continuity of care.',
      },
      {
        title: 'Apotek',
        desc: 'Retail farmasi yang terhubung dengan alur konsultasi, distribusi, dan operasional kesehatan harian.',
      },
    ],
  },
  {
    label: 'Commerce & Edukasi',
    items: [
      {
        title: 'Scrub Dokter',
        desc: 'Brand apparel medis yang memperluas touchpoint Somansa ke kebutuhan profesional kesehatan.',
      },
      {
        title: 'Alat Medis Dokter',
        desc: 'Channel penjualan alat medis yang mendukung institusi dan tenaga kesehatan dengan kurasi produk tepat guna.',
      },
      {
        title: 'Website Ujian Dokter',
        desc: 'Platform edukasi dan evaluasi digital untuk menunjang pengembangan talenta medis secara lebih fleksibel.',
      },
    ],
  },
  {
    label: 'Teknologi & Pendukung Ekosistem',
    items: [
      {
        title: 'Tools Internal',
        desc: 'Rangkaian tools produktivitas, automasi, dan eksperimen digital untuk mempercepat operasi dan inovasi internal.',
      },
      {
        title: 'Software House',
        desc: 'Unit pengembangan software yang membangun solusi custom, integrasi, dan MVP untuk bisnis modern.',
      },
      {
        title: 'Kosan / Asset Support',
        desc: 'Aset properti pendukung yang membantu efisiensi operasional dan memperkuat daya tahan ekosistem bisnis.',
      },
    ],
  },
];

const collaborationFlow = [
  ['Discovery', 'Memetakan tantangan bisnis, kebutuhan stakeholder, dan peluang pertumbuhan.'],
  ['Strategy', 'Menentukan prioritas, model solusi, roadmap, dan indikator keberhasilan.'],
  ['Build', 'Mendesain, membangun, dan mengintegrasikan produk atau sistem dengan iterasi cepat.'],
  ['Launch', 'Implementasi terarah, training tim, dan kesiapan operasional agar adopsi lebih mulus.'],
  ['Scale', 'Optimasi berkelanjutan, pengembangan fitur, dan ekspansi use case berdasarkan data.'],
];

const portfolioItems = [
  {
    title: 'AI Diagnostic Workflow',
    category: 'HealthTech / AI',
    impact: 'Membantu institusi mempersingkat alur interpretasi data radiologi dan meningkatkan kecepatan respons internal.',
  },
  {
    title: 'Digital Clinic Operations',
    category: 'Clinical Operations',
    impact: 'Merancang pengalaman operasional klinik yang lebih rapi dari registrasi, layanan, hingga monitoring performa.',
  },
  {
    title: 'Enterprise Custom Platform',
    category: 'Software House',
    impact: 'Membangun dashboard, workflow, dan integrasi sistem untuk organisasi yang membutuhkan kontrol lebih kuat.',
  },
  {
    title: 'Medical Commerce Experience',
    category: 'Commerce / Retail',
    impact: 'Menghubungkan brand, katalog produk, dan channel penjualan agar konversi dan trust meningkat secara bersamaan.',
  },
];

const metrics = [
  ['12+', 'pilar bisnis aktif'],
  ['5', 'fokus sektor strategis'],
  ['Fast', 'delivery & iteration cycle'],
  ['Multidisciplinary', 'team & operator mindset'],
];

const faqItems = [
  {
    q: 'Apa itu Somansa?',
    a: 'Somansa adalah perusahaan multi-produk dari Indonesia yang berfokus pada healthtech, software house, layanan klinis, commerce medis, dan inovasi digital untuk kebutuhan enterprise maupun institusi modern.',
  },
  {
    q: 'Apakah Somansa melayani kolaborasi B2B?',
    a: 'Ya. Kami terbuka untuk kerja sama strategis dengan institusi kesehatan, partner bisnis, enterprise, investor, hingga organisasi yang membutuhkan transformasi digital atau pengembangan produk baru.',
  },
  {
    q: 'Apakah Somansa bisa membuat software custom?',
    a: 'Bisa. Unit software house Somansa dapat membantu discovery, desain sistem, pengembangan aplikasi, integrasi, sampai iterasi produk sesuai kebutuhan bisnis Anda.',
  },
  {
    q: 'Apa saja fokus industri Somansa?',
    a: 'Fokus utama kami mencakup kesehatan, operasional klinis, software enterprise, commerce/retail medis, serta asset support yang menopang keberlanjutan ekosistem bisnis.',
  },
];

const quickLinks = ['Tentang', 'Solusi', 'Produk', 'Portofolio', 'FAQ'];
const socials = ['LinkedIn', 'Instagram', 'Email'];

function sectionHeading(eyebrow, title, desc) {
  return e('div', { className: 'section-heading' }, [
    e('p', { className: 'eyebrow', key: `${title}-eyebrow` }, eyebrow),
    e('h2', { key: `${title}-title` }, title),
    desc ? e('p', { className: 'section-intro', key: `${title}-desc` }, desc) : null,
  ]);
}

export function App() {
  return e('div', { className: 'page-shell' }, [
    e('div', { className: 'page-noise', 'aria-hidden': 'true', key: 'noise' }),
    e('div', { className: 'page' }, [
      e('header', { className: 'hero-section', id: 'top', key: 'hero' }, [
        e('nav', { className: 'nav', key: 'nav' }, [
          e('a', { className: 'brand', href: '#top', key: 'brand', 'aria-label': 'Somansa home' }, [
            e('span', { className: 'brand-mark', key: 'mark' }, 'S'),
            e('span', { key: 'text' }, 'SOMANSA'),
          ]),
          e(
            'div',
            { className: 'nav-links', key: 'links' },
            navItems.map(([label, href]) => e('a', { href, key: label }, label)),
          ),
          e('div', { className: 'nav-actions', key: 'actions' }, [
            e('a', { className: 'btn btn-ghost', href: '#produk', key: 'explore' }, 'Explore Produk'),
            e('a', { className: 'btn btn-primary nav-cta', href: 'mailto:hello@somansa.id', key: 'contact' }, 'Hubungi Kami'),
          ]),
        ]),
        e('div', { className: 'hero-grid', key: 'hero-grid' }, [
          e('div', { className: 'hero-copy', key: 'copy' }, [
            e('p', { className: 'eyebrow', key: 'eyebrow' }, 'Indonesia healthtech • software house • digital innovation'),
            e('h1', { key: 'title' }, 'Membangun ekosistem teknologi kesehatan yang modern, kredibel, dan siap bertumbuh.'),
            e(
              'p',
              { className: 'hero-lead', key: 'lead' },
              'Somansa membantu institusi kesehatan, partner strategis, dan enterprise membangun solusi digital bernilai tinggi — dari healthtech dan software custom hingga operasional klinis, commerce medis, dan diversifikasi produk masa depan.',
            ),
            e('div', { className: 'hero-actions', key: 'hero-actions' }, [
              e('a', { href: '#portofolio', className: 'btn btn-primary', key: 'portfolio' }, 'Lihat Portofolio'),
              e('a', { href: 'mailto:hello@somansa.id', className: 'btn btn-secondary', key: 'team' }, 'Hubungi Tim'),
            ]),
            e(
              'div',
              { className: 'trust-badges', key: 'badges' },
              trustBadges.map((badge) => e('span', { className: 'trust-chip', key: badge }, badge)),
            ),
            e('div', { className: 'hero-metrics', key: 'hero-metrics' }, [
              e('div', { className: 'metric-card', key: 'metric-1' }, [
                e('strong', { key: 'value' }, '12 unit'),
                e('span', { key: 'label' }, 'Ekosistem produk & bisnis yang saling terkoneksi'),
              ]),
              e('div', { className: 'metric-card', key: 'metric-2' }, [
                e('strong', { key: 'value' }, 'B2B Ready'),
                e('span', { key: 'label' }, 'Didesain untuk kolaborasi institusi, partner, dan enterprise'),
              ]),
            ]),
          ]),
          e('div', { className: 'hero-visual', key: 'visual' }, [
            e('div', { className: 'hero-orb orb-a', key: 'orb-a', 'aria-hidden': 'true' }),
            e('div', { className: 'hero-orb orb-b', key: 'orb-b', 'aria-hidden': 'true' }),
            e('div', { className: 'dashboard-card main-dashboard', key: 'dashboard' }, [
              e('div', { className: 'dashboard-top', key: 'topbar' }, [
                e('span', { className: 'status-dot', key: 'dot' }),
                e('p', { key: 'label' }, 'Somansa Intelligence Layer'),
                e('span', { className: 'status-badge', key: 'status' }, 'Live roadmap'),
              ]),
              e('div', { className: 'dashboard-body', key: 'body' }, [
                e('div', { className: 'dashboard-copy', key: 'copy' }, [
                  e('h3', { key: 'title' }, 'Portfolio yang tidak hanya terlihat modern, tetapi juga mendorong trust dan conversion.'),
                  e('p', { key: 'desc' }, 'Storytelling dirancang untuk menjelaskan value Somansa secara cepat kepada investor, partner, klien enterprise, dan talenta potensial.'),
                ]),
                e('div', { className: 'preview-grid', key: 'preview-grid' }, [
                  e('article', { className: 'preview-card accent', key: 'cogniscan' }, [
                    e('img', { src: '/src/product-cogniscan.svg', alt: 'Preview CogniScan', key: 'img' }),
                    e('div', { className: 'preview-copy', key: 'copy' }, [
                      e('span', { key: 'label' }, 'AI HealthTech'),
                      e('strong', { key: 'title' }, 'CogniScan'),
                    ]),
                  ]),
                  e('article', { className: 'preview-card', key: 'clinic' }, [
                    e('img', { src: '/src/product-homecare.svg', alt: 'Preview Homecare', key: 'img' }),
                    e('div', { className: 'preview-copy', key: 'copy' }, [
                      e('span', { key: 'label' }, 'Clinical Ops'),
                      e('strong', { key: 'title' }, 'Kaist Medika'),
                    ]),
                  ]),
                  e('article', { className: 'preview-card', key: 'commerce' }, [
                    e('img', { src: '/src/product-medcommerce.svg', alt: 'Preview commerce medis', key: 'img' }),
                    e('div', { className: 'preview-copy', key: 'copy' }, [
                      e('span', { key: 'label' }, 'Medical Commerce'),
                      e('strong', { key: 'title' }, 'Retail Ecosystem'),
                    ]),
                  ]),
                ]),
              ]),
            ]),
            e('div', { className: 'floating-note note-a', key: 'note-a' }, [
              e('strong', { key: 'title' }, 'HealthTech Focus'),
              e('span', { key: 'desc' }, 'AI, diagnostics, clinic systems, and patient journey.'),
            ]),
            e('div', { className: 'floating-note note-b', key: 'note-b' }, [
              e('strong', { key: 'title' }, 'Enterprise Collaboration'),
              e('span', { key: 'desc' }, 'Roadmap, build, launch, and scale in one ecosystem.'),
            ]),
          ]),
        ]),
      ]),

      e('main', { key: 'main' }, [
        e('section', { className: 'section section-values', id: 'why', key: 'why' }, [
          sectionHeading(
            'Why Somansa',
            'Partner teknologi kesehatan yang menggabungkan strategi, execution, dan diversifikasi bisnis.',
            'Didesain untuk mudah dipindai: value Somansa tampil jelas, visual, dan relevan bagi stakeholder yang menilai peluang kolaborasi secara serius.',
          ),
          e(
            'div',
            { className: 'value-grid', key: 'grid' },
            valueProps.map((item, index) =>
              e('article', { className: 'glass-card value-card', key: item.title }, [
                e('span', { className: 'card-index', key: 'index' }, `0${index + 1}`),
                e('h3', { key: 'title' }, item.title),
                e('p', { key: 'desc' }, item.desc),
              ]),
            ),
          ),
        ]),

        e('section', { className: 'section about-section', id: 'tentang', key: 'about' }, [
          e('div', { className: 'about-layout' }, [
            e('div', { className: 'about-copy', key: 'copy' }, [
              sectionHeading(
                'Tentang Somansa',
                'Perusahaan multi-produk yang membangun solusi untuk kesehatan, teknologi, dan layanan modern.',
                'Somansa memposisikan diri sebagai healthtech-driven company profile yang kuat di eksekusi, kaya potensi sinergi, dan siap tumbuh bersama mitra strategis jangka panjang.',
              ),
              e('div', { className: 'about-points', key: 'points' }, [
                e('article', { className: 'glass-card info-card', key: 'mission' }, [
                  e('h3', { key: 'title' }, 'Misi'),
                  e('p', { key: 'desc' }, 'Menciptakan solusi digital dan operasional yang meningkatkan kualitas layanan, efisiensi bisnis, dan akses inovasi yang relevan di Indonesia.'),
                ]),
                e('article', { className: 'glass-card info-card', key: 'vision' }, [
                  e('h3', { key: 'title' }, 'Visi'),
                  e('p', { key: 'desc' }, 'Menjadi ekosistem inovasi kesehatan dan teknologi yang dipercaya karena kecepatan eksekusi, kualitas pengalaman, dan dampak yang terukur.'),
                ]),
              ]),
            ]),
            e('div', { className: 'about-visual glass-card', key: 'visual' }, [
              e('img', { src: '/src/health-illustration.svg', alt: 'Ilustrasi healthtech Somansa', key: 'img' }),
              e('div', { className: 'about-visual-copy', key: 'copy' }, [
                e('span', { className: 'mini-label', key: 'label' }, 'Positioning'),
                e('h3', { key: 'title' }, 'Somansa menyatukan product thinking, healthcare insight, dan enterprise execution.'),
                e('p', { key: 'desc' }, 'Pendekatan ini membuat setiap unit bisnis lebih mudah dipahami sebagai bagian dari satu narasi pertumbuhan yang koheren dan profesional.'),
              ]),
            ]),
          ]),
        ]),

        e('section', { className: 'section', id: 'solusi', key: 'solutions' }, [
          sectionHeading(
            'Solusi & Fokus Bisnis',
            'Spektrum solusi Somansa dirancang untuk menjawab kebutuhan institusi modern dari hulu ke hilir.',
            'Setiap kategori dibentuk agar mudah dibaca sebagai capability map — bukan sekadar daftar layanan terpisah.',
          ),
          e(
            'div',
            { className: 'solution-grid', key: 'grid' },
            businessFocus.map((item) =>
              e('article', { className: 'glass-card solution-card', key: item.title }, [
                e('div', { className: 'solution-icon', key: 'icon', 'aria-hidden': 'true' }, item.icon),
                e('h3', { key: 'title' }, item.title),
                e('p', { key: 'desc' }, item.desc),
              ]),
            ),
          ),
        ]),

        e('section', { className: 'section', id: 'produk', key: 'products' }, [
          sectionHeading(
            'Produk & Unit Bisnis',
            '12 pilar bisnis Somansa dikelompokkan secara strategis agar value tiap unit lebih mudah dipahami.',
            'Beberapa produk unggulan ditonjolkan untuk menunjukkan kekuatan diferensiasi, sementara unit lain diposisikan sebagai penguat ekosistem jangka panjang.',
          ),
          e(
            'div',
            { className: 'product-groups', key: 'groups' },
            productGroups.map((group) =>
              e('section', { className: 'glass-card product-group', key: group.label }, [
                e('div', { className: 'group-header', key: 'header' }, [
                  e('p', { className: 'mini-label', key: 'label' }, group.label),
                  e('h3', { key: 'title' }, group.label),
                ]),
                e(
                  'div',
                  { className: 'group-items', key: 'items' },
                  group.items.map((item) =>
                    e('article', { className: `product-item${item.featured ? ' featured' : ''}`, key: item.title }, [
                      e('div', { className: 'product-item-top', key: 'top' }, [
                        e('strong', { key: 'title' }, item.title),
                        item.featured ? e('span', { className: 'featured-pill', key: 'pill' }, 'Highlight') : null,
                      ]),
                      e('p', { key: 'desc' }, item.desc),
                    ]),
                  ),
                ),
              ]),
            ),
          ),
        ]),

        e('section', { className: 'section', id: 'kolaborasi', key: 'flow' }, [
          sectionHeading(
            'Cara Kerja / Collaboration Flow',
            'Alur kolaborasi yang sederhana, transparan, dan profesional.',
            'Dirancang untuk membantu calon partner memahami bagaimana Somansa bergerak dari identifikasi peluang hingga pertumbuhan jangka panjang.',
          ),
          e(
            'div',
            { className: 'flow-grid', key: 'flow-grid' },
            collaborationFlow.map(([title, desc], index) =>
              e('article', { className: 'glass-card flow-card', key: title }, [
                e('span', { className: 'flow-step', key: 'step' }, `${index + 1}`.padStart(2, '0')),
                e('h3', { key: 'title' }, title),
                e('p', { key: 'desc' }, desc),
              ]),
            ),
          ),
        ]),

        e('section', { className: 'section', id: 'portofolio', key: 'portfolio' }, [
          sectionHeading(
            'Portofolio / Use Cases',
            'Preview use case yang menunjukkan bagaimana Somansa menerjemahkan capability menjadi dampak bisnis.',
            'Kartu portofolio ini bisa dikembangkan lebih lanjut menjadi studi kasus lengkap saat materi resmi telah siap.',
          ),
          e(
            'div',
            { className: 'portfolio-grid', key: 'grid' },
            portfolioItems.map((item) =>
              e('article', { className: 'glass-card portfolio-card', key: item.title }, [
                e('span', { className: 'mini-label', key: 'category' }, item.category),
                e('h3', { key: 'title' }, item.title),
                e('p', { key: 'impact' }, item.impact),
                e('a', { href: 'mailto:hello@somansa.id', className: 'text-link', key: 'link' }, 'Diskusikan use case →'),
              ]),
            ),
          ),
        ]),

        e('section', { className: 'section trust-section', key: 'trust' }, [
          sectionHeading(
            'Social Proof / Trust Section',
            'Trust signal yang menegaskan Somansa sebagai partner yang serius, adaptif, dan siap scale.',
            'Placeholder ini disusun agar mudah diganti menjadi logo partner, testimoni, angka performa, atau pencapaian ketika materi resmi tersedia.',
          ),
          e('div', { className: 'trust-layout', key: 'layout' }, [
            e(
              'div',
              { className: 'metrics-grid', key: 'metrics' },
              metrics.map(([value, label]) =>
                e('article', { className: 'glass-card metric-panel', key: value }, [
                  e('strong', { key: 'value' }, value),
                  e('span', { key: 'label' }, label),
                ]),
              ),
            ),
            e('div', { className: 'glass-card logos-card', key: 'logos' }, [
              e('p', { className: 'mini-label', key: 'label' }, 'Partner / institution logos placeholder'),
              e('div', { className: 'logo-strip', key: 'strip' }, ['Partner A', 'Partner B', 'Institution C', 'Healthcare D'].map((item) => e('span', { key: item }, item))),
              e('blockquote', { className: 'quote', key: 'quote' }, '“Somansa hadir dengan kombinasi healthcare insight, kecepatan build, dan narasi bisnis yang kuat untuk pertumbuhan jangka panjang.”'),
              e('p', { className: 'quote-credit', key: 'credit' }, 'Placeholder testimonial — dapat diganti dengan kutipan partner / client resmi.'),
            ]),
          ]),
        ]),

        e('section', { className: 'section', id: 'faq', key: 'faq' }, [
          sectionHeading(
            'FAQ',
            'Pertanyaan umum untuk membantu calon partner memahami Somansa lebih cepat.',
            'Bagian ini menjaga pengalaman scanning tetap efisien, terutama bagi pengunjung yang butuh validasi cepat sebelum menghubungi tim.',
          ),
          e(
            'div',
            { className: 'faq-list', key: 'faq-list' },
            faqItems.map((item) =>
              e('details', { className: 'glass-card faq-item', key: item.q }, [
                e('summary', { key: 'q' }, item.q),
                e('p', { key: 'a' }, item.a),
              ]),
            ),
          ),
        ]),

        e('section', { className: 'section', key: 'final-cta' }, [
          e('div', { className: 'cta-panel glass-card' }, [
            e('p', { className: 'eyebrow', key: 'eyebrow' }, 'Ready to collaborate'),
            e('h2', { key: 'title' }, 'Bangun langkah pertumbuhan berikutnya bersama tim Somansa.'),
            e('p', { className: 'section-intro', key: 'desc' }, 'Jika Anda mencari partner yang memahami teknologi kesehatan, produk digital, dan eksekusi bisnis secara utuh, mari mulai percakapan strategis hari ini.'),
            e('div', { className: 'hero-actions', key: 'actions' }, [
              e('a', { className: 'btn btn-primary', href: 'mailto:hello@somansa.id', key: 'contact' }, 'Hubungi Tim Somansa'),
              e('a', { className: 'btn btn-secondary', href: '#portofolio', key: 'portfolio' }, 'Lihat Portofolio'),
            ]),
          ]),
        ]),
      ]),

      e('footer', { className: 'footer', key: 'footer' }, [
        e('div', { className: 'footer-top', key: 'top' }, [
          e('div', { className: 'footer-brand', key: 'brand' }, [
            e('a', { className: 'brand', href: '#top', key: 'home' }, [
              e('span', { className: 'brand-mark', key: 'mark' }, 'S'),
              e('span', { key: 'text' }, 'SOMANSA'),
            ]),
            e('p', { key: 'desc' }, 'Company profile modern untuk perusahaan teknologi kesehatan Indonesia yang fokus pada trust, innovation, dan conversion.'),
          ]),
          e('div', { className: 'footer-links', key: 'links' }, [
            e('div', { key: 'quick' }, [
              e('h4', { key: 'title' }, 'Navigasi cepat'),
              e('div', { className: 'footer-link-list', key: 'list' }, quickLinks.map((item) => e('a', { href: `#${item.toLowerCase() === 'faq' ? 'faq' : item.toLowerCase()}`, key: item }, item))),
            ]),
            e('div', { key: 'contact' }, [
              e('h4', { key: 'title' }, 'Kontak'),
              e('div', { className: 'footer-link-list', key: 'list' }, [
                e('a', { href: 'mailto:hello@somansa.id', key: 'email' }, 'hello@somansa.id'),
                e('a', { href: 'tel:+620000000000', key: 'phone' }, '+62 000 0000 0000'),
                e('span', { key: 'address' }, 'Indonesia • available for enterprise collaboration'),
              ]),
            ]),
            e('div', { key: 'social' }, [
              e('h4', { key: 'title' }, 'Social'),
              e('div', { className: 'footer-link-list', key: 'list' }, socials.map((item) => e('a', { href: item === 'Email' ? 'mailto:hello@somansa.id' : '#top', key: item }, item))),
            ]),
          ]),
        ]),
        e('div', { className: 'footer-bottom', key: 'bottom' }, [
          e('span', { key: 'copyright' }, `© ${new Date().getFullYear()} Somansa. All rights reserved.`),
          e('a', { href: 'mailto:hello@somansa.id', key: 'cta' }, 'Mulai kolaborasi'),
        ]),
      ]),
    ]),
  ]);
}
