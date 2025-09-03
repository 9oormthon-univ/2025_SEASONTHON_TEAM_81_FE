import PageControl from '@/components/ui/page-control';

interface TopSectionProps {
  status: number;
}

const TitleList = {
  1: (
    <p>
      하루를 버텨내느라 마음을 챙길
      <br />
      여유가 없진 않으셨나요?
    </p>
  ),
  2: (
    <p>
      가볍게 산책하는 동안,
      <br />
      마음도 천천히 풀릴거에요
    </p>
  ),
  3: (
    <p>
      걷는 순간들이 모여,
      <br />
      나도 모르게 단단해질거에요
    </p>
  ),
  4: (
    <p>
      걷는 동안 편안하게 감싸줄
      <br />
      힐링을 준비했어요
    </p>
  ),
  5: <p>어떻게 불러드리면 좋을까요?</p>,
};

const TopSection = ({ status }: TopSectionProps) => {
  const TopsectionTitle = TitleList[status as keyof typeof TitleList];

  return (
    <div className="w-full pt-13">
      {status === 5 ? (
        <p className="pb-2 body3 text-center text-[#888888]">
          이제 마지막이에요!
        </p>
      ) : (
        <PageControl
          total={4}
          current={status}
        />
      )}
      <div className="pt-5 t1 text-center">{TopsectionTitle}</div>
    </div>
  );
};

export default TopSection;
