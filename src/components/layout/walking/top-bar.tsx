const TopBar = ({ process }: { process: number }) => {
  const title = () => {
    if (titleNumber() === 100) return '오늘도 끝까지 해냈어요. 정말 멋져요.';
    else if (titleNumber() === 80)
      return '여기까지 잘 왔어요. 조금만 더 이어가요.';
    else if (titleNumber() === 60)
      return '절반을 넘겼어요. 지금처럼만 걸으면 됩니다.';
    else if (titleNumber() === 40)
      return '안정적으로 가고 있어요. 한 걸음씩 이어가요.';
    else if (titleNumber() === 20)
      return '20% 채웠어요. 호흡을 편하게, 잘하고 있어요.';
    else return '좋은 출발이에요. 천천히 리듬을 잡아볼까요?';
  };

  const titleNumber = () => {
    if (process == 100) return 100;
    else if (process >= 80) return 80;
    else if (process >= 60) return 60;
    else if (process >= 40) return 40;
    else if (process >= 20) return 20;
    else if (process >= 0) return 0;
    else return 0;
  };
  return (
    <div className="w-full absolute top-20 z-1">
      <div className="mx-4 px-4 py-3 rounded-xl bg-white flex flex-col gap-3">
        <p className="body4">{title()}</p>
        <div className="h-6 w-full">
          <div className="w-full h-full px-1 rounded-[1.75rem] bg-gray1 relative">
            <div
              className="absolute top-1 h-4 max-w-89 z-1 rounded-[1.75rem] bg-gray5"
              style={{ width: `${titleNumber()}%` }}
            />
            <span className="absolute label1 z-1 right-4">
              {titleNumber()}%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
