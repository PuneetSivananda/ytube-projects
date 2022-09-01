import Map from 'react-map-gl';
import { useState } from "react"

function App() {
  const [viewport, setViewport] = useState({
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 8
  })
  return (
    <div>
      <Map
        style={{ width: "100vw", height: "100vh" }}
        initialViewState={viewport}
        mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        mapStyle="mapbox://styles/mapbox/dark-v10"
      />
    </div>
  );
}

export default App;
