import Image from 'next/image';

interface WalkingStatusProps {
  status?: number;
  missions?: Array<string>;
}

interface MissionProps {
  text?: string;
  enabled?: boolean;
}

const Mission = ({ text, enabled = false }: MissionProps) => {
  return (
    <>
      {enabled ? (
        <div className="w-4 h-4 rounded-full bg-[#00711E] flex-shrink-0" />
      ) : (
        <Image
          src="/icon/circle.svg"
          alt="circle"
          width={16}
          height={16}
        />
      )}
      {text !== 'FINISH' ? (
        <div className="h-1 w-full grow bg-[#9aba9a]" />
      ) : null}
    </>
  );
};

const WalkingStatus = ({ status, missions }: WalkingStatusProps) => {
  return (
    <div className="w-full px-6 flex flex-col gap-[0.15rem]">
      <div className="flex flex-row gap-[0.625rem] items-center">
        <Image
          src="/icon/arrow.svg"
          alt="arrow"
          width={20}
          height={20}
        />
        <div className="flex flex-row w-full items-center">
          {missions &&
            missions.map((mission, index) => (
              <Mission
                key={index}
                text={mission}
                enabled={status === index}
              />
            ))}
        </div>
        <Image
          src="/icon/flag.svg"
          alt="flag"
          width={20}
          height={20}
          className="ml-1"
        />
      </div>
      <p className="text-[#668666] label6 flex flex-row px-6 justify-between">
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
