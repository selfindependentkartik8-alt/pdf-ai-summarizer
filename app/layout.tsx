import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";

export const metadata: Metadata = {
  metadataBase: new URL("https://pdfaisummarizer.krishaiworks.com"),

  title: {
    default: "PDF AI Summarizer | Summarize PDFs with AI",
    template: "%s | PDF AI Summarizer",
  },

  description:
    "Summarize PDF documents quickly with AI. Upload a PDF and get concise, useful summaries in seconds.",

  keywords: [
    "PDF AI Summarizer",
    "AI PDF Summarizer",
    "summarize PDF",
    "PDF summarizer online",
    "AI document summarizer",
    "PDF summary tool",
    "summarize documents with AI",
  ],

  authors: [
    {
      name: "KrishAIWorks",
      url: "https://krishaiworks.com",
    },
  ],

  creator: "KrishAIWorks",
  publisher: "KrishAIWorks",

  applicationName: "PDF AI Summarizer",
  category: "technology",

  alternates: {
    canonical: "https://pdfaisummarizer.krishaiworks.com/",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://pdfaisummarizer.krishaiworks.com/",
    siteName: "PDF AI Summarizer",
    title: "PDF AI Summarizer | Summarize PDFs with AI",
    description:
      "Upload a PDF and get a concise AI-powered summary quickly and easily.",
    images: [
      {
        url: "https://krishaiworks.com/logo.png",
        width: 512,
        height: 512,
        alt: "KrishAIWorks",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "PDF AI Summarizer | Summarize PDFs with AI",
    description:
      "Summarize PDF documents quickly with an AI-powered PDF summarizer.",
    images: ["https://krishaiworks.com/logo.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  icons: {
    icon: "https://krishaiworks.com/logo.png",
    shortcut: "https://krishaiworks.com/logo.png",
    apple: "https://krishaiworks.com/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-BS6TSMM1ZR"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-BS6TSMM1ZR');
          `}
        </Script>
      </body>
    </html>
  );
}