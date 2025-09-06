'use client';

import AppHeader from '@/components/layout/app-header';
import HealingContent from '@/components/layout/walking/healing-content';
import ResultLayout from '@/components/layout/walking/result-layout';
import TopBar from '@/components/layout/walking/top-bar';
import NaverMap from '@/components/map/naver-map';
import NiceModal from '@/components/ui/modal/nice-modal';
import StretchingModal from '@/components/ui/modal/stretching-modal';
import { useTimer } from '@/hooks/useTimer';
import useModalStore from '@/store/useModalStore';
import useTokenStore from '@/store/useTokenStore';
import useWalkingStore from '@/store/useWalkingStore';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const HeaderContent = ({ location }: { location: string }) => {
  return (
    <div className="flex flex-row items-center gap-2">
      <p className="text-black1 label4">{location}</p>
      <Image
        src="/icon/gps.svg"
        alt="gps"
        width={24}
        height={24}
      />
    </div>
  );
};

const StopButton = ({
  href,
  activate,
  onClick,
}: {
  href: string;
  activate: boolean;
  onClick: () => void;
}) => {
  return (
    <Link
      href={href}
      className="p-4 bg-gray2 text-center text-gray4 body5 rounded-lg"
      onClick={onClick}
    >
      {activate ? '그만하기' : '뒤로가기'}
    </Link>
  );
};

const StartButton = ({
  activate,
  onClick,
  finish = false,
}: {
  activate: boolean;
  onClick: () => void;
  finish?: boolean;
}) => {
  return (
    <button
      className="py-4 flex-grow rounded-lg bg-primary text-white text-center body5"
      onClick={onClick}
    >
      <div className="flex flex-row gap-2 justify-center">
        {finish ? (
          <>
            <Link
              href="/home"
              className="flex flex-row gap-2 justify-center"
            >
              <Image
                src="/icon/button_home.svg"
                alt="home"
                width={24}
                height={24}
              />
              <span>홈으로</span>
            </Link>
          </>
        ) : activate ? (
          <>
            <Image
              src="/icon/pause.svg"
              alt="start"
              width={24}
              height={24}
            />
            <span>일시 정지</span>
          </>
        ) : (
          <>
            <Image
              src="/icon/start.svg"
              alt="start"
              width={24}
              height={24}
            />
            <span>산책 시작</span>
          </>
        )}
      </div>
    </button>
  );
};

const WalkingPage = () => {
  const [activate, setActivate] = useState(false);
  const [geocode, setGeocode] = useState<{ lat: number; lng: number } | null>(
    null
  );
  const [location, setLocation] = useState<string>('');
  const [progress, setProgress] = useState<number>(0);
  const [status, setStatus] = useState<number>(0);
  const [start, setStart] = useState<boolean>(false);
  const [end, setEnd] = useState<boolean>(false);

  const { walkTime, missions } = useWalkingStore();
  const { openModal } = useModalStore();
  const { token } = useTokenStore();

  //지나간 시간을 초단위로, 뒤 props에는 시간이 지났을때 실행할 함수
  const { timeLeft, setIsRunning } = useTimer(20, () => {
    console.log('타이머 종료');
    return;
  });

  const handleRunning = (e: boolean) => {
    setIsRunning(e);
  };

  //미션의 갯수에 비례하여 timeleft에 따라 status 변화
  const calculStatus = () => {
    const totalMissions = missions.length - 1;
    const completedMissions = Math.floor((progress / 100) * totalMissions);
    return completedMissions;
  };

  //status 가 변하면 misson을 띄움
  useEffect(() => {
    if (status === 0 || status === missions.length - 1) return;
    const mission = missions[status];

    //산책끝 처리
    if (status === mission.length - 1) return;

    if (mission === '스트레칭') {
      openModal(<StretchingModal />);
    } else if (mission === '칭찬하기') {
      openModal(<NiceModal />);
    }
  }, [status]);

  useEffect(() => {
    setStatus(calculStatus());
    if (progress === 100) setEnd(true);
  }, [progress]);

  //타이머가 변함을 useState로 progress로 저장
  useEffect(() => {
    setProgress(Math.floor((timeLeft / 20) * 100));
  }, [timeLeft]);

  //activate가 변함을 감지하여 타이머 시작/멈춤
  useEffect(() => {
    console.log('activate', activate);
    setStart(true);
    handleRunning(activate);
  }, [activate]);

  useEffect(() => {
    if (end) {
      const postWalking = async () => {
        try {
          const response = await fetch(
            'https://api.mindwalk.p-e.kr/api/missions/complete',
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
              },
              body: JSON.stringify({
                steps: 0,
                distanceMeters: 0,
                actualDurationMinutes: walkTime / 60,
              }),
            }
          );
          const data = await response.json();
          console.log('Post Walking Data:', data);
        } catch (error) {
          console.error('Error:', error);
        }
      };
      postWalking();
    }
  }, [end]);

  //처음 진입시 사용자 위치 받아서 header에 뿌려주기
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setGeocode({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
        console.log('now location geocode', geocode);
      },
      (err) => {
        console.error(err);
      }
    );
  }, []);

  //처음에 load한 위치 오면 reverse geocoding api로 주소 받아오기
  useEffect(() => {
    console.log('geocode changed', geocode);
    const response = async () => {
      console.log('fetch location data');
      if (geocode) {
        const res = await fetch(
          `/api/geocode?coords=${geocode.lng},${geocode.lat}&output=json`
        );
        const data = await res.json();
        console.log(data);

        if (data) {
          setLocation(
            data.results[0].region.area2.name +
              ' ' +
              data.results[0].region.area3.name
          );

          console.log(location);
        }
        return;
      }
    };
    response();
  }, [geocode]);

  return (
    <div className="w-full h-full flex flex-col relative">
      <AppHeader content={<HeaderContent location={location} />} />
      <TopBar process={progress} />
      <ResultLayout state={progress === 100} />
      <NaverMap
        activate={activate}
        start={start}
        end={end}
      />
      <div className="px-4 pt-6 pb-4 rounded-t-lg absolute bottom-0 bg-white w-full">
        <HealingContent
          status={calculStatus()}
          missions={missions}
        />
        <div className="w-full flex flex-row px-4 mt-[0.7rem] gap-2 justify-between">
          <StopButton
            href={activate ? '/home' : '/home'}
            activate={activate}
            onClick={() => {}}
          />
          <StartButton
            activate={activate}
            finish={progress === 100}
            onClick={() => {
              setActivate(!activate);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default WalkingPage;
