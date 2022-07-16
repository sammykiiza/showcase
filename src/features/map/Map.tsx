import React from 'react'
import MainLayout from '../Layouts/MainLayout'
import NavBar from '../menus/NavBar'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import './styles.css'

function Map() {
  return (
    <>
      <MainLayout>
      <NavBar title='Map'/>
        <div className='leaflet-container lg:-ml-4 md:-mx-2 sm:mx-[2%] mt-2 rounded-lg drop-shadow-lg shadow-black'>
          <MapContainer
            center={[-15.4245, 28.3197]}  
            zoom={13}
            scrollWheelZoom={true}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[-15.4245, 28.3197]}>
              <Popup>
                Zambia.
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </MainLayout>
    </>
  )
}

export default Map