'use client';

import AppFooter from '@/components/layout/app-footer';
import useDirections from '@/hooks/useDirections';
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
      <button
        className="bg-blue-500 text-white p-2 rounded"
        onClick={() => {
          fetch(
            '/api/directions?' +
              new URLSearchParams({
                start: '126.8323143,37.6347137',
                goal: '126.7477558,37.6758831',
                //waypoints: waypoints.toString(),
                option: 'traavoidcaronly',
              }),
            {
              method: 'GET',
            }
          );
        }}
      >
        경로 호출하기
      </button>
      <AppFooter />
    </>
  );
};

export default HomePage;
