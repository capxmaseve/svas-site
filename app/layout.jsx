import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: "KOMEL | SVAS",

  description:
    "SVAS가 개발 중인 휴대형 리필 퍼스널 향 오브제 KOMEL. 현재 기구설계 및 워킹 시제품 개발을 진행하고 있습니다.",

  metadataBase: new URL("https://svas.kr"),

  openGraph: {
    title: "KOMEL | SVAS",
    description:
      "아이디어에서 실제 제품으로. SVAS가 개발 중인 퍼스널 향 오브제 KOMEL.",
    url: "https://svas.kr",
    siteName: "SVAS",
    type: "website",
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
