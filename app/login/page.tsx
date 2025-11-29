'use client'; // 클라이언트 컴포넌트로 지정

import React, { useState } from 'react';
import Link from 'next/link';
import { signIn } from 'next-auth/react'; // NextAuth signIn 함수 임포트
import { useRouter } from 'next/navigation';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null); // 에러 메시지 초기화

    try {
      const result = await signIn('credentials', {
        redirect: false, // 페이지 리다이렉트 방지
        email,
        password,
      });

      if (result?.error) {
        // 로그인 실패 시 에러 메시지 표시
        setError('로그인에 실패했습니다. 이메일과 비밀번호를 확인해 주세요.');
      } else {
        // 로그인 성공 시 메인 페이지로 리다이렉트
        router.push('/');
      }
    } catch (err) {
      setError('서버 연결 중 문제가 발생했습니다.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-2xl">
        <h2 className="text-3xl font-bold text-center text-indigo-700 mb-8">
          Indigo Edu 로그인
        </h2>

        {/* 에러 메시지 표시 */}
        {error && (
          <div className="mb-4 p-3 text-sm text-red-700 bg-red-100 rounded-lg" role="alert">
            {error}
          </div>
        )}

        {/* 로그인 폼 */}
        <form className="space-y-6" onSubmit={handleSubmit}>
          
          {/* 이메일 입력 */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              이메일 주소
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="name@example.com"
            />
          </div>

          {/* 비밀번호 입력 */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              비밀번호
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="비밀번호를 입력하세요"
            />
          </div>

          {/* 로그인 버튼 */}
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150"
            >
              로그인
            </button>
          </div>
        </form>

        {/* 추가 링크 (회원가입, 비밀번호 찾기) */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            계정이 없으신가요? 
            <Link href="/register" className="font-medium text-indigo-600 hover:text-indigo-500 ml-1">
              회원가입
            </Link>
          </p>
          <p className="mt-2 text-sm">
            <Link href="/reset-password" className="font-medium text-gray-500 hover:text-gray-700"> 
              비밀번호 찾기
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;