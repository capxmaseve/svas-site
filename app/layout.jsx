import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  metadataBase: new URL("https://www.svas.kr"),

  title: "KOMEL | SVAS",

  description:
    "아이디어에서 실제 제품으로. SVAS가 개발 중인 퍼스널 향 오브제 KOMEL.",

  alternates: {
    canonical: "https://www.svas.kr/",
  },

  openGraph: {
    title: "KOMEL | SVAS",
    description:
      "아이디어에서 실제 제품으로. SVAS가 개발 중인 퍼스널 향 오브제 KOMEL.",
    url: "https://www.svas.kr/",
    siteName: "SVAS",
    locale: "ko_KR",
    type: "website",
    images: [
      {
        url: "https://www.svas.kr/og-svas.png",
        width: 1200,
        height: 630,
        alt: "SVAS",
        type: "image/png",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "KOMEL | SVAS",
    description:
      "아이디어에서 실제 제품으로. SVAS가 개발 중인 퍼스널 향 오브제 KOMEL.",
    images: ["https://www.svas.kr/og-svas.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
