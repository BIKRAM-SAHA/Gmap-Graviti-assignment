import React, { useRef, useState } from "react";
import "./MapAutocomplete.css";
import markerIcon from "../../asset/markerIcon";

function MapAutocomplete({ setPlaceState, classNames }) {
  const [suggestions, setSuggestions] = useState([]);
  const inputRef = useRef();

  const getPredictions = async (e) => {
    // eslint-disable-next-line no-undef
    const autocompleteService = new google.maps.places.AutocompleteService();
    const response = await autocompleteService.getPlacePredictions({
      input: e,
    });
    return response.predictions;
  };

  return (
    <div className="autocomplete">
      <input
        type="text"
        className={classNames}
        ref={inputRef}
        onChange={async (e) => {
          if (e.target.value === "") {
            setSuggestions([]);
            return;
          }
          const predictions = await getPredictions(e.target.value);
          setSuggestions([...predictions]);
        }}
        onBlur={(e) => {
          e.target.value = suggestions[0]?.description || "";
          setPlaceState(suggestions[0]?.description || "");
          setSuggestions([]);
        }}
      />
      <div className="suggestions">
        {suggestions.map((suggestion, index) => {
          return (
            <button
              key={index}
              className="suggestion"
              onClick={(e) => {
                e.preventDefault();
                inputRef.current.value = suggestion.description;
                setPlaceState(suggestion.description);
                setSuggestions([]);
              }}
            >
              {markerIcon} {suggestion.description}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default MapAutocomplete;
