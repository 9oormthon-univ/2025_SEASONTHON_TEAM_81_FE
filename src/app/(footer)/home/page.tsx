'use client';

import AppHeader from '@/components/layout/app-header';
import HomeWalkingSection from '@/components/layout/home/home-walking-section';
import GrowBarGraph from '@/components/ui/grow-bar-graph';
import useUserStore from '@/store/useUserStore';
import Image from 'next/image';

const HeaderContent = () => {
  return (
    <div className="w-auto h-full flex flex-row">
      <Image
        src="/icon/bell.svg"
        width={21}
        height={24}
        alt="알림"
      />
    </div>
  );
};

const HomePage = () => {
  const gradientStyle = {
    background:
      'linear-gradient(180deg, rgba(245, 248, 246, 0.30) 29.33%, rgba(95, 185, 77, 0.30) 100%)',
  };

  const { name } = useUserStore();

  return (
    <div className="w-full h-full flex flex-col">
      <div
        className="w-full flex flex-col grow-5 pt-16 pb-4 relative"
        style={gradientStyle}
      >
        <AppHeader content={<HeaderContent />} />
        <div className="flex flex-row p-4 gap-2">
          <div className="pt-1">
            <Image
              src="/icon/user_green.svg"
              alt="user"
              width={20}
              height={20}
            />
          </div>
          <div className="flex flex-col">
            <p className="t2 text-[#414141]">
              {name}님의 4번째 식물,
              <br />
              해바라기
            </p>
            <p className="label3 text-[#707070]">
              산책을 통해 무럭무럭 자라나고 있어요
            </p>
          </div>
        </div>
        <div className="w-full h-full flex-row relative">
          <GrowBarGraph grow={75} />
          <div className="flex flex-row justify-end items-center px-2 absolute bottom-0 right-[1.5rem] w-25 h-4 rounded-[1.25rem] bg-[#BFDDBF] opacity-80">
            <Image
              src="/icon/edit.svg"
              width={9}
              height={10}
              alt="편집"
              className=""
            />
          </div>
        </div>
      </div>
      <div className="px-4 pt-3 grow-4 flex flex-col gap-4 bg-blue-100">
        <p className="t3">{name}님, 오늘은 가볍게 걸어볼까요?</p>
        <HomeWalkingSection />
      </div>
    </div>
  );
};

export default HomePage;
