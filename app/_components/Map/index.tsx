"use client";
import { useEffect, useRef, useMemo } from "react";
import { Loader } from "@googlemaps/js-api-loader";
function Map({ address }) {
  const mapRef = useRef(null);

  const loader = useMemo(
    () =>
      new Loader({
        apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
        version: "weekly",
      }),
    []
  );

  useEffect(() => {
    if (!mapRef.current) return;
    loader.load().then(() => {
      const map = new google.maps.Map(mapRef.current, {
        center: address.coordinates,
        zoom: 20,
      });
      const position = { lat: 1.3010307, lng: 103.859402 };
      new google.maps.Geocoder().geocode((results, status) => {
        if (status === "OK") {
          map.setCenter(results[0].geometry.location);
          new google.maps.Marker({
            map,
            position: results[0].geometry.location,
          });
        } else {
          console.error(
            "Geocode was not successful for the following reason: " + status
          );
        }
      });
    });
  }, [loader, address]);
  return <div style={{ height: "400px" }} ref={mapRef} />;
}
export default Map;
