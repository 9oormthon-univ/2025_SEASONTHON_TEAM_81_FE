'use client';

import { useEffect, useState } from 'react';
import { useMap, useMapsLibrary } from '@vis.gl/react-google-maps';

const Directions = () => {
  const map = useMap();
  const routesLibrary = useMapsLibrary('routes');
  const [directionsService, setDirectionsService] =
    useState<google.maps.DirectionsService>();
  const [directionsRenderer, setDirectionsRenderer] =
    useState<google.maps.DirectionsRenderer>();
  const [routes, setRoutes] = useState<google.maps.DirectionsRoute[]>([]);
  const [routeIndex, setRouteIndex] = useState(0);
  const selected = routes[routeIndex];
  const leg = selected?.legs[0];

  // Initialize directions service and renderer
  useEffect(() => {
    if (!routesLibrary || !map) return;
    setDirectionsService(new routesLibrary.DirectionsService());
    setDirectionsRenderer(
      new routesLibrary.DirectionsRenderer({
        draggable: true, // Only necessary for draggable markers
        map,
      })
    );
  }, [routesLibrary, map]);

  // Add the following useEffect to make markers draggable
  useEffect(() => {
    if (!directionsRenderer) return;

    // Add the listener to update routes when directions change
    const listener = directionsRenderer.addListener(
      'directions_changed',
      () => {
        const result = directionsRenderer.getDirections();
        if (result) {
          setRoutes(result.routes);
        }
      }
    );

    return () => google.maps.event.removeListener(listener);
  }, [directionsRenderer]);

  // Use directions service
  useEffect(() => {
    if (!directionsService || !directionsRenderer) return;

    directionsService
      .route({
        origin: '경기도 고양시 일산서구 킨텍스로 217-60',
        destination: '경기도 고양시 일산서구 대화동 2605',
        travelMode: google.maps.TravelMode.TRANSIT,
        provideRouteAlternatives: true,
      })
      .then((response) => {
        directionsRenderer.setDirections(response);
        setRoutes(response.routes);
      });

    return () => directionsRenderer.setMap(null);
  }, [directionsService, directionsRenderer]);

  // Update direction route
  useEffect(() => {
    if (!directionsRenderer) return;
    directionsRenderer.setRouteIndex(routeIndex);
  }, [routeIndex, directionsRenderer]);

  if (!leg) return null;

  return <></>;
};

export default Directions;
