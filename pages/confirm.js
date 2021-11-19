import React, { useEffect, useState } from "react";
import tw from "tailwind-styled-components";
import Map from "./components/Map";
import { useRouter } from "next/router";

const Confirm = () => {
  const router = useRouter();
  const { pickup, dropoff } = router.query;

  const [pickUpCoordinates, setPickUpCoordinates] = useState();
  const [dropOffCoordinates, setDropOffCoordinates] = useState();

  const getPickupCoordinates = (pickup) => {
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup.toUpperCase()}.json?` +
        new URLSearchParams({
          access_token:
            "pk.eyJ1IjoiZmFoaW00MyIsImEiOiJja3c1aXF2ZGgyYzh5MzFsdGg0YmRneGVjIn0.BrFzKC_JpXv4EZNHwpK6mw",
          limit: 1,
        })
    )
      .then((res) => res.json())
      .then((data) => {
        setPickUpCoordinates(data.features[0].center);
      });
  };

  const getDropOffCoordinates = (dropoff) => {
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff.toUpperCase()}.json?` +
        new URLSearchParams({
          access_token:
            "pk.eyJ1IjoiZmFoaW00MyIsImEiOiJja3c1aXF2ZGgyYzh5MzFsdGg0YmRneGVjIn0.BrFzKC_JpXv4EZNHwpK6mw",
          limit: 1,
        })
    )
      .then((res) => res.json())
      .then((data) => {
        setDropOffCoordinates(data.features[0].center);
      });
  };

  useEffect(() => {
    getPickupCoordinates(pickup);
    getDropOffCoordinates(dropoff);
  }, [pickup, dropoff]);
  return (
    <Wrapper>
      <Map
        pickUpCoordinates={pickUpCoordinates}
        dropOffCoordinates={dropOffCoordinates}
      />
      <RideContainer></RideContainer>
    </Wrapper>
  );
};

export default Confirm;

const Wrapper = tw.div`
    flex h-screen flex-col
`;
const RideContainer = tw.div`
    flex-1
`;
