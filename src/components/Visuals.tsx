export function Heart({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 21s-7.5-4.6-10.2-9.3C.2 8.7 1.4 5 5 4.2c2.2-.5 4 .6 5 2.3 1-1.7 2.8-2.8 5-2.3 3.6.8 4.8 4.5 3.2 7.5C19.5 16.4 12 21 12 21z" />
    </svg>
  );
}

export function Polaroid({
  src,
  caption,
  className = "",
}: {
  src: string;
  caption?: string;
  className?: string;
}) {
  return (
    <div className={`bg-amber-50 p-2 pb-4 shadow-xl ${className}`}>
      <img
        src={src}
        alt={caption ?? ""}
        className="w-full h-full object-cover"
      />
      {caption && (
        <p className="mt-2 text-center text-[13px] text-stone-500 font-script">
          {caption}
        </p>
      )}
    </div>
  );
}
