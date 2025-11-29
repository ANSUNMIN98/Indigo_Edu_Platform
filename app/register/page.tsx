'use client'; // 💡 폼 제출 로직을 위해 클라이언트 컴포넌트로 전환

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const RegisterPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    // 1. 클라이언트 측 유효성 검사 (비밀번호 일치 확인)
    if (password !== confirmPassword) {
      setError('비밀번호와 비밀번호 확인이 일치하지 않습니다.');
      return;
    }
    
    if (password.length < 8) {
      setError('비밀번호는 8자 이상이어야 합니다.');
      return;
    }

    try {
      // 2. 서버 측 API로 요청 전송
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // 3. 회원가입 성공
        alert('회원가입에 성공했습니다! 로그인 페이지로 이동합니다.');
        router.push('/login');
      } else {
        // 4. 회원가입 실패 (예: 이메일 중복)
        setError(data.message || '회원가입에 실패했습니다. 다시 시도해 주세요.');
      }
    } catch (err) {
      // 5. 서버 통신 오류
      setError('서버와 통신 중 오류가 발생했습니다.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-2xl">
        <h2 className="text-3xl font-bold text-center text-indigo-700 mb-8">
          Indigo Edu 회원가입
        </h2>

        {/* 에러 메시지 표시 */}
        {error && (
          <div className="mb-4 p-3 text-sm text-red-700 bg-red-100 rounded-lg" role="alert">
            {error}
          </div>
        )}

        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* 이름 입력 */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">이름</label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="홍길동"
            />
          </div>

          {/* 이메일 주소 */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">이메일 주소</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="name@example.com"
            />
          </div>

          {/* 비밀번호 */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">비밀번호</label>
            <input
              id="password"
              name="password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="8자 이상 입력"
            />
          </div>

          {/* 비밀번호 확인 */}
          <div>
            <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">비밀번호 확인</label>
            <input
              id="confirm-password"
              name="confirm-password"
              type="password"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="비밀번호를 다시 입력하세요"
            />
          </div>

          {/* 회원가입 버튼 */}
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150"
            >
              회원가입 완료
            </button>
          </div>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            이미 계정이 있으신가요? 
            <Link href="/login" className="font-medium text-indigo-600 hover:text-indigo-500 ml-1">
              로그인
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;