import Map, { Marker, Popup } from 'react-map-gl';
import { useState } from "react"
import { Room, Star } from "@material-ui/icons"
import "./App.css"
function App() {
  const [viewport, setViewport] = useState({
    latitude: 46,
    longitude: 17,
    zoom: 4
  })
  const [showPopup, setShowPopup] = useState(true)
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
    {showPopup && (
      <Popup
        latitude={48.8584}
        longitude={2.2945}
        anchor="left"
        onClick={() => setShowPopup(true)}
        onClose={() => setShowPopup(false)}
      >
        <div className='card'>
          <label>Place:</label>
          <h4 className='place'>Eiffel Tower</h4>
          <label>Review:</label>
          <p className='desc'>Beautiful Place, I liked it!</p>
          <label>Rating:</label>
          <div className='stars'>
            <Star className='star' />
            <Star className='star' />
            <Star className='star' />
            <Star className='star' />
            <Star className='star' />
          </div>
          <label>Information: </label>
          <span className='username'>
            Created by <b>Puneet</b>
          </span>
          <span className='date'>
            1 Hour Ago
          </span>
        </div>
      </Popup>)}
  </Map>
  );
}

export default App;
