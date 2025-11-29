import React from 'react';

// 수강 페이지 (실제 강의 시청 페이지)
const ChapterPage = () => {
    
  // 현재 강의 및 챕터 정보 (Mock Data)
  const courseTitle = "Next.js & Tailwind 완벽 가이드";
  const currentChapter = {
    title: "1장: Next.js 14 환경 설정 및 App Router 기본",
    videoUrl: "[여기에 비디오 플레이어가 들어갈 자리입니다.]" // 실제는 <VideoPlayer src={...} />
  };
  const curriculum = [
    { id: 1, title: "1장: Next.js 14 환경 설정 및 App Router 기본", completed: true },
    { id: 2, title: "2장: Tailwind CSS를 이용한 반응형 UI 설계", completed: false },
    { id: 3, title: "3장: 서버 컴포넌트와 클라이언트 컴포넌트의 이해", completed: false },
    { id: 4, title: "4장: API Route를 활용한 백엔드 연동", completed: false },
  ];

  return (
    <div className="flex min-h-[calc(100vh-64px)] bg-gray-50"> {/* 64px는 Navbar 높이 */}
      
      {/* A. 주요 콘텐츠 영역 (비디오 플레이어) */}
      <div className="flex-grow p-6">
        <h1 className="text-3xl font-bold mb-2 text-gray-800">{currentChapter.title}</h1>
        <p className="text-lg text-indigo-600 mb-6">{courseTitle}</p>
        
        {/* 비디오 플레이어 영역 (Placeholder) */}
        <div className="aspect-video bg-gray-800 flex items-center justify-center rounded-xl shadow-lg mb-8">
          <span className="text-white text-xl p-4">{currentChapter.videoUrl}</span>
        </div>

        {/* 챕터 노트 및 설명 */}
        <section className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold border-b pb-2 mb-4">챕터 설명 및 노트</h2>
          <p className="text-gray-700 leading-relaxed">
            이 챕터에서는 Next.js 14의 새로운 App Router 구조를 이해하고, 개발 환경을 설정하는 방법을 배웁니다. 
            특히 폴더 구조와 라우팅의 기본 원리를 확실하게 숙지하는 것이 목표입니다.
          </p>
        </section>
      </div>
      
      {/* B. 커리큘럼 사이드바 */}
      <div className="w-80 bg-white border-l border-gray-200 shadow-xl overflow-y-auto">
        <h2 className="text-xl font-bold p-4 border-b">강의 커리큘럼</h2>
        <ul className="divide-y divide-gray-100">
          {curriculum.map((chapter) => (
            <li 
              key={chapter.id} 
              className={`p-4 cursor-pointer hover:bg-indigo-50 transition ${chapter.completed ? 'bg-green-50' : ''}`}
            >
              <div className="flex justify-between items-center">
                <span className={`text-sm ${chapter.completed ? 'text-green-600 font-medium' : 'text-gray-700'}`}>
                  {chapter.title}
                </span>
                {chapter.completed && (
                  <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ChapterPage;