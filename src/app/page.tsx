"use client";
import Header from "@/components/Header";
import List from "@/components/List";
import Map from "@/components/Map";
import PlaceDetail from "@/components/PlaceDetail";
import { Flex } from "@chakra-ui/react";

export default function Home() {
  return <Flex 
   justifyContent={"center"}
   alignItems={"center"}
   width={"100vw"}
   height={"100vh"}
   maxWidth={"100vw"}
   maxHeight={"100vh"}
   position={"relative"}

  
  >
    {/* <Header/> */}

    {/* <List/> */}
    <Map/>
  </Flex>;
}
