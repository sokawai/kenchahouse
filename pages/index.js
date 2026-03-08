import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '../components/Layout';
import NewsletterForm from '../components/Forms';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Kencha House | A Place for Play &amp; Connection</title>
      </Head>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="aspect-[4/5] md:aspect-[21/9] w-full relative">
          <Image
            src="https://plus.unsplash.com/premium_photo-1684779979001-945168b3cfc3?q=80&w=2727&auto=format&fit=crop&ixlib=rb-4.1.0"
            alt="Elegant minimalist play cafe interior"
            fill
            className="object-cover brightness-95"
            priority
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-center px-6">
            <div className="max-w-2xl text-white">
              <p className="uppercase tracking-[0.3em] text-[10px] mb-4 opacity-90">Now Welcoming Little Dreamers</p>
              <h1 className="text-5xl md:text-7xl mb-12">A Cozy Play Space for Babies &amp; Toddlers.</h1>
              <div className="flex flex-col gap-4 max-w-xs mx-auto">
                <a
                  className="bg-white text-stone-900 px-8 py-4 uppercase text-[10px] tracking-[0.2em] font-semibold hover:bg-stone-100 transition-colors shadow-xl w-full text-center"
                  href="https://kenchahouse.youcanbook.me/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book Private Play
                </a>
                <Link
                  className="border border-white text-white px-8 py-4 uppercase text-[10px] tracking-[0.2em] hover:bg-white/10 transition-colors w-full text-center"
                  href="/about"
                >
                  Our Philosophy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="py-24 px-6 max-w-screen-xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl mb-6">Thoughtfully Curated Space</h2>
          <div className="h-px w-24 bg-stone-300 mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-8">
          <div className="text-center">
            <div className="mb-6 inline-flex items-center justify-center w-20 h-20 bg-[#E8E1D9] dark:bg-stone-800 rounded-full">
              <span className="material-symbols-outlined text-3xl text-stone-600">groups</span>
            </div>
            <h3 className="text-3xl mb-4">Private Dates</h3>
            <p className="text-stone-500 dark:text-stone-400 text-sm leading-relaxed max-w-md mx-auto">
              Host a curated play date for your group. Perfect for new parent meetups or small family gatherings.
            </p>
          </div>
          <div className="text-center">
            <div className="mb-6 inline-flex items-center justify-center w-20 h-20 bg-[#E8E1D9] dark:bg-stone-800 rounded-full">
              <span className="material-symbols-outlined text-3xl text-stone-600">celebration</span>
            </div>
            <h3 className="text-3xl mb-4">Birthday Parties</h3>
            <p className="text-stone-500 dark:text-stone-400 text-sm leading-relaxed max-w-md mx-auto">
              A turn-key experience where every detail is managed by us, leaving you to simply enjoy the celebration.
            </p>
          </div>
          <div className="text-center">
            <div className="mb-6 inline-flex items-center justify-center w-20 h-20 bg-[#E8E1D9] dark:bg-stone-800 rounded-full">
              <span className="material-symbols-outlined text-3xl text-stone-600">photo_camera</span>
            </div>
            <h3 className="text-3xl mb-4">Studio Space</h3>
            <p className="text-stone-500 dark:text-stone-400 text-sm leading-relaxed max-w-md mx-auto">
              Our minimalist, naturally-lit space is available for photography sessions and creative brand content.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="bg-background-light dark:bg-stone-900/50 py-24 px-6">
        <div className="max-w-screen-lg mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h2 className="text-5xl md:text-6xl">Our Story</h2>
            <p className="serif-quote text-2xl italic text-stone-600 dark:text-stone-400 leading-relaxed">
              &ldquo;Kencha House was born from a desire to create a sanctuary where babies and toddlers could explore wonder.&rdquo;
            </p>
            <p className="text-stone-600 dark:text-stone-400 leading-relaxed">
              Inspired by the quiet magic of nature and minimal design, we&apos;ve created a cafe that feels like a world of its own. We believe that parenting is a little easier when you can just enjoy being in the moment.
            </p>
            <Link
              className="inline-block border-b border-stone-400 text-stone-600 pb-1 text-[10px] tracking-[0.2em] uppercase hover:text-stone-900 transition-colors"
              href="/about"
            >
              Read More
            </Link>
          </div>
          <div>
            <Image
              src="https://plus.unsplash.com/premium_photo-1683133737181-0961b6e32ec0?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0"
              alt="Close up of wooden baby toys"
              width={900}
              height={900}
              className="w-full aspect-square object-cover shadow-sm"
            />
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-white dark:bg-stone-800 py-24 px-6">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-4xl mb-6">Stay Connected</h2>
          <p className="text-stone-500 dark:text-stone-400 mb-10 text-sm leading-relaxed">
            Join our mailing list for sneak peeks, special event invites, and seasonal updates.
          </p>
          <NewsletterForm />
        </div>
      </section>
    </Layout>
  );
}
