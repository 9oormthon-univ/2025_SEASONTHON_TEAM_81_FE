'use client';
import ContentSection from '@/components/layout/onboarding/content-section';
import FooterSection from '@/components/layout/onboarding/footer-section';
import TopSection from '@/components/layout/onboarding/top-section';
import Image from 'next/image';
import React from 'react';

const OnboardingPage = () => {
  const [status, setStatus] = React.useState(1);

  return (
    <div className="bg-[#F3F3EC] w-full h-full pt-6 pb-10 gap-4 flex flex-col justify-between items-center relative">
      {/*top section*/}
      <TopSection status={status} />
      {/*content section*/}
      <ContentSection status={status} />
      {/*footer section*/}
      <FooterSection
        status={status}
        setStatus={setStatus}
      />
      <Image
        src="/onboarding_bg1.svg"
        alt="bg"
        layout="fill"
        objectFit="cover"
        className={`absolute z-0 opacity-80 ${status === 1 ? '' : 'hidden'}`}
      />
      <Image
        src="/onboarding_bg2.svg"
        alt="bg"
        layout="fill"
        objectFit="cover"
        className={`absolute z-0 opacity-80 ${status === 2 ? '' : 'hidden'}`}
      />
    </div>
  );
};

export default OnboardingPage;
