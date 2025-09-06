'use client';

import useModalStore from '@/store/useModalStore';
import Image from 'next/image';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';

const StretchingModal = () => {
  const { closeModal } = useModalStore();

  return (
    <div className="w-full gap-1 flex flex-col items-center">
      <div className="flex flex-row gap-1 pb-2 items-center">
        <p className="t2 text-center text-[#00711E] w-full">30초 스트레칭</p>
        <Image
          src="/icon/stretching.svg"
          alt="stretching"
          width={24}
          height={24}
        />
      </div>
      <div className="flex flex-col gap-1 pb-4">
        <p className="text-gray5 text-center label2">
          걸음을 멈추고, 숨과 함께 몸을 늘려주세요
        </p>
        <p className="text-gray4 text-center label5">{`예) 목 돌리기 · 어깨 풀기 · 팔 쭉 펴기 · 손목 돌리기`}</p>
      </div>
      <div>
        <CountdownCircleTimer
          isPlaying
          duration={30}
          colors="#4FC153"
          size={110}
          strokeWidth={8}
        >
          {({ remainingTime }) => (
            <span className="text-[32px] font-bold text-[#4FC153]">
              {remainingTime}
            </span>
          )}
        </CountdownCircleTimer>
      </div>
      <p
        className="label5 mb-5 text-[#BCBCBC]"
        style={{
          textDecorationLine: 'underline',
          textDecorationStyle: 'solid',
          textDecorationSkipInk: 'auto',
          textDecorationThickness: 'auto',
          textUnderlineOffset: 'auto',
          textUnderlinePosition: 'from-font',
        }}
      >
        다음에 할게요
      </p>
      <button
        className="text-center body4 w-full py-[0.3rem] text-white rounded-[0.3125rem] bg-[#2AB943]"
        onClick={closeModal}
      >
        확인
      </button>
    </div>
  );
};

export default StretchingModal;
