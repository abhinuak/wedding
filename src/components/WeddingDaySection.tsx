const schedule = [
  { time: "08:00 AM", label: "Getting Ready" },
  { time: "11:30 AM", label: "Ceremony" },
  { time: "01:00 PM", label: "Blessings" },
  { time: "04:00 PM", label: "Reception" },
];

export default function WeddingDaySection({ image }: { image: string }) {
  return (
    <section id="wedding-day" className="fade-section grid md:grid-cols-2">
      <div className="image-reveal parallax-image relative min-h-[420px] md:min-h-[600px] overflow-hidden">
        <img src={image} alt="Wedding day" loading="lazy" decoding="async" className="absolute inset-0 w-full h-full object-cover object-center" />
      </div>
      <div className="bg-[#F6F1E7] px-6 md:px-16 py-16 flex flex-col justify-center">
        <p className="text-xs tracking-[0.25em] text-stone-400 mb-3">
          The Wedding Day
        </p>
        <h2 className="section-title font-serif-display text-4xl md:text-5xl text-stone-800 mb-5">
          And then came August 17
        </h2>
        <p className="text-stone-600 mb-8 max-w-sm">
          After ten years of choosing each other, We finally said, "Forever."
        </p>
        <div className="flex gap-8 items-start flex-wrap">
          <div className="border border-stone-300 px-5 py-4 text-center">
            <p className="font-serif-display text-2xl leading-none">17</p>
            <p className="text-xs tracking-widest text-stone-500 mt-1">
              AUGUST
            </p>
            <p className="text-xs tracking-widest text-stone-500">2025</p>
          </div>
          <ul className="space-y-3 text-sm text-stone-600">
            {schedule.map((item) => (
              <li key={item.label} className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-stone-400" />
                <span className="text-stone-400 w-20">{item.time}</span>
                <span>{item.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
