import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '../components/Layout';

export default function Play() {
  return (
    <Layout>
      <Head>
        <title>Play Sessions | Kencha House</title>
      </Head>

      {/* Hero */}
      <section className="bg-sand dark:bg-stone-900/50 py-20 px-6">
        <div className="max-w-screen-xl mx-auto">
          <p className="uppercase tracking-[0.3em] text-[10px] mb-4 text-stone-500">Private Play</p>
          <h1 className="text-5xl mb-6 leading-tight">Your Own Calm, Beautiful Play Space — Just for You</h1>
          <p className="text-sm text-stone-600 dark:text-stone-400 max-w-2xl font-light leading-relaxed mb-4">
            Skip the crowds. No overstimulation. No big-kid chaos.
          </p>
          <p className="text-sm text-stone-600 dark:text-stone-400 max-w-2xl font-light leading-relaxed mb-10">
            Our Private Play Sessions give you exclusive access to our bright, Montessori-inspired studio — designed especially for babies and toddlers to explore safely, confidently, and at their own pace.
          </p>
          <a
            className="inline-block bg-primary text-white text-center px-8 py-4 uppercase text-[10px] tracking-[0.2em] font-medium hover:opacity-90 transition-opacity"
            href="https://kenchahouse.youcanbook.me/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Book Private Play
          </a>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 max-w-6xl">
            <Image
              src="https://plus.unsplash.com/premium_photo-1661698968583-8cf33300a7ac?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0"
              alt="Montessori-inspired baby play setup"
              width={900}
              height={600}
              className="w-full h-64 object-cover rounded-lg"
            />
            <Image
              src="https://plus.unsplash.com/premium_photo-1684189487709-09171067fae8?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0"
              alt="Bright studio Montessori baby play"
              width={900}
              height={600}
              className="w-full h-64 object-cover rounded-lg"
            />
            <Image
              src="https://plus.unsplash.com/premium_photo-1661699771556-07b95e993aed?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0"
              alt="Baby Montessori exploration space"
              width={900}
              height={600}
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Details */}
      <section className="py-20 px-6" id="booking">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl mb-4">Perfect for</h2>
            <div className="h-[1px] w-12 bg-stone-300 dark:bg-stone-600 mb-6"></div>
            <ul className="space-y-3 text-stone-600 dark:text-stone-400 text-sm leading-relaxed">
              <li>• First playdates</li>
              <li>• Baby meetups</li>
              <li>• Milestone celebrations</li>
              <li>• Parent groups</li>
            </ul>

            <h3 className="text-3xl mt-12 mb-4">What&rsquo;s Included</h3>
            <ul className="space-y-3 text-stone-600 dark:text-stone-400 text-sm leading-relaxed">
              <li>✨ 2 hours of private studio access</li>
              <li>✨ Up to 10 people (adults and children included)</li>
              <li>✨ Thoughtfully curated Montessori-inspired soft play</li>
              <li>✨ Bright, natural light space</li>
              <li>✨ Intimate, baby-first environment</li>
              <li>✨ Time to explore, connect, and actually enjoy the moment</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-stone-900 p-8 md:p-10 border border-stone-100 dark:border-stone-800 shadow-sm">
            <h3 className="text-3xl mb-4">Why Private Play Sessions?</h3>
            <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed mb-4">Because early childhood play should feel:</p>
            <ul className="space-y-3 text-stone-600 dark:text-stone-400 text-sm leading-relaxed mb-6">
              <li>• Calm, not chaotic</li>
              <li>• Intentional, not overwhelming</li>
              <li>• Safe, not overstimulating</li>
            </ul>
            <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed mb-8">
              Whether you&rsquo;re planning your baby&rsquo;s first play experience or simply want a peaceful space to connect, Private Play gives you the studio — completely to yourself.
            </p>

            <h4 className="text-2xl mb-2">Cost</h4>
            <p className="text-stone-600 dark:text-stone-400 text-sm leading-relaxed mb-2">$350 per two hour session</p>
            <p className="text-stone-500 dark:text-stone-400 text-sm leading-relaxed mb-8">Additional time can be added based on availability.</p>

            <h4 className="text-2xl mb-2">Designed for Ages</h4>
            <p className="text-stone-600 dark:text-stone-400 text-sm leading-relaxed mb-8">Best suited for babies and toddlers 0 to 4 years old.</p>

            <a
              className="block w-full bg-primary text-white text-center py-4 uppercase text-[10px] tracking-[0.2em] font-medium hover:opacity-90 transition-opacity"
              href="https://kenchahouse.youcanbook.me/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book Your Private Session
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
