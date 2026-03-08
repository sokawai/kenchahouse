import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-background-dark pt-16 pb-8 px-6">
      <div className="max-w-screen-xl mx-auto space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <h3 className="text-2xl font-display uppercase tracking-widest mb-4">Kencha House</h3>
            <p className="text-stone-500 dark:text-stone-400 text-sm leading-relaxed max-w-xs">
              A boutique play cafe for babies and toddlers.
            </p>
          </div>
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.2em] text-stone-400 mb-6">Explore</h4>
            <ul className="space-y-4 text-sm text-stone-600 dark:text-stone-300">
              <li><Link className="hover:text-primary transition-colors" href="/play">Our Play Space</Link></li>
              <li><Link className="hover:text-primary transition-colors" href="/parties">Private Events</Link></li>
              <li><Link className="hover:text-primary transition-colors" href="/studio">Studio Rental</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.2em] text-stone-400 mb-6">Support</h4>
            <ul className="space-y-4 text-sm text-stone-600 dark:text-stone-300">
              <li><a className="hover:text-primary transition-colors" href="mailto:kenchahouse@gmail.com">Contact Us</a></li>
              <li><Link className="hover:text-primary transition-colors" href="/faq">FAQ</Link></li>
              <li><a className="hover:text-primary transition-colors" href="https://form.jotform.com/260586396097270">Waivers</a></li>
              <li><a className="hover:text-primary transition-colors" href="https://www.instagram.com/kenchahouse/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.2em] text-stone-400 mb-6">Visit</h4>
            <p className="text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
              222 Finch Ave W Suite 105,{' '}
              North York, ON M2R 1M6<br />
              <a href="https://www.instagram.com/kenchahouse/" className="inline-block mt-4 text-stone-600 dark:text-stone-300 hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">@kenchahouse</a><br />
              <a href="mailto:kenchahouse@gmail.com" className="inline-block mt-2 text-sm text-stone-600 dark:text-stone-300 hover:text-primary transition-colors">kenchahouse@gmail.com</a>
            </p>
          </div>
        </div>
        <div className="border-t border-stone-100 dark:border-stone-800 pt-12 text-center space-y-6">
          <p className="text-[10px] text-stone-400 tracking-wider">&copy; 2026 Kencha House. All rights reserved.</p>
          <div className="flex justify-center gap-8">
            <a className="text-stone-400 hover:text-primary" href="https://www.instagram.com/kenchahouse/" target="_blank" rel="noopener noreferrer">
              <span className="material-symbols-outlined text-2xl">camera_alt</span>
            </a>
            <a className="text-stone-400 hover:text-primary" href="mailto:kenchahouse@gmail.com">
              <span className="material-symbols-outlined text-2xl">mail</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
