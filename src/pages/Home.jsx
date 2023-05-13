import { useLoadScript } from "@react-google-maps/api";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import MapAutocomplete from "../components/Map/MapAutocomplete";
import Map from "../components/Map/Map";
import add from "../asset/add";
import { setLocation } from "../redux/journeyDetailSlice";
import "../styles/Home.css";

const loadScriptOptions = {
  googleMapsApiKey: process.env.REACT_APP_GMAP_API_KEY,
  libraries: ["places"],
};

function Home() {
  const [originPlace, setOriginPlace] = useState("");
  const [stopPlace, setStopPlace] = useState("");
  const [destinationPlace, setDestinationPlace] = useState("");

  const journeyDetail = useSelector((state) => state.journeyDetail);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const waypoints = stopPlace === "" ? [] : [{ location: stopPlace }];
    dispatch(
      setLocation({
        origin: originPlace,
        destination: destinationPlace,
        waypoints: waypoints,
      })
    );
  };

  const { isLoaded } = useLoadScript(loadScriptOptions);
  if (!isLoaded) return <div>Loading...</div>;

  return (
    <div className="home">
      <p className="title">Let's calculate distance from Google maps</p>

      <Map />

      <form>
        <div className="inputs">
          <div className="form-group">
            <label htmlFor="origin" className="form-label">
              Origin
            </label>
            <MapAutocomplete
              setPlaceState={setOriginPlace}
              classNames="form-control input-origin"
            />
          </div>
          <div className="form-group">
            <label htmlFor="origin" className="form-label">
              Stop
            </label>
            <MapAutocomplete
              setPlaceState={setStopPlace}
              classNames="form-control  input-stop"
            />
            <div className="form-text">{add} Add another stop</div>
          </div>
          <div className="form-group">
            <label htmlFor="origin" className="form-label">
              Destination
            </label>
            <MapAutocomplete
              setPlaceState={setDestinationPlace}
              classNames="form-control input-destination"
            />
          </div>
        </div>
        <button type="submit" className="submit" onClick={handleSubmit}>
          Calculate
        </button>
      </form>
      {journeyDetail.distance === 0 ? (
        ""
      ) : (
        <div className="result">
          <h2>
            <span className="text-bold">Distance</span>
            <span className="text-highlight">
              {(journeyDetail.distance / 1000).toFixed(3)} kms
            </span>
          </h2>
          <div>
            The distance between
            <span className="text-bold"> {originPlace} </span>
            and
            <span className="text-bold"> {destinationPlace} </span>via the
            seleted route is{" "}
            <span className="text-bold">
              {(journeyDetail.distance / 1000).toFixed(3)} kms
            </span>
            .
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
