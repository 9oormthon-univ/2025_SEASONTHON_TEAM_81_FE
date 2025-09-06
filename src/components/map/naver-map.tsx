'use client';

import useWatchLocation from '@/hooks/useWatchLocation';
import { geolocationOptions } from '@/lib/geolocationOption';
import Script from 'next/script';
import { useEffect, useRef, useState } from 'react';
import PolyLine from './poly-line';

const NaverMap = ({
  activate,
  start,
  end,
}: {
  activate: boolean;
  start: boolean;
  end: boolean;
}) => {
  const { location } = useWatchLocation({ options: geolocationOptions });

  const [usercoords, setUserCoords] = useState<{ lat: number; lng: number }>({
    lat: location?.lat || 37.3595704,
    lng: location?.lng || 127.105399,
  });
  const userPath = useRef<Array<[number, number]>>([]);

  const mapRef = useRef<naver.maps.Map | null>(null);
  const markerRef = useRef<naver.maps.Marker | null>(null);
  const polylineRef = useRef<naver.maps.Polyline | null>(null);

  const startMarkerRef = useRef<naver.maps.Marker | null>(null);
  const endMarkerRef = useRef<naver.maps.Marker | null>(null);

  useEffect(() => {
    if (typeof naver === 'undefined') return;
    if (start && !end) {
      startMarkerRef.current?.setVisible(true);
      startMarkerRef.current?.setPosition(
        new naver.maps.LatLng(usercoords.lat, usercoords.lng)
      );
    }
    if (end) {
      endMarkerRef.current?.setVisible(true);
      endMarkerRef.current?.setPosition(
        new naver.maps.LatLng(usercoords.lat, usercoords.lng)
      );
    }
  }, [start, end, activate]);

  //location 변화시 감지하여 usercoords변화시키기 (거리 기준을 좀 널널하게 둬서 잦은 랜더링을 방지해야하나)
  useEffect(() => {
    if (location) {
      if (
        location === usercoords ||
        (location.lat === 37.3595704 && location.lng === 127.105399)
      ) {
        console.log('same coords, not updating');
      } else {
        setUserCoords({ lat: location.lat, lng: location.lng });
        mapRef.current?.setCenter(usercoords);
      }
    }
  }, [location]);

  //usercoord가 변화되면 그에맞게 marker, polyline변화시키기
  useEffect(() => {
    if (markerRef.current) {
      markerRef.current.setPosition(
        new naver.maps.LatLng(usercoords.lat, usercoords.lng)
      );
    }

    if (activate && polylineRef.current && !end) {
      userPath.current = [
        ...userPath.current,
        [usercoords.lng, usercoords.lat],
      ];
      polylineRef.current.setPath(userPath.current); //처음 좌표는 제외 -> loacation 로딩중에 찍힌 초기값이 들어감
    }
  }, [usercoords]);

  const initializeMap = () => {
    mapRef.current = new naver.maps.Map('basic_map', {
      center: new naver.maps.LatLng(usercoords.lat, usercoords.lng),
      zoom: 17,
    });

    markerRef.current = new naver.maps.Marker({
      position: new naver.maps.LatLng(usercoords.lat, usercoords.lng),
      map: mapRef.current,
      icon: {
        url: '/icon/user_gps.svg',
        size: new naver.maps.Size(47, 47),
        origin: new naver.maps.Point(0, 0),
        anchor: new naver.maps.Point(23.5, 23.5),
      },
    });

    polylineRef.current = PolyLine({
      map: mapRef.current,
      path: userPath.current,
    });

    startMarkerRef.current = new naver.maps.Marker({
      position: new naver.maps.LatLng(usercoords.lat, usercoords.lng),
      map: mapRef.current,
      icon: {
        url: '/icon/map_home.svg',
        size: new naver.maps.Size(24, 24),
        origin: new naver.maps.Point(0, 0),
        anchor: new naver.maps.Point(12, 12),
      },
      visible: false,
    });

    endMarkerRef.current = new naver.maps.Marker({
      position: new naver.maps.LatLng(usercoords.lat, usercoords.lng),
      map: mapRef.current,
      icon: {
        url: '/icon/map_finish.svg',
        size: new naver.maps.Size(24, 24),
        origin: new naver.maps.Point(0, 0),
        anchor: new naver.maps.Point(12, 12),
      },
      visible: false,
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
