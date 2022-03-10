import '../styles/index.css';
import type { AppProps } from 'next/app';
import { NextSeo } from 'next-seo';

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <NextSeo
      title="Revoke.cash - Revoke your Ethereum token allowances"
      description="Protect your Ethereum token balances by revoking allowances and permissions you granted applications in the past."
      canonical="https://revoke.cash/"
      openGraph={{
        url: "https://revoke.cash/",
        images: [{
          url: "https://revoke.cash/revoke-card.png",
          width: 1600,
          height: 900,
        }],
        site_name: "Revoke.cash",
        type: "website",
      }}
      twitter={{
        handle: "@RoscoKalis",
        site: "@RevokeCash",
        cardType: "summary_large_image",
      }}
      additionalLinkTags={[
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: '/favicon.ico',
        },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
        { rel: 'manifest', href: '/manifest.json' },
      ]}
    />
    <Component {...pageProps} />
  </>
);

export default App;
