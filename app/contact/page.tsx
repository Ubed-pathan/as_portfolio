import { ContactCard } from '../../components/ContactCard';

export const metadata = { title: 'Contact - AS Furniture & CNC' };

export default function ContactPage() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-24">
      <ContactCard />
    </section>
  );
}
