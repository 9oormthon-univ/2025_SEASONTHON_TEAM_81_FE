'use client';
import PageControl from '@/components/ui/page-control';
import React from 'react';

const Onboarding2Page = () => {
  const [status, setStatus] = React.useState(1);
  const pageList = [];

  return (
    <div className="bg-[#F3F3EC] w-full h-full pt-6 pb-10 gap-4 flex flex-col justify-between items-center">
      <PageControl
        total={4}
        current={status}
      />
      <p className="text-center">
        하루를 버텨내느라 마음을 챙길
        <br />
        여유조차 없진 않으셨나요?
      </p>
      <div className="grow" />
      <p className="pb-7 text-center">
        지친 마음을 가볍게 만들어줄
        <br />
        작은 발걸음, 오늘도 곁에서 함께할게요
      </p>
      <div className="w-full h-auto flex flex-row justify-center gap-4">
        <button
          className="h-12 text-black bg-gray-500 rounded-lg text-center"
          onClick={() => setStatus(status - 1)}
        >
          건너뛰기
        </button>
        <button
          className="h-12 text-white bg-primary rounded-lg"
          onClick={() => setStatus(status + 1)}
        >
          다음
        </button>
      </div>
    </div>
  );
};

export default Onboarding2Page;
