import calculatePercentage from '@/lib/percentage';
import Image from 'next/image';

interface GrowBarGraphProps {
  grow: number;
}

const GrowBarGraph = ({ grow }: GrowBarGraphProps) => {
  const growPercentage = calculatePercentage(150, grow);

  return (
    <div className="absolute bottom-0 left-[1.5rem] flex flex-col items-center justify-center">
      <div className="">
        <div className="relative flex flex-col items-center h-45 w-5 rounded-[1.25rem] bg-white">
          <div
            className="absolute bottom-0 w-[0.625rem] mb-2 max-h-41 rounded-[1.25rem] bg-gray5"
            style={{ height: `${growPercentage}%` }}
          />
        </div>
      </div>
      <div className="absolute flex flex-col items-center justify-between top-0 left-0 w-1/3 pb-10 h-full">
        <Image
          src="/icon/graph_flower.svg"
          alt="flower"
          width={14}
          height={14}
        />
        <Image
          src="/icon/graph_plant.svg"
          alt="plant"
          width={14}
          height={14}
        />
        <Image
          src="/icon/graph_seed.svg"
          alt="seed"
          width={14}
          height={14}
        />
      </div>
      <div className="flex flex-col items-center justify-center label7 text-center text-[#707070]">
        <p>성장 포인트</p>
        <p>{grow}</p>
      </div>
    </div>
  );
};

export default GrowBarGraph;
