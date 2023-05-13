import { DirectionsService } from "@react-google-maps/api";
import { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDistance } from "../../redux/journeyDetailSlice";

const MapDirectionService = memo(({ setRoute }) => {
  const [origin, destination, waypoints] = useSelector((state) => [
    state.journeyDetail.origin,
    state.journeyDetail.destination,
    state.journeyDetail.waypoints,
  ]);
  const dispatch = useDispatch();
  return (
    origin !== "" &&
    destination !== "" && (
      <DirectionsService
        // required
        options={{
          destination: destination,
          origin: origin,
          waypoints: waypoints,
          travelMode: "DRIVING",
        }}
        // required
        callback={(response) => {
          if (response !== null) {
            if (response.status === "OK") {
              const totalDistance = response.routes[0].legs.reduce(
                (accumulator, currentValue) =>
                  accumulator + currentValue.distance.value,
                0
              );
              dispatch(setDistance(totalDistance));
              setRoute(response);
            } else if (response.status === "ZERO_RESULTS") {
              alert("No result found");
            } else {
              console.log("response: ", response);
            }
          }
        }}
        // optional
        onLoad={(directionsService) => {
          console.log("DirectionsService loaded ");
        }}
        // optional
        onUnmount={(directionsService) => {
          console.log("DirectionsService onUnmounted");
        }}
      />
    )
  );
});

export default MapDirectionService;
