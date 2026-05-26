import "./globals.css";

export const metadata = {
  title: "SVAS KOMEL Project",
  description: "비접촉 리프레시 웰니스 브랜드 프로젝트",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
