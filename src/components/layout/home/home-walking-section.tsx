'use client';

import QuestionTimeModal from '@/components/ui/modal/question-time-modal';
import WalkingStatus from '@/components/ui/walking-status';
import useModalStore from '@/store/useModalStore';
import useWalkingStore from '@/store/useWalkingStore';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const HomeWalkingSection = () => {
  const { walkTime, missions } = useWalkingStore();
  const { openModal } = useModalStore();

  return (
    <div className="w-full px-4 py-[0.625rem] rounded-[1.25rem] bg-[#f0f0f0] flex flex-col gap-4 items-start">
      <div className="flex flex-row w-full justify-between items-center pt-2">
        <p className="body5 text-[#414141]">오늘의 산책</p>
        <div className="rounded-[0.78125rem] bg-[#707070] flex flex-row items-center px-3 py-[0.2rem] gap-1">
          <Image
            src="/icon/hourglass.svg"
            alt="hourglass"
            width={12}
            height={16}
          />
          <p className="label7 text-[#ffffff] text-base font-medium">
            {walkTime / 60}분
          </p>
        </div>
      </div>
      <WalkingStatus missions={missions} />
      <div className="w-full rounded-[0.3125rem] bg-[#2AB943] py-[0.3rem] flex flex-row justify-center items-center">
        <p
          className="label2 text-[#F5F8F6]"
          onClick={() => openModal(<QuestionTimeModal />)}
        >
          산책 시작하기
        </p>
      </div>
    </div>
  );
};

export default HomeWalkingSection;
