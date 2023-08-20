import { Box } from "@chakra-ui/react";
import React from "react";
import GoogleMapReact, { Coords } from "google-map-react";

interface MapProps {
  coordinates: Coords;
  setCoordinates: React.Dispatch<React.SetStateAction<Coords>>;
  setBounds: React.Dispatch<React.SetStateAction<{ sw?: Coords; ne?: Coords }>>;
}

const Map: React.FC<MapProps> = ({
  coordinates,
  setCoordinates,
  setBounds,
}) => {
  return (
    <Box width="full" height="full">
      <GoogleMapReact
        // bootstrapURLKeys={{}}
        defaultCenter={coordinates}
        defaultZoom={10}
        center={coordinates}
        margin={[50, 50, 50, 50]}
        options={{}}
        onChange={(e) => {
   setCoordinates({ lat: e.center.lat, lng: e.center.lng });
   setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
        onChildClick={() => {
          
        }}
      ></GoogleMapReact>
    </Box>
  );
};

export default Map;
