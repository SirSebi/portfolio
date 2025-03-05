import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Sebastian Brandes | Webentwickler & Softwareingenieur",
  description: "Portfolio von Sebastian Brandes - Spezialist für moderne Webentwicklung, Frontend-Technologien und innovative Softwarelösungen.",
  keywords: ["Webentwicklung", "Frontend", "Software Engineering", "React", "Next.js", "Portfolio"],
  authors: [{ name: "Sebastian Brandes" }],
  creator: "Sebastian Brandes",
  publisher: "Sebastian Brandes",
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "https://sebastianbrandes.com",
    title: "Sebastian Brandes | Webentwickler & Softwareingenieur",
    description: "Portfolio von Sebastian Brandes - Spezialist für moderne Webentwicklung, Frontend-Technologien und innovative Softwarelösungen.",
    siteName: "Sebastian Brandes Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sebastian Brandes | Webentwickler & Softwareingenieur",
    description: "Portfolio von Sebastian Brandes - Spezialist für moderne Webentwicklung, Frontend-Technologien und innovative Softwarelösungen.",
    creator: "@sebastianbrandes",
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL("https://sebastianbrandes.com"),
  manifest: "/manifest.json",
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="dark">
      <head>
        <link rel="canonical" href="https://sebastianbrandes.com" />
        <link rel="icon" href="/default-memoji.png" type="image/png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
        <meta name="theme-color" content="#000000" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
