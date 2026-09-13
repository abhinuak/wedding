import { Heart } from "./Visuals";

const timeline = [
  { year: "2016", title: "The First Hello" },
  { year: "2018", title: "Growing Together" },
  { year: "2020", title: "Through Everything" },
  { year: "2023", title: "Still Us" },
  { year: "2025", title: "Forever Begins" },
];

export default function TimelineSection() {
  return (
    <section
      id="timeline"
      className="fade-section bg-[#3D1218] text-[#F1E4DE] px-6 md:px-16 py-24"
    >
      <div className="max-w-6xl mx-auto">
        <p className="text-xs tracking-[0.25em] text-[#D9A8A0] mb-3">
          The Journey
        </p>
        <h2 className="section-title font-serif-display text-4xl md:text-5xl mb-2">
          The 10 Year Timeline
        </h2>
        <p className="text-[#D9A8A0] mb-16">Different phases. Same love.</p>
        <div className="relative">
          <div className="hidden md:block absolute top-2 left-0 right-0 h-px bg-[#7A3C3C]" />
          <div className="grid grid-cols-2 md:grid-cols-5 gap-y-10 gap-x-6">
            {timeline.map((item) => (
              <div key={item.year} className="timeline-item relative pt-8">
                <span className="hidden md:block absolute -top-[3px] left-0 w-2 h-2 rounded-full bg-[#F1E4DE]" />
                <p className="font-serif-display text-lg mb-1">{item.year}</p>
                <p className="text-sm font-medium">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
        <p className="font-script text-xl text-[#D9A8A0] text-right mt-14 leading-snug">
          10 years... countless memories... one love.{" "}
          <Heart className="inline w-4 h-4" />
        </p>
      </div>
    </section>
  );
}
