/* eslint-disable @next/next/link-passhref */
import React, { useEffect, useState } from "react";
import tw from "tailwind-styled-components";
import Map from "./components/Map";
import { useRouter } from "next/router";
import RideSelector from "./components/RideSelector";
import Link from "next/link";

const Confirm = () => {
  const router = useRouter();
  const { pickup, dropoff } = router.query;

  const [pickUpCoordinates, setPickUpCoordinates] = useState();
  const [dropOffCoordinates, setDropOffCoordinates] = useState();

  const getPickupCoordinates = (pickup) => {
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${
        pickup ? pickup.toUpperCase() : pickup
      }.json?` +
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
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${
        dropoff ? dropoff.toUpperCase() : dropoff
      }.json?` +
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
      <ButtonContainer>
        <Link href="/search">
          <BackButton src="https://img.icons8.com/ios-filled/50/000000/left.png" />
        </Link>
      </ButtonContainer>
      <Map
        pickUpCoordinates={pickUpCoordinates}
        dropOffCoordinates={dropOffCoordinates}
      />
      <RideContainer>
        <RideSelector />
        <ConfirmButtonContainer>
          <ConfirmButton>Confirm UberX</ConfirmButton>
        </ConfirmButtonContainer>
      </RideContainer>
    </Wrapper>
  );
};

export default Confirm;

const Wrapper = tw.div`
    flex h-screen flex-col
`;
const ButtonContainer = tw.div`
  bg-white flex 
`;
const BackButton = tw.img`
  h-12 cursor-pointer
`;
const RideContainer = tw.div`
    flex-1 flex flex-col h-1/2
`;

const ConfirmButtonContainer = tw.div`
  border-t-2
`;
const ConfirmButton = tw.div`
bg-black text-white m-4 py-3 text-center text-xl cursor-pointer
`;
