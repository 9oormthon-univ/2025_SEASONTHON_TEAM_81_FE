'use client';

import useModalStore from '@/store/useModalStore';
import useUserStore from '@/store/useUserStore';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const HealingContent = ({
  text,
  focus,
  onClick,
}: {
  text: string;
  focus: boolean;
  onClick: () => void;
}) => {
  return (
    <div
      className={`w-full rounded-lg flex flex-row gap-2 px-2 py-1 border ${
        focus ? 'border-gray5 bg-[#FAFFF2]' : 'border-[#00711E]'
      }`}
      onClick={onClick}
    >
      {focus ? (
        <Image
          src="/icon/small_circle_green.svg"
          alt="circle"
          width={9}
          height={9}
        />
      ) : (
        <Image
          src="/icon/small_circle.svg"
          alt="circle"
          width={9}
          height={9}
        />
      )}
      <span
        className={`label2 px-3 ${focus ? 'text-[#00711E]' : 'text-gray5'}`}
      >
        {text}
      </span>
    </div>
  );
};

const QuestionMissionModal = () => {
  const { name } = useUserStore();
  const { closeModal } = useModalStore();
  const [onFocus, setOnFocus] = useState<number | null>(null);

  //modal을 닫을때 해야할 기능 여기서 handling
  const handleCloseModal = () => {
    closeModal();
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
    <div className="w-full gap-2 flex flex-col items-center">
      <p className="t2 w-full text-center text-black1">
        {name}님, 오늘은 어떤
        <br />
        힐링 콘텐츠가 필요하세요?
      </p>
      <p className="label4 mb-8">1개 - 최대 3개 선택 가능해요</p>
      <div className="grid grid-cols-2 gap-4">
        <HealingContent
          text="감사 인사"
          focus={onFocus === 1}
          onClick={() => handleFocus(1)}
        />
        <HealingContent
          text="칭찬하기"
          focus={onFocus === 2}
          onClick={() => handleFocus(2)}
        />
        <HealingContent
          text="짧은 명상"
          focus={onFocus === 3}
          onClick={() => handleFocus(3)}
        />
        <HealingContent
          text="색깔 찾기"
          focus={onFocus === 4}
          onClick={() => handleFocus(4)}
        />
        <HealingContent
          text="스트레칭"
          focus={onFocus === 5}
          onClick={() => handleFocus(5)}
        />
        <HealingContent
          text="리듬워킹"
          focus={onFocus === 6}
          onClick={() => handleFocus(6)}
        />
      </div>
      <div className="w-full mt-2 flex flex-col gap-[0.4rem] items-center">
        <p className="label4 text-gray4">
          좋아요, 최적의 산책 코스를 만들어드릴게요
        </p>
        <Link
          href="/walking"
          className="text-center body4 w-full py-[0.3rem] text-white rounded-[0.3125rem] bg-[#2AB943]"
          onClick={handleCloseModal}
        >
          산책 시작하기
        </Link>
      </div>
    </div>
  );
};

export default QuestionMissionModal;
