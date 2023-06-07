# Demo

![walkthrough](walkthrough.gif)

# Feature

- Input validation - Origin & Destination inputs should fetch location from Google maps autosuggest. Users should not be able to add anything else. (DONE)
- The app takes location inputs of "Origin" & "Destination" and then plots the route on maps along with distance. (DONE)
- There’s an option for users to add multiple stops on the route - when a user adds a stop, it becomes a waypoint between Origin & Destination. Adding stops is optional
- additional (optional) functions implemented, e.g., ETA, delete stops, select transit option (car/bike/walk), etc

# Implemented

- Used Google Maps API and @react-google-maps/api
- implemented autocorrect from scratch only with Gmaps API
- implemented routes with @react-google-maps/api

# TODO

- add support for changing means of transport(right now shows results for DRIVING)
- enable dynamic form for adding more stop points
- add support for alternative routes
