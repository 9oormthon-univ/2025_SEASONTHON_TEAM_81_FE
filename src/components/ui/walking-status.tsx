import Image from 'next/image';

interface WalkingStatusProps {
  status?: string;
  missions?: Array<string>;
}

interface MissionProps {
  text?: string;
  enabled?: boolean;
}

const Mission = ({ text, enabled = false }: MissionProps) => {
  return (
    <div className="flex flex-col gap-1 items-center">
      <div className="flex flex-row gap-[0.625rem] items-center">
        {enabled ? (
          <div className="w-4 h-4 rounded-full bg-[#00711E]" />
        ) : (
          <Image
            src="/icon/circle.svg"
            alt="circle"
            width={16}
            height={16}
          />
        )}

        {text !== 'FINISH' && (
          <Image
            src="/icon/union.svg"
            alt="union"
            width={16}
            height={4}
          />
        )}
      </div>
    </div>
  );
};

const WalkingStatus = ({ status, missions }: WalkingStatusProps) => {
  return (
    <div className="flex flex-col gap-[0.15rem]">
      <div className="flex flex-row gap-[0.625rem]">
        <Image
          src="/icon/arrow.svg"
          alt="arrow"
          width={10}
          height={8}
        />
        {missions &&
          missions.map((mission, index) => (
            <Mission
              key={index}
              text={mission}
              enabled={status === mission}
            />
          ))}
        <Image
          src="/icon/flag.svg"
          alt="flag"
          width={7}
          height={14}
          className="ml-1"
        />
      </div>
      <p className="text-[#668666] label6 flex flex-row px-3 justify-between">
        {missions?.map((mission) => (
          <span
            key={mission}
            className={`${mission}`}
          >
            {mission}
          </span>
        ))}
      </p>
    </div>
  );
};

export default WalkingStatus;
