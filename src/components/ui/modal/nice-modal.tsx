'use client';

import useModalStore from '@/store/useModalStore';
import Image from 'next/image';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';

const NiceModal = () => {
  const { closeModal } = useModalStore();

  return (
    <div className="w-full gap-1 flex flex-col items-center">
      <div className="flex flex-row gap-1 items-center">
        <p className="t2 pb-2 text-center text-[#00711E] w-full">
          5글자 칭찬하기
        </p>
        <Image
          src="/icon/heart_green.svg"
          alt="heart"
          width={24}
          height={24}
        />
      </div>
      <div className="flex flex-col gap-1 pb-4">
        <p className="text-gray5 text-center label2">
          나를 위한 따뜻한 한마디! 5글자 안에 담아볼까요?
        </p>
        <p className="text-gray4 text-center label5">{`예) 난역시짱야 / 꾸준함승리 / 오늘도해냄 / 나오늘멋져`}</p>
      </div>
      <input
        placeholder="5글자로 입력해주세요."
        className="rounded-lg bg-[#FAFFF2] w-full border border-gray5 h-12 px-4 placeholder:label2 placeholder:text-gray5"
      />
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

export default NiceModal;
