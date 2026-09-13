import { Heart } from "./Visuals";

export default function FooterSection({ image }: { image: string }) {
  return (
    <footer
      className="fade-section relative min-h-[420px] flex items-center justify-center bg-cover bg-center text-center px-6"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="absolute inset-0 bg-black/40" />
      <div className="footer-content relative z-10 text-white max-w-lg">
        <p className="text-sm tracking-widest mb-4 text-white/80">
          2016 -&gt; 2026
        </p>
        <p className="font-script text-2xl leading-relaxed mb-6">
          We started with a hello.
          <br />
          We continued with love.
          <br />
          And today... We have forever.
        </p>
        <p className="flex items-center justify-center gap-2 text-sm mb-1">
          LAVANYA <Heart className="w-3 h-3" /> SOURAV
        </p>
        <p className="text-white/60 text-xs tracking-widest">AUGUST 17, 2025</p>
      </div>
      <p className="hidden md:block font-script text-lg text-white/70 absolute bottom-10 right-10 text-right leading-tight">
        Thank you for being
        <br />a part of our journey. <Heart className="inline w-4 h-4" />
      </p>
    </footer>
  );
}
