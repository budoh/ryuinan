import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "龍隠庵 | RYUINAN",
  description: "静けさが息づく場。龍隠庵の復興サイト。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className="h-full antialiased"
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
