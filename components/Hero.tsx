import Link from 'next/link';
import dynamic from 'next/dynamic';

const ModelViewer = dynamic(() => import('./ModelViewer'), { ssr: false });

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-24 bg-gradient-to-b from-deepnavy to-darkblue">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight text-softpink">
            Crafting Precision Furniture & CNC Designs
          </h1>
          <p className="text-lg text-softpink/80 max-w-prose">
            We combine craftsmanship with modern CNC technology to build custom furniture pieces that inspire.
          </p>
          <Link href="/work" className="inline-block bg-purpleaccent hover:bg-purpleaccent/90 text-white px-6 py-3 rounded-md font-medium shadow-lg shadow-purpleaccent/30 transform hover:-translate-y-0.5 transition">
            Explore Our Work
          </Link>
        </div>
        <div className="h-96 rounded-xl border border-slateblue/40 bg-deepnavy/40 backdrop-blur relative shadow-inner">
          <ModelViewer />
        </div>
      </div>
      <div className="pointer-events-none absolute -top-32 -right-32 w-96 h-96 bg-purpleaccent/20 rounded-full blur-3xl" />
    </section>
  );
}
