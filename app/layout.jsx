import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  metadataBase: new URL("https://svas.kr"),

  title: "KOMEL | SVAS",

  description:
    "아이디어에서 실제 제품으로. SVAS가 개발 중인 퍼스널 향 오브제 KOMEL.",

  openGraph: {
    title: "KOMEL | SVAS",

    description:
      "아이디어에서 실제 제품으로. SVAS가 개발 중인 퍼스널 향 오브제 KOMEL.",

    url: "https://svas.kr",

    siteName: "SVAS",

    type: "website",

    images: [
      {
        url: "https://svas.kr/og-svas.png",
        width: 1200,
        height: 630,
        alt: "SVAS",
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
