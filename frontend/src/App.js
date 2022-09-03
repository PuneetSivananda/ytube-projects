import Map, { Marker } from 'react-map-gl';
import { useState } from "react"
import { Room } from "@material-ui/icons"

function App() {
  const [viewport, setViewport] = useState({
    latitude: 46,
    longitude: 17,
    zoom: 4
  })
  return (<Map
    onMove={(nextViewport) => setViewport(nextViewport)}
    style={{ width: "100vw", height: "100vh" }}
    initialViewState={viewport}
    mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
    // mapStyle="mapbox://styles/mapbox/streets-v9"
    mapStyle="mapbox://styles/safak/cknndpyfq268f17p53nmpwira"
  >
    <Marker
      latitude={48.8584}
      longitude={2.2945}
      offsetLeft={-20}
      offsetRight={-10}
    >
      <Room style={{
        fontSize: viewport.zoom * 7,
        color: "slateblue"
      }} />
    </Marker>
  </Map>
  );
}

export default App;
