'use client';

import { signIn, useSession } from 'next-auth/react';

const LoginPage = () => {
  const { data, update, status } = useSession();

  return (
    <>
      <div>Login Page</div>
      <button
        className="bg-blue-500 text-white p-2 rounded"
        onClick={() => signIn('kakao', { callbackUrl: '/login' })}
      >
        login button
      </button>
      <p>{data?.user?.name || '이름 없음'}님 환영합니다!</p>
      <p>로그인 상태: {status}</p>
      <p>update 정보: {JSON.stringify(update, null, 2)}</p>
      <p>data 정보: {JSON.stringify(data, null, 2)}</p>
    </>
  );
};

export default LoginPage;
