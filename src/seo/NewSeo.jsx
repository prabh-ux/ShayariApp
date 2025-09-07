import React from "react";
import { Link } from "react-router-dom";

const NewSeo = () => {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <section className="max-w-5xl mx-auto px-4 py-10">
        {/* Header */}
        <header className="text-center mb-8">
          <h1 className="text-4xl sm:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-red-400 via-pink-400 to-red-600">
            Latest Punjabi Shayari Collection
          </h1>
          <p className="mt-4 text-gray-700 text-lg">
            Discover the newest{" "}
            <strong>Punjabi Shayari, quotes, and lines</strong> in Gurmukhi and Hindi. Perfect for{" "}
            <Link  className="text-pink-500 underline hover:text-red-500">
              Instagram captions
            </Link>, WhatsApp status, and social media posts.
          </p>
        </header>

        {/* SEO Content */}
        <section className="space-y-6 text-gray-700 leading-relaxed">
          <p>
            <strong>New Punjabi Shayari</strong> is curated for the latest trends
            in social media content. These shayaris cover emotions like love, heartbreak, friendship, attitude, motivation, and spirituality. They are perfect for enhancing engagement on Instagram, Facebook, and WhatsApp.
          </p>
          <p>
            Users often search for <strong>latest Punjabi shayari, new Hindi quotes, trending captions,</strong> and <strong>motivational lines</strong> to stay connected with their audience. Posting fresh content regularly improves your profile visibility and attracts more followers.
          </p>

          <h2 className="text-2xl font-semibold text-red-600 mt-8">
            Popular Themes in New Punjabi Shayari
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Latest romantic shayari in Punjabi & Hindi for love posts.</li>
            <li>Heartbreak & breakup lines to express emotions.</li>
            <li>Friendship & attitude shayaris to share with friends.</li>
            <li>Motivational & inspirational quotes for daily positivity.</li>
            <li>Spiritual and dharmik lines for a calm mindset.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-red-600 mt-8">
            Why New Shayari is Trending?
          </h2>
          <p>
            Social media audiences love fresh content that resonates with their current mood and life experiences. Posting <strong>latest Punjabi shayari, trending quotes, and social captions</strong> keeps your profile engaging, shareable, and SEO-friendly.
          </p>

          <h2 className="text-2xl font-semibold text-red-600 mt-8">
            SEO Benefits of Posting New Shayari
          </h2>
          <p>
            Using keywords like <em>new Punjabi Shayari, latest Hindi quotes, trending captions</em> helps your website rank higher on Google and Instagram search. Coupling these lines with{" "}
            <Link  className="text-pink-500 underline hover:text-red-500">
              trending hashtags
            </Link>{" "}
            maximizes reach and organic traffic.
          </p>
        </section>

        {/* FAQ */}
        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-4 text-pink-600">
            New Shayari – FAQs
          </h2>
          <div className="space-y-4">
            <details className="group bg-gradient-to-br from-red-50 to-pink-100 border border-pink-200 rounded-xl p-4">
              <summary className="cursor-pointer font-semibold text-pink-500 group-open:text-red-600">
                New Punjabi Shayari ਕੀ ਹੈ?
              </summary>
              <p className="text-gray-700 mt-2">
                ਇਹ ਹਾਲੀਆ ਸ਼ਾਇਰੀ ਹੈ ਜੋ ਇਮੋਸ਼ਨ, ਪਿਆਰ, ਦੋਸਤੀ, ਐਟੀਟਿਊਡ ਅਤੇ ਪ੍ਰੇਰਣਾਦਾਇਕ ਲਾਈਨਾਂ ਨੂੰ ਪੇਸ਼ ਕਰਦੀ ਹੈ।
              </p>
            </details>
            <details className="group bg-gradient-to-br from-red-50 to-pink-100 border border-pink-200 rounded-xl p-4">
              <summary className="cursor-pointer font-semibold text-pink-500 group-open:text-red-600">
                ਕੀ ਮੈਂ ਇਹ Instagram captions ਲਈ ਵਰਤ ਸਕਦਾ/ਸਕਦੀ ਹਾਂ?
              </summary>
              <p className="text-gray-700 mt-2">
                ਹਾਂ, ਇਹ ਨਵੀਆਂ ਲਾਈਨਾਂ captions, reels, ਅਤੇ WhatsApp status ਲਈ ਬਹੁਤ ਵਧੀਆ ਹਨ।
              </p>
            </details>
            <details className="group bg-gradient-to-br from-red-50 to-pink-100 border border-pink-200 rounded-xl p-4">
              <summary className="cursor-pointer font-semibold text-pink-500 group-open:text-red-600">
                SEO ਵਿੱਚ New Shayari ਕਿਵੇਂ ਮਦਦ ਕਰਦੀ ਹੈ?
              </summary>
              <p className="text-gray-700 mt-2">
                ਨਵੀਂ ਸ਼ਾਇਰੀ ਨਾਲ ਤੁਹਾਡੀ ਵੈਬਸਾਈਟ trending keywords ਅਤੇ social content niche ਵਿੱਚ rank ਕਰ ਸਕਦੀ ਹੈ, ਜਿਸ ਨਾਲ organic traffic ਵਧਦਾ ਹੈ।
              </p>
            </details>
          </div>
        </section>

        {/* CTA */}
        <section className="mt-10 text-center">
          <p className="text-gray-700 mb-4">
            Want AI to generate trending captions, new shayari, and hashtags?
          </p>
          <div className="flex gap-5 justify-center items-center">
            <Link
              target="blank"
              to="https://insta-ai-xi.vercel.app/"
              className="inline-block px-6 py-3 bg-gradient-to-r from-red-400 to-pink-500 hover:from-red-500 hover:to-red-600 rounded-lg font-semibold text-white transition"
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

export default NewSeo;
