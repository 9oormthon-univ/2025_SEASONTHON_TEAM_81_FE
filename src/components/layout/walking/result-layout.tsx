'use client';

import useUserStore from '@/store/useUserStore';
import useWalkingStore from '@/store/useWalkingStore';

const ResultLayout = ({ state }: { state: boolean }) => {
  if (!state) return null;

  const { walkTime } = useWalkingStore();
  const { name } = useUserStore();
  return (
    <div className="z-1 absolute top-45 w-full flex flex-col gap-2 text-center items-center">
      <p className="body4">오늘 {name}님이 걸으신 산책로에요</p>
      <p className="flex flex-row gap-1">
        <span className="label5">이동거리</span>
        <span className="label1 px-1">{walkTime / 600}km</span>
        <span className="label5">이동시간</span>
        <span className="label1">{walkTime / 60}분</span>
      </p>
    </div>
  );
};

export default ResultLayout;
