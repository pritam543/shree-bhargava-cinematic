import Header from '@/components/Header';
import ProjectGrid from '@/components/ProjectGrid';
import CinematicMotion from '@/components/CinematicMotion';
import { sampleProjects } from '@/lib/content';
import { hasSupabase, supabase, type Project } from '@/lib/supabase';
import {
  ArrowDown,
  ArrowUpRight,
  Award,
  Building2,
  Compass,
  HardHat,
  Layers,
  MapPin,
  Ruler,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';

async function getProjects(): Promise<Project[]> {
  if (!hasSupabase || !supabase) return sampleProjects;
  const { data, error } = await supabase
    .from('projects')
    .select('*')
    .eq('featured', true)
    .order('created_at', { ascending: false })
    .limit(6);
  return error || !data?.length ? sampleProjects : (data as Project[]);
}

export default async function Home() {
  const projects = await getProjects();
  const wa = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '919876543210';

  return (
    <CinematicMotion>
      <main id="home" className="overflow-hidden bg-white text-[#121822]">
        {/* =====================================================================
            HERO SECTION — MIDNIGHT NAVY OVERLAY + CLEAN FLOATING TEXT
        ===================================================================== */}
        <section className="hero-section relative min-h-[96svh] md:min-h-screen flex items-end text-white bg-[#121822] overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <img
              className="hero-zoom-img w-full h-full object-cover will-change-transform"
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2400&q=90"
              alt="Shree Bhargava Contemporary Luxury Residence"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#121822]/90 via-[#121822]/35 to-[#121822]/55" />
          </div>

          <Header />

          <div className="relative z-10 w-full max-w-[1500px] mx-auto px-6 md:px-12 pb-16 md:pb-24">
            <div className="hero-left-exit hero-stagger">
              <p className="eyebrow !text-[#ffa500] mb-5">
                Shree Bhargava Infrastructure &amp; Development · Creative Indian Architect
              </p>
              <h1 className="serif hero-title hero-text-shadow text-[clamp(3.5rem,8.5vw,8.5rem)] leading-[.93] max-w-5xl">
                Spaces that
                <br />
                <i className="font-normal text-[#ffa500]">move you.</i>
              </h1>
            </div>

            <div className="hero-right-exit mt-9 flex flex-col md:flex-row md:items-end justify-between gap-8 hero-stagger">
              <p className="max-w-lg text-sm md:text-base leading-7 text-white/90 hero-text-shadow">
                Design-led architecture, bespoke interiors, structural engineering, and turnkey infrastructure crafted
                for enduring beauty and modern Indian living.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#cinema-reel"
                  className="group inline-flex items-center gap-3 text-[10px] tracking-[.2em] uppercase bg-[#ffa500] text-[#121822] font-bold px-7 py-4 rounded-full hover:bg-white transition-all duration-500 shadow-xl"
                >
                  Experience the film{' '}
                  <ArrowDown size={15} className="group-hover:translate-y-1 transition-transform duration-300" />
                </a>
                <a
                  href="#projects"
                  className="inline-flex items-center gap-3 text-[10px] tracking-[.2em] uppercase border border-white/40 bg-[#121822]/50 backdrop-blur-sm px-6 py-4 rounded-full hover:bg-[#ffa500] hover:text-[#121822] hover:border-[#ffa500] transition-all duration-500"
                >
                  Selected works
                </a>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-px bg-white/20" />
        </section>

        {/* =====================================================================
            DUAL-DIRECTION SCRUBBED ARCHITECTURAL MARQUEE BAND #1
        ===================================================================== */}
        <section className="marquee-band bg-[#121822] text-white py-9 border-y border-white/10 overflow-hidden select-none">
          <div className="marquee-left whitespace-nowrap serif text-3xl md:text-5xl tracking-wide">
            ARCHITECTURE &nbsp;·&nbsp; <i className="text-[#ffa500]">TURNKEY INFRASTRUCTURE</i> &nbsp;·&nbsp; BESPOKE
            INTERIORS &nbsp;·&nbsp; <i className="text-[#ffa500]">URBAN MASTERPLANNING</i> &nbsp;·&nbsp; 3D
            VISUALIZATION &nbsp;·&nbsp; <i className="text-[#ffa500]">STRUCTURAL ENGINEERING</i>
          </div>
          <div className="marquee-right whitespace-nowrap serif text-3xl md:text-5xl tracking-wide text-white/35 mt-3">
            <i>INDORE</i> &nbsp;·&nbsp; BHOPAL &nbsp;·&nbsp; <i>JABALPUR</i> &nbsp;·&nbsp; UJJAIN &nbsp;·&nbsp;{' '}
            <i>MADHYA PRADESH</i> &nbsp;·&nbsp; ACROSS INDIA
          </div>
        </section>

        {/* =====================================================================
            01 / THE STUDIO — CRISP WHITE SECTION + AMBER ACCENTS + LEFT/RIGHT SLIDE
        ===================================================================== */}
        <section id="about" className="relative bg-white text-[#121822] section-pad overflow-hidden">
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=2200&q=80"
              alt="Architectural concrete and timber texture"
              className="w-full h-full object-cover opacity-[0.06] will-change-transform"
            />
          </div>

          <div className="relative z-10 grid md:grid-cols-[.85fr_1.15fr] gap-14 md:gap-24 items-center">
            <div className="slide-left">
              <p className="eyebrow mb-4">01 / The studio</p>
              <h2 className="serif text-5xl md:text-7xl leading-[1.02] text-[#121822]">
                Designing spaces.
                <br />
                <i className="text-[#ffa500]">Creating meaning.</i>
              </h2>
              <div className="amber-bar mt-6" />

              <div className="curtain-frame mt-10 aspect-[4/3] w-full max-w-md overflow-hidden shadow-xl border border-slate-200">
                <img
                  src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1400&q=85"
                  alt="Warm bespoke interior lounge"
                  className="w-full h-full object-cover will-change-transform"
                />
              </div>
            </div>

            <div className="slide-right max-w-xl">
              <p className="text-lg md:text-xl leading-8 text-[#121822] font-medium">
                Shree Bhargava Infrastructure and Development is a multidisciplinary architecture, interior design, and
                civil infrastructure practice rooted in Indore, Madhya Pradesh.
              </p>
              <p className="mt-5 text-sm leading-7 text-[#64748b]">
                From luxury private residences and commercial landmarks to industrial layouts and end-to-end turnkey
                execution, we unite poetic spatial aesthetics with rigorous engineering precision — delivering spaces
                built to inspire for generations.
              </p>

              {/* STUDIO METRICS BAR */}
              <div className="grid grid-cols-3 gap-6 border-y border-slate-200 py-7 my-8">
                <div>
                  <p className="serif text-3xl md:text-4xl text-[#121822] stat-counter" data-target="120" data-suffix="+">
                    120+
                  </p>
                  <p className="eyebrow mt-2">Projects Delivered</p>
                </div>
                <div>
                  <p className="serif text-3xl md:text-4xl text-[#121822] stat-counter" data-target="15" data-suffix="+">
                    15+
                  </p>
                  <p className="eyebrow mt-2">Years Excellence</p>
                </div>
                <div>
                  <p className="serif text-3xl md:text-4xl text-[#121822] stat-counter" data-target="25" data-suffix="L+">
                    25L+
                  </p>
                  <p className="eyebrow mt-2">Sq. Ft. Built</p>
                </div>
              </div>

              <a
                href="#contact"
                className="group inline-flex items-center gap-3 text-[10px] font-bold tracking-[.18em] uppercase border-b-2 border-[#ffa500] pb-3 text-[#121822] hover:text-[#ffa500] transition-colors"
              >
                Schedule a studio consultation{' '}
                <ArrowUpRight
                  size={15}
                  className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
                />
              </a>

              <div className="curtain-frame mt-10 aspect-[16/9] w-full overflow-hidden shadow-xl border border-slate-200">
                <img
                  src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=85"
                  alt="Double-height contemporary living room"
                  className="w-full h-full object-cover will-change-transform"
                />
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================================
            PINNED VIDEO-CLIP SEQUENCE #1 — ARCHITECTURAL FILM STORYBOARD (4 SCENES)
        ===================================================================== */}
        <section
          id="cinema-reel"
          className="video-scrub-section relative h-screen w-full bg-[#121822] text-white overflow-hidden"
        >
          <div className="cinema-transition-flash pointer-events-none absolute inset-0 z-20 bg-gradient-to-r from-transparent via-[#ffa500]/40 to-transparent opacity-0" />

          <div className="video-frame-slide absolute inset-0 overflow-hidden bg-[#121822]">
            <img
              src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=2400&q=90"
              alt="Architectural Facade Mastery"
              className="w-full h-full object-cover will-change-transform"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#121822]/85 via-[#121822]/40 to-transparent" />
          </div>

          <div className="video-frame-slide absolute inset-0 overflow-hidden opacity-0 bg-[#121822]">
            <img
              src="https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=2400&q=90"
              alt="Bespoke Interior Craftsmanship"
              className="w-full h-full object-cover will-change-transform"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#121822]/85 via-[#121822]/40 to-transparent" />
          </div>

          <div className="video-frame-slide absolute inset-0 overflow-hidden opacity-0 bg-[#121822]">
            <img
              src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=2400&q=90"
              alt="Biophilic Courtyards & Pools"
              className="w-full h-full object-cover will-change-transform"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#121822]/85 via-[#121822]/40 to-transparent" />
          </div>

          <div className="video-frame-slide absolute inset-0 overflow-hidden opacity-0 bg-[#121822]">
            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2400&q=90"
              alt="Commercial & Infrastructure Landmarks"
              className="w-full h-full object-cover will-change-transform"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#121822]/85 via-[#121822]/40 to-transparent" />
          </div>

          <div className="relative z-10 h-full max-w-[1500px] mx-auto px-6 md:px-12 flex items-center">
            <div className="relative w-full max-w-2xl min-h-[260px]">
              <div className="video-frame-caption absolute inset-0">
                <p className="eyebrow !text-[#ffa500] mb-4">Chapter 01 / Form &amp; Daylight</p>
                <h2 className="serif hero-text-shadow text-4xl md:text-7xl leading-[1.03]">
                  Sculpted with <i className="text-[#ffa500]">light &amp; shadow.</i>
                </h2>
                <p className="mt-5 text-sm md:text-base text-white/95 leading-7 hero-text-shadow max-w-xl">
                  Every elevation is engineered to respond to climate, sun-path, and natural cross-ventilation — creating
                  iconic facades across Central India.
                </p>
              </div>

              <div className="video-frame-caption absolute inset-0 opacity-0 pointer-events-none">
                <p className="eyebrow !text-[#ffa500] mb-4">Chapter 02 / Tactile Interiors</p>
                <h2 className="serif hero-text-shadow text-4xl md:text-7xl leading-[1.03]">
                  Warmth in <i className="text-[#ffa500]">every detail.</i>
                </h2>
                <p className="mt-5 text-sm md:text-base text-white/95 leading-7 hero-text-shadow max-w-xl">
                  Handpicked natural stone, warm timber joinery, and acoustic serenity come together in interiors tailored
                  to your daily rituals.
                </p>
              </div>

              <div className="video-frame-caption absolute inset-0 opacity-0 pointer-events-none">
                <p className="eyebrow !text-[#ffa500] mb-4">Chapter 03 / Living Landscapes</p>
                <h2 className="serif hero-text-shadow text-4xl md:text-7xl leading-[1.03]">
                  Where nature <i className="text-[#ffa500]">meets structure.</i>
                </h2>
                <p className="mt-5 text-sm md:text-base text-white/95 leading-7 hero-text-shadow max-w-xl">
                  Seamless indoor-outdoor courtyards, water bodies, and terraced greens that dissolve the boundary
                  between home and horizon.
                </p>
              </div>

              <div className="video-frame-caption absolute inset-0 opacity-0 pointer-events-none">
                <p className="eyebrow !text-[#ffa500] mb-4">Chapter 04 / Infrastructure Scale</p>
                <h2 className="serif hero-text-shadow text-4xl md:text-7xl leading-[1.03]">
                  Built for <i className="text-[#ffa500]">tomorrow&apos;s skyline.</i>
                </h2>
                <p className="mt-5 text-sm md:text-base text-white/95 leading-7 hero-text-shadow max-w-xl">
                  High-performance commercial hubs, institutional campuses, and turnkey civil developments executed with
                  zero compromise.
                </p>
              </div>
            </div>
          </div>

          <div className="absolute bottom-8 left-6 md:left-12 right-6 md:right-12 z-10 flex items-center justify-between gap-6">
            <div className="flex gap-2 w-48">
              {[0, 1, 2, 3].map((idx) => (
                <div key={idx} className="h-[3px] flex-1 bg-white/25 overflow-hidden">
                  <div className="video-step-bar h-full w-full bg-[#ffa500] origin-left scale-x-0" />
                </div>
              ))}
            </div>
            <p className="text-[10px] tracking-[.24em] uppercase text-white/90 hero-text-shadow">
              Scroll to scrub film scenes
            </p>
          </div>
        </section>

        {/* =====================================================================
            02 / OUR SERVICES & EXPERTISE — WHITE BG + AMBER ICONS
        ===================================================================== */}
        <section
          id="expertise"
          className="relative bg-[#f8fafc] text-[#121822] section-pad border-y border-slate-200/80 overflow-hidden"
        >
          <div className="relative z-10 max-w-[1500px] mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-16 cinematic-reveal">
              <p className="eyebrow mb-3">02 / What We Do</p>
              <h2 className="serif text-4xl md:text-6xl font-bold tracking-tight text-[#121822]">OUR SERVICES</h2>
              <div className="amber-bar mx-auto mt-4" />
              <p className="text-sm text-[#64748b] leading-7 mt-5">
                From the first conceptual sketch to civil construction and final interior handover, we bring every
                discipline under one roof.
              </p>
            </div>

            <div className="stagger-grid velocity-grid grid sm:grid-cols-2 md:grid-cols-3 gap-7">
              {[
                {
                  icon: Compass,
                  n: '01',
                  t: 'Architecture Design',
                  d: 'Innovative & functional residential, commercial, and institutional spaces shaped around climate and context.',
                },
                {
                  icon: Sparkles,
                  n: '02',
                  t: 'Interior Design',
                  d: 'Elegant & personalized spaces with bespoke material palettes, custom furniture, and lighting choreography.',
                },
                {
                  icon: Building2,
                  n: '03',
                  t: 'Residential Design',
                  d: 'Beautiful luxury villas, duplexes, and multi-generational homes crafted for comfort and Vastu harmony.',
                },
                {
                  icon: Layers,
                  n: '04',
                  t: 'Commercial Design',
                  d: 'Optimized corporate offices, retail hubs, and showrooms engineered for business visibility and growth.',
                },
                {
                  icon: HardHat,
                  n: '05',
                  t: 'Turnkey Construction',
                  d: 'End-to-end civil execution from foundation and structural RCC works to MEP services and final handover.',
                },
                {
                  icon: Ruler,
                  n: '06',
                  t: '3D BIM & Visualization',
                  d: 'Photorealistic architectural renders, walkthroughs, and structural precision before construction begins.',
                },
              ].map((x) => {
                const Icon = x.icon;
                return (
                  <div
                    key={x.n}
                    className="stagger-item group bg-white border border-slate-200/90 p-9 text-center hover:border-[#ffa500] hover:-translate-y-2 hover:shadow-xl transition-all duration-500"
                  >
                    <div className="w-14 h-14 mx-auto rounded-xl bg-[#ffa500]/12 text-[#ffa500] flex items-center justify-center group-hover:bg-[#ffa500] group-hover:text-white transition-colors duration-300">
                      <Icon size={28} strokeWidth={2} />
                    </div>
                    <h3 className="text-lg font-bold tracking-wide uppercase text-[#121822] mt-6 group-hover:text-[#ffa500] transition-colors">
                      {x.t}
                    </h3>
                    <p className="text-sm text-[#64748b] leading-7 mt-3">{x.d}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* =====================================================================
            PINNED VIDEO-CLIP SEQUENCE #4 — URBAN & COMMERCIAL MASTERPLAN FILM
        ===================================================================== */}
        <section
          id="urban-film"
          className="video-scrub-section relative h-screen w-full bg-[#121822] text-white overflow-hidden"
        >
          <div className="cinema-transition-flash pointer-events-none absolute inset-0 z-20 bg-gradient-to-l from-transparent via-[#ffa500]/40 to-transparent opacity-0" />

          <div className="video-frame-slide absolute inset-0 overflow-hidden bg-[#121822]">
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2400&q=90"
              alt="Corporate Glass & Steel Atriums"
              className="w-full h-full object-cover will-change-transform"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-[#121822]/90 via-[#121822]/45 to-transparent" />
          </div>

          <div className="video-frame-slide absolute inset-0 overflow-hidden opacity-0 bg-[#121822]">
            <img
              src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=2400&q=90"
              alt="Integrated Residential Townships"
              className="w-full h-full object-cover will-change-transform"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-[#121822]/90 via-[#121822]/45 to-transparent" />
          </div>

          <div className="video-frame-slide absolute inset-0 overflow-hidden opacity-0 bg-[#121822]">
            <img
              src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=2400&q=90"
              alt="Industrial & Institutional Infrastructure"
              className="w-full h-full object-cover will-change-transform"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-[#121822]/90 via-[#121822]/45 to-transparent" />
          </div>

          <div className="relative z-10 h-full max-w-[1500px] mx-auto px-6 md:px-12 flex items-center justify-end">
            <div className="relative w-full max-w-xl min-h-[260px]">
              <div className="video-frame-caption absolute inset-0">
                <p className="eyebrow !text-[#ffa500] mb-4">Commercial 01 / Flagship Workspaces</p>
                <h2 className="serif hero-text-shadow text-4xl md:text-6xl leading-[1.05]">
                  Iconic <i className="text-[#ffa500]">corporate hubs.</i>
                </h2>
                <p className="mt-5 text-sm md:text-base text-white/95 leading-7 hero-text-shadow">
                  High-efficiency commercial towers and retail plazas designed for maximum frontage, natural light, and
                  sustainable energy performance.
                </p>
              </div>

              <div className="video-frame-caption absolute inset-0 opacity-0 pointer-events-none">
                <p className="eyebrow !text-[#ffa500] mb-4">Masterplanning 02 / Urban Communities</p>
                <h2 className="serif hero-text-shadow text-4xl md:text-6xl leading-[1.05]">
                  Self-sustained <i className="text-[#ffa500]">modern townships.</i>
                </h2>
                <p className="mt-5 text-sm md:text-base text-white/95 leading-7 hero-text-shadow">
                  Wide tree-lined avenues, underground utilities, landscaped parks, and community clubhouses planned
                  for generations.
                </p>
              </div>

              <div className="video-frame-caption absolute inset-0 opacity-0 pointer-events-none">
                <p className="eyebrow !text-[#ffa500] mb-4">Civil Scale 03 / Industrial Excellence</p>
                <h2 className="serif hero-text-shadow text-4xl md:text-6xl leading-[1.05]">
                  Heavy civil &amp; <i className="text-[#ffa500]">turnkey delivery.</i>
                </h2>
                <p className="mt-5 text-sm md:text-base text-white/95 leading-7 hero-text-shadow">
                  Precision-engineered manufacturing facilities, institutional campuses, and infrastructure corridors
                  built on schedule.
                </p>
              </div>
            </div>
          </div>

          <div className="absolute bottom-8 left-6 md:left-12 right-6 md:right-12 z-10 flex items-center justify-between">
            <p className="text-[10px] tracking-[.24em] uppercase text-white/90 hero-text-shadow">
              Urban &amp; Commercial Film · Keep Scrolling
            </p>
            <div className="flex gap-2 w-40">
              {[0, 1, 2].map((idx) => (
                <div key={idx} className="h-[3px] flex-1 bg-white/25 overflow-hidden">
                  <div className="video-step-bar h-full w-full bg-[#ffa500] origin-left scale-x-0" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================================
            03 / SELECTED PROJECTS ("Spaces in focus.") — FULL STAGGERED ZOOM & SLIDE
        ===================================================================== */}
        <section id="projects" className="relative bg-white text-[#121822] section-pad overflow-hidden">
          <div className="relative z-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
              <div className="slide-left">
                <p className="eyebrow mb-4">03 / Selected work</p>
                <h2 className="serif text-5xl md:text-7xl text-[#121822]">
                  Spaces in <i className="text-[#ffa500]">focus.</i>
                </h2>
                <div className="amber-bar mt-5" />
              </div>
              <p className="slide-right text-sm text-[#64748b] max-w-sm leading-7">
                A curated portfolio of residences, commercial landmarks, and turnkey developments crafted by our studio.
              </p>
            </div>
            <div className="projects-showcase-wrap velocity-grid">
              <ProjectGrid projects={projects} />
            </div>
            <div className="mt-14 text-center cinematic-reveal">
              <a
                href="#contact"
                className="group inline-flex items-center bg-[#121822] text-white px-8 py-4 text-[10px] font-bold tracking-[.2em] uppercase hover:bg-[#ffa500] hover:text-[#121822] transition-all duration-500 shadow-lg"
              >
                Request full project dossier{' '}
                <ArrowUpRight
                  size={14}
                  className="ml-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
                />
              </a>
            </div>
          </div>
        </section>

        {/* =====================================================================
            HORIZONTAL FILMSTRIP REEL #1 — SECTORS & TYPOLOGIES
        ===================================================================== */}
        <section className="horizontal-film-wrapper relative h-screen bg-[#121822] text-white flex flex-col justify-center overflow-hidden">
          <div className="px-6 md:px-12 mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <p className="eyebrow !text-[#ffa500] mb-3">Sectors &amp; Typologies</p>
              <h2 className="serif text-4xl md:text-6xl">
                Crafted across <i className="text-[#ffa500]">every scale.</i>
              </h2>
            </div>
            <p className="text-xs tracking-[.2em] uppercase text-white/75">Scroll to glide through portfolio reel →</p>
          </div>

          <div className="horizontal-film-track flex gap-8 px-6 md:px-12 w-max will-change-transform">
            {[
              {
                img: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1400&q=85',
                num: '01',
                title: 'Signature Luxury Villas',
                loc: 'Indore · Vijay Nagar & Bypass',
                desc: 'Multi-generational private residences featuring double-height atriums, cantilevered decks, and bespoke landscape courts.',
              },
              {
                img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=85',
                num: '02',
                title: 'Corporate & Retail Hubs',
                loc: 'AB Road & Super Corridor',
                desc: 'High-efficiency glass and stone commercial workspaces engineered for brand presence and natural daylight.',
              },
              {
                img: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1400&q=85',
                num: '03',
                title: 'Bespoke Penthouse Interiors',
                loc: 'Indore · Bhopal',
                desc: 'Italian marble craftsmanship, concealed architectural lighting, and custom millwork designed for effortless living.',
              },
              {
                img: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1400&q=85',
                num: '04',
                title: 'Industrial & Civil Infrastructure',
                loc: 'Pithampur · Dewas · Ujjain',
                desc: 'Turnkey PEB structures, warehousing, institutional campuses, and heavy civil engineering executed on schedule.',
              },
              {
                img: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1400&q=85',
                num: '05',
                title: 'Hospitality & Wellness Retreats',
                loc: 'Mandu · Maheshwar · Pachmarhi',
                desc: 'Boutique resorts and weekend farmstays blending vernacular stone craft with contemporary resort luxury.',
              },
            ].map((item) => (
              <div
                key={item.num}
                className="group relative w-[82vw] md:w-[540px] h-[58vh] overflow-hidden border border-white/15 bg-[#1a2230] flex-shrink-0"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out will-change-transform"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121822]/95 via-[#121822]/35 to-transparent" />
                <div className="absolute top-6 left-6 right-6 flex justify-between items-center">
                  <span className="eyebrow !text-[#ffa500] bg-[#121822]/85 px-3 py-1.5">
                    {item.num} / {item.loc}
                  </span>
                </div>
                <div className="absolute bottom-7 left-7 right-7">
                  <h3 className="serif text-3xl text-white">{item.title}</h3>
                  <p className="text-xs md:text-sm text-white/85 leading-6 mt-3">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* =====================================================================
            INTERACTIVE DAY-TO-TWILIGHT SPLIT CURTAIN WIPE SHOWCASE
        ===================================================================== */}
        <section className="relative bg-white text-[#121822] section-pad overflow-hidden">
          <div className="max-w-[1500px] mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <div className="slide-left">
                <p className="eyebrow mb-3">Architectural Transformation</p>
                <h2 className="serif text-4xl md:text-6xl">
                  Daylight serenity to <i className="text-[#ffa500]">twilight drama.</i>
                </h2>
              </div>
              <p className="slide-right text-sm text-[#64748b] max-w-sm leading-7">
                Scroll to wipe across our signature residential elevation — revealing how natural daylight transitions
                into warm architectural illumination.
              </p>
            </div>

            <div className="split-wipe-wrapper relative aspect-[16/9] md:aspect-[21/9] w-full overflow-hidden border border-slate-300 shadow-2xl bg-[#121822]">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2400&q=90"
                alt="Daylight Architecture View"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <span className="absolute top-6 right-6 z-10 bg-[#121822]/85 backdrop-blur-md px-4 py-2 text-[10px] font-bold tracking-[.22em] uppercase text-white">
                02 · Twilight Illumination
              </span>

              <div className="split-wipe-top absolute inset-0 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=2400&q=90"
                  alt="Evening Illuminated Residence"
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-6 left-6 z-10 bg-[#ffa500] text-[#121822] font-bold px-4 py-2 text-[10px] tracking-[.22em] uppercase">
                  01 · Daylight Massing
                </span>
              </div>

              <div className="split-wipe-divider absolute top-0 bottom-0 left-0 w-[3px] bg-[#ffa500] shadow-[0_0_24px_#ffa500] z-20" />
            </div>
          </div>
        </section>

        {/* =====================================================================
            PINNED VIDEO-CLIP SEQUENCE #2 — MATERIALITY & ARCHITECTURAL CRAFT (3 SCENES)
        ===================================================================== */}
        <section
          id="material-film"
          className="video-scrub-section relative h-screen w-full bg-[#121822] text-white overflow-hidden"
        >
          <div className="cinema-transition-flash pointer-events-none absolute inset-0 z-20 bg-gradient-to-l from-transparent via-[#ffa500]/40 to-transparent opacity-0" />

          <div className="video-frame-slide absolute inset-0 overflow-hidden bg-[#121822]">
            <img
              src="https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=2400&q=90"
              alt="Natural Italian Marble & Travertine"
              className="w-full h-full object-cover will-change-transform"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-[#121822]/90 via-[#121822]/45 to-transparent" />
          </div>

          <div className="video-frame-slide absolute inset-0 overflow-hidden opacity-0 bg-[#121822]">
            <img
              src="https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&w=2400&q=90"
              alt="Burmese Teak & Custom Timber Joinery"
              className="w-full h-full object-cover will-change-transform"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-[#121822]/90 via-[#121822]/45 to-transparent" />
          </div>

          <div className="video-frame-slide absolute inset-0 overflow-hidden opacity-0 bg-[#121822]">
            <img
              src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2400&q=90"
              alt="Structural Steel, Concrete & Double-Glazed Glass"
              className="w-full h-full object-cover will-change-transform"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-[#121822]/90 via-[#121822]/45 to-transparent" />
          </div>

          <div className="relative z-10 h-full max-w-[1500px] mx-auto px-6 md:px-12 flex items-center justify-end">
            <div className="relative w-full max-w-xl min-h-[260px]">
              <div className="video-frame-caption absolute inset-0">
                <p className="eyebrow !text-[#ffa500] mb-4">Materiality 01 / Monolithic Stone</p>
                <h2 className="serif hero-text-shadow text-4xl md:text-6xl leading-[1.05]">
                  Timeless <i className="text-[#ffa500]">marble &amp; travertine.</i>
                </h2>
                <p className="mt-5 text-sm md:text-base text-white/95 leading-7 hero-text-shadow">
                  Hand-selected stone slabs, honed finishes, and monolithic surfaces that age with grace and anchor
                  every interior in quiet luxury.
                </p>
              </div>

              <div className="video-frame-caption absolute inset-0 opacity-0 pointer-events-none">
                <p className="eyebrow !text-[#ffa500] mb-4">Materiality 02 / Artisanal Timber</p>
                <h2 className="serif hero-text-shadow text-4xl md:text-6xl leading-[1.05]">
                  Seasoned teak &amp; <i className="text-[#ffa500]">precision joinery.</i>
                </h2>
                <p className="mt-5 text-sm md:text-base text-white/95 leading-7 hero-text-shadow">
                  Custom louvers, fluted wall paneling, and handcrafted doors engineered to bring warmth and acoustic
                  calm into contemporary volumes.
                </p>
              </div>

              <div className="video-frame-caption absolute inset-0 opacity-0 pointer-events-none">
                <p className="eyebrow !text-[#ffa500] mb-4">Materiality 03 / Structural Honesty</p>
                <h2 className="serif hero-text-shadow text-4xl md:text-6xl leading-[1.05]">
                  Exposed concrete, <i className="text-[#ffa500]">steel &amp; glass.</i>
                </h2>
                <p className="mt-5 text-sm md:text-base text-white/95 leading-7 hero-text-shadow">
                  Long-span cantilevers and double-glazed thermal facades engineered for structural resilience and
                  unobstructed panoramic views.
                </p>
              </div>
            </div>
          </div>

          <div className="absolute bottom-8 left-6 md:left-12 right-6 md:right-12 z-10 flex items-center justify-between">
            <p className="text-[10px] tracking-[.24em] uppercase text-white/90 hero-text-shadow">
              Material Palette Film · Keep Scrolling
            </p>
            <div className="flex gap-2 w-40">
              {[0, 1, 2].map((idx) => (
                <div key={idx} className="h-[3px] flex-1 bg-white/25 overflow-hidden">
                  <div className="video-step-bar h-full w-full bg-[#ffa500] origin-left scale-x-0" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================================
            04 / PHILOSOPHY — FULL-BLEED ZOOM-IN + CLEAN FLOATING TEXT
        ===================================================================== */}
        <section className="philosophy-section relative min-h-[720px] flex items-center text-white bg-[#121822] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2200&q=85"
            alt="Warm contemporary interior"
            className="absolute inset-0 w-full h-full object-cover will-change-transform"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#121822]/85 via-[#121822]/55 to-[#121822]/40" />
          <div className="relative z-10 section-pad w-full">
            <div className="slide-left">
              <p className="eyebrow !text-[#ffa500] mb-6">04 / Our philosophy</p>
              <h2 className="serif hero-text-shadow text-5xl md:text-8xl leading-[1.04] max-w-5xl">
                We don&apos;t just make buildings. <i className="text-[#ffa500]">We create a way of living.</i>
              </h2>
            </div>
            <div className="slide-right mt-10 grid md:grid-cols-2 gap-8 max-w-3xl border-t border-white/25 pt-8">
              <p className="text-sm md:text-base text-white/95 leading-7 hero-text-shadow">
                Healthy. Comfortable. Thoughtful. Every space begins with the people who will live, work and grow in it.
              </p>
              <p className="text-sm text-white/85 leading-7 hero-text-shadow">
                We balance timeless Indian architectural sensibilities with sustainable materials, passive cooling, and
                uncompromising structural safety.
              </p>
            </div>
          </div>
        </section>

        {/* =====================================================================
            05 / OUR PROCESS — CRISP WHITE SECTION + AMBER STEPS
        ===================================================================== */}
        <section id="process" className="relative bg-white text-[#121822] section-pad overflow-hidden">
          <div className="relative z-10 max-w-[1500px] mx-auto">
            <div className="slide-left mb-14">
              <p className="eyebrow mb-4">05 / From vision to reality</p>
              <h2 className="serif text-5xl md:text-7xl text-[#121822]">
                Our <i className="text-[#ffa500]">process.</i>
              </h2>
              <div className="amber-bar mt-5" />
            </div>

            <div className="stagger-grid velocity-grid grid md:grid-cols-5 gap-6">
              {[
                {
                  n: '01',
                  t: 'Discover',
                  d: 'Site visit, Vastu & feasibility audit, and defining your functional brief and budget.',
                },
                {
                  n: '02',
                  t: 'Design',
                  d: 'Concept massing, floor plans, structural engineering, and curated material boards.',
                },
                {
                  n: '03',
                  t: 'Visualize',
                  d: 'Cinematic 3D renders, lighting studies, and walkthroughs before execution begins.',
                },
                {
                  n: '04',
                  t: 'Execute',
                  d: 'Strict quality control, vendor management, and milestone-driven on-site supervision.',
                },
                {
                  n: '05',
                  t: 'Deliver',
                  d: 'Final styling, snag-free handover, and long-term structural & maintenance support.',
                },
              ].map((x) => (
                <div
                  className="stagger-item group bg-[#f8fafc] border border-slate-200 p-7 hover:border-[#ffa500] hover:bg-white hover:-translate-y-2 hover:shadow-xl transition-all duration-500"
                  key={x.n}
                >
                  <span className="inline-block text-xs font-bold tracking-widest text-white bg-[#121822] group-hover:bg-[#ffa500] group-hover:text-[#121822] px-3 py-1 transition-colors">
                    {x.n}
                  </span>
                  <h3 className="serif text-2xl mt-6 text-[#121822]">{x.t}</h3>
                  <p className="text-sm text-[#64748b] leading-6 mt-3">{x.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================================
            PINNED VIDEO-CLIP SEQUENCE #5 — BESPOKE INTERIOR & LUXURY LIVING FILM
        ===================================================================== */}
        <section
          id="interior-film"
          className="video-scrub-section relative h-screen w-full bg-[#121822] text-white overflow-hidden"
        >
          <div className="cinema-transition-flash pointer-events-none absolute inset-0 z-20 bg-gradient-to-r from-transparent via-[#ffa500]/40 to-transparent opacity-0" />

          <div className="video-frame-slide absolute inset-0 overflow-hidden bg-[#121822]">
            <img
              src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2400&q=90"
              alt="Double-Height Living Sanctuaries"
              className="w-full h-full object-cover will-change-transform"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#121822]/85 via-[#121822]/40 to-transparent" />
          </div>

          <div className="video-frame-slide absolute inset-0 overflow-hidden opacity-0 bg-[#121822]">
            <img
              src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=2400&q=90"
              alt="Designer Kitchens & Dining Galleries"
              className="w-full h-full object-cover will-change-transform"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#121822]/85 via-[#121822]/40 to-transparent" />
          </div>

          <div className="video-frame-slide absolute inset-0 overflow-hidden opacity-0 bg-[#121822]">
            <img
              src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=2400&q=90"
              alt="Master Suites & Private Lounges"
              className="w-full h-full object-cover will-change-transform"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#121822]/85 via-[#121822]/40 to-transparent" />
          </div>

          <div className="relative z-10 h-full max-w-[1500px] mx-auto px-6 md:px-12 flex items-center">
            <div className="relative w-full max-w-2xl min-h-[260px]">
              <div className="video-frame-caption absolute inset-0">
                <p className="eyebrow !text-[#ffa500] mb-4">Interiors 01 / Grand Volumes</p>
                <h2 className="serif hero-text-shadow text-4xl md:text-7xl leading-[1.03]">
                  Double-height <i className="text-[#ffa500]">living sanctuaries.</i>
                </h2>
                <p className="mt-5 text-sm md:text-base text-white/95 leading-7 hero-text-shadow max-w-xl">
                  Soaring ceilings, sculptural staircases, and bespoke chandeliers crafted to create unforgettable first
                  impressions.
                </p>
              </div>

              <div className="video-frame-caption absolute inset-0 opacity-0 pointer-events-none">
                <p className="eyebrow !text-[#ffa500] mb-4">Interiors 02 / Culinary &amp; Dining</p>
                <h2 className="serif hero-text-shadow text-4xl md:text-7xl leading-[1.03]">
                  Bespoke kitchens &amp; <i className="text-[#ffa500]">dining galleries.</i>
                </h2>
                <p className="mt-5 text-sm md:text-base text-white/95 leading-7 hero-text-shadow max-w-xl">
                  Ergonomic European hardware, book-matched quartz islands, and warm ambient cove lighting for
                  effortless hosting.
                </p>
              </div>

              <div className="video-frame-caption absolute inset-0 opacity-0 pointer-events-none">
                <p className="eyebrow !text-[#ffa500] mb-4">Interiors 03 / Private Retreats</p>
                <h2 className="serif hero-text-shadow text-4xl md:text-7xl leading-[1.03]">
                  Serene suites &amp; <i className="text-[#ffa500]">walk-in wardrobes.</i>
                </h2>
                <p className="mt-5 text-sm md:text-base text-white/95 leading-7 hero-text-shadow max-w-xl">
                  Sound-insulated master bedrooms with private terrace decks, custom veneer wardrobes, and spa-inspired
                  baths.
                </p>
              </div>
            </div>
          </div>

          <div className="absolute bottom-8 left-6 md:left-12 right-6 md:right-12 z-10 flex items-center justify-between gap-6">
            <div className="flex gap-2 w-40">
              {[0, 1, 2].map((idx) => (
                <div key={idx} className="h-[3px] flex-1 bg-white/25 overflow-hidden">
                  <div className="video-step-bar h-full w-full bg-[#ffa500] origin-left scale-x-0" />
                </div>
              ))}
            </div>
            <p className="text-[10px] tracking-[.24em] uppercase text-white/90 hero-text-shadow">
              Luxury Interiors Film · Keep Scrolling
            </p>
          </div>
        </section>

        {/* =====================================================================
            3D PERSPECTIVE TILT SHOWCASE ("Four pillars of spatial mastery.")
        ===================================================================== */}
        <section className="relative bg-[#f8fafc] text-[#121822] section-pad border-y border-slate-200 overflow-hidden">
          <div className="relative z-10 max-w-[1500px] mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
              <div className="slide-left">
                <p className="eyebrow mb-4">Design Benchmarks</p>
                <h2 className="serif text-4xl md:text-6xl">
                  Four pillars of <i className="text-[#ffa500]">spatial mastery.</i>
                </h2>
                <div className="amber-bar mt-5" />
              </div>
              <p className="slide-right text-sm text-[#64748b] max-w-md leading-7">
                Every commission is measured against four non-negotiable architectural benchmarks before handover.
              </p>
            </div>

            <div className="velocity-grid grid md:grid-cols-2 gap-8">
              {[
                {
                  num: 'PILLAR 01',
                  title: 'Biophilic Ventilation & Thermal Comfort',
                  desc: 'Cross-ventilated courtyards, shaded pergolas, and double-wall insulation that keep Indore summers naturally cool while slashing HVAC loads.',
                  img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1400&q=85',
                },
                {
                  num: 'PILLAR 02',
                  title: 'Monolithic Structural Longevity',
                  desc: 'Earthquake-resistant RCC frames, waterproofed terraces, and tested Fe-550D reinforcement engineered for multi-generational durability.',
                  img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=85',
                },
                {
                  num: 'PILLAR 03',
                  title: 'Bespoke Acoustic & Lighting Scenography',
                  desc: 'Layered architectural lighting scenes and sound-insulated glass facades that turn noisy city plots into serene retreats.',
                  img: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=85',
                },
                {
                  num: 'PILLAR 04',
                  title: 'Future-Ready Smart Infrastructure',
                  desc: 'EV-charging bays, solar rooftop readiness, automated security gates, and concealed home-automation conduits built in from day one.',
                  img: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1400&q=85',
                },
              ].map((item) => (
                <div
                  key={item.num}
                  className="tilt-card group relative overflow-hidden border border-slate-200 bg-white shadow-lg hover:border-[#ffa500] transition-colors"
                >
                  <div className="curtain-frame aspect-[16/9] overflow-hidden">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
                    />
                  </div>
                  <div className="p-8 bg-white cinematic-reveal">
                    <span className="eyebrow">{item.num}</span>
                    <h3 className="serif text-2xl md:text-3xl mt-3 text-[#121822] group-hover:text-[#ffa500] transition-colors">
                      {item.title}
                    </h3>
                    <div className="amber-bar mt-3 mb-3" />
                    <p className="text-sm text-[#64748b] leading-7">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================================
            HORIZONTAL FILMSTRIP REEL #2 — ENGINEERING & INNOVATION PILLARS
        ===================================================================== */}
        <section className="horizontal-film-wrapper relative h-screen bg-[#121822] text-white flex flex-col justify-center overflow-hidden">
          <div className="px-6 md:px-12 mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <p className="eyebrow !text-[#ffa500] mb-3">Engineering &amp; Technical Mastery</p>
              <h2 className="serif text-4xl md:text-6xl">
                Built on <i className="text-[#ffa500]">structural intelligence.</i>
              </h2>
            </div>
            <p className="text-xs tracking-[.2em] uppercase text-white/75">Scroll sideways through technical standards →</p>
          </div>

          <div className="horizontal-film-track flex gap-8 px-6 md:px-12 w-max will-change-transform">
            {[
              {
                img: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1400&q=85',
                num: 'TECH 01',
                title: 'Seismic-Safe RCC & Steel Engineering',
                loc: 'IS-Code Compliant Structural Design',
                desc: 'Precision foundation engineering, high-grade reinforcement detailing, and long-span column-free structural grids.',
              },
              {
                img: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=1400&q=85',
                num: 'TECH 02',
                title: 'Sustainable & Green Architecture',
                loc: 'Passive Cooling & Solar Ready',
                desc: 'Rainwater harvesting pits, solar-integrated rooftops, thermal wall insulation, and low-VOC eco-friendly finishes.',
              },
              {
                img: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1400&q=85',
                num: 'TECH 03',
                title: 'Smart Home & MEP Automation',
                loc: 'KNX / IoT Integrated Living',
                desc: 'Concealed VRV air-conditioning, automated motorized blinds, biometric security, and app-controlled lighting scenes.',
              },
              {
                img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1400&q=85',
                num: 'TECH 04',
                title: 'ISO-Grade Site Quality Audits',
                loc: '50+ Stage Inspection Checklists',
                desc: 'Cube strength testing, laser-level flooring alignment, waterproofing flood tests, and weekly digital progress reports.',
              },
            ].map((item) => (
              <div
                key={item.num}
                className="group relative w-[82vw] md:w-[540px] h-[58vh] overflow-hidden border border-white/15 bg-[#1a2230] flex-shrink-0"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out will-change-transform"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121822]/95 via-[#121822]/35 to-transparent" />
                <div className="absolute top-6 left-6 right-6 flex justify-between items-center">
                  <span className="eyebrow !text-[#ffa500] bg-[#121822]/85 px-3 py-1.5">
                    {item.num} · {item.loc}
                  </span>
                </div>
                <div className="absolute bottom-7 left-7 right-7">
                  <h3 className="serif text-3xl text-white">{item.title}</h3>
                  <p className="text-xs md:text-sm text-white/85 leading-6 mt-3">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* =====================================================================
            PINNED VIDEO-CLIP SEQUENCE #3 — TWILIGHT & ARCHITECTURAL LIGHTING FILM
        ===================================================================== */}
        <section
          id="night-film"
          className="video-scrub-section relative h-screen w-full bg-[#121822] text-white overflow-hidden"
        >
          <div className="cinema-transition-flash pointer-events-none absolute inset-0 z-20 bg-gradient-to-r from-transparent via-[#ffa500]/40 to-transparent opacity-0" />

          <div className="video-frame-slide absolute inset-0 overflow-hidden bg-[#121822]">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2400&q=90"
              alt="Golden Hour Courtyard Illumination"
              className="w-full h-full object-cover will-change-transform"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#121822]/85 via-[#121822]/40 to-transparent" />
          </div>

          <div className="video-frame-slide absolute inset-0 overflow-hidden opacity-0 bg-[#121822]">
            <img
              src="https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=2400&q=90"
              alt="Facade Grazer Lighting Choreography"
              className="w-full h-full object-cover will-change-transform"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#121822]/85 via-[#121822]/40 to-transparent" />
          </div>

          <div className="video-frame-slide absolute inset-0 overflow-hidden opacity-0 bg-[#121822]">
            <img
              src="https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=2400&q=90"
              alt="Midnight Pool & Landscape Sanctuary"
              className="w-full h-full object-cover will-change-transform"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#121822]/85 via-[#121822]/40 to-transparent" />
          </div>

          <div className="relative z-10 h-full max-w-[1500px] mx-auto px-6 md:px-12 flex items-center">
            <div className="relative w-full max-w-2xl min-h-[260px]">
              <div className="video-frame-caption absolute inset-0">
                <p className="eyebrow !text-[#ffa500] mb-4">Ambience 01 / Golden Hour Transition</p>
                <h2 className="serif hero-text-shadow text-4xl md:text-7xl leading-[1.03]">
                  Architecture that <i className="text-[#ffa500]">comes alive at dusk.</i>
                </h2>
                <p className="mt-5 text-sm md:text-base text-white/95 leading-7 hero-text-shadow max-w-xl">
                  Warm 2700K architectural cove lighting and recessed landscape beams transform every residence into a
                  glowing evening sanctuary.
                </p>
              </div>

              <div className="video-frame-caption absolute inset-0 opacity-0 pointer-events-none">
                <p className="eyebrow !text-[#ffa500] mb-4">Ambience 02 / Facade Illumination</p>
                <h2 className="serif hero-text-shadow text-4xl md:text-7xl leading-[1.03]">
                  Dramatic contours &amp; <i className="text-[#ffa500]">shadow depth.</i>
                </h2>
                <p className="mt-5 text-sm md:text-base text-white/95 leading-7 hero-text-shadow max-w-xl">
                  Precision wall-grazers highlight natural stone textures, louvers, and cantilevered overhangs without
                  glare or light pollution.
                </p>
              </div>

              <div className="video-frame-caption absolute inset-0 opacity-0 pointer-events-none">
                <p className="eyebrow !text-[#ffa500] mb-4">Ambience 03 / Resort-Style Serenity</p>
                <h2 className="serif hero-text-shadow text-4xl md:text-7xl leading-[1.03]">
                  Private decks &amp; <i className="text-[#ffa500]">tranquil waters.</i>
                </h2>
                <p className="mt-5 text-sm md:text-base text-white/95 leading-7 hero-text-shadow max-w-xl">
                  Reflecting pools, sunken courtyard seating, and automated mood scenes designed for effortless evening
                  entertaining.
                </p>
              </div>
            </div>
          </div>

          <div className="absolute bottom-8 left-6 md:left-12 right-6 md:right-12 z-10 flex items-center justify-between gap-6">
            <div className="flex gap-2 w-40">
              {[0, 1, 2].map((idx) => (
                <div key={idx} className="h-[3px] flex-1 bg-white/25 overflow-hidden">
                  <div className="video-step-bar h-full w-full bg-[#ffa500] origin-left scale-x-0" />
                </div>
              ))}
            </div>
            <p className="text-[10px] tracking-[.24em] uppercase text-white/90 hero-text-shadow">
              Twilight Lighting Film · Keep Scrolling
            </p>
          </div>
        </section>

        {/* =====================================================================
            WHY SHREE BHARGAVA ("Precision engineering meets artistic soul.")
        ===================================================================== */}
        <section className="relative bg-white text-[#121822] section-pad overflow-hidden">
          <div className="relative z-10 max-w-[1500px] mx-auto grid md:grid-cols-2 gap-16 items-center">
            <div className="slide-left">
              <p className="eyebrow mb-4">Why Choose Us</p>
              <h2 className="serif text-4xl md:text-6xl leading-[1.06]">
                Precision engineering meets <i className="text-[#ffa500]">artistic soul.</i>
              </h2>
              <div className="amber-bar mt-5" />
              <div className="mt-8 space-y-5">
                {[
                  {
                    icon: Compass,
                    title: 'Vastu & Climate Responsive Design',
                    desc: 'Scientific daylighting, thermal comfort, and Vastu harmony integrated seamlessly into modern elevations.',
                  },
                  {
                    icon: Layers,
                    title: 'Transparent BOQ & Cost Control',
                    desc: 'Detailed Bill of Quantities and stage-wise billing with zero hidden escalations.',
                  },
                  {
                    icon: ShieldCheck,
                    title: 'Grade-A Structural & Material Standards',
                    desc: 'Tested steel, certified concrete mixes, and premier architectural fittings built for decades.',
                  },
                  {
                    icon: Sparkles,
                    title: 'Single-Point Turnkey Accountability',
                    desc: 'Architects, structural engineers, and site execution teams working as one unified studio.',
                  },
                  {
                    icon: Ruler,
                    title: 'Zero-Compromise Millimeter Detailing',
                    desc: 'Workshop-finished joinery, seamless stone book-matching, and concealed MEP routing.',
                  },
                ].map((feat) => {
                  const Icon = feat.icon;
                  return (
                    <div
                      key={feat.title}
                      className="feature-row-item group flex gap-4 items-start border-b border-slate-200 pb-4 hover:translate-x-2 transition-transform duration-300"
                    >
                      <div className="p-3 rounded-lg bg-[#ffa500]/15 text-[#ffa500] mt-1 group-hover:bg-[#ffa500] group-hover:text-white transition-colors">
                        <Icon size={18} />
                      </div>
                      <div>
                        <h3 className="serif text-xl text-[#121822]">{feat.title}</h3>
                        <p className="text-sm text-[#64748b] leading-6 mt-1">{feat.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="slide-right space-y-8">
              <div className="curtain-frame aspect-[16/10] overflow-hidden shadow-xl border border-slate-200">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85"
                  alt="Completed Residence by Shree Bhargava"
                  className="w-full h-full object-cover will-change-transform"
                />
              </div>

              <div className="zoom-block bg-[#121822] text-white p-8 md:p-10 shadow-xl">
                <div className="flex items-center justify-between mb-4">
                  <p className="eyebrow !text-[#ffa500]">Client Perspective</p>
                  <Award size={18} className="text-[#ffa500]" />
                </div>
                <p className="serif text-xl md:text-2xl italic leading-relaxed text-white">
                  &ldquo;Shree Bhargava transformed our plot into a timeless sanctuary. Their attention to natural
                  light, structural quality, and on-site discipline made the entire turnkey journey effortless.&rdquo;
                </p>
                <div className="gold-line line-expand my-6" />
                <p className="text-xs tracking-[.2em] uppercase text-[#ffa500]">
                  Private Residence Owner · Vijay Nagar, Indore
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================================
            HORIZONTAL FILMSTRIP REEL #3 — CENTRAL INDIA LANDMARK CORRIDORS
        ===================================================================== */}
        <section className="horizontal-film-wrapper relative h-screen bg-[#121822] text-white flex flex-col justify-center overflow-hidden border-t border-white/10">
          <div className="px-6 md:px-12 mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <p className="eyebrow !text-[#ffa500] mb-3">Regional Architectural Footprint</p>
              <h2 className="serif text-4xl md:text-6xl">
                Landmarks across <i className="text-[#ffa500]">Madhya Pradesh.</i>
              </h2>
            </div>
            <p className="text-xs tracking-[.2em] uppercase text-white/75">Scroll sideways across city corridors →</p>
          </div>

          <div className="horizontal-film-track flex gap-8 px-6 md:px-12 w-max will-change-transform">
            {[
              {
                img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85',
                num: 'CORRIDOR 01',
                title: 'Vijay Nagar & Nipania Residences',
                loc: 'Indore Flagship District',
                desc: 'Contemporary stone-and-glass bungalows and luxury duplexes crafted for Indore’s premier residential neighborhoods.',
              },
              {
                img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=85',
                num: 'CORRIDOR 02',
                title: 'Super Corridor & AB Road Hubs',
                loc: 'IT & Commercial Growth Zone',
                desc: 'Grade-A commercial offices, showrooms, and mixed-use towers built with high-efficiency curtain-wall facades.',
              },
              {
                img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1400&q=85',
                num: 'CORRIDOR 03',
                title: 'Bhopal Lakefront Estates',
                loc: 'Capital City Commissions',
                desc: 'Panoramic hillside and lake-facing private villas designed around breeze corridors and cantilevered terraces.',
              },
              {
                img: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1400&q=85',
                num: 'CORRIDOR 04',
                title: 'Ujjain, Dewas & Pithampur',
                loc: 'Hospitality & Industrial Belt',
                desc: 'Boutique spiritual retreats, industrial manufacturing plants, and turnkey institutional infrastructure.',
              },
            ].map((item) => (
              <div
                key={item.num}
                className="group relative w-[82vw] md:w-[540px] h-[58vh] overflow-hidden border border-white/15 bg-[#1a2230] flex-shrink-0"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out will-change-transform"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121822]/95 via-[#121822]/35 to-transparent" />
                <div className="absolute top-6 left-6 right-6 flex justify-between items-center">
                  <span className="eyebrow !text-[#ffa500] bg-[#121822]/85 px-3 py-1.5">
                    {item.num} · {item.loc}
                  </span>
                </div>
                <div className="absolute bottom-7 left-7 right-7">
                  <h3 className="serif text-3xl text-white">{item.title}</h3>
                  <p className="text-xs md:text-sm text-white/85 leading-6 mt-3">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* =====================================================================
            DUAL-DIRECTION SCRUBBED ARCHITECTURAL MARQUEE BAND #2
        ===================================================================== */}
        <section className="marquee-band bg-[#121822] text-white py-9 border-y border-white/10 overflow-hidden select-none">
          <div className="marquee-left whitespace-nowrap serif text-3xl md:text-5xl tracking-wide">
            VASTU HARMONY &nbsp;·&nbsp; <i className="text-[#ffa500]">TURNKEY EXECUTION</i> &nbsp;·&nbsp; SUSTAINABLE
            DESIGN &nbsp;·&nbsp; <i className="text-[#ffa500]">TIMELESS LUXURY</i> &nbsp;·&nbsp; PRECISION ENGINEERING
            &nbsp;·&nbsp; <i className="text-[#ffa500]">BESPOKE CRAFTSMANSHIP</i>
          </div>
          <div className="marquee-right whitespace-nowrap serif text-3xl md:text-5xl tracking-wide text-white/35 mt-3">
            <i>RESIDENTIAL VILLAS</i> &nbsp;·&nbsp; COMMERCIAL LANDMARKS &nbsp;·&nbsp; <i>INDUSTRIAL PARKS</i>{' '}
            &nbsp;·&nbsp; LUXURY INTERIORS &nbsp;·&nbsp; <i>HOSPITALITY</i>
          </div>
        </section>

        {/* =====================================================================
            06 / WHERE WE WORK — MIDNIGHT NAVY + SKYLINE ZOOM-IN
        ===================================================================== */}
        <section className="relative bg-[#121822] text-white section-pad overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=2200&q=85"
              alt="Contemporary urban architecture skyline"
              className="w-full h-full object-cover opacity-35 will-change-transform"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#121822]/90 via-[#121822]/70 to-[#121822]/85" />
          </div>

          <div className="relative z-10 max-w-[1500px] mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-end mb-14">
              <div className="slide-left">
                <p className="eyebrow !text-[#ffa500] mb-4">06 / Where we work</p>
                <h2 className="serif text-5xl md:text-7xl hero-text-shadow">
                  Rooted in
                  <br />
                  <i className="text-[#ffa500]">Indore.</i>
                </h2>
              </div>
              <div className="slide-right">
                <p className="text-white/90 leading-7 max-w-lg hero-text-shadow">
                  Working across Indore, Bhopal, Jabalpur, Ujjain, Dewas and beyond, we collaborate with homeowners,
                  developers, and enterprises to create meaningful residential, commercial and infrastructure landmarks.
                </p>
                <div className="gold-line line-expand mt-7 mb-4" />
                <p className="text-[10px] tracking-[.2em] uppercase text-[#ffa500]">
                  Indore · Bhopal · Jabalpur · Ujjain · Across India
                </p>
              </div>
            </div>

            <div className="stagger-grid velocity-grid grid sm:grid-cols-2 md:grid-cols-4 gap-6">
              {[
                {
                  city: 'Indore HQ',
                  tag: 'Flagship Studio',
                  detail: 'Vijay Nagar, Super Corridor, AB Road & Bypass luxury residences and commercial hubs.',
                },
                {
                  city: 'Bhopal',
                  tag: 'Capital Projects',
                  detail: 'Lakefront villas, institutional buildings, and turnkey corporate interiors.',
                },
                {
                  city: 'Ujjain & Dewas',
                  tag: 'Cultural & Industrial',
                  detail: 'Hospitality retreats, spiritual tourism infrastructure, and industrial facilities.',
                },
                {
                  city: 'Jabalpur & Pan-India',
                  tag: 'Turnkey Execution',
                  detail: 'Remote BIM architecture, structural consultancy, and end-to-end project delivery.',
                },
              ].map((loc) => (
                <div
                  key={loc.city}
                  className="stagger-item group border border-white/15 bg-white/[0.04] p-6 hover:border-[#ffa500] hover:bg-white/[0.08] hover:-translate-y-2 transition-all duration-500"
                >
                  <div className="flex items-center justify-between text-[#ffa500] mb-4">
                    <span className="eyebrow !text-[#ffa500]">{loc.tag}</span>
                    <MapPin size={15} />
                  </div>
                  <h3 className="serif text-2xl">{loc.city}</h3>
                  <p className="text-xs text-white/80 leading-6 mt-3">{loc.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================================
            07 / CONTACT — CRISP WHITE SECTION + AMBER CONCIERGE CARDS
        ===================================================================== */}
        <section id="contact" className="relative bg-white text-[#121822] section-pad overflow-hidden">
          <div className="relative z-10 max-w-[1500px] mx-auto">
            <div className="text-center cinematic-reveal max-w-3xl mx-auto">
              <p className="eyebrow mb-4">07 / Begin a conversation</p>
              <h2 className="serif text-4xl md:text-7xl leading-[1.03] text-[#121822]">
                Let&apos;s create something <i className="text-[#ffa500]">extraordinary.</i>
              </h2>
              <div className="amber-bar mx-auto mt-5" />
              <p className="text-sm text-[#64748b] mt-6 max-w-lg mx-auto leading-7">
                Have a residence, commercial complex, interior transformation, or turnkey infrastructure project in mind?
                Select a project track below to start directly with our Indore architects.
              </p>
            </div>

            <div className="stagger-grid velocity-grid grid md:grid-cols-3 gap-6 mt-14">
              {[
                {
                  icon: Building2,
                  title: 'New Residence / Villa',
                  sub: 'Architecture + Structural + Turnkey',
                  msg: 'Hello Shree Bhargava, I am planning a new Residence / Villa project and would like to discuss architecture & turnkey execution.',
                },
                {
                  icon: Sparkles,
                  title: 'Luxury Interior Design',
                  sub: 'Bespoke Home / Penthouse / Office',
                  msg: 'Hello Shree Bhargava, I am looking for Luxury Interior Design services and would like to book a consultation.',
                },
                {
                  icon: HardHat,
                  title: 'Commercial / Infrastructure',
                  sub: 'Commercial Complex / Industrial / Civil',
                  msg: 'Hello Shree Bhargava, I would like to discuss a Commercial / Infrastructure development project.',
                },
              ].map((card) => {
                const Icon = card.icon;
                return (
                  <a
                    key={card.title}
                    href={`https://wa.me/${wa}?text=${encodeURIComponent(card.msg)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="stagger-item group bg-[#f8fafc] border border-slate-200 p-8 hover:bg-[#121822] hover:text-white hover:border-[#ffa500] hover:-translate-y-2 transition-all duration-500 shadow-sm hover:shadow-xl"
                  >
                    <div className="flex items-center justify-between">
                      <div className="p-3 rounded-lg bg-[#ffa500] text-[#121822]">
                        <Icon size={18} />
                      </div>
                      <ArrowUpRight
                        size={18}
                        className="text-[#121822] group-hover:text-[#ffa500] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                      />
                    </div>
                    <h3 className="serif text-2xl mt-6">{card.title}</h3>
                    <p className="eyebrow mt-2">{card.sub}</p>
                    <p className="text-xs text-[#64748b] group-hover:text-white/80 mt-4">
                      Tap to send instant project brief on WhatsApp →
                    </p>
                  </a>
                );
              })}
            </div>

            <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4 cinematic-reveal">
              <a
                href={`https://wa.me/${wa}?text=${encodeURIComponent(
                  'Hello Shree Bhargava Infrastructure & Development, I would like to discuss a project.'
                )}`}
                target="_blank"
                rel="noreferrer"
                className="bg-[#ffa500] text-[#121822] font-bold px-9 py-5 text-[10px] tracking-[.2em] uppercase hover:bg-[#121822] hover:text-white hover:scale-105 transition-all duration-500 shadow-lg text-center"
              >
                Start on WhatsApp ↗
              </a>
              <a
                href="mailto:hello@shreebhargava.com?subject=Project%20Enquiry"
                className="border border-[#121822] bg-white text-[#121822] font-bold px-9 py-5 text-[10px] tracking-[.2em] uppercase hover:bg-[#121822] hover:text-white hover:scale-105 transition-all duration-500 text-center"
              >
                Email our studio ↗
              </a>
            </div>
          </div>
        </section>

        {/* =====================================================================
            FOOTER — MIDNIGHT NAVY THEME
        ===================================================================== */}
        <footer className="bg-[#121822] text-white px-6 md:px-12 py-14 border-t border-white/10">
          <div className="max-w-[1500px] mx-auto flex flex-col md:flex-row justify-between gap-8">
            <div>
              <p className="serif text-2xl tracking-wide text-[#ffa500] font-bold">SHREE BHARGAVA</p>
              <p className="text-[10px] tracking-[.22em] uppercase text-white/80 mt-1">
                Infrastructure &amp; Development
              </p>
              <p className="eyebrow mt-1">Creative Indian Architect</p>
            </div>
            <div className="text-xs text-white/75 leading-7">
              Architecture · Luxury Interiors · Civil Infrastructure · Turnkey Projects
              <br />
              Indore, Madhya Pradesh, India
            </div>
            <div className="text-xs text-white/75 leading-7">
              © {new Date().getFullYear()} Shree Bhargava Infrastructure &amp; Development. All rights reserved.
              <br />
              <a href="/admin/login" className="underline text-[#ffa500] hover:text-white">
                Studio admin
              </a>
            </div>
          </div>
        </footer>

        <a
          className="whatsapp fixed bottom-5 right-5 z-40 rounded-full bg-[#121822] border border-[#ffa500] text-white px-5 py-4 text-[10px] font-bold tracking-widest uppercase hover:scale-110 hover:bg-[#ffa500] hover:text-[#121822] transition-all duration-300"
          href={`https://wa.me/${wa}`}
          target="_blank"
          rel="noreferrer"
        >
          WhatsApp ↗
        </a>
      </main>
    </CinematicMotion>
  );
}