import { Hanken_Grotesk } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const hankenGroteskFont = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  title: "Worakrit K.",
  description:
    "Passionate problem-solver, designer, and idea generator with a drive to take them to the next level. Located in Thailand.",
  image:
    "https://i.pinimg.com/originals/8f/98/02/8f980249b56c4fdde948933bb3b8057a.jpg",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="title" content={metadata.title} />
        <meta name="description" content={metadata.description} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content={metadata.image} />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content={metadata.title} />
        <meta property="twitter:description" content={metadata.description} />
        <meta property="twitter:image" content={metadata.image} />
      </Head>
      <body className={hankenGroteskFont.className}>
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
