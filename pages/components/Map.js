import React from "react";
import tw from "tailwind-styled-components";
import mapboxgl from "!mapbox-gl";
import { useEffect } from "react";

mapboxgl.accessToken =
  "pk.eyJ1IjoiZmFoaW00MyIsImEiOiJja3c1aXF2ZGgyYzh5MzFsdGg0YmRneGVjIn0.BrFzKC_JpXv4EZNHwpK6mw";

const Map = (props) => {
  const { pickUpCoordinates, dropOffCoordinates } = props;
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      // style: "mapbox://styles/mapbox/streets-v11",
      style: "mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph",
      center: [90.412521, 23.810331],
      // center: [-99.29011, 39.39172],
      zoom: 8,
    });
    if (pickUpCoordinates) {
      addToMap(map, pickUpCoordinates);
    }
    if (dropOffCoordinates) {
      addToMap(map, dropOffCoordinates);
    }
    if (pickUpCoordinates && dropOffCoordinates) {
      map.fitBounds([pickUpCoordinates, dropOffCoordinates], {
        padding: 60,
      });
    }
  }, [pickUpCoordinates, dropOffCoordinates]);

  const addToMap = (map, coordinates) => {
    const marker1 = new mapboxgl.Marker().setLngLat(coordinates).addTo(map);
  };
  return <Wrapper id="map"></Wrapper>;
};

const Wrapper = tw.div`
    flex-1 h-1/2
`;

export default Map;
