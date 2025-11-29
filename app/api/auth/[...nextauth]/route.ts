// app/api/auth/[...nextauth]/route.ts

import NextAuth from "next-auth"; 
// lib/auth.ts에서 정의한 인증 옵션 객체를 가져옵니다.
// auth.ts가 NextAuthOptions를 export하므로, 이름이 'authOptions'이라고 가정합니다.
import { authOptions } from "@/lib/auth"; 

// 1. authOptions를 사용하여 NextAuth 핸들러를 생성합니다.
const handler = NextAuth(authOptions);

// 2. 생성된 핸들러를 HTTP 메서드(GET, POST) 이름으로 직접 export 합니다.
// 이 방식이 Next.js App Router의 라우트 핸들러 규약에 맞습니다.
export { handler as GET, handler as POST };

// 이전 코드: export const { GET, POST } = handlers; (오류 발생)