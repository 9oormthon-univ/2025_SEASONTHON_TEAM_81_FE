'use client';

import Script from 'next/script';
import { useEffect, useRef, useState } from 'react';

const NaverMap = () => {
  const [usercoords, setUserCoords] = useState<{ lat: number; lng: number }>({
    lat: 37.3595704,
    lng: 127.105399,
  });
  const mapRef = useRef<naver.maps.Map | null>(null);
  const markerRef = useRef<naver.maps.Marker | null>(null);

  // useEffect(() => {
  //   if (!window.naver) return;
  //   initializeMap();
  // }, [usercoords]);

  const initializeMap = () => {
    mapRef.current = new naver.maps.Map('basic_map', {
      center: new naver.maps.LatLng(usercoords.lat, usercoords.lng),
      zoom: 15,
    });

    markerRef.current = new naver.maps.Marker({
      position: new naver.maps.LatLng(usercoords.lat, usercoords.lng),
      map: mapRef.current,
    });

    naver.maps.Event.addListener(mapRef.current, 'click', () => {
      //이유는 모르겠지만 y가 lat, x가 lng
      setUserCoords({
        lat: markerRef.current?.getPosition().y || usercoords.lat,
        lng: (markerRef.current?.getPosition().x || usercoords.lng) + 0.001,
      });
      console.log('Map clicked, updated coords:', usercoords);
      console.log('log marker position:', markerRef.current?.getPosition());
    });
  };

  useEffect(() => {
    if (markerRef.current) {
      markerRef.current.setPosition(
        new naver.maps.LatLng(usercoords.lat, usercoords.lng)
      );
      console.log('Marker position updated:', usercoords);
    }
  }, [usercoords]);

  return (
    <>
      <Script
        type="text/javascript"
        strategy="afterInteractive"
        src={`https://oapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=${process.env.NEXT_PUBLIC_NAVER_CLIENT_ID}&submodules=drawing`}
        onLoad={initializeMap}
      />
      <div
        id="basic_map"
        className="w-full h-full"
      />
    </>
  );
};

export default NaverMap;
