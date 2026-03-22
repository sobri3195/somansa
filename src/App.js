import React from 'https://esm.sh/react@18.3.1';
import { motion } from 'https://esm.sh/framer-motion@11.11.17?external=react';
import { Helmet } from 'https://esm.sh/react-helmet-async@2.0.5';
import { useForm } from 'https://esm.sh/react-hook-form@7.53.1?external=react';
import { z } from 'https://esm.sh/zod@3.23.8';
import { zodResolver } from 'https://esm.sh/@hookform/resolvers@3.9.0/zod?external=react-hook-form';
import { useAutoAnimate } from 'https://esm.sh/@formkit/auto-animate@0.8.2/react?external=react';
import {
  ArrowRight,
  BadgeCheck,
  BrainCircuit,
  ChevronDown,
  HeartPulse,
  LayoutGrid,
  LucideSparkles,
  MonitorSmartphone,
  MoveRight,
  ShieldCheck,
  Stethoscope,
} from 'https://esm.sh/lucide-react@0.453.0?external=react';

const e = React.createElement;
const { useMemo, useState } = React;

const navItems = [
  { label: 'Produk', href: '#produk' },
  { label: 'Keunggulan', href: '#keunggulan' },
  { label: 'Workflow', href: '#workflow' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Kontak', href: '#kontak' },
];

const stats = [
  { value: '12+', label: 'unit produk & bisnis saling terhubung dalam satu ekosistem.' },
  { value: '24/7', label: 'arah desain digital-first untuk pengalaman yang selalu responsif.' },
  { value: 'B2B + B2C', label: 'solusi untuk klinik, rumah sakit, tenaga medis, dan konsumen.' },
];

const advantages = [
  {
    icon: BrainCircuit,
    title: 'Produk healthcare yang siap tumbuh',
    desc: 'Dari AI radiologi hingga homecare, semua dirancang agar cepat diadopsi dan mudah diskalakan.',
  },
  {
    icon: MonitorSmartphone,
    title: 'Design system premium',
    desc: 'Visual modern, modular, dan conversion-oriented untuk membangun trust sejak first impression.',
  },
  {
    icon: ShieldCheck,
    title: 'Operasional lebih aman & efisien',
    desc: 'Kombinasi software, layanan, dan commerce yang mengurangi friksi pada tiap touchpoint utama.',
  },
];

const products = [
  {
    title: 'CogniScan AI',
    tag: 'AI Diagnostics',
    desc: 'Analisis radiologi dan laboratorium lebih cepat dengan insight visual, workflow klinis, dan ringkasan hasil berbasis AI.',
    points: ['Triase lebih cepat', 'Dashboard insight', 'Integrasi alur klinik'],
  },
  {
    title: 'Kaist Medika',
    tag: 'Clinic & Homecare',
    desc: 'Layanan klinik dan homecare yang menyatukan reservasi, follow-up pasien, dan koordinasi tenaga medis.',
    points: ['Booking modern', 'Visit management', 'Patient retention'],
  },
  {
    title: 'SIMRS / SIMKlinik',
    tag: 'Operational System',
    desc: 'Mengelola pendaftaran, rekam medis, farmasi, dan laporan operasional melalui satu platform terpadu.',
    points: ['Multi-role access', 'Data terpusat', 'Reporting real-time'],
  },
  {
    title: 'Medical Commerce',
    tag: 'Retail Ecosystem',
    desc: 'Scrub dokter, alat medis, dan apotek dalam ekosistem commerce yang siap melayani kebutuhan profesional kesehatan.',
    points: ['Catalog premium', 'Fast fulfillment', 'Cross-sell flow'],
  },
  {
    title: 'MedEd Platform',
    tag: 'Doctor Exam Prep',
    desc: 'Platform belajar modern untuk persiapan ujian dokter dengan simulasi, bank soal, dan progress tracking.',
    points: ['Adaptive content', 'Tryout engine', 'Progress analytics'],
  },
  {
    title: 'Software House',
    tag: 'Custom Build',
    desc: 'Tim digital product untuk membangun website, aplikasi internal, dashboard, dan automation sesuai target bisnis.',
    points: ['Strategy sprint', 'Full-stack delivery', 'Growth optimization'],
  },
];

const workflow = [
  { step: '01', title: 'Discover', desc: 'Memetakan target bisnis, pain point operasional, dan kebutuhan digital utama.' },
  { step: '02', title: 'Design', desc: 'Menyusun pengalaman pengguna, struktur konten, serta prioritas konversi untuk halaman dan produk.' },
  { step: '03', title: 'Build', desc: 'Mengimplementasikan produk dengan komponen modular, performa tinggi, dan visual premium.' },
  { step: '04', title: 'Scale', desc: 'Mengaktifkan eksperimen, automation, dan integrasi lanjutan untuk mendorong pertumbuhan.' },
];

const faqs = [
  {
    q: 'Apakah Somansa hanya fokus pada healthcare?',
    a: 'Tidak. Healthcare adalah fondasi utama, namun Somansa juga membangun software, commerce, edukasi, dan unit bisnis pendukung lain yang terintegrasi.',
  },
  {
    q: 'Apakah landing page ini bisa dikembangkan menjadi website full company profile?',
    a: 'Bisa. Struktur section, CTA, dan modular component sudah disiapkan agar mudah dikembangkan menjadi multipage website atau dashboard.',
  },
  {
    q: 'Apakah form kontak sudah siap divalidasi?',
    a: 'Ya. Form menggunakan React Hook Form dan Zod agar validasi input berjalan jelas dan ringan di sisi klien.',
  },
];

const schema = z.object({
  name: z.string().min(3, 'Nama minimal 3 karakter.'),
  email: z.string().email('Email tidak valid.'),
  company: z.string().min(2, 'Nama perusahaan minimal 2 karakter.'),
  message: z.string().min(20, 'Pesan minimal 20 karakter.'),
});

function cn() {
  return Array.from(arguments).filter(Boolean).join(' ');
}

function Button(props) {
  const { children, href, variant, className, type } = props;
  const Comp = href ? 'a' : 'button';
  return e(
    Comp,
    {
      href,
      type: type || (href ? undefined : 'button'),
      className: cn(
        'inline-flex items-center justify-center gap-2 rounded-full border px-5 py-3 text-sm font-semibold transition duration-300',
        variant === 'ghost'
          ? 'border-white/10 bg-white/5 text-white hover:border-cyan-300/40 hover:bg-white/10'
          : 'border-cyan-300/40 bg-gradient-to-r from-cyan-300 via-sky-400 to-violet-500 bg-[length:200%_100%] text-slate-950 shadow-glow hover:scale-[1.02] hover:animate-shine',
        className,
      ),
    },
    children,
  );
}

function Card(props) {
  return e(
    'div',
    {
      className: cn(
        'rounded-[28px] border border-white/10 bg-white/5 p-6 shadow-panel backdrop-blur-xl',
        props.className,
      ),
    },
    props.children,
  );
}

function SectionTitle(props) {
  return e('div', { className: cn('max-w-3xl', props.className) }, [
    e('p', { className: 'text-xs font-semibold uppercase tracking-[0.32em] text-cyan-300/80', key: 'eyebrow' }, props.eyebrow),
    e('h2', { className: 'mt-4 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl', key: 'title' }, props.title),
    e('p', { className: 'mt-4 text-base leading-8 text-slate-300', key: 'desc' }, props.desc),
  ]);
}

function ProductCard(item, index) {
  return e(
    motion.article,
    {
      key: item.title,
      initial: { opacity: 0, y: 26 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, amount: 0.2 },
      transition: { duration: 0.55, delay: index * 0.06 },
      className:
        'group relative overflow-hidden rounded-[30px] border border-white/10 bg-slate-900/70 p-6 shadow-panel backdrop-blur-xl',
    },
    [
      e('div', { className: 'absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.16),transparent_32%),radial-gradient(circle_at_bottom_left,rgba(139,92,246,0.14),transparent_30%)] opacity-0 transition duration-500 group-hover:opacity-100', key: 'bg' }),
      e('div', { className: 'relative', key: 'content' }, [
        e('div', { className: 'flex items-center justify-between gap-4', key: 'head' }, [
          e('span', { className: 'rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs font-medium text-cyan-200', key: 'tag' }, item.tag),
          e('span', { className: 'text-sm font-semibold text-white/40', key: 'idx' }, String(index + 1).padStart(2, '0')),
        ]),
        e('h3', { className: 'mt-5 text-2xl font-semibold tracking-[-0.03em] text-white', key: 'title' }, item.title),
        e('p', { className: 'mt-4 text-sm leading-7 text-slate-300', key: 'desc' }, item.desc),
        e(
          'div',
          { className: 'mt-6 flex flex-wrap gap-2', key: 'points' },
          item.points.map((point) =>
            e('span', { className: 'rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-slate-200', key: point }, point),
          ),
        ),
      ]),
    ],
  );
}

function FaqItem(props) {
  const [open, setOpen] = useState(props.defaultOpen || false);
  return e(Card, { className: 'p-0 overflow-hidden', key: props.item.q }, [
    e(
      'button',
      {
        type: 'button',
        onClick: () => setOpen(!open),
        className: 'flex w-full items-center justify-between gap-4 px-6 py-5 text-left',
        key: 'button',
      },
      [
        e('span', { className: 'text-base font-semibold text-white', key: 'q' }, props.item.q),
        e(ChevronDown, {
          className: cn('h-5 w-5 shrink-0 text-cyan-300 transition duration-300', open && 'rotate-180'),
          key: 'icon',
        }),
      ],
    ),
    open
      ? e('div', { className: 'px-6 pb-6 text-sm leading-7 text-slate-300', key: 'a' }, props.item.a)
      : null,
  ]);
}

export function App() {
  const [faqParent] = useAutoAnimate();
  const [submitted, setSubmitted] = useState(null);
  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      name: '',
      email: '',
      company: '',
      message: '',
    },
  });

  const fields = useMemo(
    () => [
      { name: 'name', label: 'Nama', type: 'text', placeholder: 'Nama lengkap' },
      { name: 'email', label: 'Email', type: 'email', placeholder: 'email@perusahaan.com' },
      { name: 'company', label: 'Perusahaan', type: 'text', placeholder: 'Nama perusahaan / institusi' },
    ],
    [],
  );

  const onSubmit = form.handleSubmit((values) => {
    setSubmitted(values);
    form.reset();
  });

  return e('div', { className: 'relative overflow-hidden bg-slate-950 text-white' }, [
    e(Helmet, { key: 'helmet' }, [
      e('title', { key: 'title' }, 'Somansa — Landing Page Perusahaan & Product Ecosystem'),
      e('meta', {
        key: 'description',
        name: 'description',
        content:
          'Landing page perusahaan Somansa dengan product showcase, animasi modern, SEO meta tags, FAQ interaktif, dan form kontak tervalidasi.',
      }),
    ]),
    e('div', { className: 'pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(103,232,249,0.14),transparent_24%),radial-gradient(circle_at_80%_0%,rgba(139,92,246,0.18),transparent_28%),linear-gradient(180deg,#020617_0%,#020817_40%,#030712_100%)]', key: 'backdrop' }),
    e('div', { className: 'pointer-events-none absolute left-[-120px] top-20 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl animate-pulseSoft', key: 'glow-left' }),
    e('div', { className: 'pointer-events-none absolute right-[-120px] top-32 h-80 w-80 rounded-full bg-violet-500/20 blur-3xl animate-float', key: 'glow-right' }),
    e('main', { className: 'relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8', key: 'main' }, [
      e('header', { className: 'pt-6 sm:pt-8', key: 'header' }, [
        e('nav', { className: 'flex flex-col gap-4 rounded-full border border-white/10 bg-white/5 px-5 py-4 shadow-panel backdrop-blur-xl sm:flex-row sm:items-center sm:justify-between', key: 'nav' }, [
          e('a', { href: '#top', className: 'text-sm font-extrabold tracking-[0.4em] text-white', key: 'brand' }, 'SOMANSA'),
          e('div', { className: 'flex flex-wrap gap-5 text-sm text-slate-300', key: 'items' }, navItems.map((item) => e('a', { href: item.href, className: 'transition hover:text-white', key: item.href }, item.label))),
        ]),
      ]),
      e('section', { id: 'top', className: 'grid min-h-[calc(100vh-110px)] items-center gap-10 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:py-24', key: 'hero' }, [
        e(motion.div, {
          initial: { opacity: 0, y: 28 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8 },
          className: 'max-w-3xl',
          key: 'hero-copy',
        }, [
          e('div', { className: 'inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200', key: 'label' }, [e(LucideSparkles, { className: 'h-4 w-4', key: 'icon' }), 'Future-ready company profile']),
          e('h1', { className: 'mt-6 max-w-4xl text-5xl font-semibold leading-none tracking-[-0.06em] text-white sm:text-6xl lg:text-7xl', key: 'title' }, 'Landing page perusahaan modern untuk menampilkan produk dan keunggulan Somansa.'),
          e('p', { className: 'mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg', key: 'desc' }, 'Visual premium, positioning yang jelas, dan struktur section yang siap dipakai untuk membangun trust, menjelaskan produk, serta mengarahkan pengunjung menuju kontak bisnis.'),
          e('div', { className: 'mt-8 flex flex-wrap gap-3', key: 'actions' }, [
            e(Button, { href: '#produk', key: 'primary' }, ['Lihat Produk', e(ArrowRight, { className: 'h-4 w-4', key: 'icon' })]),
            e(Button, { href: '#kontak', variant: 'ghost', key: 'secondary' }, 'Hubungi Tim'),
          ]),
          e('div', { className: 'mt-10 grid gap-4 sm:grid-cols-3', key: 'stats' }, stats.map((item) => e(Card, { className: 'rounded-[24px] p-5', key: item.value }, [e('div', { className: 'text-lg font-semibold text-white', key: 'value' }, item.value), e('p', { className: 'mt-2 text-sm leading-6 text-slate-300', key: 'label' }, item.label)]))),
        ]),
        e(motion.div, {
          initial: { opacity: 0, scale: 0.96 },
          animate: { opacity: 1, scale: 1 },
          transition: { duration: 0.8, delay: 0.15 },
          className: 'relative',
          key: 'hero-panel',
        },
        e(Card, { className: 'relative overflow-hidden rounded-[36px] p-7 sm:p-8' }, [
          e('div', { className: 'absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.18),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(139,92,246,0.16),transparent_32%)]', key: 'panel-bg' }),
          e('div', { className: 'relative', key: 'panel-content' }, [
            e('div', { className: 'flex items-center justify-between', key: 'top' }, [
              e('div', { key: 'left' }, [
                e('p', { className: 'text-sm text-slate-400', key: 'small' }, 'Product ecosystem'),
                e('h2', { className: 'mt-2 text-2xl font-semibold tracking-[-0.04em]', key: 'head' }, 'One company, many strategic products'),
              ]),
              e('div', { className: 'rounded-2xl border border-white/10 bg-white/5 p-3', key: 'right' }, e(LayoutGrid, { className: 'h-7 w-7 text-cyan-300' })),
            ]),
            e('div', { className: 'mt-8 grid gap-4 sm:grid-cols-2', key: 'hero-grid' }, [
              e(Card, { className: 'rounded-[24px] bg-slate-900/80 p-5', key: 'ai' }, [e(BrainCircuit, { className: 'h-8 w-8 text-cyan-300', key: 'i' }), e('h3', { className: 'mt-4 text-lg font-semibold', key: 't' }, 'AI & Diagnostics'), e('p', { className: 'mt-2 text-sm leading-6 text-slate-300', key: 'd' }, 'Produk diagnostik modern yang mendukung kecepatan dan kualitas keputusan klinis.')]),
              e(Card, { className: 'rounded-[24px] bg-slate-900/80 p-5', key: 'care' }, [e(HeartPulse, { className: 'h-8 w-8 text-violet-300', key: 'i' }), e('h3', { className: 'mt-4 text-lg font-semibold', key: 't' }, 'Clinic & Care'), e('p', { className: 'mt-2 text-sm leading-6 text-slate-300', key: 'd' }, 'Layanan klinik, homecare, dan specialty care yang menyatukan operasional dan experience.')]),
              e(Card, { className: 'rounded-[24px] bg-slate-900/80 p-5', key: 'commerce' }, [e(Stethoscope, { className: 'h-8 w-8 text-sky-300', key: 'i' }), e('h3', { className: 'mt-4 text-lg font-semibold', key: 't' }, 'Medical Commerce'), e('p', { className: 'mt-2 text-sm leading-6 text-slate-300', key: 'd' }, 'Retail produk medis dan apparel profesional yang mendukung kebutuhan tenaga kesehatan.')]),
              e(Card, { className: 'rounded-[24px] bg-slate-900/80 p-5', key: 'custom' }, [e(BadgeCheck, { className: 'h-8 w-8 text-emerald-300', key: 'i' }), e('h3', { className: 'mt-4 text-lg font-semibold', key: 't' }, 'Custom Product Build'), e('p', { className: 'mt-2 text-sm leading-6 text-slate-300', key: 'd' }, 'Pengembangan website dan software internal untuk mempercepat transformasi digital bisnis.')]),
            ]),
          ]),
        ])),
      ]),
      e('section', { id: 'keunggulan', className: 'py-14 sm:py-20', key: 'advantages' }, [
        e(SectionTitle, {
          eyebrow: 'Keunggulan',
          title: 'Dibangun seperti company landing page premium dengan bahasa visual yang kuat.',
          desc: 'Setiap blok konten diarahkan untuk memperjelas value proposition, memperlihatkan lini produk, dan menuntun visitor menuju CTA utama.',
          key: 'title',
        }),
        e('div', { className: 'mt-10 grid gap-5 lg:grid-cols-3', key: 'cards' }, advantages.map((item, index) => e(motion.div, { initial: { opacity: 0, y: 22 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: 0.3 }, transition: { duration: 0.5, delay: index * 0.08 }, key: item.title }, e(Card, { className: 'h-full rounded-[30px]' }, [e(item.icon, { className: 'h-10 w-10 text-cyan-300', key: 'icon' }), e('h3', { className: 'mt-6 text-xl font-semibold text-white', key: 'title' }, item.title), e('p', { className: 'mt-4 text-sm leading-7 text-slate-300', key: 'desc' }, item.desc)]))))
      ]),
      e('section', { id: 'produk', className: 'py-14 sm:py-20', key: 'products' }, [
        e(SectionTitle, {
          eyebrow: 'Produk unggulan',
          title: 'Menampilkan portofolio produk dalam layout yang bersih, modern, dan mudah dipahami.',
          desc: 'Kartu produk dibuat seperti product showcase untuk memperlihatkan kategori, ringkasan manfaat, dan positioning tiap unit bisnis.',
          key: 'title',
        }),
        e('div', { className: 'mt-10 grid gap-5 lg:grid-cols-2 xl:grid-cols-3', key: 'grid' }, products.map(ProductCard)),
      ]),
      e('section', { id: 'workflow', className: 'py-14 sm:py-20', key: 'workflow' }, [
        e('div', { className: 'grid gap-8 lg:grid-cols-[0.9fr_1.1fr]', key: 'wrap' }, [
          e(SectionTitle, {
            eyebrow: 'Workflow',
            title: 'Narasi perusahaan dibuat lebih strategis, bukan sekadar daftar layanan.',
            desc: 'Section ini memperkuat kesan bahwa Somansa mampu bergerak dari discovery sampai scale dengan pendekatan yang terstruktur.',
            key: 'left',
          }),
          e('div', { className: 'grid gap-4 sm:grid-cols-2', key: 'right' }, workflow.map((item, index) => e(motion.div, { key: item.step, initial: { opacity: 0, x: 18 }, whileInView: { opacity: 1, x: 0 }, viewport: { once: true, amount: 0.25 }, transition: { duration: 0.45, delay: index * 0.08 } }, e(Card, { className: 'h-full rounded-[28px]' }, [e('span', { className: 'text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300/75', key: 'step' }, item.step), e('h3', { className: 'mt-4 text-xl font-semibold text-white', key: 'title' }, item.title), e('p', { className: 'mt-3 text-sm leading-7 text-slate-300', key: 'desc' }, item.desc)]))))
        ]),
      ]),
      e('section', { className: 'py-14 sm:py-20', key: 'cta-band' }, e(Card, { className: 'overflow-hidden rounded-[36px] p-8 sm:p-10' }, [
        e('div', { className: 'absolute inset-0 bg-[linear-gradient(135deg,rgba(56,189,248,0.18),transparent_35%,rgba(139,92,246,0.18))]', key: 'overlay' }),
        e('div', { className: 'relative flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between', key: 'inner' }, [
          e('div', { className: 'max-w-3xl', key: 'copy' }, [
            e('p', { className: 'text-xs font-semibold uppercase tracking-[0.34em] text-cyan-200/75', key: 'eyebrow' }, 'Ready to launch'),
            e('h2', { className: 'mt-4 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl', key: 'title' }, 'Tampilan baru ini siap menjadi fondasi website perusahaan Somansa.'),
            e('p', { className: 'mt-4 text-base leading-8 text-slate-300', key: 'desc' }, 'Struktur halaman sudah memuat hero, keunggulan, portofolio produk, workflow, FAQ, dan area kontak agar mudah dikembangkan lebih lanjut.'),
          ]),
          e('div', { className: 'flex flex-wrap gap-3', key: 'actions' }, [
            e(Button, { href: '#kontak', key: 'contact' }, ['Mulai Diskusi', e(MoveRight, { className: 'h-4 w-4', key: 'i' })]),
            e(Button, { href: '#faq', variant: 'ghost', key: 'faq' }, 'Lihat FAQ'),
          ]),
        ]),
      ])),
      e('section', { id: 'faq', className: 'py-14 sm:py-20', key: 'faq' }, [
        e(SectionTitle, {
          eyebrow: 'FAQ',
          title: 'Bagian interaktif untuk menjawab pertanyaan umum dengan animasi ringan.',
          desc: 'Accordion menggunakan auto-animate sehingga transisi buka-tutup terasa halus tanpa konfigurasi rumit.',
          key: 'title',
        }),
        e('div', { ref: faqParent, className: 'mt-10 space-y-4', key: 'list' }, faqs.map((item, index) => e(FaqItem, { item, defaultOpen: index === 0, key: item.q }))),
      ]),
      e('section', { id: 'kontak', className: 'py-14 sm:py-20', key: 'contact' }, [
        e('div', { className: 'grid gap-6 lg:grid-cols-[0.85fr_1.15fr]', key: 'wrap' }, [
          e(Card, { className: 'rounded-[36px] p-8', key: 'contact-copy' }, [
            e('p', { className: 'text-xs font-semibold uppercase tracking-[0.34em] text-cyan-300/80', key: 'eyebrow' }, 'Kontak bisnis'),
            e('h2', { className: 'mt-4 text-3xl font-semibold tracking-[-0.04em]', key: 'title' }, 'Form kontak siap dipakai untuk lead generation.'),
            e('p', { className: 'mt-4 text-base leading-8 text-slate-300', key: 'desc' }, 'Form dibangun dengan validasi yang jelas untuk membantu pengunjung mengirim kebutuhan proyek, kolaborasi, atau permintaan demo produk.'),
            e('div', { className: 'mt-8 space-y-4', key: 'info' }, [
              e('div', { className: 'rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-300', key: 'email' }, [e('div', { className: 'font-semibold text-white', key: 'label' }, 'Email'), e('div', { className: 'mt-1', key: 'value' }, 'hello@somansa.id')]),
              e('div', { className: 'rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-300', key: 'focus' }, [e('div', { className: 'font-semibold text-white', key: 'label' }, 'Fokus utama'), e('div', { className: 'mt-1', key: 'value' }, 'AI healthcare, clinic operations, medical commerce, dan software development.')]),
            ]),
            submitted
              ? e('div', { className: 'mt-8 rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-4 text-sm text-emerald-100', key: 'success' }, `Terima kasih ${submitted.name}, kebutuhan dari ${submitted.company} sudah tercatat.`)
              : null,
          ]),
          e(Card, { className: 'rounded-[36px] p-8', key: 'form' }, [
            e('form', { onSubmit, className: 'space-y-5', key: 'form' }, [
              ...fields.map((field) => e('label', { className: 'block', key: field.name }, [
                e('span', { className: 'mb-2 block text-sm font-medium text-slate-200', key: 'label' }, field.label),
                e('input', {
                  type: field.type,
                  placeholder: field.placeholder,
                  className: 'w-full rounded-2xl border border-white/10 bg-slate-950/80 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-300/50 focus:ring-2 focus:ring-cyan-300/20',
                  key: 'input',
                  ...form.register(field.name),
                }),
                form.formState.errors[field.name]
                  ? e('p', { className: 'mt-2 text-sm text-rose-300', key: 'error' }, form.formState.errors[field.name].message)
                  : null,
              ])),
              e('label', { className: 'block', key: 'message' }, [
                e('span', { className: 'mb-2 block text-sm font-medium text-slate-200', key: 'label' }, 'Pesan'),
                e('textarea', {
                  rows: 5,
                  placeholder: 'Ceritakan kebutuhan website, produk, atau kolaborasi yang Anda inginkan.',
                  className: 'w-full rounded-2xl border border-white/10 bg-slate-950/80 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-300/50 focus:ring-2 focus:ring-cyan-300/20',
                  key: 'input',
                  ...form.register('message'),
                }),
                form.formState.errors.message
                  ? e('p', { className: 'mt-2 text-sm text-rose-300', key: 'error' }, form.formState.errors.message)
                  : null,
              ]),
              e('div', { className: 'flex flex-wrap items-center justify-between gap-3 pt-2', key: 'actions' }, [
                e('p', { className: 'text-sm leading-6 text-slate-400', key: 'note' }, 'UI siap untuk dihubungkan ke backend email, CRM, atau WhatsApp funnel.'),
                e(Button, { type: 'submit', className: 'min-w-[180px]', key: 'submit' }, form.formState.isSubmitting ? 'Mengirim...' : 'Kirim Pesan'),
              ]),
            ]),
          ]),
        ]),
      ]),
      e('footer', { className: 'border-t border-white/10 py-8 text-center text-sm text-slate-400', key: 'footer' }, `© ${new Date().getFullYear()} Somansa. Crafted for a premium product-first company profile.`),
    ]),
  ]);
}
