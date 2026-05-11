import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://savage-hacker14.github.io"),
  title: "Jacob Krucinski",
  description:
    "Personal site of Jacob Krucinski — MS in AI at Northeastern, focused on machine learning and computer vision for physical systems.",
  openGraph: {
    title: "Jacob Krucinski",
    description:
      "MS in Artificial Intelligence at Northeastern. ML & computer vision for physical systems.",
    type: "website",
  },
};

const themeInitScript = `(() => {
  try {
    const stored = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (stored === 'dark' || (!stored && prefersDark)) {
      document.documentElement.classList.add('dark');
    }
  } catch {}
})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="flex min-h-full flex-col bg-bg text-text">
        <Nav />
        <main className="mx-auto w-full max-w-3xl flex-1 px-6 pb-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
