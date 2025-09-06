import Image from 'next/image';

interface WeeklyReportProps {
  url: string;
  text1: string;
  text2: string;
}

const WeeklyReport = ({ url, text1, text2 }: WeeklyReportProps) => {
  return (
    <div className="w-full flex-col items-start px-3 py-2 bg-gray1 rounded-2xl">
      <p className="label2 text-gray5">{text1}</p>
      <p className="label2 text-gray5">{text2}</p>
      <div className="w-full flex flex-col items-end">
        <Image
          src={url}
          alt="Weekly Report"
          width={40}
          height={40}
        />
      </div>
    </div>
  );
};

export default WeeklyReport;
