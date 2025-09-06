import WalkingStatus from '@/components/ui/walking-status';

interface HealingContentProps {
  status: number;
  missions: string[];
}

const HealingContent = ({ status, missions }: HealingContentProps) => {
  const footerContent = () => {
    if (status === 0) {
      return '가은님에게 꼭 맞는 힐링들로 산책 코스를 만들었어요';
    } else if (status === missions.length - 2) {
      return '다음 체크포인트는 마지막, FINISH입니다';
    } else {
      return '다음 체크포인트로 이동해볼까요?';
    }
  };
  return (
    <div className="w-full px-4 py-[0.625rem] rounded-[1.25rem] bg-[#f0f0f0] flex flex-col gap-2 items-start">
      <div className="flex flex-row w-full justify-between items-center">
        <p className="body5 text-[#414141]">오늘의 힐링 콘텐츠</p>
      </div>
      <div className="w-full flex flex-col items-center">
        <WalkingStatus
          status={status}
          missions={missions}
        />
      </div>
      <p className="label4 w-full text-center text-black1">{footerContent()}</p>
    </div>
  );
};

export default HealingContent;
