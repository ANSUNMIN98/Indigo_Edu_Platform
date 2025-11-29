// lib/auth.ts

import { NextAuthOptions } from "next-auth"; // 타입 정의를 가져옵니다.
import CredentialsProvider from "next-auth/providers/credentials";
import { mockUsers } from "@/data/users"; // 사용자 데이터는 그대로 사용

// NextAuthOptions 타입에 맞는 인증 옵션 객체를 정의하고 export 합니다.
// 'handlers'를 여기서 생성하지 않습니다.
export const authOptions: NextAuthOptions = {
    // 1. Providers 설정
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
                if (!credentials?.email || !credentials?.password) {
                    return null;
                }

                // mockUsers 대신 실제 DB에서 사용자 정보를 조회하는 로직을 사용해야 합니다.
                const user = mockUsers.find(
                    (u) => u.email === credentials.email && u.password === credentials.password
                );

                if (user) {
                    // 성공적으로 인증되면 user 객체를 반환합니다.
                    return {
                        id: user.id.toString(), // id는 string이어야 합니다.
                        name: user.name,
                        email: user.email,
                    };
                } else {
                    // 인증 실패
                    return null;
                }
            },
        }),
    ],

    // 2. Pages 설정 (선택 사항)
    pages: {
        signIn: '/login',
    },

    // 3. Session 및 Callbacks (필요에 따라 추가)
    // session: {
    //   strategy: "jwt",
    // },
    // callbacks: { /* ... */ }
};