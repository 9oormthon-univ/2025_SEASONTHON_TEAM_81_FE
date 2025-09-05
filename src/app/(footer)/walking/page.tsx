'use client';

import AppHeader from '@/components/layout/app-header';
import HealingContent from '@/components/layout/walking/healing-content';
import NaverMap from '@/components/map/naver-map';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const HeaderContent = () => {
  return (
    <div className="flex flex-row items-center gap-2">
      <p className="text-black1 label4">고양시 덕양구</p>
      <Image
        src="/icon/gps.svg"
        alt="gps"
        width={24}
        height={24}
      />
    </div>
  );
};

const StopButton = ({
  href,
  activate,
  onClick,
}: {
  href: string;
  activate: boolean;
  onClick: () => void;
}) => {
  return (
    <Link
      href={href}
      className="p-4 bg-gray2 text-center text-gray4 body5 rounded-lg"
      onClick={onClick}
    >
      {activate ? '그만하기' : '뒤로가기'}
    </Link>
  );
};

const StartButton = ({
  activate,
  onClick,
}: {
  activate: boolean;
  onClick: () => void;
}) => {
  return (
    <button
      className="px-16 py-4 rounded-lg bg-primary text-white text-center body5"
      onClick={onClick}
    >
      <div className="flex flex-row gap-2">
        {activate ? (
          <>
            <Image
              src="/icon/start.svg"
              alt="start"
              width={24}
              height={24}
            />
            <span>산책 시작하기</span>
          </>
        ) : (
          <>
            <Image
              src="/icon/start.svg"
              alt="start"
              width={24}
              height={24}
            />
            <span>산책 시작하기</span>
          </>
        )}
      </div>
    </button>
  );
};

const WalkingPage = () => {
  const [activate, setActivate] = useState(false);

  return (
    <div className="w-full h-full flex flex-col relative">
      <AppHeader content={<HeaderContent />} />
      <NaverMap />
      <div className="px-4 pt-6 pb-4 rounded-t-lg absolute bottom-0 bg-white w-full">
        <HealingContent
          status={2}
          missions={['START', '호흡하기', '웃기웃기', 'FINISH']}
        />
        <div className="w-full flex flex-row px-6 mt-[0.7rem] justify-between">
          <StopButton
            href={activate ? '/home' : '/home'}
            activate={activate}
            onClick={() => {}}
          />
          <StartButton
            activate={activate}
            onClick={() => {
              setActivate(!activate);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default WalkingPage;
