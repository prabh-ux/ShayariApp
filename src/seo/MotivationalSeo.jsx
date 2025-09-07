import React from "react";
import { Link } from "react-router-dom";

const MotivationalSeo = () => {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <section className="max-w-5xl mx-auto px-4 py-10">
        {/* Header */}
        <header className="text-center mb-8">
          <h1 className="text-4xl sm:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-red-400 via-pink-400 to-red-600">
            Best Motivational Shayari Collection 💪
          </h1>
          <p className="mt-4 text-gray-700 text-lg">
            Discover inspiring and motivational <strong>Shayari</strong> in Hindi & Punjabi. Perfect for{" "}
            <Link className="text-pink-500 underline hover:text-red-500">
              Instagram captions
            </Link>
            , WhatsApp status, and personal growth posts. Boost your confidence
            and mindset with powerful words.
          </p>
        </header>

        {/* SEO Content */}
        <section className="space-y-6 text-gray-700 leading-relaxed">
          <p>
            Motivational Shayari captures the essence of determination, success,
            and self-belief. People often search for <em>"motivational quotes in Hindi," "Punjabi motivational shayari," "success shayari"</em>.
          </p>
          <p>
            Using motivational shayari as Instagram captions, reels, or stories
            helps inspire followers and increases engagement. These lines
            encourage positivity, self-growth, and perseverance.
          </p>

          <h2 className="text-2xl font-semibold text-red-600 mt-8">
            Popular Motivational Shayari Topics
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Success and hard work shayari.</li>
            <li>Positive thinking & confidence shayari.</li>
            <li>Overcoming challenges & life struggles.</li>
            <li>Self-belief & courage quotes.</li>
            <li>Short one-line motivational captions.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-red-600 mt-8">
            Why Motivational Shayari is Trending
          </h2>
          <p>
            Motivational content always trends on social media. People search
            for inspirational shayari for daily posts, stories, and reels.
            <strong> SEO-friendly motivational shayari</strong> attracts a
            continuous flow of traffic from searches like "Hindi motivational
            shayari" or "Success quotes in Punjabi".
          </p>

          <h2 className="text-2xl font-semibold text-red-600 mt-8">
            SEO Benefits of Motivational Shayari
          </h2>
          <p>
            High-volume keywords like "motivational shayari," "inspirational
            quotes," and "life shayari" help improve organic search rankings.
            Adding descriptive paragraphs, examples, and actionable tips
            ensures better visibility in Google search results.
          </p>
        </section>

        {/* FAQ */}
        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-4 text-pink-600">
            Motivational Shayari – FAQs
          </h2>
          <div className="space-y-4">
            <details className="group bg-gradient-to-br from-red-50 to-pink-100 border border-pink-200 rounded-xl p-4">
              <summary className="cursor-pointer font-semibold text-red-500 group-open:text-red-700">
                Motivational Shayari ਕੀ ਹੁੰਦੀ ਹੈ?
              </summary>
              <p className="text-gray-700 mt-2">
                ਇਹ ਸ਼ਾਇਰੀ ਮਨੋਬਲ, ਹੌਂਸਲਾ ਅਤੇ ਸਫਲਤਾ ਦੀਆਂ ਭਾਵਨਾਵਾਂ ਨੂੰ ਪ੍ਰਗਟ ਕਰਦੀ ਹੈ। ਇਹ captions, reels ਅਤੇ WhatsApp status ਲਈ ਵਧੀਆ ਹੈ।
              </p>
            </details>
            <details className="group bg-gradient-to-br from-red-50 to-pink-100 border border-pink-200 rounded-xl p-4">
              <summary className="cursor-pointer font-semibold text-red-500 group-open:text-red-700">
                ਕੀ Motivational Shayari Instagram ਤੇ ਵਰਤ ਸਕਦੇ ਹਾਂ?
              </summary>
              <p className="text-gray-700 mt-2">
                ਹਾਂ, ਇਹ inspiring captions, reels ਅਤੇ motivational posts ਲਈ perfect ਹੈ।
              </p>
            </details>
            <details className="group bg-gradient-to-br from-red-50 to-pink-100 border border-pink-200 rounded-xl p-4">
              <summary className="cursor-pointer font-semibold text-red-500 group-open:text-red-700">
                SEO ਵਿੱਚ Motivational Shayari ਕਿਵੇਂ ਮਦਦ ਕਰਦੀ ਹੈ?
              </summary>
              <p className="text-gray-700 mt-2">
                High-volume keywords ਅਤੇ inspirational content Google ਤੇ ranking improve ਕਰਦੇ ਹਨ, ਅਤੇ consistent traffic ਲਿਆਉਂਦੇ ਹਨ।
              </p>
            </details>
          </div>
        </section>

        {/* CTA */}
        <section className="mt-10 text-center">
          <p className="text-gray-700 mb-4">
            Want AI to generate motivational Shayari, captions & quotes instantly?
          </p>
          <div className="flex gap-5 justify-center items-center">
            <Link
              target="_blank"
              to="https://insta-ai-xi.vercel.app/"
              className="inline-block px-6 py-3 bg-gradient-to-r from-red-400 to-pink-500 hover:from-red-500 hover:to-pink-600 rounded-lg font-semibold text-white transition"
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

export default MotivationalSeo;
