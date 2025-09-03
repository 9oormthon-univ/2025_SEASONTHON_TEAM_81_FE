interface ContentSectionProps {
  status: number;
}

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
      <div className="flex-grow" />
      <p className="text-[#707070] body3 pb-9">
        작은 걸음이 쌓이면 내 정원에서
        <br />
        마음 성장을 먹은 식물들이 자라나요
      </p>
    </div>
  ),
  3: (
    <div className="h-full flex flex-col">
      <div className="flex-grow" />
      <p className="text-[#707070] body3 pb-9">
        나의 식물 성장을 눈으로 보고,
        <br />
        정원과 리포트에서 마음 기록을 확인하세요
      </p>
    </div>
  ),
  4: (
    <div>
      <></>
    </div>
  ),
  5: (
    <div className="pt-6 px-8">
      <p className="pb-7 text-[#888888] label3">
        닉네임은 언제든지 바꿀 수 있어요
      </p>
      <input
        className="w-full h-13 rounded-lg bg-white border border-[#888888] border-solid placeholder:text-[#CCCCCC] placeholder:t3 placeholder:px-4"
        placeholder="닉네임을 입력해주세요"
      />
    </div>
  ),
};

const ContentSection = ({ status }: ContentSectionProps) => {
  const content = ContentList[status as keyof typeof ContentList];
  return <div className="w-full h-full text-center">{content}</div>;
};

export default ContentSection;
