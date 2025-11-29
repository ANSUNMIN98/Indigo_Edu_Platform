'use client'; 

import React from 'react';
import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react'; 

const Navbar = () => {
  const { data: session, status } = useSession(); 

  // 로딩 중일 때 (선택 사항)
  if (status === 'loading') {
    return (
      <nav className="sticky top-0 z-10 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-2xl font-bold text-indigo-600">
              Indigo Edu
            </Link>
            <div className="flex items-center space-x-4">
              {/* 검색창 */}
              <input
                type="text"
                placeholder="강의 검색..."
                className="px-3 py-1 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 w-40 sm:w-64"
              />
              <div className="text-gray-500">로딩 중...</div>
            </div>
          </div>
        </div>
      </nav>
    );
  }

  return (
    <nav className="sticky top-0 z-10 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* 로고 */}
          <Link href="/" className="text-2xl font-bold text-indigo-600">
            Indigo Edu
          </Link>
          
          {/* 검색 및 인증 버튼 영역 */}
          <div className="flex items-center space-x-4">
            {/* 검색창 */}
            <input
              type="text"
              placeholder="강의 검색..."
              className="px-3 py-1 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 w-40 sm:w-64"
            />

            {/* 인증 상태에 따른 버튼 표시 */}
            {session ? (
              // 💡 로그인 상태일 때: 사용자 이름 (마이 페이지 링크)와 로그아웃 버튼 표시
              <>
                <Link 
                  href="/dashboard" // 💡 대시보드 링크 추가
                  className="text-gray-700 text-sm font-medium hover:text-indigo-600 transition duration-150 cursor-pointer"
                >
                  환영합니다, {session.user?.name || session.user?.email || '사용자'}님!
                </Link>
                <button
                  onClick={() => signOut({ callbackUrl: '/' })}
                  className="px-4 py-2 text-sm font-medium text-white bg-red-500 rounded-md hover:bg-red-600 transition duration-150"
                >
                  로그아웃
                </button>
              </>
            ) : (
              // 💡 로그아웃 상태일 때: 로그인 및 회원가입 버튼 표시
              <>
                <Link
                  href="/login"
                  className="px-4 py-2 text-sm font-medium text-indigo-600 border border-indigo-600 rounded-md hover:bg-indigo-50 transition duration-150"
                >
                  로그인
                </Link>
                <Link
                  href="/register"
                  className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 transition duration-150"
                >
                  회원가입
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;