"use client"


import { useState } from "react";
import Header from "@/components/Header";
import List from "@/components/List";
import Map from "@/components/Map";
import PlaceDetail from "@/components/PlaceDetail";
import { Flex } from "@chakra-ui/react";

interface Coordinates {
  lat: number;
  lng: number;
}
interface MapProps {
  coordinates: Coordinates;
  setCoordinates: React.Dispatch<React.SetStateAction<Coordinates>>;
}


export default function Home() {
  const [coordinates, setCoordinates] = useState<Coordinates>({
    lat: 0,
    lng: 0,
  });

  return (
    <Flex
      justifyContent={"center"}
      alignItems={"center"}
      width={"100vw"}
      height={"100vh"}
      maxWidth={"100vw"}
      maxHeight={"100vh"}
      position={"relative"}
    >
      {/* <Header /> */}

      {/* <List /> */}
      <Map coordinates={coordinates} setCoordinates={setCoordinates} />
    </Flex>
  );
}
