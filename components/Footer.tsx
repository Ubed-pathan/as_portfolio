export function Footer() {
  return (
    <footer className="bg-deepnavy text-softpink py-8 mt-16 border-t border-slateblue/40">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8 text-sm">
        <div>
          <h3 className="font-semibold mb-2 text-purpleaccent">AS Furniture & CNC</h3>
          <p className="opacity-80 leading-relaxed">Custom furniture craftsmanship and precision CNC machine design bringing your ideas to life.</p>
        </div>
        <div>
          <h4 className="font-semibold mb-2 text-purpleaccent">Contact</h4>
          <ul className="space-y-1 opacity-80">
            <li>Phone: <a className="hover:text-purpleaccent" href="tel:+1234567890">+1 234 567 890</a></li>
            <li>Email: <a className="hover:text-purpleaccent" href="mailto:info@asfurniture.com">info@asfurniture.com</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2 text-purpleaccent">Follow</h4>
          <div className="flex space-x-4 opacity-80">
            <a href="#" className="hover:text-purpleaccent">Instagram</a>
            <a href="#" className="hover:text-purpleaccent">Facebook</a>
            <a href="#" className="hover:text-purpleaccent">Pinterest</a>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center text-xs opacity-60">© {new Date().getFullYear()} AS Furniture & CNC Design. All rights reserved.</div>
    </footer>
  );
}
