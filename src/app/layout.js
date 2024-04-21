import { Hanken_Grotesk } from "next/font/google";
import { Noto_Sans_Thai } from "next/font/google";
import { Noto_Sans_JP } from "next/font/google";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";

const hankenGroteskFont = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["400"],
});
const notoThai = Noto_Sans_Thai({ subsets: ["thai"], weight: ["500"] });
const notoJapanese = Noto_Sans_JP({ subsets: ["latin"], weight: ["500"] });
const notoKorean = Noto_Sans_KR({ subsets: ["latin"], weight: ["500"] });

export const metadata = {
  title: "Worakrit",
  description: "Worakrit's personal website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={hankenGroteskFont.className}>{children}</body>
    </html>
  );
}
