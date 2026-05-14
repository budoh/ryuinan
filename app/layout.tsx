import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://ryuinan.vercel.app";
const siteTitle = "龍隠庵 | 円覚寺塔頭・北鎌倉の禅寺";
const siteDescription =
  "室町時代創建。北鎌倉・円覚寺塔頭 龍隠庵の由緒、庭、行事、空間について。";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteTitle,
  description: siteDescription,
  keywords: ["龍隠庵", "円覚寺", "北鎌倉", "禅寺", "臨済宗", "鎌倉寺院"],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: siteUrl,
    siteName: "龍隠庵",
    locale: "ja_JP",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "龍隠庵",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/opengraph-image"],
  },
  // Search Console: ここにGoogle verification codeを入れる
  // verification: {
  //   google: "google-site-verification-code",
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
