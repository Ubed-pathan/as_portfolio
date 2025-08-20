import Link from 'next/link';

export function ContactCard() {
  return (
    <div className="space-y-6 max-w-xl">
      <div>
        <h2 className="text-3xl font-bold text-softpink mb-4">Get In Touch</h2>
        <p className="text-softpink/80 leading-relaxed">We would love to discuss your custom furniture or CNC project. Reach out through any channel below.</p>
      </div>
      <ul className="space-y-3 text-softpink/90">
        <li className="flex items-center gap-3"><span className="w-8 text-purpleaccent">📍</span> 123 Craft Lane, Woodtown</li>
        <li className="flex items-center gap-3"><span className="w-8 text-purpleaccent">📞</span> <a href="tel:+1234567890" className="hover:text-purpleaccent">+1 234 567 890</a></li>
        <li className="flex items-center gap-3"><span className="w-8 text-purpleaccent">✉️</span> <a href="mailto:info@asfurniture.com" className="hover:text-purpleaccent">info@asfurniture.com</a></li>
      </ul>
      <div className="flex gap-4 pt-2">
        <Link href="tel:+1234567890" className="bg-purpleaccent text-white px-5 py-2 rounded-md shadow hover:bg-purpleaccent/90 transition">Call Us</Link>
        <Link href="https://wa.me/1234567890" target="_blank" className="bg-green-600 text-white px-5 py-2 rounded-md shadow hover:bg-green-600/90 transition">WhatsApp Us</Link>
      </div>
    </div>
  );
}
