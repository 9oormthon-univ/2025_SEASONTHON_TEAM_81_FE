interface MarkerProps {
  position: naver.maps.LatLng;
  map: naver.maps.Map;
}

const Marker = ({ position, map }: MarkerProps) => {
  const _marker = new naver.maps.Marker({
    position: position,
    map: map,
    //https://navermaps.github.io/maps.js.ncp/docs/naver.maps.Marker.html#~ImageIcon icon props 설명 문서
    icon: {
      url: './public/icon/user_gps.png',
      size: new naver.maps.Size(47, 47),
      origin: new naver.maps.Point(0, 0),
      anchor: new naver.maps.Point(23.5, 23.5),
    },
  });

  return _marker;
};
