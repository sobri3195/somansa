const products = [
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

export default function App() {
  return (
    <div className="page">
      <header className="hero">
        <nav className="nav">
          <div className="brand">SOMANSA</div>
          <a className="cta" href="#products">
            Explore Produk
          </a>
        </nav>

        <div className="hero-content">
          <p className="badge">Innovating Health, Technology, & Lifestyle</p>
          <h1>Perusahaan Multi-Produk yang Membangun Masa Depan dari Indonesia</h1>
          <p className="lead">
            Somansa menghadirkan solusi terintegrasi untuk kesehatan, teknologi, dan layanan modern dengan fokus pada
            dampak nyata, desain unggul, dan inovasi berkelanjutan.
          </p>
          <div className="hero-actions">
            <a href="#products" className="btn btn-primary">
              Lihat Portofolio
            </a>
            <a href="#about" className="btn btn-secondary">
              Tentang Somansa
            </a>
          </div>
        </div>
        <div className="glow glow-a" />
        <div className="glow glow-b" />
      </header>

      <section id="about" className="highlights section">
        {highlights.map((item) => (
          <article className="card float" key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </article>
        ))}
      </section>

      <section id="products" className="section products">
        <div className="section-head">
          <p className="badge">Produk & Unit Bisnis</p>
          <h2>12 Pilar Bisnis Somansa</h2>
        </div>

        <div className="grid">
          {products.map((product, i) => (
            <div className="product-card reveal" style={{ animationDelay: `${i * 70}ms` }} key={product}>
              <span>{String(i + 1).padStart(2, '0')}</span>
              <h4>{product}</h4>
            </div>
          ))}
        </div>
      </section>

      <section className="section banner">
        <h2>Ready to collaborate with Somansa?</h2>
        <p>Kami membuka kolaborasi untuk institusi kesehatan, startup, UMKM, dan transformasi digital enterprise.</p>
        <a className="btn btn-primary" href="mailto:hello@somansa.id">
          Hubungi Tim Somansa
        </a>
      </section>

      <footer className="footer">© {new Date().getFullYear()} Somansa. All rights reserved.</footer>
    </div>
  );
}
