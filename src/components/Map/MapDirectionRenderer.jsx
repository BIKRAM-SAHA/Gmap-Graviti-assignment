import React from "react";
import { DirectionsRenderer } from "@react-google-maps/api";

function MapDirectionRenderer({ route }) {
  return (
    route !== null && (
      <DirectionsRenderer
        // required
        options={{
          directions: route,
        }}
        // optional
        onLoad={(directionsRenderer) => {
          console.log("DirectionsRenderer loaded");
        }}
        // optional
        onUnmount={(directionsRenderer) => {
          console.log("DirectionsRenderer onUnmounted");
        }}
      />
    )
  );
}

export default MapDirectionRenderer;
