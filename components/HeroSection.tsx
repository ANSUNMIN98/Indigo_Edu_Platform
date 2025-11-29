import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-white py-20 md:py-32">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        {/* 텍스트 내용 */}
        <div className="md:w-1/2 md:pr-12 mb-10 md:mb-0">
          {/* 폰트 크기를 text-5xl md:text-5xl로 미세 조정 */}
          <h1 className="text-5xl md:text-5xl font-bold text-gray-900 leading-tight">
            AI 시대의 필승전략,
            <br />
            <span className="text-indigo-700">'인간다움'</span>을 기술로
            <br />
            승화합니다
          </h1>
          {/* 보조 문구는 변경 없음 */}
          <p className="mt-6 text-xl text-gray-600">
            당신의 잠재력을 깨우는 창의적인 교육, 
            <br />
            Indigo Edu에서 새로운 기회를 포착하세요.
          </p>
          <div className="mt-8 flex space-x-4">
            <button className="bg-indigo-700 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-indigo-800 transition duration-300 shadow-lg">
              지금 바로 시작하기
            </button>
            <button className="bg-white text-indigo-700 border border-indigo-700 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-indigo-50 transition duration-300">
              인기 강의 찾아보기
            </button>
          </div>
        </div>

        {/* 이미지 (Placeholder) */}
        <div className="md:w-1/2">
          <div className="bg-gray-200 w-full h-80 rounded-lg flex items-center justify-center text-gray-500 text-xl shadow-xl">
            [강의 플랫폼 대표 이미지 자리]
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;