import React from 'https://esm.sh/react@18.3.1';

const e = React.createElement;

const navLinks = [
  { label: 'Approach', href: '#solution' },
  { label: 'Deliverables', href: '#deliverables' },
  { label: 'Process', href: '#process' },
  { label: 'Consultation', href: '#cta' },
];

const credibilityItems = [
  {
    value: 'Decision-maker ready',
    label: 'Dirancang untuk membantu calon klien, partner, dan investor memahami perusahaan tanpa perlu dijelaskan berulang.',
  },
  {
    value: 'Trust + conversion',
    label: 'Fokus pada kredibilitas digital sekaligus mendorong inquiry yang lebih relevan ke tahap konsultasi.',
  },
  {
    value: 'Strategic narrative',
    label: 'Bukan sekadar desain halaman, tetapi penyusunan pesan bisnis, struktur informasi, dan CTA yang lebih meyakinkan.',
  },
];

const problems = [
  'Value proposition terdengar umum sehingga perusahaan sulit tampak berbeda di mata calon klien.',
  'Halaman company profile padat informasi, tetapi tidak membimbing pengunjung menuju diskusi atau inquiry.',
  'Narasi layanan, kredibilitas, dan alasan memilih perusahaan belum tersusun sebagai argumen bisnis yang kuat.',
];

const solutions = [
  {
    title: 'Strategic positioning',
    desc: 'Kami menyusun ulang headline, value proposition, dan urutan informasi agar positioning perusahaan terbaca dalam beberapa detik pertama.',
  },
  {
    title: 'Trust-building structure',
    desc: 'Struktur halaman disiapkan untuk menjawab pertanyaan penting pengunjung: siapa Anda, siapa yang cocok, apa yang ditawarkan, dan mengapa layak diajak bicara.',
  },
  {
    title: 'Conversion-oriented CTA',
    desc: 'CTA diarahkan ke langkah bisnis yang realistis: konsultasi, audit halaman, atau diskusi kebutuhan yang lebih berkualitas.',
  },
];

const serviceCards = [
  {
    label: 'Nama layanan',
    title: 'Strategic Company Landing Page',
    desc: 'Landing page perusahaan premium yang menyatukan positioning, narasi brand, layanan utama, dan CTA bisnis dalam satu alur yang jelas.',
  },
  {
    label: 'Cocok untuk',
    title: 'Perusahaan yang perlu tampil lebih kredibel secara digital',
    desc: 'Ideal untuk agency, klinik, perusahaan jasa profesional, software house, bisnis B2B, maupun brand yang sering diperkenalkan ke partner atau investor.',
  },
  {
    label: 'Masalah yang diselesaikan',
    title: 'Pesan bisnis terlihat rapi, relevan, dan mudah dipercaya',
    desc: 'Membantu mengurangi kebingungan pengunjung, memperjelas nilai perusahaan, dan mempercepat mereka memahami alasan untuk menghubungi tim Anda.',
  },
];

const deliverables = [
  'Strategic copywriting untuk hero, value proposition, layanan, diferensiasi, dan CTA.',
  'Struktur landing page yang lebih persuasif dari hero hingga closing section.',
  'Desain UI dark premium yang rapi, modern, dan lebih mudah dipindai oleh decision maker.',
  'Section credibility, target client fit, deliverables, serta proses kerja yang terasa konkret.',
  'CTA konsultasi / audit halaman yang lebih kuat untuk mendorong inquiry berkualitas.',
  'Landing page siap dipresentasikan sebagai company profile digital yang fokus pada trust dan conversion.',
];

const idealClients = [
  {
    title: 'Bisnis B2B & jasa profesional',
    desc: 'Untuk perusahaan yang menjual layanan bernilai tinggi dan perlu menjelaskan kapabilitasnya secara lebih matang.',
  },
  {
    title: 'Klinik, healthcare, dan sektor layanan',
    desc: 'Untuk brand yang butuh kepercayaan tinggi, penjelasan layanan yang jelas, dan tampilan yang menenangkan sekaligus meyakinkan.',
  },
  {
    title: 'Agency, software house, dan firm',
    desc: 'Untuk tim yang ingin terlihat lebih strategic daripada sekadar vendor, sehingga percakapan awal dimulai dengan positioning yang lebih kuat.',
  },
  {
    title: 'Perusahaan yang sedang ekspansi',
    desc: 'Untuk bisnis yang butuh halaman resmi yang siap dikirim ke calon klien, partner, investor, atau rekrutmen strategis.',
  },
];

