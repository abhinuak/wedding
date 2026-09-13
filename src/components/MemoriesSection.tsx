import { Heart, Polaroid } from "./Visuals";

export default function MemoriesSection({ images }: { images: string[] }) {
  const classes = [
    "col-span-2 row-span-2 -rotate-2",
    "rotate-3",
    "-rotate-1",
    "row-span-2 rotate-2",
    "-rotate-3",
  ];
  return (
    <section className="fade-section px-6 md:px-16 py-24">
      <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
        <div>
          <h2 className="section-title font-serif-display text-4xl md:text-5xl text-stone-800 mb-6">
            10 Years of Us
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
          <p className="font-script text-xl text-stone-500">
            10 years. One story. <Heart className="inline w-4 h-4" />
          </p>
        </div>
        <div className="grid grid-cols-3 grid-rows-2 gap-3 max-w-lg mx-auto">
          {images.map((image, index) => (
            <Polaroid key={image} src={image} className={classes[index]} />
          ))}
        </div>
      </div>
    </section>
  );
}
