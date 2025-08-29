import AppFooter from '@/components/layout/app-footer';
import Link from 'next/link';

const HomePage = () => {
  return (
    <>
      <p>main page</p>
      <Link href="/login">
        <button className="bg-blue-500 text-white p-2 rounded">
          로그인 페이지 바로가기
        </button>
      </Link>
      <AppFooter />
    </>
  );
};

export default HomePage;
