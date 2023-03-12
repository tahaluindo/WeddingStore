import {useEffect, useRef} from 'react';
import {Loader} from '@googlemaps/js-api-loader';

function MapsComponents() {
    // console.log( `Test Key: ${process.env.NEXT_PUBLIC_API_KEY}`)
  const googlemap = useRef(null);
  useEffect(() => {
    const loader = new Loader({
      apiKey: process.env.NEXT_PUBLIC_API_KEY,
      version: 'weekly',
    });
    let map; 
    loader.load().then(() => {
      const google = window.google;
      map = new google.maps.Map(googlemap.current, {
        center: {lat: -34.397, lng: 150.644},
        zoom: 8,
      });
    });
  });
  return (
    <div id="map" ref={googlemap} />
  );
}
export default MapsComponents;