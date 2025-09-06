'use client';

import useUserStore from '@/store/useUserStore';
import Image from 'next/image';
import { useEffect, useState } from 'react';

interface ContentSectionProps {
  status: number;
}

const ContentSection = ({ status }: ContentSectionProps) => {
  const [nickName, setNickName] = useState('');
  const { name, setName } = useUserStore();

  //nickName 입력시 store저장
  useEffect(() => {
    setName(nickName);
  }, [nickName]);

  const ContentList = {
    1: (
      <div className="h-full flex flex-col">
        <div className="flex-grow" />
        <p className="text-[#707070] body3 pb-9">
          지친 마음을 가볍게 만들어줄
          <br />
          작은 발걸음, 오늘도 곁에서 함께할게요
        </p>
      </div>
    ),
    2: (
      <div className="h-full flex flex-col">
        <div className="flex-grow"></div>
        <p className="text-[#707070] body3 pb-9">
          작은 걸음이 쌓이면 내 정원에서
          <br />
          마음 성장을 먹은 식물들이 자라나요
        </p>
      </div>
    ),
    3: (
      <div className="h-full flex flex-col">
        <div className="flex-grow flex flex-col items-center mt-6 gap-4">
          <p className="label1 text-gray5">마음식물 성장 변화</p>
          <div className="w-full grid grid-cols-3 px-10">
            <div className="flex flex-col items-center">
              <Image
                src="seed.svg"
                alt="seed"
                width={100}
                height={100}
                className="rounded-2xl"
              />
              <p className="text-gray4 label2">씨앗</p>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="plant.svg"
                alt="plant"
                width={100}
                height={100}
                className="rounded-2xl"
              />
              <p className="text-gray4 label2">새싹</p>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="flower.svg"
                alt="flower"
                width={100}
                height={100}
                className="rounded-2xl"
              />
              <p className="text-gray4 label2">꽃</p>
            </div>
          </div>
          <Image
            src="onboarding_garden.svg"
            alt="graden"
            width={248}
            height={170}
            className="rounded-2xl mt-14"
          />
        </div>
        <p className="text-[#707070] body3 pb-9">
          나의 식물 성장을 눈으로 보고,
          <br />
          정원과 리포트에서 마음 기록을 확인하세요
        </p>
      </div>
    ),
    4: (
      <div className="h-full px-8 grid grid-cols-2">
        <div className="flex w-full justify-center">
          <Image
            src="healing1.svg"
            alt="healing"
            width={129}
            height={56}
          />
        </div>
        <div className="flex w-full justify-center">
          <Image
            src="healing2.svg"
            alt="healing"
            width={129}
            height={53}
          />
        </div>

        <div className="flex w-full justify-center">
          <Image
            src="healing3.svg"
            alt="healing"
            width={129}
            height={142}
          />
        </div>
        <div className="flex w-full justify-center">
          <Image
            src="healing4.svg"
            alt="healing"
            width={129}
            height={142}
          />
        </div>
        <div className="flex w-full justify-center">
          <Image
            src="healing5.svg"
            alt="healing"
            width={129}
            height={142}
          />
        </div>
        <div className="flex w-full justify-center">
          <Image
            src="healing6.svg"
            alt="healing"
            width={129}
            height={142}
          />
        </div>
      </div>
    ),
    5: (
      <div className="pt-6 px-8">
        <p className="pb-7 text-[#888888] label3">
          닉네임은 언제든지 바꿀 수 있어요
        </p>
        <input
          className="w-full py-3 px-2 rounded-lg bg-white border border-[#888888] border-solid placeholder:text-[#CCCCCC] placeholder:t3"
          placeholder="닉네임을 입력해주세요"
          onChange={(e) => {
            setNickName(e.target.value);
          }}
        />
      </div>
    ),
  };

  const content = ContentList[status as keyof typeof ContentList];

  return <div className="w-full h-full z-1 text-center">{content}</div>;
};

export default ContentSection;
