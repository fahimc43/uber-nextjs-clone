import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import tw from "tailwind-styled-components";
import mapboxgl from "!mapbox-gl";
import { useEffect } from "react";

mapboxgl.accessToken =
  "pk.eyJ1IjoiZmFoaW00MyIsImEiOiJja3c1aXF2ZGgyYzh5MzFsdGg0YmRneGVjIn0.BrFzKC_JpXv4EZNHwpK6mw";

export default function Home() {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [90.412521, 23.810331],
      zoom: 10,
    });
  }, []);

  return (
    <Wrapper>
      <Map id="map"></Map>
      <ActionItems>Start</ActionItems>
    </Wrapper>
  );
}

const Wrapper = tw.div`
  flex flex-col bg-red-300 h-screen
`;

const Map = tw.div`
  bg-red-500 flex-1
`;

const ActionItems = tw.div`
  flex-1
`;
