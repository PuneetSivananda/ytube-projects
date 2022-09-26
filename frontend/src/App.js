import Map, { Marker, Popup } from 'react-map-gl';
import { useEffect, useState } from "react"
import { Room, Star } from "@material-ui/icons"
import "./App.css"
function App() {
  const [showPopup, setShowPopup] = useState(false)
  const [pins, setPins] = useState([])
  const [currentPlaceId, setCurrentPlaceId] = useState(null)
  const [viewport, setViewport] = useState({
    latitude: 46,
    longitude: 17,
    zoom: 4
  })

  useEffect(() => {
    const getPins = async () => {
      try {
        const response = await fetch("/pins").then(response => response.json())
        setPins(response)
      } catch (error) {
        console.log(error)
      }
    }
    getPins()
  }, [])
  const handleMarkerClick = (id) => {
    setCurrentPlaceId(id)
  }
  console.log(pins)
  return (<Map
    onMove={(nextViewport) => setViewport(nextViewport)}
    style={{ width: "100vw", height: "100vh" }}
    initialViewState={viewport}
    mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
    // mapStyle="mapbox://styles/mapbox/streets-v9"
    mapStyle="mapbox://styles/safak/cknndpyfq268f17p53nmpwira"
  >
    {pins.map(p => (<>
      <Marker
        latitude={p.lat}
        longitude={p.lng}
        offsetLeft={-20}
        offsetRight={-10}
        key={p._id}
      >
        <Room
          key={p._id}
          onClick={() => handleMarkerClick(p._id)}
          style={{
            fontSize: viewport.zoom * 7,
            color: "slateblue"
          }} />
      </Marker>
      {p._id == currentPlaceId &&
        <Popup
          key={p._id}
          latitude={p.lat}
          longitude={p.lng}
          anchor="left"
          closeButton={true}
          closeOnClick={false}
        >
          <div className='card' key={p._id}>
            <label>Place:</label>
            <h4 className='place'>{p.title}</h4>
            <label>Review:</label>
            <p className='desc'>{p.desc}</p>
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
              Created by <b>{p.username}</b>
            </span>
            <span className='date'>
              1 Hour Ago
            </span>
          </div>
        </Popup>
      }
    </>))
    }
  </Map >
  );
}

export default App;
