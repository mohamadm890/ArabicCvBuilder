import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html dir="rtl" lang="ar" suppressHydrationWarning>
      <Head>
        <meta name="google-site-verification" content="PZ_oWwxlFUOn6lyauQfS2aTulPQuRTs6rghAR3nlXqQ" />
        <meta name="robots" content="index, follow" />
        <link rel="icon" href="/logo.svg" />

        <meta property="og:type" content="website" />

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
