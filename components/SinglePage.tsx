"use client";
import { useState } from 'react';
import { Carousel } from './Carousel';
import Link from 'next/link';
import SwitcherViewer from './SwitcherViewer';

const workImages = [
  { src: '/images/sample1.jpg', alt: 'Custom bed frame' },
  { src: '/images/sample2.jpg', alt: 'Headboard detail' },
  { src: '/images/sample3.jpg', alt: 'CNC carving panel' },
  { src: '/images/sample4.jpg', alt: 'Precision cut component' }
];

export default function SinglePage() {
  const [domain, setDomain] = useState<'bed' | 'cnc'>('bed');

  return (
    <div>
      {/* HERO */}
      <section id="home" className="min-h-[90vh] flex items-center relative overflow-hidden pt-24">
        <div className="absolute inset-0 bg-[var(--grad-hero)]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex gap-2">
              <button onClick={() => setDomain('bed')} className={`badge ${domain==='bed' ? 'bg-accent text-white' : ''}`}>Bed Design</button>
              <button onClick={() => setDomain('cnc')} className={`badge ${domain==='cnc' ? 'bg-accent text-white' : ''}`}>CNC Design</button>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
              Bespoke {domain === 'bed' ? 'Bed Furniture' : 'CNC Precision'} Solutions
            </h1>
            <p className="text-lg opacity-80 max-w-prose">
              {domain === 'bed' ? 'Hand-crafted bed frames and bedroom centerpiece furniture blending comfort with enduring style.' : 'High-precision CNC design and fabrication bringing intricate concepts into tangible form.'}
            </p>
            <div className="flex gap-4">
              <a href="#work" className="btn-accent">Explore Work</a>
              <a href="#contact" className="btn bg-surfaceAlt hover:bg-accent/10 text-accent border border-accent/20">Contact</a>
            </div>
          </div>
          <div className="relative h-[420px] rounded-xl glass p-2">
            <SwitcherViewer domain={domain} />
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-28">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-start">
          <div className="space-y-5">
            <h2 className="text-3xl font-bold">About Us</h2>
            <p className="leading-relaxed opacity-80">We unite craftsmanship and digital fabrication. From custom bed furniture that anchors restful spaces to CNC machined components that demand micrometer accuracy, our studio thrives on translating vision into engineered beauty.</p>
            <p className="leading-relaxed opacity-70">Every project flows through a refined process: ideation, 3D modeling, material strategy, precision cutting, and artisanal finishing.</p>
          </div>
          <div className="space-y-4">
            <div className="glass rounded-lg p-6">
              <h3 className="font-semibold mb-2">Our Values</h3>
              <ul className="space-y-1 text-sm opacity-80 list-disc list-inside">
                <li>Precision & Integrity</li>
                <li>Material Respect</li>
                <li>Longevity of Use</li>
                <li>Elegant Simplicity</li>
              </ul>
            </div>
            <div className="glass rounded-lg p-6">
              <h3 className="font-semibold mb-2">Capabilities</h3>
              <ul className="space-y-1 text-sm opacity-80 list-disc list-inside">
                <li>Custom Bed Frames & Headboards</li>
                <li>CNC 2.5D & Relief Carving</li>
                <li>Complex Joinery Milling</li>
                <li>Prototype Component Fabrication</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* WORK */}
      <section id="work" className="py-28 bg-surfaceAlt/50 dark:bg-surfaceAlt/30">
        <div className="max-w-6xl mx-auto px-6 space-y-10">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold">Selected Work</h2>
            <p className="opacity-75 max-w-2xl">Swipe or use arrows to browse a blend of {domain==='bed' ? 'bed furniture builds and detailing' : 'CNC carved panels and precision machined parts'}.</p>
          </div>
          <Carousel images={workImages} />
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-28">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-start">
          <div className="space-y-5">
            <h2 className="text-3xl font-bold">Contact</h2>
            <p className="opacity-80">Ready to start? Reach out for timelines, collaboration, or estimates.</p>
            <div className="space-y-2 text-sm opacity-80">
              <div><span className="font-medium">Address:</span> 123 Craft Lane, Woodtown</div>
              <div><span className="font-medium">Phone:</span> <a href="tel:+1234567890" className="text-accent hover:underline">+1 234 567 890</a></div>
              <div><span className="font-medium">Email:</span> <a href="mailto:info@asfurniture.com" className="text-accent hover:underline">info@asfurniture.com</a></div>
            </div>
            <div className="flex gap-4 pt-2">
              <Link href="tel:+1234567890" className="btn-accent">Call Us</Link>
              <Link href="https://wa.me/1234567890" target="_blank" className="btn bg-accentAlt/20 text-accentAlt hover:bg-accentAlt/30">WhatsApp</Link>
            </div>
          </div>
          <div className="glass rounded-lg p-6 space-y-4">
            <h3 className="font-semibold">Project Kickoff Tips</h3>
            <ul className="list-disc list-inside text-sm opacity-80 space-y-1">
              <li>Share reference images</li>
              <li>Specify dimensions & materials</li>
              <li>Define functional requirements</li>
              <li>Clarify timeline or deadline</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
