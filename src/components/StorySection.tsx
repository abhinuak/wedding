import { Heart, Polaroid } from "./Visuals";

export default function StorySection({ image }: { image: string }) {
  return (
    <section
      id="our-story"
      className="fade-section px-6 md:px-16 py-24 relative overflow-hidden"
    >
      <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
        <div>
          <p className="text-xs tracking-[0.25em] text-stone-400 mb-3">
            Our Story
          </p>
          <h2 className="section-title font-serif-display text-4xl md:text-5xl text-stone-800 mb-6">
            Where it all began...
          </h2>
          <p className="text-stone-600 leading-relaxed mb-5 max-w-md reveal-up">
            Eleven years ago, our paths crossed quietly in the ordinary rhythm
            of an entrance campus tuition centre. No rush, no certainty - just
            two souls learning to notice each other. Love took its time to find
            a voice, months of patience, understanding, and silent hope.
          </p>
          <p className="text-stone-500 italic leading-relaxed max-w-md mb-6">
            What started as an ordinary day became the beginning of a
            10-year-long story.
          </p>
          <Heart className="w-4 h-4 text-stone-400" />
        </div>
        <div className="relative flex justify-center md:justify-start">
          <Polaroid
            src={image}
            caption="Tuition days... 2016"
            className="w-80 rotate-2 image-reveal parallax-image"
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
  );
}
