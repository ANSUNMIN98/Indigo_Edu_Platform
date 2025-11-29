import React from 'react';

// 강의 상세 정보 및 커리큘럼 섹션
const CourseDetail = () => {
  // 실제 데이터는 백엔드 API에서 가져오게 되지만, 일단 UI를 위해 목업 데이터를 사용합니다.
  const course = {
    title: "Next.js & Tailwind 완벽 가이드",
    instructor: "김민준",
    price: "₩129,000",
    description: "실무에서 바로 적용 가능한 Next.js의 App Router와 최신 Tailwind CSS 기술을 깊이 있게 다룹니다. 백엔드 연동부터 배포까지 풀스택 웹 개발자가 되기 위한 핵심 지식을 습득하세요.",
    rating: 4.8,
    enrollments: 450,
    curriculum: [
      "1장: Next.js 14 환경 설정 및 App Router 기본",
      "2장: Tailwind CSS를 이용한 반응형 UI 설계",
      "3장: 서버 컴포넌트와 클라이언트 컴포넌트의 이해",
      "4장: API Route를 활용한 백엔드 연동",
      "5장: 데이터 패칭 전략 및 최적화",
    ]
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col lg:flex-row gap-10">
        
        {/* A. 주요 콘텐츠 영역 (좌측) */}
        <div className="lg:w-2/3">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-2">{course.title}</h1>
          <p className="text-xl text-indigo-700 mb-6">강사: {course.instructor}</p>
          
          {/* 강의 설명 */}
          <section className="mb-8 p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4 border-b pb-2">강의 개요</h2>
            <p className="text-gray-600 leading-relaxed">{course.description}</p>
          </section>

          {/* 커리큘럼 */}
          <section className="mb-8 p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4 border-b pb-2">커리큘럼</h2>
            <ul className="space-y-3">
              {course.curriculum.map((item, index) => (
                <li key={index} className="flex items-center text-gray-700">
                  <span className="font-semibold text-indigo-500 mr-2">{index + 1}.</span>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          {/* 후기 섹션 (Placeholder) */}
          <section className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4 border-b pb-2">수강생 후기 (⭐ {course.rating})</h2>
            <div className="text-gray-500">
              [후기 목록이 들어갈 자리입니다.]
            </div>
          </section>
        </div>
        
        {/* B. 구매 정보 사이드바 (우측) */}
        <div className="lg:w-1/3 sticky top-20 h-fit">
          <div className="bg-white p-6 rounded-lg shadow-2xl border border-indigo-100">
            <div className="bg-gray-200 h-40 w-full mb-4 rounded-md flex items-center justify-center text-gray-500">
              [강의 미리보기 영상]
            </div>
            
            <p className="text-3xl font-extrabold text-red-600 mb-4">{course.price}</p>
            
            <button className="w-full py-3 bg-indigo-600 text-white font-bold rounded-lg hover:bg-indigo-700 transition duration-150 shadow-lg mb-3">
              강의 수강 신청
            </button>
            
            <p className="text-sm text-gray-500 text-center">
              현재 {course.enrollments}명이 수강 중입니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;