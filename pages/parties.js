import Head from 'next/head';
import Image from 'next/image';
import Layout from '../components/Layout';
import { InquiryForm } from '../components/Forms';

export default function Parties() {
  return (
    <Layout>
      <Head>
        <title>Parties | Kencha House</title>
      </Head>

      {/* Hero Images */}
      <section className="px-4 py-8">
        <div className="max-w-2xl mx-auto grid grid-cols-2 gap-6">
          <div className="rounded-lg overflow-hidden">
            <Image
              src="https://plus.unsplash.com/premium_photo-1677654190250-e9a946a29a5a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0"
              alt="Baby party"
              width={900}
              height={600}
              className="w-full h-64 object-cover"
            />
          </div>
          <div className="rounded-lg overflow-hidden">
            <Image
              src="https://plus.unsplash.com/premium_photo-1677655407676-6ddb0e67f2b9?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0"
              alt="Baby party"
              width={900}
              height={600}
              className="w-full h-64 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 px-6 bg-white dark:bg-stone-900/30">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl mb-6">A Stress-Free Celebration</h2>
          <p className="text-stone-600 dark:text-stone-400 leading-relaxed text-sm md:text-base">
            We believe parents should be part of the memories, not just the planners. Our turn-key party experiences provide an elegant backdrop, thoughtful details, and seamless coordination so you can focus on the magic of the moment.
          </p>
        </div>
      </section>

      {/* Packages */}
      <section className="py-20 px-6" id="packages">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl">Private Play Cafe Booking</h2>
            <p className="mt-5 text-stone-600 dark:text-stone-400 leading-relaxed text-sm md:text-base max-w-3xl mx-auto">
              Enjoy a cozy, private space designed just for babies and their grown-ups. Perfect for intimate playdates, small celebrations, or simply a relaxed morning with friends.
            </p>
            <p className="mt-3 text-stone-600 dark:text-stone-400 leading-relaxed text-sm md:text-base max-w-3xl mx-auto">
              Our space is thoughtfully designed for little ones to explore safely while parents unwind, connect, and enjoy a peaceful play environment.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-start">
            <article className="lg:col-span-2 border border-primary/20 bg-white dark:bg-stone-800 shadow-sm p-7 md:p-10 rounded-lg">
              <h3 className="text-2xl md:text-3xl mb-6">What is included</h3>
              <ul className="space-y-3 text-stone-700 dark:text-stone-200 text-base md:text-lg mb-10 list-disc pl-5">
                <li>Exclusive use of the space for up to 10 guests total (children and adults included)</li>
                <li>Nespresso coffee and tea for parents and caregivers</li>
                <li>Space to bring your own catering (snacks, cake, or light refreshments)</li>
                <li>Full use of our A/V system for music or presentations</li>
                <li>Access to our curated baby play area and toys</li>
              </ul>
            </article>
            <aside>
              <div className="border border-primary/20 bg-white dark:bg-stone-800 shadow-sm p-7 md:p-10 rounded-lg">
                <h3 className="text-2xl md:text-3xl mb-6">Before You Arrive</h3>
                <ul className="space-y-3 text-sm text-stone-500 dark:text-stone-400 leading-relaxed">
                  <li>Please arrive on time so you can enjoy your full booking window.</li>
                  <li>Outside food is welcome, but we kindly ask guests to tidy up before leaving.</li>
                  <li>The space is designed for infants and young toddlers.</li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 px-6 bg-white dark:bg-stone-900/30">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center">
            <span className="material-symbols-outlined text-4xl text-primary mb-4">wb_sunny</span>
            <h4 className="text-2xl mb-3">Bright, natural light</h4>
            <p className="text-stone-500 text-sm leading-relaxed">Bright, natural light — a warm, airy space designed for beautiful memories.</p>
          </div>
          <div className="text-center">
            <span className="material-symbols-outlined text-4xl text-primary mb-4">child_care</span>
            <h4 className="text-2xl mb-3">Montessori-inspired soft play</h4>
            <p className="text-stone-500 text-sm leading-relaxed">Montessori-inspired soft play — thoughtfully curated for growing bodies and curious little minds.</p>
          </div>
          <div className="text-center">
            <span className="material-symbols-outlined text-4xl text-primary mb-4">auto_awesome</span>
            <h4 className="text-2xl mb-3">An intimate, baby-first setup</h4>
            <p className="text-stone-500 text-sm leading-relaxed">An intimate, baby-first setup — calm, safe, and perfectly sized for your littlest guests.</p>
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="py-24 px-6">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl mb-4">Book Your Date</h2>
            <p className="text-stone-500 text-sm">Please fill out the form below and our events coordinator will reach out within 48 hours.</p>
          </div>
          <InquiryForm
            configKey="partyInquiry"
            placeholder="Tell us about your event — theme, child's age, guest count, special requests..."
          />
        </div>
      </section>
    </Layout>
  );
}
