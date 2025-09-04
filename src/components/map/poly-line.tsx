interface PolyLineProps {
  map: naver.maps.Map;
  path: Array<[number, number]>;
}

//https://navermaps.github.io/maps.js.ncp/docs/naver.maps.Polyline.html#Polyline__anchor 확인하여 option 작성
const PolyLine = ({ map, path }: PolyLineProps) => {
  const polyline = new naver.maps.Polyline({
    map: map,
    path: path.map((coord) => new naver.maps.LatLng(coord[1], coord[0])),
    strokeWeight: 8,
    strokeColor: '#4DB960',
    strokeStyle: 'solid',
    strokeLineCap: 'round',
    strokeLineJoin: 'round',
  });

  return polyline;
};

export default PolyLine;
