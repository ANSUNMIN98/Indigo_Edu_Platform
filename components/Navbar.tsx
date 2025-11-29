import React from 'react';

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* 로고: 글자 크기를 text-4xl로 변경 */}
        <div className="text-3xl font-bold text-indigo-600">
          Indigo Edu
        </div>

        {/* 검색창과 메뉴 */}
        <div className="flex items-center space-x-6">
          {/* 검색창 - 나중에 구현 */}
          <input
            type="text"
            placeholder="강의 검색..."
            className="p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 transition duration-150"
          />

          {/* 로그인/회원가입 버튼 */}
          <nav className="space-x-4">
            <button className="text-gray-600 hover:text-indigo-600 font-medium transition duration-150">
              로그인
            </button>
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 font-medium transition duration-150">
              회원가입
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;