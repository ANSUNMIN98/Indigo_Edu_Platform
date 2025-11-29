import React from 'react';

// 강의 카드 컴포넌트 (Placeholder)
const CourseCard = ({ title, instructor, price }) => (
  <div className="bg-white border border-gray-100 rounded-xl shadow-lg hover:shadow-xl transition duration-300 overflow-hidden">
    <div className="bg-gray-200 h-32 flex items-center justify-center text-gray-500">
      [강의 썸네일]
    </div>
    <div className="p-4">
      <h3 className="text-lg font-bold text-gray-900 truncate">{title}</h3>
      <p className="text-sm text-gray-500 mt-1">{instructor}</p>
      {/* 가격 텍스트에 indigo-700 적용 */}
      <p className="text-xl font-extrabold text-indigo-700 mt-3">{price}</p>
    </div>
  </div>
);

// 강의 목록 섹션 메인 컴포넌트
const CourseListSection = () => {
  // 예시 강의 데이터
  const courses = [
    { title: "Next.js & Tailwind 완벽 가이드", instructor: "김민준", price: "₩129,000" },
    { title: "실전 React & TypeScript", instructor: "이서연", price: "₩159,000" },
    { title: "초보자를 위한 Figma UI/UX", instructor: "박지훈", price: "₩79,000" },
    { title: "파이썬 데이터 분석 입문", instructor: "최유리", price: "₩99,000" },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-8 border-b border-indigo-300 pb-2">
          🔥 인기 급상승 강의
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course, index) => (
            <CourseCard key={index} {...course} />
          ))}
        </div>
        <div className="text-center mt-12">
            {/* 버튼 배경색에 indigo-700 적용 */}
            <button className="bg-indigo-700 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-indigo-800 transition duration-300 shadow-lg">
                전체 강의 보기
            </button>
        </div>
      </div>
    </section>
  );
};

export default CourseListSection;