'use client';

import useWatchLocation from '@/hooks/useWatchLocation';
import { geolocationOptions } from '@/lib/geolocationOption';
import Script from 'next/script';
import { useEffect, useRef, useState } from 'react';
import PolyLine from './poly-line';

const NaverMap = () => {
  const { location } = useWatchLocation({ options: geolocationOptions });
  console.log('now location', location);

  const [usercoords, setUserCoords] = useState<{ lat: number; lng: number }>({
    lat: 37.3595704,
    lng: 127.105399,
  });

  const mapRef = useRef<naver.maps.Map | null>(null);
  const markerRef = useRef<naver.maps.Marker | null>(null);
  const polylineRef = useRef<naver.maps.Polyline | null>(null);

  //location 변화시 감지하여 usercoords변화시키기 (거리 기준을 좀 널널하게 둬서 잦은 랜더링을 방지해야하나)
  useEffect(() => {
    if (location) {
      if (location === usercoords) {
        console.log('same coords, not updating');
      } else {
        setUserCoords({ lat: location.lat, lng: location.lng });
        mapRef.current?.setCenter(usercoords);
      }
    }
  }, [location]);

  //usercoord가 변화되면 그에맞게 marker를 옮겨줌
  useEffect(() => {
    if (markerRef.current) {
      markerRef.current.setPosition(
        new naver.maps.LatLng(usercoords.lat, usercoords.lng)
      );
      console.log('Marker position updated:', usercoords);
    }
  }, [usercoords]);

  const initializeMap = () => {
    mapRef.current = new naver.maps.Map('basic_map', {
      center: new naver.maps.LatLng(usercoords.lat, usercoords.lng),
      zoom: 15,
    });

    markerRef.current = new naver.maps.Marker({
      position: new naver.maps.LatLng(usercoords.lat, usercoords.lng),
      map: mapRef.current,
    });

    // Polyline 생성
    polylineRef.current = PolyLine({
      map: mapRef.current,
      path: [
        [126.8323029, 37.6346515],
        [126.8320124, 37.6346832],
        [126.8310434, 37.6348129],
        [126.8308902, 37.6348319],
        [126.8307393, 37.63485],
        [126.8290281, 37.6350818],
        [126.8289294, 37.635093],
        [126.8279481, 37.6351964],
        [126.8273228, 37.6352821],
        [126.8271697, 37.6353002],
        [126.8260419, 37.635437],
        [126.8258479, 37.6354549],
        [126.8255508, 37.6348475],
        [126.8252136, 37.6341587],
        [126.8248564, 37.6334311],
        [126.8248219, 37.6333597],
        [126.8248052, 37.6333199],
        [126.8247719, 37.6332431],
      ],
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
