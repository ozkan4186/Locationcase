'use client'

import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import Map from "@/components/Map";
import List from "@/components/List";
import { Flex } from "@chakra-ui/react";

interface Place {
  name: string;
  rating: number;
}

interface Coordinates {
  lat: number;
  lng: number;
}

const Home: React.FC = () => {
  const [coordinates, setCoordinates] = useState<Coordinates>({
    lat: 0,
    lng: 0,
  });
  const [ratings, setRatings] = useState<number | null>(null);
  const [type, setType] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [places, setPlaces] = useState<Place[]>([]);
  const [bounds, setBounds] = useState<{ sw?: Coordinates; ne?: Coordinates }>(
    {}
  );

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoordinates({ lat: latitude, lng: longitude });
      }
    );
  }, []);

  useEffect(() => {
    if (ratings !== null) {
      const filteredData = places.filter((place) => place.rating > ratings);
      // setFilteredPlaces(filteredData); // Eğer filteredPlaces kullanacaksanız, bu değişkeni tanımlamalısınız.
      console.log({ ratings });
    }
  }, [ratings, places]);

  useEffect(() => {
    setIsLoading(true);
    // getPlacesData fonksiyonunun kullanımını ve veri yapısını uygun şekilde güncelleyin.
    // getPlacesData fonksiyonunun ve veri yapısının nasıl olduğuna bağlı olarak bu bölümü uyarlayın.
    // getPlacesData(type, bounds?.sw, bounds?.ne).then((data) => {
    //   console.log(data);
    //   setPlaces(data);
    //   setIsLoading(false);
    // });

    // Örnek veri:
    const sampleData: Place[] = [
      { name: "Özkan 1", rating: 4.5 },
      { name: "Özkan 2", rating: 3.7 },
      { name: "Özkan 3", rating: 4.9 },
    ];

    setPlaces(sampleData);
    setIsLoading(false);
  }, [type, coordinates, bounds]);

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
      <Map
        coordinates={coordinates}
        setCoordinates={setCoordinates}
        setBounds={setBounds}
      />
    </Flex>
  );
};

export default Home;
