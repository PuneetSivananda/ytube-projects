import Map, { Marker, Popup } from 'react-map-gl';
import { useEffect, useState } from "react"
import { Room, Star } from "@material-ui/icons"
import "./App.css"
import { format } from "timeago.js"

function App() {
  const currentUser = "John"
  const [showPopup, setShowPopup] = useState(false)
  const [pins, setPins] = useState([])
  const [currentPlaceId, setCurrentPlaceId] = useState(null)
  const [newPlace, setNewPlace] = useState(null)
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

  const handleMarkerClick = (id, lat, lng) => {
    setViewport({ ...viewport, latitude: lat, longitude: lng })
    setCurrentPlaceId(id)
    console.log(viewport)
  }

  const setNewView = (nextViewport) => {
    setViewport({
      ...viewport,
      latitude: nextViewport.viewState.latitude,
      longitude: nextViewport.viewState.longitude
    })
  }

  const handleAddClick = (e) => {
    const { lng, lat } = e.lngLat
    setNewPlace({
      lat,
      lng
    })
    // setViewport({ ...viewport, latitude: lat, longitude: lng })
  }

  return (<Map
    viewState={viewport}
    onMove={(nextViewport) => setNewView(nextViewport)}
    style={{ width: "100vw", height: "100vh" }}
    initialViewState={viewport}
    mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
    // mapStyle="mapbox://styles/mapbox/streets-v9"
    mapStyle="mapbox://styles/safak/cknndpyfq268f17p53nmpwira"
    onDblClick={handleAddClick}
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
          onClick={() => handleMarkerClick(p._id, p.lat, p.lng)}
          style={{
            fontSize: viewport?.zoom * 7,
            color: p.username === currentUser ? "tomato" : "slateblue",
            cursor: "pointer"
          }} />
      </Marker>
      {p._id == currentPlaceId && (
        <Popup
          latitude={p.lat}
          longitude={p.lng}
          anchor="left"
          closeButton={true}
          closeOnClick={false}
          onClose={() => setCurrentPlaceId(null)}
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
              {format(p.createdAt)}
            </span>
          </div>
        </Popup>)}
    </>
    ))}
    {newPlace && (
      <Popup
        latitude={newPlace.lat}
        longitude={newPlace.lng}
        anchor="left"
        closeButton={true}
        closeOnClick={false}
        onClose={() => setNewPlace(null)}
      >Hello</Popup>
    )}
  </Map >
  );
}

export default App;
