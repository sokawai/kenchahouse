import Head from 'next/head';
import Image from 'next/image';
import Layout from '../components/Layout';

export default function About() {
  return (
    <Layout>
      <Head>
        <title>About Us | Kencha House</title>
      </Head>

      {/* Page Header */}
      <section className="pt-20 pb-12 px-6 text-center">
        <span className="uppercase tracking-[0.3em] text-[10px] text-stone-500 mb-4 block">Our Story</span>
        <h1 className="text-5xl md:text-6xl mb-6">Built on Love &amp; Gentle Wonder</h1>
        <div className="h-px w-16 bg-primary mx-auto"></div>
      </section>

      {/* Story Content */}
      <section className="py-16 px-6">
        <div className="max-w-md mx-auto">
          <div className="aspect-[3/4] mb-10 overflow-hidden">
            <Image
              src="https://plus.unsplash.com/premium_photo-1684164601635-2d9e37b2512b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0"
              alt="Serene play environment"
              width={900}
              height={1200}
              className="w-full h-full object-cover"
            />
          </div>
          <h2 className="text-4xl mb-6">Our Story</h2>
          <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed mb-6">
            Kencha House was born from a desire to create something different — a space where babies and toddlers are the priority.
          </p>
          <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed mb-6">
            Not oversized play gyms. Not chaotic environments. But a calm, beautifully prepared setting where early development and connection matter.
          </p>
          <div className="text-stone-600 dark:text-stone-400 leading-relaxed mb-6">
            <div className="text-sm mb-4 font-semibold">We believe:</div>
            <ul className="space-y-2 text-sm">
              <li>• Babies deserve safe exploration</li>
              <li>• Toddlers need space to test their confidence</li>
              <li>• Caregivers should feel welcome, not overwhelmed</li>
            </ul>
          </div>
          <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
            Located in Toronto, Kencha House is a gathering place for families who value intentional childhood experiences.
          </p>
        </div>
      </section>
    </Layout>
  );
}
