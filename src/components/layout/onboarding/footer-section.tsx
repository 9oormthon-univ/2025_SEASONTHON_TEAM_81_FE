import Link from 'next/link';

interface FooterSectionProps {
  status: number;
  setStatus: React.Dispatch<React.SetStateAction<number>>;
}

const FooterSection = ({ status, setStatus }: FooterSectionProps) => {
  return (
    <>
      {status === 5 ? (
        <div className="w-full px-8 flex flex-col">
          <p className="pb-3 label3 text-center text-[#888888]">
            나를 위한 작은 발걸음, 지금 시작해봐요🚶‍♀️
          </p>
          <Link href="/">
            <button className="w-full h-12 text-white bg-primary rounded-lg">
              마음산책 시작하기
            </button>
          </Link>
        </div>
      ) : (
        <div className="w-full h-auto px-8 flex flex-row justify-center gap-4">
          <button
            className="h-12 body5 px-4 py-3 text-[#8f8f8f] bg-[#d9d9d9] rounded-lg text-center"
            onClick={() => setStatus(status - 1)}
          >
            건너뛰기
          </button>
          <button
            className="flex-grow h-12 py-3 body4 text-white bg-primary rounded-lg"
            onClick={() => setStatus(status + 1)}
          >
            다음
          </button>
        </div>
      )}
    </>
  );
};

export default FooterSection;
