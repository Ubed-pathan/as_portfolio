import { Carousel } from '../../components/Carousel';

export const metadata = { title: 'Work - AS Furniture & CNC' };

const images = [
  { src: '/images/sample1.jpg', alt: 'Custom wooden table' },
  { src: '/images/sample2.jpg', alt: 'CNC carved panel' },
  { src: '/images/sample3.jpg', alt: 'Modern cabinet design' },
  { src: '/images/sample4.jpg', alt: 'Decorative wall art' }
];

export default function WorkPage() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-24 space-y-10">
      <header className="space-y-3">
        <h1 className="text-4xl font-bold text-softpink">Our Work</h1>
        <p className="text-softpink/80 max-w-2xl">A curated selection of recent furniture builds and CNC design projects. Swipe or use arrows to explore.</p>
      </header>
      <Carousel images={images} />
    </section>
  );
}
