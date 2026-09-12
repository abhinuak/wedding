import { useState } from "react";
import bannerImage from "./assets/images/BannerImage.jpg"

// ─── Placeholder images — swap these for your own later ───
const IMG = {
  hero: bannerImage,
  story: "https://picsum.photos/id/1005/600/480",
  timelineNote: "https://picsum.photos/id/1039/300/300",
  collage1: "https://picsum.photos/id/1011/500/400",
  collage2: "https://picsum.photos/id/1012/420/340",
  collage3: "https://picsum.photos/id/1013/460/360",
  collage4: "https://picsum.photos/id/1016/420/500",
  collage5: "https://picsum.photos/id/1018/460/340",
  wedding: "https://picsum.photos/id/1027/700/900",
  gallery1: "https://picsum.photos/id/1035/360/460",
  gallery2: "https://picsum.photos/id/1036/360/460",
  gallery3: "https://picsum.photos/id/1037/360/460",
  gallery4: "https://picsum.photos/id/1038/360/460",
  footer: "https://picsum.photos/id/1043/1600/900",
};

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Our Story", href: "#our-story" },
  { label: "Timeline", href: "#timeline" },
  { label: "Gallery", href: "#gallery" },
  { label: "Wedding Day", href: "#wedding-day" },
];

const TIMELINE = [
  { year: "2016", title: "The First Hello", desc: "Met at the tuition centre." },
  { year: "2018", title: "Growing Together", desc: "More than just friends." },
  { year: "2020", title: "Through Everything", desc: "Challenges, distance, and still choosing each other." },
  { year: "2023", title: "Still Us", desc: "Stronger, kinder, closer." },
  { year: "2025", title: "Forever Begins", desc: "August 17 — the day they became one." },
];

const SCHEDULE = [
  { time: "08:00 AM", label: "Getting Ready" },
  { time: "11:30 AM", label: "Ceremony" },
  { time: "01:00 PM", label: "Blessings" },
  { time: "04:00 PM", label: "Reception" },
];

const COLLAGE_IMAGES = [
  { src: IMG.collage1, className: "col-span-2 row-span-2 -rotate-2" },
  { src: IMG.collage2, className: "rotate-3" },
  { src: IMG.collage3, className: "-rotate-1" },
  { src: IMG.collage4, className: "row-span-2 rotate-2" },
  { src: IMG.collage5, className: "-rotate-3" },
];

function Heart({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 21s-7.5-4.6-10.2-9.3C.2 8.7 1.4 5 5 4.2c2.2-.5 4 .6 5 2.3 1-1.7 2.8-2.8 5-2.3 3.6.8 4.8 4.5 3.2 7.5C19.5 16.4 12 21 12 21z" />
    </svg>
  );
}

