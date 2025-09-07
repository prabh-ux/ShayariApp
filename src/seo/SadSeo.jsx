import React from "react";
import { Link } from "react-router-dom";

const SadSeo = () => {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <section className="max-w-5xl mx-auto px-4 py-10">
        {/* Header */}
        <header className="text-center mb-8">
          <h1 className="text-4xl sm:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-pink-500 to-red-500">
            Sad Shayari in Punjabi & Hindi
          </h1>
          <p className="mt-4 text-gray-700 text-lg">
            Explore a curated collection of <strong>sad and emotional shayari</strong> in Punjabi and Hindi. Perfect for{" "}
            <Link className="text-pink-600 underline hover:text-red-500">Instagram captions</Link>, WhatsApp status, or expressing heartfelt emotions.
          </p>
        </header>

        {/* SEO Content */}
        <section className="space-y-6 text-gray-700 leading-relaxed">
          <p>
            <strong>Sad Shayari</strong> captures heartbreak, loneliness, and emotional moments in expressive lines. These shayaris resonate with anyone going through love, friendship, or life challenges.
          </p>
          <p>
            Popular searches include <strong>sad Punjabi shayari, emotional Hindi quotes, breakup lines</strong>, and <strong>heart-touching captions</strong>. Sharing these lines increases engagement and helps users connect with your emotions on social media.
          </p>

          <h2 className="text-2xl font-semibold text-red-500 mt-8">
            Trending Sad Shayari Themes
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Heartbreak and breakup quotes in Punjabi & Hindi.</li>
            <li>Lonely & emotional status lines for Instagram and WhatsApp.</li>
            <li>Friendship loss and emotional bonding shayaris.</li>
            <li>Motivational sad lines to inspire resilience.</li>
            <li>Deep poetic expressions for reels and posts.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-red-500 mt-8">
            Why Sad Shayari is Popular
          </h2>
          <p>
            Users seek content that reflects their inner feelings. Posting <strong>emotional shayari, sad captions, and Hindi quotes</strong> allows followers to relate and share, increasing reach and visibility.
          </p>

          <h2 className="text-2xl font-semibold text-red-500 mt-8">
            SEO Benefits of Sad Shayari
          </h2>
          <p>
            Using keywords like <em>sad Punjabi shayari, breakup quotes, emotional status, Hindi sad shayari</em> improves Google and Instagram ranking. Pairing them with <Link className="text-pink-600 underline hover:text-red-500">relevant hashtags</Link> increases organic traffic and social media engagement.
          </p>
        </section>

        {/* FAQ */}
        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-4 text-red-500">
            Sad Shayari – FAQs
          </h2>
          <div className="space-y-4">
            <details className="group bg-gradient-to-br from-purple-50 to-pink-50 border border-pink-200 rounded-xl p-4">
              <summary className="cursor-pointer font-semibold text-pink-500 group-open:text-red-500">
                Sad Shayari ਕੀ ਹੈ?
              </summary>
              <p className="text-gray-700 mt-2">
                ਇਹ ਲਾਈਨਾਂ ਦਿਲ ਦੇ ਜਜ਼ਬਾਤ, ਤੋੜ, ਅਤੇ ਵਿਛੋੜੇ ਦੇ ਹਾਲਾਤ ਨੂੰ ਪ੍ਰਗਟ ਕਰਦੀਆਂ ਹਨ।
              </p>
            </details>
            <details className="group bg-gradient-to-br from-purple-50 to-pink-50 border border-pink-200 rounded-xl p-4">
              <summary className="cursor-pointer font-semibold text-pink-500 group-open:text-red-500">
                ਕੀ ਮੈਂ ਇਹ Instagram captions ਲਈ ਵਰਤ ਸਕਦਾ/ਸਕਦੀ ਹਾਂ?
              </summary>
              <p className="text-gray-700 mt-2">
                ਹਾਂ, ਇਹ ਸ਼ਾਇਰੀ captions, reels, ਅਤੇ WhatsApp status ਲਈ ਬਹੁਤ ਉਪਯੋਗੀ ਹੈ।
              </p>
            </details>
            <details className="group bg-gradient-to-br from-purple-50 to-pink-50 border border-pink-200 rounded-xl p-4">
              <summary className="cursor-pointer font-semibold text-pink-500 group-open:text-red-500">
                SEO ਵਿੱਚ Sad Shayari ਕਿਵੇਂ ਮਦਦ ਕਰਦੀ ਹੈ?
              </summary>
              <p className="text-gray-700 mt-2">
                ਇਹ trending keywords ਅਤੇ emotional content niche ਵਿੱਚ rank ਕਰਨ ਵਿੱਚ ਮਦਦ ਕਰਦੀ ਹੈ, ਜਿਸ ਨਾਲ organic traffic ਵਧਦਾ ਹੈ।
              </p>
            </details>
          </div>
        </section>

        {/* CTA */}
        <section className="mt-10 text-center">
          <p className="text-gray-700 mb-4">
            Want AI to create emotional captions, sad shayari, and trending hashtags?
          </p>
          <div className="flex gap-5 justify-center items-center">
            <Link
              target="blank"
              to="https://insta-ai-xi.vercel.app/"
              className="inline-block px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-red-500 rounded-lg font-semibold text-white transition"
            >
              Try InstaAI Free
            </Link>
            <Link
              to="/"
              className="inline-block px-6 py-3 bg-gradient-to-r from-gray-400 to-gray-500 hover:from-gray-500 hover:to-gray-600 rounded-lg font-semibold text-white transition"
            >
              Go To Home Page
            </Link>
          </div>
        </section>
      </section>
    </main>
  );
};

export default SadSeo;
