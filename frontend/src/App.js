import Map, { Marker, Popup } from 'react-map-gl';
import { useEffect, useState } from "react"
import { Room, Star } from "@material-ui/icons"
import "./App.css"
import { format } from "timeago.js"
import Register from './components/Register';
import Login from './components/Login'

function App() {
  const [currentUser, setCurrentUser] = useState(null)
  const [pins, setPins] = useState([])
  const [currentPlaceId, setCurrentPlaceId] = useState(null)
  const [title, setTitle] = useState(null)
  const [description, setDescription] = useState(null)
  const [rating, setRating] = useState(0)
  const [newPlace, setNewPlace] = useState(null)
  const [showRegister, setShowRegister] = useState(false)
  const [showLogin, setShowLogin] = useState(false)
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
    setCurrentPlaceId(id)
    setViewport({ ...viewport, latitude: lat, longitude: lng })
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

  const handleSubmit = async (e) => {
    e.preventDefault()
    const newPin = {
      username: currentUser,
      title,
      desc: description,
      rating: parseInt(rating),
      lat: newPlace.lat,
      lng: newPlace.lng
    }
    try {
      const res = await fetch("/pins", {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newPin)
      })
      res.json().then(data => {
        setPins([...pins, data])
      })
      setNewPlace(null)
    } catch (e) {
      console.log(e)
    }
  }

  return (<div>
    <Map
      // viewState={viewport}
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
          offsetLeft={-viewport.zoom * 3.5}
          offsetRight={-viewport.zoom * 7}
        >
          <Room
            onClick={() => handleMarkerClick(p._id, p.lat, p.lng)}
            style={{
              fontSize: viewport?.zoom * 7,
              color: p.username === currentUser ? "tomato" : "slateblue",
              cursor: "pointer"
            }} />
        </Marker>
        {
          p._id === currentPlaceId && (
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
                  {Array(p.rating).fill(<Star className='star' />)}
                </div>
                <label>Information: </label>
                <span className='username'>
                  Created by <b>{p.username}</b>
                </span>
                <span className='date'>
                  {format(p.createdAt)}
                </span>
              </div>
            </Popup>)
        }
      </>
      ))
      }
      {
        newPlace && (
          <Popup
            latitude={newPlace.lat}
            longitude={newPlace.lng}
            anchor="left"
            closeButton={true}
            closeOnClick={false}
            onClose={() => setNewPlace(null)}
          >
            <div>
              <form onSubmit={handleSubmit}>
                <label>Title</label>
                <input placeholder='Enter a title' onChange={(e) => setTitle(e.target.value)} />
                <label>Review</label>
                <textarea placeholder='Say something about this place.' onChange={(e) => setDescription(e.target.value)} />
                <label>Rating</label>
                <select onChange={(e) => setRating(e.target.value)}>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
                <button className='submitButton' type='submit'>Add pin</button>
              </form>
            </div>
          </Popup>
        )
      }

    </Map>
    {currentUser ? (
      <button className='button logout'>Log out</button>
    ) : (
      <div className='buttons'>
        <button className='button login' onClick={() => setShowLogin(true)}>Log in</button>
        <button className='button register' onClick={() => setShowRegister(true)}>Register</button>
      </div>
    )}
    {showRegister &&
      <Register setShowRegister={setShowRegister(false)} />
    }
    {showLogin &&
      <Login setShowLogin={setShowLogin} />
    }
    <Register />
  </div>
  );
}

export default App;
