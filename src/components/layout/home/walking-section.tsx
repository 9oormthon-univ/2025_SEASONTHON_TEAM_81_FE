import Image from 'next/image';
import Link from 'next/link';

const WalkingSection = () => {
  return (
    <div className="w-full px-4 py-[0.625rem] rounded-[1.25rem] bg-[#f0f0f0] flex flex-col gap-4 items-start">
      <div className="flex flex-row w-full justify-between items-center pt-2">
        <p className="body5 text-[#414141]">오늘의 산책</p>
        <div className="rounded-[0.78125rem] bg-[#707070] flex flex-row items-center px-3 py-[0.2rem] gap-1">
          <Image
            src="/icon/hourglass.svg"
            alt="hourglass"
            width={12}
            height={16}
          />
          <p className="label7 text-[#ffffff] text-base font-medium">15분</p>
        </div>
      </div>
      <div className="a flex flex-col gap-1">
        <div className="flex flex-row gap-[0.625rem] items-center">
          <Image
            src="/icon/arrow.svg"
            alt="arrow"
            width={10}
            height={8}
            className="mr-2"
          />
          <Image
            src="/icon/circle.svg"
            alt="circle"
            width={16}
            height={16}
          />
          <Image
            src="/icon/union.svg"
            alt="union"
            width={16}
            height={4}
          />
          <Image
            src="/icon/circle.svg"
            alt="circle"
            width={16}
            height={16}
          />
          <Image
            src="/icon/union.svg"
            alt="union"
            width={16}
            height={4}
          />
          <Image
            src="/icon/circle.svg"
            alt="circle"
            width={16}
            height={16}
          />
          <Image
            src="/icon/union.svg"
            alt="union"
            width={16}
            height={4}
          />
          <Image
            src="/icon/circle.svg"
            alt="circle"
            width={16}
            height={16}
          />
          <Image
            src="/icon/flag.svg"
            alt="flag"
            width={7}
            height={14}
            className="ml-2"
          />
        </div>
        <p className="flex flex-row justify-around label7 text-[#668668]">
          <span>start</span>
          <span className="px-4" />
          <span>end</span>
        </p>
      </div>
      <Link
        href="/walking"
        className="w-full rounded-[0.3125rem] bg-[#2AB943] py-[0.3rem] flex flex-row justify-center items-center"
      >
        <p className="label2 text-[#F5F8F6]">산책 시작하기</p>
      </Link>
    </div>
  );
};

export default WalkingSection;
