import { Header } from "@/components/header";
import type { Metadata } from "next";
import Footer from "@/components/footer";
import "./globals.css";
export const metadata: Metadata = {
  title: "FrontEnd PortFolio WebSite | 정은경",
  description: "프론트엔드 포트폴리오 사이트",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans min-h-screen">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
