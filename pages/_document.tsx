import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html  dir="rtl" lang="ar" suppressHydrationWarning>
        <Head>
        <meta
          name="description"
          content="أنشئ نموذج سيرة ذاتية جاهز للتعبئة بصيغة PDF   مجانًا. أدوات سهلة، قوالب احترافية، وخيارات تصميم متعددة لإنشاء سيرة ذاتية مثالية للتوظيف."
        />
        <meta name="google-site-verification" content="PZ_oWwxlFUOn6lyauQfS2aTulPQuRTs6rghAR3nlXqQ" />
        <meta name="robots" content="index, follow" />
        <link rel="icon" href="/logo.svg" />

        {/* Open Graph */}
        <meta property="og:title" content="harbaaCv - إنشاء سيرة ذاتية احترافية PDF مجانًا" />
        <meta property="og:description" content="أنشئ سيرتك الذاتية بسهولة وبصيغة PDF عبر قوالب جاهزة وقابلة للتعديل. الخدمة مجانية ومناسبة لجميع الوظائف." />
        <meta property="og:url" content="https://www.harbaaCv.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.harbaaCv.com/preview.jpg" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="harbaaCv - إنشاء سيرة ذاتية احترافية PDF مجانًا" />
        <meta name="twitter:description" content="سير ذاتية بتصميم احترافي وجاهزة للتحميل بصيغة PDF أو Word. جرب الآن!" />
        <meta name="twitter:image" content="https://www.harbaaCv.com/preview.jpg" />

        {/* Keywords */}
        <meta name="keywords" content="سيرة ذاتية, نموذج سيرة ذاتية جاهز للتعبئة pdf, إنشاء سيرة ذاتية pdf مجانا, نموذج سيرة ذاتية, انشاء سيرة ذاتية, نموذج سيرة ذاتية word, سيرة ذاتية قصيرة, سيرة ذاتية مجانية, تصميم سيرة ذاتية, قوالب سيرة ذاتية, سيرة ذاتية ats" />

        {/* JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "HarbaaCv",
              url: "https://www.harbaaCv.com",
              applicationCategory: "WebApplication",
              operatingSystem: "All",
              offers: {
                "@type": "Offer",
                price: "0.00",
                priceCurrency: "USD",
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.8",
                reviewCount: "180",
              },
            }),
          }}
        />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

