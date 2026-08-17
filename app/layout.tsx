import type { Metadata } from "next";
import "./globals.css";

const title = "Ronak Tanna — AI Systems, Product Thinking & Strategy";
const description =
  "AI systems, agentic platforms and products built to survive contact with the real world.";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.RENDER_EXTERNAL_URL ?? "http://localhost:3000",
  ),
  title,
  description,
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  openGraph: {
    title,
    description,
    images: [{ url: "/og.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
