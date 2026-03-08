import Nav from './Nav';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <div className="bg-background-light dark:bg-background-dark text-stone-800 dark:text-stone-200 transition-colors duration-300">
      <Nav />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
