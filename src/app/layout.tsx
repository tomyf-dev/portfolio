import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import { Header, Footer, BackgroundEffects } from "@/components/layout";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-noto-sans-jp",
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ToMY F. | Web Engineer Portfolio",
  description: "TypeScriptが好きなWebエンジニア、ToMY F.のポートフォリオサイト。技術記事の集積と自己紹介。",
  openGraph: {
    title: "ToMY F. | Web Engineer Portfolio",
    description: "TypeScriptが好きなWebエンジニア、ToMY F.のポートフォリオサイト。",
    type: "website",
    locale: "ja_JP",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@tomyf_dev",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${notoSansJP.variable} bg-background text-foreground font-sans antialiased`}>
        <div className="relative min-h-screen w-full flex flex-col">
          <BackgroundEffects />

          <header>
            <Header />
          </header>

          <main className="relative z-10">
            {children}
          </main>

          <footer>
            <Footer />
          </footer>
        </div>
      </body>
    </html>
  );
}
