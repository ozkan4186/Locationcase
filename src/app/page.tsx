"use client";

import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import Map from "@/components/Map";
import List from "@/components/List"; // List bileşeninin doğru şekilde içeri aktarıldığından emin olun
import { Flex } from "@chakra-ui/react";

const places: Place[] = [
  { name: "özkan" },
  { name: "özkan" },
  { name: "özkan" },
  { name: "özkan" },
  { name: "özkan" },
];
interface Place {
  name: string;
}

interface Coordinates {
  lat: number;
  lng: number;
}

const Home: React.FC = () => {
  const [coordinates, setCoordinates] = useState<Coordinates>({});
  const [ratings, setRatings] = useState<string>("");
  const [Type, setType] = useState<string>(""); // Type değişkeninin türünü belirtmek önemlidir
  const [isLoading, setIsLoading] = useState<boolean>(true);
  useEffect(() => {
    // get the users current location on intial login

    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        console.log({ latitude, longitude });
        setCoordinates({ lat: latitude, lng: longitude });
      }
    );
  }, []);

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
      <Header
        setType={setType}
        setRatings={setRatings}
        setCoordinates={setCoordinates}
      />

      <List places={places} isLoading={isLoading} />
      <Map coordinates={coordinates} setCoordinates={setCoordinates} />
    </Flex>
  );
};

export default Home;
