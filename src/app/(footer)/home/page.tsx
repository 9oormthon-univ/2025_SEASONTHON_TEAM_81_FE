'use client';

import AppHeader from '@/components/layout/app-header';
import HomeWalkingSection from '@/components/layout/home/home-walking-section';
import WeeklyReport from '@/components/layout/home/weekly-report';
import GrowBarGraph from '@/components/ui/grow-bar-graph';
import StretchingModal from '@/components/ui/modal/stretching-modal';
import useModalStore from '@/store/useModalStore';
import useTokenStore from '@/store/useTokenStore';
import useUserStore from '@/store/useUserStore';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const HeaderContent = () => {
  return (
    <div className="w-auto h-full flex flex-row">
      <Image
        src="/icon/bell.svg"
        width={21}
        height={24}
        alt="알림"
      />
    </div>
  );
};

const HomePage = () => {
  const gradientStyle = {
    background:
      'linear-gradient(180deg, rgba(245, 248, 246, 0.30) 29.33%, rgba(95, 185, 77, 0.30) 100%)',
  };

  interface WeeklyDataObject {
    yesterdayWalkSuccess: boolean;
    weeklyWalkCount: number;
    weeklyDistanceMeters: number;
    weeklyDurationMinutes: number;
  }

  const { name } = useUserStore();
  const { openModal } = useModalStore();
  const { token, setToken } = useTokenStore();
  const { data: session, status } = useSession();
  const [weeklyData, setWeeklyData] = useState<WeeklyDataObject | null>(null);
  const [growPoint, setGrowPoint] = useState<number | null>(null);

  useEffect(() => {
    if (token !== '') {
      const fetchWeeklyData = async () => {
        try {
          const response = await fetch(
            'https://api.mindwalk.p-e.kr/api/reports/weekly-summary',
            {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
              },
            }
          );

          const data = await response.json();
          console.log('Weekly Data:', data);

          if (data) {
            setWeeklyData(data.result);
          }
        } catch (error) {
          console.error('Error:', error);
        }
      };

      const fetchGrowPoint = async () => {
        try {
          const response = await fetch(
            'https://api.mindwalk.p-e.kr/api/gardens',
            {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
              },
            }
          );

          const data = await response.json();
          console.log('Grow Point Data:', data.result);

          if (data) {
            setGrowPoint(data.result.todayGrowth.todayGrowthPoint);
          }
        } catch (error) {
          console.error('Error:', error);
        }
      };

      fetchWeeklyData();
      fetchGrowPoint();
    }
  }, [token]);

  useEffect(() => {
    if (status === 'authenticated' && session?.user?.name) {
      const fetchLogin = async () => {
        try {
          const response = await fetch(
            'https://api.mindwalk.p-e.kr/api/auth/login',
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ oauthId: session?.user?.name || '' }),
            }
          );

          const data = await response.json();

          if (data) {
            setToken(data.result.accessToken);
          }
        } catch (error) {
          console.error('Error:', error);
        }
      };

      fetchLogin();
    }
  }, [session, status]);

  return (
    <div className="w-full h-full flex flex-col">
      <div
        className="w-full flex flex-col grow-10 pt-16 p1b-4 relative"
        style={gradientStyle}
      >
        <AppHeader content={<HeaderContent />} />
        <div className="flex flex-row p-4 gap-2">
          <div className="pt-1">
            <Image
              src="/icon/user_green.svg"
              alt="user"
              width={20}
              height={20}
              onClick={() => openModal(<StretchingModal />)}
            />
          </div>
          <div className="flex flex-col">
            <p className="t2 text-[#414141]">
              {name}님의 4번째 식물,
              <br />
              해바라기
            </p>
            <p className="label3 text-[#707070]">
              산책을 통해 무럭무럭 자라나고 있어요
            </p>
          </div>
        </div>
        <div className="w-full h-full flex-row relative">
          <GrowBarGraph grow={growPoint !== null ? growPoint : 75} />
          <div className="flex flex-row justify-end items-center px-2 absolute bottom-0 right-[1.5rem] w-25 h-4 rounded-[1.25rem] bg-[#BFDDBF] opacity-80">
            <Image
              src="/icon/edit.svg"
              width={9}
              height={10}
              alt="편집"
              className=""
            />
          </div>
        </div>
      </div>
      <div className="px-4 pt-5 grow-1 flex flex-col gap-4 bg-white">
        <p className="t3">{name}님, 오늘은 가볍게 걸어볼까요?</p>
        <HomeWalkingSection />
        <p className="t3 pt-2">이번 주도 너무 잘하고 있어요!</p>
        <div className="grid grid-cols-3 gap-4 px-4 space-between items-center">
          <WeeklyReport
            url="/icon/weekly-foot.svg"
            text1="어제 산책"
            text2={weeklyData?.yesterdayWalkSuccess ? '성공' : '실패'}
          />
          <WeeklyReport
            url="/icon/weekly-calander.svg"
            text1="이번 주 산책"
            text2={weeklyData?.weeklyDurationMinutes + '분'}
          />
          <WeeklyReport
            url="/icon/weekly-plant.svg"
            text1="이번 주 산책"
            text2={weeklyData?.weeklyWalkCount + '회'}
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
