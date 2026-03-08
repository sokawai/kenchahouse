import Head from 'next/head';
import Image from 'next/image';
import Layout from '../components/Layout';
import { InquiryForm } from '../components/Forms';

export default function Studio() {
  return (
    <Layout>
      <Head>
        <title>Studio | Kencha House Photography &amp; Brand Space</title>
      </Head>

      {/* Header */}
      <header className="pt-12 pb-8 px-6 text-center">
        <p className="uppercase tracking-[0.3em] text-[9px] mb-4 text-stone-500">The Creative Canvas</p>
        <h1 className="text-5xl md:text-7xl mb-6">Kencha Studio</h1>
        <p className="max-w-md mx-auto text-stone-600 dark:text-stone-400 text-sm leading-relaxed">
          A minimalist, naturally-lit sanctuary designed for photographers, brand creators, and intimate content sessions.
        </p>
      </header>

      {/* Images */}
      <section className="px-4 py-8 bg-white dark:bg-stone-900/30">
        <div className="max-w-2xl mx-auto grid grid-cols-2 gap-6">
          <div className="rounded-lg overflow-hidden">
            <Image
              src="https://plus.unsplash.com/premium_photo-1661494158390-1dee08299a94?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0"
              alt="Studio lighting"
              width={900}
              height={600}
              className="w-full h-64 object-cover"
            />
          </div>
          <div className="rounded-lg overflow-hidden">
            <Image
              src="https://plus.unsplash.com/premium_photo-1683133737181-0961b6e32ec0?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0"
              alt="Studio corner"
              width={900}
              height={600}
              className="w-full h-64 object-cover"
            />
          </div>
        </div>
      </section>

      {/* The Space */}
      <section className="py-16 px-6 max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl mb-8">The Space</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <span className="material-symbols-outlined text-primary">architecture</span>
                <div>
                  <h4 className="text-2xl mb-1">Minimalist Layout</h4>
                  <p className="text-stone-600 dark:text-stone-400 text-sm leading-relaxed">
                    Open floor space with a clean, neutral aesthetic designed for flexible shooting setups.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="material-symbols-outlined text-primary">chair</span>
                <div>
                  <h4 className="text-2xl mb-1">Curated Props</h4>
                  <p className="text-stone-600 dark:text-stone-400 text-sm leading-relaxed">
                    Selection of mid-century furniture, organic linens, and ceramic vessels included.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-stone-100 dark:bg-stone-900/50 p-8">
            <h2 className="text-4xl mb-6">Rental Options</h2>
            <p className="text-stone-600 dark:text-stone-400 text-sm leading-relaxed">Flexible hourly rental options available.</p>
            <a
              href="#booking"
              className="block w-full mt-10 bg-primary text-white py-4 text-[10px] uppercase tracking-[0.2em] hover:opacity-90 transition-opacity text-center"
            >
              Inquire for Dates
            </a>
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="py-24 px-6 bg-white dark:bg-stone-900/30" id="booking">
        <div className="max-w-xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4">Request a Booking</h2>
            <p className="text-stone-600 dark:text-stone-400 text-sm leading-relaxed">
              Fill out the form below and our studio manager will be in touch within 24 hours.
            </p>
          </div>
          <InquiryForm
            configKey="studioInquiry"
            placeholder="Describe your shoot — type of session, preferred dates, any specific requirements..."
          />
        </div>
      </section>
    </Layout>
  );
}
