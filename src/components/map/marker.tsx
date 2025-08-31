interface MarkerProps {
  position: naver.maps.LatLng;
  map: naver.maps.Map;
}

const Marker = ({ position, map }: MarkerProps) => {
  let _marker: naver.maps.Marker;

  _marker = new naver.maps.Marker({
    position: position,
    map: map,
    //https://navermaps.github.io/maps.js.ncp/docs/naver.maps.Marker.html#~ImageIcon icon props 설명 문서
    icon: {
      url: '',
      size: new naver.maps.Size(24, 35),
      origin: new naver.maps.Point(0, 0),
      anchor: new naver.maps.Point(12, 35),
    },
  });

  return _marker;
};
