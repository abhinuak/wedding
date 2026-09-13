import { Polaroid } from "./Visuals";

export default function GallerySection({ images }: { images: string[] }) {
  return (
    <section
      id="gallery"
      className="fade-section bg-[#1A1714] text-white px-6 md:px-16 py-24"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-xs tracking-[0.25em] text-white/50 mb-3">
            The Gallery
          </p>
          <h2 className="section-title font-serif-display text-4xl md:text-5xl mb-4">
            The Little Moments
          </h2>
          <p className="text-white/60 mb-8 max-w-xs">
            The smiles. The tears. The chaos. The love.
          </p>
          <a
            href="#gallery"
            className="inline-block border border-white/40 text-sm px-6 py-3 hover:bg-white hover:text-stone-900 transition-colors"
          >
            View Full Gallery -&gt;
          </a>
        </div>
        <div className="flex gap-3 overflow-x-auto md:overflow-visible">
          {images.map((image, index) => (
            <Polaroid
              key={image}
              src={image}
              className={`gallery-item w-32 md:w-36 shrink-0 ${index % 2 ? "rotate-3" : "-rotate-2"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
