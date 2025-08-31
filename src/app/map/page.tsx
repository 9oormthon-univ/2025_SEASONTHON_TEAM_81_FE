'use client';

import NaverMap from '@/components/map/naver-map';

const MapPage = () => {
  return (
    <>
      <div className="flex flex-col w-full h-full">
        <h1>Map Page</h1>
        <NaverMap />
        <p>끄으읕</p>
      </div>
    </>
  );
};

export default MapPage;
