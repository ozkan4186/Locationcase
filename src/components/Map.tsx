import { Box } from "@chakra-ui/react";
import React from "react";
import GoogleMapReact from "google-map-react";

const Map: React.FC = () => {
  return (
    <Box width="full" height="full">
      <GoogleMapReact>{/* Harita içeriği buraya gelecek */}</GoogleMapReact>
    </Box>
  );
};

export default Map;
