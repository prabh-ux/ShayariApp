import React from "react";
import { Link } from "react-router-dom";
// import { Helmet } from "react-helmet-async"; // uncomment if using HelmetProvider

const SeoDemo = () => {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <section className="max-w-5xl mx-auto px-4 py-10">
        {/* SEO Header */}
        <header className="text-center mb-8">
          <h1 className="text-4xl sm:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-red-400 via-pink-400 to-red-600">
            Best Punjabi Shayari Collection 2025 – Love, Sad, Attitude, Friendship & Motivational
          </h1>
          <p className="mt-4 text-gray-700 text-lg">
            Welcome to the{" "}
            <strong>largest Punjabi Shayari collection in Gurmukhi & English</strong>. 
            Here you’ll find <em>Punjabi Love Shayari, Attitude Shayari, Sad Shayari, Friendship Shayari, Motivational Shayari</em>, 
            and <em>Dharmik Shayari</em> – perfect for{" "}
            <Link className="text-pink-500 underline hover:text-red-500">
              Instagram captions
            </Link>
            ,{" "}
            <Link className="text-pink-500 underline hover:text-red-500">
              WhatsApp bios
            </Link>
            , and{" "}
            <Link  className="text-pink-500 underline hover:text-red-500">
              trending hashtags
            </Link>.
          </p>
        </header>

        {/* Love Shayari */}
        <section className="mt-10">
          <h2 className="text-3xl font-semibold mb-4 text-pink-600">💘 Punjabi Love Shayari</h2>
          <p className="text-gray-700 leading-relaxed">
            Punjabi Love Shayari is full of passion, romance, and soulful expressions. These shayaris capture 
            <strong>deep emotions of love, attraction, and devotion</strong>. They are widely used as 
            <em>Instagram captions for couples, romantic WhatsApp status lines,</em> and even wedding card quotes.
          </p>
          <ul className="list-disc list-inside mt-3 text-gray-800 space-y-2">
            <li>ਕਿਉਂ ਜੀਵਾਂ ਬਿਨ ਤੇਰੇ ਜੀਣ ਦੀ ਵਜਾਹ ਕੋਈ ਨਾਂ, ਬਿਨ ਤੇਰੇ ਇਹ ਸਾਹਾਂ ਦਾ ਪਲ ਦਾ ਵਸਾਹ ਕੋਈ ਨਾਂ 🥰</li>
            <li>ਮੈਨੂੰ ਮੇਰੇ ਕੱਲ੍ਹ ਦੀ ਪਰਵਾਹ ਨਹੀਂ, ਪਰ ਤੁਹਾਨੂੰ ਪਾਉਣ ਦੀ ਇੱਛਾ ਹਮੇਸ਼ਾ ਰਹੇਗੀ ❤️</li>
          </ul>
        </section>

        {/* Attitude Shayari */}
        <section className="mt-10">
          <h2 className="text-3xl font-semibold mb-4 text-pink-600">😎 Punjabi Attitude Shayari</h2>
          <p className="text-gray-700">
            If you want to show confidence, power, and swag, <strong>Punjabi Attitude Shayari</strong> is the best choice. 
            Perfect for boys and girls to set <em>Instagram bios, captions, or TikTok reels</em>.
          </p>
          <ul className="list-disc list-inside mt-3 space-y-2">
            <li>ਇਕੱਲੇ ਤੁਰਨ ਦੀ ਆਦਤ ਪਾ ਲਾ ਮਿਤਰਾ, ਕਿਉਂਕਿ ਲੋਕ ਸਾਥ ਉਦੋਂ ਛੱਡਦੇ ਆ ਜਦੋ ਸਭ ਤੋ ਵੱਧ ਲੋੜ ਹੋਵੇ 🙏</li>
            <li>ਵੱਡੀ ਮੰਜ਼ਿਲ ਦੇ ਮੁਸਾਫ਼ਿਰ, ਛੋਟੇ ਦਿਲ ਨਹੀਂ ਰੱਖਿਆ ਕਰਦੇ..! ❤️</li>
          </ul>
        </section>

        {/* Sad Shayari */}
        <section className="mt-10">
          <h2 className="text-3xl font-semibold mb-4 text-pink-600">💔 Punjabi Sad Shayari</h2>
          <p className="text-gray-700">
            Punjabi Sad Shayari expresses <strong>pain, heartbreak, and lost love</strong>. These are the most searched 
            shayaris when people feel broken or emotional.
          </p>
          <ul className="list-disc list-inside mt-3 space-y-2">
            <li>ਮਾੜੀ ਨੀ ਸੀ ਮੈਂ, ਬੱਸ ਤੈਨੂੰ ਸਾਂਭਨੀ ਨੀ ਆਈ 💔</li>
            <li>ਮੈਂ ਕਿਹਾ ਯਾਦ ਬਹੁ ਆਏਗਾ, ਤੂੰ ਕਿਹਾ ਠੀਕ ਆ ਰੋ ਲਿਆ ਕਰੀ 💔</li>
          </ul>
        </section>

        {/* Friendship Shayari */}
        <section className="mt-10">
          <h2 className="text-3xl font-semibold mb-4 text-pink-600">🤝 Punjabi Friendship Shayari</h2>
          <p className="text-gray-700">
            Friendship Shayari in Punjabi strengthens the bond of <strong>yaari and dosti</strong>. 
            These are often shared on{" "}
            <Link to="/captions-seo" className="text-pink-500 underline hover:text-red-500">Instagram stories</Link>{" "}
            and WhatsApp groups.
          </p>
          <ul className="list-disc list-inside mt-3 space-y-2">
            <li>ਯਾਰ ਸਾਹਾ ਨਾਲੋ ਵੱਧ ਕੇ ਕਰੀਬ ਰੱਖੇ ਏ, ਕਦੇ ਦਿਲ ਦੇ ਭੇਤ ਨਾ ਖੋਲਦੇ 💯</li>
            <li>ਯਾਰੀਆਂ ਦੀ ਚੜੀ ਰਹਿੰਦੀ ਲੋਰ ਜੱਟ ਨੂੰ ❤️</li>
          </ul>
        </section>

        {/* Dharmik Shayari */}
        <section className="mt-10">
          <h2 className="text-3xl font-semibold mb-4 text-pink-600">🙏 Punjabi Dharmik Shayari</h2>
          <p className="text-gray-700">
            Spiritual Shayari inspired by Sikh Gurus and Punjabi culture. These shayaris bring peace and positivity.
          </p>
          <ul className="list-disc list-inside mt-3 space-y-2">
            <li>ਗੁਰੂ ਨਾਨਕ ਦੇਵ ਜੀ ਕਹਿੰਦੇ ਸਨ – ਦੇਖੀ ਚੱਲ ਮਰਦਾਨਿਆ ਰੰਗ ਕਰਤਾਰ ਦੇ 🙏</li>
            <li>ਜਦੋਂ ਕੋਈ ਸਾਥ ਛੱਡ ਦੇਵੇ, ਰੱਬ ਉਂਗਲੀ ਫੜਨ ਵਾਲਾ ਭੇਜ ਦਿੰਦਾ ਹੈ ✨</li>
          </ul>
        </section>

        {/* Motivational Shayari */}
        <section className="mt-10">
          <h2 className="text-3xl font-semibold mb-4 text-pink-600">🔥 Punjabi Motivational Shayari</h2>
          <p className="text-gray-700">
            For self-confidence and success, Motivational Punjabi Shayari is a strong source of inspiration.
          </p>
          <ul className="list-disc list-inside mt-3 space-y-2">
            <li>ਇਕੱਲੇ ਤੁਰਨ ਦੀ ਆਦਤ ਪਾ ਲਾ ਮਿਤਰਾ 🚶‍♂</li>
            <li>ਵੱਡੀ ਮੰਜ਼ਿਲ ਵਾਲੇ ਛੋਟੇ ਦਿਲ ਨਹੀਂ ਰੱਖਦੇ ❤️</li>
          </ul>
        </section>

        {/* Instagram SEO Tips */}
        <section className="mt-10 bg-gradient-to-r from-pink-50 to-red-100 rounded-2xl p-6 border border-pink-200">
          <h2 className="text-2xl font-semibold mb-3 text-red-600">
            📈 How to Use Punjabi Shayari for Instagram Growth
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Use short <strong>Punjabi Love Shayari</strong> as captions for romantic posts.</li>
            <li>Add <Link  className="text-pink-500 underline">Punjabi hashtags</Link> like #PunjabiShayari #LoveShayari #AttitudeShayari.</li>
            <li>Keep bios under 150 characters with one-liners.</li>
            <li>Localize hashtags (#Chandigarh, #Amritsar, #Punjab).</li>
          </ul>
        </section>

        {/* FAQs */}
        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-4 text-pink-600">❓ Punjabi Shayari – FAQs</h2>
          <div className="space-y-4">
            <details className="group bg-pink-50 border rounded-xl p-4">
              <summary className="cursor-pointer font-semibold text-red-500 group-open:text-red-700">
                Punjabi Shayari ਕੀ ਹੁੰਦੀ ਹੈ?
              </summary>
              <p className="mt-2 text-gray-700">
                ਇਹ ਭਾਵਨਾਵਾਂ ਦਾ ਸੁੰਦਰ ਪ੍ਰਗਟਾਵਾ ਹੈ – ਪਿਆਰ, ਦਰਦ, ਦੋਸਤੀ, ਐਟੀਟਿਊਡ, ਅਤੇ ਧਾਰਮਿਕਤਾ ਨੂੰ ਛੋਟੀਆਂ ਲਾਈਨਾਂ ਵਿੱਚ ਦਰਸਾਉਣਾ।
              </p>
            </details>
            <details className="group bg-pink-50 border rounded-xl p-4">
              <summary className="cursor-pointer font-semibold text-red-500 group-open:text-red-700">
                ਕੀ ਮੈਂ ਇਹ Instagram ਲਈ ਵਰਤ ਸਕਦਾ/ਸਕਦੀ ਹਾਂ?
              </summary>
              <p className="mt-2 text-gray-700">
                ਹਾਂ, ਇਹ Instagram captions, reels, bios ਅਤੇ WhatsApp status ਲਈ ਬਿਲਕੁਲ perfect ਹਨ।
              </p>
            </details>
            <details className="group bg-pink-50 border rounded-xl p-4">
              <summary className="cursor-pointer font-semibold text-red-500 group-open:text-red-700">
                SEO ਲਈ Punjabi Shayari ਕਿਵੇਂ help ਕਰਦੀ ਹੈ?
              </summary>
              <p className="mt-2 text-gray-700">
                ਲੋਕ <em>Punjabi love shayari, attitude shayari</em> ਵਰਗੇ keywords ਖੋਜਦੇ ਹਨ। 
                ਇਹ ਨਿਸ਼ specific content search engine rankings improve ਕਰਦਾ ਹੈ।
              </p>
            </details>
          </div>
        </section>

        {/* CTA */}
        <section className="mt-10 text-center">
          <p className="text-gray-700 mb-4">
            Want AI to generate Punjabi Shayari captions, bios & trending hashtags automatically?
          </p>
          <div className="flex gap-5 justify-center">
            <Link
              target="_blank"
              to="https://insta-ai-xi.vercel.app/"
              className="px-6 py-3 bg-gradient-to-r from-red-400 to-pink-500 hover:from-red-500 hover:to-pink-600 rounded-lg font-semibold text-white transition"
            >
              Try InstaAI Free
            </Link>
            <Link
              to="/"
              className="px-6 py-3 bg-gradient-to-r from-gray-400 to-gray-500 hover:from-gray-500 hover:to-gray-600 rounded-lg font-semibold text-white transition"
            >
              Go To Home Page
            </Link>
          </div>
        </section>

        {/* Hidden Keyword Boost */}
        <div className="sr-only">
          punjabi love shayari, punjabi sad shayari, punjabi attitude shayari, punjabi friendship shayari,
          punjabi motivational shayari, best punjabi shayari for instagram, whatsapp status punjabi,
          romantic shayari in punjabi, dosti shayari punjabi, heart touching punjabi shayari,
          punjabi shayari captions, new punjabi shayari 2025, top punjabi quotes
        </div>
      </section>
    </main>
  );
};

export default SeoDemo;
