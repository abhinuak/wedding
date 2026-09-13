import { Heart } from "./Visuals";

export default function HeroSection({ image }: { image: string }) {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <div
        className="hero-bg absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-black/40" />
      <div className="hero-content fade-out relative z-10 px-6 md:px-16 max-w-2xl">
        <p className="text-xs tracking-[0.25em] text-white/70 mb-4 reveal-title">
          Our Love Story
        </p>
        <h1 className="font-serif-display text-5xl md:text-7xl leading-[1.05] text-white mb-6 reveal-title">
          10 Years
          <br />
          of Love
        </h1>
        <p className="font-script text-2xl text-white/90 mb-6">
          Same hearts,
          <br />
          new chapter.
        </p>
        <p className="text-white/90 flex items-center gap-2 text-sm mb-1">
          SOURAV <Heart className="w-3 h-3" /> LAVANYA
        </p>
        <p className="text-white/60 text-xs tracking-widest mb-8">
          AUGUST 17, 2025
        </p>
        <a
          href="#our-story"
          className="inline-block border border-white/70 text-white text-sm px-6 py-3 hover:bg-white hover:text-stone-900 transition-colors"
        >
          Explore our Story -&gt;
        </a>
      </div>
      <p className="hidden md:block font-script text-xl text-white/80 absolute top-28 right-16 text-right leading-tight">
        From tuition
        <br />
        to forever <Heart className="inline w-4 h-4 -mt-1" />
      </p>
    </section>
  );
}
