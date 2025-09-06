'use client';

import useModalStore from '@/store/useModalStore';
import useUserStore from '@/store/useUserStore';
import Image from 'next/image';
import { useState } from 'react';
import QuestionMissionModal from './question-mission-modal';
import useWalkingStore from '@/store/useWalkingStore';

const QuestionTimeModal = () => {
  const { name } = useUserStore();
  const { setWalkTime } = useWalkingStore();
  const { openModal, closeModal } = useModalStore();
  const [onFocus, setOnFocus] = useState<number | null>(null);

  //modal을 닫을때 해야할 기능 여기서 handling
  const handleCloseModal = (n: number) => {
    let t;
    if (n === 1) t = 10;
    else if (n === 2) t = 15;
    else if (n === 3) t = 20;
    else if (n === 4) t = 30;
    else return;

    setWalkTime(t * 60);
    closeModal();
    openModal(<QuestionMissionModal />);
    return;
  };

  const handleFocus = (value: number) => {
    if (onFocus === value) {
      setOnFocus(null);
      return;
    }
    setOnFocus(value);
  };

  return (
    <div className="w-full p-4 gap-4 flex flex-col items-center">
      <p className="t2 w-full text-center text-black1">
        {name}님, 오늘은 몇 분 걸어볼까요?
      </p>
      <p className="label4">
        무리하지 않아도 괜찮아요,
        <br />
        편안한 걸음이면 충분해요
      </p>
      <div className="grid grid-cols-2 gap-4">
        {onFocus === 1 ? (
          <div
            className="flex flex-row rounded-lg pl-2 pr-6 py-[0.3rem] border border-[#00711E] bg-[#FAFFF2] gap-2"
            onClick={() => handleFocus(1)}
          >
            <Image
              src="/icon/small_circle_green.svg"
              alt="circle"
              width={9}
              height={9}
            />
            <Image
              src="/icon/clock1_green.svg"
              alt="clock"
              width={20}
              height={20}
            />
            <span className="label2 text-[#00711E]">10분</span>
          </div>
        ) : (
          <div
            className="flex flex-row rounded-lg pl-2 pr-6 py-[0.3rem] border border-[#8F8F8F] bg-white gap-2"
            onClick={() => handleFocus(1)}
          >
            <Image
              src="/icon/small_circle.svg"
              alt="circle"
              width={9}
              height={9}
            />
            <Image
              src="/icon/clock1.svg"
              alt="clock"
              width={20}
              height={20}
            />
            <span className="label2 text-gray4">10분</span>
          </div>
        )}
        {onFocus === 2 ? (
          <div
            className="flex flex-row rounded-lg pl-2 pr-6 py-[0.3rem] border border-[#00711E] bg-[#FAFFF2] gap-2"
            onClick={() => handleFocus(2)}
          >
            <Image
              src="/icon/small_circle_green.svg"
              alt="circle"
              width={9}
              height={9}
            />
            <Image
              src="/icon/clock2_green.svg"
              alt="clock"
              width={20}
              height={20}
            />
            <span className="label2 text-[#00711E]">15분</span>
          </div>
        ) : (
          <div
            className="flex flex-row rounded-lg pl-2 pr-6 py-[0.3rem] border border-[#8F8F8F] bg-white gap-2"
            onClick={() => handleFocus(2)}
          >
            <Image
              src="/icon/small_circle.svg"
              alt="circle"
              width={9}
              height={9}
            />
            <Image
              src="/icon/clock2.svg"
              alt="clock"
              width={20}
              height={20}
            />
            <span className="label2 text-gray4">15분</span>
          </div>
        )}
        {onFocus === 3 ? (
          <div
            className="flex flex-row rounded-lg pl-2 pr-6 py-[0.3rem] border border-[#00711E] bg-[#FAFFF2] gap-2"
            onClick={() => handleFocus(3)}
          >
            <Image
              src="/icon/small_circle_green.svg"
              alt="circle"
              width={9}
              height={9}
            />
            <Image
              src="/icon/clock3_green.svg"
              alt="clock"
              width={20}
              height={20}
            />
            <span className="label2 text-[#00711E]">20분</span>
          </div>
        ) : (
          <div
            className="flex flex-row rounded-lg pl-2 pr-6 py-[0.3rem] border border-[#8F8F8F] bg-white gap-2"
            onClick={() => handleFocus(3)}
          >
            <Image
              src="/icon/small_circle.svg"
              alt="circle"
              width={9}
              height={9}
            />
            <Image
              src="/icon/clock3.svg"
              alt="clock"
              width={20}
              height={20}
            />
            <span className="label2 text-gray4">20분</span>
          </div>
        )}
        {onFocus === 4 ? (
          <div
            className="flex flex-row rounded-lg pl-2 pr-6 py-[0.3rem] border border-[#00711E] bg-[#FAFFF2] gap-2"
            onClick={() => handleFocus(4)}
          >
            <Image
              src="/icon/small_circle_green.svg"
              alt="circle"
              width={9}
              height={9}
            />
            <Image
              src="/icon/clock4_green.svg"
              alt="clock"
              width={20}
              height={20}
            />
            <span className="label2 text-[#00711E]">30분</span>
          </div>
        ) : (
          <div
            className="flex flex-row rounded-lg pl-2 pr-6 py-[0.3rem] border border-[#8F8F8F] bg-white gap-2"
            onClick={() => handleFocus(4)}
          >
            <Image
              src="/icon/small_circle.svg"
              alt="circle"
              width={9}
              height={9}
            />
            <Image
              src="/icon/clock4.svg"
              alt="clock"
              width={20}
              height={20}
            />
            <span className="label2 text-gray4">30분</span>
          </div>
        )}
      </div>
      <div className="w-full flex flex-col gap-[0.4rem] items-center">
        <p className="label4 text-gray4">
          좋아요, 최적의 산책 코스를 만들어드릴게요
        </p>
        <button
          className="body4 w-full py-[0.3rem] text-white rounded-[0.3125rem] bg-[#2AB943]"
          onClick={() => handleCloseModal(onFocus ? onFocus : 5)}
        >
          다음
        </button>
      </div>
    </div>
  );
};

export default QuestionTimeModal;
