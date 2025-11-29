import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import CourseListSection from '@/components/CourseListSection';
import Footer from '@/components/Footer'; // Footer가 임포트되어 있어야 합니다.

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen"> 
      <Navbar />
      <main className="flex-grow"> 
        <HeroSection />
        <CourseListSection />
      </main>
      <Footer /> {/* 여기에 Footer가 추가되어 있어야 합니다. */}
    </div>
  );
}