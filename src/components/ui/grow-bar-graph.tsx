import calculatePercentage from '@/lib/percentage';

interface GrowBarGraphProps {
  grow: number;
}

const GrowBarGraph = ({ grow }: GrowBarGraphProps) => {
  const growPercentage = calculatePercentage(150, grow);

  return (
    <div className="absolute bottom-0 left-[1.5rem] flex flex-col items-center justify-center">
      <div className="">
        <div className="relative flex flex-col items-center h-45 w-5 rounded-[1.25rem] bg-[#BFDDBF]">
          <div
            className="absolute bottom-0 w-[0.625rem] mb-2 max-h-41 rounded-[1.25rem] bg-[#4DB960]"
            style={{ height: `${growPercentage}%` }}
          />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center label7 text-center text-[#707070]">
        <p>{grow}</p>
        <p>성장 포인트</p>
      </div>
    </div>
  );
};

export default GrowBarGraph;
