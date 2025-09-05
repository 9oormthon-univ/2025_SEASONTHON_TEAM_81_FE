import KakaoLogin from '@/components/ui/kakao-login';
import Image from 'next/image';
import Link from 'next/link';

const LoginPage = () => {
  return (
    <div className="w-full h-full relative">
      <Image
        src="/background.svg"
        alt="background"
        fill
        className="object-cover z-0 opacity-50"
      />
      <div className="absolute w-full h-full z-1 flex flex-col items-center justify-end-safe pb-16 gap-110">
        <div className="flex flex-col items-center">
          <p className="body5">마음을 위한 가장 따뜻한 동행</p>
          <Image
            src="/icon/logo_en.svg"
            alt="logo"
            width={300}
            height={52}
          />
        </div>
        <KakaoLogin />
      </div>
      <div className="hidden">
        <Link href="/home" />
        <Link href="/onboarding" />
      </div>
    </div>
  );
};

export default LoginPage;
