'use client';

import { signIn } from 'next-auth/react';
import Image from 'next/image';

const KakaoLogin = () => {
  return (
    <Image
      src="/icon/kakao_login.svg"
      alt="kakao login"
      width={300}
      height={45}
      onClick={() => signIn('kakao', { callbackUrl: '/home' })}
    />
  );
};

export default KakaoLogin;
