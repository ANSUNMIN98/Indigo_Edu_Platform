import React from 'react';
import Link from 'next/link';

// 컴포넌트 함수 이름은 대문자 시작 (ResetPasswordPage)
const ResetPasswordPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-sm bg-white p-8 rounded-xl shadow-2xl">
        <h2 className="text-3xl font-bold text-center text-indigo-700 mb-6">
          비밀번호 재설정
        </h2>
        
        <p className="text-center text-gray-600 mb-8 text-sm">
          가입 시 사용한 이메일 주소를 입력해 주세요. 
          비밀번호 재설정 링크를 보내드립니다.
        </p>

        {/* 이메일 입력 폼 */}
        <form className="space-y-6">
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
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="name@example.com"
            />
          </div>

          {/* 전송 버튼 */}
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150"
            >
              재설정 링크 받기
            </button>
          </div>
        </form>

        {/* 로그인 페이지로 돌아가기 링크 */}
        <div className="mt-6 text-center">
          <Link href="/login" className="font-medium text-indigo-600 hover:text-indigo-500 text-sm">
            로그인 페이지로 돌아가기
          </Link>
        </div>
      </div>
    </div>
  );
};

// 반드시 default로 내보내기 (export default)
export default ResetPasswordPage;