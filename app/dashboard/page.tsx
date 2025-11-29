'use client'; // 💡 useSession을 사용하므로 클라이언트 컴포넌트임을 명시

import React from 'react';
import { useSession } from 'next-auth/react'; 
import Link from 'next/link';

const DashboardPage = () => {
  const { data: session, status } = useSession();

  // 수강 중인 강의 목록 (Mock Data)
  const enrolledCourses = [
    { id: 1, title: "Next.js & Tailwind 완벽 가이드", progress: 60, lastChapterId: 2 },
    { id: 2, title: "실전 React & TypeScript", progress: 25, lastChapterId: 1 },
    { id: 3, title: "파이썬 데이터 분석 입문", progress: 90, lastChapterId: 5 },
  ];

  if (status === 'loading') {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-xl text-indigo-600">사용자 정보를 불러오는 중...</p>
      </div>
    );
  }
  
  // 로그인하지 않은 경우 (미들웨어에서 처리되지만, 안전을 위해 클라이언트에서도 처리)
  if (!session) {
      // 이 코드는 미들웨어 때문에 실제로 실행될 일은 적지만, 컴포넌트의 안정성을 위해 포함합니다.
      return (
        <div className="flex flex-col items-center justify-center min-h-screen p-8">
            <h1 className="text-3xl font-bold text-red-500 mb-4">접근 오류</h1>
            <p className="text-gray-600">이 페이지는 로그인한 사용자만 접근할 수 있습니다.</p>
            <Link href="/login" className="mt-4 text-indigo-600 hover:text-indigo-800 font-medium">
                로그인 페이지로 이동
            </Link>
        </div>
      );
  }

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-8 border-b pb-4">
        👋 {session.user?.name || '사용자'}님의 마이 페이지
      </h1>

      {/* 사용자 정보 카드 */}
      <section className="bg-white p-6 rounded-xl shadow-lg mb-10 border-t-4 border-indigo-500">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">개인 정보</h2>
        <div className="space-y-2">
          <p className="text-gray-700"><span className="font-semibold w-24 inline-block">이메일:</span> {session.user?.email}</p>
          <p className="text-gray-700"><span className="font-semibold w-24 inline-block">이름:</span> {session.user?.name || '정보 없음'}</p>
          <Link href="/reset-password" className="mt-4 inline-block text-sm text-indigo-600 hover:text-indigo-800 font-medium">
            비밀번호 변경
          </Link>
        </div>
      </section>

      {/* 수강 중인 강의 목록 */}
      <section>
        <h2 className="text-3xl font-bold text-gray-800 mb-6">🔥 수강 중인 강의 ({enrolledCourses.length}개)</h2>
        <div className="space-y-4">
          {enrolledCourses.map((course) => (
            <div key={course.id} className="bg-white p-5 rounded-xl shadow-md flex justify-between items-center border border-gray-100 hover:shadow-lg transition duration-200">
              <div>
                <h3 className="text-xl font-semibold text-indigo-700 mb-1">{course.title}</h3>
                <div className="text-sm text-gray-500">
                  진도율: {course.progress}%
                  <div className="w-64 bg-gray-200 rounded-full h-2.5 mt-1">
                    <div className="bg-indigo-600 h-2.5 rounded-full" style={{ width: `${course.progress}%` }}></div>
                  </div>
                </div>
              </div>
              <Link 
                href={`/courses/${course.id}/${course.lastChapterId}`} 
                className="px-4 py-2 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition duration-150"
              >
                이어보기
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default DashboardPage;