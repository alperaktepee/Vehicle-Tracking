import React from "react";
import { useGoogleMaps } from "react-hook-google-maps";

const ItemKonum = (props) => {
  const pos = { lat: props.lat, lng: props.lng };

  const { ref, map, google } = useGoogleMaps(
    "AIzaSyC4Z5Qz97EWcoCczNn2IcYvaYG0L9pe6Rk",
    {
      zoom: 16,
      center: pos,
    }
  );
  console.log("render MapWithMarkers");

  if (map) {
    // execute when map object is ready
    new google.maps.Marker({ position: pos, map });
  }

  return (
    <div className="harita">
      <div ref={ref} style={{ width: 1517, height: 800 }}></div>
    </div>
  );
};
export default ItemKonum;
