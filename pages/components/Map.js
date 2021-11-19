import React from "react";
import tw from "tailwind-styled-components";
import mapboxgl from "!mapbox-gl";
import { useEffect } from "react";

mapboxgl.accessToken =
  "pk.eyJ1IjoiZmFoaW00MyIsImEiOiJja3c1aXF2ZGgyYzh5MzFsdGg0YmRneGVjIn0.BrFzKC_JpXv4EZNHwpK6mw";

const Map = () => {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      // style: "mapbox://styles/mapbox/streets-v11",
      style: "mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph",
      center: [90.412521, 23.810331],
      zoom: 10,
    });
  }, []);
  return <Wrapper id="map"></Wrapper>;
};

const Wrapper = tw.div`
    flex-1
`;

export default Map;
