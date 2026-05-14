import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "龍隠庵 | RYUINAN",
  description: "静けさの中で、人が少し深呼吸できる場所。龍隠庵の復興サイト。",
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