function Polaroid({
  src,
  caption,
  className = "",
}: {
  src: string;
  caption?: string;
  className?: string;
}) {
  return (
    <div className={`bg-white p-3 pb-8 shadow-xl ${className}`}>
      <img src={src} alt={caption ?? ""} className="w-full h-full object-cover" />
      {caption && (
        <p className="mt-2 text-center text-[13px] text-stone-500 font-script">
          {caption}
        </p>
      )}
    </div>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-[#F6F1E7] text-stone-800 font-sans antialiased">
      {/* Google Fonts — move this into index.html in a real project */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Caveat:wght@500;600&family=Inter:wght@300;400;500&display=swap');
        .font-serif-display { font-family: 'Playfair Display', serif; }
        .font-script { font-family: 'Caveat', cursive; }
        .font-sans { font-family: 'Inter', sans-serif; }
      `}</style>

      {/* ───────── NAV (overlaid on hero) ───────── */}
      <header className="absolute top-0 left-0 right-0 z-30 flex items-center justify-between px-6 md:px-10 py-6 text-white">
        <nav className="hidden md:flex gap-8 mx-auto text-sm tracking-wide">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} className="hover:opacity-70 transition-opacity">
              {l.label}
            </a>
          ))}
        </nav>
        <button
          className="md:hidden ml-auto"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <Heart className="hidden md:block w-4 h-4 absolute right-10 top-8" />
      </header>

      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-black/90 flex flex-col items-center justify-center gap-8 text-white text-lg">
          <button className="absolute top-6 right-6" onClick={() => setMenuOpen(false)} aria-label="Close menu">
            ✕
          </button>
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}>
              {l.label}
            </a>
          ))}
        </div>
      )}

      {/* ───────── HERO ───────── */}
      <section
        id="home"
        className="relative min-h-screen flex items-center bg-cover bg-center"
        style={{ backgroundImage: `url(${IMG.hero})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-black/40" />
        <div className="relative z-10 px-6 md:px-16 max-w-2xl">
          <p className="text-xs tracking-[0.25em] text-white/70 mb-4">Our Love Story</p>
          <h1 className="font-serif-display text-5xl md:text-7xl leading-[1.05] text-white mb-6">
            12 Years
            <br />
            of Love
          </h1>
          <p className="font-script text-2xl text-white/90 mb-6">
            Same hearts,
            <br />
            new chapter.
          </p>
          <p className="text-white/90 flex items-center gap-2 text-sm mb-1">
            Her Name <Heart className="w-3 h-3" /> His Name
          </p>
          <p className="text-white/60 text-xs tracking-widest mb-8">AUGUST 17, 2025</p>
          <a
            href="#our-story"
            className="inline-block border border-white/70 text-white text-sm px-6 py-3 hover:bg-white hover:text-stone-900 transition-colors"
          >
            Explore Their Story →
          </a>
        </div>
        <p className="hidden md:block font-script text-xl text-white/80 absolute top-28 right-16 text-right leading-tight">
          From tuition
          <br />
          to forever <Heart className="inline w-4 h-4 -mt-1" />
        </p>
      </section>

      {/* ───────── OUR STORY ───────── */}
      <section id="our-story" className="px-6 md:px-16 py-24 relative overflow-hidden">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div>
            <p className="text-xs tracking-[0.25em] text-stone-400 mb-3">Our Story</p>
            <h2 className="font-serif-display text-4xl md:text-5xl text-stone-800 mb-6">
              Where it all began...
            </h2>
            <p className="text-stone-600 leading-relaxed mb-5 max-w-md">
              They met at a tuition centre.
              <br />
              Two students. A few conversations.
              <br />
              And a connection that neither of them expected.
            </p>
            <p className="text-stone-500 italic leading-relaxed max-w-md mb-6">
              What started as an ordinary day became the beginning of a 12-year-long story.
            </p>
            <Heart className="w-4 h-4 text-stone-400" />
          </div>

          <div className="relative flex justify-center md:justify-start">
            <Polaroid
              src={IMG.story}
              caption="Tuition days... 2016"
              className="w-80 rotate-2"
            />
            <p className="font-script text-lg text-stone-500 absolute -right-2 md:right-4 top-4 hidden lg:block leading-snug">
              Same class,
              <br />
              same dreams,
              <br />
              different futures...
              <br />
              together.
            </p>
          </div>
        </div>
      </section>

      {/* ───────── TIMELINE ───────── */}
      <section id="timeline" className="bg-[#3D1218] text-[#F1E4DE] px-6 md:px-16 py-24">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs tracking-[0.25em] text-[#D9A8A0] mb-3">The Journey</p>
          <h2 className="font-serif-display text-4xl md:text-5xl mb-2">The 12 Year Timeline</h2>
          <p className="text-[#D9A8A0] mb-16">Different phases. Same love.</p>

          <div className="relative">
            <div className="hidden md:block absolute top-2 left-0 right-0 h-px bg-[#7A3C3C]" />
            <div className="grid grid-cols-2 md:grid-cols-5 gap-y-10 gap-x-6">
              {TIMELINE.map((t) => (
                <div key={t.year} className="relative pt-8">
                  <span className="hidden md:block absolute -top-[3px] left-0 w-2 h-2 rounded-full bg-[#F1E4DE]" />
                  <p className="font-serif-display text-lg mb-1">{t.year}</p>
                  <p className="text-sm font-medium">{t.title}</p>
                </div>
              ))}
            </div>
          </div>

          <p className="font-script text-xl text-[#D9A8A0] text-right mt-14 leading-snug">
            12 years... countless memories... one love. <Heart className="inline w-4 h-4" />
          </p>
        </div>
      </section>

      {/* ───────── PHOTO COLLAGE ───────── */}
      <section className="px-6 md:px-16 py-24">
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
          <div>
            <h2 className="font-serif-display text-4xl md:text-5xl text-stone-800 mb-6">
              12 Years of Us
            </h2>
            <p className="text-stone-600 mb-4">
              Some stories are written.
              <br />
              Ours was lived.
            </p>
            <p className="text-stone-500 mb-6 leading-relaxed">
              Same tuition.
              <br />
              Same laughter.
              <br />
              Same dreams.
              <br />
              Same love.
            </p>
            <p className="font-script text-xl text-stone-500">12 years. One story. <Heart className="inline w-4 h-4" /></p>
          </div>

          <div className="grid grid-cols-3 grid-rows-2 gap-3 max-w-lg mx-auto">
            {COLLAGE_IMAGES.map((img, i) => (
              <Polaroid key={i} src={img.src} className={img.className} />
            ))}
          </div>
        </div>
      </section>

      {/* ───────── WEDDING DAY ───────── */}
      <section id="wedding-day" className="grid md:grid-cols-2">
        <div
          className="min-h-[420px] md:min-h-[600px] bg-cover bg-center"
          style={{ backgroundImage: `url(${IMG.wedding})` }}
        />
        <div className="bg-[#F6F1E7] px-6 md:px-16 py-16 flex flex-col justify-center">
          <p className="text-xs tracking-[0.25em] text-stone-400 mb-3">The Wedding Day</p>
          <h2 className="font-serif-display text-4xl md:text-5xl text-stone-800 mb-5">
            And then came August 17
          </h2>
          <p className="text-stone-600 mb-8 max-w-sm">
            After ten years of choosing each other, they finally said, "Forever."
          </p>

          <div className="flex gap-8 items-start flex-wrap">
            <div className="border border-stone-300 px-5 py-4 text-center">
              <p className="font-serif-display text-2xl leading-none">17</p>
              <p className="text-xs tracking-widest text-stone-500 mt-1">AUGUST</p>
              <p className="text-xs tracking-widest text-stone-500">2025</p>
            </div>

            <ul className="space-y-3 text-sm text-stone-600">
              {SCHEDULE.map((s) => (
                <li key={s.label} className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-stone-400" />
                  <span className="text-stone-400 w-20">{s.time}</span>
                  <span>{s.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ───────── GALLERY ───────── */}
      <section id="gallery" className="bg-[#1A1714] text-white px-6 md:px-16 py-24">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs tracking-[0.25em] text-white/50 mb-3">The Gallery</p>
            <h2 className="font-serif-display text-4xl md:text-5xl mb-4">The Little Moments</h2>
            <p className="text-white/60 mb-8 max-w-xs">
              The smiles. The tears. The chaos. The love.
            </p>
            <a
              href="#"
              className="inline-block border border-white/40 text-sm px-6 py-3 hover:bg-white hover:text-stone-900 transition-colors"
            >
              View Full Gallery →
            </a>
          </div>

          <div className="flex gap-3 overflow-x-auto md:overflow-visible">
            {[IMG.gallery1, IMG.gallery2, IMG.gallery3, IMG.gallery4].map((src, i) => (
              <Polaroid
                key={i}
                src={src}
                className={`w-32 md:w-36 shrink-0 ${i % 2 ? "rotate-3" : "-rotate-2"}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ───────── FOOTER ───────── */}
      <footer
        className="relative min-h-[420px] flex items-center justify-center bg-cover bg-center text-center px-6"
        style={{ backgroundImage: `url(${IMG.footer})` }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-white max-w-lg">
          <p className="text-sm tracking-widest mb-4 text-white/80">2016 → 2026</p>
          <p className="font-script text-2xl leading-relaxed mb-6">
            They started with a hello.
            <br />
            They continued with love.
            <br />
            And today... they have forever.
          </p>
          <p className="flex items-center justify-center gap-2 text-sm mb-1">
            Her Name <Heart className="w-3 h-3" /> His Name
          </p>
          <p className="text-white/60 text-xs tracking-widest">AUGUST 17, 2025</p>
        </div>
        <p className="hidden md:block font-script text-lg text-white/70 absolute bottom-10 right-10 text-right leading-tight">
          Thank you for being
          <br />
          a part of their journey. <Heart className="inline w-4 h-4" />
        </p>
      </footer>
    </div>
  );
}