const differentiators = [
  {
    title: 'Bukan jasa desain biasa',
    desc: 'Somansa memulai dari pesan bisnis dan conversion path, lalu menerjemahkannya ke dalam struktur dan tampilan yang premium.',
  },
  {
    title: 'Narasi yang lebih meyakinkan',
    desc: 'Setiap section dirancang agar pengunjung memahami konteks bisnis, layanan utama, dan alasan untuk melanjutkan percakapan.',
  },
  {
    title: 'Output yang siap dipakai tim bisnis',
    desc: 'Hasil akhirnya bukan hanya halaman yang enak dilihat, tetapi aset digital yang mendukung presentasi, follow-up, dan trust building.',
  },
];

const processSteps = [
  {
    step: '01',
    title: 'Discovery & audit',
    desc: 'Memetakan audiens utama, tujuan halaman, layanan prioritas, dan bottleneck yang membuat pesan bisnis Anda belum bekerja optimal.',
  },
  {
    step: '02',
    title: 'Positioning & structure',
    desc: 'Menyusun angle komunikasi, urutan section, dan value proposition yang lebih tajam sesuai konteks perusahaan dan target inquiry.',
  },
  {
    step: '03',
    title: 'Copy, design, & refinement',
    desc: 'Menerjemahkan strategi menjadi landing page yang elegan, terstruktur, dan siap digunakan sebagai wajah digital perusahaan.',
  },
];

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
          e('p', { className: 'hero-badge', key: 'badge' }, 'Strategic Company Landing Page'),
          e(
            'h1',
            { key: 'title' },
            'Bangun landing page perusahaan yang memperjelas positioning dan mendorong inquiry bernilai tinggi.',
          ),
          e(
            'p',
            { className: 'hero-desc', key: 'desc' },
            'Somansa membantu perusahaan menyusun company profile website yang tidak berhenti di tampilan. Kami merapikan narasi bisnis, menajamkan value proposition, dan mengarahkan pengunjung menuju konsultasi, diskusi, atau peluang kerja sama yang lebih serius.',
          ),
          e('div', { className: 'hero-actions', key: 'actions' }, [
            e('a', { className: 'button button-primary', href: '#cta', key: 'primary' }, 'Jadwalkan Konsultasi'),
            e('a', { className: 'button button-secondary', href: '#deliverables', key: 'secondary' }, 'Lihat Cakupan Layanan'),
          ]),
          e('div', { className: 'stats-grid', key: 'stats' }, credibilityItems.map((item) =>
            e('article', { className: 'stat-card', key: item.value }, [
              e('strong', { key: 'value' }, item.value),
              e('span', { key: 'label' }, item.label),
            ]),
          )),
        ]),
        e('aside', { className: 'showcase-card', key: 'showcase' }, [
          e('p', { className: 'mini-label', key: 'label' }, 'Business outcome'),
          e('h3', { key: 'title' }, 'Website perusahaan seharusnya membantu audiens memahami nilai bisnis Anda lebih cepat.'),
          e('ul', { className: 'showcase-list', key: 'list' }, [
            e('li', { key: '1' }, 'Menjelaskan perusahaan, layanan, dan positioning tanpa berputar-putar.'),
            e('li', { key: '2' }, 'Meningkatkan rasa percaya sebelum calon klien masuk ke tahap meeting.'),
            e('li', { key: '3' }, 'Mengarahkan inquiry ke langkah berikutnya dengan CTA yang lebih jelas dan meyakinkan.'),
          ]),
          e('div', { className: 'hero-proof', key: 'proof' }, [
            e('span', { key: 'proof-label' }, 'Target use cases'),
            e('p', { key: 'proof-copy' }, 'Agency • Klinik • Professional services • Software house • Company profile B2B'),
          ]),
        ]),
      ]),
    ]),
    e('main', { key: 'main' }, [
      e('section', { className: 'section', id: 'credibility', key: 'credibility' }, [
        e('div', { className: 'section-header' }, [
          e('p', { className: 'section-label' }, 'Credibility'),
          e('h2', null, 'Dirancang untuk perusahaan yang ingin terlihat lebih matang, lebih jelas, dan lebih siap diajak bicara.'),
          e(
            'p',
            { className: 'section-desc' },
            'Somansa memosisikan layanan ini sebagai strategic company landing page: aset digital untuk menyatukan pesan bisnis, memperkuat kredibilitas, dan mempermudah pengunjung mengambil keputusan untuk menghubungi Anda.',
          ),
        ]),
      ]),
      e('section', { className: 'section section-split', id: 'problem', key: 'problem' }, [
        e('div', { className: 'section-header', key: 'header' }, [
          e('p', { className: 'section-label', key: 'label' }, 'Problem'),
          e('h2', { key: 'title' }, 'Banyak landing page perusahaan terlihat rapi, tetapi belum benar-benar menjual alasan bisnis di baliknya.'),
          e(
            'p',
            { className: 'section-desc', key: 'desc' },
            'Akibatnya, pengunjung harus menebak sendiri apa yang ditawarkan, mengapa perusahaan Anda berbeda, dan langkah apa yang sebaiknya mereka ambil setelah membaca halaman tersebut.',
          ),
        ]),
        e('div', { className: 'stack-list', key: 'list' },
          problems.map((item) =>
            e('article', { className: 'list-card', key: item }, [
              e('p', { key: 'copy' }, item),
            ]),
          ),
        ),
      ]),
      e('section', { className: 'section', id: 'solution', key: 'solution' }, [
        e('div', { className: 'section-header', key: 'header' }, [
          e('p', { className: 'section-label', key: 'label' }, 'Solution'),
          e('h2', { key: 'title' }, 'Kami menyusun halaman sebagai argumen bisnis, bukan sekadar kumpulan section.'),
          e(
            'p',
            { className: 'section-desc', key: 'desc' },
            'Setiap blok konten disusun untuk membimbing pengunjung dari perhatian, kepercayaan, pemahaman layanan, hingga keputusan untuk masuk ke percakapan bisnis berikutnya.',
          ),
        ]),
        e('div', { className: 'cards-grid cards-grid-3', key: 'grid' },
          solutions.map((item) =>
            e('article', { className: 'highlight-card', key: item.title }, [
              e('h3', { key: 'title' }, item.title),
              e('p', { key: 'desc' }, item.desc),
            ]),
          ),
        ),
      ]),
      e('section', { className: 'section', id: 'services', key: 'services' }, [
        e('div', { className: 'section-header', key: 'header' }, [
          e('p', { className: 'section-label', key: 'label' }, 'Offer'),
          e('h2', { key: 'title' }, 'Apa yang sebenarnya dijual Somansa dalam layanan ini.'),
          e(
            'p',
            { className: 'section-desc', key: 'desc' },
            'Layanan ini bukan “jasa bikin landing page” biasa. Ini adalah penyusunan company landing page yang menggabungkan strategic messaging, UI premium, dan struktur conversion untuk kepentingan bisnis nyata.',
          ),
        ]),
        e('div', { className: 'cards-grid cards-grid-3', key: 'grid' },
          serviceCards.map((item) =>
            e('article', { className: 'highlight-card service-card', key: item.title }, [
              e('p', { className: 'mini-label', key: 'label' }, item.label),
              e('h3', { key: 'title' }, item.title),
              e('p', { key: 'desc' }, item.desc),
            ]),
          ),
        ),
      ]),
      e('section', { className: 'section section-split', id: 'deliverables', key: 'deliverables' }, [
        e('div', { className: 'section-header', key: 'header' }, [
          e('p', { className: 'section-label', key: 'label' }, 'Deliverables'),
          e('h2', { key: 'title' }, 'Output yang didapat klien dibuat jelas sejak awal.'),
          e(
            'p',
            { className: 'section-desc', key: 'desc' },
            'Dengan deliverables yang terdefinisi, halaman tidak lagi terasa abstrak. Klien mengetahui apa yang akan dibangun, bagaimana struktur pesannya, dan tujuan bisnis yang ingin dicapai.',
          ),
        ]),
        e('div', { className: 'stack-list', key: 'list' },
          deliverables.map((item) =>
            e('article', { className: 'list-card', key: item }, [
              e('p', { key: 'copy' }, item),
            ]),
          ),
        ),
      ]),
      e('section', { className: 'section', id: 'fit', key: 'fit' }, [
        e('div', { className: 'section-header', key: 'header' }, [
          e('p', { className: 'section-label', key: 'label' }, 'Best fit'),
          e('h2', { key: 'title' }, 'Siapa yang paling cocok menggunakan layanan ini.'),
        ]),
        e('div', { className: 'cards-grid cards-grid-2', key: 'grid' },
          idealClients.map((item) =>
            e('article', { className: 'pillar-card', key: item.title }, [
              e('h3', { key: 'title' }, item.title),
              e('p', { key: 'desc' }, item.desc),
            ]),
          ),
        ),
      ]),
      e('section', { className: 'section', id: 'difference', key: 'difference' }, [
        e('div', { className: 'section-header', key: 'header' }, [
          e('p', { className: 'section-label', key: 'label' }, 'Why Somansa'),
          e('h2', { key: 'title' }, 'Pendekatan Somansa lebih strategis daripada sekadar mempercantik tampilan.'),
          e(
            'p',
            { className: 'section-desc', key: 'desc' },
            'Kami melihat landing page sebagai alat komunikasi bisnis. Karena itu fokus kami adalah kejelasan pesan, bobot kredibilitas, dan kualitas conversion yang dihasilkan.',
          ),
        ]),
        e('div', { className: 'cards-grid cards-grid-3', key: 'grid' },
          differentiators.map((item) =>
            e('article', { className: 'highlight-card', key: item.title }, [
              e('h3', { key: 'title' }, item.title),
              e('p', { key: 'desc' }, item.desc),
            ]),
          ),
        ),
      ]),
      e('section', { className: 'section', id: 'process', key: 'process' }, [
        e('div', { className: 'section-header', key: 'header' }, [
          e('p', { className: 'section-label', key: 'label' }, 'Process'),
          e('h2', { key: 'title' }, 'Proses kerja ringkas, namun tetap terasa strategic.'),
        ]),
        e('div', { className: 'cards-grid cards-grid-3', key: 'grid' },
          processSteps.map((item) =>
            e('article', { className: 'roadmap-card', key: item.step }, [
              e('span', { key: 'step' }, item.step),
              e('h3', { key: 'title' }, item.title),
              e('p', { key: 'desc' }, item.desc),
            ]),
          ),
        ),
      ]),
      e('section', { className: 'section', id: 'cta', key: 'cta' }, [
        e('div', { className: 'cta-panel', key: 'panel' }, [
          e('div', { key: 'copy' }, [
            e('p', { className: 'section-label', key: 'label' }, 'Next step'),
            e('h2', { key: 'title' }, 'Jika landing page perusahaan Anda belum cukup meyakinkan, mari audit dan susun ulang dengan pendekatan yang lebih tajam.'),
            e(
              'p',
              { className: 'section-desc', key: 'desc' },
              'Mulai dari review positioning, struktur halaman, hingga peluang conversion yang belum termanfaatkan. Cocok untuk perusahaan yang ingin tampil lebih kredibel sebelum traffic ditingkatkan.',
            ),
          ]),
          e('div', { className: 'cta-actions', key: 'actions' }, [
            e('a', { className: 'button button-primary', href: 'mailto:hello@somansa.id', key: 'email' }, 'Book Consultation'),
            e('a', { className: 'button button-secondary', href: 'mailto:hello@somansa.id?subject=Audit%20Landing%20Page', key: 'audit' }, 'Request Landing Page Audit'),
          ]),
        ]),
      ]),
    ]),
    e('footer', { className: 'footer', key: 'footer' }, `© ${new Date().getFullYear()} Somansa. Strategic company landing page service.`),
  ]);
}
