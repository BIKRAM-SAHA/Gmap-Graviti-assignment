import { useState } from "react";
import { GoogleMap } from "@react-google-maps/api";
import MapDirectionRenderer from "./MapDirectionRenderer";
import MapDirectionService from "./MapDirectionService";

const center = { lat: 0, lng: 0 };

function Map() {
  const [route, setRoute] = useState(null);
  return (
    <GoogleMap
      zoom={0}
      center={center}
      mapContainerClassName="map"
      options={{
        zoomControl: false,
        streetViewControl: false,
        mapTypeControl: false,
        fullscreenControl: false,
      }}
    >
      <MapDirectionService setRoute={setRoute} />
      <MapDirectionRenderer route={route} />
    </GoogleMap>
  );
}

export default Map;
