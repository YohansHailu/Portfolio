import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta
          name="description"
          content="Hire Professional Freelancer &amp; Full-stack Develope. Building animations and interactive experiences, hi-end solutions, website maintenance &amp; security"
        />
        <meta
          name="robots"
          content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
        {/* <link rel="canonical" href="" /> */}
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        {/* <meta */}
        {/*   property="og:title" */}
        {/*   content="Yohans Hailu | Front End Developer | Full-stack Developer - Freelancer" */}
        {/* /> */}
        <meta
          property="og:description"
          content="Hire Professional Freelancer &amp; Full-stack Developer. Building animations and interactive experiences, hi-end solutions, website maintenance &amp; security"
        />
        {/* <meta */}
        {/*   property="og:url" */}
        {/*   content="https://nathaniel-hussein.vercel.app/" */}
        {/* /> */}
        <meta property="og:site_name" content="Yohans Hailu" />
        {/* <meta */}
        {/*   property="article:modified_time" */}
        {/*   content="2019-10-03T07:56:49+00:00" */}
        {/* /> */}
        <meta
          property="og:image"
          content="https://nathaniel-hussein.vercel.app/images/letter-n-2-logo.svg"
        />
        <meta property="og:image:width" content="2560" />
        <meta property="og:image:height" content="1920" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@YohansHailu" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
