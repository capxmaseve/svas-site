import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  metadataBase: new URL("https://svas.kr"),

  title: "KOMEL | SVAS",

  description:
    "SVAS가 개발 중인 휴대형 리필 퍼스널 향 오브제 KOMEL. 현재 기구설계 및 워킹 시제품 개발을 진행하고 있습니다.",

  alternates: {
    canonical: "https://svas.kr",
  },

  openGraph: {
    title: "KOMEL | SVAS",
    description:
      "아이디어에서 실제 제품으로. SVAS가 개발 중인 퍼스널 향 오브제 KOMEL.",
    url: "https://svas.kr",
    siteName: "SVAS",
    locale: "ko_KR",
    type: "website",

    images: [
      {
        url: "https://svas.kr/og-svas.png",
        secureUrl: "https://svas.kr/og-svas.png",
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
    images: ["https://svas.kr/og-svas.png"],
  },

  icons: {
    icon: [
      {
        url: "/favicon.ico",
      },
      {
        url: "/icon.png",
        type: "image/png",
      },
    ],
    apple: "/apple-icon.png",
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
