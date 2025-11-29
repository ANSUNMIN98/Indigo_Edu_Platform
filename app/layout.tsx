import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// 프로젝트 내에서 정의된 컴포넌트들을 가져옵니다.
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NextAuthProvider from "@/components/NextAuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Indigo Edu Platform",
  description: "AI 시대의 필수 전략, '인간다움'을 기술로 승화합니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        {/*
          1. NextAuthProvider로 전체 애플리케이션을 감싸서
          NextAuth의 세션 정보를 모든 클라이언트 컴포넌트에서 접근할 수 있도록 합니다.
        */}
        <NextAuthProvider>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            
            {/* 2. 메인 콘텐츠 영역 */}
            <main className="flex-grow container mx-auto px-4 py-8">
              {children}
            </main>

            <Footer />
          </div>
        </NextAuthProvider>
      </body>
    </html>
  );
}