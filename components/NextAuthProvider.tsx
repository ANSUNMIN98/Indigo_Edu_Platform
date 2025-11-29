'use client';

import { SessionProvider } from 'next-auth/react';

// NextAuth 기능을 사용할 수 있도록 앱을 감싸는 클라이언트 컴포넌트
export default function NextAuthProvider({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      {children}
    </SessionProvider>
  );
}