import React from "react";
import { Link } from "react-router-dom";

const SongsSeo = () => {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <section className="max-w-5xl mx-auto px-4 py-10">
        {/* Header */}
        <header className="text-center mb-8">
          <h1 className="text-4xl sm:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-pink-500 to-red-500">
            Punjabi & Hindi Songs Lyrics Collection
          </h1>
          <p className="mt-4 text-gray-700 text-lg">
            Explore a handpicked collection of <strong>Punjabi and Hindi song lyrics, romantic lines, and trending song quotes</strong>. Perfect for{" "}
            <Link  className="text-pink-600 underline hover:text-red-500">Instagram captions</Link>, Reels, and social media posts.
          </p>
        </header>

        {/* SEO Content */}
        <section className="space-y-6 text-gray-700 leading-relaxed">
          <p>
            <strong>Song Lyrics</strong> in Punjabi & Hindi cover emotions, love, heartbreak, friendship, and motivation. These lyrics are popular for Instagram captions, Reels, TikTok clips, and WhatsApp status.
          </p>
          <p>
            Trending searches include <strong>Punjabi song lyrics, Hindi romantic lyrics, emotional song quotes</strong>, and <strong>song captions for Instagram</strong>. Using these lines helps increase engagement and social reach.
          </p>

          <h2 className="text-2xl font-semibold text-red-500 mt-8">
            Popular Song Themes
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Punjabi love songs & romantic lyrics.</li>
            <li>Sad & emotional Hindi songs for heartbreak.</li>
            <li>Friendship songs and motivational lyrics.</li>
            <li>Dance & party songs for reels & stories.</li>
            <li>Bollywood and indie music quotes for captions.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-red-500 mt-8">
            Why Song Lyrics are Trending
          </h2>
          <p>
            Music is universal. Sharing <strong>popular song lines, emotional lyrics, and trending quotes</strong> allows followers to connect with your posts and increases social media interaction.
          </p>

          <h2 className="text-2xl font-semibold text-red-500 mt-8">
            SEO Benefits of Song Lyrics
          </h2>
          <p>
            Using keywords like <em>Punjabi song lyrics, Hindi romantic lyrics, Instagram song captions, emotional song quotes</em> improves Google and Instagram ranking. Pair them with <Link  className="text-pink-600 underline hover:text-red-500">trending hashtags</Link> to reach a wider audience.
          </p>
        </section>

        {/* FAQ */}
        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-4 text-red-500">
            Songs – FAQs
          </h2>
          <div className="space-y-4">
            <details className="group bg-gradient-to-br from-purple-50 to-pink-50 border border-pink-200 rounded-xl p-4">
              <summary className="cursor-pointer font-semibold text-pink-500 group-open:text-red-500">
                Song Lyrics ਕੀ ਹਨ?
              </summary>
              <p className="text-gray-700 mt-2">
                ਇਹ ਗੀਤਾਂ ਦੇ ਸ਼ਬਦ ਹਨ ਜੋ ਪਿਆਰ, ਦੋਸਤੀ, ਦਿਲ ਦੇ ਜਜ਼ਬਾਤ, ਅਤੇ ਜੀਵਨ ਦੇ ਤਜਰਬਿਆਂ ਨੂੰ ਦਰਸਾਉਂਦੇ ਹਨ।
              </p>
            </details>
            <details className="group bg-gradient-to-br from-purple-50 to-pink-50 border border-pink-200 rounded-xl p-4">
              <summary className="cursor-pointer font-semibold text-pink-500 group-open:text-red-500">
                ਕੀ ਮੈਂ ਇਹ Instagram captions ਲਈ ਵਰਤ ਸਕਦਾ/ਸਕਦੀ ਹਾਂ?
              </summary>
              <p className="text-gray-700 mt-2">
                ਹਾਂ, ਇਹ ਗੀਤਾਂ ਦੇ lyrics captions, reels, ਅਤੇ WhatsApp status ਲਈ ਬਹੁਤ ਉਪਯੋਗੀ ਹਨ।
              </p>
            </details>
            <details className="group bg-gradient-to-br from-purple-50 to-pink-50 border border-pink-200 rounded-xl p-4">
              <summary className="cursor-pointer font-semibold text-pink-500 group-open:text-red-500">
                SEO ਵਿੱਚ Song Lyrics ਕਿਵੇਂ ਮਦਦ ਕਰਦੇ ਹਨ?
              </summary>
              <p className="text-gray-700 mt-2">
                trending keywords ਅਤੇ music niche ਵਿੱਚ rank ਕਰਨ ਨਾਲ organic traffic ਅਤੇ engagement ਵਧਦੀ ਹੈ।
              </p>
            </details>
          </div>
        </section>

        {/* CTA */}
        <section className="mt-10 text-center">
          <p className="text-gray-700 mb-4">
            Want AI to create song captions, lyrics, and trending hashtags?
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

export default SongsSeo;
