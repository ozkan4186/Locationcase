import { Box } from "@chakra-ui/react";
import React from "react";
import GoogleMapReact, { Coords } from "google-map-react";

interface MapProps {
  coordinates: Coords;
  setCoordinates: React.Dispatch<React.SetStateAction<Coords>>;
}

const Map: React.FC<MapProps> = ({ coordinates, setCoordinates }) => {
  return (
    <Box width="full" height="full">
      <GoogleMapReact
        bootstrapURLKeys={{}}
        defaultCenter={coordinates}
        defaultZoom={10}
        center={coordinates}
        margin={[50, 50, 50, 50]}
        options={{}}
        onChange={() => {}}
        onChildClick={() => {}}
      >
        {/* Harita içeriği buraya gelecek */}
      </GoogleMapReact>
    </Box>
  );
};

export default Map;
