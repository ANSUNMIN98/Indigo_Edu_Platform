import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10 mt-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-b border-gray-700 pb-8 mb-8">
          {/* 회사 정보 */}
          <div>
            <h3 className="text-xl font-bold text-indigo-400 mb-4">Indigo Edu</h3>
            <p className="text-sm text-gray-400">
              최고의 교육 콘텐츠를 통해<br />
              당신의 성장을 응원합니다.
            </p>
          </div>

          {/* 주요 메뉴 */}
          <div>
            <h4 className="text-lg font-semibold mb-4">회사</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-gray-400 hover:text-indigo-400 transition duration-150">회사 소개</a></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-indigo-400 transition duration-150">인재 채용</a></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-indigo-400 transition duration-150">공지사항</a></li>
            </ul>
          </div>

          {/* 지원 */}
          <div>
            <h4 className="text-lg font-semibold mb-4">지원</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-gray-400 hover:text-indigo-400 transition duration-150">FAQ</a></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-indigo-400 transition duration-150">고객 센터</a></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-indigo-400 transition duration-150">이용 약관</a></li>
            </ul>
          </div>

          {/* 소셜 */}
          <div>
            <h4 className="text-lg font-semibold mb-4">커뮤니티</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-gray-400 hover:text-indigo-400 transition duration-150">블로그</a></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-indigo-400 transition duration-150">SNS</a></li>
            </ul>
          </div>
        </div>

        {/* 저작권 */}
        <div className="text-center text-sm text-gray-500 pt-4">
          &copy; {new Date().getFullYear()} Indigo Edu. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;