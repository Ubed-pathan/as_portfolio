'use client';
import { useEffect, useRef, useState, TouchEvent } from 'react';
import Image from 'next/image';

interface CarouselProps {
  images: { src: string; alt: string }[];
}

export function Carousel({ images }: CarouselProps) {
  const [index, setIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const touchStartX = useRef<number | null>(null);
  const touchDelta = useRef(0);

  const clamp = (i: number) => Math.max(0, Math.min(i, images.length - 1));
  const goTo = (i: number) => setIndex(clamp(i));
  const prev = () => goTo(index - 1);
  const next = () => goTo(index + 1);

  useEffect(() => {
    if (!trackRef.current) return;
    trackRef.current.style.transform = `translateX(-${index * 100}%)`;
  }, [index]);

  const onTouchStart = (e: TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchMove = (e: TouchEvent) => {
    if (touchStartX.current == null) return;
    touchDelta.current = e.touches[0].clientX - touchStartX.current;
  };
  const onTouchEnd = () => {
    if (touchDelta.current > 50) prev();
    else if (touchDelta.current < -50) next();
    touchStartX.current = null;
    touchDelta.current = 0;
  };

  return (
    <div className="relative select-none">
      <div className="overflow-hidden rounded-xl shadow-lg">
        <div
          ref={trackRef}
          className="flex transition-transform duration-500 ease-in-out"
          style={{ width: `${images.length * 100}%` }}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {images.map((img, i) => (
            <div key={i} className="w-full flex-shrink-0" style={{ width: `${100 / images.length}%` }}>
              <div className="relative w-full h-72 sm:h-96 bg-slateblue/20">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  priority={i === 0}
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <button onClick={prev} className="absolute top-1/2 -translate-y-1/2 left-2 bg-deepnavy/70 hover:bg-deepnavy text-softpink p-2 rounded-full shadow transition" aria-label="Previous">
        ‹
      </button>
      <button onClick={next} className="absolute top-1/2 -translate-y-1/2 right-2 bg-deepnavy/70 hover:bg-deepnavy text-softpink p-2 rounded-full shadow transition" aria-label="Next">
        ›
      </button>
      <div className="flex justify-center gap-2 mt-4">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`w-2.5 h-2.5 rounded-full transition ${i === index ? 'bg-purpleaccent' : 'bg-slateblue/50 hover:bg-slateblue'}`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
